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
    id: 15,
    title: "Respiratory Emergencies",
    description: "Dyspnea, breath sounds, respiratory diseases, oxygen, BVM, CPAP, inhalers, and special airway problems."
  },
  {
    id: 16,
    title: "Chapter 16: Cardiovascular Emergencies",
    description: "Heart anatomy, ACS, cardiac chest pain, CHF, cardiac medications, devices, cardiac arrest, and AED care."
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
  { chapter: 15, term: "When to use a BVM", definition: "When breathing is inadequate or respiratory failure develops." }
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
  ...chapter16Questions.map((item) => ({
    chapter: 16,
    topic: "Cardiovascular Emergencies",
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
  chapter16Questions
};
