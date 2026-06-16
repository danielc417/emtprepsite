const chapters = [
  {
    id: 6,
    title: "The Human Body",
    description: "Anatomy, body systems, planes, positions, and basic physiology."
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
    title: "Anatomy of the Respiratory System",
    description: "Upper airway, lower airway, lungs, thoracic structures, and pediatric airway anatomy."
  },
  {
    id: 12,
    title: "Chapter 12: Shock",
    description: "Perfusion, shock types, progression, patient assessment, and emergency care."
  },
  {
    id: 14,
    title: "Chapter 14: Medical Overview",
    description: "Medical calls, NOI, infection risks, destination decisions, terminology, and scenarios."
  },
  {
    id: 15,
    title: "Respiratory Emergencies",
    description: "Dyspnea, breath sounds, respiratory diseases, oxygen, BVM, CPAP, inhalers, and special airway problems."
  },
  {
    id: 16,
    title: "Chapter 16: Cardiovascular Emergencies",
    description: "Heart anatomy, ACS, cardiac chest pain, CHF, cardiac medications, devices, cardiac arrest, and AED care."
  },
  {
    id: 17,
    title: "Chapter 17: Neurologic Emergencies",
    description: "Stroke, TIA, seizures, headache red flags, altered mental status, stroke scales, and transport decisions."
  },
  {
    id: 18,
    title: "Chapter 18: Gastrointestinal and Urologic Emergencies",
    description: "Acute abdomen, GI bleeding, peritonitis, renal failure, dialysis, urinary disorders, and shock risk."
  },
  {
    id: 19,
    title: "Chapter 19: Endocrine and Hematologic Emergencies",
    description: "Diabetes, DKA, hypoglycemia, HHNS, sickle cell crisis, hemophilia, thrombosis, and supportive care."
  },
  {
    id: 20,
    title: "Chapter 20: Allergy and Anaphylaxis",
    description: "Allergic reactions, anaphylaxis, airway swelling, shock, epinephrine, triggers, and reassessment."
  },
  {
    id: 21,
    title: "Chapter 21: Toxicology",
    description: "Poisoning routes, toxidromes, naloxone, activated charcoal, poison control, and contaminated scenes."
  },
  {
    id: 22,
    title: "Chapter 22: Psychiatric Emergencies",
    description: "Behavioral crisis, medical mimics, suicide risk, agitated delirium, restraint safety, and legal concerns."
  }
];

const chapter12Questions = [
  { question: "What is shock also called?", options: ["Hypertension", "Hypoperfusion", "Hyperglycemia", "Hypoxia only"], answer: "Hypoperfusion", explanation: "Shock is inadequate tissue perfusion, also called hypoperfusion." },
  { question: "What does perfusion mean?", options: ["Movement of air into lungs", "Circulation of blood through tissues", "Swelling of blood vessels", "Removal of carbon dioxide only"], answer: "Circulation of blood through tissues", explanation: "Perfusion is blood flow through organs and tissues to deliver oxygen and remove waste." },
  { question: "Which three parts make up the perfusion triangle?", options: ["Brain, lungs, kidneys", "Pump, container, content", "Arteries, veins, nerves", "Heart, liver, spleen"], answer: "Pump, container, content", explanation: "Good perfusion requires an effective pump, adequate container, and enough circulating content." },
  { question: "In the perfusion triangle, the pump refers to the:", options: ["Brain", "Heart", "Lungs", "Blood vessels"], answer: "Heart", explanation: "The heart is the pump that moves blood through the body." },
  { question: "In the perfusion triangle, the container refers to the:", options: ["Blood vessels", "Red blood cells", "Heart valves", "Alveoli"], answer: "Blood vessels", explanation: "The container is the vascular system that holds and distributes blood." },
  { question: "In the perfusion triangle, the content refers to:", options: ["Air", "Blood or fluid volume", "Nerves", "Bone marrow"], answer: "Blood or fluid volume", explanation: "Content is the circulating volume inside the vessels." },
  { question: "Cardiogenic shock is caused by failure of the:", options: ["Pump", "Container", "Content", "Skin"], answer: "Pump", explanation: "Cardiogenic shock occurs when the heart cannot pump effectively." },
  { question: "Hypovolemic shock is caused by failure of the:", options: ["Pump", "Container", "Content", "Brainstem"], answer: "Content", explanation: "Hypovolemic shock is caused by inadequate circulating volume." },
  { question: "Distributive shock is usually caused by:", options: ["Blood vessel dilation", "Heart attack only", "Lack of red blood cell production only", "Broken bones"], answer: "Blood vessel dilation", explanation: "Distributive shock involves an expanded or poorly controlled container." },
  { question: "Which is a late sign of shock?", options: ["Anxiety", "Tachycardia", "Low blood pressure", "Pale skin"], answer: "Low blood pressure", explanation: "The body can maintain blood pressure early, so hypotension is often late." },
  { question: "Why should EMTs not wait for hypotension to identify shock?", options: ["BP is never useful", "Hypotension usually appears late", "BP always rises in shock", "Shock only affects breathing"], answer: "Hypotension usually appears late", explanation: "Early recognition depends on mental status, pulse, respirations, and skin signs." },
  { question: "What type of shock is caused by severe blood loss?", options: ["Neurogenic", "Hemorrhagic", "Psychogenic", "Septic"], answer: "Hemorrhagic", explanation: "Hemorrhagic shock is shock from blood loss." },
  { question: "Hemorrhagic shock is a form of:", options: ["Cardiogenic shock", "Hypovolemic shock", "Neurogenic shock", "Obstructive shock"], answer: "Hypovolemic shock", explanation: "Blood loss reduces circulating volume, so it is hypovolemic shock." },
  { question: "Which sign best fits hypovolemic shock?", options: ["Warm, dry skin and slow pulse", "Pale, cool, clammy skin and fast pulse", "Normal pulse and flushed skin", "Hives only"], answer: "Pale, cool, clammy skin and fast pulse", explanation: "The body constricts skin vessels and raises heart rate to protect vital organs." },
  { question: "Which type of shock may show warm, dry skin and a slow pulse?", options: ["Hypovolemic", "Neurogenic", "Hemorrhagic", "Respiratory"], answer: "Neurogenic", explanation: "Neurogenic shock can cause low blood pressure with warm, dry skin and normal or slow pulse." },
  { question: "What type of shock is caused by severe allergic reaction?", options: ["Anaphylactic", "Psychogenic", "Cardiogenic", "Hemorrhagic"], answer: "Anaphylactic", explanation: "Anaphylaxis can cause airway swelling, bronchospasm, vessel dilation, and shock." },
  { question: "What medication is commonly used for anaphylactic shock per protocol?", options: ["Aspirin", "Epinephrine", "Oral glucose", "Activated charcoal"], answer: "Epinephrine", explanation: "EMTs may assist with epinephrine auto-injector use according to local protocol." },
  { question: "Septic shock is usually related to:", options: ["Severe infection", "Broken femur only", "Anxiety", "Low blood sugar"], answer: "Severe infection", explanation: "Sepsis can cause vessel dilation, fluid leakage, and poor tissue perfusion." },
  { question: "Obstructive shock means:", options: ["The heart is too slow from exercise", "Blood flow is blocked by a physical problem", "Blood vessels shrink too much", "The patient is only dehydrated"], answer: "Blood flow is blocked by a physical problem", explanation: "Obstructive shock occurs when something physically prevents effective blood flow." },
  { question: "Which condition can cause obstructive shock?", options: ["Tension pneumothorax", "Simple headache", "Mild rash", "Sprained ankle"], answer: "Tension pneumothorax", explanation: "A tension pneumothorax can obstruct venous return and cardiac output." },
  { question: "Cardiac tamponade can cause what type of shock?", options: ["Obstructive", "Psychogenic", "Septic", "Neurogenic"], answer: "Obstructive", explanation: "Tamponade physically limits the heart's ability to fill and pump." },
  { question: "Pulmonary embolism can cause what type of shock?", options: ["Obstructive", "Hypovolemic", "Psychogenic", "Anaphylactic only"], answer: "Obstructive", explanation: "A pulmonary embolism blocks blood flow through the pulmonary circulation." },
  { question: "What is compensated shock?", options: ["Shock where the body still maintains blood pressure", "Shock where the patient is dead", "Shock with no symptoms", "Shock caused only by infection"], answer: "Shock where the body still maintains blood pressure", explanation: "In compensated shock, the body is still able to maintain blood pressure." },
  { question: "Which is common in compensated shock?", options: ["Slow breathing", "Fast heart rate", "No pulse", "Normal mental status always"], answer: "Fast heart rate", explanation: "Tachycardia is an early compensation to maintain cardiac output." },
  { question: "Decompensated shock usually includes:", options: ["High blood pressure", "Low blood pressure", "No change in mental status", "Normal skin signs"], answer: "Low blood pressure", explanation: "Decompensated shock occurs when compensation fails and blood pressure drops." },
  { question: "Irreversible shock means:", options: ["Patient is improving", "Damage is too severe to recover", "Patient only fainted", "Shock has not started"], answer: "Damage is too severe to recover", explanation: "In irreversible shock, cell and organ damage may be beyond recovery." },
  { question: "Anaerobic metabolism happens when cells lack:", options: ["Calcium", "Oxygen", "White blood cells", "Platelets"], answer: "Oxygen", explanation: "Without enough oxygen, cells switch to inefficient anaerobic energy production." },
  { question: "Anaerobic metabolism can lead to:", options: ["Acidosis", "Better perfusion", "Increased oxygen delivery", "Normal organ function"], answer: "Acidosis", explanation: "Anaerobic metabolism produces acidic waste that can worsen organ function." },
  { question: "Which patient should be considered unstable?", options: ["Alert patient with normal breathing", "Patient with altered mental status and weak pulse", "Patient with isolated finger pain", "Patient with normal skin and no complaint"], answer: "Patient with altered mental status and weak pulse", explanation: "Altered mental status and a weak pulse suggest poor perfusion and instability." },
  { question: "A shock patient should generally be reassessed every:", options: ["30 minutes", "20 minutes", "5 minutes", "60 minutes"], answer: "5 minutes", explanation: "Unstable patients should be reassessed about every 5 minutes." },
  { question: "What should be done first for severe external bleeding?", options: ["Give water", "Control bleeding", "Ask insurance information", "Walk the patient around"], answer: "Control bleeding", explanation: "Major bleeding is an immediate life threat and must be controlled early." },
  { question: "Which is a major goal in shock management?", options: ["Increase oxygen delivery to cells", "Delay transport", "Keep the patient walking", "Give food"], answer: "Increase oxygen delivery to cells", explanation: "Shock care supports oxygenation, ventilation, circulation, and rapid transport." },
  { question: "Why should shock patients be kept warm?", options: ["Cold improves clotting", "Hypothermia can worsen shock", "It prevents all infections", "It raises blood sugar"], answer: "Hypothermia can worsen shock", explanation: "Cold stress can worsen bleeding, clotting problems, and shock." },
  { question: "Which is not appropriate for a shock patient?", options: ["Oxygen if needed", "Rapid transport", "Frequent reassessment", "Giving food and drink"], answer: "Giving food and drink", explanation: "Shock patients should not be given food or drink in the field." },
  { question: "Respiratory insufficiency can cause shock because:", options: ["Oxygen cannot adequately reach the blood/cells", "The bones stop producing calcium", "The skin becomes too warm", "The stomach stops digesting"], answer: "Oxygen cannot adequately reach the blood/cells", explanation: "If breathing is inadequate, oxygen delivery to tissues can fail." },
  { question: "In cardiogenic shock, the main problem is:", options: ["Heart cannot pump effectively", "Blood vessels are too large only", "Blood volume is always lost", "Patient is fainting from fear"], answer: "Heart cannot pump effectively", explanation: "Cardiogenic shock is pump failure." },
  { question: "A patient with vomiting and diarrhea may develop:", options: ["Hypovolemic shock", "Cardiogenic shock only", "Neurogenic shock only", "Psychogenic shock only"], answer: "Hypovolemic shock", explanation: "Vomiting and diarrhea can cause fluid loss and reduced circulating volume." },
  { question: "A burn patient may go into shock because of:", options: ["Plasma/fluid loss", "Extra oxygen", "Too much blood volume", "Increased bone density"], answer: "Plasma/fluid loss", explanation: "Burns can cause major fluid and plasma loss, leading to hypovolemic shock." },
  { question: "Restlessness and anxiety in shock usually happen because:", options: ["Brain is not getting enough oxygen/perfusion", "Patient is always pretending", "Blood pressure is always high", "Skin temperature is normal"], answer: "Brain is not getting enough oxygen/perfusion", explanation: "The brain is very sensitive to poor oxygen delivery and perfusion." },
  { question: "Best EMT mindset for shock is:", options: ["Wait until BP drops", "Recognize early signs and treat fast", "Only treat if patient is unconscious", "Shock is not serious"], answer: "Recognize early signs and treat fast", explanation: "Shock is time-sensitive. Recognize early, support ABCs, control bleeding, keep warm, and transport." }
];

const chapter14Questions = [
  {
    question: "A patient develops crushing chest pain, loses control of the vehicle, and collides with a parked car. Which statement is MOST accurate regarding classification of this call?",
    options: ["This is purely trauma", "This is purely medical", "Both medical and traumatic emergencies may exist simultaneously", "Only visible injuries should be treated"],
    answer: "Both medical and traumatic emergencies may exist simultaneously",
    explanation: "Medical emergencies can cause traumatic events, so EMTs must assess for both.",
    category: "Medical vs Trauma",
    chapter: 14
  },
  {
    question: "During scene size-up of a medical patient, determining the nature of illness primarily involves:",
    options: ["Reading dispatch notes only", "Gathering clues from scene, patient, family, and complaint", "Waiting until hospital diagnosis", "Obtaining a blood pressure first"],
    answer: "Gathering clues from scene, patient, family, and complaint",
    explanation: "NOI comes from scene clues and patient presentation, not just dispatch.",
    category: "Nature of Illness / Patient Assessment",
    chapter: 14
  },
  {
    question: "Which patient should raise the highest concern for infectious disease exposure?",
    options: ["Patient with ankle sprain", "Patient with fever, cough, and recent international travel", "Patient with isolated wrist pain", "Patient with minor abrasion"],
    answer: "Patient with fever, cough, and recent international travel",
    explanation: "Travel history plus respiratory symptoms raises concern for infectious disease.",
    category: "Infectious and Communicable Diseases",
    chapter: 14
  },
  {
    question: "Which patient most likely requires high-priority transport?",
    options: ["Alert patient with mild sore throat", "Patient with altered mental status", "Patient with small rash", "Patient requesting evaluation only"],
    answer: "Patient with altered mental status",
    explanation: "AMS may indicate life-threatening illness requiring rapid transport.",
    category: "Management, Transport, and Destination",
    chapter: 14
  },
  {
    question: "Why may the closest hospital not always be the best destination?",
    options: ["Distance never matters", "Some patients need specialty resources", "EMTs choose randomly", "Closest hospitals refuse critical patients"],
    answer: "Some patients need specialty resources",
    explanation: "Stroke, STEMI, trauma, and specialty patients may need specialized centers.",
    category: "Management, Transport, and Destination",
    chapter: 14
  },
  {
    question: "An infectious disease is best defined as:",
    options: ["Any disease that spreads", "A disease caused by harmful organisms", "A trauma-related illness", "A psychiatric disorder"],
    answer: "A disease caused by harmful organisms",
    explanation: "Infectious disease involves pathogens entering and multiplying in the body.",
    category: "Medical Terminology",
    chapter: 14
  },
  {
    question: "A communicable disease is one that:",
    options: ["Cannot spread", "Spreads from one person/species to another", "Only affects adults", "Only affects the immune system"],
    answer: "Spreads from one person/species to another",
    explanation: "Communicable diseases can transmit between hosts.",
    category: "Medical Terminology",
    chapter: 14
  },
  {
    question: "Following the primary assessment of a medical patient, what should be included next?",
    options: ["Only allergies", "SAMPLE, OPQRST, vitals, history", "Transport immediately every time", "Wait for ALS"],
    answer: "SAMPLE, OPQRST, vitals, history",
    explanation: "History and focused assessment help identify the cause.",
    category: "Nature of Illness / Patient Assessment",
    chapter: 14
  },
  {
    question: "Which symptom cluster may suggest infection?",
    options: ["Fever and rash", "Vomiting and diarrhea", "Difficulty breathing", "All of the above"],
    answer: "All of the above",
    explanation: "All may be signs of infectious illness.",
    category: "Infectious and Communicable Diseases",
    chapter: 14
  },
  {
    question: "An epidemic refers to:",
    options: ["Global outbreak", "Higher than expected disease spread in a population", "Single patient illness", "Animal-only disease"],
    answer: "Higher than expected disease spread in a population",
    explanation: "Epidemics exceed expected disease levels in an area.",
    category: "Epidemic and Pandemic",
    chapter: 14
  },
  {
    question: "A pandemic refers to:",
    options: ["Local outbreak", "Global spread of disease", "Food poisoning", "Noninfectious illness"],
    answer: "Global spread of disease",
    explanation: "Pandemics affect multiple countries or continents.",
    category: "Epidemic and Pandemic",
    chapter: 14
  },
  {
    question: "In suspected infectious disease calls, EMT priority is:",
    options: ["Travel history before ABCs", "Treat life threats first", "Call CDC first", "Skip primary assessment"],
    answer: "Treat life threats first",
    explanation: "ABCs always come before secondary concerns.",
    category: "Important Overview",
    chapter: 14
  },
  {
    question: "Which disease is classically associated with airborne spread?",
    options: ["Tuberculosis", "Appendicitis", "Kidney stone", "Stroke"],
    answer: "Tuberculosis",
    explanation: "TB is a major airborne infectious disease concern.",
    category: "Common Serious Communicable Diseases",
    chapter: 14
  },
  {
    question: "Which disease is strongly associated with blood and body fluid exposure?",
    options: ["Hepatitis", "Asthma", "COPD", "Syncope"],
    answer: "Hepatitis",
    explanation: "Hepatitis commonly spreads through blood/body fluid exposure.",
    category: "Common Serious Communicable Diseases",
    chapter: 14
  },
  {
    question: "Stroke patients may benefit from transport to:",
    options: ["Any clinic", "Stroke center", "Urgent care only", "Primary care office"],
    answer: "Stroke center",
    explanation: "Specialized stroke centers improve outcomes.",
    category: "Management, Transport, and Destination",
    chapter: 14
  },
  {
    question: "Long rural transport for suspected MI may justify:",
    options: ["Delayed transport", "Air medical consideration", "No ALS", "Walking transport"],
    answer: "Air medical consideration",
    explanation: "Air transport may reduce time to definitive care.",
    category: "Management, Transport, and Destination",
    chapter: 14
  },
  {
    question: "Why are standard precautions used on every patient?",
    options: ["Because every patient may pose exposure risk", "Only fever patients matter", "PPE is optional", "Only trauma spreads disease"],
    answer: "Because every patient may pose exposure risk",
    explanation: "You cannot reliably identify infectious patients by appearance.",
    category: "Medical Terminology",
    chapter: 14
  },
  {
    question: "Diabetic emergencies belong to which category?",
    options: ["Endocrine", "Respiratory", "Trauma", "Psychiatric"],
    answer: "Endocrine",
    explanation: "Diabetes is an endocrine disorder.",
    category: "Medical Terminology",
    chapter: 14
  },
  {
    question: "Allergic reactions belong to which category?",
    options: ["Immunologic", "Neurologic", "GI", "Urologic"],
    answer: "Immunologic",
    explanation: "Allergies involve immune system response.",
    category: "Medical Terminology",
    chapter: 14
  },
  {
    question: "Stroke and seizures belong to which category?",
    options: ["Neurologic", "Respiratory", "Hematologic", "Urologic"],
    answer: "Neurologic",
    explanation: "These conditions affect the nervous system.",
    category: "Medical Terminology",
    chapter: 14
  },
  {
    question: "You arrive to a 68-year-old with fever, productive cough, and dyspnea. First action?",
    options: ["Primary assessment with PPE", "Insurance questions", "Transport immediately without exam", "Only ask travel history"],
    answer: "Primary assessment with PPE",
    explanation: "Scene safety and ABCs remain priority.",
    category: "Situational Scenarios",
    chapter: 14
  },
  {
    question: "A patient with chest pressure is near a small hospital lacking cath lab. Best decision?",
    options: ["Always nearest hospital", "Consider cardiac-capable facility", "Patient chooses randomly", "Delay care"],
    answer: "Consider cardiac-capable facility",
    explanation: "Destination should match patient needs.",
    category: "Situational Scenarios",
    chapter: 14
  },
  {
    question: "Fever, stiff neck, AMS, and rash most suggest:",
    options: ["Meningitis", "Ankle fracture", "Anxiety", "Kidney stone"],
    answer: "Meningitis",
    explanation: "Classic meningitis presentation includes fever and neck stiffness.",
    category: "Situational Scenarios",
    chapter: 14
  },
  {
    question: "A stable asthma patient improves after inhaler assistance. Transport decision?",
    options: ["Still transport and reassess", "Automatic refusal", "Always lights and sirens", "Ignore vitals"],
    answer: "Still transport and reassess",
    explanation: "Improvement helps, but continued monitoring is important.",
    category: "Situational Scenarios",
    chapter: 14
  },
  {
    question: "Cough, night sweats, weight loss, and TB exposure suggest need for:",
    options: ["Respiratory precautions", "No PPE", "Only gloves", "No concern"],
    answer: "Respiratory precautions",
    explanation: "These are classic TB warning signs.",
    category: "Situational Scenarios",
    chapter: 14
  }
];

const chapter16Questions = [
  { question: "What is the main function of the cardiovascular system?", options: ["Produce hormones only", "Circulate blood through the body", "Digest food", "Filter urine"], answer: "Circulate blood through the body", explanation: "The cardiovascular system circulates blood so oxygen and nutrients reach tissues and wastes are removed." },
  { question: "The upper chambers of the heart are called:", options: ["Ventricles", "Atria", "Valves", "Arteries"], answer: "Atria", explanation: "The atria are the upper receiving chambers of the heart." },
  { question: "The lower chambers of the heart are called:", options: ["Ventricles", "Atria", "Veins", "Capillaries"], answer: "Ventricles", explanation: "The ventricles are the lower pumping chambers of the heart." },
  { question: "Which chamber pumps blood to the body?", options: ["Right atrium", "Right ventricle", "Left atrium", "Left ventricle"], answer: "Left ventricle", explanation: "The left ventricle pumps oxygen-rich blood into the aorta and out to the body." },
  { question: "The right side of the heart sends blood to the:", options: ["Brain only", "Lungs", "Stomach", "Kidneys only"], answer: "Lungs", explanation: "The right heart receives oxygen-poor blood and sends it to the lungs." },
  { question: "The left side of the heart sends blood to the:", options: ["Lungs only", "Body", "Right atrium", "Pulmonary artery only"], answer: "Body", explanation: "The left heart receives oxygen-rich blood and sends it to systemic circulation." },
  { question: "The aorta carries blood from the left ventricle to the:", options: ["Lungs", "Body", "Right atrium", "Pulmonary veins"], answer: "Body", explanation: "The aorta is the main artery carrying blood from the left ventricle to the body." },
  { question: "Coronary arteries supply blood to the:", options: ["Heart muscle", "Liver", "Stomach", "Skin only"], answer: "Heart muscle", explanation: "Coronary arteries feed the myocardium with oxygen-rich blood." },
  { question: "The heart muscle is called the:", options: ["Pleura", "Myocardium", "Peritoneum", "Bronchus"], answer: "Myocardium", explanation: "The myocardium is the muscular wall of the heart." },
  { question: "Cardiac output equals:", options: ["Blood pressure × oxygen", "Heart rate × stroke volume", "Pulse × respirations", "Stroke volume × glucose"], answer: "Heart rate × stroke volume", explanation: "Cardiac output is calculated as heart rate times stroke volume." },
  { question: "Stroke volume means:", options: ["Number of beats per minute", "Amount of blood pumped with each contraction", "Blood pressure in the brain", "Oxygen level in the blood"], answer: "Amount of blood pumped with each contraction", explanation: "Stroke volume is the blood pumped with each ventricular contraction." },
  { question: "Heart rate means:", options: ["Amount of blood per beat", "Number of heart contractions per minute", "Resistance in arteries", "Volume of air inhaled"], answer: "Number of heart contractions per minute", explanation: "Heart rate is the number of contractions or beats each minute." },
  { question: "Preload is most related to:", options: ["Venous return/filling before contraction", "Airway swelling", "Blood sugar", "Lung expansion"], answer: "Venous return/filling before contraction", explanation: "Preload is the filling of the heart before contraction, closely related to venous return." },
  { question: "Afterload is best described as:", options: ["Resistance the heart pumps against", "Amount of oxygen inhaled", "Number of red blood cells", "Amount of stomach acid"], answer: "Resistance the heart pumps against", explanation: "Afterload is the pressure or resistance the heart must overcome to eject blood." },
  { question: "Contractility means:", options: ["How forcefully the heart contracts", "How fast the patient breathes", "How much oxygen is in the air", "How much urine is made"], answer: "How forcefully the heart contracts", explanation: "Contractility describes how forcefully the myocardium contracts." },
  { question: "Ischemia means:", options: ["Increased blood flow", "Decreased blood flow to tissue", "Too much oxygen", "Normal heart rhythm"], answer: "Decreased blood flow to tissue", explanation: "Ischemia means reduced blood flow and oxygen delivery to tissue." },
  { question: "Atherosclerosis is:", options: ["Plaque buildup inside arteries", "Infection of the lungs", "Air trapped in the chest", "Low blood sugar"], answer: "Plaque buildup inside arteries", explanation: "Atherosclerosis is plaque buildup that narrows arteries and can reduce perfusion." },
  { question: "A complete blockage of a coronary artery may cause:", options: ["Acute myocardial infarction", "Simple dehydration", "Ankle fracture", "Asthma only"], answer: "Acute myocardial infarction", explanation: "A complete coronary blockage can kill heart muscle and cause an AMI." },
  { question: "Acute myocardial infarction is also called:", options: ["Stroke", "Heart attack", "Seizure", "Pneumonia"], answer: "Heart attack", explanation: "Acute myocardial infarction is the medical term for a heart attack." },
  { question: "Angina pectoris is usually caused by:", options: ["Temporary heart muscle ischemia", "Broken ribs only", "Low blood sugar", "Infection of the skin"], answer: "Temporary heart muscle ischemia", explanation: "Angina is chest discomfort from temporary myocardial ischemia." },
  { question: "Which is more concerning for AMI than stable angina?", options: ["Pain relieved immediately by rest", "Pain lasting more than 15 minutes and not relieved by rest/nitro", "Pain only after eating spicy food", "Pain only when touching the chest wall"], answer: "Pain lasting more than 15 minutes and not relieved by rest/nitro", explanation: "Pain lasting longer and not relieved by rest or nitroglycerin is more concerning for AMI." },
  { question: "EMTs should treat nontraumatic chest pain as:", options: ["Anxiety until proven otherwise", "Possible AMI until ruled out by a physician", "Muscle pain only", "Not serious if BP is normal"], answer: "Possible AMI until ruled out by a physician", explanation: "EMTs should treat nontraumatic chest pain as possible AMI until ruled out by a physician." },
  { question: "Which symptom can be associated with cardiac chest pain?", options: ["Pressure/heaviness in chest", "Arm or jaw pain", "Shortness of breath", "All of the above"], answer: "All of the above", explanation: "Cardiac ischemia can cause chest pressure, radiating pain, shortness of breath, nausea, and other symptoms." },
  { question: "Which patient may have atypical cardiac symptoms?", options: ["Older adult", "Diabetic patient", "Female patient", "All of the above"], answer: "All of the above", explanation: "Older adults, diabetic patients, and female patients may have atypical cardiac presentations." },
  { question: "Cardiogenic shock occurs when:", options: ["The heart cannot pump effectively", "The airway is mildly irritated", "The stomach cannot digest", "The bones cannot move"], answer: "The heart cannot pump effectively", explanation: "Cardiogenic shock is pump failure, meaning the heart cannot circulate blood effectively." },
  { question: "Which is a sign of cardiogenic shock?", options: ["Weak pulse and cool clammy skin", "Strong pulse and no symptoms", "Normal mental status always", "High energy and warm skin always"], answer: "Weak pulse and cool clammy skin", explanation: "Weak pulse and cool clammy skin suggest poor perfusion from cardiogenic shock." },
  { question: "Congestive heart failure can cause fluid to back up into the:", options: ["Lungs", "Hair follicles", "Bones", "Ears"], answer: "Lungs", explanation: "CHF can cause fluid to back up into the lungs, worsening breathing." },
  { question: "Pulmonary edema means:", options: ["Fluid in the lungs", "Air in the stomach", "Blood clot in the arm", "Broken blood vessel in the eye"], answer: "Fluid in the lungs", explanation: "Pulmonary edema means fluid has accumulated in the lungs." },
  { question: "Which finding suggests CHF/pulmonary edema?", options: ["Pink frothy sputum", "Isolated finger pain", "Dry skin only", "Mild ankle itch"], answer: "Pink frothy sputum", explanation: "Pink frothy sputum is a concerning finding associated with pulmonary edema." },
  { question: "Best position for many CHF patients with difficulty breathing is:", options: ["Upright, if tolerated", "Face down", "Flat with feet elevated no matter what", "Standing and walking"], answer: "Upright, if tolerated", explanation: "An upright position often eases breathing for CHF patients when tolerated." },
  { question: "Hypertensive emergency means:", options: ["High BP with serious symptoms or organ damage signs", "Any mild BP elevation", "Low blood sugar", "Normal BP with anxiety"], answer: "High BP with serious symptoms or organ damage signs", explanation: "Hypertensive emergency is severe hypertension with serious symptoms or organ damage signs." },
  { question: "A possible sign of hypertensive emergency is:", options: ["Severe headache with confusion", "Mild toe pain", "Isolated rash", "Normal mental status only"], answer: "Severe headache with confusion", explanation: "Severe headache with confusion may suggest organ effects from very high blood pressure." },
  { question: "During chest pain assessment, OPQRST helps assess:", options: ["Pain history/details", "Blood type", "Insurance status", "Patient’s address only"], answer: "Pain history/details", explanation: "OPQRST organizes pain history, including onset, provocation, quality, radiation, severity, and time." },
  { question: "SAMPLE history includes:", options: ["Signs/symptoms, allergies, medications, past history, last oral intake, events", "Skin, airway, muscles, pulse, lungs, ears", "Sugar, aspirin, motor, pupils, lungs, edema", "Scene, age, movement, position, location, environment"], answer: "Signs/symptoms, allergies, medications, past history, last oral intake, events", explanation: "SAMPLE gathers signs/symptoms, allergies, medications, past history, last intake, and events." },
  { question: "Aspirin may be used in suspected ACS because it:", options: ["Helps reduce clotting", "Opens the airway", "Cures asthma", "Lowers blood sugar"], answer: "Helps reduce clotting", explanation: "Aspirin helps reduce platelet clotting in suspected ACS when not contraindicated." },
  { question: "Aspirin should be avoided if the patient:", options: ["Is allergic to aspirin", "Has active bleeding", "Cannot safely swallow/chew", "Any of the above"], answer: "Any of the above", explanation: "Aspirin is avoided with allergy, active bleeding, unsafe swallowing, or protocol contraindications." },
  { question: "Nitroglycerin mainly works by:", options: ["Dilating blood vessels and reducing heart workload", "Increasing blood clotting", "Raising blood sugar", "Causing seizures"], answer: "Dilating blood vessels and reducing heart workload", explanation: "Nitroglycerin dilates vessels and may reduce the heart workload and oxygen demand." },
  { question: "Before assisting with nitroglycerin, the EMT should check:", options: ["Blood pressure", "Medication use such as PDE-5 inhibitors", "Prescription/protocol", "All of the above"], answer: "All of the above", explanation: "Before nitroglycerin, EMTs check blood pressure, medication use, prescription, and protocol." },
  { question: "Which medication can make nitroglycerin dangerous due to severe hypotension?", options: ["Sildenafil/Viagra", "Acetaminophen", "Ibuprofen", "Antacid"], answer: "Sildenafil/Viagra", explanation: "PDE-5 inhibitors such as sildenafil can combine with nitro to cause dangerous hypotension." },
  { question: "Nitroglycerin should be withheld if:", options: ["Systolic BP is too low per protocol", "Patient took recent PDE-5 inhibitor", "Patient has already taken max allowed dose", "Any of the above"], answer: "Any of the above", explanation: "Low BP, recent PDE-5 inhibitor use, and max dose are nitroglycerin contraindications." },
  { question: "A pacemaker is designed to:", options: ["Help control heart rhythm", "Drain lung fluid", "Treat broken bones", "Measure blood sugar"], answer: "Help control heart rhythm", explanation: "A pacemaker helps regulate slow or abnormal heart rhythms." },
  { question: "An AICD can:", options: ["Deliver an internal shock for dangerous rhythms", "Give oxygen", "Pump air into lungs", "Replace CPR"], answer: "Deliver an internal shock for dangerous rhythms", explanation: "An AICD can detect and internally shock dangerous rhythms." },
  { question: "An external defibrillator vest is:", options: ["A wearable device that can shock dangerous rhythms", "A splint for chest injuries", "A type of oxygen mask", "A blood pressure cuff"], answer: "A wearable device that can shock dangerous rhythms", explanation: "An external defibrillator vest is wearable and can shock dangerous rhythms." },
  { question: "An LVAD assists the:", options: ["Left ventricle with pumping blood", "Right lung with oxygen exchange", "Stomach with digestion", "Brain with memory"], answer: "Left ventricle with pumping blood", explanation: "An LVAD assists the left ventricle with pumping blood." },
  { question: "A patient with an LVAD may not have:", options: ["A normal palpable pulse", "A battery pack", "A controller", "A need for assessment"], answer: "A normal palpable pulse", explanation: "LVAD patients may not have a normal palpable pulse, so assess perfusion and device function." },
  { question: "Cardiac arrest means:", options: ["Heart is not pumping blood effectively", "Patient has a mild headache", "Patient has normal circulation", "Patient is breathing normally with a pulse"], answer: "Heart is not pumping blood effectively", explanation: "Cardiac arrest means the heart is not effectively pumping blood." },
  { question: "AED is indicated when the patient is:", options: ["Unresponsive, pulseless, and not breathing normally", "Awake with mild chest pain", "Talking with a strong pulse", "Walking normally"], answer: "Unresponsive, pulseless, and not breathing normally", explanation: "AED use is for patients who are unresponsive, pulseless, and not breathing normally." },
  { question: "During AED shock delivery, rescuers should:", options: ["Make sure nobody is touching the patient", "Continue touching the patient", "Give water", "Remove all oxygen from the scene permanently"], answer: "Make sure nobody is touching the patient", explanation: "Nobody should touch the patient during AED shock delivery." },
  { question: "After AED delivers a shock, EMTs should:", options: ["Immediately resume CPR", "Wait 5 minutes", "Check blood pressure first", "Stop all care"], answer: "Immediately resume CPR", explanation: "After a shock, CPR should resume immediately to minimize interruptions." },
  { question: "What is the best EMT mindset for cardiovascular emergencies?", options: ["Chest pain is anxiety until proven otherwise", "Treat possible cardiac chest pain seriously and transport promptly", "Ignore symptoms if patient is young", "Wait until cardiac arrest before treatment"], answer: "Treat possible cardiac chest pain seriously and transport promptly", explanation: "Possible cardiac chest pain should be taken seriously with assessment, treatment, and prompt transport." }
];

const chapter17Questions = [
  {
    question: "A patient is awake, follows commands, and repeatedly answers unrelated words to simple questions. Which finding is MOST consistent with a dominant-hemisphere cortical problem rather than simple dysarthria?",
    options: ["Clear speech that fails to match the question being asked", "A weak voice after several minutes of speaking", "Slurred but appropriate answers with intact comprehension", "Hoarseness after repeated vomiting"],
    answer: "Clear speech that fails to match the question being asked",
    explanation: "Receptive aphasia can produce fluent but inappropriate speech, suggesting a language-processing deficit rather than poor articulation.",
    category: "Stroke Assessment",
    chapter: 17
  },
  {
    question: "A 72-year-old suddenly cannot move the right arm and has difficulty producing words, but appears to understand your instructions. Which anatomic correlation is MOST defensible?",
    options: ["Left cerebral hemisphere ischemia affecting motor and expressive speech pathways", "Right cerebral hemisphere ischemia with left-sided neglect", "Cerebellar ischemia causing isolated coordination loss", "Brain stem dysfunction limited to pupil constriction"],
    answer: "Left cerebral hemisphere ischemia affecting motor and expressive speech pathways",
    explanation: "Most speech control is left-sided, and each hemisphere controls the opposite side of the body.",
    category: "Anatomy and Physiology",
    chapter: 17
  },
  {
    question: "Which presentation should make an EMT most suspicious for hemorrhagic stroke or subarachnoid hemorrhage rather than an uncomplicated migraine?",
    options: ["Sudden maximal-intensity headache with vomiting and decreasing responsiveness", "Throbbing headache similar to the patient's usual pattern with nausea", "Facial pressure worse when bending forward with nasal congestion", "Dull bilateral headache after a stressful shift without neurologic deficit"],
    answer: "Sudden maximal-intensity headache with vomiting and decreasing responsiveness",
    explanation: "A sudden severe headache with neurologic decline suggests intracranial bleeding or rising intracranial pressure.",
    category: "Headache Red Flags",
    chapter: 17
  },
  {
    question: "A patient has acute left arm weakness that fully resolves before EMS arrival. Which statement best reflects EMT decision-making?",
    options: ["Treat the episode as a possible TIA and recommend emergency evaluation", "Cancel transport because resolved deficits exclude brain ischemia", "Classify it as hypoglycemia unless the glucose is above 200 mg/dL", "Delay care until the same deficit reappears during your assessment"],
    answer: "Treat the episode as a possible TIA and recommend emergency evaluation",
    explanation: "TIA symptoms can resolve, but the event is still an emergency and may warn of a later stroke.",
    category: "TIA and Stroke Risk",
    chapter: 17
  },
  {
    question: "A suspected stroke patient was normal at bedtime but awoke at 0700 with aphasia. What onset time should be reported for stroke-alert decision-making?",
    options: ["The time the patient was last known well at bedtime", "0700, because symptoms were first discovered then", "The time EMS arrived on scene", "The time the family called 911"],
    answer: "The time the patient was last known well at bedtime",
    explanation: "For unwitnessed or wake-up strokes, the last known well time is the last time the patient was known to be normal.",
    category: "Stroke Alert and Documentation",
    chapter: 17
  },
  {
    question: "During a Cincinnati-style stroke screen, both arms fall immediately after you ask the patient to hold them out. What is the best interpretation?",
    options: ["The test is nondiagnostic and should be repeated or adapted", "The patient has proven bilateral stroke", "The finding rules out unilateral motor weakness", "The patient has a positive arm drift on the weaker side only"],
    answer: "The test is nondiagnostic and should be repeated or adapted",
    explanation: "If both arms fall, the patient may not understand or cooperate; the result does not isolate unilateral drift.",
    category: "Stroke Assessment",
    chapter: 17
  },
  {
    question: "Which field finding most strongly supports right hemispheric stroke with neglect?",
    options: ["The patient denies a problem and moves the right arm when asked to raise the left", "The patient understands speech but cannot form words", "The patient has bilateral pinpoint pupils after opioid use", "The patient reports flashing lights before a familiar migraine"],
    answer: "The patient denies a problem and moves the right arm when asked to raise the left",
    explanation: "Right hemispheric strokes may cause left-sided weakness and neglect, with poor awareness of the affected side.",
    category: "Stroke Presentation",
    chapter: 17
  },
  {
    question: "Which combination should increase concern for rising intracranial pressure from intracranial bleeding?",
    options: ["Hypertension, slowing pulse, irregular respirations, and unequal pupils", "Hypotension, wheezing, urticaria, and tachycardia", "Fever, productive cough, pleuritic pain, and crackles", "Polyuria, thirst, warm skin, and gradual confusion"],
    answer: "Hypertension, slowing pulse, irregular respirations, and unequal pupils",
    explanation: "High pressure in the skull can produce hypertension with bradycardia, abnormal breathing, and pupillary changes.",
    category: "Intracranial Pressure",
    chapter: 17
  },
  {
    question: "A confused diabetic patient has unilateral weakness and slurred speech. Which action prevents a common neurologic assessment error?",
    options: ["Check blood glucose while continuing stroke-focused assessment", "Assume stroke because hypoglycemia never causes focal findings", "Give oral glucose immediately even though swallowing is impaired", "Wait for the weakness to resolve before obtaining vital signs"],
    answer: "Check blood glucose while continuing stroke-focused assessment",
    explanation: "Hypoglycemia can mimic stroke, but unsafe oral intake should be avoided in altered patients or those who cannot swallow.",
    category: "Stroke Mimics",
    chapter: 17
  },
  {
    question: "Which history most favors postictal state over acute ischemic stroke as the cause of current confusion and hemiparesis?",
    options: ["Witnessed generalized convulsion followed by gradual improvement over several minutes", "Abrupt aphasia with no witnessed seizure and persistent arm drift", "Sudden worst headache followed by progressive unresponsiveness", "Normal glucose with facial droop beginning during exertion"],
    answer: "Witnessed generalized convulsion followed by gradual improvement over several minutes",
    explanation: "Postictal confusion and even temporary weakness can resemble stroke, but it usually improves after seizure activity ends.",
    category: "Stroke Mimics",
    chapter: 17
  },
  {
    question: "A patient briefly stares, stops responding, has no major motor activity, and then returns to baseline with a short memory gap. Which seizure type is most consistent?",
    options: ["Absence seizure", "Generalized tonic-clonic seizure", "Status epilepticus", "Simple partial seizure with preserved awareness"],
    answer: "Absence seizure",
    explanation: "Absence seizures can produce a brief lapse in consciousness without the dramatic motor activity of tonic-clonic seizures.",
    category: "Seizure Types",
    chapter: 17
  },
  {
    question: "Which description best separates a complex partial seizure from a simple partial seizure?",
    options: ["Complex partial seizures alter interaction with the environment; simple partial seizures preserve consciousness", "Complex partial seizures always involve both hemispheres; simple partial seizures always cause apnea", "Complex partial seizures require fever; simple partial seizures require hypoglycemia", "Complex partial seizures last over 30 minutes; simple partial seizures last under 10 seconds"],
    answer: "Complex partial seizures alter interaction with the environment; simple partial seizures preserve consciousness",
    explanation: "Simple partial seizures do not change consciousness, while complex partial seizures involve altered mental status and abnormal interaction.",
    category: "Seizure Types",
    chapter: 17
  },
  {
    question: "A seizure continues beyond 5 minutes and the patient never regains consciousness between episodes. What is the most appropriate classification and operational concern?",
    options: ["Status epilepticus requiring airway support, rapid transport, and ALS consideration", "A typical postictal period requiring only quiet observation", "Syncope with tremors requiring orthostatic vital signs first", "A TIA requiring delayed neurologic reassessment after full recovery"],
    answer: "Status epilepticus requiring airway support, rapid transport, and ALS consideration",
    explanation: "Prolonged or recurrent seizures without recovery are life-threatening and may require advanced airway care and seizure-stopping medication.",
    category: "Status Epilepticus",
    chapter: 17
  },
  {
    question: "During an active generalized seizure, which intervention is most appropriate for an EMT?",
    options: ["Protect from injury, prepare suction and oxygen, and manage the airway as soon as feasible", "Restrain all extremities forcefully to shorten the seizure", "Insert an oral airway during tonic jaw contraction", "Place a tongue blade between the teeth to prevent tongue biting"],
    answer: "Protect from injury, prepare suction and oxygen, and manage the airway as soon as feasible",
    explanation: "Care focuses on preventing injury and supporting airway and oxygenation; forced restraint or mouth insertion can harm the patient.",
    category: "Seizure Management",
    chapter: 17
  },
  {
    question: "A postictal patient is combative, incontinent, and confused after a witnessed tonic-clonic seizure. Which approach best matches EMT priorities?",
    options: ["Maintain scene safety, protect dignity, assess for trauma, and reassess airway and glucose as indicated", "Confront the patient loudly to determine whether behavior is intentional", "Avoid transport if the patient is embarrassed by incontinence", "Ignore possible head injury because seizures are medical rather than traumatic"],
    answer: "Maintain scene safety, protect dignity, assess for trauma, and reassess airway and glucose as indicated",
    explanation: "Postictal patients may be confused or combative and may have injuries; care should be calm, protective, and clinically thorough.",
    category: "Postictal Care",
    chapter: 17
  },
  {
    question: "Which feature most strongly differentiates syncope from seizure in the typical presentation?",
    options: ["Syncope usually lacks a prolonged postictal state", "Syncope always occurs while the patient is lying down", "Syncope commonly causes prolonged tonic-clonic activity", "Syncope produces unilateral neglect before loss of consciousness"],
    answer: "Syncope usually lacks a prolonged postictal state",
    explanation: "Fainting is often associated with standing and rapid recovery, while seizures commonly produce a postictal period.",
    category: "Syncope vs Seizure",
    chapter: 17
  },
  {
    question: "Which AMS differential list best fits the AEIOU-TIPS approach used for neurologic emergencies?",
    options: ["Alcohol, epilepsy/endocrine/electrolytes, insulin, overdose/opiates, uremia, trauma/temperature, infection, poisoning/psychogenic, shock/stroke/seizure/syncope", "Airway, edema, ischemia, oxygen, urine, tension pneumothorax, insulin, perfusion, sepsis", "Aphasia, embolus, ICP, occlusion, unilateral weakness, thrombosis, ischemia, pupils, seizure", "Allergy, epiglottitis, inhalation, obstruction, upper airway, tension, infection, pneumonia, shock"],
    answer: "Alcohol, epilepsy/endocrine/electrolytes, insulin, overdose/opiates, uremia, trauma/temperature, infection, poisoning/psychogenic, shock/stroke/seizure/syncope",
    explanation: "AEIOU-TIPS is a broad altered mental status differential, not a stroke-only or airway-only mnemonic.",
    category: "Altered Mental Status",
    chapter: 17
  },
  {
    question: "A neurologic patient is unresponsive with snoring, shallow respirations at 6/min. Which priority comes before completing a detailed stroke scale?",
    options: ["Open and support the airway, suction as needed, and ventilate if breathing remains inadequate", "Finish FAST because stroke alerts always precede airway management", "Give oral glucose before checking gag or swallow ability", "Ask bystanders for medication names before touching the patient"],
    answer: "Open and support the airway, suction as needed, and ventilate if breathing remains inadequate",
    explanation: "ABCs remain the priority; neurologic disability assessment cannot outrank airway and ventilation failure.",
    category: "Primary Assessment",
    chapter: 17
  },
  {
    question: "Which finding should be documented and reported most urgently for a suspected stroke patient being transported to a stroke center?",
    options: ["Last known well time, stroke scale findings, GCS, and reassessment changes", "The patient's preferred pharmacy and insurance carrier", "Only the patient's blood pressure because CT will determine everything else", "The exact brand of stretcher used during transport"],
    answer: "Last known well time, stroke scale findings, GCS, and reassessment changes",
    explanation: "Stroke teams need onset timing, neurologic findings, GCS, and trends to determine time-sensitive treatment options.",
    category: "Stroke Alert and Documentation",
    chapter: 17
  },
  {
    question: "Why can giving clot-dissolving medication without CT confirmation be catastrophic?",
    options: ["Hemorrhagic stroke can worsen if bleeding is treated like an ischemic clot", "CT scans are used only to confirm hypoglycemia", "Clot-dissolving drugs primarily reverse seizures", "The medication works only in strokes caused by fever"],
    answer: "Hemorrhagic stroke can worsen if bleeding is treated like an ischemic clot",
    explanation: "CT helps distinguish bleeding from ischemia; thrombolytics can worsen intracranial hemorrhage.",
    category: "Stroke Pathophysiology",
    chapter: 17
  },
  {
    question: "A patient reports headache, fever, stiff neck, photophobia, and altered mental status. Which field impression should remain high on the differential?",
    options: ["Meningitis requiring standard precautions and supportive ABC care", "Benign tension headache with no transport need", "Simple postictal state if no seizure was witnessed", "Isolated sinus headache requiring no emergency assessment"],
    answer: "Meningitis requiring standard precautions and supportive ABC care",
    explanation: "Fever, stiff neck, light sensitivity, headache, and AMS suggest a serious central nervous system infection.",
    category: "Headache Red Flags",
    chapter: 17
  },
  {
    question: "Multiple occupants in the same residence complain of headache and confusion without focal neurologic deficits. Which cause should be considered early?",
    options: ["Carbon monoxide exposure", "Left hemispheric embolic stroke in all patients", "Medication noncompliance with antiseizure drugs", "Subdural bleeding from separate unwitnessed trauma"],
    answer: "Carbon monoxide exposure",
    explanation: "Multiple patients with headache or altered mentation in the same environment should prompt concern for toxic exposure such as carbon monoxide.",
    category: "Altered Mental Status",
    chapter: 17
  },
  {
    question: "A patient with suspected hemorrhagic stroke has a blood pressure of 210/118, bounding pulse, and deteriorating mental status. Which interpretation is most appropriate for BLS care?",
    options: ["The hypertension may be part of compensation for brain perfusion and should be trended, not treated directly by EMTs", "The EMT should rapidly lower blood pressure with nitroglycerin", "The blood pressure rules out intracranial bleeding", "The pressure is irrelevant because pupils are always normal in hemorrhage"],
    answer: "The hypertension may be part of compensation for brain perfusion and should be trended, not treated directly by EMTs",
    explanation: "Very high pressure may occur with intracranial bleeding; EMTs monitor trends and support ABCs rather than attempting field BP reduction outside protocol.",
    category: "Intracranial Pressure",
    chapter: 17
  },
  {
    question: "Which scenario most strongly suggests a structural or serious secondary cause of seizure rather than a routine known seizure disorder?",
    options: ["First seizure in an older adult with sudden severe headache and hypertension", "A known epilepsy patient who missed one dose and is now fully alert", "A brief absence seizure identical to a documented lifelong pattern", "A postictal patient whose family reports identical monthly seizures"],
    answer: "First seizure in an older adult with sudden severe headache and hypertension",
    explanation: "New-onset seizure, severe headache, and hypertension raise concern for intracranial bleeding, tumor, infection, or another serious cause.",
    category: "Seizure Causes",
    chapter: 17
  },
  {
    question: "Which communication strategy is best for a patient with suspected stroke who cannot speak but may understand?",
    options: ["Explain care, look for nonverbal responses, and avoid careless remarks near the patient", "Assume unconscious patients cannot hear and discuss prognosis freely", "Stop communicating until speech returns", "Ask only family members because aphasia proves loss of comprehension"],
    answer: "Explain care, look for nonverbal responses, and avoid careless remarks near the patient",
    explanation: "A stroke patient may understand despite inability to speak, so respectful communication and reassurance remain important.",
    category: "Neurologic Communication",
    chapter: 17
  },
  {
    question: "Which transport decision is best for a patient with positive FAST findings and a last-known-well time 45 minutes ago?",
    options: ["Rapid transport to an appropriate stroke-capable facility with early notification", "Routine transport to the closest clinic because BLS cannot reverse stroke", "Delay transport for an extended neurologic exam and repeated stroke scales", "Transport only if symptoms persist for 24 hours"],
    answer: "Rapid transport to an appropriate stroke-capable facility with early notification",
    explanation: "Early recognition, last-known-well reporting, stroke alert, and rapid transport to a stroke-capable facility support time-sensitive care.",
    category: "Management and Transport",
    chapter: 17
  },
  {
    question: "A febrile toddler has a generalized seizure that stops before arrival and is now drowsy but breathing adequately. Which statement is most appropriate?",
    options: ["The child still requires transport because febrile seizures need evaluation and recurrence is possible", "No transport is needed if the seizure stopped before EMS arrived", "Treat it as status epilepticus even though the child is recovering", "Give oral fluids immediately to prevent another seizure"],
    answer: "The child still requires transport because febrile seizures need evaluation and recurrence is possible",
    explanation: "Febrile seizures are often tolerated but still require hospital evaluation and monitoring.",
    category: "Special Populations",
    chapter: 17
  },
  {
    question: "Which patient assessment sequence best fits an advanced but BLS-appropriate neurologic emergency approach?",
    options: ["Scene safety, ABCs and life threats, glucose when indicated, neurologic screen, last-known-well/history, trend vitals and GCS, rapid transport as indicated", "Detailed medication inventory, full secondary exam, then airway if the patient becomes cyanotic", "Stroke scale first, then decide whether breathing needs assessment", "Transport decision only after a definitive field diagnosis of ischemic versus hemorrhagic stroke"],
    answer: "Scene safety, ABCs and life threats, glucose when indicated, neurologic screen, last-known-well/history, trend vitals and GCS, rapid transport as indicated",
    explanation: "BLS care prioritizes safety and ABCs, identifies reversible mimics, captures time-critical history, trends neurologic status, and transports appropriately.",
    category: "Patient Assessment",
    chapter: 17
  },
  {
    question: "Which statement best explains why an ischemic stroke patient may have salvageable brain tissue early in the event?",
    options: ["Reduced but not absent perfusion may injure cells before they die, creating a time-sensitive treatment window", "Brain cells tolerate complete oxygen loss for many hours", "Hemorrhagic strokes always reverse before ischemic strokes", "TIA and ischemic stroke are identical because both involve permanent infarction"],
    answer: "Reduced but not absent perfusion may injure cells before they die, creating a time-sensitive treatment window",
    explanation: "Some ischemic brain tissue may be damaged but not dead early, which is why rapid recognition and transport matter.",
    category: "Stroke Pathophysiology",
    chapter: 17
  },
  {
    question: "A patient has a simple partial seizure affecting the right hand that slowly spreads up the arm while the patient remains aware. Which documentation detail is most useful?",
    options: ["The focal onset, spread pattern, preserved awareness, duration, and any change from prior events", "Only that the patient had a seizure, because type has no clinical value", "Only the patient's final blood pressure after the event", "That the event was syncope because awareness was preserved"],
    answer: "The focal onset, spread pattern, preserved awareness, duration, and any change from prior events",
    explanation: "Seizure pattern, duration, body areas involved, awareness, triggers, and changes from baseline help hospital evaluation.",
    category: "Seizure Documentation",
    chapter: 17
  }
];

const chapter18Questions = [
  { question: "A 79-year-old with severe diffuse abdominal pain lies motionless with knees flexed, has a rigid abdomen, tachycardia, and borderline hypotension. Which interpretation best guides EMT priorities?", options: ["Peritoneal irritation with possible acute abdomen and evolving shock", "Benign gastroenteritis because abdominal pain is diffuse", "Renal colic because motionless positioning is typical", "Psychogenic abdominal pain until fever is documented"], answer: "Peritoneal irritation with possible acute abdomen and evolving shock", explanation: "Guarding, rigidity, pain-relieving positioning, tachycardia, and falling pressure suggest peritonitis or acute abdomen with shock risk.", category: "Acute Abdomen", chapter: 18 },
  { question: "Which statement best distinguishes referred abdominal pain from radiating pain during OPQRST?", options: ["Referred pain is felt at a distant site sharing nerve pathways; radiating pain spreads from the primary region", "Referred pain always means trauma; radiating pain always means infection", "Referred pain can only occur below the umbilicus; radiating pain only occurs above it", "Referred pain disappears with palpation; radiating pain worsens only with eating"], answer: "Referred pain is felt at a distant site sharing nerve pathways; radiating pain spreads from the primary region", explanation: "Referred pain may be perceived away from the diseased organ, while radiating pain travels from the original area.", category: "Pain Patterns", chapter: 18 },
  { question: "A patient vomits bright red blood after repeated retching and becomes pale and diaphoretic. Which condition is most consistent with this history?", options: ["Mallory-Weiss tear with upper GI hemorrhage", "Diverticulitis with lower GI perforation", "Cystitis with urinary retention", "Renal calculi with referred shoulder pain"], answer: "Mallory-Weiss tear with upper GI hemorrhage", explanation: "Forceful retching can tear the esophagogastric junction and produce significant upper GI bleeding.", category: "Gastrointestinal Bleeding", chapter: 18 },
  { question: "Which finding most strongly suggests upper GI bleeding rather than a non-bleeding abdominal complaint?", options: ["Coffee-ground emesis with melena and signs of hypoperfusion", "Clear urine with flank colic and restlessness", "Right lower quadrant pain that migrated from the periumbilical area", "Suprapubic burning and urinary frequency without blood loss signs"], answer: "Coffee-ground emesis with melena and signs of hypoperfusion", explanation: "Partially digested blood may appear as coffee-ground emesis or black tarry stool and can produce shock.", category: "Gastrointestinal Bleeding", chapter: 18 },
  { question: "A flank-pain patient cannot find a comfortable position, has waves of severe pain radiating toward the groin, nausea, and hematuria. Which field impression is most defensible?", options: ["Renal colic from a ureteral stone", "Peritonitis from a perforated ulcer", "Esophageal varices from liver failure", "Appendicitis with classic rebound tenderness"], answer: "Renal colic from a ureteral stone", explanation: "Kidney stones often cause severe colicky flank pain that may radiate toward the groin with nausea and possible blood in the urine.", category: "Urologic Emergencies", chapter: 18 },
  { question: "A chronic renal failure patient missed dialysis and is now weak, short of breath, hypertensive, and has an arm shunt. Which transport concern matters most?", options: ["Potential fluid/electrolyte derangement requiring prompt evaluation and protection of the dialysis access", "The shunt should be used by EMTs for medication access", "Missed dialysis is only a scheduling issue if the patient is awake", "Blood pressure should be taken over the shunt arm to trend perfusion"], answer: "Potential fluid/electrolyte derangement requiring prompt evaluation and protection of the dialysis access", explanation: "Missed dialysis can cause serious fluid, waste, and electrolyte problems; dialysis access should be protected.", category: "Renal Failure and Dialysis", chapter: 18 },
  { question: "Why should an EMT avoid aggressive abdominal palpation in suspected acute abdomen?", options: ["It may worsen pain, guarding, vomiting, or patient distress without changing BLS treatment", "It reliably reverses ileus if done firmly", "It is required to prove appendicitis before transport", "It prevents peritonitis from spreading"], answer: "It may worsen pain, guarding, vomiting, or patient distress without changing BLS treatment", explanation: "Assessment should be gentle because definitive diagnosis is hospital-based and BLS care is supportive with transport.", category: "Patient Assessment", chapter: 18 },
  { question: "A geriatric patient with vague weakness, mild abdominal discomfort, cool skin, and tachycardia denies severe pain. Which reasoning is safest?", options: ["Older adults may have muted abdominal findings despite serious disease", "Absence of severe pain rules out acute abdomen in geriatric patients", "Fever must be present before peritonitis can be suspected", "Abdominal complaints in older adults are usually non-urgent constipation"], answer: "Older adults may have muted abdominal findings despite serious disease", explanation: "Older patients may show atypical or blunted signs, so weak perfusion signs deserve high concern.", category: "Special Populations", chapter: 18 },
  { question: "Which treatment plan best fits an unstable patient with suspected GI hemorrhage and repeated vomiting?", options: ["Protect the airway, position for vomiting, treat for shock, keep warm, and transport promptly", "Give oral fluids to correct presumed dehydration", "Delay transport until stool color can be confirmed", "Place supine regardless of active emesis to improve venous return"], answer: "Protect the airway, position for vomiting, treat for shock, keep warm, and transport promptly", explanation: "GI bleeding and vomiting threaten airway and perfusion; BLS care is airway protection, shock care, and rapid transport.", category: "Management and Transport", chapter: 18 },
  { question: "Which abdominal presentation is most consistent with appendicitis progressing toward peritoneal irritation?", options: ["Dull periumbilical pain migrating to the right lower quadrant with anorexia and rebound tenderness", "Right upper quadrant pain referring to the right shoulder after fatty meals", "Epigastric tearing after forceful vomiting with hematemesis", "Flank pain radiating to the groin with urinary urgency"], answer: "Dull periumbilical pain migrating to the right lower quadrant with anorexia and rebound tenderness", explanation: "Appendicitis commonly begins vague near the umbilicus and later localizes to the right lower quadrant as irritation increases.", category: "Common Abdominal Emergencies", chapter: 18 },
  { question: "A patient with suspected esophageal varices is vomiting bright red blood and has jaundice, ascites, and hypotension. Which underlying risk pattern best fits?", options: ["Portal hypertension from chronic liver disease with fragile esophageal vessels", "Renal calculi obstructing the ureter", "Bladder infection causing urinary retention", "Simple food poisoning from preformed bacterial toxin"], answer: "Portal hypertension from chronic liver disease with fragile esophageal vessels", explanation: "Esophageal varices are associated with liver disease and can cause massive upper GI bleeding with shock.", category: "Gastrointestinal Bleeding", chapter: 18 },
  { question: "A patient with severe right upper quadrant pain after fatty meals reports pain into the right shoulder. Which condition and pain mechanism are most consistent?", options: ["Cholecystitis with referred pain", "Appendicitis with direct right lower quadrant pain", "Cystitis with suprapubic radiating pain", "Hemorrhoids with referred shoulder pain"], answer: "Cholecystitis with referred pain", explanation: "Gallbladder inflammation can cause right upper quadrant pain with referred pain to the right shoulder.", category: "Pain Patterns", chapter: 18 },
  { question: "Which scene and exam combination should heighten infection-control concern during a GI/urologic call?", options: ["Projectile vomiting or fecal contamination with possible infectious diarrhea", "Flank pain without vomiting in a clean room", "Abdominal pain after a fatty meal with no body fluids", "Stable dialysis patient with an intact access site"], answer: "Projectile vomiting or fecal contamination with possible infectious diarrhea", explanation: "GI calls may involve vomitus, feces, urine, or infectious diarrhea; PPE and contamination control matter.", category: "Scene Safety", chapter: 18 },
  { question: "Why can abdominal pain from myocardial infarction or pneumonia complicate EMT assessment?", options: ["Nonabdominal disease can present with abdominal symptoms, so ABCs and broad differentials remain important", "All abdominal pain originates in the digestive tract", "Urologic symptoms rule out cardiopulmonary illness", "A soft abdomen excludes life-threatening nonabdominal causes"], answer: "Nonabdominal disease can present with abdominal symptoms, so ABCs and broad differentials remain important", explanation: "Abdominal complaints can arise from other body systems, so EMTs must avoid anchoring on GI causes only.", category: "Differential Diagnosis", chapter: 18 },
  { question: "A patient with abdominal pain is vomiting repeatedly and insists on sitting curled forward. Which positioning principle is best?", options: ["Allow a position of comfort if it protects the airway and does not worsen shock", "Force the patient flat to standardize abdominal assessment", "Place the patient prone to reduce vomiting risk", "Make the patient stand so pain location is easier to identify"], answer: "Allow a position of comfort if it protects the airway and does not worsen shock", explanation: "Patients with acute abdomen often choose positions that reduce peritoneal irritation; airway and perfusion still guide positioning.", category: "Management and Transport", chapter: 18 }
];

const chapter19Questions = [
  { question: "A confused diabetic patient is diaphoretic, tremulous, combative, and suddenly worse after skipping lunch but taking usual insulin. Which pathophysiology best explains the presentation?", options: ["Excess circulating insulin relative to available glucose causing cerebral glucose deprivation", "Ketone accumulation from days of absent insulin", "Hyperosmolar dehydration with gradual onset over many days", "Sickle-shaped erythrocytes obstructing capillary flow"], answer: "Excess circulating insulin relative to available glucose causing cerebral glucose deprivation", explanation: "Rapid altered behavior after insulin without food strongly suggests symptomatic hypoglycemia.", category: "Hypoglycemia", chapter: 19 },
  { question: "Which patient best fits DKA rather than isolated hypoglycemia?", options: ["Type 1 diabetic with infection, polyuria, dehydration, fruity breath, Kussmaul respirations, and glucose above 400 mg/dL", "Diabetic who took insulin and became suddenly sweaty before dinner", "Alert patient with normal glucose and isolated ankle pain", "Patient with abrupt hives, wheezing, and hypotension after peanuts"], answer: "Type 1 diabetic with infection, polyuria, dehydration, fruity breath, Kussmaul respirations, and glucose above 400 mg/dL", explanation: "DKA involves insulin deficiency, fat metabolism, ketone acidosis, dehydration, and often deep rapid respirations.", category: "DKA and Hyperglycemia", chapter: 19 },
  { question: "An older type 2 diabetic has days of worsening thirst, dark concentrated urine, weakness, dehydration, and severe hyperglycemia without prominent ketone signs. Which complication is most likely?", options: ["Hyperosmolar hyperglycemic nonketotic syndrome", "Simple partial seizure", "Hemophilia A", "Acute anaphylaxis"], answer: "Hyperosmolar hyperglycemic nonketotic syndrome", explanation: "HHNS often develops gradually in type 2 diabetes with profound dehydration and high glucose rather than classic ketoacidosis.", category: "HHNS", chapter: 19 },
  { question: "Which condition is a contraindication to oral glucose in a diabetic emergency?", options: ["Inability to swallow safely or protect the airway", "Known history of diabetes", "Blood glucose lower than normal", "Patient is conscious and follows commands"], answer: "Inability to swallow safely or protect the airway", explanation: "Oral glucose is only for patients who can swallow and maintain their airway; aspiration risk changes the plan.", category: "Oral Glucose", chapter: 19 },
  { question: "A diabetic patient with chest discomfort, nausea, and weakness denies pain and looks only mildly ill. Which advanced assessment mindset is safest?", options: ["Consider ACS because diabetes can blunt or alter cardiac presentations", "Assume the complaint is glucose-related until the glucometer proves otherwise", "Rule out cardiac causes if the patient has no crushing pain", "Treat only after the patient becomes hypotensive"], answer: "Consider ACS because diabetes can blunt or alter cardiac presentations", explanation: "Diabetes is a major cardiovascular risk factor and may produce atypical ACS symptoms.", category: "Diabetes Complications", chapter: 19 },
  { question: "A patient with sickle cell disease reports severe limb and abdominal pain with tachycardia and tachypnea but no trauma. What is the best field interpretation?", options: ["Possible vasoocclusive crisis with pain, tissue hypoxia, and need for supportive care", "Hemophilia A causing failure to form factor VIII", "HHNS because all severe pain in diabetes is hyperosmolar", "Psychogenic pain because sickle crises are painless"], answer: "Possible vasoocclusive crisis with pain, tissue hypoxia, and need for supportive care", explanation: "Sickled cells can obstruct blood flow, causing ischemic pain and organ complications.", category: "Sickle Cell Disease", chapter: 19 },
  { question: "A hemophilia A patient has a swollen painful knee after minor trauma and appears pale with a weak pulse. Which concern is most appropriate?", options: ["Bleeding may be significant despite apparently minor mechanism", "Hemophilia primarily causes excessive clotting and pulmonary embolism", "Joint swelling rules out blood loss", "Factor VIII replacement is unnecessary if no external bleeding is seen"], answer: "Bleeding may be significant despite apparently minor mechanism", explanation: "Hemophilia impairs clotting, so minor trauma can cause serious internal bleeding into tissues or joints.", category: "Hemophilia", chapter: 19 },
  { question: "Which finding cluster best supports thrombophilia-related DVT/PE risk rather than hemophilia?", options: ["Recent immobility or surgery with unilateral leg swelling and new dyspnea", "Prolonged bleeding after minor trauma with known factor VIII deficiency", "Vasoocclusive pain crisis with chronic anemia", "Rapid sweating and confusion after insulin use"], answer: "Recent immobility or surgery with unilateral leg swelling and new dyspnea", explanation: "Thrombophilia increases clot formation; DVT can embolize and cause respiratory or cardiac compromise.", category: "Thrombosis", chapter: 19 },
  { question: "Which EMT care plan best fits an unresponsive diabetic patient with inadequate respirations?", options: ["Open airway, ventilate as needed, check glucose if possible, request ALS, and transport", "Force oral glucose between the teeth before airway care", "Withhold oxygen until glucose is known", "Assume intoxication and wait for police before assessment"], answer: "Open airway, ventilate as needed, check glucose if possible, request ALS, and transport", explanation: "Airway and ventilation come first; glucose assessment informs treatment but cannot precede life threats.", category: "Patient Assessment", chapter: 19 },
  { question: "Why can hyperglycemia and hypoglycemia be dangerous to differentiate by appearance alone?", options: ["Both may produce altered mental status and mimic intoxication or neurologic dysfunction", "Only hyperglycemia changes mental status", "Only hypoglycemia occurs in type 1 diabetes", "Blood glucose is unrelated to brain function"], answer: "Both may produce altered mental status and mimic intoxication or neurologic dysfunction", explanation: "Field appearance can overlap, so EMTs should obtain blood glucose when allowed and avoid assumptions.", category: "Endocrine Assessment", chapter: 19 },
  { question: "A type 1 diabetic with an insulin pump is confused and weak. Which assessment question is most important after ABCs and glucose check?", options: ["Whether the pump may have malfunctioned or dosing/routine changed", "Whether the patient owns a blood pressure cuff", "Whether the patient has ever had appendicitis", "Whether the patient prefers tablets to gel"], answer: "Whether the pump may have malfunctioned or dosing/routine changed", explanation: "Pump malfunction or dosing/routine changes can cause either hypo- or hyperglycemic emergencies.", category: "Diabetes Technology", chapter: 19 },
  { question: "Which mechanism explains polyuria and polydipsia in uncontrolled hyperglycemia?", options: ["Excess filtered glucose pulls water into urine, causing dehydration and compensatory thirst", "Insulin directly blocks urine production", "Sickled cells rupture in the bladder", "Factor VIII deficiency causes renal shutdown"], answer: "Excess filtered glucose pulls water into urine, causing dehydration and compensatory thirst", explanation: "When glucose exceeds renal handling capacity, osmotic diuresis causes fluid loss and thirst.", category: "DKA and Hyperglycemia", chapter: 19 },
  { question: "A sickle cell patient with severe chest pain, dyspnea, fever, and hypoxia should be treated with concern for:", options: ["A potentially life-threatening sickle complication such as acute chest syndrome", "A harmless pain pattern that never affects oxygenation", "Hemophilia-related joint bleeding only", "Hypoglycemia until oral glucose is given"], answer: "A potentially life-threatening sickle complication such as acute chest syndrome", explanation: "Sickle cell disease can cause painful crises and serious organ complications involving oxygenation and perfusion.", category: "Sickle Cell Disease", chapter: 19 },
  { question: "Which bleeding history most changes risk assessment for a hemophilia patient after a seemingly minor fall?", options: ["Head impact or headache after trauma, even without external bleeding", "Mild thirst before the fall", "A normal appetite earlier in the day", "Pain that improves with rest"], answer: "Head impact or headache after trauma, even without external bleeding", explanation: "Clotting disorders raise concern for occult bleeding, including intracranial bleeding after head trauma.", category: "Hemophilia", chapter: 19 },
  { question: "A patient on anticoagulants has melena, weakness, and a near-syncopal episode. Which chapter 19 concept is most relevant?", options: ["Clotting impairment or therapy can increase bleeding severity from another emergency", "Anticoagulants prevent all GI bleeding", "Melena indicates hypoglycemia until proven otherwise", "Near-syncope excludes blood loss"], answer: "Clotting impairment or therapy can increase bleeding severity from another emergency", explanation: "Hematologic or medication-related clotting problems can worsen bleeding and shock risk.", category: "Hematologic Assessment", chapter: 19 }
];

const chapter20Questions = [
  { question: "Which presentation most clearly meets the field concern for anaphylaxis rather than a local allergic reaction?", options: ["Diffuse hives with wheezing, lip swelling, vomiting, and falling blood pressure", "Tender redness limited to the sting site with normal breathing", "Itching isolated to one forearm after plant contact", "Mild rhinorrhea after pollen exposure with normal perfusion"], answer: "Diffuse hives with wheezing, lip swelling, vomiting, and falling blood pressure", explanation: "Anaphylaxis is systemic and may involve skin, airway, breathing, GI symptoms, and shock.", category: "Anaphylaxis Recognition", chapter: 20 },
  { question: "A patient with suspected anaphylaxis has hypotension but minimal wheezing. What is the safest interpretation?", options: ["Anaphylaxis may present primarily as circulatory collapse even without severe respiratory complaints", "Anaphylaxis is excluded unless audible wheezing is present", "Hypotension means epinephrine is contraindicated in all cases", "Skin signs must appear before perfusion can be affected"], answer: "Anaphylaxis may present primarily as circulatory collapse even without severe respiratory complaints", explanation: "Some anaphylaxis patients primarily show shock from vasodilation and capillary leakage.", category: "Anaphylaxis Recognition", chapter: 20 },
  { question: "What is the most important therapeutic rationale for epinephrine in severe anaphylaxis?", options: ["It reverses bronchospasm, supports vascular tone, reduces hypotension, and improves perfusion", "It slowly blocks histamine over several hours", "It neutralizes venom at the sting site", "It prevents recurrence without need for transport"], answer: "It reverses bronchospasm, supports vascular tone, reduces hypotension, and improves perfusion", explanation: "Epinephrine has rapid sympathomimetic effects that address airway, breathing, and circulation threats.", category: "Epinephrine", chapter: 20 },
  { question: "Which epinephrine dosing statement matches typical auto-injector teaching?", options: ["Adult auto-injector 0.3 mg IM; pediatric auto-injector 0.15 mg IM", "Adult auto-injector 3 mg IV; pediatric auto-injector 1.5 mg IV", "Adult auto-injector 0.03 mg PO; pediatric auto-injector 0.015 mg PO", "Adult and pediatric auto-injectors always contain the same dose"], answer: "Adult auto-injector 0.3 mg IM; pediatric auto-injector 0.15 mg IM", explanation: "Common auto-injectors deliver premeasured intramuscular epinephrine doses based on adult or pediatric size.", category: "Epinephrine", chapter: 20 },
  { question: "A peanut-allergic patient improves after epinephrine and wants to refuse transport. Which explanation is most clinically accurate?", options: ["Epinephrine can wear off before the reaction fully resolves, so ED evaluation remains important", "Improvement proves the allergen has been eliminated", "Transport is unnecessary unless hives remain visible", "Antihistamines permanently replace epinephrine once symptoms improve"], answer: "Epinephrine can wear off before the reaction fully resolves, so ED evaluation remains important", explanation: "Recurrent or worsening symptoms can occur after initial improvement, so transport is still warranted.", category: "Management and Transport", chapter: 20 },
  { question: "Which assessment finding suggests impending airway compromise in an allergic patient?", options: ["Progressive hoarseness, tongue swelling, stridor, or difficulty handling secretions", "Localized itch at the bite site with normal voice", "Anxiety alone with clear lungs and no swelling", "Normal speech after a resolved rash"], answer: "Progressive hoarseness, tongue swelling, stridor, or difficulty handling secretions", explanation: "Upper airway edema can progress quickly and must be identified early.", category: "Airway and Breathing", chapter: 20 },
  { question: "Which trigger category is most often associated with delayed recognition because symptoms may appear after ingestion and skin signs may be absent?", options: ["Food allergy", "Direct heat exposure", "Simple mechanical abrasion", "Blunt trauma"], answer: "Food allergy", explanation: "Food-triggered anaphylaxis may be delayed and may not initially include obvious hives.", category: "Allergen Triggers", chapter: 20 },
  { question: "A geriatric patient with CAD has prescribed epinephrine and clear anaphylaxis. Which statement best reflects risk-benefit thinking?", options: ["Cardiac history raises concern, but life-threatening anaphylaxis may still warrant epinephrine per protocol or medical control", "Cardiac history absolutely forbids epinephrine even in airway swelling and shock", "Epinephrine should be replaced with oral antihistamine in severe anaphylaxis", "Only oxygen is allowed if the patient is older than 65"], answer: "Cardiac history raises concern, but life-threatening anaphylaxis may still warrant epinephrine per protocol or medical control", explanation: "Epinephrine can stress the heart, but the danger of untreated anaphylaxis can outweigh that risk.", category: "Special Populations", chapter: 20 },
  { question: "Which reassessment finding after epinephrine should most strongly prompt immediate escalation and possible second-dose consideration per protocol?", options: ["Persistent or worsening hypotension, wheezing, airway swelling, or declining mental status", "Residual scattered hives with normal breathing and perfusion", "Mild tremor and increased heart rate after the injection", "Patient reports feeling embarrassed about the auto-injector"], answer: "Persistent or worsening hypotension, wheezing, airway swelling, or declining mental status", explanation: "Failure to improve or clinical deterioration after epinephrine requires urgent reassessment and protocol-guided escalation.", category: "Reassessment", chapter: 20 },
  { question: "Why are skin findings alone unreliable for judging severity in anaphylaxis?", options: ["Serious airway or circulatory compromise may occur with subtle, hidden, or absent rash", "Hives always indicate stable perfusion", "Skin color is more accurate than blood pressure", "Angioedema rules out shock"], answer: "Serious airway or circulatory compromise may occur with subtle, hidden, or absent rash", explanation: "Anaphylaxis severity is judged by airway, breathing, circulation, GI, and progression, not rash alone.", category: "Patient Assessment", chapter: 20 },
  { question: "A patient has diffuse hives and nausea but no wheezing, stridor, hypotension, or airway swelling. Which approach is most defensible?", options: ["Monitor closely, obtain allergy history, prepare for rapid worsening, and transport per protocol", "Ignore the reaction because respiratory distress is absent", "Administer epinephrine automatically to every rash", "Delay transport until a second organ system fails"], answer: "Monitor closely, obtain allergy history, prepare for rapid worsening, and transport per protocol", explanation: "Mild systemic findings can worsen; severity and protocol guide epinephrine and transport decisions.", category: "Patient Assessment", chapter: 20 },
  { question: "Which history question is most likely to identify a hidden trigger when anaphylaxis begins at a restaurant?", options: ["What foods, medications, or exposures occurred before symptoms started, including possible cross-contact allergens?", "What was the patient's highest blood pressure last year?", "Did the patient ever have appendicitis?", "How many hours did the patient sleep last night?"], answer: "What foods, medications, or exposures occurred before symptoms started, including possible cross-contact allergens?", explanation: "Food and medication exposures may be hidden, delayed, or unknown to the patient.", category: "Allergen Triggers", chapter: 20 },
  { question: "Which sequence best fits BLS management of severe anaphylaxis?", options: ["Assess ABCs, give oxygen/ventilatory support as needed, assist epinephrine per protocol, treat shock, transport, and reassess frequently", "Give antihistamine first, delay oxygen, and transport only if rash persists", "Obtain full medication list before assessing airway", "Wait for hypotension before preparing epinephrine when airway swelling is present"], answer: "Assess ABCs, give oxygen/ventilatory support as needed, assist epinephrine per protocol, treat shock, transport, and reassess frequently", explanation: "Severe allergic reactions require immediate ABC support, epinephrine when indicated, shock care, and rapid transport.", category: "Management and Transport", chapter: 20 },
  { question: "Which physiologic change explains hypotension in anaphylaxis?", options: ["Vasodilation and increased capillary permeability causing relative volume loss", "Renal calculi obstructing urine flow", "Complete absence of insulin production", "Excessive clotting in the femoral veins only"], answer: "Vasodilation and increased capillary permeability causing relative volume loss", explanation: "Chemical mediators cause leaky vessels and vasodilation, reducing effective circulating volume and perfusion.", category: "Pathophysiology", chapter: 20 },
  { question: "Which documentation detail is most important after assisting with an epinephrine auto-injector?", options: ["Dose/device used, time given, route/site, response, and reassessment findings", "Only the patient's allergy history", "Only whether hives disappeared", "The brand of alcohol wipe used"], answer: "Dose/device used, time given, route/site, response, and reassessment findings", explanation: "Receiving clinicians need epinephrine timing, dose, route/site, response, and ongoing trends.", category: "Documentation", chapter: 20 }
];

const chapter21Questions = [
  { question: "Which scene detail should most strongly stop entry until specialized help confirms safety?", options: ["Unresponsive patient in an enclosed garage with a running vehicle", "Empty prescription bottle on a kitchen counter with open windows", "Patient awake after eating suspicious leftovers", "Alcohol containers near an alert patient with normal respirations"], answer: "Unresponsive patient in an enclosed garage with a running vehicle", explanation: "Inhaled toxins such as carbon monoxide can endanger rescuers; scene safety and ventilation/HazMat support come first.", category: "Scene Safety", chapter: 21 },
  { question: "Why can pulse oximetry be misleading in carbon monoxide poisoning?", options: ["It may read falsely reassuring because it cannot reliably distinguish oxyhemoglobin from carboxyhemoglobin", "It always reads zero in carbon monoxide exposure", "It directly measures tissue cyanide levels", "It is accurate only in sedative overdoses"], answer: "It may read falsely reassuring because it cannot reliably distinguish oxyhemoglobin from carboxyhemoglobin", explanation: "Carbon monoxide binds hemoglobin and can make standard SpO2 appear better than the patient's oxygen delivery really is.", category: "Inhaled Poisons", chapter: 21 },
  { question: "Which patient is a poor candidate for activated charcoal?", options: ["Unresponsive patient with unknown overdose and inability to protect the airway", "Alert adult who swallowed appropriate charcoal-binding tablets within the protocol window", "Cooperative patient for whom medical control orders charcoal", "Patient who can swallow and has no caustic ingestion history"], answer: "Unresponsive patient with unknown overdose and inability to protect the airway", explanation: "Activated charcoal is contraindicated when airway protection is poor and is ineffective or unsafe for several toxin types.", category: "Activated Charcoal", chapter: 21 },
  { question: "Which toxidrome is most consistent with opioid overdose requiring ventilatory support and naloxone consideration?", options: ["CNS depression with slow inadequate respirations and possible pinpoint pupils", "Hypertension, dilated pupils, agitation, and diaphoresis", "Hot dry flushed skin with delirium and urinary retention", "Profuse secretions, bronchorrhea, diarrhea, and bradycardia"], answer: "CNS depression with slow inadequate respirations and possible pinpoint pupils", explanation: "Opioids depress the CNS and respiratory drive; ventilation remains the priority while naloxone is prepared or administered.", category: "Opioids and Naloxone", chapter: 21 },
  { question: "After naloxone, an opioid-overdose patient wakes up but remains exposed to unknown pills and alcohol. Which statement is safest?", options: ["Improvement does not rule out recurrent respiratory depression or co-ingestion risk", "Naloxone neutralizes all sedatives and alcohol permanently", "Transport can be cancelled if the patient is angry but awake", "Activated charcoal is automatically indicated after naloxone"], answer: "Improvement does not rule out recurrent respiratory depression or co-ingestion risk", explanation: "Naloxone may wear off and does not treat non-opioid co-ingestions; reassessment and transport remain important.", category: "Opioids and Naloxone", chapter: 21 },
  { question: "A pesticide-exposed patient has heavy salivation, tearing, urination, diarrhea, bronchorrhea, bradycardia, and seizures. Which poisoning pattern is most likely?", options: ["Cholinergic organophosphate or nerve-agent exposure", "Anticholinergic overdose", "Sympathomimetic stimulant intoxication", "Simple ethanol intoxication"], answer: "Cholinergic organophosphate or nerve-agent exposure", explanation: "SLUDGE/SLUDGEM findings point toward cholinergic toxicity and require responder protection and decontamination awareness.", category: "Cholinergic Agents", chapter: 21 },
  { question: "Which presentation best matches anticholinergic toxicity rather than cholinergic toxicity?", options: ["Hot, dry, flushed, delirious patient with dilated pupils", "Drooling patient with bronchorrhea and diarrhea", "Patient with pinpoint pupils and shallow respirations", "Patient with sudden vomiting after spoiled food"], answer: "Hot, dry, flushed, delirious patient with dilated pupils", explanation: "Anticholinergic poisoning blocks parasympathetic effects and classically produces hot, dry, red, blind, and delirious findings.", category: "Anticholinergic Agents", chapter: 21 },
  { question: "What is the best general BLS principle for surface-contact chemical poisoning?", options: ["Avoid self-contamination and remove or dilute the substance with appropriate decontamination", "Immediately administer activated charcoal to bind the skin toxin", "Delay decontamination until the exact chemical is named", "Transport without removing contaminated clothing"], answer: "Avoid self-contamination and remove or dilute the substance with appropriate decontamination", explanation: "Absorbed/contact poisons require responder protection and removal or dilution of the contaminant when appropriate.", category: "Absorbed Poisons", chapter: 21 },
  { question: "A patient has sudden nausea, vomiting, and diarrhea after eating leftovers, while other family members who ate the same food are ill. Which history is most useful?", options: ["Food source, time eaten, symptom onset, others exposed, and container/leftovers if available", "Only whether the patient has ever used opioids", "Only the patient's last normal blood pressure", "Whether the patient has an epinephrine auto-injector"], answer: "Food source, time eaten, symptom onset, others exposed, and container/leftovers if available", explanation: "Food poisoning assessment depends on exposure timing, shared illness, food details, and transport of useful containers or labels when appropriate.", category: "Food Poisoning", chapter: 21 },
  { question: "A stimulant-intoxicated patient is hypertensive, tachycardic, paranoid, diaphoretic, and hyperthermic. Which management concern is most important?", options: ["Excited physiology can rapidly become life-threatening; prioritize safety, cooling as appropriate, ABCs, and rapid transport", "The presentation is harmless if the patient denies chest pain", "Activated charcoal reverses stimulant effects in the field", "Naloxone is the antidote for sympathomimetic toxicity"], answer: "Excited physiology can rapidly become life-threatening; prioritize safety, cooling as appropriate, ABCs, and rapid transport", explanation: "Sympathomimetics stress the cardiovascular system and can cause hyperthermia, agitation, and sudden deterioration.", category: "Stimulants", chapter: 21 },
  { question: "Which information should be gathered for poison control after immediate life threats are managed?", options: ["Substance, amount, route, time, patient weight, symptoms, and any treatments already given", "Only the patient's insurance status", "Only whether the patient vomited", "Only the name of the transporting ambulance"], answer: "Substance, amount, route, time, patient weight, symptoms, and any treatments already given", explanation: "Poison center guidance depends on exposure details, dose, timing, route, patient size, symptoms, and prior interventions.", category: "Poison Control", chapter: 21 },
  { question: "A child ingests a household alkali cleaner and is crying with oral burns. Which treatment is inappropriate?", options: ["Activated charcoal by mouth", "Airway assessment", "Poison center or medical control contact", "Prompt transport"], answer: "Activated charcoal by mouth", explanation: "Activated charcoal is not effective for caustic alkali ingestion and may worsen airway or vomiting risk.", category: "Activated Charcoal", chapter: 21 },
  { question: "Which exposure route is hardest to dilute or remove once symptoms occur?", options: ["Injected poison", "Surface contact powder before absorption", "Inhaled gas after removal to fresh air", "Contaminated clothing before decontamination"], answer: "Injected poison", explanation: "Injected toxins are rapidly introduced into tissue or bloodstream and generally cannot be removed in the field.", category: "Injected Poisons", chapter: 21 },
  { question: "A sedative-hypnotic overdose patient is deeply drowsy with respiratory depression. Which BLS priority is most important?", options: ["Airway positioning, suction as needed, assisted ventilation, and transport", "Naloxone as definitive treatment for every sedative", "Activated charcoal regardless of mental status", "Walking the patient to keep them awake"], answer: "Airway positioning, suction as needed, assisted ventilation, and transport", explanation: "Sedative-hypnotics depress the CNS and breathing; supportive airway and ventilation care is central.", category: "CNS Depressants", chapter: 21 },
  { question: "Why is alcohol intoxication a risky field diagnosis when the patient has altered mental status?", options: ["Alcohol can coexist with trauma, hypoglycemia, overdose, or medical illness, so a full assessment is still required", "Alcohol intoxication protects against hypoglycemia", "Alcohol rules out head injury if no bleeding is visible", "Alcohol intoxication is never associated with respiratory depression"], answer: "Alcohol can coexist with trauma, hypoglycemia, overdose, or medical illness, so a full assessment is still required", explanation: "Labeling AMS as alcohol alone can miss serious and treatable causes.", category: "Alcohol", chapter: 21 }
];

const chapter22Questions = [
  { question: "A bizarre, agitated patient is diaphoretic and tachycardic with no psychiatric history. Which first principle prevents a dangerous diagnostic error?", options: ["Assume medical, traumatic, toxicologic, and psychiatric causes remain possible until assessed", "Classify all bizarre behavior as functional psychiatric disease", "Wait for law enforcement before checking glucose or oxygenation", "Avoid asking about medical history because it may escalate behavior"], answer: "Assume medical, traumatic, toxicologic, and psychiatric causes remain possible until assessed", explanation: "Behavioral change can result from hypoxia, hypoglycemia, head injury, intoxication, infection, or psychiatric illness.", category: "Medical Mimics", chapter: 22 },
  { question: "Which distinction between organic brain syndrome and functional disorder is most clinically useful in EMS?", options: ["Organic causes arise from physical brain/body dysfunction; functional disorders may impair behavior without obvious structural abnormality", "Organic causes are always psychiatric; functional causes are always hypoglycemia", "Functional disorders never require transport", "Organic causes can be ruled out if the patient speaks clearly"], answer: "Organic causes arise from physical brain/body dysfunction; functional disorders may impair behavior without obvious structural abnormality", explanation: "EMS must search for treatable organic causes while still managing psychiatric distress safely.", category: "Pathophysiology", chapter: 22 },
  { question: "Which scene approach is safest for a potentially violent psychiatric emergency?", options: ["Stage until law enforcement secures the scene, maintain exits, and limit unnecessary personnel", "Enter quickly to prove calm authority before police arrive", "Block the patient's exit with the stretcher", "Separate from your partner so the patient feels less surrounded"], answer: "Stage until law enforcement secures the scene, maintain exits, and limit unnecessary personnel", explanation: "Provider safety comes first; violence risk requires staging, law enforcement, escape routes, and scene control.", category: "Scene Safety", chapter: 22 },
  { question: "A patient is hyperactive, irrational, hallucinating, sweating, hypertensive, tachycardic, and physically exhausted after stimulant use and prolonged struggle. Which syndrome is most concerning?", options: ["Agitated delirium with risk of sudden death and severe physiologic stress", "Simple anxiety attack requiring no medical evaluation", "Resolved schizophrenia with no transport need", "Mild depression without safety risk"], answer: "Agitated delirium with risk of sudden death and severe physiologic stress", explanation: "Agitated delirium can involve hyperthermia, acidosis, stimulant effects, restraint stress, and sudden deterioration.", category: "Agitated Delirium", chapter: 22 },
  { question: "Before physical restraint, which action is preferred if the scene is safe enough to attempt it?", options: ["Verbal de-escalation with honest, calm communication and adequate backup nearby", "Immediate prone restraint to prevent movement", "Threatening arrest to force compliance", "Removing all family members even if one is calming the patient"], answer: "Verbal de-escalation with honest, calm communication and adequate backup nearby", explanation: "De-escalation is safest when feasible and may prevent restraint-related complications.", category: "De-escalation", chapter: 22 },
  { question: "Which restraint practice is unsafe and should be avoided?", options: ["Transporting the patient prone, hog-tied, or with chest movement restricted", "Using the least restrictive effective restraint per protocol", "Continuous airway and circulation reassessment after restraint", "Documenting the reason and method of restraint"], answer: "Transporting the patient prone, hog-tied, or with chest movement restricted", explanation: "Prone or hog-tied positioning can cause positional asphyxia and prevents adequate monitoring.", category: "Restraint Safety", chapter: 22 },
  { question: "A patient jokes, 'Maybe everyone would be better off if I disappeared,' after describing severe depression. Which response is most appropriate?", options: ["Ask directly about suicidal thoughts and plan while ensuring safety", "Avoid the topic because direct questions can create suicidal ideas", "Dismiss it if the family says the patient is dramatic", "Leave the patient alone briefly to reduce embarrassment"], answer: "Ask directly about suicidal thoughts and plan while ensuring safety", explanation: "Vague suicidal statements must be taken seriously; asking directly does not plant the idea.", category: "Suicide Risk", chapter: 22 },
  { question: "Which patient has especially high suicide concern even if currently calm?", options: ["Severely depressed patient with recent loss, alcohol use, and access to lethal means", "Patient with a mild phobia who denies self-harm and has stable support", "Patient upset about wait time but joking with family", "Patient with chronic anxiety who requests voluntary evaluation"], answer: "Severely depressed patient with recent loss, alcohol use, and access to lethal means", explanation: "Depression, substance use, recent loss, and access to means increase suicide risk.", category: "Suicide Risk", chapter: 22 },
  { question: "Which statement about consent and refusal in psychiatric emergencies is safest?", options: ["A patient impaired by mental illness, intoxication, or medical cause may lack capacity to refuse; consult law enforcement, medical control, or protocol", "All conscious adults can refuse regardless of danger or capacity", "EMTs alone can always force transport for any psychiatric complaint", "Refusal is valid if the patient can state their name"], answer: "A patient impaired by mental illness, intoxication, or medical cause may lack capacity to refuse; consult law enforcement, medical control, or protocol", explanation: "Capacity can be compromised; psychiatric refusals require careful legal and medical handling.", category: "Medical Legal", chapter: 22 },
  { question: "A veteran with flashbacks becomes defensive when approached abruptly. Which approach best reflects PTSD-aware care?", options: ["Use calm communication, avoid unnecessary restraint, reduce perceived threat, and preserve safety", "Crowd the patient to prevent escape", "Assume the patient is intentionally manipulative", "Use physical restraint early because verbal support is ineffective in PTSD"], answer: "Use calm communication, avoid unnecessary restraint, reduce perceived threat, and preserve safety", explanation: "PTSD can involve hyperarousal, flashbacks, avoidance, and threat perception; calm respectful care reduces escalation.", category: "PTSD", chapter: 22 },
  { question: "Which physical finding during restraint requires immediate reassessment and possible repositioning?", options: ["Increasing respiratory distress, cyanosis, vomiting, or reduced ability to move the chest", "Calmer verbal tone after reassurance", "Patient asking where they are being transported", "Normal distal circulation in all restrained limbs"], answer: "Increasing respiratory distress, cyanosis, vomiting, or reduced ability to move the chest", explanation: "Restrained patients are at risk for airway compromise, aspiration, and positional asphyxia; breathing must be continuously monitored.", category: "Restraint Safety", chapter: 22 },
  { question: "Which documentation is most defensible after restraining a violent patient?", options: ["Behavior creating danger, de-escalation attempted, restraint type, position, monitoring, reassessments, and law enforcement involvement", "Only that the patient was difficult", "Only the final destination", "No documentation because restraint was performed by police"], answer: "Behavior creating danger, de-escalation attempted, restraint type, position, monitoring, reassessments, and law enforcement involvement", explanation: "Restraint has medical and legal risk, so objective behavior, rationale, method, and monitoring must be documented.", category: "Documentation", chapter: 22 },
  { question: "A patient with apparent psychosis also has fever, tachycardia, urinary complaints, and new confusion. Which differential should not be missed?", options: ["Organic illness such as infection causing altered behavior", "Primary schizophrenia only because hallucinations are present", "PTSD only because confusion is new", "Malingering because fever is unrelated to behavior"], answer: "Organic illness such as infection causing altered behavior", explanation: "Infection and other medical causes can produce delirium and behavioral changes, especially in vulnerable patients.", category: "Medical Mimics", chapter: 22 },
  { question: "Which statement best describes EMT authority when a dangerous patient resists transport?", options: ["EMTs should follow protocol and involve law enforcement or medical control because legal authority varies", "EMTs can always arrest the patient", "Family consent always overrides patient refusal", "A psychiatric diagnosis alone automatically removes all rights"], answer: "EMTs should follow protocol and involve law enforcement or medical control because legal authority varies", explanation: "Mental incapacity, danger, and refusal require careful use of protocol, medical direction, and law enforcement support.", category: "Medical Legal", chapter: 22 },
  { question: "A hostile patient begins pacing, clenching fists, and scanning the room while family argues nearby. Which action best reduces escalation?", options: ["Remove unnecessary people, keep a safe exit path, use calm concise speech, and request adequate help", "Stand close to show confidence", "Argue point-by-point until the patient agrees", "Turn your back while preparing equipment"], answer: "Remove unnecessary people, keep a safe exit path, use calm concise speech, and request adequate help", explanation: "Violence prediction and prevention depend on scene control, distance, exits, calm communication, and backup.", category: "Violence Risk", chapter: 22 }
];

const medicalTerminologyQuestions = [
  { id: "medterm-001", category: "Word Roots", question: "What does cardi/o mean?", options: ["Lung", "Heart", "Stomach", "Bone"], answer: "Heart", explanation: "Cardi/o means heart.", learningPoint: "Cardi/o appears in terms like cardiopulmonary and cardiovascular." },
  { id: "medterm-002", category: "Word Roots", question: "What does pulmon/o mean?", options: ["Lung", "Liver", "Joint", "Skin"], answer: "Lung", explanation: "Pulmon/o means lung.", learningPoint: "Cardiopulmonary means heart and lungs." },
  { id: "medterm-003", category: "Word Roots", question: "What does gastr/o mean?", options: ["Brain", "Stomach", "Blood", "Chest"], answer: "Stomach", explanation: "Gastr/o means stomach.", learningPoint: "Gastroenterology includes stomach and intestine terms." },
  { id: "medterm-004", category: "Word Roots", question: "What does enter/o mean?", options: ["Intestine", "Heart", "Bone", "Neck"], answer: "Intestine", explanation: "Enter/o means intestine.", learningPoint: "Gastr/o + enter/o + -logy = study of stomach and intestines." },
  { id: "medterm-005", category: "Word Roots", question: "What does hepat/o mean?", options: ["Lung", "Liver", "Joint", "Eye"], answer: "Liver", explanation: "Liver is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Roots and combining forms give the main meaning of EMS medical terms." },
  { id: "medterm-006", category: "Word Roots", question: "What does arthr/o mean?", options: ["Bone", "Muscle", "Joint", "Blood"], answer: "Joint", explanation: "Joint is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Roots and combining forms give the main meaning of EMS medical terms." },
  { id: "medterm-007", category: "Word Roots", question: "What does oste/o mean?", options: ["Bone", "Skin", "Nerve", "Liver"], answer: "Bone", explanation: "Bone is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Roots and combining forms give the main meaning of EMS medical terms." },
  { id: "medterm-008", category: "Word Roots", question: "What does neur/o mean?", options: ["Kidney", "Nerve", "Stomach", "Blood vessel"], answer: "Nerve", explanation: "Nerve is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Roots and combining forms give the main meaning of EMS medical terms." },
  { id: "medterm-009", category: "Word Roots", question: "What does derm/o mean?", options: ["Skin", "Lung", "Heart", "Spleen"], answer: "Skin", explanation: "Skin is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Roots and combining forms give the main meaning of EMS medical terms." },
  { id: "medterm-010", category: "Word Roots", question: "What does hemat/o mean?", options: ["Air", "Blood", "Bone", "Urine"], answer: "Blood", explanation: "Blood is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Roots and combining forms give the main meaning of EMS medical terms." },
  { id: "medterm-011", category: "Word Roots", question: "What does thorac/o refer to?", options: ["Abdomen", "Chest", "Hand", "Foot"], answer: "Chest", explanation: "Chest is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Roots and combining forms give the main meaning of EMS medical terms." },
  { id: "medterm-012", category: "Word Roots", question: "What does cephal/o refer to?", options: ["Head", "Neck", "Chest", "Hip"], answer: "Head", explanation: "Head is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Roots and combining forms give the main meaning of EMS medical terms." },
  { id: "medterm-013", category: "Word Roots", question: "What does cyan/o mean?", options: ["Red", "White", "Blue", "Yellow"], answer: "Blue", explanation: "Blue is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Roots and combining forms give the main meaning of EMS medical terms." },
  { id: "medterm-014", category: "Word Roots", question: "What does erythr/o mean?", options: ["Red", "Blue", "Black", "Green"], answer: "Red", explanation: "Red is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Roots and combining forms give the main meaning of EMS medical terms." },
  { id: "medterm-015", category: "Word Roots", question: "What does leuk/o mean?", options: ["White", "Red", "Black", "Blue"], answer: "White", explanation: "White is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Roots and combining forms give the main meaning of EMS medical terms." },
  { id: "medterm-016", category: "Prefixes", question: "What does a- or an- mean?", options: ["Fast", "Slow", "Without or absence of", "Above"], answer: "Without or absence of", explanation: "Without or absence of is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Prefixes change the meaning at the beginning of medical terms." },
  { id: "medterm-017", category: "Prefixes", question: "Apnea means:", options: ["Fast breathing", "Slow breathing", "No breathing", "Painful breathing"], answer: "No breathing", explanation: "No breathing is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Prefixes change the meaning at the beginning of medical terms." },
  { id: "medterm-018", category: "Prefixes", question: "What does brady- mean?", options: ["Fast", "Slow", "High", "Low"], answer: "Slow", explanation: "Slow is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Prefixes change the meaning at the beginning of medical terms." },
  { id: "medterm-019", category: "Prefixes", question: "Bradypnea means:", options: ["Slow breathing", "Fast breathing", "No breathing", "Normal breathing"], answer: "Slow breathing", explanation: "Slow breathing is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Prefixes change the meaning at the beginning of medical terms." },
  { id: "medterm-020", category: "Prefixes", question: "What does tachy- mean?", options: ["Slow", "Fast", "Painful", "Below"], answer: "Fast", explanation: "Fast is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Prefixes change the meaning at the beginning of medical terms." },
  { id: "medterm-021", category: "Prefixes", question: "Tachypnea means:", options: ["Slow breathing", "Rapid breathing", "No breathing", "Deep sleep"], answer: "Rapid breathing", explanation: "Rapid breathing is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Prefixes change the meaning at the beginning of medical terms." },
  { id: "medterm-022", category: "Prefixes", question: "Tachycardia means:", options: ["Slow heart rate", "Fast heart rate", "No pulse", "Low blood pressure"], answer: "Fast heart rate", explanation: "Fast heart rate is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Prefixes change the meaning at the beginning of medical terms." },
  { id: "medterm-023", category: "Prefixes", question: "Bradycardia means:", options: ["Slow heart rate", "Fast heart rate", "Fast breathing", "No breathing"], answer: "Slow heart rate", explanation: "Slow heart rate is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Prefixes change the meaning at the beginning of medical terms." },
  { id: "medterm-024", category: "Prefixes", question: "What does dys- mean?", options: ["Difficult, painful, or abnormal", "Without", "Above", "Two"], answer: "Difficult, painful, or abnormal", explanation: "Difficult, painful, or abnormal is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Prefixes change the meaning at the beginning of medical terms." },
  { id: "medterm-025", category: "Prefixes", question: "Dysphagia means difficulty with:", options: ["Speaking", "Swallowing/eating", "Breathing", "Walking"], answer: "Swallowing/eating", explanation: "Swallowing/eating is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Prefixes change the meaning at the beginning of medical terms." },
  { id: "medterm-026", category: "Prefixes", question: "Dysphasia means difficulty with:", options: ["Speaking", "Swallowing", "Urinating", "Hearing"], answer: "Speaking", explanation: "Speaking is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Prefixes change the meaning at the beginning of medical terms." },
  { id: "medterm-027", category: "Prefixes", question: "What does hyper- mean?", options: ["Low", "High/excessive", "Around", "Under"], answer: "High/excessive", explanation: "High/excessive is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Prefixes change the meaning at the beginning of medical terms." },
  { id: "medterm-028", category: "Prefixes", question: "Hypertension means:", options: ["Low blood pressure", "High blood pressure", "No blood pressure", "Normal blood pressure"], answer: "High blood pressure", explanation: "High blood pressure is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Prefixes change the meaning at the beginning of medical terms." },
  { id: "medterm-029", category: "Prefixes", question: "What does hypo- mean?", options: ["High", "Low/below normal", "Around", "Between"], answer: "Low/below normal", explanation: "Low/below normal is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Prefixes change the meaning at the beginning of medical terms." },
  { id: "medterm-030", category: "Prefixes", question: "Hypoglycemia means:", options: ["High blood sugar", "Low blood sugar", "High blood pressure", "Low oxygen"], answer: "Low blood sugar", explanation: "Low blood sugar is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Prefixes change the meaning at the beginning of medical terms." },
  { id: "medterm-031", category: "Prefixes", question: "What does peri- mean?", options: ["Around", "Within", "Below", "Between"], answer: "Around", explanation: "Around is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Prefixes change the meaning at the beginning of medical terms." },
  { id: "medterm-032", category: "Prefixes", question: "What does intra- mean?", options: ["Outside", "Within", "Under", "Against"], answer: "Within", explanation: "Within is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Prefixes change the meaning at the beginning of medical terms." },
  { id: "medterm-033", category: "Prefixes", question: "What does inter- mean?", options: ["Within", "Between", "Below", "Above"], answer: "Between", explanation: "Between is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Prefixes change the meaning at the beginning of medical terms." },
  { id: "medterm-034", category: "Prefixes", question: "What does sub- mean?", options: ["Above", "Under/below", "Fast", "Many"], answer: "Under/below", explanation: "Under/below is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Prefixes change the meaning at the beginning of medical terms." },
  { id: "medterm-035", category: "Prefixes", question: "What does contra- mean?", options: ["Against", "Many", "Slow", "Before"], answer: "Against", explanation: "Against is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Prefixes change the meaning at the beginning of medical terms." },
  { id: "medterm-036", category: "Suffixes", question: "What does -itis mean?", options: ["Inflammation", "Removal", "Pain", "Study of"], answer: "Inflammation", explanation: "Inflammation is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Suffixes often describe conditions, procedures, or symptoms." },
  { id: "medterm-037", category: "Suffixes", question: "Arthritis means inflammation of the:", options: ["Skin", "Joint", "Liver", "Lung"], answer: "Joint", explanation: "Joint is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Suffixes often describe conditions, procedures, or symptoms." },
  { id: "medterm-038", category: "Suffixes", question: "What does -ology mean?", options: ["Pain", "Study of", "Disease", "Blood condition"], answer: "Study of", explanation: "Study of is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Suffixes often describe conditions, procedures, or symptoms." },
  { id: "medterm-039", category: "Suffixes", question: "Cardiology means the study of the:", options: ["Lungs", "Heart", "Bones", "Brain"], answer: "Heart", explanation: "Heart is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Suffixes often describe conditions, procedures, or symptoms." },
  { id: "medterm-040", category: "Suffixes", question: "What does -ologist mean?", options: ["Specialist", "Inflammation", "Pain", "Swelling"], answer: "Specialist", explanation: "Specialist is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Suffixes often describe conditions, procedures, or symptoms." },
  { id: "medterm-041", category: "Suffixes", question: "What does -ectomy mean?", options: ["Surgical removal", "Inflammation", "Disease", "Below normal"], answer: "Surgical removal", explanation: "Surgical removal is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Suffixes often describe conditions, procedures, or symptoms." },
  { id: "medterm-042", category: "Suffixes", question: "What does -algia mean?", options: ["Pain", "Study", "Blood", "Breathing"], answer: "Pain", explanation: "Pain is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Suffixes often describe conditions, procedures, or symptoms." },
  { id: "medterm-043", category: "Suffixes", question: "Neuralgia means:", options: ["Nerve pain", "Bone swelling", "Lung inflammation", "Blood loss"], answer: "Nerve pain", explanation: "Nerve pain is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Suffixes often describe conditions, procedures, or symptoms." },
  { id: "medterm-044", category: "Suffixes", question: "What does -emia mean?", options: ["Blood condition", "Bone pain", "Breathing pattern", "Joint motion"], answer: "Blood condition", explanation: "Blood condition is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Suffixes often describe conditions, procedures, or symptoms." },
  { id: "medterm-045", category: "Suffixes", question: "What does -pnea mean?", options: ["Breathing", "Heart", "Pain", "Blood"], answer: "Breathing", explanation: "Breathing is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Suffixes often describe conditions, procedures, or symptoms." },
  { id: "medterm-046", category: "Suffixes", question: "What does -megaly mean?", options: ["Enlargement", "Removal", "Speaking", "Swallowing"], answer: "Enlargement", explanation: "Enlargement is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Suffixes often describe conditions, procedures, or symptoms." },
  { id: "medterm-047", category: "Suffixes", question: "Hepatomegaly means enlargement of the:", options: ["Heart", "Liver", "Lung", "Joint"], answer: "Liver", explanation: "Liver is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Suffixes often describe conditions, procedures, or symptoms." },
  { id: "medterm-048", category: "Suffixes", question: "What does -phagia mean?", options: ["Speaking", "Eating/swallowing", "Breathing", "Bleeding"], answer: "Eating/swallowing", explanation: "Eating/swallowing is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Suffixes often describe conditions, procedures, or symptoms." },
  { id: "medterm-049", category: "Suffixes", question: "What does -phasia mean?", options: ["Speaking", "Eating/swallowing", "Breathing", "Pain"], answer: "Speaking", explanation: "Speaking is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Suffixes often describe conditions, procedures, or symptoms." },
  { id: "medterm-050", category: "Suffixes", question: "What does -rrhage mean?", options: ["Bursting forth/bleeding", "Study of", "Inflammation", "Slow movement"], answer: "Bursting forth/bleeding", explanation: "Bursting forth/bleeding is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Suffixes often describe conditions, procedures, or symptoms." },
  { id: "medterm-051", category: "Directional Terms", question: "Superior means:", options: ["Toward the feet", "Toward the head/above", "Away from midline", "Near the surface"], answer: "Toward the head/above", explanation: "Toward the head/above is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Directional language helps EMTs document location accurately." },
  { id: "medterm-052", category: "Directional Terms", question: "Inferior means:", options: ["Toward the feet/below", "Toward the head", "Toward midline", "Back side"], answer: "Toward the feet/below", explanation: "Toward the feet/below is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Directional language helps EMTs document location accurately." },
  { id: "medterm-053", category: "Directional Terms", question: "Anterior means:", options: ["Back", "Front", "Toward midline", "Farther from attachment"], answer: "Front", explanation: "Front is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Directional language helps EMTs document location accurately." },
  { id: "medterm-054", category: "Directional Terms", question: "Posterior means:", options: ["Front", "Back", "Above", "Below"], answer: "Back", explanation: "Back is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Directional language helps EMTs document location accurately." },
  { id: "medterm-055", category: "Directional Terms", question: "Medial means:", options: ["Away from midline", "Toward midline", "Farther from trunk", "Near surface"], answer: "Toward midline", explanation: "Toward midline is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Directional language helps EMTs document location accurately." },
  { id: "medterm-056", category: "Directional Terms", question: "Lateral means:", options: ["Away from midline", "Toward midline", "Above", "Below"], answer: "Away from midline", explanation: "Away from midline is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Directional language helps EMTs document location accurately." },
  { id: "medterm-057", category: "Directional Terms", question: "Proximal means:", options: ["Farther from trunk", "Closer to trunk or point of attachment", "Near surface", "Front side"], answer: "Closer to trunk or point of attachment", explanation: "Closer to trunk or point of attachment is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Directional language helps EMTs document location accurately." },
  { id: "medterm-058", category: "Directional Terms", question: "Distal means:", options: ["Farther from trunk or point of attachment", "Closer to trunk", "Back side", "Toward head"], answer: "Farther from trunk or point of attachment", explanation: "Farther from trunk or point of attachment is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Directional language helps EMTs document location accurately." },
  { id: "medterm-059", category: "Directional Terms", question: "Superficial means:", options: ["Deep inside", "Near the surface", "Toward feet", "Toward midline"], answer: "Near the surface", explanation: "Near the surface is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Directional language helps EMTs document location accurately." },
  { id: "medterm-060", category: "Directional Terms", question: "Deep means:", options: ["Near the surface", "Farther inside the body", "Toward the head", "Away from midline"], answer: "Farther inside the body", explanation: "Farther inside the body is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Directional language helps EMTs document location accurately." },
  { id: "medterm-061", category: "Directional Terms", question: "Palmar refers to the:", options: ["Sole of foot", "Palm of hand", "Back of head", "Chest"], answer: "Palm of hand", explanation: "Palm of hand is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Directional language helps EMTs document location accurately." },
  { id: "medterm-062", category: "Directional Terms", question: "Plantar refers to the:", options: ["Palm of hand", "Sole of foot", "Neck", "Shoulder"], answer: "Sole of foot", explanation: "Sole of foot is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Directional language helps EMTs document location accurately." },
  { id: "medterm-063", category: "Position Terms", question: "Supine means the patient is:", options: ["Lying face up", "Lying face down", "Sitting upright", "Standing"], answer: "Lying face up", explanation: "Lying face up is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Position terms describe how a patient is found or placed." },
  { id: "medterm-064", category: "Position Terms", question: "Prone means the patient is:", options: ["Lying face up", "Lying face down", "Sitting upright", "On the left side only"], answer: "Lying face down", explanation: "Lying face down is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Position terms describe how a patient is found or placed." },
  { id: "medterm-065", category: "Position Terms", question: "Fowler position means the patient is generally:", options: ["Sitting or semi-sitting", "Face down", "Flat on stomach", "Upside down"], answer: "Sitting or semi-sitting", explanation: "Sitting or semi-sitting is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Position terms describe how a patient is found or placed." },
  { id: "medterm-066", category: "Abbreviations", question: "CPR stands for:", options: ["Cardiac pressure rhythm", "Cardiopulmonary resuscitation", "Chest pulse response", "Circulation pressure rate"], answer: "Cardiopulmonary resuscitation", explanation: "Cardiopulmonary resuscitation is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Common EMS abbreviations appear in reports, charts, and handoffs." },
  { id: "medterm-067", category: "Abbreviations", question: "EMT stands for:", options: ["Emergency Medical Technician", "External Medical Transfer", "Emergency Muscle Test", "Early Medicine Transport"], answer: "Emergency Medical Technician", explanation: "Emergency Medical Technician is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Common EMS abbreviations appear in reports, charts, and handoffs." },
  { id: "medterm-068", category: "Abbreviations", question: "ALS stands for:", options: ["Advanced Life Support", "Airway Lung System", "Assisted Low Shock", "Acute Lung Sign"], answer: "Advanced Life Support", explanation: "Advanced Life Support is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Common EMS abbreviations appear in reports, charts, and handoffs." },
  { id: "medterm-069", category: "Abbreviations", question: "BLS stands for:", options: ["Basic Life Support", "Blood Level Screen", "Breathing Lung System", "Basic Liver Support"], answer: "Basic Life Support", explanation: "Basic Life Support is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Common EMS abbreviations appear in reports, charts, and handoffs." },
  { id: "medterm-070", category: "Abbreviations", question: "LOC commonly means:", options: ["Level/loss of consciousness", "Left oxygen count", "Lower organ check", "Lung opening control"], answer: "Level/loss of consciousness", explanation: "Level/loss of consciousness is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Common EMS abbreviations appear in reports, charts, and handoffs." },
  { id: "medterm-071", category: "Abbreviations", question: "SOB commonly means:", options: ["Shortness of breath", "Side of body", "Signs of bleeding", "Shock over baseline"], answer: "Shortness of breath", explanation: "Shortness of breath is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Common EMS abbreviations appear in reports, charts, and handoffs." },
  { id: "medterm-072", category: "Abbreviations", question: "BP stands for:", options: ["Breathing pattern", "Blood pressure", "Blood plasma", "Body position"], answer: "Blood pressure", explanation: "Blood pressure is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Common EMS abbreviations appear in reports, charts, and handoffs." },
  { id: "medterm-073", category: "Abbreviations", question: "HR stands for:", options: ["Heart rate", "Head rotation", "Heat response", "Hospital report"], answer: "Heart rate", explanation: "Heart rate is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Common EMS abbreviations appear in reports, charts, and handoffs." },
  { id: "medterm-074", category: "Abbreviations", question: "RR stands for:", options: ["Respiratory rate", "Rapid response only", "Right radius", "Recovery room only"], answer: "Respiratory rate", explanation: "Respiratory rate is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Common EMS abbreviations appear in reports, charts, and handoffs." },
  { id: "medterm-075", category: "Abbreviations", question: "SpO2 refers to:", options: ["Oxygen saturation measured by pulse oximetry", "Blood pressure", "Blood glucose", "Heart rhythm"], answer: "Oxygen saturation measured by pulse oximetry", explanation: "Oxygen saturation measured by pulse oximetry is the correct meaning or expansion for this EMT medical terminology item.", learningPoint: "Common EMS abbreviations appear in reports, charts, and handoffs." }
];

const medicalTerminologyFlashcards = [
  { term: "Word root", definition: "The foundation/main meaning of a medical term.", category: "Word Parts" },
  { term: "Prefix", definition: "Word part placed before the root.", category: "Word Parts" },
  { term: "Suffix", definition: "Word part placed after the root.", category: "Word Parts" },
  { term: "Combining vowel", definition: "Vowel that connects word parts, usually \"o.\"", category: "Word Parts" },
  { term: "Combining form", definition: "Word root plus combining vowel, like cardi/o.", category: "Word Parts" },
  { term: "cardi/o", definition: "Heart.", category: "Combining Forms" },
  { term: "pulmon/o", definition: "Lung.", category: "Combining Forms" },
  { term: "gastr/o", definition: "Stomach.", category: "Combining Forms" },
  { term: "enter/o", definition: "Intestine.", category: "Combining Forms" },
  { term: "hepat/o", definition: "Liver.", category: "Combining Forms" },
  { term: "arthr/o", definition: "Joint.", category: "Combining Forms" },
  { term: "oste/o", definition: "Bone.", category: "Combining Forms" },
  { term: "neur/o", definition: "Nerve.", category: "Combining Forms" },
  { term: "derm/o", definition: "Skin.", category: "Combining Forms" },
  { term: "hemat/o", definition: "Blood.", category: "Combining Forms" },
  { term: "thorac/o", definition: "Chest.", category: "Combining Forms" },
  { term: "cephal/o", definition: "Head.", category: "Combining Forms" },
  { term: "cyan/o", definition: "Blue.", category: "Combining Forms" },
  { term: "erythr/o", definition: "Red.", category: "Combining Forms" },
  { term: "leuk/o", definition: "White.", category: "Combining Forms" },
  { term: "a- / an-", definition: "Without or absence of.", category: "Prefixes" },
  { term: "brady-", definition: "Slow.", category: "Prefixes" },
  { term: "tachy-", definition: "Fast.", category: "Prefixes" },
  { term: "dys-", definition: "Difficult, painful, or abnormal.", category: "Prefixes" },
  { term: "hyper-", definition: "High or excessive.", category: "Prefixes" },
  { term: "hypo-", definition: "Low or below normal.", category: "Prefixes" },
  { term: "peri-", definition: "Around.", category: "Prefixes" },
  { term: "intra-", definition: "Within.", category: "Prefixes" },
  { term: "inter-", definition: "Between.", category: "Prefixes" },
  { term: "sub-", definition: "Under or below.", category: "Prefixes" },
  { term: "-itis", definition: "Inflammation.", category: "Suffixes" },
  { term: "-ology", definition: "Study of.", category: "Suffixes" },
  { term: "-ologist", definition: "Specialist.", category: "Suffixes" },
  { term: "-ectomy", definition: "Surgical removal.", category: "Suffixes" },
  { term: "-algia", definition: "Pain.", category: "Suffixes" },
  { term: "-emia", definition: "Blood condition.", category: "Suffixes" },
  { term: "-pnea", definition: "Breathing.", category: "Suffixes" },
  { term: "-phagia", definition: "Eating or swallowing.", category: "Suffixes" },
  { term: "-phasia", definition: "Speaking.", category: "Suffixes" },
  { term: "-megaly", definition: "Enlargement.", category: "Suffixes" },
  { term: "apnea", definition: "Absence of breathing.", category: "Respiratory Terms" },
  { term: "bradypnea", definition: "Slow breathing.", category: "Respiratory Terms" },
  { term: "tachypnea", definition: "Fast breathing.", category: "Respiratory Terms" },
  { term: "tachycardia", definition: "Fast heart rate.", category: "Respiratory Terms" },
  { term: "bradycardia", definition: "Slow heart rate.", category: "Respiratory Terms" },
  { term: "dysphagia", definition: "Difficulty swallowing.", category: "Respiratory Terms" },
  { term: "dysphasia", definition: "Difficulty speaking.", category: "Respiratory Terms" },
  { term: "hypertension", definition: "High blood pressure.", category: "Cardiovascular Terms" },
  { term: "hypoglycemia", definition: "Low blood sugar.", category: "Assessment Terms" },
  { term: "cardiopulmonary", definition: "Related to the heart and lungs.", category: "Cardiovascular Terms" }
];

const situationalScenarios = [
  {
    id: "ch6-001",
    chapter: "Chapter 6",
    category: "Breathing",
    scenario: "You respond to a patient who is breathing fast after smoke exposure. He is moving air in and out, but his skin is cyanotic and his oxygen level is low.",
    question: "What concept best explains the problem?",
    options: ["Ventilation only", "Respiration/gas exchange problem", "Digestive failure", "Urinary failure"],
    answer: "Respiration/gas exchange problem",
    explanation: "Ventilation is air movement. Respiration is gas exchange. A patient can move air but still have poor oxygen exchange.",
    learningPoint: "Chapter 6 separates ventilation from respiration; both matter for oxygen delivery. The PDF describes respiratory compromise as impaired ventilation, impaired respiration, or both."
  },
  {
    id: "ch6-002",
    chapter: "Chapter 6",
    category: "Airway",
    scenario: "An unconscious patient is lying supine after collapsing. You hear snoring respirations.",
    question: "What is the most likely cause of the airway obstruction?",
    options: ["The tongue relaxing backward", "A pulmonary embolism", "A heart valve problem", "A kidney problem"],
    answer: "The tongue relaxing backward",
    explanation: "In an unconscious patient, the relaxed tongue can obstruct the airway.",
    learningPoint: "Unconscious patients often need airway positioning first."
  },
  {
    id: "ch6-003",
    chapter: "Chapter 6",
    category: "Circulation",
    scenario: "A patient is pale, weak, confused, and has a weak rapid pulse after vomiting and diarrhea for two days.",
    question: "What body process is most likely failing?",
    options: ["Perfusion", "Digestion only", "Bone growth", "Skin production"],
    answer: "Perfusion",
    explanation: "Perfusion is blood flow through tissues to deliver oxygen and remove waste. Dehydration can reduce circulating volume and cause poor perfusion.",
    learningPoint: "Poor perfusion can show up as altered mental status, weak pulse, and pale/cool skin."
  },
  {
    id: "ch6-004",
    chapter: "Chapter 6",
    category: "Circulation",
    scenario: "A patient has chest pressure and becomes pale, cool, and sweaty. You suspect the heart is not supplying enough oxygenated blood to the body.",
    question: "Which system is most directly failing?",
    options: ["Cardiovascular system", "Skeletal system", "Integumentary system only", "Reproductive system"],
    answer: "Cardiovascular system",
    explanation: "The cardiovascular system circulates blood and maintains perfusion.",
    learningPoint: "Heart problems can become perfusion problems."
  },
  {
    id: "ch6-005",
    chapter: "Chapter 6",
    category: "Breathing",
    scenario: "A patient overdosed on a depressant drug. He is breathing 6 times/min and shallow.",
    question: "What is the main issue?",
    options: ["Impaired ventilation", "Excessive digestion", "Increased kidney filtration", "Normal breathing"],
    answer: "Impaired ventilation",
    explanation: "Slow shallow respirations mean poor movement of air.",
    learningPoint: "Ventilatory failure can be caused by low level of consciousness or CNS depression."
  },
  {
    id: "ch6-006",
    chapter: "Chapter 6",
    category: "Anatomy/Physiology",
    scenario: "A patient is trapped in a poorly ventilated industrial room and becomes confused and cyanotic.",
    question: "Why can this become dangerous quickly?",
    options: ["The body has a limited oxygen reserve", "The digestive system shuts off instantly", "The skin cannot sweat", "The bones stop making cells"],
    answer: "The body has a limited oxygen reserve",
    explanation: "Chapter 6 notes the oxygen difference between inhaled and exhaled air is not huge, so oxygen-poor environments are dangerous.",
    learningPoint: "Scene safety and oxygen availability matter."
  },
  {
    id: "ch9-001",
    chapter: "Chapter 9",
    category: "Scene Size-Up",
    scenario: "You arrive at a crash scene with leaking fuel and downed power lines near the vehicle. The patient is yelling for help.",
    question: "What should you do first?",
    options: ["Run to the patient immediately", "Ensure scene safety and request needed resources", "Begin SAMPLE history", "Apply oxygen without checking hazards"],
    answer: "Ensure scene safety and request needed resources",
    explanation: "EMTs should not enter unsafe scenes.",
    learningPoint: "Scene safety comes before patient contact."
  },
  {
    id: "ch9-002",
    chapter: "Chapter 9",
    category: "Primary Assessment",
    scenario: "A patient is responsive to pain, has vomit in the mouth, and is breathing slowly with gurgling sounds.",
    question: "What requires immediate attention?",
    options: ["Obtain full SAMPLE history", "Clear and manage the airway", "Check insurance information", "Ask about last oral intake first"],
    answer: "Clear and manage the airway",
    explanation: "Airway obstruction and inadequate breathing are immediate life threats.",
    learningPoint: "ABC life threats are fixed during the primary assessment."
  },
  {
    id: "ch9-003",
    chapter: "Chapter 9",
    category: "Primary Assessment",
    scenario: "A patient opens his eyes only when you apply a painful stimulus.",
    question: "What is his AVPU level?",
    options: ["Alert", "Verbal", "Pain", "Unresponsive"],
    answer: "Pain",
    explanation: "Responding only to painful stimulus equals P on AVPU.",
    learningPoint: "AVPU quickly communicates level of consciousness."
  },
  {
    id: "ch9-004",
    chapter: "Chapter 9",
    category: "Assessment",
    scenario: "A patient with chest discomfort tells you he is allergic to aspirin and takes blood thinners.",
    question: "Which assessment tool does this information belong to?",
    options: ["DCAP-BTLS", "SAMPLE", "Glasgow Coma Scale only", "APGAR"],
    answer: "SAMPLE",
    explanation: "Allergies and medications are part of SAMPLE.",
    learningPoint: "SAMPLE can change treatment decisions."
  },
  {
    id: "ch9-005",
    chapter: "Chapter 9",
    category: "Assessment",
    scenario: "A patient says his chest pressure started while mowing the lawn, radiates to his left arm, and is 8/10.",
    question: "Which tool best organizes this pain assessment?",
    options: ["OPQRST", "DCAP-BTLS", "START triage", "APGAR"],
    answer: "OPQRST",
    explanation: "OPQRST organizes onset, provocation, quality, radiation, severity, and time.",
    learningPoint: "OPQRST is especially useful for chest pain and dyspnea."
  },
  {
    id: "ch9-006",
    chapter: "Chapter 9",
    category: "Reassessment",
    scenario: "A patient with respiratory distress is unstable and being transported.",
    question: "How often should you reassess?",
    options: ["Every 30 minutes", "Every 20 minutes", "Every 15 minutes", "Every 5 minutes"],
    answer: "Every 5 minutes",
    explanation: "Unstable patients are reassessed every 5 minutes.",
    learningPoint: "Stable = about 15 minutes; unstable = about 5 minutes."
  },
  {
    id: "ch10-001",
    chapter: "Chapter 10",
    category: "Airway",
    scenario: "A patient was found unconscious after falling down stairs. He has snoring respirations.",
    question: "Which airway maneuver should you try first?",
    options: ["Head tilt–chin lift", "Jaw-thrust maneuver", "Heimlich maneuver", "Recovery position only"],
    answer: "Jaw-thrust maneuver",
    explanation: "Suspected trauma means use jaw-thrust first to open the airway while limiting spinal movement.",
    learningPoint: "Trauma + airway problem = jaw thrust first."
  },
  {
    id: "ch10-002",
    chapter: "Chapter 10",
    category: "Airway",
    scenario: "A patient fainted while sitting at a table. There is no trauma concern. He is unconscious with snoring respirations.",
    question: "Which maneuver is appropriate?",
    options: ["Head tilt–chin lift", "Chest compressions immediately", "Splint the neck only", "Do not touch the airway"],
    answer: "Head tilt–chin lift",
    explanation: "If no trauma is suspected, head tilt–chin lift can open the airway.",
    learningPoint: "Match the airway maneuver to trauma suspicion."
  },
  {
    id: "ch10-003",
    chapter: "Chapter 10",
    category: "Airway",
    scenario: "A patient has vomit and blood in the mouth with gurgling respirations.",
    question: "What should you do?",
    options: ["Insert an OPA without suctioning", "Suction the airway", "Give oral glucose", "Ask OPQRST first"],
    answer: "Suction the airway",
    explanation: "Fluids in the airway must be cleared.",
    learningPoint: "Gurgling = fluid; suction is needed."
  },
  {
    id: "ch10-004",
    chapter: "Chapter 10",
    category: "Breathing",
    scenario: "A patient is breathing 5 times/min with shallow chest rise.",
    question: "What is the best intervention?",
    options: ["Nasal cannula only", "Positive pressure ventilation with BVM", "Ask the patient to walk", "Give aspirin"],
    answer: "Positive pressure ventilation with BVM",
    explanation: "Breathing that is too slow and shallow is inadequate; assist ventilations.",
    learningPoint: "Oxygen alone does not fix inadequate ventilation."
  },
  {
    id: "ch10-005",
    chapter: "Chapter 10",
    category: "Breathing",
    scenario: "A patient is breathing adequately but has an SpO₂ of 88%.",
    question: "What should you provide?",
    options: ["Supplemental oxygen", "No treatment", "Immediate chest compressions", "Oral fluids"],
    answer: "Supplemental oxygen",
    explanation: "Adequate breathing with hypoxia calls for oxygen.",
    learningPoint: "Adequate breathing + hypoxia = oxygen; inadequate breathing = ventilate."
  },
  {
    id: "ch10-006",
    chapter: "Chapter 10",
    category: "Airway",
    scenario: "An unresponsive patient has no gag reflex after you open and suction the airway.",
    question: "Which adjunct is commonly appropriate?",
    options: ["Oropharyngeal airway", "Oral glucose tube", "Tourniquet", "AED pads only"],
    answer: "Oropharyngeal airway",
    explanation: "An OPA can help maintain airway patency in an unresponsive patient without a gag reflex.",
    learningPoint: "OPA = unresponsive/no gag; NPA may be used when gag is present if no contraindication."
  },
  {
    id: "ch12-001",
    chapter: "Chapter 12",
    category: "Shock",
    scenario: "A trauma patient is anxious, pale, cool, clammy, breathing fast, and has a rapid weak pulse. BP is still normal.",
    question: "What should you suspect?",
    options: ["No shock because BP is normal", "Compensated shock", "Irreversible shock only", "Psychogenic shock only"],
    answer: "Compensated shock",
    explanation: "Normal BP does not rule out shock. Early shock may still have maintained BP.",
    learningPoint: "Low BP is usually late."
  },
  {
    id: "ch12-002",
    chapter: "Chapter 12",
    category: "Shock",
    scenario: "A patient has heavy bleeding from a leg wound, pale clammy skin, and a weak rapid pulse.",
    question: "What type of shock is most likely?",
    options: ["Hypovolemic shock", "Neurogenic shock", "Septic shock", "Psychogenic shock"],
    answer: "Hypovolemic shock",
    explanation: "Blood loss reduces circulating volume.",
    learningPoint: "Content failure = hypovolemic shock."
  },
  {
    id: "ch12-003",
    chapter: "Chapter 12",
    category: "Shock",
    scenario: "A patient fell from a roof. He has possible spinal injury, low BP, warm dry skin, and a normal/slow pulse.",
    question: "What type of shock should you suspect?",
    options: ["Hemorrhagic shock", "Neurogenic shock", "Anaphylactic shock", "Septic shock"],
    answer: "Neurogenic shock",
    explanation: "Neurogenic shock can cause loss of vascular tone with warm dry skin and slow/normal pulse.",
    learningPoint: "Warm dry skin in shock is a neurogenic clue."
  },
  {
    id: "ch12-004",
    chapter: "Chapter 12",
    category: "Shock",
    scenario: "A patient was stung by a bee and now has hives, wheezing, facial swelling, and dizziness.",
    question: "What type of shock is this?",
    options: ["Anaphylactic shock", "Cardiogenic shock", "Psychogenic shock", "Hypovolemic shock"],
    answer: "Anaphylactic shock",
    explanation: "Allergic reaction with airway/breathing/circulation signs suggests anaphylaxis.",
    learningPoint: "Anaphylaxis is a distributive shock with airway risk."
  },
  {
    id: "ch12-005",
    chapter: "Chapter 12",
    category: "Shock",
    scenario: "A patient with chest pain becomes pale, cool, clammy, confused, and has a weak pulse.",
    question: "What shock type is most likely?",
    options: ["Cardiogenic shock", "Hypovolemic shock from bleeding", "Psychogenic shock", "Neurogenic shock"],
    answer: "Cardiogenic shock",
    explanation: "Chest pain plus poor perfusion can indicate pump failure.",
    learningPoint: "Pump failure = cardiogenic shock."
  },
  {
    id: "ch12-006",
    chapter: "Chapter 12",
    category: "Transport Priority",
    scenario: "A patient is in suspected shock after trauma.",
    question: "Which is most appropriate?",
    options: ["Keep warm, manage ABCs, control bleeding, rapid transport", "Give food and water", "Delay transport for full history", "Let the patient walk to the ambulance"],
    answer: "Keep warm, manage ABCs, control bleeding, rapid transport",
    explanation: "Shock treatment focuses on ABCs, bleeding control, warmth, and transport.",
    learningPoint: "Treat life threats and move early."
  },
  {
    id: "ch15-001",
    chapter: "Chapter 15",
    category: "Respiratory Emergency",
    scenario: "A patient with asthma is sitting tripod, wheezing, and speaking in two-word phrases.",
    question: "What should you suspect?",
    options: ["Respiratory distress from bronchoconstriction", "Normal breathing", "Stroke only", "Hypoglycemia only"],
    answer: "Respiratory distress from bronchoconstriction",
    explanation: "Asthma narrows lower airways and causes wheezing/dyspnea.",
    learningPoint: "Wheezing + asthma history = bronchoconstriction until proven otherwise."
  },
  {
    id: "ch15-002",
    chapter: "Chapter 15",
    category: "Respiratory Emergency",
    scenario: "An older patient with a long smoking history has chronic shortness of breath and today is worse than normal.",
    question: "Which condition is likely part of the differential?",
    options: ["COPD exacerbation", "Isolated ankle sprain", "Kidney stone only", "Simple fainting only"],
    answer: "COPD exacerbation",
    explanation: "COPD is a common chronic respiratory disease that can worsen acutely.",
    learningPoint: "Compare today’s breathing to the patient’s baseline."
  },
  {
    id: "ch15-003",
    chapter: "Chapter 15",
    category: "Respiratory Emergency",
    scenario: "A patient is severely short of breath, cannot lie flat, has crackles, and coughs pink frothy sputum.",
    question: "What should you suspect?",
    options: ["Acute pulmonary edema", "Simple anxiety only", "Broken arm", "Isolated allergic rash"],
    answer: "Acute pulmonary edema",
    explanation: "Fluid in the lungs causes crackles and pink frothy sputum.",
    learningPoint: "Pulmonary edema often overlaps with cardiac emergencies."
  },
  {
    id: "ch15-004",
    chapter: "Chapter 15",
    category: "Respiratory Emergency",
    scenario: "A patient suddenly develops sharp chest pain, dyspnea, tachycardia, tachypnea, and coughs blood.",
    question: "What should be high on your suspicion list?",
    options: ["Pulmonary embolism", "Simple cold", "Food poisoning", "Minor anxiety only"],
    answer: "Pulmonary embolism",
    explanation: "PE can cause sudden dyspnea, chest pain, tachycardia, tachypnea, hypoxia, cyanosis, and hemoptysis.",
    learningPoint: "Sudden dyspnea + chest pain + hemoptysis is concerning."
  },
  {
    id: "ch15-005",
    chapter: "Chapter 15",
    category: "Respiratory Emergency",
    scenario: "A patient is breathing rapidly, has tingling in the hands, and is anxious. You are unsure if this is panic or a serious illness.",
    question: "What should you do?",
    options: ["Assume panic and refuse transport", "Coach breathing, provide oxygen if needed, and transport for evaluation", "Put a paper bag over the face", "Ignore the patient"],
    answer: "Coach breathing, provide oxygen if needed, and transport for evaluation",
    explanation: "The PDF warns that EMTs should not decide outside the hospital whether hyperventilation is panic or life-threatening illness.",
    learningPoint: "Hyperventilation can be anxiety or compensation for serious disease."
  },
  {
    id: "ch15-006",
    chapter: "Chapter 15",
    category: "Scene Size-Up",
    scenario: "Workers report chlorine gas exposure. The patient is coughing and short of breath but has not been decontaminated.",
    question: "What should happen before you take responsibility for the patient?",
    options: ["Decontamination by trained responders", "Immediate transport without precautions", "Remove PPE", "Give food and water"],
    answer: "Decontamination by trained responders",
    explanation: "Chemical exposure patients may need decontamination before EMT care/transport.",
    learningPoint: "Do not become a patient yourself."
  },
  {
    id: "ch16-001",
    chapter: "Chapter 16",
    category: "Cardiac Emergency",
    scenario: "A 58-year-old patient has crushing chest pressure radiating to the left arm, nausea, and sweating.",
    question: "What should you suspect?",
    options: ["Acute coronary syndrome", "Isolated muscle strain only", "Food poisoning only", "Simple anxiety only"],
    answer: "Acute coronary syndrome",
    explanation: "Chest pressure radiating to the arm with nausea and diaphoresis is suspicious for ACS/AMI.",
    learningPoint: "Treat nontraumatic chest discomfort as cardiac until ruled out."
  },
  {
    id: "ch16-002",
    chapter: "Chapter 16",
    category: "Cardiac Emergency",
    scenario: "A diabetic older adult denies chest pain but has sudden weakness, shortness of breath, nausea, and sweating.",
    question: "What should you consider?",
    options: ["Possible cardiac emergency", "No concern because there is no chest pain", "Only dehydration", "Only anxiety"],
    answer: "Possible cardiac emergency",
    explanation: "Some patients have atypical cardiac symptoms without classic chest pain.",
    learningPoint: "Diabetics, older adults, and women may present atypically."
  },
  {
    id: "ch16-003",
    chapter: "Chapter 16",
    category: "Medication Decision",
    scenario: "A patient with suspected ACS is alert and can chew. He says he is allergic to aspirin.",
    question: "What should you do?",
    options: ["Give aspirin anyway", "Do not give aspirin; document allergy and follow protocol", "Give double dose", "Delay transport until allergy disappears"],
    answer: "Do not give aspirin; document allergy and follow protocol",
    explanation: "Aspirin allergy is a contraindication.",
    learningPoint: "Always check allergies before medication assistance."
  },
  {
    id: "ch16-004",
    chapter: "Chapter 16",
    category: "Medication Decision",
    scenario: "A chest pain patient has prescribed nitroglycerin, but his systolic BP is low.",
    question: "What should you do?",
    options: ["Assist with nitro anyway", "Withhold nitro and follow protocol/medical direction", "Give two doses immediately", "Give nitro with water"],
    answer: "Withhold nitro and follow protocol/medical direction",
    explanation: "Nitro can drop BP further. Low systolic BP is a contraindication per protocol.",
    learningPoint: "Check BP before nitro."
  },
  {
    id: "ch16-005",
    chapter: "Chapter 16",
    category: "Medication Decision",
    scenario: "A patient with chest pain took sildenafil/Viagra earlier today and asks for nitroglycerin.",
    question: "What is the concern?",
    options: ["Dangerous hypotension", "High blood sugar", "Increased bone pain", "Fever"],
    answer: "Dangerous hypotension",
    explanation: "PDE-5 inhibitors can interact with nitro and cause severe hypotension.",
    learningPoint: "Ask about Viagra, Levitra, Cialis-type meds before nitro."
  },
  {
    id: "ch16-006",
    chapter: "Chapter 16",
    category: "Cardiac Emergency",
    scenario: "A patient has an LVAD. You cannot feel a radial pulse, but the patient is awake and talking.",
    question: "What should you remember?",
    options: ["LVAD patients may not have a normal palpable pulse", "The patient is automatically dead", "CPR is always required immediately", "Ignore the device"],
    answer: "LVAD patients may not have a normal palpable pulse",
    explanation: "LVAD patients may not have a normal pulse or normal BP reading.",
    learningPoint: "Assess mental status, breathing, skin, device alarms, and caregiver instructions."
  },
  {
    id: "mix-001",
    chapter: "Mixed Situational Scenarios",
    category: "Airway",
    scenario: "You arrive to find a young adult lying on the kitchen floor. He responds only to pain. There is vomit and blood in his mouth. Breathing is slow, shallow, and gurgling. Pulse is weak.",
    question: "What is your first priority?",
    options: ["Obtain SAMPLE history", "Suction and manage the airway", "Check blood pressure first", "Ask OPQRST"],
    answer: "Suction and manage the airway",
    explanation: "Gurgling respirations and vomit/blood indicate an airway life threat.",
    learningPoint: "Airway comes before history. The PDF example describes blood/vomit, slow shallow gurgling breathing, and asks what requires the most immediate attention."
  },
  {
    id: "mix-002",
    chapter: "Mixed Situational Scenarios",
    category: "Medication Decision",
    scenario: "A 62-year-old man has chest pressure and prescribed nitro. BP is 88/54. He is pale and sweaty.",
    question: "What is the best action?",
    options: ["Assist with nitro", "Withhold nitro, treat for shock, and transport", "Have him walk to the ambulance", "Give food and water"],
    answer: "Withhold nitro, treat for shock, and transport",
    explanation: "Nitro can worsen hypotension. He also has signs of poor perfusion.",
    learningPoint: "Low BP changes the medication decision."
  },
  {
    id: "mix-003",
    chapter: "Mixed Situational Scenarios",
    category: "Breathing",
    scenario: "A patient with asthma is wheezing. At first he was breathing fast, but now he is becoming tired, quieter, and confused.",
    question: "What does this suggest?",
    options: ["Improvement", "Respiratory failure may be developing", "Normal anxiety", "No treatment needed"],
    answer: "Respiratory failure may be developing",
    explanation: "A decreasing level of consciousness and fatigue in asthma are dangerous signs.",
    learningPoint: "Quieting down is not always improvement."
  },
  {
    id: "mix-004",
    chapter: "Mixed Situational Scenarios",
    category: "Circulation",
    scenario: "A patient was stabbed in the thigh. Blood is soaking through clothing. Skin is pale, cool, and clammy. Pulse is rapid and weak.",
    question: "What should you do first?",
    options: ["Control major bleeding", "Ask last oral intake", "Do a full secondary assessment", "Call the hospital before touching the patient"],
    answer: "Control major bleeding",
    explanation: "Severe bleeding is a circulation life threat.",
    learningPoint: "Massive bleeding must be controlled early."
  },
  {
    id: "mix-005",
    chapter: "Mixed Situational Scenarios",
    category: "Respiratory Emergency",
    scenario: "A 70-year-old patient is sitting upright, very short of breath, with crackles and pink frothy sputum.",
    question: "What condition fits best?",
    options: ["Pulmonary edema/CHF", "Simple asthma only", "Hypoglycemia", "Ankle fracture"],
    answer: "Pulmonary edema/CHF",
    explanation: "Crackles and pink frothy sputum suggest fluid in the lungs.",
    learningPoint: "Not all dyspnea is asthma."
  },
  {
    id: "mix-006",
    chapter: "Mixed Situational Scenarios",
    category: "Respiratory Emergency",
    scenario: "A college student is breathing rapidly with tingling fingers after a stressful event. You are not sure if it is panic or a medical problem.",
    question: "What is the safest EMT approach?",
    options: ["Assume panic and leave", "Coach breathing, assess fully, oxygen if needed, transport/evaluate", "Put a paper bag over the mouth", "Tell the patient to stop breathing fast"],
    answer: "Coach breathing, assess fully, oxygen if needed, transport/evaluate",
    explanation: "Hyperventilation can be anxiety or compensation for serious illness.",
    learningPoint: "Do not diagnose panic in the field too quickly."
  },
  {
    id: "mix-007",
    chapter: "Mixed Situational Scenarios",
    category: "Shock",
    scenario: "A football player has neck pain after a hit. BP is low, pulse is 58, and skin is warm and dry.",
    question: "What shock type is most likely?",
    options: ["Neurogenic shock", "Hemorrhagic shock", "Septic shock", "Psychogenic shock"],
    answer: "Neurogenic shock",
    explanation: "Spinal injury plus hypotension, bradycardia/normal pulse, and warm dry skin suggests neurogenic shock.",
    learningPoint: "Most shock is cool/clammy; neurogenic can be warm/dry."
  },
  {
    id: "mix-008",
    chapter: "Mixed Situational Scenarios",
    category: "Airway",
    scenario: "An unconscious patient fell from a ladder. He has snoring respirations.",
    question: "Which airway maneuver should you attempt first?",
    options: ["Jaw thrust", "Head tilt–chin lift", "Abdominal thrusts", "Finger sweep blindly"],
    answer: "Jaw thrust",
    explanation: "Possible spinal injury means jaw thrust first.",
    learningPoint: "Trauma changes airway technique."
  },
  {
    id: "mix-009",
    chapter: "Mixed Situational Scenarios",
    category: "Reassessment",
    scenario: "You are transporting a patient with severe dyspnea. He is unstable.",
    question: "How often should you reassess?",
    options: ["Every 5 minutes", "Every 15 minutes", "Every 30 minutes", "Only once at the hospital"],
    answer: "Every 5 minutes",
    explanation: "Unstable patients should be reassessed about every 5 minutes.",
    learningPoint: "Reassessment catches deterioration."
  },
  {
    id: "mix-010",
    chapter: "Mixed Situational Scenarios",
    category: "Respiratory Emergency",
    scenario: "A patient suddenly develops sharp chest pain, shortness of breath, tachycardia, and coughs blood.",
    question: "Which condition is a major concern?",
    options: ["Pulmonary embolism", "Simple cold", "Ear infection", "Minor sprain"],
    answer: "Pulmonary embolism",
    explanation: "PE can present with dyspnea, tachycardia, tachypnea, hypoxia, cyanosis, chest pain, and hemoptysis.",
    learningPoint: "Sudden dyspnea + chest pain + hemoptysis is high-risk."
  },
  {
    id: "mix-011",
    chapter: "Mixed Situational Scenarios",
    category: "Cardiac Emergency",
    scenario: "A 68-year-old woman feels weak, nauseated, short of breath, and sweaty. She denies chest pain.",
    question: "What should you consider?",
    options: ["Possible ACS/AMI", "No concern because no chest pain", "Only anxiety", "Only muscle strain"],
    answer: "Possible ACS/AMI",
    explanation: "Cardiac emergencies can present atypically.",
    learningPoint: "Absence of chest pain does not rule out a heart problem."
  },
  {
    id: "mix-012",
    chapter: "Mixed Situational Scenarios",
    category: "Breathing",
    scenario: "A patient has shallow respirations at 6/min after taking an unknown medication.",
    question: "What is the best treatment?",
    options: ["BVM ventilations", "Nasal cannula only", "Aspirin", "Ask OPQRST first"],
    answer: "BVM ventilations",
    explanation: "Breathing is too slow and shallow, so ventilation must be assisted.",
    learningPoint: "Inadequate breathing requires ventilations, not just oxygen."
  },
  {
    id: "mix-013",
    chapter: "Mixed Situational Scenarios",
    category: "Shock",
    scenario: "A patient ate peanuts and now has hives, swelling lips, wheezing, and dizziness.",
    question: "What is the most appropriate category?",
    options: ["Anaphylactic shock", "Cardiogenic shock", "Simple rash only", "Hyperventilation syndrome only"],
    answer: "Anaphylactic shock",
    explanation: "Skin, airway, breathing, and circulation symptoms after allergen exposure indicate anaphylaxis.",
    learningPoint: "Anaphylaxis is a life-threatening allergic reaction."
  },
  {
    id: "mix-014",
    chapter: "Mixed Situational Scenarios",
    category: "Transport Priority",
    scenario: "A CHF patient is gasping, anxious, and says he cannot breathe lying down.",
    question: "What position is usually best if tolerated?",
    options: ["Sitting upright", "Flat supine", "Prone", "Standing and walking"],
    answer: "Sitting upright",
    explanation: "Upright positioning can ease breathing in pulmonary edema/CHF.",
    learningPoint: "Position of comfort matters in respiratory distress."
  },
  {
    id: "mix-015",
    chapter: "Mixed Situational Scenarios",
    category: "Medication Decision",
    scenario: "A patient with chest pain says, “I break out and my throat swells when I take aspirin.”",
    question: "What should you do?",
    options: ["Give aspirin anyway", "Withhold aspirin and document allergy", "Give nitro instead without assessment", "Ignore the allergy"],
    answer: "Withhold aspirin and document allergy",
    explanation: "Allergic reaction to aspirin is a contraindication.",
    learningPoint: "Medication decisions require allergy checks."
  },
  {
    id: "mix-016",
    chapter: "Mixed Situational Scenarios",
    category: "Scene Size-Up",
    scenario: "You respond to an industrial plant. Multiple workers are coughing after chemical exposure. The HazMat team has not cleared the scene.",
    question: "What should you do first?",
    options: ["Enter immediately", "Wait for scene safety/decontamination and use proper resources", "Remove PPE", "Transport without decon"],
    answer: "Wait for scene safety/decontamination and use proper resources",
    explanation: "Chemical exposure scenes can injure responders.",
    learningPoint: "Scene safety protects you and the patient."
  },
  {
    id: "mix-017",
    chapter: "Mixed Situational Scenarios",
    category: "Shock",
    scenario: "A patient was initially anxious with rapid pulse and normal BP. Ten minutes later, he is confused and BP is 78 systolic.",
    question: "What happened?",
    options: ["He moved from compensated toward decompensated shock", "He improved", "He became stable", "This is normal after trauma"],
    answer: "He moved from compensated toward decompensated shock",
    explanation: "Falling BP and worsening mental status suggest decompensated shock.",
    learningPoint: "Trends are important."
  },
  {
    id: "mix-018",
    chapter: "Mixed Situational Scenarios",
    category: "Airway",
    scenario: "An unresponsive patient has no gag reflex after you clear the airway.",
    question: "Which airway adjunct is appropriate?",
    options: ["OPA", "Oral glucose", "Tourniquet", "Aspirin"],
    answer: "OPA",
    explanation: "OPA helps maintain airway in unresponsive patients without gag reflex.",
    learningPoint: "Pick adjuncts based on responsiveness and gag reflex."
  },
  {
    id: "mix-019",
    chapter: "Mixed Situational Scenarios",
    category: "Breathing",
    scenario: "A patient is breathing adequately at 20/min but SpO₂ is 87%.",
    question: "What is the best next step?",
    options: ["Supplemental oxygen", "Chest compressions", "No care needed", "Give nitro"],
    answer: "Supplemental oxygen",
    explanation: "Breathing is adequate but oxygenation is low.",
    learningPoint: "Adequate breathing + hypoxia = oxygen."
  },
  {
    id: "mix-020",
    chapter: "Mixed Situational Scenarios",
    category: "Cardiac Emergency",
    scenario: "You find a patient unresponsive, not breathing normally, and pulseless.",
    question: "What should you do?",
    options: ["Start CPR and apply AED as soon as possible", "Ask SAMPLE first", "Give oral glucose", "Sit the patient upright"],
    answer: "Start CPR and apply AED as soon as possible",
    explanation: "Pulseless unresponsive patient needs CPR and AED.",
    learningPoint: "Cardiac arrest care is immediate CPR/AED."
  }
];

const questionBank = [
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
  chapter: 6,
  topic: "Anatomy and Physiology",
  question: "Which term means the structure of the body and where body parts are located?",
  answers: [
    "Anatomy",
    "Physiology",
    "Pathophysiology",
    "Perfusion"
  ],
  correct: 0,
  explanation: "Anatomy is body structure. EMTs use anatomy to describe locations and injuries accurately."
},
{
  chapter: 6,
  topic: "Anatomy and Physiology",
  question: "Which term means how disease or injury changes normal body function?",
  answers: [
    "Anatomy",
    "Physiology",
    "Pathophysiology",
    "Topography"
  ],
  correct: 2,
  explanation: "Pathophysiology explains how illness or injury disrupts normal physiology."
},
{
  chapter: 6,
  topic: "Body Planes",
  question: "Right and left in anatomy are always based on whose right and left?",
  answers: [
    "The EMT's",
    "The patient's",
    "The driver’s",
    "The receiving nurse’s"
  ],
  correct: 1,
  explanation: "Anatomic directions are always from the patient’s perspective."
},
{
  chapter: 6,
  topic: "Body Planes",
  question: "Which plane divides the body into front and back portions?",
  answers: [
    "Sagittal plane",
    "Frontal or coronal plane",
    "Transverse plane",
    "Midsagittal plane"
  ],
  correct: 1,
  explanation: "The frontal, or coronal, plane divides the body into anterior and posterior portions."
},
{
  chapter: 6,
  topic: "Skeletal System",
  question: "Which items are part of the axial skeleton? Select all that apply.",
  answers: [
    "Skull",
    "Spine",
    "Ribs and sternum",
    "Arms and legs"
  ],
  correct: [0, 1, 2],
  explanation: "The axial skeleton includes the skull, spinal column, ribs, and sternum. Arms and legs are appendicular skeleton."
},
{
  chapter: 6,
  topic: "Musculoskeletal System",
  question: "Which pairing is correct?",
  answers: [
    "Ligaments connect muscle to bone; tendons connect bone to bone",
    "Ligaments connect bone to bone; tendons connect muscle to bone",
    "Cartilage connects muscle to skin",
    "Skeletal muscle is involuntary"
  ],
  correct: 1,
  explanation: "Ligaments connect bone to bone. Tendons connect muscle to bone. Skeletal muscle is voluntary."
},
{
  chapter: 6,
  topic: "Spine",
  question: "Which spine section has 7 vertebrae and is located in the neck?",
  answers: [
    "Cervical",
    "Thoracic",
    "Lumbar",
    "Sacral"
  ],
  correct: 0,
  explanation: "The cervical spine has 7 vertebrae and is located in the neck."
},
{
  chapter: 6,
  topic: "Spine",
  question: "A suspected injury to the head, neck, or spine is concerning because it can affect which functions? Select all that apply.",
  answers: [
    "Breathing",
    "Movement",
    "Sensation",
    "Hair color"
  ],
  correct: [0, 1, 2],
  explanation: "Spinal or nervous system injury can affect breathing, movement, and sensation."
},
{
  chapter: 6,
  topic: "Respiratory System",
  question: "Which airway route is in the correct order?",
  answers: [
    "Alveoli, bronchioles, trachea, mouth",
    "Nose or mouth, pharynx, larynx, trachea, bronchi, bronchioles, alveoli",
    "Trachea, larynx, pharynx, bronchi, alveoli",
    "Mouth, aorta, bronchi, capillaries, alveoli"
  ],
  correct: 1,
  explanation: "Air flows from the nose or mouth through the pharynx, larynx, trachea, bronchi, bronchioles, and finally the alveoli."
},
{
  chapter: 6,
  topic: "Respiratory System",
  question: "Where does oxygen and carbon dioxide exchange occur?",
  answers: [
    "Alveoli",
    "Larynx",
    "Trachea",
    "Diaphragm"
  ],
  correct: 0,
  explanation: "The alveoli are tiny air sacs where gas exchange occurs."
},
{
  chapter: 6,
  topic: "Respiratory System",
  question: "Which findings can suggest inadequate breathing? Select all that apply.",
  answers: [
    "Unable to speak in full sentences",
    "Accessory muscle use",
    "Cyanosis",
    "Quiet, regular breathing with normal skin color"
  ],
  correct: [0, 1, 2],
  explanation: "Trouble speaking, accessory muscle use, and cyanosis can indicate inadequate breathing. Quiet, regular breathing with normal color is reassuring."
},
{
  chapter: 6,
  topic: "Respiratory System",
  question: "What are agonal gasps?",
  answers: [
    "Normal deep breaths during sleep",
    "Occasional gasping breaths that are not adequate breathing",
    "Fast but effective breathing",
    "A normal pediatric breathing pattern"
  ],
  correct: 1,
  explanation: "Agonal gasps can occur in cardiac arrest and should not be treated as adequate breathing."
},
{
  chapter: 6,
  topic: "Circulatory System",
  question: "What does perfusion mean?",
  answers: [
    "The movement of air into the lungs",
    "Adequate blood flow delivering oxygen and nutrients to tissues",
    "The relaxation phase of the heart",
    "The process of food digestion"
  ],
  correct: 1,
  explanation: "Perfusion means tissues are receiving enough blood, oxygen, and nutrients."
},
{
  chapter: 6,
  topic: "Circulatory System",
  question: "Which statement correctly describes pulmonary circulation?",
  answers: [
    "It carries oxygen-rich blood from the left heart to the body",
    "It carries oxygen-poor blood from the right heart to the lungs and oxygen-rich blood back to the left heart",
    "It only supplies the heart muscle",
    "It carries blood from capillaries directly to the brain"
  ],
  correct: 1,
  explanation: "Pulmonary circulation moves blood between the right side of the heart and the lungs, then back to the left side of the heart."
},
{
  chapter: 6,
  topic: "Heart",
  question: "Which chamber pumps oxygen-rich blood to the body?",
  answers: [
    "Right atrium",
    "Right ventricle",
    "Left atrium",
    "Left ventricle"
  ],
  correct: 3,
  explanation: "The left ventricle is the strongest chamber and pumps oxygen-rich blood through the aorta to the body."
},
{
  chapter: 6,
  topic: "Heart",
  question: "What is cardiac output?",
  answers: [
    "Heart rate multiplied by stroke volume",
    "Blood pressure divided by pulse",
    "Respiratory rate multiplied by oxygen saturation",
    "The amount of air moved with one breath"
  ],
  correct: 0,
  explanation: "Cardiac output is the amount of blood pumped in one minute: heart rate times stroke volume."
},
{
  chapter: 6,
  topic: "Blood Flow",
  question: "Which route best summarizes blood flow through the body?",
  answers: [
    "Body, right heart, lungs, left heart, body",
    "Body, left heart, lungs, right heart, body",
    "Lungs, right heart, body, left heart, lungs",
    "Aorta, lungs, vena cava, body"
  ],
  correct: 0,
  explanation: "A simple way to remember circulation is body to right heart to lungs to left heart to body."
},
{
  chapter: 6,
  topic: "Blood Flow",
  question: "Which pulmonary vessel test trap is correct?",
  answers: [
    "Pulmonary arteries carry oxygen-rich blood to the heart",
    "Pulmonary veins carry oxygen-poor blood away from the heart",
    "Pulmonary arteries carry oxygen-poor blood away from the heart to the lungs",
    "Pulmonary veins and arteries both carry oxygen-rich blood"
  ],
  correct: 2,
  explanation: "Pulmonary arteries carry oxygen-poor blood away from the heart to the lungs. Pulmonary veins carry oxygen-rich blood back to the heart."
},
{
  chapter: 6,
  topic: "Heart Diagram",
  question: "In the diagram, what is label 1?",
  image: "assets/heart-flow.png",
  imageAlt: "Numbered diagram of blood flow through the heart, lungs, and body.",
  answers: [
    "Superior vena cava",
    "Pulmonary veins",
    "Right atrium",
    "Inferior vena cava"
  ],
  correct: 0,
  explanation: "Label 1 points to the superior vena cava, which returns oxygen-poor blood from the upper body to the heart."
},
{
  chapter: 6,
  topic: "Heart Diagram",
  question: "In the diagram, what is label 2?",
  image: "assets/heart-flow.png",
  imageAlt: "Numbered diagram of blood flow through the heart, lungs, and body.",
  answers: [
    "Pulmonary capillaries",
    "Systemic (body) capillaries",
    "Pulmonary arteries",
    "Left ventricle"
  ],
  correct: 1,
  explanation: "Label 2 points to systemic body capillaries, where blood exchanges oxygen, carbon dioxide, nutrients, and wastes with body tissues."
},
{
  chapter: 6,
  topic: "Heart Diagram",
  question: "In the diagram, what is label 3?",
  image: "assets/heart-flow.png",
  imageAlt: "Numbered diagram of blood flow through the heart, lungs, and body.",
  answers: [
    "Arteriole",
    "Pulmonary vein",
    "Venule",
    "Aorta"
  ],
  correct: 2,
  explanation: "Label 3 points to a venule, a small vessel that collects blood leaving capillaries and leads into veins."
},
{
  chapter: 6,
  topic: "Heart Diagram",
  question: "In the diagram, what is label 4?",
  image: "assets/heart-flow.png",
  imageAlt: "Numbered diagram of blood flow through the heart, lungs, and body.",
  answers: [
    "Venule",
    "Arteriole",
    "Inferior vena cava",
    "Right atrium"
  ],
  correct: 1,
  explanation: "Label 4 points to an arteriole, a small branch of an artery that leads blood into capillaries."
},
{
  chapter: 6,
  topic: "Heart Diagram",
  question: "In the diagram, what is label 5?",
  image: "assets/heart-flow.png",
  imageAlt: "Numbered diagram of blood flow through the heart, lungs, and body.",
  answers: [
    "Vein",
    "Pulmonary vein",
    "Artery",
    "Right ventricle"
  ],
  correct: 2,
  explanation: "Label 5 points to an artery, a vessel that carries blood away from the heart."
},
{
  chapter: 6,
  topic: "Heart Diagram",
  question: "In the diagram, what is label 6?",
  image: "assets/heart-flow.png",
  imageAlt: "Numbered diagram of blood flow through the heart, lungs, and body.",
  answers: [
    "Pulmonary veins",
    "Aorta",
    "Pulmonary arteries",
    "Systemic capillaries"
  ],
  correct: 2,
  explanation: "Label 6 points to the pulmonary arteries, which carry oxygen-poor blood from the heart to the lungs."
},
{
  chapter: 6,
  topic: "Heart Diagram",
  question: "In the diagram, what is label 7?",
  image: "assets/heart-flow.png",
  imageAlt: "Numbered diagram of blood flow through the heart, lungs, and body.",
  answers: [
    "Systemic body capillaries",
    "Pulmonary (lung) capillaries",
    "Pulmonary veins",
    "Left atrium"
  ],
  correct: 1,
  explanation: "Label 7 points to pulmonary lung capillaries, where blood releases carbon dioxide and picks up oxygen."
},
{
  chapter: 6,
  topic: "Heart Diagram",
  question: "In the diagram, what is label 8?",
  image: "assets/heart-flow.png",
  imageAlt: "Numbered diagram of blood flow through the heart, lungs, and body.",
  answers: [
    "Pulmonary arteries",
    "Superior vena cava",
    "Pulmonary veins",
    "Right atrium"
  ],
  correct: 2,
  explanation: "Label 8 points to the pulmonary veins, which carry oxygenated blood from the lungs back to the left atrium."
},
{
  chapter: 6,
  topic: "Heart Diagram",
  question: "In the diagram, what is label 9?",
  image: "assets/heart-flow.png",
  imageAlt: "Numbered diagram of blood flow through the heart, lungs, and body.",
  answers: [
    "Left atrium",
    "Left ventricle",
    "Right atrium",
    "Aorta"
  ],
  correct: 0,
  explanation: "Label 9 next to the heart points to the left atrium, which receives oxygenated blood from the pulmonary veins."
},
{
  chapter: 6,
  topic: "Heart Diagram",
  question: "In the diagram, what is label 10?",
  image: "assets/heart-flow.png",
  imageAlt: "Numbered diagram of blood flow through the heart, lungs, and body.",
  answers: [
    "Right ventricle",
    "Left atrium",
    "Inferior vena cava",
    "Left ventricle"
  ],
  correct: 3,
  explanation: "Label 10 points to the left ventricle, which pumps oxygenated blood into the aorta."
},
{
  chapter: 6,
  topic: "Heart Diagram",
  question: "In the diagram, what is label 11 on the left side?",
  image: "assets/heart-flow.png",
  imageAlt: "Numbered diagram of blood flow through the heart, lungs, and body.",
  answers: [
    "Superior vena cava",
    "Inferior vena cava",
    "Tissue cells",
    "Pulmonary vein"
  ],
  correct: 1,
  explanation: "Label 11 on the left side points to the inferior vena cava, which returns oxygen-poor blood from the lower body to the heart."
},
{
  chapter: 6,
  topic: "Heart Diagram",
  question: "In the diagram, what is label 12?",
  image: "assets/heart-flow.png",
  imageAlt: "Numbered diagram of blood flow through the heart, lungs, and body.",
  answers: [
    "Right atrium",
    "Left atrium",
    "Right ventricle",
    "Aorta"
  ],
  correct: 0,
  explanation: "Label 12 points to the right atrium, which receives oxygen-poor blood from the vena cava."
},
{
  chapter: 6,
  topic: "Heart Diagram",
  question: "In the diagram, what is label 13?",
  image: "assets/heart-flow.png",
  imageAlt: "Numbered diagram of blood flow through the heart, lungs, and body.",
  answers: [
    "Left ventricle",
    "Pulmonary vein",
    "Right atrium",
    "Right ventricle"
  ],
  correct: 3,
  explanation: "Label 13 points to the right ventricle, which pumps oxygen-poor blood toward the lungs."
},
{
  chapter: 6,
  topic: "Heart Diagram",
  question: "In the diagram, what is label 14?",
  image: "assets/heart-flow.png",
  imageAlt: "Numbered diagram of blood flow through the heart, lungs, and body.",
  answers: [
    "Pulmonary capillaries",
    "Systemic (body) capillaries",
    "Pulmonary veins",
    "Arteriole"
  ],
  correct: 1,
  explanation: "Label 14 points to systemic body capillaries in the lower body, where exchange occurs between blood and tissues."
},{
  chapter: 6,
  topic: "Blood Vessels",
  question: "Which statements about arteries are correct? Select all that apply.",
  answers: [
    "They carry blood away from the heart",
    "They are usually high-pressure vessels",
    "A severed artery may bleed in spurts",
    "They always carry oxygen-poor blood"
  ],
  correct: [0, 1, 2],
  explanation: "Arteries carry blood away from the heart, are usually high-pressure, and arterial bleeding may spurt. Most arteries carry oxygen-rich blood, except pulmonary arteries."
},
{
  chapter: 6,
  topic: "Blood Vessels",
  question: "Where do oxygen, nutrients, carbon dioxide, and wastes exchange between blood and cells?",
  answers: [
    "Capillaries",
    "Veins",
    "Aorta",
    "Vena cava"
  ],
  correct: 0,
  explanation: "Capillaries are the tiny vessels where exchange occurs."
},
{
  chapter: 6,
  topic: "Blood",
  question: "Which blood components help with clotting? Select all that apply.",
  answers: [
    "Platelets",
    "Clotting factors",
    "Hemoglobin",
    "Leukocytes"
  ],
  correct: [0, 1],
  explanation: "Platelets and clotting factors help form clots. Hemoglobin carries oxygen, and leukocytes fight infection."
},
{
  chapter: 6,
  topic: "Blood",
  question: "Why is a spleen injury dangerous?",
  answers: [
    "The spleen contains air sacs",
    "The spleen is highly vascular and can bleed severely",
    "The spleen controls all breathing",
    "The spleen pumps blood to the body"
  ],
  correct: 1,
  explanation: "The spleen stores and filters blood and can bleed heavily when injured."
},
{
  chapter: 6,
  topic: "Blood Pressure and Shock",
  question: "What does systole mean?",
  answers: [
    "The ventricle relaxes and fills",
    "The left ventricle contracts and pumps blood out",
    "Blood returns from the lungs",
    "Capillaries exchange oxygen"
  ],
  correct: 1,
  explanation: "Systole is the contraction phase. The systolic pressure is the top blood pressure number."
},
{
  chapter: 6,
  topic: "Blood Pressure and Shock",
  question: "When blood loss occurs, how does the body try to compensate? Select all that apply.",
  answers: [
    "Increases heart rate",
    "Constricts blood vessels",
    "Redirects blood toward the brain, heart, and lungs",
    "Stops perfusion to all organs equally"
  ],
  correct: [0, 1, 2],
  explanation: "The body compensates by raising heart rate, constricting vessels, and protecting priority organs."
},
{
  chapter: 6,
  topic: "Blood Pressure and Shock",
  question: "What is shock?",
  answers: [
    "Widespread inadequate perfusion",
    "Normal blood flow to tissues",
    "A fast respiratory rate only",
    "A normal response to exercise"
  ],
  correct: 0,
  explanation: "Shock is widespread hypoperfusion, meaning tissues are not getting enough blood and oxygen."
},
{
  chapter: 6,
  topic: "Nervous System",
  question: "Which structures make up the central nervous system?",
  answers: [
    "Brain and spinal cord",
    "Arms and legs",
    "Heart and blood vessels",
    "Skin and sweat glands"
  ],
  correct: 0,
  explanation: "The central nervous system includes the brain and spinal cord."
},
{
  chapter: 6,
  topic: "Nervous System",
  question: "Which brain part controls breathing, heart rate, blood pressure, and consciousness?",
  answers: [
    "Cerebrum",
    "Cerebellum",
    "Brain stem",
    "Pancreas"
  ],
  correct: 2,
  explanation: "The brain stem controls vital functions such as breathing, heart rate, blood pressure, and consciousness."
},
{
  chapter: 6,
  topic: "Skin",
  question: "Which skin findings can indicate life threats or poor perfusion? Select all that apply.",
  answers: [
    "Pale skin",
    "Cool, clammy skin",
    "Blue or cyanotic skin",
    "Warm, dry, normal-colored skin after resting"
  ],
  correct: [0, 1, 2],
  explanation: "Pale, cool and clammy, or cyanotic skin can suggest poor perfusion, shock, or low oxygen."
},
{
  chapter: 6,
  topic: "Body Systems",
  question: "Which organs are part of the urinary system? Select all that apply.",
  answers: [
    "Kidneys",
    "Ureters",
    "Bladder",
    "Alveoli"
  ],
  correct: [0, 1, 2],
  explanation: "The urinary system includes kidneys, ureters, bladder, and urethra. Alveoli belong to the respiratory system."
},
{
  chapter: 6,
  topic: "Endocrine and Lymphatic Systems",
  question: "Which statements are correct? Select all that apply.",
  answers: [
    "The pancreas helps regulate blood glucose",
    "The adrenal glands release epinephrine and norepinephrine during stress",
    "The lymphatic system supports immunity and fluid balance",
    "The gallbladder is the main organ of breathing"
  ],
  correct: [0, 1, 2],
  explanation: "The pancreas, adrenal glands, and lymphatic system all have important regulatory or immune roles. The gallbladder is part of digestion."
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
  topic: "Anatomy of the Respiratory System",
  question: "What is the primary purpose of the respiratory system?",
  answers: [
    "To circulate blood through the body",
    "To allow air movement and gas exchange",
    "To digest nutrients",
    "To control blood sugar"
  ],
  correct: 1,
  explanation: "The respiratory system moves air into and out of the body and allows oxygen and carbon dioxide exchange."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "What is ventilation?",
  answers: [
    "The movement of blood through capillaries",
    "The movement of air between the lungs and the environment",
    "The movement of oxygen from cells to blood",
    "The production of speech sounds"
  ],
  correct: 1,
  explanation: "Ventilation is the physical movement of air into and out of the lungs."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "The upper airway consists of structures located primarily:",
  answers: [
    "Below the diaphragm",
    "Above the vocal cords",
    "Inside the alveoli",
    "Within the heart"
  ],
  correct: 1,
  explanation: "The upper airway includes the structures above the level of the vocal cords."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "Which of the following is part of the upper airway?",
  answers: [
    "Alveoli",
    "Bronchioles",
    "Pharynx",
    "Pulmonary capillaries"
  ],
  correct: 2,
  explanation: "The pharynx is part of the upper airway."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "What are the major functions of the upper airway?",
  answers: [
    "Pumping blood and removing wastes",
    "Warming, filtering, and humidifying air",
    "Producing red blood cells",
    "Moving oxygen directly into body cells"
  ],
  correct: 1,
  explanation: "The upper airway prepares air before it reaches lower respiratory structures."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "The pharynx is best described as the:",
  answers: [
    "Tiny air sac where gas exchange occurs",
    "Muscular tube extending from the nose and mouth toward the trachea and esophagus",
    "Nerve controlling the diaphragm",
    "Membrane covering the lungs"
  ],
  correct: 1,
  explanation: "The pharynx is the throat passage shared by respiratory and digestive pathways."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "Which three structures make up the pharynx?",
  answers: [
    "Nasopharynx, oropharynx, and laryngopharynx",
    "Trachea, bronchi, and bronchioles",
    "Thyroid cartilage, cricoid cartilage, and diaphragm",
    "Pleura, lungs, and mediastinum"
  ],
  correct: 0,
  explanation: "Those are the three divisions of the pharynx."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "The nasopharynx is located:",
  answers: [
    "Behind the nose",
    "Inside the lungs",
    "Below the diaphragm",
    "Between the alveoli"
  ],
  correct: 0,
  explanation: "The nasopharynx is the portion of the pharynx behind the nasal cavity."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "What does the ciliated mucous membrane of the nasopharynx help do?",
  answers: [
    "Pump oxygenated blood",
    "Filter contaminants and warm and humidify air",
    "Open the vocal cords during speech only",
    "Force carbon dioxide into cells"
  ],
  correct: 1,
  explanation: "The nasal pathway helps prepare and clean incoming air."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "The oropharynx is located:",
  answers: [
    "Posterior to the oral cavity",
    "Around the heart",
    "Inside the bronchioles",
    "Below the lungs"
  ],
  correct: 0,
  explanation: "The oropharynx is the portion of the throat behind the mouth."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "The lowest portion of the pharynx is called the:",
  answers: [
    "Nasopharynx",
    "Laryngopharynx",
    "Carina",
    "Alveolus"
  ],
  correct: 1,
  explanation: "The laryngopharynx, also called the hypopharynx, is the lowest part of the pharynx."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "At the lower end of the laryngopharynx, air normally travels into the:",
  answers: [
    "Esophagus",
    "Stomach",
    "Larynx",
    "Pulmonary artery"
  ],
  correct: 2,
  explanation: "The larynx is anterior and leads air toward the trachea."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "What is the main function of the epiglottis?",
  answers: [
    "To stimulate the heart",
    "To prevent food and liquid from entering the airway during swallowing",
    "To exchange oxygen and carbon dioxide",
    "To attach the lungs to the chest wall"
  ],
  correct: 1,
  explanation: "The epiglottis folds over the glottis when swallowing."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "Aspiration occurs when:",
  answers: [
    "Air enters through the nose",
    "The diaphragm contracts downward",
    "Foreign material enters the airway or lungs",
    "Oxygen enters the blood normally"
  ],
  correct: 2,
  explanation: "Food, liquid, blood, or vomit in the airway may be aspirated."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "Which structure marks the transition between the upper and lower airway?",
  answers: [
    "Alveoli",
    "Larynx",
    "Diaphragm",
    "Pulmonary capillaries"
  ],
  correct: 1,
  explanation: "The larynx marks where the upper airway ends and the lower airway begins."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "The Adam's apple is formed by the:",
  answers: [
    "Cricoid cartilage",
    "Thyroid cartilage",
    "Epiglottis",
    "Carina"
  ],
  correct: 1,
  explanation: "The thyroid cartilage forms the laryngeal prominence called the Adam's apple."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "The cricoid cartilage is important because it:",
  answers: [
    "Is the main muscle of breathing",
    "Forms a complete ring at the lowest portion of the larynx",
    "Contains the alveoli",
    "Carries oxygenated blood to the heart"
  ],
  correct: 1,
  explanation: "The cricoid ring is a complete cartilage ring immediately above the trachea."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "The cricothyroid membrane is located between the:",
  answers: [
    "Nose and mouth",
    "Thyroid and cricoid cartilages",
    "Lungs and diaphragm",
    "Bronchioles and alveoli"
  ],
  correct: 1,
  explanation: "It connects the thyroid cartilage to the cricoid ring."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "The opening between the vocal cords is called the:",
  answers: [
    "Glottis",
    "Carina",
    "Pleura",
    "Mediastinum"
  ],
  correct: 0,
  explanation: "The glottis, or glottic opening, is the space between the vocal cords."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "What is the narrowest portion of the adult airway?",
  answers: [
    "Mainstem bronchus",
    "Glottis",
    "Alveolar duct",
    "Nasopharynx"
  ],
  correct: 1,
  explanation: "In adults, the glottis is the narrowest portion of the airway."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "What is the primary function of the lower airway?",
  answers: [
    "To digest swallowed food",
    "To deliver oxygen-containing air to the alveoli",
    "To regulate blood pressure",
    "To form speech sounds only"
  ],
  correct: 1,
  explanation: "The lower airway moves air toward the gas-exchange areas of the lungs."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "The trachea is also known as the:",
  answers: [
    "Voice box",
    "Windpipe",
    "Air sac",
    "Chest wall"
  ],
  correct: 1,
  explanation: "The trachea is the windpipe leading toward the lungs."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "What structural feature helps keep the trachea open?",
  answers: [
    "C-shaped cartilaginous rings",
    "Pulmonary capillaries",
    "Vocal cords",
    "The esophagus"
  ],
  correct: 0,
  explanation: "Cartilage rings support the trachea and help prevent collapse."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "The trachea splits into the right and left mainstem bronchi at the:",
  answers: [
    "Glottis",
    "Carina",
    "Epiglottis",
    "Diaphragm"
  ],
  correct: 1,
  explanation: "The carina is the division point of the trachea."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "Which airway structures can dilate or constrict because of smooth muscle tone?",
  answers: [
    "Vocal cords",
    "Bronchioles",
    "Pleura",
    "Pulmonary capillaries"
  ],
  correct: 1,
  explanation: "Bronchioles are small smooth-muscle airways that respond to different stimuli."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "Where does oxygen and carbon dioxide exchange occur?",
  answers: [
    "Esophagus",
    "Alveoli",
    "Thyroid cartilage",
    "Pharynx"
  ],
  correct: 1,
  explanation: "The alveoli are the gas-exchange structures of the respiratory system."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "Which blood vessels surround the alveoli and participate in gas exchange?",
  answers: [
    "Coronary arteries",
    "Pulmonary capillaries",
    "Jugular veins",
    "Carotid arteries"
  ],
  correct: 1,
  explanation: "Pulmonary capillaries surround the alveoli and exchange gases with them."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "Which statement correctly describes gas exchange at the alveoli?",
  answers: [
    "Oxygen moves into the alveoli from the blood, and carbon dioxide enters the blood.",
    "Oxygen moves into pulmonary capillaries, and carbon dioxide moves into the alveoli.",
    "Both gases move only into the lungs.",
    "Both gases move only into the blood."
  ],
  correct: 1,
  explanation: "Oxygen enters the blood, while carbon dioxide leaves the blood to be exhaled."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "The membrane directly covering the lung tissue is the:",
  answers: [
    "Parietal pleura",
    "Visceral pleura",
    "Cricothyroid membrane",
    "Glottic membrane"
  ],
  correct: 1,
  explanation: "Visceral pleura covers the lung surface."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "The membrane lining the inside of the thoracic cavity is the:",
  answers: [
    "Parietal pleura",
    "Visceral pleura",
    "Epiglottis",
    "Carina"
  ],
  correct: 0,
  explanation: "Parietal pleura lines the inner chest cavity."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "The space between the lungs that contains the heart and major blood vessels is called the:",
  answers: [
    "Nasopharynx",
    "Mediastinum",
    "Glottis",
    "Oropharynx"
  ],
  correct: 1,
  explanation: "The mediastinum separates the right and left lung spaces."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "Which muscle is primarily responsible for normal breathing?",
  answers: [
    "Diaphragm",
    "Biceps",
    "Tongue",
    "Thyroid cartilage"
  ],
  correct: 0,
  explanation: "The diaphragm contracts downward and is the main muscle used during breathing."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "Which nerve stimulates the diaphragm to contract?",
  answers: [
    "Optic nerve",
    "Phrenic nerve",
    "Facial nerve",
    "Radial nerve"
  ],
  correct: 1,
  explanation: "The phrenic nerve innervates the diaphragm."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "Intercostal muscles are located:",
  answers: [
    "Between the ribs",
    "Inside the alveoli",
    "Behind the tongue",
    "Inside the trachea"
  ],
  correct: 0,
  explanation: "Intercostal muscles assist breathing and may become especially noticeable during respiratory distress."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "Why may an infant's airway become obstructed while lying flat?",
  answers: [
    "Infants have a smaller chest cavity only.",
    "Their proportionately larger occiput can flex the head forward.",
    "Their lungs have too many lobes.",
    "Their diaphragm cannot contract."
  ],
  correct: 1,
  explanation: "The larger occiput can place the infant's airway in a flexed, obstructed position."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "Which pediatric anatomy combination increases the risk of airway obstruction?",
  answers: [
    "Larger jaw and smaller tongue",
    "Smaller jaw and larger tongue",
    "Wider trachea and smaller epiglottis",
    "Larger bronchioles and stronger chest muscles"
  ],
  correct: 1,
  explanation: "Children have a proportionately smaller mandible and larger tongue."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "Compared with an adult, a child's epiglottis is generally:",
  answers: [
    "Smaller and rigid",
    "Larger, more floppy, and omega-shaped",
    "Completely absent",
    "Below the diaphragm"
  ],
  correct: 1,
  explanation: "The pediatric epiglottis has a more floppy, omega-shaped appearance."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "In children younger than 8 years, the narrowest portion of the airway is at the:",
  answers: [
    "Alveoli",
    "Cricoid ring",
    "Carina",
    "Nasopharynx"
  ],
  correct: 1,
  explanation: "The pediatric airway is narrowest at the cricoid ring."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "Why are infants and young children commonly called belly breathers?",
  answers: [
    "They breathe mostly through the stomach.",
    "They rely heavily on diaphragm movement, making abdominal movement noticeable.",
    "Their lungs are located in the abdomen.",
    "Their ribs do not move at all."
  ],
  correct: 1,
  explanation: "Pediatric patients depend heavily on diaphragm-driven breathing."
},
{
  chapter: 10,
  topic: "Anatomy of the Respiratory System",
  question: "A child has airway swelling after an allergic reaction. Why is this especially dangerous?",
  answers: [
    "Children have stronger chest muscles than adults.",
    "Their naturally smaller airway can become severely narrowed with even minor swelling.",
    "Their alveoli automatically close during stress.",
    "Their trachea directs air into the stomach."
  ],
  correct: 1,
  explanation: "Small pediatric airways can become critically obstructed from swelling or a foreign body."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "What does dyspnea mean?",
  answers: [
    "Chest pain caused by injury",
    "Difficulty breathing or shortness of breath",
    "Coughing blood",
    "Lack of a pulse"
  ],
  correct: 1,
  explanation: "Dyspnea is the sensation or complaint of difficulty breathing."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Which finding most strongly suggests respiratory distress?",
  answers: [
    "Speaking normally in complete sentences",
    "Respiratory rate of 16 breaths/min with clear lungs",
    "Accessory muscle use and difficulty speaking",
    "Warm, dry skin with normal breathing"
  ],
  correct: 2,
  explanation: "Accessory muscle use and inability to speak normally indicate increased work of breathing."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Which finding may indicate respiratory failure rather than simple respiratory distress?",
  answers: [
    "Mild anxiety with normal oxygenation",
    "Altered mental status and weakening respiratory effort",
    "Coughing with a normal respiratory rate",
    "Clear, equal lung sounds"
  ],
  correct: 1,
  explanation: "Altered mental status and decreasing effort can indicate exhaustion and inadequate ventilation."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "A conscious patient with significant dyspnea usually breathes most comfortably in what position?",
  answers: [
    "Supine",
    "Trendelenburg",
    "Sitting upright",
    "Prone"
  ],
  correct: 2,
  explanation: "Sitting upright often improves lung expansion and reduces discomfort."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "When assessing breath sounds, the EMT should:",
  answers: [
    "Listen over clothing to save time",
    "Compare corresponding areas on both sides of the bare chest",
    "Listen only on the front of the chest",
    "Listen only during inhalation"
  ],
  correct: 1,
  explanation: "Breath sounds should be compared bilaterally directly over the skin."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Which tool helps estimate the patient\u2019s oxygen saturation?",
  answers: [
    "Blood pressure cuff",
    "Pulse oximeter",
    "Glucometer",
    "Thermometer"
  ],
  correct: 1,
  explanation: "Pulse oximetry estimates blood oxygen saturation."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "An unstable respiratory patient should generally be reassessed at least every:",
  answers: [
    "30 minutes",
    "20 minutes",
    "15 minutes",
    "5 minutes"
  ],
  correct: 3,
  explanation: "Unstable respiratory patients require frequent reassessment, generally every 5 minutes."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "A patient with declining mental status and inadequate breathing may require:",
  answers: [
    "Oral fluids",
    "Assisted ventilation with a BVM",
    "Walking to the ambulance",
    "No treatment until a diagnosis is confirmed"
  ],
  correct: 1,
  explanation: "Inadequate breathing requires ventilatory support."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Wheezing is best described as:",
  answers: [
    "A bubbling sound caused by fluid in the alveoli",
    "A high-pitched whistling sound caused by narrowed lower airways",
    "A harsh inspiratory sound caused by upper-airway swelling",
    "A normal breath sound"
  ],
  correct: 1,
  explanation: "Wheezing commonly occurs with asthma and COPD."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Crackles are commonly associated with:",
  answers: [
    "Pulmonary edema",
    "Simple anxiety only",
    "Upper-airway foreign body obstruction only",
    "Normal breathing"
  ],
  correct: 0,
  explanation: "Crackles occur when air moves through fluid in alveoli, such as in pulmonary edema."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Rhonchi usually indicate:",
  answers: [
    "Mucus or secretions in larger airways",
    "A perfectly clear airway",
    "A blood clot in the leg",
    "Absence of lung tissue"
  ],
  correct: 0,
  explanation: "Rhonchi are rattling sounds produced by secretions or mucus."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Stridor is most concerning for:",
  answers: [
    "Upper-airway obstruction",
    "Normal lung ventilation",
    "A broken leg",
    "Low blood sugar only"
  ],
  correct: 0,
  explanation: "Stridor is a high-pitched inspiratory sound caused by narrowing of the upper airway."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Absent breath sounds on one side with sudden dyspnea and chest pain should make you suspect:",
  answers: [
    "Pneumothorax",
    "Mild hay fever",
    "Simple hyperventilation only",
    "Normal breathing"
  ],
  correct: 0,
  explanation: "A pneumothorax may reduce or eliminate airflow on the affected side."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "The term adventitious breath sounds refers to:",
  answers: [
    "Normal breath sounds",
    "Abnormal breath sounds such as wheezing, crackles, and rhonchi",
    "Heart sounds only",
    "Blood pressure findings"
  ],
  correct: 1,
  explanation: "Adventitious breath sounds are abnormal sounds detected during lung auscultation."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Which condition can cause severe upper-airway swelling and rapidly progress to total obstruction?",
  answers: [
    "Epiglottitis",
    "Simple ankle sprain",
    "Hypertension",
    "Mild dehydration"
  ],
  correct: 0,
  explanation: "Epiglottitis can create sudden life-threatening airway compromise."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "A patient suspected of having epiglottitis should generally be allowed to:",
  answers: [
    "Lie supine regardless of discomfort",
    "Sit upright in a position of comfort",
    "Drink water immediately",
    "Walk around to improve airflow"
  ],
  correct: 1,
  explanation: "Forcing the patient flat may worsen upper-airway obstruction."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Why should an EMT avoid unnecessary airway stimulation in a patient with suspected epiglottitis?",
  answers: [
    "It may cause complete airway obstruction",
    "It lowers blood pressure immediately",
    "It causes a leg fracture",
    "It permanently damages the lungs in every case"
  ],
  correct: 0,
  explanation: "Airway manipulation can worsen swelling or trigger obstruction."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Which respiratory infection commonly causes lung inflammation and may produce crackles or rhonchi?",
  answers: [
    "Pneumonia",
    "Wrist sprain",
    "Migraine",
    "Appendicitis"
  ],
  correct: 0,
  explanation: "Pneumonia involves infected lung tissue and may produce abnormal breath sounds."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "RSV is especially important because it:",
  answers: [
    "Commonly affects the lungs and airways and can be serious in children",
    "Always causes broken ribs",
    "Causes only skin irritation",
    "Never spreads between people"
  ],
  correct: 0,
  explanation: "RSV is a contagious respiratory illness and may lead to severe breathing problems."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Pertussis is also called:",
  answers: [
    "Whooping cough",
    "Pulmonary embolism",
    "Pneumothorax",
    "Pleural effusion"
  ],
  correct: 0,
  explanation: "Pertussis is a contagious respiratory infection commonly known as whooping cough."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Acute pulmonary edema involves:",
  answers: [
    "Fluid collecting in the alveoli and lung tissue",
    "Air trapping only in the stomach",
    "Bone fragments blocking a vein",
    "Loss of blood sugar"
  ],
  correct: 0,
  explanation: "Pulmonary edema interferes with gas exchange by placing fluid between alveoli and blood vessels."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "A common cause of pulmonary edema is:",
  answers: [
    "Congestive heart failure",
    "Mild seasonal allergies only",
    "A finger laceration",
    "Ear infection only"
  ],
  correct: 0,
  explanation: "Heart failure can cause fluid to back up into the lungs."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Which finding is strongly associated with severe pulmonary edema?",
  answers: [
    "Frothy pink sputum",
    "Pain isolated to one ankle",
    "Clear breath sounds and no dyspnea",
    "Slow pulse with normal breathing"
  ],
  correct: 0,
  explanation: "Frothy pink sputum can occur in severe pulmonary edema."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Which breath sound is commonly heard in pulmonary edema?",
  answers: [
    "Crackles",
    "Normal vesicular sounds only",
    "No breath sounds from the throat only",
    "Snoring caused by tongue obstruction only"
  ],
  correct: 0,
  explanation: "Crackles reflect air passing through fluid in the alveoli."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Orthopnea means:",
  answers: [
    "Difficulty breathing when lying flat",
    "Pain when swallowing",
    "Coughing from an upper-airway foreign body only",
    "An inability to walk"
  ],
  correct: 0,
  explanation: "Patients with CHF or pulmonary edema often breathe worse while lying flat."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "CPAP may benefit an alert patient with pulmonary edema because it can:",
  answers: [
    "Help open alveoli and improve oxygen exchange",
    "Remove blood clots from the lungs",
    "Replace all need for patient monitoring",
    "Permanently cure heart failure"
  ],
  correct: 0,
  explanation: "CPAP maintains positive pressure and can improve oxygenation in appropriate patients."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Which patient would be a poor candidate for CPAP?",
  answers: [
    "Alert patient with moderate respiratory distress from pulmonary edema",
    "Patient unable to follow commands with declining consciousness",
    "Alert patient with tachypnea and low oxygen saturation",
    "Cooperative patient able to tolerate the mask"
  ],
  correct: 1,
  explanation: "CPAP requires a patient who can follow commands and protect the airway."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "COPD is best described as:",
  answers: [
    "Chronic obstruction and damage involving the airways and alveoli",
    "Sudden fracture of the sternum",
    "Infection of the skin only",
    "A temporary headache disorder"
  ],
  correct: 0,
  explanation: "COPD progressively interferes with airflow and gas exchange."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Which two conditions are commonly included under COPD?",
  answers: [
    "Chronic bronchitis and emphysema",
    "Appendicitis and gastritis",
    "Stroke and seizure",
    "Fracture and dislocation"
  ],
  correct: 0,
  explanation: "Chronic bronchitis and emphysema are major COPD conditions."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Chronic bronchitis primarily involves:",
  answers: [
    "Chronic inflammation and excessive mucus production in the bronchi",
    "Collapse of one lung from air in the pleural space",
    "A clot in the pulmonary vessels",
    "Fluid only around the brain"
  ],
  correct: 0,
  explanation: "Chronic bronchitis causes airway inflammation and mucus buildup."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Emphysema primarily involves:",
  answers: [
    "Destruction of alveolar walls and air trapping",
    "Sudden swelling of the epiglottis",
    "Blood clot formation in the leg only",
    "Fluid accumulating around the heart only"
  ],
  correct: 0,
  explanation: "Emphysema damages alveoli and reduces effective gas exchange."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Which finding is commonly seen in patients with COPD?",
  answers: [
    "Pursed-lip breathing",
    "Completely normal breathing during severe distress",
    "No history of breathing problems ever",
    "Improved breathing when lying flat in every case"
  ],
  correct: 0,
  explanation: "Pursed-lip breathing can help patients with COPD maintain airway pressure during exhalation."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "A COPD patient with altered mental status may be experiencing:",
  answers: [
    "Hypoxia or carbon dioxide retention",
    "Improved ventilation only",
    "Normal breathing with no emergency",
    "A simple hearing problem only"
  ],
  correct: 0,
  explanation: "Poor oxygenation or retained carbon dioxide can alter consciousness."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Which statement about oxygen for a critically ill COPD patient is correct?",
  answers: [
    "Never give oxygen to a COPD patient",
    "Do not withhold needed oxygen; monitor closely and support ventilation if needed",
    "Oxygen is never useful in COPD",
    "The EMT should ignore pulse oximetry"
  ],
  correct: 1,
  explanation: "A hypoxic COPD patient still needs oxygen and frequent reassessment."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Asthma involves:",
  answers: [
    "Narrowing of lower airways from bronchospasm, inflammation, and mucus",
    "Fluid collecting only around the brain",
    "Fracture of the ribs",
    "Obstruction of the coronary arteries only"
  ],
  correct: 0,
  explanation: "Asthma limits airflow through narrowed bronchioles."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Which is a common trigger for asthma?",
  answers: [
    "Cold air",
    "A healed ankle sprain",
    "Normal hydration",
    "Wearing glasses"
  ],
  correct: 0,
  explanation: "Cold air, exercise, allergens, smoke, and infection may trigger asthma symptoms."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "The most common abnormal breath sound with asthma is:",
  answers: [
    "Wheezing",
    "Bone crepitus",
    "Absent heart sounds",
    "Bowel sounds in the chest"
  ],
  correct: 0,
  explanation: "Wheezing is caused by narrowed lower airways."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "A severely ill asthma patient with very little air movement and decreasing wheezing should be considered:",
  answers: [
    "Automatically improved",
    "At risk for respiratory failure",
    "Fully recovered",
    "Ready to refuse all evaluation"
  ],
  correct: 1,
  explanation: "Minimal wheezing may mean the patient is moving too little air to create sound."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Albuterol is primarily used to:",
  answers: [
    "Open narrowed lower airways",
    "Stop all infections immediately",
    "Remove fluid from the pleural space",
    "Dissolve pulmonary blood clots"
  ],
  correct: 0,
  explanation: "Albuterol is a rapid-acting bronchodilator."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Anaphylaxis can cause respiratory failure because it may produce:",
  answers: [
    "Airway swelling and bronchospasm",
    "Only toe pain",
    "Only mild thirst",
    "Improved airway size"
  ],
  correct: 0,
  explanation: "Anaphylaxis can rapidly obstruct breathing through swelling and airway narrowing."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "A spontaneous pneumothorax occurs when:",
  answers: [
    "A weak area of lung ruptures and air enters the pleural space without major trauma",
    "The patient breathes too rapidly from anxiety only",
    "Mucus enters the stomach",
    "The heart beats normally"
  ],
  correct: 0,
  explanation: "Escaped air can collapse part or all of a lung."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Which set of findings most suggests spontaneous pneumothorax?",
  answers: [
    "Sudden chest pain, dyspnea, and decreased breath sounds on one side",
    "Gradual toe pain and normal breathing",
    "Normal lung sounds with no symptoms",
    "Stomach pain after eating only"
  ],
  correct: 0,
  explanation: "Sudden onset with unilateral decreased breath sounds is highly concerning."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Pleural effusion is:",
  answers: [
    "Fluid collecting in the pleural space around the lung",
    "Air narrowing only the upper airway",
    "Mucus inside the nose only",
    "Destruction of heart muscle only"
  ],
  correct: 0,
  explanation: "Fluid around the lung can compress it and cause dyspnea."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "A pulmonary embolism is:",
  answers: [
    "A blood clot obstructing blood flow through the lung\u2019s vessels",
    "Fluid filling the stomach",
    "Airflow improving after an inhaler",
    "Swelling of a sprained joint"
  ],
  correct: 0,
  explanation: "A pulmonary embolism blocks pulmonary circulation and may suddenly impair oxygenation."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Which patient has a risk factor for pulmonary embolism?",
  answers: [
    "Patient recently immobilized after surgery who suddenly becomes short of breath",
    "Patient with a minor paper cut",
    "Patient who slept eight hours and feels well",
    "Patient with a healed finger bruise"
  ],
  correct: 0,
  explanation: "Immobility and surgery can increase clot risk."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "A patient with sudden dyspnea, chest pain, tachycardia, and relatively clear lung sounds may have:",
  answers: [
    "Pulmonary embolism",
    "Normal breathing",
    "Mild ankle strain only",
    "Isolated toothache"
  ],
  correct: 0,
  explanation: "Pulmonary embolism may cause major dyspnea without obvious abnormal lung sounds."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Hyperventilation causes problems primarily because the patient:",
  answers: [
    "Loses excessive carbon dioxide from rapid or deep breathing",
    "Gains excess carbon dioxide from apnea",
    "Develops a fractured rib",
    "Immediately develops pulmonary edema every time"
  ],
  correct: 0,
  explanation: "Excess ventilation decreases carbon dioxide and can cause tingling, dizziness, and cramping."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Before assuming a patient is hyperventilating from anxiety, the EMT should:",
  answers: [
    "Evaluate for serious medical causes of rapid breathing",
    "Ignore the patient\u2019s vital signs",
    "Tell the patient to leave",
    "Delay all assessment"
  ],
  correct: 0,
  explanation: "Pulmonary embolism, hypoxia, asthma, shock, and cardiac problems can mimic anxiety-related hyperventilation."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "A patient develops respiratory distress after inhaling toxic fumes at work. The first major concern is:",
  answers: [
    "Scene safety and removing the patient from continued exposure when safe",
    "Giving the patient food immediately",
    "Having the patient walk around the contaminated area",
    "Ignoring the possibility of airway or lung injury"
  ],
  correct: 0,
  explanation: "Chemical or industrial exposure creates risks for both the patient and rescuer."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "A metered-dose inhaler delivers medication as:",
  answers: [
    "A measured spray inhaled into the lungs",
    "A tablet swallowed whole only",
    "A bandage applied to the chest",
    "A blood pressure reading"
  ],
  correct: 0,
  explanation: "An MDI sends a measured dose of medication into the airway."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "A small-volume nebulizer delivers medication by:",
  answers: [
    "Turning liquid medication into an inhaled mist",
    "Injecting it directly into the bone",
    "Applying it only to skin",
    "Removing mucus surgically"
  ],
  correct: 0,
  explanation: "Nebulized medication is inhaled as a fine aerosol mist."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Before helping a patient with a prescribed inhaler, the EMT should confirm all of the following EXCEPT:",
  answers: [
    "The inhaler belongs to the patient",
    "The medication is indicated and not expired",
    "Local protocol or medical control allows assistance",
    "The inhaler belongs to a nearby friend instead of the patient"
  ],
  correct: 3,
  explanation: "The medication should be prescribed for the patient being treated."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "A rescue inhaler such as albuterol differs from a maintenance inhaler because albuterol:",
  answers: [
    "Is designed to rapidly relieve bronchospasm",
    "Has no immediate effect",
    "Is only used to treat fractures",
    "Permanently cures all lung disease"
  ],
  correct: 0,
  explanation: "Albuterol is a fast-acting bronchodilator used for acute symptoms."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "A patient in respiratory failure with minimal air movement may not benefit sufficiently from an inhaler because:",
  answers: [
    "The medication cannot move deeply into the lungs without adequate airflow",
    "The patient is always pretending",
    "Inhalers work only on healthy people",
    "Inhalers always cause pneumothorax"
  ],
  correct: 0,
  explanation: "In severe respiratory failure, immediate ventilatory support may be more important."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Which intervention is appropriate when a respiratory patient becomes unconscious and breathing becomes inadequate?",
  answers: [
    "Assist ventilation with a BVM",
    "Give the patient food",
    "Have the patient walk",
    "Delay treatment until hospital arrival"
  ],
  correct: 0,
  explanation: "Inadequate breathing requires immediate ventilatory support."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Foreign body aspiration means:",
  answers: [
    "Material enters the airway and may obstruct airflow",
    "A blood clot enters the heart",
    "Fluid enters the joint",
    "The patient becomes mildly thirsty"
  ],
  correct: 0,
  explanation: "Food, liquid, or objects can enter the airway and impair breathing."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "A patient with a tracheostomy develops sudden dyspnea. One possible cause is:",
  answers: [
    "Obstruction or malfunction of the tracheostomy tube",
    "Normal breathing improvement",
    "A healed scratch on the arm",
    "Improved airway clearance in all cases"
  ],
  correct: 0,
  explanation: "Secretions, displacement, or obstruction may interfere with airflow through the tracheostomy."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Cystic fibrosis causes respiratory emergencies primarily because it produces:",
  answers: [
    "Thick mucus that obstructs airways and promotes infection",
    "Thin bones only",
    "Increased vision only",
    "Complete immunity to infection"
  ],
  correct: 0,
  explanation: "Thick secretions interfere with airflow and make respiratory infections more likely."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "Which patient most urgently needs rapid transport and aggressive breathing support?",
  answers: [
    "Patient with respiratory distress whose mental status is declining",
    "Patient with mild cough and normal breathing",
    "Patient with no symptoms requesting directions",
    "Patient with a healed cut and normal vital signs"
  ],
  correct: 0,
  explanation: "Declining mental status may indicate worsening hypoxia and respiratory failure."
},
{
  chapter: 15,
  topic: "Respiratory Emergencies",
  question: "The EMT\u2019s most important overall goal when treating respiratory emergencies is to:",
  answers: [
    "Recognize inadequate breathing early and support oxygenation and ventilation",
    "Diagnose every disease with certainty in the field",
    "Delay transport until symptoms completely resolve",
    "Avoid reassessment once oxygen is applied"
  ],
  correct: 0,
  explanation: "EMT care focuses on recognizing life threats and supporting airway, breathing, and transport."
}
];

const flashcards = [





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
  { chapter: 6, term: "Anatomy", definition: "The structure of the body and where body parts are located." },
  { chapter: 6, term: "Physiology", definition: "How the body works normally." },
  { chapter: 6, term: "Pathophysiology", definition: "How disease or injury changes normal body function." },
  { chapter: 6, term: "Midline", definition: "An imaginary line that divides the body into right and left sides." },
  { chapter: 6, term: "Midsagittal Plane", definition: "Plane that divides the body into equal left and right halves." },
  { chapter: 6, term: "Sagittal Plane", definition: "Plane that divides the body into left and right portions." },
  { chapter: 6, term: "Frontal Plane", definition: "Plane that divides the body into front and back portions; also called coronal plane." },
  { chapter: 6, term: "Transverse Plane", definition: "Plane that divides the body into upper and lower portions; also called axial plane." },
  { chapter: 6, term: "Axial Skeleton", definition: "Skull, spine, ribs, and sternum." },
  { chapter: 6, term: "Appendicular Skeleton", definition: "Arms, legs, shoulders, and pelvis." },
  { chapter: 6, term: "Ligament", definition: "Connects bone to bone." },
  { chapter: 6, term: "Tendon", definition: "Connects muscle to bone." },
  { chapter: 6, term: "Cartilage", definition: "Smooth tissue covering the ends of bones at joints." },
  { chapter: 6, term: "Joint", definition: "Location where two bones meet." },
  { chapter: 6, term: "Skeletal Muscle", definition: "Voluntary muscle used for movement." },
  { chapter: 6, term: "Cervical Spine", definition: "Seven vertebrae in the neck." },
  { chapter: 6, term: "Thoracic Spine", definition: "Twelve vertebrae in the upper and mid back." },
  { chapter: 6, term: "Lumbar Spine", definition: "Five vertebrae in the lower back." },
  { chapter: 6, term: "Sacrum", definition: "Five fused vertebrae at the back of the pelvis." },
  { chapter: 6, term: "Coccyx", definition: "Four fused vertebrae forming the tailbone." },
  { chapter: 6, term: "Upper Airway", definition: "Nose, mouth, tongue, jaw, pharynx, and larynx." },
  { chapter: 6, term: "Lower Airway", definition: "Trachea, bronchi, bronchioles, and alveoli." },
  { chapter: 6, term: "Alveoli", definition: "Tiny air sacs where oxygen and carbon dioxide are exchanged." },
  { chapter: 6, term: "Diaphragm", definition: "Main muscle of breathing." },
  { chapter: 6, term: "Ventilation", definition: "Physical movement of air in and out of the lungs." },
  { chapter: 6, term: "Respiration", definition: "Exchange of oxygen and carbon dioxide." },
  { chapter: 6, term: "Inhalation", definition: "Breathing in." },
  { chapter: 6, term: "Exhalation", definition: "Breathing out." },
  { chapter: 6, term: "Agonal Gasps", definition: "Occasional gasping breaths in cardiac arrest; not adequate breathing." },
  { chapter: 6, term: "Pulmonary Circulation", definition: "Blood flow from the right heart to the lungs and back to the left heart." },
  { chapter: 6, term: "Systemic Circulation", definition: "Blood flow from the left heart to the body and back to the right heart." },
  { chapter: 6, term: "Myocardium", definition: "Heart muscle." },
  { chapter: 6, term: "Septum", definition: "Wall separating the right and left sides of the heart." },
  { chapter: 6, term: "Atrium", definition: "Upper chamber of the heart." },
  { chapter: 6, term: "Ventricle", definition: "Lower chamber of the heart." },
  { chapter: 6, term: "Coronary Arteries", definition: "Arteries that supply oxygenated blood to the heart muscle." },
  { chapter: 6, term: "Stroke Volume", definition: "Amount of blood ejected with one heartbeat." },
  { chapter: 6, term: "Cardiac Output", definition: "Amount of blood pumped in one minute; heart rate times stroke volume." },
  { chapter: 6, term: "Pulmonary Artery", definition: "Carries oxygen-poor blood away from the heart to the lungs." },
  { chapter: 6, term: "Pulmonary Vein", definition: "Carries oxygen-rich blood from the lungs back to the heart." },
  { chapter: 6, term: "Artery", definition: "Blood vessel that carries blood away from the heart." },
  { chapter: 6, term: "Arteriole", definition: "Small branch of an artery that leads blood into capillaries." },
  { chapter: 6, term: "Capillary", definition: "Tiny vessel where oxygen, nutrients, carbon dioxide, and wastes are exchanged." },
  { chapter: 6, term: "Venule", definition: "Small vessel that collects blood leaving capillaries and leads into veins." },
  { chapter: 6, term: "Vein", definition: "Blood vessel that carries blood back to the heart." },
  { chapter: 6, term: "Spleen", definition: "Left upper abdominal organ that filters and stores blood and can bleed severely if injured." },
  { chapter: 6, term: "Plasma", definition: "Liquid portion of blood that carries cells, nutrients, hormones, and wastes." },
  { chapter: 6, term: "Erythrocytes", definition: "Red blood cells that carry oxygen using hemoglobin." },
  { chapter: 6, term: "Hemoglobin", definition: "Protein in red blood cells that binds oxygen and gives blood its red color." },
  { chapter: 6, term: "Leukocytes", definition: "White blood cells that fight infection." },
  { chapter: 6, term: "Platelets", definition: "Blood components that help start clotting." },
  { chapter: 6, term: "Clotting Factors", definition: "Blood proteins that help form stable clots." },
  { chapter: 6, term: "Blood Pressure", definition: "Force of blood pushing against artery walls." },
  { chapter: 6, term: "Systole", definition: "Contraction phase when the left ventricle pumps blood out." },
  { chapter: 6, term: "Diastole", definition: "Relaxation phase when the ventricle fills with blood." },
  { chapter: 6, term: "Hypoperfusion", definition: "Inadequate blood flow to organs and tissues." },
  { chapter: 6, term: "Central Nervous System", definition: "Brain and spinal cord." },
  { chapter: 6, term: "Peripheral Nervous System", definition: "Nerves outside the brain and spinal cord." },
  { chapter: 6, term: "Somatic Nervous System", definition: "Controls voluntary actions such as walking." },
  { chapter: 6, term: "Autonomic Nervous System", definition: "Controls involuntary functions such as heart rate and digestion." },
  { chapter: 6, term: "Cerebrum", definition: "Brain area for thought, memory, sensation, and voluntary movement." },
  { chapter: 6, term: "Cerebellum", definition: "Brain area for coordination and balance." },
  { chapter: 6, term: "Brain Stem", definition: "Controls breathing, heart rate, blood pressure, and consciousness." },
  { chapter: 6, term: "Epidermis", definition: "Outer layer of skin." },
  { chapter: 6, term: "Dermis", definition: "Deeper skin layer containing sweat glands, nerves, and blood vessels." },
  { chapter: 6, term: "Subcutaneous Tissue", definition: "Fatty tissue beneath the skin." },
  { chapter: 6, term: "Cyanosis", definition: "Blue skin or mucous membranes that can indicate low oxygen." },
  { chapter: 6, term: "Pancreas", definition: "Organ involved in digestion and blood glucose regulation." },
  { chapter: 6, term: "Adrenal Glands", definition: "Endocrine glands that release epinephrine and norepinephrine during stress." },
  { chapter: 6, term: "Urinary System", definition: "Kidneys, ureters, bladder, and urethra; filters blood and removes waste through urine." },
  { chapter: 6, term: "Lymphatic System", definition: "System that supports immunity and fluid balance." },


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
  { chapter: 10, term: "Respiratory system", definition: "Body structures that move air and allow oxygen and carbon dioxide exchange." },
  { chapter: 10, term: "Ventilation", definition: "Movement of air between the lungs and the environment." },
  { chapter: 10, term: "Upper airway", definition: "Structures above the vocal cords." },
  { chapter: 10, term: "Main function of the upper airway", definition: "Warm, filter, and humidify incoming air." },
  { chapter: 10, term: "Lower airway", definition: "Structures that carry air from the glottis toward the alveoli and pulmonary capillary membrane." },
  { chapter: 10, term: "Pharynx", definition: "Muscular throat tube connecting the nose and mouth toward the larynx and esophagus." },
  { chapter: 10, term: "Three divisions of the pharynx", definition: "Nasopharynx, oropharynx, and laryngopharynx/hypopharynx." },
  { chapter: 10, term: "Nasopharynx", definition: "Part of the pharynx behind the nose." },
  { chapter: 10, term: "Function of the nasopharynx lining", definition: "Filters particles and helps warm and humidify air." },
  { chapter: 10, term: "Oropharynx", definition: "Portion of the pharynx behind the mouth." },
  { chapter: 10, term: "Laryngopharynx", definition: "Lowest pharynx section; splits toward the larynx and esophagus." },
  { chapter: 10, term: "Larynx", definition: "Voice box and transition point between upper and lower airway." },
  { chapter: 10, term: "Epiglottis", definition: "Flap that protects the airway during swallowing." },
  { chapter: 10, term: "Aspiration", definition: "Entry of foreign material into the airway or lungs." },
  { chapter: 10, term: "Thyroid cartilage", definition: "Cartilage forming the Adam's apple." },
  { chapter: 10, term: "Cricoid cartilage", definition: "Complete ring at the lowest part of the larynx." },
  { chapter: 10, term: "Cricothyroid membrane", definition: "Tissue connecting thyroid cartilage to cricoid cartilage." },
  { chapter: 10, term: "Vocal cords", definition: "Tissue bands involved in speech and airway protection." },
  { chapter: 10, term: "Glottis", definition: "Opening between the vocal cords; narrowest adult airway region." },
  { chapter: 10, term: "Trachea", definition: "Windpipe; carries air toward the lungs." },
  { chapter: 10, term: "Carina", definition: "Location where the trachea splits into right and left mainstem bronchi." },
  { chapter: 10, term: "Mainstem bronchi", definition: "Major airway branches entering the lungs." },
  { chapter: 10, term: "Bronchioles", definition: "Small smooth-muscle airways that can dilate or constrict." },
  { chapter: 10, term: "Alveolar ducts", definition: "Small airway passages leading to alveolar sacs." },
  { chapter: 10, term: "Alveoli", definition: "Tiny air sacs where oxygen and carbon dioxide exchange occurs." },
  { chapter: 10, term: "Pulmonary capillaries", definition: "Small vessels around alveoli involved in gas exchange." },
  { chapter: 10, term: "Oxygen movement at the alveoli", definition: "Oxygen moves from alveoli into pulmonary capillaries." },
  { chapter: 10, term: "Carbon dioxide movement at the alveoli", definition: "Carbon dioxide moves from pulmonary capillaries into alveoli to be exhaled." },
  { chapter: 10, term: "Pleura", definition: "Membrane surrounding the lungs and lining the chest cavity." },
  { chapter: 10, term: "Visceral pleura", definition: "Membrane directly covering the lungs." },
  { chapter: 10, term: "Parietal pleura", definition: "Membrane lining the inside of the chest cavity." },
  { chapter: 10, term: "Mediastinum", definition: "Space between the lungs containing the heart, major vessels, airway structures, and nerves." },
  { chapter: 10, term: "Diaphragm", definition: "Main breathing muscle; contracts downward during inhalation." },
  { chapter: 10, term: "Phrenic nerve", definition: "Nerve that controls diaphragm contraction." },
  { chapter: 10, term: "Intercostal muscles", definition: "Muscles between the ribs that assist breathing." },
  { chapter: 10, term: "Accessory muscles", definition: "Extra muscles used when breathing requires more effort." },
  { chapter: 10, term: "Pediatric occiput difference", definition: "Larger back of the skull may flex the airway when supine." },
  { chapter: 10, term: "Pediatric tongue and jaw difference", definition: "Smaller jaw and larger tongue increase obstruction risk." },
  { chapter: 10, term: "Pediatric epiglottis difference", definition: "More floppy and omega-shaped than an adult's." },
  { chapter: 10, term: "Pediatric narrowest airway point", definition: "Cricoid ring in children younger than 8 years." },
  { chapter: 10, term: "Belly breathers", definition: "Infants and children rely strongly on diaphragm movement." },

  // Chapter 14
  { chapter: 14, term: "NOI", definition: "Nature of illness; the general medical problem causing the EMS call." },
  { chapter: 14, term: "Infectious Disease", definition: "Disease caused by harmful organisms invading and multiplying in the body." },
  { chapter: 14, term: "Communicable Disease", definition: "Disease capable of spreading from person to person or species to species." },
  { chapter: 14, term: "Epidemic", definition: "Disease outbreak affecting more people than expected in a specific area or population." },
  { chapter: 14, term: "Pandemic", definition: "An epidemic that spreads globally across multiple countries or continents." },
  { chapter: 14, term: "Respiratory Emergency", definition: "Emergency involving breathing, ventilation, or oxygenation problems." },
  { chapter: 14, term: "Cardiovascular Emergency", definition: "Emergency involving the heart or blood vessels affecting perfusion." },
  { chapter: 14, term: "Neurologic Emergency", definition: "Emergency affecting the brain, spinal cord, or nervous system." },
  { chapter: 14, term: "Gastrointestinal Emergency", definition: "Emergency involving the digestive system." },
  { chapter: 14, term: "Urologic Emergency", definition: "Emergency involving kidneys, bladder, or urinary system." },
  { chapter: 14, term: "Endocrine Emergency", definition: "Emergency involving hormones or gland dysfunction, commonly diabetes." },
  { chapter: 14, term: "Hematologic Emergency", definition: "Emergency involving blood disorders." },
  { chapter: 14, term: "Immunologic Emergency", definition: "Emergency involving allergic or immune system reactions." },
  { chapter: 14, term: "Standard Precautions", definition: "Infection-control practices used with all patients to reduce exposure risk." },
  { chapter: 14, term: "Destination Selection", definition: "Choosing the most appropriate receiving facility based on patient needs." },

  // Chapter 15
  { chapter: 15, term: "Dyspnea", definition: "Difficulty breathing or shortness of breath." },
  { chapter: 15, term: "Respiratory distress", definition: "Patient is breathing but working hard to maintain oxygenation and ventilation." },
  { chapter: 15, term: "Respiratory failure", definition: "Breathing is inadequate to support the body; may require BVM ventilation." },
  { chapter: 15, term: "Signs of respiratory distress", definition: "Tachypnea, accessory muscle use, tripod position, abnormal breath sounds, difficulty speaking." },
  { chapter: 15, term: "Signs of respiratory failure", definition: "Altered mental status, exhaustion, cyanosis, poor air movement, slow or irregular breathing." },
  { chapter: 15, term: "Tachypnea", definition: "Rapid breathing." },
  { chapter: 15, term: "Bradypnea", definition: "Slow breathing; can be a dangerous sign in a deteriorating patient." },
  { chapter: 15, term: "Cyanosis", definition: "Blue or gray skin color caused by poor oxygenation; often a late sign." },
  { chapter: 15, term: "Tripod position", definition: "Sitting and leaning forward to improve breathing." },
  { chapter: 15, term: "Accessory muscles", definition: "Extra neck and chest muscles used during difficult breathing." },
  { chapter: 15, term: "Adventitious breath sounds", definition: "Abnormal sounds heard during lung auscultation." },
  { chapter: 15, term: "Wheezing", definition: "High-pitched expiratory whistling caused by narrowed lower airways." },
  { chapter: 15, term: "Crackles / rales", definition: "Crackling or bubbling sounds from fluid in alveoli." },
  { chapter: 15, term: "Rhonchi", definition: "Rattling breath sounds from mucus or secretions in larger airways." },
  { chapter: 15, term: "Stridor", definition: "Harsh inspiratory sound from upper-airway obstruction." },
  { chapter: 15, term: "Snoring respirations", definition: "Partial upper-airway obstruction, often involving the tongue." },
  { chapter: 15, term: "Absent breath sounds", definition: "No airflow heard; concerning for severe ventilation problem or pneumothorax." },
  { chapter: 15, term: "Epiglottitis", definition: "Severe upper-airway swelling that may rapidly obstruct breathing." },
  { chapter: 15, term: "Suspected epiglottitis management", definition: "Keep calm, allow upright position, avoid unnecessary airway stimulation, transport promptly." },
  { chapter: 15, term: "Pneumonia", definition: "Infection of lung tissue causing cough, fever, dyspnea, and abnormal breath sounds." },
  { chapter: 15, term: "RSV", definition: "Contagious viral illness affecting lungs and breathing passages, especially serious in children." },
  { chapter: 15, term: "Pertussis", definition: "Whooping cough; contagious respiratory infection." },
  { chapter: 15, term: "Acute pulmonary edema", definition: "Fluid suddenly accumulates in alveoli and lung tissue." },
  { chapter: 15, term: "Common cause of pulmonary edema", definition: "Congestive heart failure." },
  { chapter: 15, term: "Pulmonary edema breath sound", definition: "Crackles, sometimes wheezing." },
  { chapter: 15, term: "Severe pulmonary edema sign", definition: "Frothy pink sputum." },
  { chapter: 15, term: "Orthopnea", definition: "Difficulty breathing while lying flat." },
  { chapter: 15, term: "CPAP", definition: "Positive-pressure support that may improve oxygenation in appropriate alert patients." },
  { chapter: 15, term: "CPAP contraindication examples", definition: "Respiratory arrest, inability to follow commands, hypotension, pneumothorax/chest trauma, tracheostomy, active GI bleeding." },
  { chapter: 15, term: "COPD", definition: "Chronic obstruction and damage of airways and alveoli." },
  { chapter: 15, term: "Chronic bronchitis", definition: "Chronic airway inflammation with increased mucus." },
  { chapter: 15, term: "Emphysema", definition: "Alveolar wall destruction and trapped air." },
  { chapter: 15, term: "COPD common signs", definition: "Wheezing, prolonged exhalation, pursed-lip breathing, tripod position, chronic cough." },
  { chapter: 15, term: "Carbon dioxide retention", definition: "CO\u2082 buildup that may alter mental status in severe COPD." },
  { chapter: 15, term: "Oxygen and COPD", definition: "Do not withhold oxygen from a patient who needs it; monitor closely." },
  { chapter: 15, term: "Asthma", definition: "Lower-airway narrowing caused by bronchospasm, inflammation, and mucus." },
  { chapter: 15, term: "Asthma common sound", definition: "Wheezing." },
  { chapter: 15, term: "Severe asthma warning", definition: "Very little air movement or decreasing wheeze may mean respiratory failure." },
  { chapter: 15, term: "Bronchospasm", definition: "Tightening of airway smooth muscle that narrows breathing passages." },
  { chapter: 15, term: "Bronchodilator", definition: "Medication that relaxes airway muscles and improves airflow." },
  { chapter: 15, term: "Albuterol", definition: "Rapid-acting bronchodilator commonly used for acute asthma or bronchospasm." },
  { chapter: 15, term: "Anaphylaxis", definition: "Life-threatening allergic reaction that may cause airway swelling, bronchospasm, and shock." },
  { chapter: 15, term: "Spontaneous pneumothorax", definition: "Lung collapse caused by air entering pleural space without major injury." },
  { chapter: 15, term: "Pneumothorax signs", definition: "Sudden chest pain, dyspnea, decreased or absent breath sounds on one side." },
  { chapter: 15, term: "Pleural effusion", definition: "Fluid around the lung in the pleural space." },
  { chapter: 15, term: "Pulmonary embolism", definition: "Blood clot blocking pulmonary blood flow." },
  { chapter: 15, term: "Pulmonary embolism clues", definition: "Sudden dyspnea, chest pain, tachycardia, low oxygen, risk factors for clots." },
  { chapter: 15, term: "Hyperventilation", definition: "Excessive breathing that causes carbon dioxide loss." },
  { chapter: 15, term: "Hyperventilation warning", definition: "Rule out serious medical causes before assuming anxiety." },
  { chapter: 15, term: "Environmental/industrial exposure", definition: "Respiratory emergency caused by smoke, gases, fumes, or chemicals." },
  { chapter: 15, term: "Foreign body aspiration", definition: "Material enters the airway and blocks or irritates airflow." },
  { chapter: 15, term: "Tracheostomy dysfunction", definition: "Breathing problem from a blocked, displaced, or malfunctioning tracheostomy tube." },
  { chapter: 15, term: "Cystic fibrosis", definition: "Disease causing thick mucus, airway obstruction, and repeated lung infections." },
  { chapter: 15, term: "Pulse oximeter", definition: "Tool estimating oxygen saturation in the blood." },
  { chapter: 15, term: "Metered-dose inhaler", definition: "Device providing a measured inhaled spray of medication." },
  { chapter: 15, term: "Small-volume nebulizer", definition: "Device turning liquid medication into inhaled mist." },
  { chapter: 15, term: "Rescue inhaler", definition: "Fast-acting medication for acute breathing symptoms, such as albuterol." },
  { chapter: 15, term: "Maintenance inhaler", definition: "Preventive medication that does not immediately relieve an acute breathing emergency." },
  { chapter: 15, term: "Respiratory patient reassessment", definition: "Reassess unstable patients and patients after medication at least every 5 minutes." },
  { chapter: 15, term: "When to use a BVM", definition: "When breathing is inadequate or respiratory failure develops." },

  // Chapter 17
  { chapter: 17, term: "CVA", definition: "Cerebrovascular accident; interruption of blood flow to part of the brain causing loss of brain function." },
  { chapter: 17, term: "Ischemic Stroke", definition: "Stroke caused by blockage of blood flow through a cerebral artery." },
  { chapter: 17, term: "Hemorrhagic Stroke", definition: "Stroke caused by bleeding inside the brain or surrounding spaces." },
  { chapter: 17, term: "TIA", definition: "Transient ischemic attack; stroke-like symptoms that resolve, often warning of future stroke risk." },
  { chapter: 17, term: "Aphasia", definition: "Impaired ability to produce or understand language." },
  { chapter: 17, term: "Dysarthria", definition: "Slurred or poorly articulated speech from motor control problems." },
  { chapter: 17, term: "Ataxia", definition: "Poor coordination or loss of balance." },
  { chapter: 17, term: "Neglect", definition: "Lack of awareness of one side of the body or visual field, often with right hemisphere stroke." },
  { chapter: 17, term: "FAST", definition: "Stroke mnemonic: facial droop, arm drift, speech, and time last known well." },
  { chapter: 17, term: "LAG Scale", definition: "Stroke severity screen assessing level of consciousness, arm drift, and gaze." },
  { chapter: 17, term: "Postictal State", definition: "Recovery period after a seizure with confusion, fatigue, altered responsiveness, or temporary deficits." },
  { chapter: 17, term: "Status Epilepticus", definition: "Prolonged or repeated seizure activity without return to normal consciousness." },
  { chapter: 17, term: "Aura", definition: "Warning sensation before some seizures, such as visual changes, unusual smells, or hallucinations." },
  { chapter: 17, term: "Simple Partial Seizure", definition: "Focal seizure without loss of consciousness." },
  { chapter: 17, term: "Complex Partial Seizure", definition: "Focal seizure with altered awareness or abnormal interaction with the environment." },
  { chapter: 17, term: "Absence Seizure", definition: "Brief seizure with staring and lapse of awareness, usually without major motor activity." },
  { chapter: 17, term: "Syncope", definition: "Fainting; temporary loss of consciousness often with rapid recovery and no prolonged postictal state." },
  { chapter: 17, term: "AEIOU-TIPS", definition: "Memory tool for altered mental status causes including alcohol, epilepsy/endocrine/electrolytes, insulin, overdose, uremia, trauma/temperature, infection, poisoning/psychogenic, and shock/stroke/seizure/syncope." },
  { chapter: 17, term: "Last Known Well", definition: "Most recent time the patient was known to be neurologically normal; critical for stroke treatment decisions." },
  { chapter: 17, term: "Stroke Alert", definition: "Early hospital notification for a suspected stroke patient so the receiving team can prepare time-sensitive care." },

  // Chapter 18
  { chapter: 18, term: "Acute Abdomen", definition: "Sudden abdominal pain that may indicate serious disease requiring prompt assessment and transport." },
  { chapter: 18, term: "Peritonitis", definition: "Inflammation or irritation of the peritoneum, often causing severe abdominal pain, guarding, and possible shock." },
  { chapter: 18, term: "Referred Pain", definition: "Pain felt away from the diseased organ because of shared nerve pathways." },
  { chapter: 18, term: "Hematemesis", definition: "Vomiting blood, which may appear bright red or coffee-ground-like." },
  { chapter: 18, term: "Melena", definition: "Black, tarry stool caused by digested blood in the gastrointestinal tract." },
  { chapter: 18, term: "Mallory-Weiss Tear", definition: "Tear near the junction of the esophagus and stomach after forceful vomiting or retching." },
  { chapter: 18, term: "Renal Calculi", definition: "Kidney stones that may cause severe flank pain radiating toward the groin." },
  { chapter: 18, term: "Dialysis Shunt", definition: "Surgically created vascular access for hemodialysis that should be protected during EMS care." },
  { chapter: 18, term: "Cystitis", definition: "Inflammation or infection of the urinary bladder, often causing painful or frequent urination." },
  { chapter: 18, term: "Rebound Tenderness", definition: "Pain that worsens when pressure is released, suggesting peritoneal irritation." },

  // Chapter 19
  { chapter: 19, term: "Diabetes Mellitus", definition: "Disorder of glucose metabolism involving inadequate insulin effect or production." },
  { chapter: 19, term: "Hypoglycemia", definition: "Abnormally low blood glucose that can rapidly impair brain function and mental status." },
  { chapter: 19, term: "Hyperglycemia", definition: "Abnormally high blood glucose that may lead to dehydration, DKA, or HHNS." },
  { chapter: 19, term: "DKA", definition: "Diabetic ketoacidosis; insulin deficiency causing hyperglycemia, dehydration, ketones, and acidosis." },
  { chapter: 19, term: "Kussmaul Respirations", definition: "Deep, rapid breathing pattern associated with metabolic acidosis such as DKA." },
  { chapter: 19, term: "HHNS", definition: "Hyperosmolar hyperglycemic nonketotic syndrome; severe dehydration and hyperglycemia usually in type 2 diabetes." },
  { chapter: 19, term: "Oral Glucose", definition: "Sugar paste given by mouth to a hypoglycemic patient who can swallow and protect the airway." },
  { chapter: 19, term: "Sickle Cell Crisis", definition: "Painful vasoocclusive episode caused by sickled red blood cells obstructing blood flow." },
  { chapter: 19, term: "Hemophilia A", definition: "Clotting disorder involving factor VIII deficiency and increased bleeding risk." },
  { chapter: 19, term: "Thrombophilia", definition: "Tendency to form abnormal blood clots that may cause DVT or pulmonary embolism." },

  // Chapter 20
  { chapter: 20, term: "Allergic Reaction", definition: "Exaggerated immune response to an allergen." },
  { chapter: 20, term: "Anaphylaxis", definition: "Life-threatening systemic allergic reaction involving airway, breathing, circulation, skin, or GI systems." },
  { chapter: 20, term: "Urticaria", definition: "Hives; raised itchy skin lesions often associated with allergic reactions." },
  { chapter: 20, term: "Angioedema", definition: "Localized swelling, often involving lips, tongue, face, or airway tissues." },
  { chapter: 20, term: "Histamine", definition: "Chemical mediator that contributes to vasodilation, capillary leakage, itching, and swelling." },
  { chapter: 20, term: "Bronchospasm", definition: "Narrowing of lower airways that can cause wheezing and respiratory distress." },
  { chapter: 20, term: "Epinephrine", definition: "First-line medication for severe anaphylaxis that supports perfusion and relieves bronchospasm." },
  { chapter: 20, term: "Auto-Injector", definition: "Predosed device that delivers intramuscular epinephrine, usually into the lateral thigh." },
  { chapter: 20, term: "Systemic Reaction", definition: "Reaction affecting body systems beyond the local exposure site." },
  { chapter: 20, term: "Biphasic Concern", definition: "Risk that anaphylaxis symptoms can recur after initial improvement, requiring transport and monitoring." },

  // Chapter 21
  { chapter: 21, term: "Toxicology", definition: "Study of poisons, toxins, and their effects on the body." },
  { chapter: 21, term: "Inhaled Poison", definition: "Toxin entering through the respiratory tract, such as carbon monoxide or chlorine." },
  { chapter: 21, term: "Absorbed Poison", definition: "Toxin entering through skin or mucous membrane contact." },
  { chapter: 21, term: "Ingested Poison", definition: "Toxin swallowed into the gastrointestinal tract." },
  { chapter: 21, term: "Injected Poison", definition: "Toxin introduced through a bite, sting, needle, or injection route." },
  { chapter: 21, term: "Activated Charcoal", definition: "Medication that binds some swallowed toxins when indicated by protocol or medical control." },
  { chapter: 21, term: "Naloxone", definition: "Opioid antagonist used to reverse opioid-related respiratory depression." },
  { chapter: 21, term: "Cholinergic Toxicity", definition: "Poisoning pattern with excessive secretions, bronchorrhea, bradycardia, GI effects, and possible seizures." },
  { chapter: 21, term: "Anticholinergic Toxicity", definition: "Poisoning pattern often causing hot dry skin, flushed appearance, delirium, and dilated pupils." },
  { chapter: 21, term: "Sympathomimetic", definition: "Stimulant-like toxin causing adrenergic findings such as tachycardia, hypertension, agitation, and diaphoresis." },

  // Chapter 22
  { chapter: 22, term: "Behavioral Crisis", definition: "Behavior that interferes with activities of daily living or creates danger to self or others." },
  { chapter: 22, term: "Organic Brain Syndrome", definition: "Behavioral or mental status change caused by physical brain or body dysfunction." },
  { chapter: 22, term: "Functional Disorder", definition: "Mental or behavioral disorder without an obvious structural cause identified in the field." },
  { chapter: 22, term: "Psychosis", definition: "Loss of contact with reality, possibly involving hallucinations or delusions." },
  { chapter: 22, term: "Agitated Delirium", definition: "Serious condition with agitation, disorientation, hallucinations or delusions, and physiologic stress." },
  { chapter: 22, term: "Verbal De-escalation", definition: "Calm communication used to reduce tension and avoid physical restraint when possible." },
  { chapter: 22, term: "Positional Asphyxia", definition: "Impaired breathing from body position or restraint limiting chest movement or airway patency." },
  { chapter: 22, term: "Least Restrictive Restraint", definition: "Using the minimum restraint needed for safety according to protocol." },
  { chapter: 22, term: "Suicidal Ideation", definition: "Thoughts or statements about self-harm that require direct assessment and safety action." },
  { chapter: 22, term: "PTSD", definition: "Posttraumatic stress disorder; persistent distress after trauma with intrusive memories, avoidance, hyperarousal, or flashbacks." }
];

questionBank.push(
  ...chapter12Questions.map((item) => ({
    chapter: 12,
    topic: "Shock",
    question: item.question,
    answers: item.options,
    correct: item.options.indexOf(item.answer),
    explanation: item.explanation
  }))
);

questionBank.push(
  ...chapter14Questions.map((item) => ({
    chapter: item.chapter,
    topic: item.category,
    question: item.question,
    answers: item.options,
    correct: item.options.indexOf(item.answer),
    explanation: item.explanation
  }))
);

questionBank.push(
  ...chapter16Questions.map((item) => ({
    chapter: 16,
    topic: "Cardiovascular Emergencies",
    question: item.question,
    answers: item.options,
    correct: item.options.indexOf(item.answer),
    explanation: item.explanation
  }))
);

questionBank.push(
  ...chapter17Questions.map((item) => ({
    chapter: item.chapter,
    topic: item.category,
    question: item.question,
    answers: item.options,
    correct: item.options.indexOf(item.answer),
    explanation: item.explanation
  }))
);

questionBank.push(
  ...chapter18Questions.map((item) => ({
    chapter: item.chapter,
    topic: item.category,
    question: item.question,
    answers: item.options,
    correct: item.options.indexOf(item.answer),
    explanation: item.explanation
  }))
);

questionBank.push(
  ...chapter19Questions.map((item) => ({
    chapter: item.chapter,
    topic: item.category,
    question: item.question,
    answers: item.options,
    correct: item.options.indexOf(item.answer),
    explanation: item.explanation
  }))
);

questionBank.push(
  ...chapter20Questions.map((item) => ({
    chapter: item.chapter,
    topic: item.category,
    question: item.question,
    answers: item.options,
    correct: item.options.indexOf(item.answer),
    explanation: item.explanation
  }))
);

questionBank.push(
  ...chapter21Questions.map((item) => ({
    chapter: item.chapter,
    topic: item.category,
    question: item.question,
    answers: item.options,
    correct: item.options.indexOf(item.answer),
    explanation: item.explanation
  }))
);

questionBank.push(
  ...chapter22Questions.map((item) => ({
    chapter: item.chapter,
    topic: item.category,
    question: item.question,
    answers: item.options,
    correct: item.options.indexOf(item.answer),
    explanation: item.explanation
  }))
);

export {
  chapters,
  questionBank,
  flashcards,
  medicalTerminologyQuestions,
  medicalTerminologyFlashcards,
  situationalScenarios,
  chapter12Questions,
  chapter14Questions,
  chapter16Questions,
  chapter17Questions,
  chapter18Questions,
  chapter19Questions,
  chapter20Questions,
  chapter21Questions,
  chapter22Questions
};
