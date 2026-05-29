const chapters = [
  {
    id: 1,
    title: "EMS Systems",
    description: "Roles, responsibilities, certification, medical direction, and EMS system structure."
  },
  {
    id: 2,
    title: "Workforce Safety and Wellness",
    description: "Scene safety, stress, infection control, PPE, and provider wellness."
  },
  {
    id: 3,
    title: "Medical, Legal, and Ethical Issues",
    description: "Consent, refusal, negligence, confidentiality, and patient rights."
  },
  {
    id: 4,
    title: "Communications and Documentation",
    description: "Radio reports, patient care reports, communication skills, and documentation."
  },
  {
    id: 5,
    title: "Medical Terminology",
    description: "Prefixes, suffixes, root words, abbreviations, and body terms."
  },
  {
    id: 6,
    title: "The Human Body",
    description: "Anatomy, body systems, planes, positions, and basic physiology."
  },
  {
    id: 7,
    title: "Life Span Development",
    description: "Infants, children, adults, older adults, and age-related assessment differences."
  },
  {
    id: 8,
    title: "Lifting and Moving Patients",
    description: "Body mechanics, patient movement, emergency moves, and equipment."
  },
  {
    id: 9,
    title: "Patient Assessment",
    description: "Scene size-up, primary assessment, history, secondary assessment, and reassessment."
  },
  {
    id: 10,
    title: "Airway Management",
    description: "Airway opening, suctioning, oxygen, ventilation, and airway adjuncts."
  }
];

const questionBank = [
  {
  chapter: 1,
  topic: "EMS Systems",
  question: "What is the primary role of an EMT in the EMS system?",
  answers: [
    "Diagnose patients in the field",
    "Provide emergency care and safely transport patients",
    "Perform surgery before transport",
    "Replace the emergency room staff"
  ],
  correct: 1,
  explanation: "EMTs provide emergency care, stabilize patients, and transport them safely to an appropriate medical facility."
},
{
  chapter: 1,
  topic: "EMS Systems",
  question: "What is medical direction?",
  answers: [
    "A hospital map",
    "Physician oversight of EMS care",
    "A patient's request for transport",
    "The EMT's personal opinion"
  ],
  correct: 1,
  explanation: "Medical direction means EMS providers work under physician oversight through protocols, orders, or consultation."
},
{
  chapter: 1,
  topic: "EMS Systems",
  question: "What is an EMS protocol?",
  answers: [
    "A random decision made by the EMT",
    "A written guideline for patient care",
    "A hospital bill",
    "A type of ambulance"
  ],
  correct: 1,
  explanation: "Protocols are written guidelines that help EMTs know what care to provide in specific situations."
},
{
  chapter: 1,
  topic: "EMS Systems",
  question: "Which level of EMS provider generally has the most advanced prehospital training?",
  answers: [
    "Emergency Medical Responder",
    "EMT",
    "Advanced EMT",
    "Paramedic"
  ],
  correct: 3,
  explanation: "Paramedics usually have the highest level of prehospital training and can perform advanced skills."
},
{
  chapter: 1,
  topic: "EMS Systems",
  question: "What does quality improvement in EMS focus on?",
  answers: [
    "Punishing EMTs for every mistake",
    "Improving patient care and system performance",
    "Making documentation shorter only",
    "Avoiding medical direction"
  ],
  correct: 1,
  explanation: "Quality improvement reviews EMS care and system performance to improve patient outcomes."
},
{
  chapter: 1,
  topic: "EMS Systems",
  question: "Why is continuing education important for EMTs?",
  answers: [
    "EMS knowledge and skills must stay current",
    "It replaces patient assessment",
    "It allows EMTs to ignore protocols",
    "It is only needed once"
  ],
  correct: 0,
  explanation: "Continuing education helps EMTs keep their knowledge, skills, and certification current."
},
{
  chapter: 1,
  topic: "EMS Systems",
  question: "What is the purpose of public health in EMS?",
  answers: [
    "Only treating patients inside hospitals",
    "Preventing illness and injury in the community",
    "Selling medical equipment",
    "Replacing 911 dispatchers"
  ],
  correct: 1,
  explanation: "EMS connects with public health by helping prevent illness, injury, and community health problems."
},
{
  chapter: 1,
  topic: "EMS Systems",
  question: "What should an EMT do if a situation is outside their training or protocol?",
  answers: [
    "Guess and do whatever seems right",
    "Contact medical direction or follow local procedures",
    "Ignore the patient",
    "Ask a bystander to decide"
  ],
  correct: 1,
  explanation: "If something is outside your scope or unclear, you should follow local protocol and contact medical direction when needed."
},
{
  chapter: 1,
  topic: "EMS Systems",
  question: "Which action best shows professionalism as an EMT?",
  answers: [
    "Arguing with the patient",
    "Maintaining patient privacy and treating people respectfully",
    "Posting calls on social media",
    "Ignoring your partner"
  ],
  correct: 1,
  explanation: "Professionalism includes respect, privacy, teamwork, calm behavior, and responsible patient care."
},
{
  chapter: 1,
  topic: "EMS Systems",
  question: "What is the EMT's scope of practice?",
  answers: [
    "The skills and care an EMT is legally allowed to perform",
    "The size of the ambulance",
    "The hospital's waiting room rules",
    "Anything the patient asks for"
  ],
  correct: 0,
  explanation: "Scope of practice means the legal limits of what an EMT is trained and allowed to do."
},
  {
  chapter: 2,
  topic: "Workforce Safety",
  question: "What should an EMT do before entering any emergency scene?",
  answers: [
    "Begin patient care immediately",
    "Make sure the scene is safe",
    "Ask for payment information",
    "Remove all PPE"
  ],
  correct: 1,
  explanation: "Scene safety comes first. You cannot help the patient if you become injured or unsafe."
},
{
  chapter: 2,
  topic: "Workforce Safety",
  question: "What does PPE stand for?",
  answers: [
    "Patient Protection Equipment",
    "Personal Protective Equipment",
    "Primary Patient Evaluation",
    "Public Provider Emergency"
  ],
  correct: 1,
  explanation: "PPE means personal protective equipment, such as gloves, masks, eye protection, and gowns."
},
{
  chapter: 2,
  topic: "Infection Control",
  question: "When should gloves be worn?",
  answers: [
    "Only after patient care is finished",
    "When there is possible contact with blood or body fluids",
    "Only during trauma calls",
    "Only when the patient requests it"
  ],
  correct: 1,
  explanation: "Gloves help protect you from blood, body fluids, and possible infectious material."
},
{
  chapter: 2,
  topic: "Infection Control",
  question: "What is the best way to reduce the spread of infection after removing gloves?",
  answers: [
    "Touch your face",
    "Wash your hands or use hand sanitizer",
    "Put the gloves in your pocket",
    "Skip cleaning if the call was short"
  ],
  correct: 1,
  explanation: "Hand hygiene is one of the most important ways to prevent spreading infection."
},
{
  chapter: 2,
  topic: "Stress Management",
  question: "Which situation may increase stress for an EMT?",
  answers: [
    "Routine station cleaning",
    "A call involving serious injury or death",
    "Eating lunch",
    "Checking the ambulance fuel level"
  ],
  correct: 1,
  explanation: "Traumatic calls, death, violence, and high-pressure situations can increase stress for EMS providers."
},
{
  chapter: 2,
  topic: "Stress Management",
  question: "Which is a healthy way to manage EMS-related stress?",
  answers: [
    "Ignore it completely",
    "Talk to trusted support or seek help when needed",
    "Use alcohol to cope",
    "Stop sleeping"
  ],
  correct: 1,
  explanation: "Healthy stress management includes rest, support, exercise, talking with others, and professional help when needed."
},
{
  chapter: 2,
  topic: "Scene Safety",
  question: "What should you do if a scene becomes unsafe?",
  answers: [
    "Stay no matter what",
    "Retreat to a safe area and request help",
    "Continue treatment faster",
    "Ignore your partner"
  ],
  correct: 1,
  explanation: "If a scene becomes unsafe, move to safety and request the proper resources."
},
{
  chapter: 2,
  topic: "Body Substance Isolation",
  question: "What is the purpose of body substance isolation precautions?",
  answers: [
    "To protect only the patient",
    "To reduce exposure to blood and body fluids",
    "To make calls take longer",
    "To replace patient assessment"
  ],
  correct: 1,
  explanation: "Body substance isolation precautions help reduce the risk of exposure to potentially infectious material."
},
{
  chapter: 2,
  topic: "Provider Wellness",
  question: "Why is sleep important for EMTs?",
  answers: [
    "It has no effect on performance",
    "It helps alertness, decision-making, and safety",
    "It only matters after night shifts",
    "It replaces training"
  ],
  correct: 1,
  explanation: "Good sleep supports alertness, reaction time, mood, and safe decision-making during calls."
},
{
  chapter: 2,
  topic: "Workforce Safety",
  question: "What should an EMT do after being exposed to blood or body fluids?",
  answers: [
    "Ignore it if they feel fine",
    "Report it and follow local exposure procedures",
    "Finish the shift without telling anyone",
    "Only rinse with water and leave"
  ],
  correct: 1,
  explanation: "Exposure incidents should be reported right away and handled according to local policy."
},
  {
  chapter: 3,
  topic: "Medical Legal",
  question: "What is consent?",
  answers: [
    "Permission from the patient to provide care",
    "A type of EMS report",
    "A hospital diagnosis",
    "A way to avoid documentation"
  ],
  correct: 0,
  explanation: "Consent means the patient gives permission for assessment, treatment, or transport."
},
{
  chapter: 3,
  topic: "Medical Legal",
  question: "Which patient can usually refuse care?",
  answers: [
    "An unconscious patient",
    "An alert adult who understands the risks",
    "A confused patient",
    "A young child without a guardian"
  ],
  correct: 1,
  explanation: "A competent adult who understands the risks can usually refuse care."
},
{
  chapter: 3,
  topic: "Consent",
  question: "What is implied consent?",
  answers: [
    "Consent given by a patient in writing only",
    "Consent assumed when a patient cannot respond and needs emergency care",
    "Consent from a bystander",
    "Consent that only applies to EMT partners"
  ],
  correct: 1,
  explanation: "Implied consent applies when a patient is unable to give consent but needs emergency care."
},
{
  chapter: 3,
  topic: "Consent",
  question: "What is expressed consent?",
  answers: [
    "Permission clearly given by the patient",
    "Permission guessed by the EMT",
    "A refusal of care",
    "A law enforcement order"
  ],
  correct: 0,
  explanation: "Expressed consent is when the patient clearly gives permission, either verbally or through an action."
},
{
  chapter: 3,
  topic: "Negligence",
  question: "What is negligence in EMS?",
  answers: [
    "Providing excellent patient care",
    "Failure to provide the expected standard of care",
    "Asking too many questions",
    "Following local protocol"
  ],
  correct: 1,
  explanation: "Negligence happens when a provider fails to act as expected and that failure may harm the patient."
},
{
  chapter: 3,
  topic: "Duty to Act",
  question: "What does duty to act mean?",
  answers: [
    "An EMT has a legal obligation to provide care while on duty",
    "An EMT can do anything they want",
    "A patient must always accept transport",
    "Only doctors have responsibilities"
  ],
  correct: 0,
  explanation: "Duty to act means an EMT has a legal responsibility to respond and provide care when officially on duty."
},
{
  chapter: 3,
  topic: "Confidentiality",
  question: "Which action protects patient confidentiality?",
  answers: [
    "Posting call details online",
    "Discussing the patient loudly in public",
    "Sharing information only with people involved in patient care",
    "Sending patient photos to friends"
  ],
  correct: 2,
  explanation: "Patient information should only be shared with appropriate healthcare providers or people directly involved in care."
},
{
  chapter: 3,
  topic: "Abandonment",
  question: "What is patient abandonment?",
  answers: [
    "Ending care without making sure equal or higher-level care takes over",
    "Transporting a patient to the hospital",
    "Calling for ALS",
    "Documenting patient care"
  ],
  correct: 0,
  explanation: "Abandonment means stopping care without properly transferring the patient to another qualified provider."
},
{
  chapter: 3,
  topic: "Advance Directives",
  question: "What is a DNR order?",
  answers: [
    "A request to delay transport",
    "A do-not-resuscitate order",
    "A radio report",
    "A refusal form for all care"
  ],
  correct: 1,
  explanation: "A DNR is a medical order that may limit resuscitation efforts, depending on local laws and protocols."
},
{
  chapter: 3,
  topic: "Ethics",
  question: "Which action is most ethical for an EMT?",
  answers: [
    "Treating every patient with respect and dignity",
    "Judging patients based on their choices",
    "Ignoring patients who are rude",
    "Only helping easy patients"
  ],
  correct: 0,
  explanation: "Ethical EMS care means treating patients fairly, respectfully, and professionally."
},
  {
  chapter: 4,
  topic: "Documentation",
  question: "What is the purpose of a patient care report?",
  answers: [
    "To document assessment, treatment, and transport",
    "To replace patient care",
    "To diagnose the patient",
    "To avoid talking to the hospital"
  ],
  correct: 0,
  explanation: "The patient care report documents what happened, what you found, what care you provided, and where the patient was transported."
},
{
  chapter: 4,
  topic: "Communication",
  question: "When giving a radio report, what should an EMT try to be?",
  answers: [
    "Long and emotional",
    "Clear, organized, and brief",
    "Funny and casual",
    "Silent unless asked questions"
  ],
  correct: 1,
  explanation: "EMS communication should be clear, organized, professional, and brief."
},
{
  chapter: 4,
  topic: "Communication",
  question: "Which information should usually be included in a hospital radio report?",
  answers: [
    "Patient age, chief complaint, vital signs, and treatment given",
    "The EMT's favorite diagnosis",
    "Only the patient's name",
    "A full life story of the patient"
  ],
  correct: 0,
  explanation: "A good radio report gives important patient information like age, sex, chief complaint, condition, vital signs, and care provided."
},
{
  chapter: 4,
  topic: "Documentation",
  question: "Why should documentation be completed as soon as possible after a call?",
  answers: [
    "Details are easier to remember accurately",
    "It makes patient care unnecessary",
    "It allows EMTs to skip signatures",
    "It prevents the hospital from asking questions"
  ],
  correct: 0,
  explanation: "Writing the report soon after the call helps keep the information accurate and complete."
},
{
  chapter: 4,
  topic: "Documentation",
  question: "Which statement is best for a patient care report?",
  answers: [
    "Patient was acting crazy",
    "Patient appeared anxious and stated, 'I feel like I can't breathe'",
    "Patient was annoying",
    "Patient obviously wanted attention"
  ],
  correct: 1,
  explanation: "Reports should be objective, professional, and include patient statements when useful."
},
{
  chapter: 4,
  topic: "Communication",
  question: "What is therapeutic communication?",
  answers: [
    "Arguing with the patient",
    "Using communication to calm, support, and gather information",
    "Only talking to family members",
    "Avoiding eye contact completely"
  ],
  correct: 1,
  explanation: "Therapeutic communication helps build trust, reduce anxiety, and gather accurate information."
},
{
  chapter: 4,
  topic: "Communication",
  question: "What should you do if a patient does not understand your question?",
  answers: [
    "Repeat it louder with the same words",
    "Rephrase it in simpler language",
    "Ignore the patient",
    "Document that they refused"
  ],
  correct: 1,
  explanation: "If a patient does not understand, use clear and simple language without talking down to them."
},
{
  chapter: 4,
  topic: "Communication",
  question: "Why is communication with your EMS partner important?",
  answers: [
    "It helps teamwork and patient safety",
    "It replaces assessment",
    "It is only useful after transport",
    "It makes documentation optional"
  ],
  correct: 0,
  explanation: "Good partner communication helps divide tasks, prevent mistakes, and improve patient care."
},
{
  chapter: 4,
  topic: "Documentation",
  question: "If you make a mistake on a written report, what should you usually do?",
  answers: [
    "Hide the mistake",
    "Follow local policy for correcting documentation",
    "Throw the report away",
    "Ask the patient to fix it"
  ],
  correct: 1,
  explanation: "Documentation errors should be corrected according to local policy, usually in a clear and honest way."
},
{
  chapter: 4,
  topic: "Communication",
  question: "What is the best way to communicate with a receiving nurse during transfer of care?",
  answers: [
    "Give a clear handoff report with important findings and treatments",
    "Only say the patient's name",
    "Leave before giving any report",
    "Tell jokes instead of medical information"
  ],
  correct: 0,
  explanation: "A clear handoff helps the receiving team understand the patient's condition, care given, and any changes."
},
  {
  chapter: 5,
  topic: "Medical Terminology",
  question: "What does the prefix 'brady-' mean?",
  answers: [
    "Fast",
    "Slow",
    "Above",
    "Below"
  ],
  correct: 1,
  explanation: "Brady- means slow, like bradycardia meaning a slow heart rate."
},
{
  chapter: 5,
  topic: "Medical Terminology",
  question: "What does the prefix 'tachy-' mean?",
  answers: [
    "Slow",
    "Fast",
    "Painful",
    "Normal"
  ],
  correct: 1,
  explanation: "Tachy- means fast, like tachycardia meaning a fast heart rate."
},
{
  chapter: 5,
  topic: "Medical Terminology",
  question: "What does the suffix '-itis' usually mean?",
  answers: [
    "Inflammation",
    "Removal",
    "Pain",
    "New opening"
  ],
  correct: 0,
  explanation: "-itis usually means inflammation, such as bronchitis or appendicitis."
},
{
  chapter: 5,
  topic: "Medical Terminology",
  question: "What does the suffix '-algia' mean?",
  answers: [
    "Weakness",
    "Pain",
    "Breathing",
    "Swelling"
  ],
  correct: 1,
  explanation: "-algia means pain, such as neuralgia meaning nerve pain."
},
{
  chapter: 5,
  topic: "Medical Terminology",
  question: "What does the root word 'cardi' refer to?",
  answers: [
    "Lung",
    "Heart",
    "Brain",
    "Stomach"
  ],
  correct: 1,
  explanation: "Cardi refers to the heart, like cardiac meaning related to the heart."
},
{
  chapter: 5,
  topic: "Medical Terminology",
  question: "What does the root word 'pulmon' refer to?",
  answers: [
    "Lungs",
    "Kidneys",
    "Skin",
    "Bones"
  ],
  correct: 0,
  explanation: "Pulmon refers to the lungs, like pulmonary meaning related to the lungs."
},
{
  chapter: 5,
  topic: "Medical Terminology",
  question: "What does 'hypo-' usually mean?",
  answers: [
    "High or excessive",
    "Low or below normal",
    "Around",
    "Between"
  ],
  correct: 1,
  explanation: "Hypo- means low or below normal, like hypoglycemia meaning low blood sugar."
},
{
  chapter: 5,
  topic: "Medical Terminology",
  question: "What does 'hyper-' usually mean?",
  answers: [
    "Low",
    "High or excessive",
    "Behind",
    "Inside"
  ],
  correct: 1,
  explanation: "Hyper- means high or excessive, like hypertension meaning high blood pressure."
},
{
  chapter: 5,
  topic: "Medical Terminology",
  question: "What does 'dyspnea' mean?",
  answers: [
    "Chest pain",
    "Difficulty breathing",
    "Low blood pressure",
    "Vomiting blood"
  ],
  correct: 1,
  explanation: "Dyspnea means difficulty breathing or shortness of breath."
},
{
  chapter: 5,
  topic: "Medical Terminology",
  question: "What does 'cyanosis' mean?",
  answers: [
    "Yellowing of the skin",
    "Bluish color of the skin or mucous membranes",
    "Red rash",
    "Normal skin color"
  ],
  correct: 1,
  explanation: "Cyanosis is a bluish color that can suggest poor oxygenation."
},
  {
  chapter: 6,
  topic: "The Human Body",
  question: "What body system is mainly responsible for breathing?",
  answers: [
    "Digestive system",
    "Respiratory system",
    "Skeletal system",
    "Endocrine system"
  ],
  correct: 1,
  explanation: "The respiratory system moves oxygen into the body and removes carbon dioxide."
},
{
  chapter: 6,
  topic: "The Human Body",
  question: "What does the cardiovascular system mainly move through the body?",
  answers: [
    "Blood",
    "Air",
    "Food",
    "Urine"
  ],
  correct: 0,
  explanation: "The cardiovascular system circulates blood through the heart and blood vessels."
},
{
  chapter: 6,
  topic: "Anatomy",
  question: "What is the anatomical position?",
  answers: [
    "Lying face down",
    "Standing upright, facing forward, arms at sides, palms forward",
    "Sitting with legs crossed",
    "Lying on the left side"
  ],
  correct: 1,
  explanation: "Anatomical position is the standard reference position used to describe body locations."
},
{
  chapter: 6,
  topic: "Anatomy",
  question: "What does anterior mean?",
  answers: [
    "Toward the back",
    "Toward the front",
    "Away from the midline",
    "Below the waist"
  ],
  correct: 1,
  explanation: "Anterior means toward the front of the body."
},
{
  chapter: 6,
  topic: "Anatomy",
  question: "What does posterior mean?",
  answers: [
    "Toward the front",
    "Toward the back",
    "Above the head",
    "Toward the feet"
  ],
  correct: 1,
  explanation: "Posterior means toward the back of the body."
},
{
  chapter: 6,
  topic: "Anatomy",
  question: "What does medial mean?",
  answers: [
    "Toward the midline of the body",
    "Away from the midline",
    "Toward the head",
    "Toward the feet"
  ],
  correct: 0,
  explanation: "Medial means closer to the midline of the body."
},
{
  chapter: 6,
  topic: "Anatomy",
  question: "What does lateral mean?",
  answers: [
    "Toward the midline",
    "Away from the midline",
    "Toward the back",
    "Toward the head"
  ],
  correct: 1,
  explanation: "Lateral means farther away from the midline of the body."
},
{
  chapter: 6,
  topic: "Body Systems",
  question: "Which organ is the main pump of the cardiovascular system?",
  answers: [
    "Brain",
    "Liver",
    "Heart",
    "Stomach"
  ],
  correct: 2,
  explanation: "The heart pumps blood through the body."
},
{
  chapter: 6,
  topic: "Body Systems",
  question: "What is the main job of red blood cells?",
  answers: [
    "Fight infection",
    "Carry oxygen",
    "Digest food",
    "Make hormones"
  ],
  correct: 1,
  explanation: "Red blood cells carry oxygen to the body's tissues."
},
{
  chapter: 6,
  topic: "Body Systems",
  question: "Which body system controls thought, movement, and sensation?",
  answers: [
    "Nervous system",
    "Digestive system",
    "Urinary system",
    "Integumentary system"
  ],
  correct: 0,
  explanation: "The nervous system includes the brain, spinal cord, and nerves. It controls body functions and responses."
},
  {
  chapter: 7,
  topic: "Life Span Development",
  question: "Why are infants and young children at higher risk for airway problems?",
  answers: [
    "They have larger airways than adults",
    "Their airways are smaller and easier to block",
    "They breathe only through their mouth",
    "They do not need oxygen"
  ],
  correct: 1,
  explanation: "Children have smaller airways, so swelling, mucus, or poor positioning can affect breathing faster."
},
{
  chapter: 7,
  topic: "Life Span Development",
  question: "Which age group may have more fragile bones and slower healing?",
  answers: [
    "Newborns",
    "Teenagers",
    "Older adults",
    "Toddlers"
  ],
  correct: 2,
  explanation: "Older adults may have weaker bones, less muscle mass, and slower recovery from illness or injury."
},
{
  chapter: 7,
  topic: "Infants",
  question: "Which finding can be normal in infants compared with adults?",
  answers: [
    "Faster heart rate and breathing rate",
    "No need for oxygen",
    "No pulse",
    "Very low breathing rate"
  ],
  correct: 0,
  explanation: "Infants normally have faster heart rates and respiratory rates than adults."
},
{
  chapter: 7,
  topic: "Children",
  question: "Why should EMTs involve a parent or caregiver when assessing a child?",
  answers: [
    "The caregiver can help calm the child and provide history",
    "The caregiver should do all patient care",
    "Children never need assessment",
    "It makes documentation unnecessary"
  ],
  correct: 0,
  explanation: "A familiar caregiver can reduce fear and give important information about the child."
},
{
  chapter: 7,
  topic: "Adolescents",
  question: "When caring for an adolescent, what approach is usually best?",
  answers: [
    "Talk only to the parent",
    "Treat them with respect and include them in communication",
    "Ignore their privacy",
    "Use baby talk"
  ],
  correct: 1,
  explanation: "Adolescents often value independence and privacy, so respectful communication matters."
},
{
  chapter: 7,
  topic: "Adults",
  question: "What is a major health concern that becomes more common in middle adulthood?",
  answers: [
    "Teething",
    "Heart disease risk",
    "Learning to walk",
    "First language development"
  ],
  correct: 1,
  explanation: "Middle adulthood can bring higher risk for conditions like heart disease, hypertension, and diabetes."
},
{
  chapter: 7,
  topic: "Older Adults",
  question: "Why can assessment be more complicated in older adults?",
  answers: [
    "They never have medical history",
    "They may have multiple conditions and medications",
    "They cannot feel pain",
    "They do not need transport"
  ],
  correct: 1,
  explanation: "Older adults may have chronic illnesses, multiple medications, and symptoms that appear differently."
},
{
  chapter: 7,
  topic: "Older Adults",
  question: "Which issue is especially important to consider after an older adult falls?",
  answers: [
    "Only embarrassment",
    "Possible fracture, head injury, or medical cause of the fall",
    "No need for assessment",
    "Only checking their shoes"
  ],
  correct: 1,
  explanation: "Falls in older adults can cause serious injury and may also be caused by an underlying medical problem."
},
{
  chapter: 7,
  topic: "Development",
  question: "What does life span development help EMTs understand?",
  answers: [
    "How patient needs change by age",
    "How to avoid assessment",
    "How to diagnose every illness",
    "How to skip communication"
  ],
  correct: 0,
  explanation: "Life span development helps EMTs adjust assessment and communication based on the patient’s age."
},
{
  chapter: 7,
  topic: "Communication",
  question: "When talking to an older adult patient, what should an EMT do?",
  answers: [
    "Assume they are confused",
    "Speak clearly and respectfully",
    "Talk only to family",
    "Rush through every question"
  ],
  correct: 1,
  explanation: "Older adults should be treated with respect. Speak clearly, allow time, and do not assume confusion."
},
  {
  chapter: 8,
  topic: "Lifting and Moving",
  question: "What is the safest way to lift a patient?",
  answers: [
    "Bend at the waist and pull fast",
    "Use your legs and keep your back straight",
    "Twist while lifting",
    "Lift alone whenever possible"
  ],
  correct: 1,
  explanation: "Good body mechanics means using your legs, keeping your back straight, and avoiding twisting."
},
{
  chapter: 8,
  topic: "Lifting and Moving",
  question: "When should an emergency move be used?",
  answers: [
    "Whenever the patient is heavy",
    "When there is immediate danger to the patient or rescuers",
    "Only at the hospital",
    "For every stable patient"
  ],
  correct: 1,
  explanation: "Emergency moves are used when there is an immediate threat, like fire, traffic, violence, or unsafe scene conditions."
},
{
  chapter: 8,
  topic: "Body Mechanics",
  question: "Why should you avoid twisting while lifting?",
  answers: [
    "It can increase the risk of back injury",
    "It makes the patient lighter",
    "It improves balance",
    "It is required for all lifts"
  ],
  correct: 0,
  explanation: "Twisting while lifting places stress on your back and can increase injury risk."
},
{
  chapter: 8,
  topic: "Body Mechanics",
  question: "Where should you keep the weight when lifting a patient?",
  answers: [
    "As far from your body as possible",
    "Close to your body",
    "Above your head",
    "Behind your back"
  ],
  correct: 1,
  explanation: "Keeping the weight close to your body gives you better control and reduces strain."
},
{
  chapter: 8,
  topic: "Patient Movement",
  question: "What should EMTs do before lifting a patient with a partner?",
  answers: [
    "Lift without talking",
    "Plan the move and communicate clearly",
    "Let the patient decide all commands",
    "Use only one hand"
  ],
  correct: 1,
  explanation: "Planning and clear communication help prevent injuries and mistakes during patient movement."
},
{
  chapter: 8,
  topic: "Patient Movement",
  question: "Which command is often used so all rescuers lift at the same time?",
  answers: [
    "Maybe now",
    "On my count",
    "Whenever you want",
    "After the ambulance starts"
  ],
  correct: 1,
  explanation: "A clear command like 'on my count' helps everyone move together safely."
},
{
  chapter: 8,
  topic: "Equipment",
  question: "What is a wheeled stretcher mainly used for?",
  answers: [
    "Carrying equipment only",
    "Moving and transporting patients",
    "Measuring oxygen levels",
    "Checking blood pressure"
  ],
  correct: 1,
  explanation: "A wheeled stretcher is commonly used to move and transport patients to and from the ambulance."
},
{
  chapter: 8,
  topic: "Equipment",
  question: "When would a stair chair be especially useful?",
  answers: [
    "Moving a patient up or down stairs",
    "Taking a blood glucose reading",
    "Opening an airway",
    "Starting CPR"
  ],
  correct: 0,
  explanation: "A stair chair helps move a patient safely on stairs when appropriate."
},
{
  chapter: 8,
  topic: "Safety",
  question: "What should you do if a patient is too heavy or the move seems unsafe?",
  answers: [
    "Try anyway",
    "Request additional help or equipment",
    "Drag the patient no matter what",
    "Cancel the call"
  ],
  correct: 1,
  explanation: "If the move is unsafe, request more help or proper equipment to protect the patient and rescuers."
},
{
  chapter: 8,
  topic: "Patient Movement",
  question: "What is the goal when moving a patient?",
  answers: [
    "Move as fast as possible no matter what",
    "Move safely while preventing further injury",
    "Avoid talking to the patient",
    "Use the least people possible"
  ],
  correct: 1,
  explanation: "Patient movement should protect both the patient and the rescuers from injury."
},
 {
  chapter: 9,
  topic: "Patient Assessment Acronyms",
  question: "In patient assessment, what does ABCDE help you remember during the primary assessment?",
  answers: [
    "Airway, breathing, circulation, disability, exposure",
    "Allergies, blood pressure, chief complaint, drugs, events",
    "Age, body, circulation, decision, evaluation",
    "Airway, bleeding, CPR, diagnosis, emergency"
  ],
  correct: 0,
  explanation: "ABCDE is used during the primary assessment. A = Airway, B = Breathing, C = Circulation, D = Disability/mental status, and E = Exposure."
},
{
  chapter: 9,
  topic: "Patient Assessment Acronyms",
  question: "What does SAMPLE help you gather?",
  answers: [
    "A patient history",
    "Only vital signs",
    "Only trauma findings",
    "Only airway problems"
  ],
  correct: 0,
  explanation: "SAMPLE is used during history taking. S = Signs/Symptoms, A = Allergies, M = Medications, P = Past medical history, L = Last oral intake, E = Events leading to the problem."
},
{
  chapter: 9,
  topic: "Patient Assessment Acronyms",
  question: "What does OPQRST help assess?",
  answers: [
    "Pain or a chief complaint",
    "Scene safety",
    "PPE choice",
    "Patient movement"
  ],
  correct: 0,
  explanation: "OPQRST is used during history taking for pain or symptoms. O = Onset, P = Provocation/Palliation, Q = Quality, R = Radiation, S = Severity, T = Time."
},
{
  chapter: 9,
  topic: "Trauma Assessment",
  question: "What does DCAP-BTLS help you look for?",
  answers: [
    "Signs of injury during a trauma assessment",
    "Medication names",
    "Respiratory history",
    "Legal consent"
  ],
  correct: 0,
  explanation: "DCAP-BTLS is used during trauma assessment/secondary assessment. D = Deformities, C = Contusions, A = Abrasions, P = Punctures/Penetrations, B = Burns, T = Tenderness, L = Lacerations, S = Swelling."
},
{
  chapter: 9,
  topic: "Respiratory Assessment",
  question: "What is PASTE commonly used for?",
  answers: [
    "Respiratory history questions",
    "Spinal motion restriction",
    "Scene safety",
    "Checking circulation"
  ],
  correct: 0,
  explanation: "PASTE is often used during respiratory history taking. P = Progression/Provocation, A = Associated chest pain, S = Sputum, T = Talking/Tiredness, E = Exercise tolerance."
},
{
  chapter: 9,
  topic: "Safety",
  question: "When should PPE and BSI be considered?",
  answers: [
    "Before patient contact during scene size-up",
    "Only after transport",
    "Only during documentation",
    "Only if the patient asks"
  ],
  correct: 0,
  explanation: "PPE and BSI are part of scene size-up and provider safety. PPE = Personal Protective Equipment. BSI = Body Substance Isolation."
},
{
  chapter: 9,
  topic: "Toxicology Clues",
  question: "What does SLUDGE help you remember?",
  answers: [
    "Cholinergic/organophosphate poisoning signs",
    "Pain assessment questions",
    "Airway equipment",
    "Vital sign order"
  ],
  correct: 0,
  explanation: "SLUDGE can help recognize cholinergic toxidrome during assessment. S = Salivation, L = Lacrimation, U = Urination, D = Defecation, G = Gastrointestinal upset, E = Emesis."
},
{
  chapter: 9,
  topic: "Altered Mental Status",
  question: "What is AEIOU-TIPS used for?",
  answers: [
    "Possible causes of altered mental status",
    "Scene size-up only",
    "Trauma bleeding control",
    "Lifting patients"
  ],
  correct: 0,
  explanation: "AEIOU-TIPS is used when assessing altered mental status. A = Alcohol/Acidosis, E = Epilepsy/Electrolytes, I = Insulin, O = Overdose/Oxygen, U = Uremia, T = Trauma/Temperature, I = Infection, P = Psychiatric/Poisoning, S = Stroke/Shock."
},
{
  chapter: 9,
  topic: "Scene Size-Up",
  question: "Where would ENAMES fit in patient assessment?",
  answers: [
    "Scene size-up",
    "Secondary assessment only",
    "Reassessment only",
    "After documentation"
  ],
  correct: 0,
  explanation: "ENAMES is used as a scene size-up memory tool in some EMT classes. It helps you think about Environment, Number of patients, Additional resources, Mechanism of injury/Nature of illness, Extrication needs, and Spinal precautions/Safety."
},
{
  chapter: 9,
  topic: "Patient Assessment Flow",
  question: "Which order best matches the general patient assessment flow?",
  answers: [
    "Scene size-up, primary assessment, history, secondary assessment, reassessment",
    "Documentation, transport, scene size-up, airway",
    "Secondary assessment, scene size-up, primary assessment",
    "SAMPLE, OPQRST, then scene safety"
  ],
  correct: 0,
  explanation: "The general flow is scene size-up first, then primary assessment, history taking, secondary assessment, and reassessment."
},

{
  chapter: 9,
  topic: "Patient Assessment",
  question: "What is the first step in patient assessment?",
  answers: [
    "Secondary assessment",
    "Scene size-up",
    "Taking blood pressure",
    "Writing the report"
  ],
  correct: 1,
  explanation: "Patient assessment starts with scene size-up, including safety, number of patients, and need for more resources."
},
{
  chapter: 9,
  topic: "Primary Assessment",
  question: "In the primary assessment, what does A stand for?",
  answers: [
    "Allergies",
    "Airway",
    "Alertness",
    "Assessment"
  ],
  correct: 1,
  explanation: "A stands for airway. You check if the airway is open and clear."
},
{
  chapter: 9,
  topic: "Scene Size-Up",
  question: "Which item is part of scene size-up?",
  answers: [
    "Checking scene safety",
    "Getting a full medication list",
    "Completing the PCR",
    "Taking three sets of vitals"
  ],
  correct: 0,
  explanation: "Scene size-up includes checking safety, mechanism of injury or nature of illness, number of patients, and needed resources."
},
{
  chapter: 9,
  topic: "Primary Assessment",
  question: "What is the main goal of the primary assessment?",
  answers: [
    "Find and treat life threats",
    "Get a full family history",
    "Complete billing information",
    "Choose the hospital cafeteria"
  ],
  correct: 0,
  explanation: "The primary assessment is focused on identifying and treating immediate life threats."
},
{
  chapter: 9,
  topic: "Breathing",
  question: "Which finding may suggest breathing difficulty?",
  answers: [
    "Speaking full sentences easily",
    "Normal skin color",
    "Use of accessory muscles",
    "Calm, relaxed breathing"
  ],
  correct: 2,
  explanation: "Accessory muscle use can suggest increased work of breathing."
},
{
  chapter: 9,
  topic: "Circulation",
  question: "What should you check when assessing circulation?",
  answers: [
    "Pulse, major bleeding, and skin condition",
    "Only the patient’s shoes",
    "Only blood pressure",
    "Only the patient’s name"
  ],
  correct: 0,
  explanation: "Circulation includes pulse, major bleeding, and skin signs such as color, temperature, and moisture."
},
{
  chapter: 9,
  topic: "History Taking",
  question: "What does SAMPLE help you remember?",
  answers: [
    "Patient history questions",
    "How to lift a stretcher",
    "Oxygen tank sizes",
    "Radio channels"
  ],
  correct: 0,
  explanation: "SAMPLE is used for patient history: signs/symptoms, allergies, medications, past history, last oral intake, and events."
},
{
  chapter: 9,
  topic: "History Taking",
  question: "What does OPQRST help assess?",
  answers: [
    "Pain or a chief complaint",
    "The ambulance engine",
    "Legal consent only",
    "Patient weight"
  ],
  correct: 0,
  explanation: "OPQRST helps assess pain or symptoms: onset, provocation, quality, radiation, severity, and time."
},
{
  chapter: 9,
  topic: "Secondary Assessment",
  question: "What is the purpose of the secondary assessment?",
  answers: [
    "To look more closely for injuries or medical findings",
    "To skip vital signs",
    "To replace the primary assessment",
    "To delay transport for every patient"
  ],
  correct: 0,
  explanation: "The secondary assessment is a more focused or detailed exam after life threats are addressed."
},
{
  chapter: 9,
  topic: "Reassessment",
  question: "Why is reassessment important?",
  answers: [
    "It checks whether the patient is improving, worsening, or staying the same",
    "It is only for paperwork",
    "It is done before scene safety",
    "It replaces transport"
  ],
  correct: 0,
  explanation: "Reassessment helps you monitor changes and decide if your treatment is working or if the patient is getting worse."
},
  {
  chapter: 10,
  topic: "Airway Management",
  question: "What is the purpose of suctioning?",
  answers: [
    "To remove fluids or secretions from the airway",
    "To give oxygen",
    "To check blood pressure",
    "To stop bleeding"
  ],
  correct: 0,
  explanation: "Suctioning helps remove vomit, blood, mucus, or other fluids from the airway."
},
{
  chapter: 10,
  topic: "Airway Management",
  question: "Which airway maneuver is commonly used when there is no suspected spinal injury?",
  answers: [
    "Jaw-thrust maneuver",
    "Head tilt-chin lift",
    "Chest compression",
    "Recovery drag"
  ],
  correct: 1,
  explanation: "The head tilt-chin lift is used to open the airway when spinal injury is not suspected."
},
{
  chapter: 10,
  topic: "Airway Management",
  question: "Which airway maneuver is preferred when spinal injury is suspected?",
  answers: [
    "Head tilt-chin lift",
    "Jaw-thrust maneuver",
    "Log roll only",
    "Finger sweep on every patient"
  ],
  correct: 1,
  explanation: "The jaw-thrust maneuver helps open the airway while limiting movement of the neck."
},
{
  chapter: 10,
  topic: "Airway Adjuncts",
  question: "What is an oropharyngeal airway also called?",
  answers: [
    "NPA",
    "OPA",
    "BVM",
    "AED"
  ],
  correct: 1,
  explanation: "An oropharyngeal airway is commonly called an OPA."
},
{
  chapter: 10,
  topic: "Airway Adjuncts",
  question: "When is an OPA usually used?",
  answers: [
    "In a conscious patient with a gag reflex",
    "In an unresponsive patient without a gag reflex",
    "In every patient with chest pain",
    "Only for walking patients"
  ],
  correct: 1,
  explanation: "An OPA is generally used for an unresponsive patient who does not have a gag reflex."
},
{
  chapter: 10,
  topic: "Airway Adjuncts",
  question: "What is a nasopharyngeal airway also called?",
  answers: [
    "NPA",
    "OPA",
    "BVM",
    "CPR"
  ],
  correct: 0,
  explanation: "A nasopharyngeal airway is commonly called an NPA."
},
{
  chapter: 10,
  topic: "Ventilation",
  question: "What device is commonly used to ventilate a patient who is not breathing adequately?",
  answers: [
    "Bag-valve mask",
    "Blood pressure cuff",
    "Stethoscope only",
    "Traction splint"
  ],
  correct: 0,
  explanation: "A bag-valve mask, or BVM, is used to provide positive-pressure ventilation."
},
{
  chapter: 10,
  topic: "Oxygen",
  question: "Which device can deliver high-concentration oxygen to a breathing patient?",
  answers: [
    "Nasal cannula",
    "Nonrebreather mask",
    "Bandage",
    "Backboard"
  ],
  correct: 1,
  explanation: "A nonrebreather mask can deliver a high concentration of oxygen to a patient who is breathing adequately."
},
{
  chapter: 10,
  topic: "Airway Management",
  question: "What sound may suggest fluid in the airway?",
  answers: [
    "Gurgling",
    "Clear speech",
    "Normal breathing",
    "Quiet relaxed breathing"
  ],
  correct: 0,
  explanation: "Gurgling can suggest fluid, vomit, blood, or secretions in the airway."
},
{
  chapter: 10,
  topic: "Ventilation",
  question: "What is an important sign that BVM ventilations are working?",
  answers: [
    "Chest rise with each ventilation",
    "The patient’s shoes move",
    "The oxygen tank gets colder only",
    "The mask is held loosely"
  ],
  correct: 0,
  explanation: "Visible chest rise is a key sign that air is entering the lungs during ventilation."
},
];

const flashcards = [
  // Chapter 1
  { chapter: 1, term: "EMS System", definition: "A network of people, equipment, and resources that provides emergency medical care." },
  { chapter: 1, term: "EMT", definition: "An emergency medical technician trained to provide basic emergency care and transport." },
  { chapter: 1, term: "Medical Direction", definition: "Physician oversight that guides EMS care through protocols or direct orders." },
  { chapter: 1, term: "Offline Medical Direction", definition: "Standing orders or protocols written before the call." },
  { chapter: 1, term: "Online Medical Direction", definition: "Direct communication with a physician during a call." },
  { chapter: 1, term: "Scope of Practice", definition: "The skills and care an EMT is legally allowed to perform." },
  { chapter: 1, term: "Standard of Care", definition: "The level of care expected from a trained EMT in a similar situation." },
  { chapter: 1, term: "Quality Improvement", definition: "Reviewing EMS care to improve patient outcomes and system performance." },
  { chapter: 1, term: "Public Health", definition: "Community efforts to prevent illness, injury, and health problems." },
  { chapter: 1, term: "Continuing Education", definition: "Ongoing training used to keep EMT knowledge and skills current." },
  { chapter: 1, term: "911 Dispatch", definition: "The system that receives emergency calls and sends EMS, fire, or police resources." },
  { chapter: 1, term: "First Responder", definition: "A trained person who arrives early and begins basic emergency care." },
  { chapter: 1, term: "Paramedic", definition: "An advanced EMS provider trained in advanced life support skills." },
  { chapter: 1, term: "Advanced EMT", definition: "EMS provider with training between EMT and paramedic level." },
  { chapter: 1, term: "Patient Advocacy", definition: "Acting in the patient’s best interest and protecting their needs." },
  { chapter: 1, term: "Protocols", definition: "Written care guidelines EMTs follow during patient treatment." },
  { chapter: 1, term: "Certification", definition: "Recognition that a person has met training and testing requirements." },
  { chapter: 1, term: "Licensure", definition: "Legal permission from the state to practice as an EMS provider." },
  { chapter: 1, term: "Public Safety", definition: "Protecting the community from injury, illness, and dangerous situations." },
  { chapter: 1, term: "EMS Chain of Care", definition: "The connected steps from emergency call to patient treatment and transport." },

  // Chapter 2
  { chapter: 2, term: "Scene Safety", definition: "Checking for danger before entering a scene or beginning patient care." },
  { chapter: 2, term: "PPE", definition: "Personal protective equipment used to reduce exposure to hazards." },
  { chapter: 2, term: "BSI", definition: "Body substance isolation; precautions to reduce contact with blood and body fluids." },
  { chapter: 2, term: "Standard Precautions", definition: "Infection-control practices used with all patients." },
  { chapter: 2, term: "Hand Hygiene", definition: "Cleaning hands to reduce the spread of infection." },
  { chapter: 2, term: "Stress Reaction", definition: "Physical or emotional response to a difficult or traumatic event." },
  { chapter: 2, term: "Burnout", definition: "Long-term emotional exhaustion and reduced motivation from repeated stress." },
  { chapter: 2, term: "Exposure Incident", definition: "Contact with blood, body fluids, or infectious material." },
  { chapter: 2, term: "Hazardous Scene", definition: "A scene with risks such as violence, traffic, fire, chemicals, or unstable structures." },
  { chapter: 2, term: "Provider Wellness", definition: "Maintaining physical, mental, and emotional health as an EMS provider." },
  { chapter: 2, term: "Gloves", definition: "PPE used to protect hands from blood and body fluids." },
  { chapter: 2, term: "Eye Protection", definition: "PPE used to protect the eyes from splashes or droplets." },
  { chapter: 2, term: "Mask", definition: "PPE used to reduce exposure to airborne or droplet hazards." },
  { chapter: 2, term: "Gown", definition: "PPE used when clothing may be exposed to fluids." },
  { chapter: 2, term: "Sharps Injury", definition: "Injury caused by a needle or sharp medical object." },
  { chapter: 2, term: "Decontamination", definition: "Cleaning or removing harmful substances from people, equipment, or scenes." },
  { chapter: 2, term: "Critical Incident Stress", definition: "Stress response after a highly traumatic EMS event." },
  { chapter: 2, term: "Fatigue", definition: "Tiredness that can reduce focus, safety, and decision-making." },
  { chapter: 2, term: "Situational Awareness", definition: "Being aware of surroundings, hazards, and changing scene conditions." },
  { chapter: 2, term: "Violence Risk", definition: "Possible danger from aggressive patients, bystanders, weapons, or unsafe environments." },

  // Chapter 3
  { chapter: 3, term: "Consent", definition: "Permission from the patient to assess, treat, or transport." },
  { chapter: 3, term: "Expressed Consent", definition: "Consent clearly given by words or actions." },
  { chapter: 3, term: "Implied Consent", definition: "Consent assumed for an unresponsive patient who needs emergency care." },
  { chapter: 3, term: "Informed Consent", definition: "Consent given after the patient understands risks, benefits, and options." },
  { chapter: 3, term: "Refusal of Care", definition: "A competent patient’s decision to decline assessment, treatment, or transport." },
  { chapter: 3, term: "Negligence", definition: "Failure to provide expected care, possibly causing harm." },
  { chapter: 3, term: "Duty to Act", definition: "A legal obligation to provide care while on duty." },
  { chapter: 3, term: "Abandonment", definition: "Ending care without transferring to an equal or higher-level provider." },
  { chapter: 3, term: "Confidentiality", definition: "Protecting private patient information." },
  { chapter: 3, term: "DNR", definition: "Do-not-resuscitate order; a medical order limiting resuscitation efforts." },
  { chapter: 3, term: "Competent Patient", definition: "A patient who can understand information and make their own medical decisions." },
  { chapter: 3, term: "Minor", definition: "A patient under the legal adult age who usually needs guardian consent." },
  { chapter: 3, term: "Emancipated Minor", definition: "A minor legally treated as an adult in certain situations." },
  { chapter: 3, term: "Assault", definition: "Creating fear of unwanted touching or harm." },
  { chapter: 3, term: "Battery", definition: "Touching a patient without consent." },
  { chapter: 3, term: "Good Samaritan Law", definition: "Law that may protect people who provide emergency care in good faith." },
  { chapter: 3, term: "HIPAA", definition: "Law that protects private patient health information." },
  { chapter: 3, term: "Ethics", definition: "Principles of right and wrong behavior in patient care." },
  { chapter: 3, term: "Mandatory Reporting", definition: "Legal requirement to report certain situations, such as abuse or neglect." },
  { chapter: 3, term: "Scope Violation", definition: "Performing care outside what an EMT is trained or legally allowed to do." },

  // Chapter 4
  { chapter: 4, term: "Communication", definition: "Sharing information clearly between EMTs, patients, dispatch, and hospital staff." },
  { chapter: 4, term: "Therapeutic Communication", definition: "Communication that helps calm, support, and gather information from the patient." },
  { chapter: 4, term: "Radio Report", definition: "A brief organized report given to the hospital or medical control." },
  { chapter: 4, term: "PCR", definition: "Patient care report; the legal document of assessment, care, and transport." },
  { chapter: 4, term: "Handoff Report", definition: "Report given when transferring care to another provider." },
  { chapter: 4, term: "Objective Information", definition: "Facts you observe or measure, such as vital signs." },
  { chapter: 4, term: "Subjective Information", definition: "Information the patient tells you, such as pain or symptoms." },
  { chapter: 4, term: "Pertinent Negatives", definition: "Important findings the patient denies, such as no chest pain." },
  { chapter: 4, term: "Documentation Error", definition: "A mistake in a report that should be corrected according to policy." },
  { chapter: 4, term: "Professional Language", definition: "Clear, respectful, and objective wording in speech and reports." },
  { chapter: 4, term: "Closed-Loop Communication", definition: "Repeating and confirming instructions to reduce mistakes." },
  { chapter: 4, term: "Chief Complaint", definition: "The main reason the patient called EMS." },
  { chapter: 4, term: "Medical Control", definition: "Physician or approved authority giving EMS guidance." },
  { chapter: 4, term: "Dispatch Information", definition: "Information given before arrival, such as location and call type." },
  { chapter: 4, term: "Verbal Report", definition: "Spoken handoff of patient information to another provider." },
  { chapter: 4, term: "Written Report", definition: "Documented record of patient assessment and care." },
  { chapter: 4, term: "Clear Speech", definition: "Speaking in a way that is easy to understand." },
  { chapter: 4, term: "Plain Language", definition: "Simple wording that avoids confusing jargon." },
  { chapter: 4, term: "Patient Quote", definition: "Exact words from the patient included in documentation." },
  { chapter: 4, term: "Refusal Documentation", definition: "Record showing the patient refused care and was informed of risks." },

  // Chapter 5
  { chapter: 5, term: "Brady-", definition: "Slow." },
  { chapter: 5, term: "Tachy-", definition: "Fast." },
  { chapter: 5, term: "Hypo-", definition: "Low or below normal." },
  { chapter: 5, term: "Hyper-", definition: "High or excessive." },
  { chapter: 5, term: "-itis", definition: "Inflammation." },
  { chapter: 5, term: "-algia", definition: "Pain." },
  { chapter: 5, term: "Cardi", definition: "Heart." },
  { chapter: 5, term: "Pulmon", definition: "Lung." },
  { chapter: 5, term: "Dyspnea", definition: "Difficulty breathing." },
  { chapter: 5, term: "Cyanosis", definition: "Bluish skin or mucous membranes from poor oxygenation." },
  { chapter: 5, term: "A-", definition: "Without or absence of." },
  { chapter: 5, term: "Dys-", definition: "Difficult, painful, or abnormal." },
  { chapter: 5, term: "Eu-", definition: "Normal or good." },
  { chapter: 5, term: "Peri-", definition: "Around." },
  { chapter: 5, term: "Sub-", definition: "Below or under." },
  { chapter: 5, term: "Supra-", definition: "Above." },
  { chapter: 5, term: "Neuro", definition: "Nerve or nervous system." },
  { chapter: 5, term: "Gastro", definition: "Stomach." },
  { chapter: 5, term: "Hepato", definition: "Liver." },
  { chapter: 5, term: "Renal", definition: "Kidney-related." },

  // Chapter 6
  { chapter: 6, term: "Anatomical Position", definition: "Standing upright, facing forward, arms at sides, palms forward." },
  { chapter: 6, term: "Anterior", definition: "Toward the front of the body." },
  { chapter: 6, term: "Posterior", definition: "Toward the back of the body." },
  { chapter: 6, term: "Medial", definition: "Toward the midline." },
  { chapter: 6, term: "Lateral", definition: "Away from the midline." },
  { chapter: 6, term: "Respiratory System", definition: "System that brings oxygen in and removes carbon dioxide." },
  { chapter: 6, term: "Cardiovascular System", definition: "Heart and blood vessels that circulate blood." },
  { chapter: 6, term: "Nervous System", definition: "Brain, spinal cord, and nerves that control body functions." },
  { chapter: 6, term: "Red Blood Cells", definition: "Cells that carry oxygen to body tissues." },
  { chapter: 6, term: "Perfusion", definition: "Delivery of oxygen and nutrients to body tissues through blood flow." },
  { chapter: 6, term: "Superior", definition: "Toward the head or above." },
  { chapter: 6, term: "Inferior", definition: "Toward the feet or below." },
  { chapter: 6, term: "Proximal", definition: "Closer to the point of attachment." },
  { chapter: 6, term: "Distal", definition: "Farther from the point of attachment." },
  { chapter: 6, term: "Supine", definition: "Lying face up." },
  { chapter: 6, term: "Prone", definition: "Lying face down." },
  { chapter: 6, term: "Fowler Position", definition: "Sitting upright or semi-upright." },
  { chapter: 6, term: "Shock", definition: "Poor perfusion causing inadequate oxygen delivery to tissues." },
  { chapter: 6, term: "Homeostasis", definition: "The body’s ability to maintain internal balance." },
  { chapter: 6, term: "Integumentary System", definition: "Skin and related structures that protect the body." },

  // Chapter 7
  { chapter: 7, term: "Life Span Development", definition: "Physical, mental, and emotional changes from birth through older adulthood." },
  { chapter: 7, term: "Infant", definition: "A very young child with small airways and fast normal vital signs." },
  { chapter: 7, term: "Toddler", definition: "A young child who may fear separation and have limited communication." },
  { chapter: 7, term: "Preschool Age", definition: "A child who may use imagination and fear pain or injury." },
  { chapter: 7, term: "School Age", definition: "A child who can usually answer simple questions and follow directions." },
  { chapter: 7, term: "Adolescent", definition: "A teen who often values privacy, respect, and independence." },
  { chapter: 7, term: "Middle Adult", definition: "Adult stage where risks like heart disease and diabetes may increase." },
  { chapter: 7, term: "Older Adult", definition: "Patient who may have chronic illness, multiple medications, and fall risk." },
  { chapter: 7, term: "Caregiver", definition: "A person who can help calm a child or provide patient history." },
  { chapter: 7, term: "Fall Risk", definition: "Higher chance of injury from falling, especially in older adults." },
  { chapter: 7, term: "Newborn", definition: "Very young infant with unique airway, breathing, and temperature needs." },
  { chapter: 7, term: "Separation Anxiety", definition: "Fear or distress when a child is separated from a caregiver." },
  { chapter: 7, term: "Stranger Anxiety", definition: "Fear of unfamiliar people, common in young children." },
  { chapter: 7, term: "Privacy", definition: "Important need for adolescents and adults during assessment." },
  { chapter: 7, term: "Chronic Disease", definition: "Long-term medical condition more common with aging." },
  { chapter: 7, term: "Polypharmacy", definition: "Use of multiple medications, often seen in older adults." },
  { chapter: 7, term: "Fragile Skin", definition: "Skin that tears or bruises easily, often in older adults." },
  { chapter: 7, term: "Developmental Stage", definition: "A period of life with typical physical, emotional, and mental traits." },
  { chapter: 7, term: "Pediatric Assessment", definition: "Assessment adjusted for a child’s size, age, and communication level." },
  { chapter: 7, term: "Geriatric Assessment", definition: "Assessment adjusted for older adult risks, history, and medications." },

  // Chapter 8
  { chapter: 8, term: "Body Mechanics", definition: "Using safe posture and movement to prevent injury while lifting." },
  { chapter: 8, term: "Power Lift", definition: "A lift using leg strength while keeping the back straight." },
  { chapter: 8, term: "Emergency Move", definition: "Rapid move used when there is immediate danger." },
  { chapter: 8, term: "Urgent Move", definition: "Move used when quick movement is needed but danger is not immediate." },
  { chapter: 8, term: "Nonurgent Move", definition: "Planned move used when the patient and scene are stable." },
  { chapter: 8, term: "Wheeled Stretcher", definition: "Device used to move and transport patients." },
  { chapter: 8, term: "Stair Chair", definition: "Device used to move patients on stairs." },
  { chapter: 8, term: "Log Roll", definition: "Coordinated roll used to move a patient while limiting spinal movement." },
  { chapter: 8, term: "Communication During Lifting", definition: "Using clear commands so rescuers move together." },
  { chapter: 8, term: "Additional Help", definition: "Extra personnel or equipment requested when a move is unsafe." },
  { chapter: 8, term: "Direct Ground Lift", definition: "Lift used to move a patient from the ground with multiple rescuers." },
  { chapter: 8, term: "Extremity Lift", definition: "Lift using the patient’s arms and legs when appropriate." },
  { chapter: 8, term: "Draw Sheet Method", definition: "Moving a patient by pulling a sheet underneath them." },
  { chapter: 8, term: "Scoop Stretcher", definition: "Device that separates and slides under a patient with less movement." },
  { chapter: 8, term: "Basket Stretcher", definition: "Stretcher used for rough terrain or rescue situations." },
  { chapter: 8, term: "Manual Stabilization", definition: "Holding the head or body part steady to reduce movement." },
  { chapter: 8, term: "Patient Packaging", definition: "Preparing and securing a patient for movement or transport." },
  { chapter: 8, term: "Lifting Partner", definition: "Another rescuer helping move a patient safely." },
  { chapter: 8, term: "Weight Distribution", definition: "How weight is shared during a lift or move." },
  { chapter: 8, term: "Safe Move", definition: "A move that protects both patient and rescuers from injury." },

  // Chapter 9
  { chapter: 9, term: "ABCDE", definition: "Primary assessment acronym. A = Airway, B = Breathing, C = Circulation, D = Disability/mental status, E = Exposure." },
{ chapter: 9, term: "SAMPLE", definition: "History-taking acronym. S = Signs/Symptoms, A = Allergies, M = Medications, P = Past medical history, L = Last oral intake, E = Events leading to the problem." },
{ chapter: 9, term: "OPQRST", definition: "Pain/symptom assessment acronym. O = Onset, P = Provocation/Palliation, Q = Quality, R = Radiation, S = Severity, T = Time." },
{ chapter: 9, term: "DCAP-BTLS", definition: "Trauma assessment acronym. D = Deformities, C = Contusions, A = Abrasions, P = Punctures/Penetrations, B = Burns, T = Tenderness, L = Lacerations, S = Swelling." },
{ chapter: 9, term: "PASTE", definition: "Respiratory history acronym. P = Progression/Provocation, A = Associated chest pain, S = Sputum, T = Talking/Tiredness, E = Exercise tolerance." },
{ chapter: 9, term: "PPE", definition: "Personal Protective Equipment. Used during scene size-up and before patient contact to protect yourself from hazards." },
{ chapter: 9, term: "BSI", definition: "Body Substance Isolation. Used during scene size-up to protect against blood, body fluids, and infectious material." },
{ chapter: 9, term: "SLUDGE", definition: "Possible cholinergic poisoning signs. S = Salivation, L = Lacrimation, U = Urination, D = Defecation, G = GI upset, E = Emesis." },
{ chapter: 9, term: "AEIOU-TIPS", definition: "Altered mental status causes. A = Alcohol/Acidosis, E = Epilepsy/Electrolytes, I = Insulin, O = Overdose/Oxygen, U = Uremia, T = Trauma/Temperature, I = Infection, P = Psychiatric/Poisoning, S = Stroke/Shock." },
{ chapter: 9, term: "ENAMES", definition: "Scene size-up memory tool. E = Environment, N = Number of patients, A = Additional resources, M = MOI/NOI, E = Extrication, S = Spinal precautions/Safety. Confirm with your instructor’s version." },
  { chapter: 9, term: "Scene Size-Up", definition: "First assessment step: check safety, number of patients, and needed resources." },
  { chapter: 9, term: "Primary Assessment", definition: "Quick assessment to find and treat life threats." },
  { chapter: 9, term: "Airway", definition: "The path air takes into and out of the lungs." },
  { chapter: 9, term: "Breathing", definition: "Checking rate, effort, chest rise, and signs of respiratory distress." },
  { chapter: 9, term: "Circulation", definition: "Checking pulse, major bleeding, and skin signs." },
  { chapter: 9, term: "SAMPLE", definition: "Signs/symptoms, allergies, medications, past history, last intake, events." },
  { chapter: 9, term: "OPQRST", definition: "Onset, provocation, quality, radiation, severity, and time." },
  { chapter: 9, term: "Secondary Assessment", definition: "More focused or detailed exam after life threats are addressed." },
  { chapter: 9, term: "Reassessment", definition: "Repeating assessment to check if the patient changes." },
  { chapter: 9, term: "Transport Decision", definition: "Decision about how quickly and where the patient should be transported." },
  { chapter: 9, term: "General Impression", definition: "Your first overall view of how sick or injured the patient appears." },
  { chapter: 9, term: "AVPU", definition: "Alert, verbal, painful, unresponsive; a quick mental status check." },
  { chapter: 9, term: "Chief Complaint", definition: "The patient’s main problem or reason EMS was called." },
  { chapter: 9, term: "DCAP-BTLS", definition: "Memory tool for injury assessment: deformities, contusions, abrasions, punctures, burns, tenderness, lacerations, swelling." },
  { chapter: 9, term: "Vital Signs", definition: "Measurements such as pulse, respirations, blood pressure, and skin signs." },
  { chapter: 9, term: "Baseline Vitals", definition: "First set of vital signs used for comparison later." },
  { chapter: 9, term: "Rapid Scan", definition: "Quick exam to find serious bleeding or life threats." },
  { chapter: 9, term: "Focused Assessment", definition: "Assessment focused on the patient’s main complaint or affected body system." },
  { chapter: 9, term: "Trending", definition: "Comparing repeated findings to see if the patient is improving or worsening." },
  { chapter: 9, term: "Priority Patient", definition: "A patient with signs of serious illness or injury needing rapid transport." },

  // Chapter 10
  { chapter: 10, term: "Airway Management", definition: "Keeping the airway open and clear so the patient can breathe." },
  { chapter: 10, term: "Head Tilt-Chin Lift", definition: "Airway maneuver used when spinal injury is not suspected." },
  { chapter: 10, term: "Jaw-Thrust Maneuver", definition: "Airway maneuver preferred when spinal injury is suspected." },
  { chapter: 10, term: "Suctioning", definition: "Removing blood, vomit, mucus, or secretions from the airway." },
  { chapter: 10, term: "OPA", definition: "Oropharyngeal airway used for an unresponsive patient without a gag reflex." },
  { chapter: 10, term: "NPA", definition: "Nasopharyngeal airway inserted through the nose to help maintain an airway." },
  { chapter: 10, term: "BVM", definition: "Bag-valve mask used to ventilate patients who are not breathing adequately." },
  { chapter: 10, term: "Nonrebreather Mask", definition: "Oxygen mask that can deliver high-concentration oxygen." },
  { chapter: 10, term: "Gurgling", definition: "Airway sound that may mean fluid is present." },
  { chapter: 10, term: "Chest Rise", definition: "Visible rise of the chest showing air is entering during ventilation." },
  { chapter: 10, term: "Patent Airway", definition: "An open airway that allows air to move in and out." },
  { chapter: 10, term: "Airway Obstruction", definition: "A blockage that prevents normal airflow." },
  { chapter: 10, term: "Snoring", definition: "Airway sound that may suggest the tongue is blocking the airway." },
  { chapter: 10, term: "Stridor", definition: "High-pitched sound that may suggest upper airway obstruction." },
  { chapter: 10, term: "Wheezing", definition: "Whistling lung sound often related to narrowed lower airways." },
  { chapter: 10, term: "Agonal Breathing", definition: "Irregular gasping breaths that are not adequate breathing." },
  { chapter: 10, term: "Ventilation", definition: "Moving air in and out of the lungs." },
  { chapter: 10, term: "Oxygenation", definition: "Getting oxygen into the blood." },
  { chapter: 10, term: "Nasal Cannula", definition: "Low-flow oxygen device placed in the nostrils." },
  { chapter: 10, term: "Pulse Oximetry", definition: "Tool that estimates oxygen saturation in the blood." }
];