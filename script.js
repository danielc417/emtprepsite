import { db } from "./firebase-config.js?v=11";
import {
  chapters,
  questionBank,
  flashcards,
  medicalTerminologyQuestions,
  medicalTerminologyFlashcards,
  situationalScenarios
} from "./data/questions.js?v=11";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let selectedChapter = null;

let currentFlashcards = [];
let flashcardIndex = 0;
let flashcardShowingDefinition = false;
let selectedAnswerIndexes = new Set();
let lastQuizOrders = {};
let lastAnswerOrders = {};

let quizReview = [];
let currentScenarioQuestions = [];
let currentScenarioIndex = 0;
let scenarioScore = 0;
let scenarioReview = [];
let currentScenarioFilter = "All Mixed";
let scenarioMissedQuestions = JSON.parse(localStorage.getItem("emtScenarioMissedQuestions")) || [];
let scenarioScoreHistory = JSON.parse(localStorage.getItem("emtScenarioScoreHistory")) || [];
let currentTerminologyQuestions = [];
let currentTerminologyIndex = 0;
let terminologyScore = 0;
let terminologyReview = [];
let currentTerminologyCategory = "All Categories";
let terminologyMissedQuestions = JSON.parse(localStorage.getItem("emtTerminologyMissedQuestions")) || [];
let terminologyScoreHistory = JSON.parse(localStorage.getItem("emtTerminologyScoreHistory")) || [];

let stats = JSON.parse(localStorage.getItem("emtStats")) || {
  answered: 0,
  correct: 0
};
let todayStats = getTodayStats();

let missedQuestions = JSON.parse(localStorage.getItem("missedQuestions")) || [];
let username = localStorage.getItem("emtAuthUsername") || "";
let currentStreak = username
  ? Number(localStorage.getItem(getStreakKey(username))) || Number(localStorage.getItem("emtStreak")) || 0
  : 0;
let leaderboard = JSON.parse(localStorage.getItem("emtLeaderboard")) || [];
let weeklyLeaderboard = [];
let currentAuthAction = "login";
let selectedAvatar = "assets/avatars/star-of-life.svg";
let weeklyCorrectWeek = getWeekKey();
let weeklyCorrectCount = 0;
let weeklyRankingUnsubscribe = null;

const chapterList = document.getElementById("chapter-list");
const scenarioFilters = [
  { label: "All Mixed", type: "all", value: "all" },
  { label: "Chapter 6", type: "chapter", value: "Chapter 6" },
  { label: "Chapter 9", type: "chapter", value: "Chapter 9" },
  { label: "Chapter 10", type: "chapter", value: "Chapter 10" },
  { label: "Chapter 12", type: "chapter", value: "Chapter 12" },
  { label: "Chapter 15", type: "chapter", value: "Chapter 15" },
  { label: "Chapter 16", type: "chapter", value: "Chapter 16" },
  { label: "Anatomy/Physiology", type: "category", value: "Anatomy/Physiology" },
  { label: "Scene Size-Up", type: "category", value: "Scene Size-Up" },
  { label: "Airway", type: "category", value: "Airway" },
  { label: "Breathing", type: "category", value: "Breathing" },
  { label: "Circulation", type: "category", value: "Circulation" },
  { label: "Shock", type: "category", value: "Shock" },
  { label: "Cardiac", type: "category", value: "Cardiac Emergency" },
  { label: "Respiratory", type: "category", value: "Respiratory Emergency" },
  { label: "Primary Assessment", type: "category", value: "Primary Assessment" },
  { label: "Assessment", type: "categorySet", values: ["Assessment", "Primary Assessment"] },
  { label: "Medication Decision", type: "category", value: "Medication Decision" },
  { label: "Reassessment", type: "category", value: "Reassessment" },
  { label: "Transport Priority", type: "category", value: "Transport Priority" },
  { label: "Mixed Situational Scenarios", type: "chapter", value: "Mixed Situational Scenarios" }
];
const terminologyCategories = [
  "All Categories",
  "Word Roots",
  "Prefixes",
  "Suffixes",
  "Combining Forms",
  "Directional Terms",
  "Position Terms",
  "Movement Terms",
  "Abbreviations",
  "Acronyms",
  "Documentation Terms",
  "Respiratory Terms",
  "Cardiovascular Terms",
  "Shock/Perfusion Terms",
  "Assessment Terms"
];
const avatarOptions = [
  { path: "assets/avatars/star-of-life.svg", label: "Star of Life" },
  { path: "assets/avatars/med-bag.svg", label: "Medical Bag" },
  { path: "assets/avatars/ambulance.svg", label: "Ambulance" },
  { path: "assets/avatars/stethoscope.svg", label: "Stethoscope" },
  { path: "assets/avatars/clipboard.svg", label: "Clipboard" },
  { path: "assets/avatars/lungs.svg", label: "Lungs" },
  { path: "assets/avatars/heart-monitor.svg", label: "Heart Monitor" },
  { path: "assets/avatars/shield.svg", label: "EMS Shield" }
];

function setupUsername() {
  const modal = document.getElementById("username-modal");
  const form = document.getElementById("username-form");
  const input = document.getElementById("username-input");
  const passwordInput = document.getElementById("password-input");

  input.value = username || localStorage.getItem("emtUsername") || "";
  updateUsernameGreeting();

  if (!username) {
    showUsernameModal();
  } else {
    loadUserProgress();
  }

  form.querySelectorAll("[data-auth-action]").forEach((button) => {
    button.addEventListener("click", () => {
      currentAuthAction = button.dataset.authAction;
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    setLoginMessage("");

    const enteredUsername = input.value.trim();
    const enteredPassword = passwordInput.value;
    if (!enteredUsername || !enteredPassword) return;

    if (enteredPassword.length < 4) {
      setLoginMessage("Password must be at least 4 characters.");
      return;
    }

    const authSucceeded = currentAuthAction === "create"
      ? await createAccount(enteredUsername, enteredPassword)
      : await loginAccount(enteredUsername, enteredPassword);

    if (!authSucceeded) return;

    username = enteredUsername;
    localStorage.setItem("emtAuthUsername", username);
    localStorage.setItem("emtUsername", username);
    saveCurrentStreak();
    passwordInput.value = "";
    updateUsernameGreeting();
    updateStreak();
    updateLeaderboard();
    modal.classList.add("hidden");
  });

  document.getElementById("profile-menu").addEventListener("click", (event) => {
    if (event.target.id === "profile-menu") {
      closeProfileMenu();
    }
  });
}

function showUsernameModal() {
  const modal = document.getElementById("username-modal");
  const input = document.getElementById("username-input");
  const passwordInput = document.getElementById("password-input");

  input.value = username || localStorage.getItem("emtUsername") || "";
  passwordInput.value = "";
  setLoginMessage("");
  modal.classList.remove("hidden");
  input.focus();
}

async function createAccount(enteredUsername, enteredPassword) {
  try {
    const userRef = doc(db, "users", getUserId(enteredUsername));
    const snapshot = await getDoc(userRef);

    if (snapshot.exists()) {
      setLoginMessage("That username already exists. Try logging in.");
      return false;
    }

    const passwordHash = await hashPassword(enteredPassword);
    await setDoc(userRef, {
      username: enteredUsername,
      usernameLower: enteredUsername.toLowerCase(),
      passwordHash,
      avatar: selectedAvatar,
      stats,
      todayStats,
      missedQuestions,
      currentStreak,
      weeklyCorrectWeek: getWeekKey(),
      weeklyCorrectCount: 0,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });

    return true;
  } catch (error) {
    console.error("Could not create account.", error);
    setLoginMessage(`Could not create account: ${getErrorMessage(error)}`);
    return false;
  }
}

async function loginAccount(enteredUsername, enteredPassword) {
  try {
    const userRef = doc(db, "users", getUserId(enteredUsername));
    const snapshot = await getDoc(userRef);

    if (!snapshot.exists()) {
      setLoginMessage("No account found. Create an account first.");
      return false;
    }

    const passwordHash = await hashPassword(enteredPassword);
    const userData = snapshot.data();

    if (userData.passwordHash !== passwordHash) {
      setLoginMessage("Incorrect password.");
      return false;
    }

    loadProgressFromUserData(userData);
    return true;
  } catch (error) {
    console.error("Could not log in.", error);
    setLoginMessage(`Could not log in: ${getErrorMessage(error)}`);
    return false;
  }
}

async function loadUserProgress() {
  if (!username) return;

  try {
    const snapshot = await getDoc(doc(db, "users", getUserId(username)));
    if (!snapshot.exists()) return;

    loadProgressFromUserData(snapshot.data());
  } catch (error) {
    console.error("Could not load user progress.", error);
  }
}

function loadProgressFromUserData(userData) {
  stats = userData.stats || stats;
  todayStats = userData.todayStats?.date === getTodayKey()
    ? userData.todayStats
    : getTodayStats();
  missedQuestions = Array.isArray(userData.missedQuestions)
    ? userData.missedQuestions
    : [];
  currentStreak = Number(userData.currentStreak) || 0;
  selectedAvatar = getValidAvatarPath(userData.avatar);
  weeklyCorrectWeek = userData.weeklyCorrectWeek || getWeekKey();
  weeklyCorrectCount = weeklyCorrectWeek === getWeekKey()
    ? Number(userData.weeklyCorrectCount) || 0
    : 0;

  localStorage.setItem("emtStats", JSON.stringify(stats));
  localStorage.setItem("emtTodayStats", JSON.stringify(todayStats));
  localStorage.setItem("missedQuestions", JSON.stringify(missedQuestions));
  saveCurrentStreak();
  renderAvatarPicker();
  updateProfileAvatar();
  updateStats();
  updateStreak();
}

async function saveUserProgress() {
  if (!username) return;

  try {
    await setDoc(doc(db, "users", getUserId(username)), {
      username,
      usernameLower: username.toLowerCase(),
      stats,
      todayStats,
      missedQuestions,
      currentStreak,
      avatar: selectedAvatar,
      weeklyCorrectWeek,
      weeklyCorrectCount,
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch (error) {
    console.error("Could not save user progress.", error);
  }
}

function getStreakKey(name) {
  return `emtStreak:${name.trim().toLowerCase()}`;
}

function getUserId(name) {
  return encodeURIComponent(name.trim().toLowerCase());
}

async function hashPassword(password) {
  const encodedPassword = new TextEncoder().encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", encodedPassword);

  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function setLoginMessage(message) {
  const loginMessage = document.getElementById("login-message");
  if (!loginMessage) return;

  loginMessage.textContent = message;
}

function getErrorMessage(error) {
  if (error?.code === "permission-denied") {
    return "Firestore rules need to be updated and published.";
  }

  return error?.message || "check your connection and try again.";
}

function getTodayKey() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getTodayStats() {
  const savedStats = JSON.parse(localStorage.getItem("emtTodayStats")) || {};
  const todayKey = getTodayKey();

  if (savedStats.date === todayKey) {
    return savedStats;
  }

  return {
    date: todayKey,
    answered: 0,
    correct: 0,
    missed: 0
  };
}

function saveTodayStats() {
  localStorage.setItem("emtTodayStats", JSON.stringify(todayStats));
}

function saveCurrentStreak() {
  if (username) {
    localStorage.setItem(getStreakKey(username), currentStreak);
  }

  localStorage.setItem("emtStreak", currentStreak);
}

function updateUsernameGreeting() {
  const trigger = document.getElementById("profile-trigger");
  const greeting = document.getElementById("user-greeting");
  const profileName = document.getElementById("profile-menu-name");
  if (!trigger || !greeting) return;

  trigger.classList.toggle("hidden", !username);
  greeting.textContent = username ? `Welcome back, ${username}` : "";

  if (profileName) {
    profileName.textContent = username;
  }

  renderAvatarPicker();
  updateProfileAvatar();
}

function toggleProfileMenu() {
  const profileMenu = document.getElementById("profile-menu");
  if (!profileMenu || !username) return;

  profileMenu.classList.toggle("hidden");
}

function closeProfileMenu() {
  const profileMenu = document.getElementById("profile-menu");
  if (!profileMenu) return;

  profileMenu.classList.add("hidden");
}

function getValidAvatarPath(path) {
  return avatarOptions.some((avatar) => avatar.path === path)
    ? path
    : avatarOptions[0].path;
}

function renderAvatarPicker() {
  const picker = document.getElementById("avatar-picker");
  if (!picker) return;

  picker.innerHTML = avatarOptions.map((avatar) => {
    const isSelected = getValidAvatarPath(selectedAvatar) === avatar.path;

    return `
      <button
        class="avatar-option ${isSelected ? "selected" : ""}"
        type="button"
        onclick="selectAvatar('${avatar.path}')"
        aria-label="${escapeHtml(avatar.label)}"
      >
        <img src="${avatar.path}" alt="" />
      </button>
    `;
  }).join("");
}

function updateProfileAvatar() {
  const avatars = [
    document.getElementById("profile-avatar"),
    document.getElementById("profile-menu-avatar")
  ].filter(Boolean);

  const initials = username ? username.slice(0, 2).toUpperCase() : "?";
  const avatarPath = getValidAvatarPath(selectedAvatar);

  avatars.forEach((avatar) => {
    avatar.textContent = initials;
    avatar.classList.add("has-image");
    avatar.style.backgroundImage = `url(${avatarPath})`;
  });
}

async function selectAvatar(path) {
  if (!username) return;

  selectedAvatar = getValidAvatarPath(path);
  updateProfileAvatar();
  renderAvatarPicker();

  try {
    await setDoc(doc(db, "users", getUserId(username)), {
      username,
      usernameLower: username.toLowerCase(),
      avatar: selectedAvatar,
      weeklyCorrectWeek,
      weeklyCorrectCount,
      updatedAt: serverTimestamp()
    }, { merge: true });
    loadRanking();
  } catch (error) {
    console.error("Could not save avatar selection.", error);
  }
}

function logoutUser() {
  username = "";
  currentStreak = 0;
  selectedAvatar = avatarOptions[0].path;
  weeklyCorrectWeek = getWeekKey();
  weeklyCorrectCount = 0;
  localStorage.removeItem("emtAuthUsername");
  localStorage.removeItem("emtUsername");
  closeProfileMenu();
  updateUsernameGreeting();
  updateStreak();
  showUsernameModal();
}

function loadChapters() {
  chapterList.innerHTML = "";

  chapters.forEach((chapter) => {
    const card = document.createElement("div");
    card.className = "chapter-card";
    card.onclick = () => startChapterQuiz(chapter.id);

    const chapterQuestions = questionBank.filter((question) => {
      return question.chapter === chapter.id;
    });

    card.innerHTML = `
      <p>Chapter ${chapter.id} • ${chapterQuestions.length} questions</p>
      <h3>${chapter.title}</h3>
      <p>${chapter.description}</p>
    `;

    chapterList.appendChild(card);
  });

  const scenarioCard = document.createElement("div");
  scenarioCard.className = "chapter-card scenario-chapter-card";
  scenarioCard.onclick = () => startScenarioQuiz();
  scenarioCard.innerHTML = `
    <p>Chapters 6, 9, 10, 12, 15, 16 • 56 scenarios</p>
    <h3>Situational Scenarios</h3>
    <p>Real-call practice across airway, breathing, circulation, shock, assessment, respiratory, and cardiac emergencies.</p>
  `;

  chapterList.appendChild(scenarioCard);

  const terminologyCard = document.createElement("div");
  terminologyCard.className = "chapter-card";
  terminologyCard.onclick = showTerminologyMenu;
  terminologyCard.innerHTML = `
    <p>Master Tool • 75 questions</p>
    <h3>Medical Terminology</h3>
    <p>Roots, prefixes, suffixes, abbreviations, and positions.</p>
  `;

  chapterList.appendChild(terminologyCard);
}

function showScreen(screenId) {
  if (screenId === "quiz-screen" && currentQuestions.length === 0) {
    startQuickQuiz(10);
    return;
  }

  const screens = document.querySelectorAll(".screen");

  screens.forEach((screen) => {
    screen.classList.remove("active");
  });

  document.getElementById(screenId).classList.add("active");

  if (screenId === "missed-screen") {
    loadMissedQuestions();
  }

  if (screenId === "flashcards-screen") {
    loadFlashcards();
  }

  if (screenId === "home-screen") {
    updateStats();
    updateStreak();
  }

  if (screenId === "ranking-screen") {
    loadRanking();
    loadWeeklyCorrectRanking();
  }
}

function startQuickQuiz(amount = 10) {
  selectedChapter = null;

  currentQuestions = prepareQuestionsForQuiz(questionBank, `quick-${amount}`, amount);

  startQuiz();
}

function startChapterQuiz(chapterId) {
  selectedChapter = chapterId;

  const chapterQuestions = questionBank.filter((question) => {
    return question.chapter === chapterId;
  });

  currentQuestions = prepareQuestionsForQuiz(chapterQuestions, `chapter-${chapterId}`);
  startQuiz();
}

function startQuiz() {
  currentIndex = 0;
  score = 0;
  quizReview = [];
  showScreen("quiz-screen");
  showQuestion();
}

function showQuestion() {
  const question = currentQuestions[currentIndex];
  selectedAnswerIndexes = new Set();
  const isMultiAnswer = Array.isArray(question.correct);

  document.getElementById("quiz-progress").textContent =
    `Question ${currentIndex + 1} of ${currentQuestions.length}`;

  document.getElementById("progress-fill").style.width =
    `${((currentIndex + 1) / currentQuestions.length) * 100}%`;

  document.getElementById("question-topic").textContent = question.topic;
  document.getElementById("question-text").textContent = question.question;

  const existingImage = document.getElementById("question-image");
  if (existingImage) {
    existingImage.remove();
  }

  if (question.image) {
    const image = document.createElement("img");
    image.id = "question-image";
    image.className = "question-image";
    image.src = question.image;
    image.alt = question.imageAlt || "";
    document.getElementById("question-text").after(image);
  }

  const answerOptions = document.getElementById("answer-options");
  answerOptions.innerHTML = "";

  document.getElementById("feedback-box").classList.add("hidden");

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = answer;
    button.onclick = () => {
      if (isMultiAnswer) {
        toggleMultiAnswer(index);
      } else {
        selectAnswer(index);
      }
    };
    answerOptions.appendChild(button);
  });

  if (isMultiAnswer) {
    const submitButton = document.createElement("button");
    submitButton.id = "submit-multi-answer";
    submitButton.className = "primary-btn hidden";
    submitButton.textContent = "Submit Answers";
    submitButton.onclick = submitMultiAnswer;
    answerOptions.appendChild(submitButton);
  }
}

function selectAnswer(selectedIndex) {
  gradeAnswer([selectedIndex]);
}

function toggleMultiAnswer(index) {
  const buttons = document.querySelectorAll(".answer-btn");
  const submitButton = document.getElementById("submit-multi-answer");

  if (selectedAnswerIndexes.has(index)) {
    selectedAnswerIndexes.delete(index);
    buttons[index].classList.remove("selected");
  } else {
    selectedAnswerIndexes.add(index);
    buttons[index].classList.add("selected");
  }

  submitButton.classList.toggle("hidden", selectedAnswerIndexes.size === 0);
}

function submitMultiAnswer() {
  gradeAnswer(Array.from(selectedAnswerIndexes));
}

function gradeAnswer(selectedIndexes) {
  const question = currentQuestions[currentIndex];
  const buttons = document.querySelectorAll(".answer-btn");
  const submitButton = document.getElementById("submit-multi-answer");
  const correctIndexes = Array.isArray(question.correct)
    ? question.correct
    : [question.correct];
  const isCorrect = sameAnswers(selectedIndexes, correctIndexes);

  quizReview.push({
    question: question.question,
    topic: question.topic,
    chapter: question.chapter,
    selectedAnswer: formatAnswers(question.answers, selectedIndexes),
    correctAnswer: formatAnswers(question.answers, correctIndexes),
    isCorrect,
    explanation: question.explanation
  });

  buttons.forEach((button) => {
    button.disabled = true;
  });

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.classList.add("hidden");
  }

  stats.answered++;
  todayStats.answered++;

  if (isCorrect) {
    score++;
    stats.correct++;
    todayStats.correct++;
    currentStreak++;
    updateLeaderboard();
    updateWeeklyCorrectLeaderboard();

    correctIndexes.forEach((index) => {
      buttons[index].classList.add("correct");
    });
    document.getElementById("feedback-title").textContent = "Correct";
  } else {
    currentStreak = 0;

    selectedIndexes.forEach((index) => {
      if (!correctIndexes.includes(index)) {
        buttons[index].classList.add("wrong");
      }
    });

    correctIndexes.forEach((index) => {
      buttons[index].classList.add("correct");
    });
    document.getElementById("feedback-title").textContent = "Not quite";

    saveMissedQuestion(question);
    todayStats.missed++;
  }

  localStorage.setItem("emtStats", JSON.stringify(stats));
  saveTodayStats();
  saveCurrentStreak();
  saveUserProgress();

  updateStats();
  updateStreak();

  document.getElementById("feedback-text").textContent = question.explanation;
  document.getElementById("feedback-box").classList.remove("hidden");
}

function sameAnswers(selectedIndexes, correctIndexes) {
  if (selectedIndexes.length !== correctIndexes.length) return false;

  const selected = [...selectedIndexes].sort((a, b) => a - b);
  const correct = [...correctIndexes].sort((a, b) => a - b);

  return selected.every((index, position) => index === correct[position]);
}

function formatAnswers(answers, indexes) {
  return [...indexes]
    .sort((a, b) => a - b)
    .map((index) => answers[index])
    .join("; ");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function saveMissedQuestion(question) {
  const alreadySaved = missedQuestions.some((missed) => {
    return missed.question === question.question;
  });

  if (!alreadySaved) {
    missedQuestions.push(question);
    localStorage.setItem("missedQuestions", JSON.stringify(missedQuestions));
  }
}

function loadMissedQuestions() {
  const missedScreen = document.getElementById("missed-screen");

  if (missedQuestions.length === 0) {
    missedScreen.innerHTML = `
      <div class="empty-card">
        <h2>Missed Questions</h2>
        <p>You have no missed questions yet. Take a quiz and missed answers will show up here.</p>
      </div>
    `;
    return;
  }

  missedScreen.innerHTML = `
    <h2 class="section-title">Missed Questions</h2>
    <div class="missed-list">
      ${missedQuestions.map((item) => `
        <div class="missed-card">
          <p class="missed-topic">Chapter ${item.chapter} • ${item.topic}</p>
          <h3>${item.question}</h3>
          <p><strong>Answer:</strong> ${formatAnswers(item.answers, Array.isArray(item.correct) ? item.correct : [item.correct])}</p>
          <p>${item.explanation}</p>
        </div>
      `).join("")}
    </div>

    <button class="secondary-btn" onclick="clearMissedQuestions()">
      Clear Missed Questions
    </button>
  `;
}

function clearMissedQuestions() {
  missedQuestions = [];
  localStorage.removeItem("missedQuestions");
  loadMissedQuestions();
  updateStats();
  saveUserProgress();
}

function nextQuestion() {
  currentIndex++;

  if (currentIndex < currentQuestions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  showScreen("results-screen");

  const percent = Math.round((score / currentQuestions.length) * 100);
  const missed = quizReview.filter((item) => !item.isCorrect);

  document.getElementById("result-score").textContent =
    `${score} out of ${currentQuestions.length} correct (${percent}%)`;

  let message = "";

  if (percent >= 90) {
    message = "Solid work. You’re looking strong on this section.";
  } else if (percent >= 70) {
    message = "Good job. Review the ones you missed and run it again.";
  } else {
    message = "Keep practicing. Focus on the explanations after each answer.";
  }

  document.getElementById("result-message").textContent = message;
  renderResultMissedSummary(missed);
}

function renderResultMissedSummary(missed) {
  const resultCard = document.querySelector("#results-screen .result-card");
  if (!resultCard) return;

  let summary = document.getElementById("result-missed-summary");
  if (!summary) {
    summary = document.createElement("div");
    summary.id = "result-missed-summary";
    summary.className = "result-missed-summary";
    document.getElementById("result-message").after(summary);
  }

  if (missed.length === 0) {
    summary.innerHTML = `
      <h3>No missed questions</h3>
      <p>You got every question right on this attempt.</p>
    `;
    return;
  }

  summary.innerHTML = `
    <h3>Missed Questions</h3>
    <div class="result-missed-list">
      ${missed.map((item) => `
        <div class="result-missed-item">
          <p>${escapeHtml(item.question)}</p>
          <span>${escapeHtml(item.correctAnswer)}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function restartQuiz() {
  if (selectedChapter) {
    startChapterQuiz(selectedChapter);
  } else {
    startQuickQuiz(currentQuestions.length);
  }
}

function goHome() {
  showScreen("home-screen");
}

function showScenarioMenu() {
  startScenarioQuiz();
}

function getScenarioFilter(label) {
  return scenarioFilters.find((filter) => filter.label === label) || scenarioFilters[0];
}

function getScenariosForFilter(filter) {
  if (filter.type === "all") {
    return situationalScenarios;
  }

  if (filter.type === "categorySet") {
    return situationalScenarios.filter((scenario) => {
      return filter.values.includes(scenario.category);
    });
  }

  return situationalScenarios.filter((scenario) => {
    return scenario[filter.type] === filter.value;
  });
}

function startScenarioQuiz(filterLabel = "All Mixed") {
  const filter = getScenarioFilter(filterLabel);
  const scenarioSet = getScenariosForFilter(filter);

  if (scenarioSet.length === 0) return;

  currentScenarioFilter = filter.label;
  currentScenarioQuestions = shuffleArray(scenarioSet);
  currentScenarioIndex = 0;
  scenarioScore = 0;
  scenarioReview = [];
  showScreen("scenario-quiz-screen");
  showScenarioQuestion();
}

function showScenarioQuestion() {
  const scenario = currentScenarioQuestions[currentScenarioIndex];
  const answerOptions = document.getElementById("scenario-answer-options");
  if (!scenario || !answerOptions) return;

  document.getElementById("scenario-progress").textContent =
    `Scenario ${currentScenarioIndex + 1} of ${currentScenarioQuestions.length}`;
  document.getElementById("scenario-progress-fill").style.width =
    `${((currentScenarioIndex + 1) / currentScenarioQuestions.length) * 100}%`;
  document.getElementById("scenario-meta").textContent =
    `${scenario.chapter} • ${scenario.category}`;
  document.getElementById("scenario-text").textContent = scenario.scenario;
  document.getElementById("scenario-question-text").textContent = scenario.question;
  document.getElementById("scenario-feedback-box").classList.add("hidden");

  answerOptions.innerHTML = "";
  scenario.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = option;
    button.onclick = () => selectScenarioAnswer(option);
    answerOptions.appendChild(button);
  });
}

function selectScenarioAnswer(selectedAnswer) {
  const scenario = currentScenarioQuestions[currentScenarioIndex];
  const buttons = document.querySelectorAll("#scenario-answer-options .answer-btn");
  const isCorrect = selectedAnswer === scenario.answer;

  scenarioReview.push({
    ...scenario,
    selectedAnswer,
    isCorrect
  });

  if (isCorrect) {
    scenarioScore++;
  } else {
    saveMissedScenario({
      ...scenario,
      selectedAnswer
    });
  }

  buttons.forEach((button) => {
    button.disabled = true;
    if (button.textContent === scenario.answer) {
      button.classList.add("correct");
    } else if (button.textContent === selectedAnswer) {
      button.classList.add("wrong");
    }
  });

  document.getElementById("scenario-feedback-title").textContent = isCorrect ? "Correct" : "Not quite";
  document.getElementById("scenario-feedback-text").textContent = scenario.explanation;
  document.getElementById("scenario-learning-point").innerHTML =
    `<strong>Learning point:</strong> ${escapeHtml(scenario.learningPoint)}`;
  document.getElementById("scenario-feedback-box").classList.remove("hidden");
}

function saveMissedScenario(scenario) {
  const existingIndex = scenarioMissedQuestions.findIndex((item) => item.id === scenario.id);

  if (existingIndex >= 0) {
    scenarioMissedQuestions[existingIndex] = scenario;
  } else {
    scenarioMissedQuestions.push(scenario);
  }

  localStorage.setItem("emtScenarioMissedQuestions", JSON.stringify(scenarioMissedQuestions));
}

function nextScenarioQuestion() {
  currentScenarioIndex++;

  if (currentScenarioIndex < currentScenarioQuestions.length) {
    showScenarioQuestion();
  } else {
    showScenarioResults();
  }
}

function showScenarioResults() {
  const percent = Math.round((scenarioScore / currentScenarioQuestions.length) * 100);
  const missed = scenarioReview.filter((item) => !item.isCorrect);
  const weakCategories = getWeakScenarioGroups(missed, "category");
  const weakChapters = getWeakScenarioGroups(missed, "chapter");

  scenarioScoreHistory.push({
    filter: currentScenarioFilter,
    score: scenarioScore,
    total: currentScenarioQuestions.length,
    percent,
    missedCount: missed.length,
    weakCategories,
    weakChapters,
    completedAt: new Date().toISOString()
  });
  scenarioScoreHistory = scenarioScoreHistory.slice(-25);
  localStorage.setItem("emtScenarioScoreHistory", JSON.stringify(scenarioScoreHistory));

  document.getElementById("scenario-result-score").textContent =
    `${scenarioScore} out of ${currentScenarioQuestions.length} correct (${percent}%)`;
  document.getElementById("scenario-result-message").textContent =
    missed.length === 0
      ? "Clean run. Your scenario decision-making looked sharp."
      : "Review the missed calls, then retry the weakest area.";

  renderScenarioWeakSummary(missed, weakCategories, weakChapters);
  showScreen("scenario-results-screen");
}

function getWeakScenarioGroups(items, key) {
  const counts = new Map();

  items.forEach((item) => {
    counts.set(item[key], (counts.get(item[key]) || 0) + 1);
  });

  return Array.from(counts.entries())
    .sort((first, second) => second[1] - first[1])
    .map(([label, count]) => ({ label, count }));
}

function renderScenarioWeakSummary(missed, weakCategories, weakChapters) {
  const summary = document.getElementById("scenario-weak-summary");
  if (!summary) return;

  if (missed.length === 0) {
    summary.innerHTML = `
      <h3>No weak categories</h3>
      <p>You did not miss any scenario questions on this attempt.</p>
    `;
    return;
  }

  summary.innerHTML = `
    <h3>Missed Questions: ${missed.length}</h3>
    <p><strong>Weak categories:</strong> ${escapeHtml(formatWeakScenarioGroups(weakCategories))}</p>
    <p><strong>Weak chapters:</strong> ${escapeHtml(formatWeakScenarioGroups(weakChapters))}</p>
    <div class="result-missed-list">
      ${missed.map((item) => `
        <div class="result-missed-item">
          <p>${escapeHtml(item.question)}</p>
          <span>${escapeHtml(item.chapter)} • ${escapeHtml(item.category)}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function formatWeakScenarioGroups(groups) {
  if (groups.length === 0) return "None";

  return groups
    .slice(0, 3)
    .map((group) => `${group.label} (${group.count})`)
    .join(", ");
}

function reviewMissedScenarios() {
  const list = document.getElementById("scenario-missed-list");
  if (!list) return;

  showScreen("scenario-missed-screen");

  if (scenarioMissedQuestions.length === 0) {
    list.innerHTML = `
      <div class="empty-card">
        <h2>No missed scenarios</h2>
        <p>Missed scenario questions will appear here after you take a scenario quiz.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = scenarioMissedQuestions.map((item) => `
    <div class="review-card review-wrong">
      <p class="review-topic">${escapeHtml(item.chapter)} • ${escapeHtml(item.category)}</p>
      <h3>${escapeHtml(item.scenario)}</h3>
      <p><strong>Question:</strong> ${escapeHtml(item.question)}</p>
      <p><strong>Your answer:</strong> ${escapeHtml(item.selectedAnswer || "Not recorded")}</p>
      <p><strong>Correct answer:</strong> ${escapeHtml(item.answer)}</p>
      <p>${escapeHtml(item.explanation)}</p>
      <p><strong>Learning point:</strong> ${escapeHtml(item.learningPoint)}</p>
    </div>
  `).join("");
}

function retryWeakestScenarioCategory() {
  const latest = scenarioScoreHistory[scenarioScoreHistory.length - 1];
  const weakest = latest?.weakCategories?.[0]?.label;

  if (!weakest) {
    startScenarioQuiz("All Mixed");
    return;
  }

  const matchingFilter = scenarioFilters.find((filter) => filter.value === weakest || filter.label === weakest);
  startScenarioQuiz(matchingFilter?.label || "All Mixed");
}

function showTerminologyMenu() {
  showScreen("terminology-menu-screen");
  showTerminologyQuizSetup();
}

function showTerminologyQuizSetup() {
  const panel = document.getElementById("terminology-content-panel");
  if (!panel) return;

  panel.innerHTML = `
    <h3>Choose a Category</h3>
    <div class="scenario-filter-list">
      ${terminologyCategories.map((category) => {
        const count = getTerminologyQuestions(category).length;
        return `
          <button class="scenario-filter-btn" onclick="startTerminologyQuiz('${escapeHtml(category)}')" type="button">
            <span>${escapeHtml(category)}</span>
            <small>${count} questions</small>
          </button>
        `;
      }).join("")}
    </div>
    <div class="scenario-actions">
      <button class="secondary-btn" onclick="reviewMissedTerminology()">Review Missed Terminology</button>
      <button class="secondary-btn" onclick="retryWeakestTerminologyCategory()">Retry Weakest Category</button>
    </div>
  `;
}

function getTerminologyQuestions(category = "All Categories") {
  if (category === "All Categories") return medicalTerminologyQuestions;

  return medicalTerminologyQuestions.filter((question) => question.category === category);
}

function startTerminologyQuiz(category = "All Categories") {
  const questions = getTerminologyQuestions(category);
  if (questions.length === 0) return;

  currentTerminologyCategory = category;
  currentTerminologyQuestions = shuffleArray(questions);
  currentTerminologyIndex = 0;
  terminologyScore = 0;
  terminologyReview = [];
  showScreen("terminology-quiz-screen");
  showTerminologyQuestion();
}

function showTerminologyQuestion() {
  const question = currentTerminologyQuestions[currentTerminologyIndex];
  const answerOptions = document.getElementById("terminology-answer-options");
  if (!question || !answerOptions) return;

  document.getElementById("terminology-progress").textContent =
    `Question ${currentTerminologyIndex + 1} of ${currentTerminologyQuestions.length}`;
  document.getElementById("terminology-progress-fill").style.width =
    `${((currentTerminologyIndex + 1) / currentTerminologyQuestions.length) * 100}%`;
  document.getElementById("terminology-category").textContent = question.category;
  document.getElementById("terminology-question-text").textContent = question.question;
  document.getElementById("terminology-feedback-box").classList.add("hidden");

  answerOptions.innerHTML = "";
  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = option;
    button.onclick = () => selectTerminologyAnswer(option);
    answerOptions.appendChild(button);
  });
}

function selectTerminologyAnswer(selectedAnswer) {
  const question = currentTerminologyQuestions[currentTerminologyIndex];
  const buttons = document.querySelectorAll("#terminology-answer-options .answer-btn");
  const isCorrect = selectedAnswer === question.answer;

  terminologyReview.push({
    ...question,
    selectedAnswer,
    isCorrect
  });

  if (isCorrect) {
    terminologyScore++;
  } else {
    saveMissedTerminology({
      ...question,
      selectedAnswer
    });
  }

  buttons.forEach((button) => {
    button.disabled = true;
    if (button.textContent === question.answer) {
      button.classList.add("correct");
    } else if (button.textContent === selectedAnswer) {
      button.classList.add("wrong");
    }
  });

  document.getElementById("terminology-feedback-title").textContent = isCorrect ? "Correct" : "Not quite";
  document.getElementById("terminology-feedback-text").textContent = question.explanation;
  document.getElementById("terminology-learning-point").innerHTML =
    `<strong>Learning point:</strong> ${escapeHtml(question.learningPoint)}`;
  document.getElementById("terminology-feedback-box").classList.remove("hidden");
}

function saveMissedTerminology(question) {
  const existingIndex = terminologyMissedQuestions.findIndex((item) => item.id === question.id);

  if (existingIndex >= 0) {
    terminologyMissedQuestions[existingIndex] = question;
  } else {
    terminologyMissedQuestions.push(question);
  }

  localStorage.setItem("emtTerminologyMissedQuestions", JSON.stringify(terminologyMissedQuestions));
}

function nextTerminologyQuestion() {
  currentTerminologyIndex++;

  if (currentTerminologyIndex < currentTerminologyQuestions.length) {
    showTerminologyQuestion();
  } else {
    showTerminologyResults();
  }
}

function showTerminologyResults() {
  const percent = Math.round((terminologyScore / currentTerminologyQuestions.length) * 100);
  const missed = terminologyReview.filter((item) => !item.isCorrect);
  const weakCategories = getWeakScenarioGroups(missed, "category");

  terminologyScoreHistory.push({
    category: currentTerminologyCategory,
    score: terminologyScore,
    total: currentTerminologyQuestions.length,
    percent,
    missedCount: missed.length,
    weakCategories,
    completedAt: new Date().toISOString()
  });
  terminologyScoreHistory = terminologyScoreHistory.slice(-25);
  localStorage.setItem("emtTerminologyScoreHistory", JSON.stringify(terminologyScoreHistory));

  document.getElementById("terminology-result-score").textContent =
    `${terminologyScore} out of ${currentTerminologyQuestions.length} correct (${percent}%)`;
  document.getElementById("terminology-result-message").textContent =
    missed.length === 0
      ? "Clean run. Your terminology is reading sharp."
      : "Review the missed terms, then retry the weakest category.";
  renderTerminologyWeakSummary(missed, weakCategories);
  showScreen("terminology-results-screen");
}

function renderTerminologyWeakSummary(missed, weakCategories) {
  const summary = document.getElementById("terminology-weak-summary");
  if (!summary) return;

  if (missed.length === 0) {
    summary.innerHTML = `
      <h3>No weak categories</h3>
      <p>You did not miss any terminology questions on this attempt.</p>
    `;
    return;
  }

  summary.innerHTML = `
    <h3>Missed Questions: ${missed.length}</h3>
    <p><strong>Weak categories:</strong> ${escapeHtml(formatWeakScenarioGroups(weakCategories))}</p>
    <div class="result-missed-list">
      ${missed.map((item) => `
        <div class="result-missed-item">
          <p>${escapeHtml(item.question)}</p>
          <span>${escapeHtml(item.category)}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function reviewMissedTerminology() {
  const list = document.getElementById("terminology-missed-list");
  if (!list) return;

  showScreen("terminology-missed-screen");

  if (terminologyMissedQuestions.length === 0) {
    list.innerHTML = `
      <div class="empty-card">
        <h2>No missed terminology</h2>
        <p>Missed terminology questions will appear here after you take the terminology quiz.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = terminologyMissedQuestions.map((item) => `
    <div class="review-card review-wrong">
      <p class="review-topic">${escapeHtml(item.category)}</p>
      <h3>${escapeHtml(item.question)}</h3>
      <p><strong>Your answer:</strong> ${escapeHtml(item.selectedAnswer || "Not recorded")}</p>
      <p><strong>Correct answer:</strong> ${escapeHtml(item.answer)}</p>
      <p>${escapeHtml(item.explanation)}</p>
      <p><strong>Learning point:</strong> ${escapeHtml(item.learningPoint)}</p>
    </div>
  `).join("");
}

function retryWeakestTerminologyCategory() {
  const latest = terminologyScoreHistory[terminologyScoreHistory.length - 1];
  const weakest = latest?.weakCategories?.[0]?.label || "All Categories";
  startTerminologyQuiz(weakest);
}

function prepareQuestionsForQuiz(questions, quizKey, amount = questions.length) {
  let randomizedQuestions = shuffleArray(questions).slice(0, amount);
  const questionOrder = randomizedQuestions.map((question) => question.question).join("|");

  if (randomizedQuestions.length > 1 && lastQuizOrders[quizKey] === questionOrder) {
    randomizedQuestions = rotateUntilNewOrder(
      randomizedQuestions,
      (items) => items.map((question) => question.question).join("|"),
      [lastQuizOrders[quizKey]]
    );
  }

  lastQuizOrders[quizKey] = randomizedQuestions
    .map((question) => question.question)
    .join("|");

  return randomizedQuestions.map((question) => shuffleQuestionAnswers(question));
}

function shuffleQuestionAnswers(question) {
  const correctIndexes = Array.isArray(question.correct)
    ? question.correct
    : [question.correct];

  let answerPairs = question.answers.map((answer, index) => ({
    answer,
    originalIndex: index
  }));

  answerPairs = shuffleArray(answerPairs);

  const originalOrder = question.answers.join("|");
  const answerOrder = answerPairs.map((pair) => pair.answer).join("|");
  const questionKey = question.question;

  if (
    answerPairs.length > 1 &&
    (answerOrder === originalOrder || lastAnswerOrders[questionKey] === answerOrder)
  ) {
    answerPairs = rotateUntilNewOrder(
      answerPairs,
      (items) => items.map((pair) => pair.answer).join("|"),
      [originalOrder, lastAnswerOrders[questionKey]]
    );
  }

  lastAnswerOrders[questionKey] = answerPairs
    .map((pair) => pair.answer)
    .join("|");

  const shuffledAnswers = answerPairs.map((pair) => pair.answer);
  const shuffledCorrectIndexes = answerPairs
    .map((pair, index) => correctIndexes.includes(pair.originalIndex) ? index : null)
    .filter((index) => index !== null);

  return {
    ...question,
    answers: shuffledAnswers,
    correct: Array.isArray(question.correct) ? shuffledCorrectIndexes : shuffledCorrectIndexes[0]
  };
}

function rotateArray(array) {
  return [...array.slice(1), array[0]];
}

function rotateUntilNewOrder(array, getSignature, blockedSignatures) {
  const blocked = blockedSignatures.filter(Boolean);
  let rotated = [...array];

  for (let attempt = 0; attempt < array.length; attempt++) {
    rotated = rotateArray(rotated);

    if (!blocked.includes(getSignature(rotated))) {
      return rotated;
    }
  }

  return array;
}

function shuffleArray(array) {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    const temporaryItem = newArray[i];
    newArray[i] = newArray[randomIndex];
    newArray[randomIndex] = temporaryItem;
  }

  return newArray;
}

function loadFlashcards() {

  const select = document.getElementById("flashcard-chapter-select");

  const selectedValue = select.value;

  let flashcardSet = [];

  if (selectedValue === "medical-terminology") {

    flashcardSet = medicalTerminologyFlashcards;

  } else if (selectedValue === "all") {

    flashcardSet = flashcards;

  } else {

    flashcardSet = flashcards.filter((card) => {

      return card.chapter === Number(selectedValue);

    });

  }

  currentFlashcards = shuffleArray(flashcardSet);

  flashcardIndex = 0;

  flashcardShowingDefinition = false;

  showFlashcard();

}

function showFlashcard() {
  if (currentFlashcards.length === 0) {
    document.getElementById("flashcard-label").textContent = "No cards";
    document.getElementById("flashcard-text").textContent = "No flashcards found.";
    return;
  }

  const card = currentFlashcards[flashcardIndex];

  document.getElementById("flashcard-label").textContent =
    flashcardShowingDefinition
      ? "Definition"
      : card.category
        ? `${card.category} Term`
        : `Chapter ${card.chapter} Term`;

  document.getElementById("flashcard-text").textContent =
    flashcardShowingDefinition ? card.definition : card.term;
}

function flipFlashcard() {
  flashcardShowingDefinition = !flashcardShowingDefinition;
  showFlashcard();
}

function nextFlashcard() {
  if (currentFlashcards.length === 0) return;

  flashcardIndex++;

  if (flashcardIndex >= currentFlashcards.length) {
    flashcardIndex = 0;
  }

  flashcardShowingDefinition = false;
  showFlashcard();
}

function previousFlashcard() {
  if (currentFlashcards.length === 0) return;

  flashcardIndex--;

  if (flashcardIndex < 0) {
    flashcardIndex = currentFlashcards.length - 1;
  }

  flashcardShowingDefinition = false;
  showFlashcard();
}

function showReview() {
  showScreen("review-screen");

  const reviewList = document.getElementById("review-list");

  reviewList.innerHTML = quizReview.map((item, index) => {
    return `
      <div class="review-card ${item.isCorrect ? "review-correct" : "review-wrong"}">
        <p class="review-topic">Question ${index + 1} • Chapter ${item.chapter} • ${item.topic}</p>
        <h3>${item.question}</h3>

        <p><strong>Your answer:</strong> ${item.selectedAnswer}</p>
        <p><strong>Correct answer:</strong> ${item.correctAnswer}</p>
        <p>${item.explanation}</p>
      </div>
    `;
  }).join("");
}

function updateStats() {
  const totalAnswered = document.getElementById("total-answered");
  const accuracyRate = document.getElementById("accuracy-rate");
  const missedCount = document.getElementById("missed-count");
  const todayAnswered = document.getElementById("today-answered");
  const todayAccuracyRate = document.getElementById("today-accuracy-rate");
  const todayMissedCount = document.getElementById("today-missed-count");

  if (
    !totalAnswered ||
    !accuracyRate ||
    !missedCount ||
    !todayAnswered ||
    !todayAccuracyRate ||
    !todayMissedCount
  ) return;

  todayStats = getTodayStats();

  const accuracy = stats.answered === 0
    ? 0
    : Math.round((stats.correct / stats.answered) * 100);
  const todayAccuracy = todayStats.answered === 0
    ? 0
    : Math.round((todayStats.correct / todayStats.answered) * 100);

  totalAnswered.textContent = stats.answered;
  accuracyRate.textContent = `${accuracy}%`;
  missedCount.textContent = missedQuestions.length;
  todayAnswered.textContent = todayStats.answered;
  todayAccuracyRate.textContent = `${todayAccuracy}%`;
  todayMissedCount.textContent = todayStats.missed;
}

function updateStreak() {
  const streakBadge = document.querySelector(".streak-badge");

  if (!streakBadge) return;

  streakBadge.textContent = `🔥 ${currentStreak}`;
}

function getWeekKey(date = new Date()) {
  const weekStart = new Date(date);
  const day = weekStart.getDay();
  const daysSinceMonday = (day + 6) % 7;
  weekStart.setDate(weekStart.getDate() - daysSinceMonday);
  weekStart.setHours(0, 0, 0, 0);

  const year = weekStart.getFullYear();
  const month = String(weekStart.getMonth() + 1).padStart(2, "0");
  const monthDay = String(weekStart.getDate()).padStart(2, "0");

  return `${year}-${month}-${monthDay}`;
}

async function updateLeaderboard() {
  if (!username) return;

  const existingEntry = leaderboard.find((entry) => {
    return entry.username.toLowerCase() === username.toLowerCase();
  });

  if (existingEntry) {
    existingEntry.username = username;
    existingEntry.bestStreak = Math.max(existingEntry.bestStreak, currentStreak);
  } else {
    leaderboard.push({
      username,
      bestStreak: currentStreak
    });
  }

  leaderboard = leaderboard
    .sort((first, second) => second.bestStreak - first.bestStreak)
    .slice(0, 5);

  localStorage.setItem("emtLeaderboard", JSON.stringify(leaderboard));
  loadRanking();

  try {
    const leaderboardRef = doc(db, "leaderboard", getLeaderboardId(username));
    const snapshot = await getDoc(leaderboardRef);
    const savedBestStreak = snapshot.exists() ? Number(snapshot.data().bestStreak) || 0 : 0;

    if (currentStreak > savedBestStreak) {
      await setDoc(leaderboardRef, {
        username,
        usernameLower: username.toLowerCase(),
        bestStreak: currentStreak,
        updatedAt: serverTimestamp()
      }, { merge: true });
    }

    await loadRanking();
  } catch (error) {
    console.error("Could not sync leaderboard with Firestore.", error);
  }
}

async function updateWeeklyCorrectLeaderboard() {
  if (!username) return;

  const weekKey = getWeekKey();

  try {
    const userRef = doc(db, "users", getUserId(username));
    const snapshot = await getDoc(userRef);
    const userData = snapshot.exists() ? snapshot.data() : {};
    const savedWeek = userData.weeklyCorrectWeek || weekKey;
    const savedCorrectCount = savedWeek === weekKey
      ? Number(userData.weeklyCorrectCount) || 0
      : 0;

    weeklyCorrectWeek = weekKey;
    weeklyCorrectCount = savedCorrectCount + 1;

    await setDoc(userRef, {
      username,
      usernameLower: username.toLowerCase(),
      avatar: selectedAvatar,
      weeklyCorrectWeek,
      weeklyCorrectCount,
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch (error) {
    console.error("Could not sync weekly correct stats with Firestore.", error);
  }
}

async function loadRanking() {
  const rankingList = document.getElementById("ranking-list");
  if (!rankingList) return;

  try {
    const leaderboardQuery = query(
      collection(db, "leaderboard"),
      orderBy("bestStreak", "desc"),
      limit(5)
    );
    const snapshot = await getDocs(leaderboardQuery);

    const profileMap = await loadUserProfiles();
    leaderboard = snapshot.docs.map((snapshotDoc) => {
      const data = snapshotDoc.data();
      const usernameLower = data.usernameLower || data.username?.toLowerCase() || "";
      const profile = profileMap.get(usernameLower) || {};

      return {
        username: data.username,
        bestStreak: Number(data.bestStreak) || 0,
        avatar: profile.avatar
      };
    });

    localStorage.setItem("emtLeaderboard", JSON.stringify(leaderboard));
  } catch (error) {
    console.error("Could not load Firestore leaderboard. Showing local scores.", error);
  }

  renderRankingList(
    rankingList,
    leaderboard,
    "bestStreak",
    "Best correct streak",
    "Answer questions correctly to start a streak."
  );
}

function loadWeeklyCorrectRanking() {
  const weeklyRankingList = document.getElementById("weekly-ranking-list");
  if (!weeklyRankingList) return;

  const weekKey = getWeekKey();

  if (weeklyRankingUnsubscribe) {
    weeklyRankingUnsubscribe();
  }

  const usersQuery = query(
    collection(db, "users"),
    orderBy("weeklyCorrectCount", "desc"),
    limit(25)
  );

  weeklyRankingUnsubscribe = onSnapshot(usersQuery, (snapshot) => {
    weeklyLeaderboard = snapshot.docs
      .map((snapshotDoc) => {
        const data = snapshotDoc.data();

        return {
          username: data.username,
          correctCount: Number(data.weeklyCorrectCount) || 0,
          weekKey: data.weeklyCorrectWeek,
          avatar: data.avatar
        };
      })
      .filter((entry) => entry.weekKey === weekKey && entry.correctCount > 0)
      .slice(0, 5);

    renderRankingList(
      weeklyRankingList,
      weeklyLeaderboard,
      "correctCount",
      "Correct this week",
      "Answer questions correctly this week to appear here."
    );
  }, (error) => {
    console.error("Could not listen to weekly correct ranking from Firestore.", error);
    renderRankingList(
      weeklyRankingList,
      [],
      "correctCount",
      "Correct this week",
      "Answer questions correctly this week to appear here."
    );
  });
}

async function loadUserProfiles() {
  try {
    const snapshot = await getDocs(collection(db, "users"));
    const profiles = new Map();

    snapshot.docs.forEach((snapshotDoc) => {
      const data = snapshotDoc.data();
      if (!data.usernameLower) return;

      profiles.set(data.usernameLower, {
        avatar: data.avatar
      });
    });

    return profiles;
  } catch (error) {
    console.error("Could not load user profiles from Firestore.", error);
    return new Map();
  }
}

function renderRankingList(container, entries, scoreKey, label, emptyMessage) {
  if (entries.length === 0) {
    container.innerHTML = `
      <div class="empty-card">
        <h2>No rankings yet</h2>
        <p>${emptyMessage}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = entries.map((entry, index) => {
    const avatarPath = getValidAvatarPath(entry.avatar);
    const initials = entry.username ? entry.username.slice(0, 2).toUpperCase() : "?";
    const medal = getRankingMedal(index);

    return `
      <div class="ranking-card">
        <div class="ranking-place ${medal.className}">${medal.label}</div>
        <div class="ranking-avatar has-image" style="background-image: url('${avatarPath}')">${escapeHtml(initials)}</div>
        <div>
          <p class="ranking-name">${escapeHtml(entry.username)}</p>
          <p class="ranking-label">${label}</p>
        </div>
        <div class="ranking-streak">${entry[scoreKey]}</div>
      </div>
    `;
  }).join("");
}

function getRankingMedal(index) {
  const medals = [
    { label: "🥇", className: "ranking-gold" },
    { label: "🥈", className: "ranking-silver" },
    { label: "🥉", className: "ranking-bronze" }
  ];

  return medals[index] || {
    label: `#${index + 1}`,
    className: ""
  };
}

function getLeaderboardId(name) {
  return encodeURIComponent(name.trim().toLowerCase());
}

Object.assign(window, {
  clearMissedQuestions,
  flipFlashcard,
  goHome,
  loadFlashcards,
  logoutUser,
  nextFlashcard,
  nextQuestion,
  nextScenarioQuestion,
  nextTerminologyQuestion,
  previousFlashcard,
  retryWeakestScenarioCategory,
  retryWeakestTerminologyCategory,
  reviewMissedScenarios,
  reviewMissedTerminology,
  restartQuiz,
  showReview,
  showScenarioMenu,
  showTerminologyMenu,
  showTerminologyQuizSetup,
  showScreen,
  selectAvatar,
  startChapterQuiz,
  startScenarioQuiz,
  startTerminologyQuiz,
  startQuickQuiz,
  toggleProfileMenu
});

setupUsername();
loadChapters();
updateStats();
updateStreak();
loadRanking();
loadWeeklyCorrectRanking();
