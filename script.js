let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let selectedChapter = null;

let currentFlashcards = [];
let flashcardIndex = 0;
let flashcardShowingDefinition = false;

let quizReview = [];

let stats = JSON.parse(localStorage.getItem("emtStats")) || {
  answered: 0,
  correct: 0
};

let currentStreak = Number(localStorage.getItem("emtStreak")) || 0;
let missedQuestions = JSON.parse(localStorage.getItem("missedQuestions")) || [];

const chapterList = document.getElementById("chapter-list");

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
}

function showScreen(screenId) {
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
}

function startQuickQuiz(amount = 10) {
  selectedChapter = null;

  const shuffledQuestions = shuffleArray(questionBank);
  currentQuestions = shuffledQuestions.slice(0, amount);

  startQuiz();
}

function startChapterQuiz(chapterId) {
  selectedChapter = chapterId;

  const chapterQuestions = questionBank.filter((question) => {
    return question.chapter === chapterId;
  });

  currentQuestions = shuffleArray(chapterQuestions);
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

  document.getElementById("quiz-progress").textContent =
    `Question ${currentIndex + 1} of ${currentQuestions.length}`;

  document.getElementById("progress-fill").style.width =
    `${((currentIndex + 1) / currentQuestions.length) * 100}%`;

  document.getElementById("question-topic").textContent = question.topic;
  document.getElementById("question-text").textContent = question.question;

  const answerOptions = document.getElementById("answer-options");
  answerOptions.innerHTML = "";

  document.getElementById("feedback-box").classList.add("hidden");

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = answer;
    button.onclick = () => selectAnswer(index);
    answerOptions.appendChild(button);
  });
}

function selectAnswer(selectedIndex) {
  const question = currentQuestions[currentIndex];
  const buttons = document.querySelectorAll(".answer-btn");

  quizReview.push({
    question: question.question,
    topic: question.topic,
    chapter: question.chapter,
    selectedAnswer: question.answers[selectedIndex],
    correctAnswer: question.answers[question.correct],
    isCorrect: selectedIndex === question.correct,
    explanation: question.explanation
  });

  buttons.forEach((button) => {
    button.disabled = true;
  });

  stats.answered++;

  if (selectedIndex === question.correct) {
    score++;
    stats.correct++;
    currentStreak++;

    buttons[selectedIndex].classList.add("correct");
    document.getElementById("feedback-title").textContent = "Correct";
  } else {
    currentStreak = 0;

    buttons[selectedIndex].classList.add("wrong");
    buttons[question.correct].classList.add("correct");
    document.getElementById("feedback-title").textContent = "Not quite";

    saveMissedQuestion(question);
  }

  localStorage.setItem("emtStats", JSON.stringify(stats));
  localStorage.setItem("emtStreak", currentStreak);

  updateStats();
  updateStreak();

  document.getElementById("feedback-text").textContent = question.explanation;
  document.getElementById("feedback-box").classList.remove("hidden");
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
          <p><strong>Answer:</strong> ${item.answers[item.correct]}</p>
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

  if (selectedValue === "all") {

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
    flashcardShowingDefinition ? "Definition" : `Chapter ${card.chapter} Term`;

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

  if (!totalAnswered || !accuracyRate || !missedCount) return;

  const accuracy = stats.answered === 0
    ? 0
    : Math.round((stats.correct / stats.answered) * 100);

  totalAnswered.textContent = stats.answered;
  accuracyRate.textContent = `${accuracy}%`;
  missedCount.textContent = missedQuestions.length;
}

function updateStreak() {
  const streakBadge = document.querySelector(".streak-badge");

  if (!streakBadge) return;

  streakBadge.textContent = `🔥 ${currentStreak}`;
}

loadChapters();
updateStats();
updateStreak();
