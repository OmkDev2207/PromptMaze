import type { Prompt } from '@/types';
import { emailPrompts } from './emails';

const staticPrompts: Prompt[] = [
  // ===================== TEACHERS — LESSON PLANNING =====================
  {
    id: 't-lp-001', slug: 'create-lesson-plan-any-subject', title: 'Create a Complete Lesson Plan for Any Subject',
    content: `You are an experienced curriculum designer. Create a comprehensive lesson plan for the following:\n\nSubject: [SUBJECT]\nGrade Level: [GRADE]\nTopic: [TOPIC]\nDuration: [DURATION]\n\nInclude:\n1. Learning Objectives (3–5 measurable outcomes)\n2. Materials & Resources needed\n3. Introduction / Hook (5 minutes)\n4. Main Instruction (step-by-step)\n5. Guided Practice activity\n6. Independent Practice activity\n7. Closure / Summary\n8. Assessment method\n9. Differentiation strategies for advanced and struggling learners\n10. Homework assignment (optional)\n\nFormat the lesson plan clearly with headers and bullet points.`,
    description: 'Generate a complete, standards-aligned lesson plan for any subject and grade level.',
    useCase: 'Use this when you need to plan a full class period with clear objectives, activities, and assessment.',
    professionSlug: 'teachers', categorySlug: 'lesson-plan-prompts', difficulty: 'beginner',
    exampleOutput: '## Lesson Plan: Photosynthesis — Grade 7 Science (50 min)\n\n**Learning Objectives:**\n1. Students will explain the process of photosynthesis in simple terms\n2. Students will identify the inputs and outputs of photosynthesis\n...',
    tags: ['lesson plan', 'curriculum', 'teaching', 'education', 'classroom'], featured: true,
  },
  {
    id: 't-lp-002', slug: 'differentiated-lesson-plan', title: 'Differentiated Lesson Plan for Mixed-Ability Classrooms',
    content: `Act as a special education specialist and curriculum expert. Create a differentiated lesson plan for:\n\nSubject: [SUBJECT]\nGrade: [GRADE]\nTopic: [TOPIC]\nClass Size: [SIZE]\n\nDesign three versions of the lesson:\n**Tier 1 (Grade Level):** Standard lesson activities\n**Tier 2 (Support):** Modified activities with scaffolding, visual aids, and simplified language\n**Tier 3 (Extension):** Enrichment activities for advanced learners\n\nFor each tier include:\n- Core activity description\n- Materials needed\n- Key vocabulary with definitions\n- Assessment criteria\n- Support strategies\n\nAlso suggest grouping strategies and transition plans between activities.`,
    description: 'Design a fully differentiated lesson plan that works for all ability levels in your classroom.',
    useCase: 'Perfect for inclusive classrooms with diverse learner needs, IEP students, or gifted learners.',
    professionSlug: 'teachers', categorySlug: 'lesson-plan-prompts', difficulty: 'intermediate',
    exampleOutput: '## Differentiated Lesson: Fractions (Grade 4)\n\n### Tier 1 — Grade Level\nActivity: Fraction pizza game where students divide shapes...',
    tags: ['differentiation', 'lesson plan', 'inclusive education', 'IEP', 'mixed ability'], featured: true,
  },
  {
    id: 't-lp-003', slug: 'project-based-learning-unit', title: 'Design a Project-Based Learning (PBL) Unit',
    content: `You are an instructional design expert specializing in project-based learning. Create a PBL unit for:\n\nSubject: [SUBJECT]\nGrade Level: [GRADE]\nDuration: [WEEKS] weeks\nDriving Question: [QUESTION or write: "Generate a compelling driving question"]\n\nInclude:\n1. **Driving Question** (if not provided)\n2. **Learning Standards** addressed\n3. **Final Product** students will create\n4. **Week-by-week breakdown** with milestones\n5. **Checkpoints & formative assessments**\n6. **Required resources** (materials, technology, experts)\n7. **Student roles** within project teams\n8. **Rubric** for final product evaluation\n9. **Real-world connection** and community tie-in\n10. **Reflection prompts** for students`,
    description: 'Build an entire project-based learning unit with driving questions, milestones, and rubrics.',
    useCase: 'Use when designing multi-week thematic units that connect learning to real-world problems.',
    professionSlug: 'teachers', categorySlug: 'lesson-plan-prompts', difficulty: 'advanced',
    exampleOutput: '## PBL Unit: "How Can We Reduce Food Waste in Our School?" — Grade 6\n\n**Driving Question:** How can we design a practical solution to reduce food waste in our school cafeteria?\n\n**Week 1:** Research & Investigation...',
    tags: ['PBL', 'project-based learning', 'unit plan', 'real world learning'], featured: false,
  },
  {
    id: 't-lp-004', slug: 'emergency-substitute-lesson-plan', title: 'Emergency Substitute Teacher Lesson Plan',
    content: `Create an easy-to-follow emergency lesson plan for a substitute teacher covering:\n\nSubject: [SUBJECT]\nGrade: [GRADE]\nDuration: [DURATION]\n\nThe plan must:\n- Require no prior subject knowledge from the substitute\n- Use only standard classroom materials\n- Keep students engaged and learning\n- Include very clear step-by-step instructions\n- Have a backup activity if students finish early\n- Include classroom management tips\n\nFormat with large headers so the substitute can follow at a glance.`,
    description: 'Create a foolproof lesson plan that any substitute teacher can execute with minimal preparation.',
    useCase: 'Keep this ready for sick days or emergencies so learning continues in your absence.',
    professionSlug: 'teachers', categorySlug: 'lesson-plan-prompts', difficulty: 'beginner',
    exampleOutput: '## SUBSTITUTE LESSON PLAN — DO NOT MODIFY\n\n**Subject:** English | **Grade:** 5th | **Time:** 45 minutes\n\n**Materials on desk:** Worksheet packets (labeled by row), timer\n\n**Step 1 (0–5 min):** Take attendance using the seating chart...',
    tags: ['substitute', 'emergency plan', 'lesson plan', 'classroom management'], featured: false,
  },
  {
    id: 't-lp-005', slug: 'standards-aligned-unit-map', title: 'Create a Standards-Aligned Unit Map',
    content: `Act as a curriculum coordinator. Create a comprehensive unit map for:\n\nSubject: [SUBJECT]\nGrade: [GRADE]\nUnit Title: [TITLE]\nDuration: [NUMBER] weeks\nState Standards: [STANDARDS or "Common Core"]\n\nProvide:\n1. **Unit Overview** (2–3 sentences)\n2. **Essential Questions** (3–5)\n3. **Enduring Understandings** students will carry forward\n4. **Standards Addressed** (list each)\n5. **Daily lesson topics** (one per day, organized by week)\n6. **Formative assessments** (embedded throughout)\n7. **Summative assessment** description\n8. **Key Vocabulary** list\n9. **Interdisciplinary connections**\n10. **Suggested resources** (books, websites, videos)`,
    description: 'Map out an entire unit with standards alignment, essential questions, and daily lesson sequence.',
    useCase: 'Ideal for long-range planning, department meetings, or curriculum alignment reviews.',
    professionSlug: 'teachers', categorySlug: 'lesson-plan-prompts', difficulty: 'intermediate',
    exampleOutput: '## Unit Map: The American Revolution — Grade 8 Social Studies (3 weeks)\n\n**Essential Questions:**\n1. What causes people to rebel against authority?\n2. How do revolutionary ideas spread?\n...',
    tags: ['unit map', 'curriculum planning', 'standards alignment', 'scope and sequence'], featured: false,
  },

  // ===================== TEACHERS — QUIZ GENERATION =====================
  {
    id: 't-qz-001', slug: 'multiple-choice-quiz-generator', title: 'Generate a Multiple Choice Quiz',
    content: `You are an assessment specialist. Create a multiple-choice quiz on:\n\nSubject: [SUBJECT]\nTopic: [TOPIC]\nGrade Level: [GRADE]\nNumber of Questions: [NUMBER]\nDifficulty: [easy/medium/hard/mixed]\n\nFor each question:\n- Write a clear, unambiguous question stem\n- Provide 4 answer choices (A, B, C, D)\n- Make distractors plausible (not obviously wrong)\n- Avoid "all of the above" and "none of the above"\n- Include the correct answer key at the end\n- Add a brief explanation for each correct answer\n\nOrganize questions from easiest to hardest. Include a mix of recall, comprehension, and application questions.`,
    description: 'Generate professional multiple-choice quizzes with answer keys and explanations.',
    useCase: 'Quick assessment creation for unit tests, exit tickets, or review sessions.',
    professionSlug: 'teachers', categorySlug: 'quiz-prompts', difficulty: 'beginner',
    exampleOutput: '## Quiz: Cell Biology — Grade 9\n\n1. What is the powerhouse of the cell?\n   A) Nucleus\n   B) Mitochondria ✓\n   C) Ribosome\n   D) Golgi Apparatus\n\n*Explanation: The mitochondria produce ATP through cellular respiration...*',
    tags: ['quiz', 'multiple choice', 'assessment', 'test creation'], featured: true,
  },
  {
    id: 't-qz-002', slug: 'essay-question-generator', title: 'Create Thought-Provoking Essay Questions',
    content: `Create a set of essay questions for:\n\nSubject: [SUBJECT]\nTopic/Unit: [TOPIC]\nGrade Level: [GRADE]\nBloom's Level: [remember/understand/apply/analyze/evaluate/create]\nNumber of Questions: [NUMBER]\n\nFor each question provide:\n1. The essay prompt (clear and specific)\n2. Word count expectation\n3. Scoring rubric (4-point scale)\n4. Key points students should address\n5. Sample strong response outline\n\nMake questions that promote critical thinking and cannot be answered by memorization alone.`,
    description: 'Generate high-quality essay prompts with rubrics aligned to Bloom\'s taxonomy.',
    useCase: 'Create meaningful writing assessments that measure deep understanding.',
    professionSlug: 'teachers', categorySlug: 'quiz-prompts', difficulty: 'intermediate',
    exampleOutput: '## Essay Prompt: The Great Gatsby\n\n**Prompt:** Analyze how F. Scott Fitzgerald uses the green light as a symbol throughout the novel. What does it ultimately represent about the American Dream?\n\n**Rubric (4-point scale):**\n4 — Clear thesis, specific textual evidence, sophisticated analysis...',
    tags: ['essay questions', 'writing assessment', 'Bloom\'s taxonomy', 'critical thinking'], featured: false,
  },
  {
    id: 't-qz-003', slug: 'exit-ticket-creator', title: 'Create Quick Exit Ticket Questions',
    content: `Design a set of exit ticket questions to check for understanding at the end of a lesson on:\n\nTopic: [TOPIC]\nGrade: [GRADE]\nKey Concept Taught Today: [CONCEPT]\n\nCreate:\n1. **3–2–1 Exit Ticket:** 3 things they learned, 2 interesting things, 1 question they still have\n2. **Quick Check (3 questions):** One recall, one comprehension, one reflection\n3. **Tweet Summary:** Ask students to summarize the lesson in 280 characters\n4. **Muddiest Point:** What was most confusing today and why?\n\nKeep all questions brief enough to complete in 3–5 minutes.`,
    description: 'Create fast, effective exit ticket activities to gauge student understanding before dismissal.',
    useCase: 'Use at the end of every class to identify gaps and inform tomorrow\'s instruction.',
    professionSlug: 'teachers', categorySlug: 'quiz-prompts', difficulty: 'beginner',
    exampleOutput: '## Exit Tickets: Introduction to Algebra\n\n**3-2-1:**\n3 things I learned: variables, expressions, equations\n2 interesting things: algebra is used in coding, ancient Egyptians used algebra\n1 question I still have: Why do we use letters instead of just question marks?',
    tags: ['exit ticket', 'formative assessment', 'quick check', 'comprehension check'], featured: true,
  },
  {
    id: 't-qz-004', slug: 'reading-comprehension-questions', title: 'Generate Reading Comprehension Questions',
    content: `Create reading comprehension questions for the following text or topic:\n\nText/Topic: [PASTE TEXT OR DESCRIBE TOPIC]\nGrade Level: [GRADE]\nReading Level: [LEVEL]\n\nCreate questions across all comprehension levels:\n**Literal (What the text says):** 3 questions\n**Inferential (Reading between the lines):** 3 questions  \n**Critical (Evaluating and connecting):** 2 questions\n**Vocabulary in Context:** 2 questions (pick challenging words from the text)\n\nAlso create:\n- A text-dependent discussion question for whole class\n- A writing extension prompt\n- An answer key with page/paragraph references`,
    description: 'Generate comprehensive reading questions that assess all levels of text understanding.',
    useCase: 'Perfect for novel studies, informational text units, or any assigned reading.',
    professionSlug: 'teachers', categorySlug: 'quiz-prompts', difficulty: 'beginner',
    exampleOutput: '## Reading Comprehension: "Animal Farm" Chapter 1\n\n**Literal:**\n1. What does Old Major\'s dream describe? (Answer: A farm where animals are free from human oppression)\n\n**Inferential:**\n4. What does the pigs\' ability to read suggest about the coming conflict?',
    tags: ['reading comprehension', 'questions', 'literacy', 'novel study'], featured: false,
  },
  {
    id: 't-qz-005', slug: 'vocabulary-quiz-builder', title: 'Build a Vocabulary Quiz and Activities',
    content: `Create a vocabulary quiz and learning activities for:\n\nSubject: [SUBJECT]\nUnit/Topic: [TOPIC]\nGrade: [GRADE]\nVocabulary Words: [LIST WORDS or "Generate appropriate vocabulary for this topic"]\n\nCreate:\n1. **Matching section** (words to definitions)\n2. **Fill-in-the-blank sentences** (10 sentences using context clues)\n3. **Word in context** (3 short paragraphs with underlined vocabulary to define)\n4. **Analogies section** (5 analogies using vocabulary words)\n5. **Creative use** (use 5 vocabulary words in an original paragraph)\n\nAlso suggest 3 vocabulary games/activities for pre-teaching these words.`,
    description: 'Build complete vocabulary quizzes with multiple sections and pre-teaching activity suggestions.',
    useCase: 'Create comprehensive vocabulary assessments that go beyond simple definition matching.',
    professionSlug: 'teachers', categorySlug: 'quiz-prompts', difficulty: 'intermediate',
    exampleOutput: '## Vocabulary Quiz: Civil War Era\n\nWords: Abolitionist, Confederacy, Emancipation, Secession, Union\n\n**Part 1 — Matching:**\n1. Abolitionist — B) A person who fought to end slavery\n...',
    tags: ['vocabulary', 'quiz', 'word study', 'language arts'], featured: false,
  },

  // ===================== TEACHERS — PARENT COMMUNICATION =====================
  {
    id: 't-pc-001', slug: 'progress-report-email-template', title: 'Write a Progress Report Email to Parents',
    content: `Write a professional, warm parent communication about a student's academic progress:\n\nStudent Name: [NAME] (use "your child" in the letter)\nSubject: [SUBJECT]\nCurrent Grade: [GRADE]\nKey Strengths: [STRENGTHS]\nAreas for Improvement: [AREAS]\nSpecific Incidents/Observations: [DETAILS]\nTone needed: [concerned/positive/neutral/urgent]\n\nThe email should:\n- Be warm but professional\n- Lead with a positive observation\n- Be specific (not generic)\n- Suggest concrete ways parents can help at home\n- Invite dialogue and questions\n- Be under 300 words\n- Include a clear call-to-action (conference request, reply, etc.)`,
    description: 'Write personalized, professional progress report emails that parents will appreciate and act on.',
    useCase: 'Use for mid-term updates, concern communications, or any parent outreach about grades.',
    professionSlug: 'teachers', categorySlug: 'parent-communication-prompts', difficulty: 'beginner',
    exampleOutput: 'Subject: An Update on [Child\'s] Progress in Math\n\nDear Mr. and Mrs. Johnson,\n\nI wanted to reach out personally to share some observations about your child\'s recent work in 7th grade math...',
    tags: ['parent email', 'progress report', 'communication', 'parent outreach'], featured: true,
  },
  {
    id: 't-pc-002', slug: 'behavior-concern-letter', title: 'Write a Behavior Concern Letter to Parents',
    content: `Write a sensitive, professional letter to parents about a behavior concern:\n\nStudent: [STUDENT NAME]\nBehavior Issue: [DESCRIBE BEHAVIOR]\nFrequency/Pattern: [HOW OFTEN]\nImpact: [HOW IT AFFECTS LEARNING]\nSteps Already Taken: [WHAT YOU'VE TRIED]\n\nThe letter must:\n- Be factual and non-judgmental\n- Describe specific behaviors (not character judgments)\n- Acknowledge the child's positive qualities\n- Explain the impact on learning\n- Propose a collaborative solution\n- Request a conference\n- Maintain a tone of partnership, not accusation\n\nKeep it under 400 words. No blaming language.`,
    description: 'Craft sensitive behavior concern letters that open dialogue without putting parents on the defensive.',
    useCase: 'Use when a student\'s behavior requires parent involvement and a partnership approach.',
    professionSlug: 'teachers', categorySlug: 'parent-communication-prompts', difficulty: 'intermediate',
    exampleOutput: 'Dear Ms. Thompson,\n\nThank you for entrusting [your child] to our class this year. I am writing to share some observations and to invite your partnership in supporting [their] success...',
    tags: ['behavior', 'parent letter', 'discipline', 'student support'], featured: false,
  },
  {
    id: 't-pc-003', slug: 'classroom-newsletter-template', title: 'Write a Monthly Classroom Newsletter',
    content: `Create an engaging, informative monthly classroom newsletter for parents:\n\nMonth/Unit: [MONTH/CURRENT UNIT]\nGrade: [GRADE]\nSubject(s): [SUBJECTS]\nUpcoming Events: [LIST EVENTS]\nKey Learning This Month: [TOPICS COVERED]\nStar Students/Celebrations: [OPTIONAL]\nReminders: [ANY REMINDERS]\n\nNewsletter structure:\n1. **Welcome/Month Intro** (2–3 sentences, warm tone)\n2. **What We're Learning** (brief, parent-friendly summaries)\n3. **Upcoming Dates** (bulleted calendar)\n4. **How to Help at Home** (3 practical tips)\n5. **Class Shoutouts** (optional celebrations)\n6. **Reminders** (supplies, permissions, etc.)\n7. **Contact Info & Office Hours**\n\nKeep it engaging, skimmable, and under 500 words.`,
    description: 'Create engaging classroom newsletters that keep parents informed and excited about learning.',
    useCase: 'Monthly or bi-monthly parent communication to build community and transparency.',
    professionSlug: 'teachers', categorySlug: 'parent-communication-prompts', difficulty: 'beginner',
    exampleOutput: '## 🌟 Room 14 Rundown — November 2024\n\n**Hello Families!**\nNovember is off to an amazing start! We have been diving deep into our ecosystems unit and the class\'s curiosity is absolutely contagious...',
    tags: ['newsletter', 'parent communication', 'classroom community', 'monthly update'], featured: false,
  },

  // ===================== TEACHERS — CLASSROOM ACTIVITIES =====================
  {
    id: 't-ca-001', slug: 'think-pair-share-activities', title: 'Design Think-Pair-Share Activities',
    content: `Create a set of Think-Pair-Share (TPS) activities for:\n\nSubject: [SUBJECT]\nTopic: [TOPIC]\nGrade: [GRADE]\nClass Duration: [DURATION]\n\nDesign 5 TPS activities that:\n1. Start with a thought-provoking question or scenario\n2. Give individual thinking time guidance (what to jot down)\n3. Provide pair discussion prompts (specific talking points)\n4. Suggest whole-class sharing structure\n5. Connect to the lesson's main objective\n\nAlso include:\n- Timing suggestions for each phase\n- Sentence starters for English language learners\n- Modification for online/hybrid classes\n- How to ensure all students share, not just confident ones`,
    description: 'Create structured Think-Pair-Share activities that get every student actively engaged.',
    useCase: 'Increase participation and deepen understanding during any lesson.',
    professionSlug: 'teachers', categorySlug: 'classroom-activity-prompts', difficulty: 'beginner',
    exampleOutput: '## TPS Activity 1: Cause and Effect in WWII\n\n**Prompt:** "If you were a European leader in 1939, what would be your biggest concern and why?"\n\n**Think (2 min):** Write 2–3 bullet points...\n**Pair (3 min):** Share your reasoning. Find one point you agree on and one you disagree on...',
    tags: ['think pair share', 'discussion', 'active learning', 'participation'], featured: true,
  },
  {
    id: 't-ca-002', slug: 'breakout-room-activity-design', title: 'Design Collaborative Breakout Group Activities',
    content: `Design a collaborative small-group activity for:\n\nSubject: [SUBJECT]\nTopic: [TOPIC]\nGrade: [GRADE]\nGroup Size: [SIZE]\nTotal Time: [TIME]\n\nCreate a structured activity including:\n1. **Clear group task** (specific and achievable in time given)\n2. **Student roles** (facilitator, recorder, timekeeper, presenter)\n3. **Step-by-step instructions** students can follow without teacher help\n4. **Discussion questions** to guide the work\n5. **Product/deliverable** they will create\n6. **Presentation format** (how they share back with class)\n7. **Self-assessment checklist** for groups\n8. **Teacher monitoring guide** (what to look for while circulating)\n\nMake instructions simple enough that groups can start without clarification.`,
    description: 'Create self-sufficient group activities with clear roles, tasks, and deliverables.',
    useCase: 'Use for collaborative inquiry, review sessions, or problem-solving tasks.',
    professionSlug: 'teachers', categorySlug: 'classroom-activity-prompts', difficulty: 'intermediate',
    exampleOutput: '## Group Activity: Ecosystem Food Web Challenge\n\n**Task:** Your group will create a food web for a specific biome and present it to the class.\n\n**Roles:**\n- Facilitator: Keeps discussion on track\n- Recorder: Documents all decisions\n...',
    tags: ['group work', 'collaboration', 'cooperative learning', 'breakout rooms'], featured: false,
  },

  // ===================== TEACHERS — STUDENT FEEDBACK =====================
  {
    id: 't-sf-001', slug: 'personalized-written-feedback', title: 'Write Personalized Student Feedback',
    content: `Write specific, encouraging, and actionable written feedback for a student's work:\n\nAssignment Type: [ESSAY/PROJECT/PRESENTATION/TEST]\nStudent's Work Summary: [DESCRIBE WHAT THEY SUBMITTED]\nStrengths Observed: [WHAT THEY DID WELL]\nAreas to Improve: [WHAT NEEDS WORK]\nCurrent Grade: [GRADE]\nStudent's Learning Profile: [any relevant info: ESL, struggling, advanced, etc.]\n\nFeedback should:\n- Start with a specific strength (not generic "good job")\n- Use the "sandwich" method (positive → growth → encouragement)\n- Be specific with examples from their actual work\n- Give 1–2 clear, actionable next steps\n- End with encouragement that builds self-efficacy\n- Be written TO the student in second person (you/your)\n- Stay under 150 words`,
    description: 'Generate specific, motivating written feedback that actually helps students improve.',
    useCase: 'Use for any written assignment, project, or assessment where you need individualized comments.',
    professionSlug: 'teachers', categorySlug: 'student-feedback-prompts', difficulty: 'beginner',
    exampleOutput: 'Your introduction paragraph immediately grabbed my attention with that powerful statistic — well done choosing evidence that matters! Your argument becomes even stronger in the body paragraphs when you connect civil rights to economic equality.\n\nTo make this essay excellent: strengthen your conclusion by revisiting your opening hook and stating what changed because of the movement, not just what happened. Try rewriting just the last paragraph with that lens.\n\nYou have a genuine voice as a writer — keep developing it!',
    tags: ['feedback', 'written comments', 'student growth', 'assessment feedback'], featured: true,
  },

  // ===================== DEVELOPERS — DEBUGGING =====================
  {
    id: 'd-db-001', slug: 'debug-error-message', title: 'Debug Any Error Message Step by Step',
    content: `You are a senior software engineer and debugging expert. Help me debug the following error:\n\n**Error Message:**\n[PASTE ERROR MESSAGE]\n\n**Code Context:**\n\`\`\`[LANGUAGE]\n[PASTE RELEVANT CODE]\n\`\`\`\n\n**What I was trying to do:**\n[DESCRIBE WHAT YOU WERE DOING]\n\n**What I've already tried:**\n[LIST ATTEMPTS]\n\nPlease:\n1. Explain what this error means in plain English\n2. Identify the root cause\n3. Provide the exact fix with corrected code\n4. Explain WHY this fix works\n5. List 2–3 ways to prevent this error in the future\n6. Note any related issues I should watch for`,
    description: 'Get a thorough, educational explanation and fix for any error message in any programming language.',
    useCase: 'Use when you hit a confusing error and want both the fix and an understanding of the root cause.',
    professionSlug: 'developers', categorySlug: 'debugging-prompts', difficulty: 'beginner',
    exampleOutput: '## Error Analysis: TypeError: Cannot read properties of undefined\n\n**Plain English:** You\'re trying to access a property on a variable that is `undefined` at that point in the code...\n\n**Root Cause:** The `user` object hasn\'t been fetched yet when the component tries to render `user.name`...',
    tags: ['debugging', 'error fixing', 'troubleshooting', 'code help'], featured: true,
  },
  {
    id: 'd-db-002', slug: 'performance-bottleneck-analysis', title: 'Identify and Fix Performance Bottlenecks',
    content: `Act as a performance engineering expert. Analyze the following code for performance issues:\n\n**Language/Framework:** [LANGUAGE]\n**Code:**\n\`\`\`\n[PASTE CODE]\n\`\`\`\n**Performance Problem:** [DESCRIBE: slow load, memory leak, high CPU, etc.]\n**Current Metrics:** [RESPONSE TIME, MEMORY USAGE, etc. if known]\n**Scale:** [HOW MANY USERS/REQUESTS]\n\nProvide:\n1. **Performance audit** (identify all bottlenecks, ranked by severity)\n2. **Root cause analysis** for each bottleneck\n3. **Optimized code** with specific fixes applied\n4. **Expected improvement** for each fix\n5. **Profiling tools** to use for verification\n6. **Monitoring strategies** to catch these issues early`,
    description: 'Get a detailed performance audit with ranked bottlenecks, fixes, and expected improvements.',
    useCase: 'Use when your application is slow and you need systematic performance improvements.',
    professionSlug: 'developers', categorySlug: 'debugging-prompts', difficulty: 'advanced',
    exampleOutput: '## Performance Audit: Express.js API\n\n**Critical (Fix First):**\n1. N+1 Query Problem in `/users` endpoint — fetching user then their posts individually\n   - Fix: Use JOIN or populate() to fetch in one query\n   - Expected improvement: 80% reduction in DB calls...',
    tags: ['performance', 'optimization', 'bottleneck', 'profiling', 'speed'], featured: false,
  },
  {
    id: 'd-db-003', slug: 'regex-pattern-builder', title: 'Build and Debug Regular Expressions',
    content: `You are a regex expert. Help me create/debug a regular expression for:\n\n**Task:** [DESCRIBE WHAT YOU NEED TO MATCH]\n**Programming Language:** [LANGUAGE]\n**Example Strings to Match:**\n- [EXAMPLE 1]\n- [EXAMPLE 2]\n- [EXAMPLE 3]\n\n**Strings that SHOULD NOT match:**\n- [EXAMPLE 1]\n- [EXAMPLE 2]\n\n**Existing regex (if debugging):** [PASTE REGEX]\n\nProvide:\n1. The correct regex pattern\n2. Visual breakdown of each component\n3. Test cases showing matches and non-matches\n4. Alternative patterns (if multiple approaches exist)\n5. Code snippet showing how to use it in [LANGUAGE]\n6. Edge cases to watch for`,
    description: 'Build, debug, and understand regular expressions with visual breakdowns and test cases.',
    useCase: 'Use when you need to validate input, parse text, or extract patterns from strings.',
    professionSlug: 'developers', categorySlug: 'debugging-prompts', difficulty: 'intermediate',
    exampleOutput: '## Regex: Email Validation\n\n**Pattern:** `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$`\n\n**Breakdown:**\n- `^` — Start of string\n- `[a-zA-Z0-9._%+-]+` — One or more valid username characters\n- `@` — Literal @ symbol\n...',
    tags: ['regex', 'regular expressions', 'pattern matching', 'validation'], featured: false,
  },
  {
    id: 'd-db-004', slug: 'api-debugging-guide', title: 'Debug API Integration Issues',
    content: `Act as an API integration specialist. Help me debug my API issue:\n\n**API Being Used:** [API NAME]\n**Method & Endpoint:** [GET/POST/PUT/DELETE] [URL]\n**Request Code:**\n\`\`\`\n[PASTE YOUR REQUEST CODE]\n\`\`\`\n**Response Received:**\n\`\`\`\n[PASTE RESPONSE / ERROR]\n\`\`\`\n**Expected Response:** [WHAT YOU EXPECTED]\n**Auth Method:** [API KEY / OAUTH / JWT / etc.]\n\nDiagnose:\n1. What the error code/response means\n2. Likely causes (auth, headers, payload format, rate limits)\n3. Corrected request code\n4. How to test the fix\n5. Common gotchas for this API\n6. Logging strategy for future debugging`,
    description: 'Systematically debug any API integration with corrected code and prevention strategies.',
    useCase: 'Use when REST API calls are failing, returning wrong data, or throwing auth errors.',
    professionSlug: 'developers', categorySlug: 'debugging-prompts', difficulty: 'intermediate',
    exampleOutput: '## API Debug: 401 Unauthorized — Stripe API\n\n**Root Cause:** The Authorization header is missing the "Bearer " prefix\n\n**Your code:**\n`headers: { Authorization: process.env.STRIPE_KEY }`\n\n**Fix:**\n`headers: { Authorization: \`Bearer ${process.env.STRIPE_KEY}\` }`',
    tags: ['API', 'REST', 'debugging', 'integration', 'HTTP'], featured: true,
  },
  {
    id: 'd-db-005', slug: 'memory-leak-detection', title: 'Detect and Fix Memory Leaks',
    content: `Act as a systems programming expert specializing in memory management. Analyze the following for memory leaks:\n\n**Language/Runtime:** [LANGUAGE/RUNTIME]\n**Code:**\n\`\`\`\n[PASTE CODE]\n\`\`\`\n**Symptoms:** [DESCRIBE: increasing memory, crashes, slowdowns]\n**When does it occur?** [AFTER X REQUESTS / OVER TIME / etc.]\n\nProvide:\n1. Memory leak identification (mark exact lines)\n2. Explanation of why each leak occurs\n3. Fixed code with annotations\n4. Memory management best practices for this language\n5. Tools to profile memory (e.g., Chrome DevTools, Valgrind, heapdump)\n6. Testing strategy to verify fix`,
    description: 'Identify, explain, and fix memory leaks with profiling recommendations.',
    useCase: 'Use when your app\'s memory usage keeps growing or crashes after extended use.',
    professionSlug: 'developers', categorySlug: 'debugging-prompts', difficulty: 'advanced',
    exampleOutput: '## Memory Leak Analysis: Node.js Event Listener\n\n**Leak Found (Line 23):** Event listeners added inside a loop but never removed.\n\n**Why it leaks:** Each function call adds a new listener without cleanup, causing accumulation...',
    tags: ['memory leak', 'performance', 'node.js', 'debugging', 'optimization'], featured: false,
  },

  // ===================== DEVELOPERS — CODE REVIEW =====================
  {
    id: 'd-cr-001', slug: 'comprehensive-code-review', title: 'Perform a Comprehensive Code Review',
    content: `Act as a senior engineer conducting a thorough code review. Review the following code:\n\n**Language/Framework:** [LANGUAGE]\n**Purpose of this code:** [WHAT IT DOES]\n**Code:**\n\`\`\`\n[PASTE CODE]\n\`\`\`\n\nReview for:\n1. **Correctness** — Does it do what it's supposed to?\n2. **Security** — SQL injection, XSS, CSRF, insecure data handling\n3. **Performance** — Unnecessary loops, N+1 queries, unoptimized algorithms\n4. **Readability** — Naming, comments, code organization\n5. **Maintainability** — Coupling, cohesion, SOLID principles\n6. **Error Handling** — Edge cases, exceptions, failure modes\n7. **Testing** — Testability and suggested test cases\n\nFormat as: 🔴 Critical | 🟡 Warning | 🟢 Suggestion\nProvide specific line references and improved code snippets.`,
    description: 'Get a senior-engineer-level code review with security, performance, and maintainability analysis.',
    useCase: 'Use before merging PRs, submitting work, or when you want expert eyes on critical code.',
    professionSlug: 'developers', categorySlug: 'code-review-prompts', difficulty: 'intermediate',
    exampleOutput: '## Code Review: UserAuthService.js\n\n🔴 **Critical — SQL Injection (Line 34):**\n```js\n// BAD:\ndb.query(`SELECT * FROM users WHERE email = \'${email}\'`)\n// FIXED:\ndb.query(\'SELECT * FROM users WHERE email = ?\', [email])\n```\n\n🟡 **Warning — Missing Error Handling (Line 52):**...',
    tags: ['code review', 'security', 'best practices', 'pull request'], featured: true,
  },
  {
    id: 'd-cr-002', slug: 'security-audit-code', title: 'Security Audit Your Code',
    content: `You are a cybersecurity expert and secure code reviewer. Perform a security audit on:\n\n**Application Type:** [WEB APP / API / MOBILE / DESKTOP]\n**Language/Framework:** [LANGUAGE]\n**Code:**\n\`\`\`\n[PASTE CODE]\n\`\`\`\n\nCheck for OWASP Top 10 vulnerabilities:\n1. Injection (SQL, NoSQL, Command)\n2. Broken Authentication\n3. Sensitive Data Exposure\n4. XML External Entities\n5. Broken Access Control\n6. Security Misconfiguration\n7. Cross-Site Scripting (XSS)\n8. Insecure Deserialization\n9. Using Components with Known Vulnerabilities\n10. Insufficient Logging\n\nFor each issue found:\n- Severity (Critical/High/Medium/Low)\n- Exact location\n- Attack scenario\n- Remediation code`,
    description: 'Full OWASP Top 10 security audit with attack scenarios and remediation code.',
    useCase: 'Run before any security-sensitive deployment, especially auth systems and APIs.',
    professionSlug: 'developers', categorySlug: 'code-review-prompts', difficulty: 'advanced',
    exampleOutput: '## Security Audit Report\n\n### CRITICAL: SQL Injection\n**Location:** `/api/users/search` line 45\n**Attack Scenario:** Attacker inputs `\' OR 1=1 --` to dump entire users table\n**Fix:** Use parameterized queries...',
    tags: ['security', 'OWASP', 'audit', 'vulnerabilities', 'secure coding'], featured: false,
  },

  // ===================== DEVELOPERS — REFACTORING =====================
  {
    id: 'd-rf-001', slug: 'refactor-legacy-code', title: 'Refactor Legacy Code to Modern Standards',
    content: `Act as a lead engineer specializing in legacy code modernization. Refactor the following code:\n\n**Language:** [LANGUAGE]\n**Current Version/Standard:** [e.g., "ES5 JavaScript", "Python 2.7"]\n**Target Version/Standard:** [e.g., "ES2023", "Python 3.12"]\n**Code:**\n\`\`\`\n[PASTE CODE]\n\`\`\`\n\nRefactoring goals:\n1. Update syntax to modern standards\n2. Replace deprecated APIs/methods\n3. Improve naming conventions\n4. Extract functions for better reusability\n5. Add proper error handling\n6. Remove code duplication (DRY)\n7. Add TypeScript types (if applicable)\n\nProvide:\n- Side-by-side before/after comparison\n- Explanation of each change\n- Migration notes for breaking changes\n- Suggested tests to verify behavior preserved`,
    description: 'Modernize legacy code with systematic refactoring and clear before/after comparisons.',
    useCase: 'Use when inheriting old code that needs updating to current standards.',
    professionSlug: 'developers', categorySlug: 'refactoring-prompts', difficulty: 'intermediate',
    exampleOutput: '## Refactoring: Callback Hell → Async/Await\n\n**Before (ES5):**\n```js\ngetUser(id, function(err, user) {\n  if (err) { handleError(err); return; }\n  getPosts(user.id, function(err, posts) {...})\n})\n```\n\n**After (ES2023):**\n```js\ntry {\n  const user = await getUser(id)\n  const posts = await getPosts(user.id)\n} catch (err) { handleError(err) }\n```',
    tags: ['refactoring', 'legacy code', 'modernization', 'clean code'], featured: true,
  },

  // ===================== DEVELOPERS — DOCUMENTATION =====================
  {
    id: 'd-dc-001', slug: 'write-readme-file', title: 'Write a Professional README.md',
    content: `Create a comprehensive, professional README.md for the following project:\n\n**Project Name:** [NAME]\n**What it does:** [DESCRIPTION]\n**Tech Stack:** [TECHNOLOGIES]\n**Target Users:** [WHO USES IT]\n**Key Features:** [LIST FEATURES]\n**Setup complexity:** [simple/moderate/complex]\n\nREADME must include:\n1. **Project banner/logo placeholder**\n2. **Badges** (build status, version, license)\n3. **One-line description** (elevator pitch)\n4. **Features list** (bullet points with emojis)\n5. **Tech stack** with version numbers\n6. **Prerequisites**\n7. **Installation** (step-by-step with code blocks)\n8. **Configuration** (.env variables explained)\n9. **Usage examples** (with code)\n10. **API Reference** (if applicable)\n11. **Contributing guide**\n12. **License**\n\nUse GitHub-flavored markdown throughout.`,
    description: 'Generate a professional, well-structured README.md that makes your project shine on GitHub.',
    useCase: 'Use for any new project, open source library, or when your existing README needs an overhaul.',
    professionSlug: 'developers', categorySlug: 'documentation-prompts', difficulty: 'beginner',
    exampleOutput: '# 🚀 ProjectName\n\n[![Build Status](https://img.shields.io/github/actions/workflow/status/user/repo/ci.yml)]()\n[![Version](https://img.shields.io/npm/v/projectname)]()\n\n> One-line description that tells exactly what this does.\n\n## ✨ Features\n- ⚡ Blazing fast performance\n- 🔒 Secure by default\n...',
    tags: ['README', 'documentation', 'GitHub', 'open source'], featured: true,
  },
  {
    id: 'd-dc-002', slug: 'api-documentation-generator', title: 'Generate API Documentation',
    content: `Create comprehensive API documentation for:\n\n**API Name:** [NAME]\n**Base URL:** [URL]\n**Auth Method:** [API KEY / OAUTH / JWT / none]\n**Endpoints:**\n[LIST YOUR ENDPOINTS or paste your route code]\n\nFor each endpoint generate:\n- **Method & URL**\n- **Description**\n- **Authentication required** (yes/no)\n- **Request Parameters** (path, query, body) with types\n- **Request body example** (JSON)\n- **Response format**\n- **Response examples** (success + error cases)\n- **Status codes** and meanings\n- **Rate limiting** info\n- **Code examples** in: JavaScript, Python, curl\n\nFormat as professional API docs (similar to Stripe/Twilio style).`,
    description: 'Generate Stripe-quality API documentation with examples in multiple programming languages.',
    useCase: 'Use when building APIs that need to be consumed by other developers or teams.',
    professionSlug: 'developers', categorySlug: 'documentation-prompts', difficulty: 'intermediate',
    exampleOutput: '## GET /users/{id}\n\nRetrieves a single user by their unique ID.\n\n**Authentication:** Required (Bearer token)\n\n### Parameters\n| Name | In | Type | Required | Description |\n|------|-----|------|----------|-------------|\n| id | path | string | Yes | User\'s UUID |',
    tags: ['API docs', 'documentation', 'REST API', 'developer docs'], featured: false,
  },

  // ===================== DEVELOPERS — ARCHITECTURE =====================
  {
    id: 'd-ar-001', slug: 'system-design-document', title: 'Create a System Design Document',
    content: `Act as a principal software architect. Create a comprehensive system design document for:\n\n**System Name:** [NAME]\n**Purpose:** [WHAT THE SYSTEM DOES]\n**Scale Requirements:** [USERS/REQUESTS PER DAY]\n**Budget Constraints:** [STARTUP / ENTERPRISE / UNLIMITED]\n**Existing Tech Stack:** [IF ANY]\n\nDocument should cover:\n1. **System Overview** (diagram description)\n2. **Core Components** and their responsibilities\n3. **Data Models** (key entities and relationships)\n4. **API Design** (key endpoints)\n5. **Database Choice** and justification\n6. **Caching Strategy**\n7. **Authentication & Authorization**\n8. **Scalability Plan** (how it handles 10x growth)\n9. **Failure Points & Mitigation**\n10. **Technology Decisions** with trade-off analysis\n11. **Estimated Infrastructure Cost**\n12. **Implementation Phases** (MVP → Production)`,
    description: 'Generate a comprehensive system design document covering architecture, scaling, and trade-offs.',
    useCase: 'Use for new projects, technical interviews, or when onboarding engineers to a system.',
    professionSlug: 'developers', categorySlug: 'architecture-prompts', difficulty: 'advanced',
    exampleOutput: '## System Design: Real-Time Chat Application\n\n### System Overview\nA scalable messaging platform supporting up to 1M concurrent users using WebSockets for real-time delivery...\n\n### Core Components\n1. **API Gateway** — Routes requests, handles auth\n2. **Message Service** — Core chat logic\n3. **Notification Service** — Push notifications\n...',
    tags: ['system design', 'architecture', 'scalability', 'technical design'], featured: true,
  },

  // ===================== MARKETERS — CONTENT CREATION =====================
  {
    id: 'm-cc-001', slug: 'blog-post-outline-generator', title: 'Generate a High-Ranking Blog Post Outline',
    content: `Act as an expert content strategist and SEO specialist. Create a comprehensive blog post outline for:\n\n**Topic:** [TOPIC]\n**Target Keyword:** [KEYWORD]\n**Target Audience:** [AUDIENCE]\n**Funnel Stage:** [awareness/consideration/decision]\n**Word Count Target:** [NUMBER]\n**Competitors to Beat:** [URLs, optional]\n\nDeliverable:\n1. **SEO Title** (with keyword, under 60 chars)\n2. **Meta Description** (under 160 chars, compelling)\n3. **Introduction approach** (hook type: stat/question/story/controversy)\n4. **H2 and H3 headers** (complete outline, keyword-rich but natural)\n5. **Key points** under each header (2–3 bullet points)\n6. **CTA placement** suggestions\n7. **Internal linking opportunities**\n8. **FAQ section** (3–5 questions from People Also Ask)\n9. **Word count distribution** across sections\n10. **Featured snippet optimization** opportunity`,
    description: 'Create a data-driven blog outline designed to rank on page 1 for your target keyword.',
    useCase: 'Use before writing any blog post to ensure SEO alignment and comprehensive coverage.',
    professionSlug: 'marketers', categorySlug: 'content-creation-prompts', difficulty: 'intermediate',
    exampleOutput: '## Outline: "Best AI Tools for Small Business 2024"\n\n**Title:** 15 Best AI Tools for Small Business in 2024 (Tested & Ranked)\n**Meta:** Discover the top AI tools helping small businesses save time and money in 2024. Our tested picks for every budget.\n\n### H2: Why Small Businesses Need AI Tools Now\n- Rising operational costs driving automation\n...',
    tags: ['blog post', 'content strategy', 'SEO', 'outline', 'content creation'], featured: true,
  },
  {
    id: 'm-cc-002', slug: 'long-form-content-writer', title: 'Write Complete Long-Form Blog Content',
    content: `You are an expert content writer specializing in [INDUSTRY]. Write a complete, publish-ready blog post:\n\n**Title:** [TITLE]\n**Target Keyword:** [KEYWORD]\n**Word Count:** [COUNT]\n**Audience:** [WHO THEY ARE, their pain points]\n**Tone:** [professional/conversational/authoritative/friendly]\n**Include:** [statistics/case studies/examples/quotes]\n\nRequirements:\n- Strong hook in first 100 words\n- Keyword appears naturally in first paragraph\n- Short paragraphs (2–3 sentences max for readability)\n- Transition sentences between sections\n- Specific examples, data points, and actionable tips\n- Expert quotes or research citations (mark as [CITATION NEEDED] where appropriate)\n- Conclusion with clear CTA\n- Internal link placeholders [LINK: topic]\n- No fluff — every sentence must provide value`,
    description: 'Write complete, SEO-optimized long-form blog content that is ready to publish.',
    useCase: 'Use when you need a full article written from scratch on any marketing topic.',
    professionSlug: 'marketers', categorySlug: 'content-creation-prompts', difficulty: 'intermediate',
    exampleOutput: '# How to Create a Content Calendar That Actually Gets Used\n\nNinety percent of content calendars are abandoned by February. Here\'s how the other 10% — the ones that drive consistent organic growth — are built differently...',
    tags: ['blog writing', 'long form', 'content marketing', 'SEO writing'], featured: false,
  },

  // ===================== MARKETERS — SEO =====================
  {
    id: 'm-seo-001', slug: 'keyword-research-analysis', title: 'Conduct Keyword Research and Topic Clusters',
    content: `Act as an SEO strategist with 10 years of experience. Develop a keyword strategy for:\n\n**Website/Business:** [DESCRIBE BUSINESS]\n**Primary Service/Product:** [WHAT YOU SELL]\n**Target Market:** [GEOGRAPHY + AUDIENCE]\n**Current Domain Authority:** [DA if known, or "new site"]\n**Top 3 Competitors:** [URLS]\n\nProvide:\n1. **Seed Keywords** (5–10 core terms)\n2. **Topic Clusters** (5 pillar topics with 5 cluster keywords each)\n3. **Long-tail opportunities** (10 keywords under 1000/mo volume, low competition)\n4. **Quick wins** (keywords competitors rank for that you don't yet)\n5. **Commercial intent keywords** (buyer-ready terms)\n6. **Informational intent keywords** (blog/content opportunities)\n7. **Search intent classification** for each cluster\n8. **Content priority order** (what to create first and why)\n9. **Featured snippet opportunities**`,
    description: 'Build a complete keyword strategy with topic clusters, intent mapping, and content priorities.',
    useCase: 'Use when starting SEO for a new site or auditing an existing content strategy.',
    professionSlug: 'marketers', categorySlug: 'seo-prompts', difficulty: 'advanced',
    exampleOutput: '## Keyword Strategy: B2B SaaS Project Management Tool\n\n### Topic Cluster 1: Project Management Software\n**Pillar:** "Best project management software"\n**Clusters:**\n- project management software for remote teams (880/mo)\n- project management tool comparison (590/mo)\n...',
    tags: ['keyword research', 'SEO strategy', 'topic clusters', 'content planning'], featured: true,
  },
  {
    id: 'm-seo-002', slug: 'meta-tags-generator', title: 'Generate SEO Meta Tags for Any Page',
    content: `Create optimized meta tags for the following web page:\n\n**Page URL:** [URL]\n**Page Type:** [homepage/product/blog post/landing page/category]\n**Main Topic:** [TOPIC]\n**Primary Keyword:** [KEYWORD]\n**Secondary Keywords:** [2–3 related terms]\n**Business Name:** [NAME]\n\nGenerate:\n1. **Title Tag** (50–60 chars, keyword near front, brand at end)\n2. **Meta Description** (150–160 chars, includes CTA, primary keyword)\n3. **OG Title** (can be more descriptive than title tag)\n4. **OG Description** (engaging, social-shareable)\n5. **OG Image suggestion** (describe ideal image)\n6. **Twitter Card** tags\n7. **Canonical URL** recommendation\n8. **Schema markup** type recommendation\n9. **H1 tag** suggestion\n\nProvide 3 variations of title and meta description to A/B test.`,
    description: 'Generate complete, optimized meta tag sets with A/B test variants for any page type.',
    useCase: 'Use for any new page, content update, or when auditing existing meta tags.',
    professionSlug: 'marketers', categorySlug: 'seo-prompts', difficulty: 'beginner',
    exampleOutput: '## Meta Tags: B2B Landing Page\n\n**Option A:**\nTitle: "Project Management Software for Teams | Streamline Work | Acme"\nMeta: "Manage projects 40% faster with Acme. Kanban boards, time tracking, and team chat — all in one place. Start free today."\n\n**Option B:**\nTitle: "Best Project Management Tool for Remote Teams 2024 | Acme"',
    tags: ['meta tags', 'SEO', 'on-page SEO', 'metadata', 'title tags'], featured: false,
  },

  // ===================== MARKETERS — SOCIAL MEDIA =====================
  {
    id: 'm-sm-001', slug: 'social-media-content-calendar', title: 'Create a 30-Day Social Media Content Calendar',
    content: `Act as a social media strategist. Create a 30-day content calendar for:\n\n**Brand:** [BRAND NAME]\n**Industry:** [INDUSTRY]\n**Platforms:** [INSTAGRAM / LINKEDIN / TWITTER / TIKTOK / FACEBOOK]\n**Brand Voice:** [professional/casual/inspirational/educational/humorous]\n**Goals:** [awareness/engagement/leads/sales]\n**Posting Frequency:** [X posts per week per platform]\n\nFor each week provide:\n- **Weekly theme**\n- **Daily post ideas** with:\n  - Content type (educational/entertainment/promotional/UGC/behind-scenes)\n  - Caption direction (2–3 sentences)\n  - Hashtag strategy\n  - Visual description\n  - Best posting time\n- **Ratio:** 80% value / 20% promotional\n\nInclude 2 viral post ideas and 1 campaign concept for the month.`,
    description: 'Create a strategic 30-day social media calendar with themes, content types, and posting times.',
    useCase: 'Use for monthly content planning, client social media management, or brand building.',
    professionSlug: 'marketers', categorySlug: 'social-media-prompts', difficulty: 'intermediate',
    exampleOutput: '## 30-Day Social Media Calendar: Wellness Brand (Instagram + LinkedIn)\n\n### Week 1 Theme: "New Month, New Habits"\n\n**Day 1 (Monday) — Educational:**\nCaption direction: Share 3 surprising facts about morning routines and their effect on productivity...',
    tags: ['social media', 'content calendar', 'instagram', 'linkedin', 'posting strategy'], featured: true,
  },
  {
    id: 'm-sm-002', slug: 'linkedin-post-creator', title: 'Write Viral LinkedIn Posts',
    content: `You are a LinkedIn content expert who has built a 100K+ following. Write a LinkedIn post about:\n\n**Topic:** [TOPIC]\n**Goal:** [thought leadership/lead gen/brand awareness/recruitment]\n**Target Reader:** [WHO SHOULD SEE THIS]\n**Personal Angle:** [any story, experience, or insight to include]\n**CTA:** [DESIRED ACTION]\n\nPost requirements:\n- Strong first line (no "I\'m excited to share" — be bold)\n- Hook that stops the scroll\n- Short paragraphs (1–2 lines each)\n- Story or data point\n- Contrarian or surprising angle\n- Practical takeaways (numbered list or bullet points)\n- Engagement question at the end\n- 3–5 relevant hashtags\n- Under 3000 characters\n\nWrite 2 variations: one storytelling format, one listicle format.`,
    description: 'Write high-engagement LinkedIn posts with proven formats that build authority and generate leads.',
    useCase: 'Use for thought leadership, company updates, product launches, or personal branding.',
    professionSlug: 'marketers', categorySlug: 'social-media-prompts', difficulty: 'intermediate',
    exampleOutput: '**Version 1 (Story Format):**\n\nI hired someone who lied on their resume.\n\nHere\'s what happened:\n\nWe offered them the role. They accepted. First day — red flags. Second day — more red flags...',
    tags: ['LinkedIn', 'social media', 'thought leadership', 'content creation', 'viral posts'], featured: false,
  },

  // ===================== MARKETERS — EMAIL MARKETING =====================
  {
    id: 'm-em-001', slug: 'email-welcome-sequence', title: 'Write a 5-Email Welcome Sequence',
    content: `You are an email marketing specialist and conversion copywriter. Write a 5-email welcome sequence for:\n\n**Product/Service:** [WHAT YOU SELL]\n**Lead Source:** [WHERE SUBSCRIBERS COME FROM]\n**Brand Voice:** [TONE]\n**Main Problem You Solve:** [PAIN POINT]\n**Primary CTA in Sequence:** [DESIRED ACTION]\n\nWrite all 5 emails:\n\n**Email 1 (Immediately):** Welcome + fulfill lead magnet + set expectations\n**Email 2 (Day 2):** Tell your story + credibility\n**Email 3 (Day 4):** Biggest pain point + how you solve it\n**Email 4 (Day 6):** Social proof + case study\n**Email 5 (Day 8):** Soft sell + clear offer\n\nFor each email include:\n- Subject line (+ A/B variant)\n- Preview text\n- Full email body\n- CTA button text`,
    description: 'Write a complete 5-email welcome sequence that nurtures leads and converts subscribers.',
    useCase: 'Use when setting up email automation for a new product, course, or lead magnet.',
    professionSlug: 'marketers', categorySlug: 'email-marketing-prompts', difficulty: 'advanced',
    exampleOutput: '## Email 1 — Welcome\n\n**Subject:** You\'re in! Here\'s your [Lead Magnet] 🎉\n**Preview:** Plus, the one thing that changes everything...\n\n---\n\nHey [First Name],\n\nWelcome to the family! I\'m [Name], and I\'m thrilled you\'re here...',
    tags: ['email marketing', 'welcome sequence', 'email automation', 'nurture sequence'], featured: true,
  },

  // ===================== MARKETERS — AD COPY =====================
  {
    id: 'm-ad-001', slug: 'facebook-ad-copy-generator', title: 'Write High-Converting Facebook Ad Copy',
    content: `Act as a direct-response copywriter specializing in Facebook Ads. Write ad copy for:\n\n**Product/Service:** [WHAT YOU'RE ADVERTISING]\n**Target Audience:** [WHO, age, interests, pain points]\n**Offer:** [WHAT YOU'RE OFFERING + PRICE/CTA]\n**Key Benefit:** [#1 outcome customer gets]\n**Proof:** [testimonial, stat, or social proof]\n**Campaign Objective:** [awareness/traffic/conversions/leads]\n\nWrite 3 complete ad sets:\n\n**Ad 1 — Problem/Solution:** Lead with pain, offer the solution\n**Ad 2 — Social Proof:** Lead with testimonial or result\n**Ad 3 — Urgency/Scarcity:** Create compelling reason to act now\n\nFor each ad:\n- Primary text (under 125 chars for best reach)\n- Headline (under 40 chars)\n- Description (under 30 chars)\n- CTA button selection\n- Image/video content description`,
    description: 'Generate 3 complete Facebook ad copy sets with proven direct-response frameworks.',
    useCase: 'Use when launching or refreshing Facebook/Instagram ad campaigns.',
    professionSlug: 'marketers', categorySlug: 'ad-copy-prompts', difficulty: 'intermediate',
    exampleOutput: '## Ad Set 1 — Problem/Solution\n\n**Primary Text:** Still spending 3 hours a day on emails that don\'t convert? There\'s a better way.\n**Headline:** Write Emails That Sell\n**Description:** Try free for 14 days\n**CTA:** Start Free Trial',
    tags: ['Facebook ads', 'ad copy', 'paid social', 'direct response', 'copywriting'], featured: true,
  },

  // ===================== RECRUITERS =====================
  {
    id: 'r-rs-001', slug: 'resume-screening-framework', title: 'Create a Resume Screening Framework',
    content: `Act as a senior talent acquisition specialist. Create a structured resume screening framework for:\n\n**Role:** [JOB TITLE]\n**Department:** [DEPARTMENT]\n**Must-Have Requirements:** [LIST]\n**Nice-to-Have Requirements:** [LIST]\n**Culture Fit Indicators:** [DESCRIBE COMPANY CULTURE]\n**Screening Volume:** [HOW MANY RESUMES]\n\nCreate:\n1. **Knockout Criteria** (instant disqualifiers — be specific)\n2. **Scoring Rubric** (0–3 scale for each criterion)\n3. **Green Flags** (specific signals that elevate a candidate)\n4. **Red Flags** (resume patterns to watch for)\n5. **Initial screening questions** (5 written/video questions)\n6. **Screening email template** for advancing candidates\n7. **Rejection email template** (respectful, on-brand)\n8. **Time benchmark** (target minutes per resume)`,
    description: 'Build a systematic resume screening framework that ensures fair, consistent, efficient hiring.',
    useCase: 'Use when hiring for a specific role and expecting high application volume.',
    professionSlug: 'recruiters', categorySlug: 'resume-screening-prompts', difficulty: 'intermediate',
    exampleOutput: '## Resume Screening Framework: Senior Product Manager\n\n**Knockout Criteria (auto-reject):**\n- Less than 5 years product management experience\n- No B2B SaaS background\n- No evidence of shipping products to market\n...',
    tags: ['resume screening', 'hiring', 'talent acquisition', 'ATS', 'HR'], featured: true,
  },
  {
    id: 'r-co-001', slug: 'linkedin-outreach-message', title: 'Write Personalized LinkedIn Recruiter Outreach',
    content: `You are a top-performing recruiter known for high response rates. Write a LinkedIn outreach message for:\n\n**Candidate Name:** [NAME]\n**Their Current Role:** [ROLE AT COMPANY]\n**Role You're Hiring For:** [ROLE]\n**Why They're a Good Fit:** [SPECIFIC REASONS FROM THEIR PROFILE]\n**Company Value Proposition:** [WHY SOMEONE WOULD WANT TO JOIN]\n**Salary Range:** [RANGE, optional]\n**Urgency:** [TIMELINE]\n\nWrite 3 outreach message versions:\n1. **Short & punchy** (under 100 words) — for passive candidates\n2. **Value-first** (under 150 words) — lead with what's in it for them\n3. **Curiosity hook** (under 120 words) — create intrigue without full details\n\nRules: Never use "I hope this message finds you well." Be specific about why YOU reached out to THEM.`,
    description: 'Write personalized recruiter outreach messages that generate 3x more responses.',
    useCase: 'Use for any LinkedIn or email outreach to passive candidates.',
    professionSlug: 'recruiters', categorySlug: 'candidate-outreach-prompts', difficulty: 'beginner',
    exampleOutput: '**Version 1 (Short & Punchy):**\n\nHi Sarah,\n\nYour work scaling Acme\'s data team from 3 to 25 engineers caught my eye. We\'re hiring a VP of Engineering at [Company] and your background aligns almost perfectly.\n\nOpen to a 15-minute call this week? No pressure either way.\n\nBest, [Your Name]',
    tags: ['LinkedIn outreach', 'recruiting', 'candidate messaging', 'talent acquisition'], featured: true,
  },
  {
    id: 'r-iq-001', slug: 'structured-interview-questions', title: 'Design Structured Interview Questions',
    content: `Act as an expert recruiter and industrial psychologist. Design a structured interview guide for:\n\n**Role:** [ROLE]\n**Level:** [JUNIOR / MID / SENIOR / LEADERSHIP]\n**Key Competencies Required:** [LIST 4–5]\n**Interview Duration:** [MINUTES]\n**Interviewers:** [NUMBER] interviewers\n\nCreate:\n1. **Opening question** (to warm up candidate)\n2. **Behavioral questions** (STAR format, 2 per competency)\n3. **Technical/role-specific questions** (3–5)\n4. **Situational questions** (2 hypothetical scenarios)\n5. **Culture fit questions** (3, non-discriminatory)\n6. **Candidate questions to ask interviewer** (suggest 3)\n7. **Evaluation scorecard** with 1–5 rating criteria\n8. **Red flags** to watch for in responses\n9. **Time allocation** per section`,
    description: 'Build a complete structured interview guide with behavioral questions, scorecards, and red flags.',
    useCase: 'Use when standardizing interviews across multiple interviewers for a fair hiring process.',
    professionSlug: 'recruiters', categorySlug: 'interview-prompts', difficulty: 'intermediate',
    exampleOutput: '## Structured Interview Guide: Senior Software Engineer\n\n**Duration:** 60 minutes | **Format:** Behavioral + Technical\n\n### Opening (5 min)\n"Tell me about your current role and what excites you most about your work right now."\n\n### Competency 1: Problem Solving\n**Q1:** "Tell me about the most complex technical problem you\'ve solved. Walk me through your approach..."',
    tags: ['interview questions', 'structured interview', 'hiring', 'behavioral questions'], featured: false,
  },
  {
    id: 'r-jd-001', slug: 'job-description-writer', title: 'Write an Inclusive, Compelling Job Description',
    content: `Act as a talent brand specialist and DEI expert. Write a job description for:\n\n**Role:** [JOB TITLE]\n**Company:** [COMPANY NAME & BRIEF DESCRIPTION]\n**Location:** [REMOTE / HYBRID / CITY]\n**Salary Range:** [RANGE]\n**Team:** [TEAM THEY'LL JOIN]\n**Must-Have Requirements:** [LIST]\n**Nice-to-Have:** [LIST]\n**What they'll do:** [KEY RESPONSIBILITIES]\n**Why this role is exciting:** [IMPACT, GROWTH, etc.]\n\nWrite a JD that:\n- Opens with impact (what the person will accomplish, not a generic overview)\n- Uses inclusive language (avoid gendered terms, unnecessary jargon)\n- Has a realistic requirements list (no more than 5 must-haves)\n- Describes growth opportunities\n- Explains team culture specifically\n- Includes compensation range\n- Ends with a compelling "about us" that attracts top talent`,
    description: 'Write inclusive, compelling job descriptions that attract diverse, qualified applicants.',
    useCase: 'Use when opening a new role or refreshing an existing job description.',
    professionSlug: 'recruiters', categorySlug: 'job-description-prompts', difficulty: 'beginner',
    exampleOutput: '## Senior Frontend Engineer — Remote | $140k-$180k\n\n**The impact you\'ll have:**\nYou\'ll lead the architecture of our customer-facing dashboard used by 50,000 businesses daily...\n\n**What you\'ll do:**\n- Own the frontend technical roadmap for our core product\n...',
    tags: ['job description', 'JD writing', 'inclusive hiring', 'talent acquisition', 'DEI'], featured: true,
  },

  // ===================== STUDENTS =====================
  {
    id: 's-sp-001', slug: 'study-schedule-creator', title: 'Create a Personalized Study Schedule',
    content: `Act as an academic coach and learning specialist. Create a personalized study schedule for:\n\n**Student:** [NAME or "me"]\n**Exam/Deadline:** [DATE]\n**Subjects to Study:** [LIST]\n**Available Study Hours Per Day:** [HOURS]\n**Learning Style:** [visual/auditory/kinesthetic/reading-writing]\n**Current Knowledge Level:** [beginner/intermediate/advanced per subject]\n**Constraints:** [work schedule, other commitments]\n\nCreate:\n1. **Total study time calculation** and subject prioritization\n2. **Week-by-week breakdown** leading up to deadline\n3. **Daily schedule template** (with specific time blocks)\n4. **Spaced repetition schedule** for key concepts\n5. **Review milestones** (mini-tests to check progress)\n6. **Study techniques** matched to your learning style\n7. **Break schedule** (Pomodoro or other method)\n8. **Emergency catch-up plan** if you fall behind`,
    description: 'Get a personalized, science-backed study schedule that maximizes retention before exams.',
    useCase: 'Use at the start of any exam period to organize your study time effectively.',
    professionSlug: 'students', categorySlug: 'study-prompts', difficulty: 'beginner',
    exampleOutput: '## 4-Week Study Schedule: Final Exams\n\n### Priority Ranking (by difficulty × weight):\n1. Organic Chemistry (high difficulty, 30% of grade)\n2. Statistics (medium difficulty, 25% of grade)\n...\n\n### Week 1 Daily Schedule:\n7:00–8:30 AM: Organic Chemistry — Chapters 1–3\n...',
    tags: ['study schedule', 'exam prep', 'time management', 'learning', 'academics'], featured: true,
  },
  {
    id: 's-r-001', slug: 'research-paper-accelerator', title: 'Accelerate Your Research Paper Writing',
    content: `Act as an academic writing coach and research specialist. Help me write a research paper on:\n\n**Topic:** [TOPIC]\n**Assignment Type:** [research paper/literature review/argumentative essay/thesis]\n**Academic Level:** [high school/undergraduate/graduate]\n**Required Length:** [PAGES or WORDS]\n**Citation Style:** [APA/MLA/Chicago/Harvard]\n**Deadline:** [DATE]\n**Thesis/Argument:** [YOUR THESIS, or "help me develop one"]\n\nProvide:\n1. **Refined thesis statement** (if needed)\n2. **Paper outline** with all major sections\n3. **Research sources** types to look for (databases, keywords)\n4. **Section-by-section writing prompts** to get unstuck\n5. **Transition phrases** between sections\n6. **Sample topic sentences** for each paragraph\n7. **Introduction template** (hook → background → thesis)\n8. **Conclusion framework**\n9. **Citation formatting examples**`,
    description: 'Get a complete research paper framework with thesis help, outline, and writing prompts.',
    useCase: 'Use when starting a research paper to organize your approach and overcome writer\'s block.',
    professionSlug: 'students', categorySlug: 'research-prompts', difficulty: 'intermediate',
    exampleOutput: '## Research Paper Framework: Climate Migration\n\n**Refined Thesis:** "Climate-induced displacement will create a new category of refugee by 2050, requiring international law to evolve beyond traditional definitions of asylum."\n\n**Outline:**\nI. Introduction\n   A. Hook: 2023 displacement statistics\n   B. Background: Current refugee law framework\n   C. Thesis statement\n...',
    tags: ['research paper', 'academic writing', 'thesis', 'essay writing', 'citations'], featured: true,
  },
  {
    id: 's-ep-001', slug: 'exam-prep-question-generator', title: 'Generate Practice Exam Questions',
    content: `Act as an expert tutor and assessment specialist. Generate practice exam questions for:\n\n**Subject:** [SUBJECT]\n**Topic/Chapter:** [TOPIC]\n**Exam Type:** [multiple choice/short answer/essay/problem-solving]\n**Difficulty Level:** [easy/medium/hard/mixed]\n**Number of Questions:** [NUMBER]\n**Exam Format:** [describe real exam format if known]\n\nFor each question:\n- Write the question clearly\n- Provide the correct answer\n- Give a detailed explanation\n- Note which concept it tests\n- Suggest follow-up practice if the answer is wrong\n\nAlso provide:\n- **Study focus areas** (what to prioritize)\n- **Common mistakes** students make on this topic\n- **Memory tricks** for key concepts\n- **Last-minute review checklist**`,
    description: 'Generate targeted practice questions with answers and explanations for any subject.',
    useCase: 'Use 1–2 weeks before an exam to test your knowledge and identify gaps.',
    professionSlug: 'students', categorySlug: 'exam-prep-prompts', difficulty: 'beginner',
    exampleOutput: '## Practice Questions: AP Chemistry — Thermodynamics\n\n**Q1 (Medium):** A reaction has ΔH = -50 kJ and ΔS = -100 J/K. At what temperature does the reaction become non-spontaneous?\n\n**Answer:** T = ΔH/ΔS = 500K\n**Explanation:** Using ΔG = ΔH - TΔS, the reaction becomes non-spontaneous when ΔG > 0...',
    tags: ['exam prep', 'practice questions', 'study', 'test preparation'], featured: false,
  },
  {
    id: 's-ng-001', slug: 'lecture-notes-transformer', title: 'Transform Lecture Notes into Study Guides',
    content: `Act as an expert note-taker and learning strategist. Transform the following content into a structured study guide:\n\n**Raw Content:** [PASTE LECTURE NOTES, CHAPTER TEXT, OR DESCRIBE TOPIC]\n**Subject:** [SUBJECT]\n**Learning Goal:** [what you need to understand/remember]\n\nTransform into:\n1. **Key Concepts Summary** (most important ideas in simple language)\n2. **Vocabulary Glossary** (terms with definitions)\n3. **Concept Map description** (how ideas connect)\n4. **Cornell Notes format** (main notes + cues + summary)\n5. **Flashcard content** (20 question-answer pairs)\n6. **Memory Hooks** (mnemonics, acronyms, or stories)\n7. **3 practice questions** testing the material\n8. **"Explain it like I'm 10"** version of the hardest concept`,
    description: 'Convert raw lecture notes or textbook content into a comprehensive, memorable study guide.',
    useCase: 'Use after each class to consolidate learning while it\'s fresh in your mind.',
    professionSlug: 'students', categorySlug: 'note-taking-prompts', difficulty: 'beginner',
    exampleOutput: '## Study Guide: Cell Division (Mitosis & Meiosis)\n\n**Key Concepts:**\n1. Mitosis produces 2 identical diploid cells (for growth/repair)\n2. Meiosis produces 4 unique haploid cells (for reproduction)\n...\n\n**Mnemonic:** PMAT — Prophase, Metaphase, Anaphase, Telophase',
    tags: ['note taking', 'study guide', 'Cornell notes', 'flashcards', 'learning'], featured: true,
  },
  {
    id: 's-ew-001', slug: 'academic-essay-writer', title: 'Write and Structure Academic Essays',
    content: `You are an expert academic writing tutor. Help me write an essay on:\n\n**Essay Topic/Prompt:** [EXACT PROMPT]\n**Subject:** [SUBJECT]\n**Essay Type:** [argumentative/expository/analytical/compare-contrast/narrative]\n**Required Length:** [PAGES or WORDS]\n**Academic Level:** [HIGH SCHOOL / UNDERGRAD / GRAD]\n**Thesis Idea:** [YOUR IDEA, or "help me develop one"]\n\nProvide:\n1. **Thesis statement** (strong, arguable, specific)\n2. **Essay map** (preview of main arguments)\n3. **Complete outline** with topic sentences\n4. **Introduction paragraph** (full draft)\n5. **Body paragraph template** (claim → evidence → analysis → transition)\n6. **Conclusion framework** (synthesis, not summary)\n7. **Academic vocabulary** to elevate the writing\n8. **Transitions list** between paragraphs\n9. **Common errors to avoid** for this essay type`,
    description: 'Get expert guidance to plan, structure, and write any type of academic essay.',
    useCase: 'Use when you have an essay assignment and need to organize your thinking and writing.',
    professionSlug: 'students', categorySlug: 'essay-writing-prompts', difficulty: 'intermediate',
    exampleOutput: '## Essay Framework: Argumentative Essay on Social Media and Mental Health\n\n**Thesis:** "Social media platforms have a net negative impact on adolescent mental health, driven by algorithmic amplification of harmful content, social comparison, and displacement of face-to-face interaction."\n\n**Introduction Draft:**\nIn 2024, the average teenager spends 4.8 hours daily on social media...',
    tags: ['essay writing', 'academic writing', 'thesis', 'argumentation', 'writing skills'], featured: false,
  },

  // ===================== ACCOUNTANTS =====================
  {
    id: 'a-fa-001', slug: 'financial-statement-analysis', title: 'Analyze Financial Statements',
    content: `Act as a CFA-level financial analyst. Perform a comprehensive analysis of the following financial statements:\n\n**Company:** [COMPANY NAME]\n**Industry:** [INDUSTRY]\n**Financial Data:** [PASTE INCOME STATEMENT, BALANCE SHEET, CASH FLOW — or describe]\n**Period:** [YEAR/QUARTER]\n**Purpose:** [INVESTMENT DECISION / AUDIT / MANAGEMENT REVIEW / CLIENT REPORT]\n\nProvide:\n1. **Profitability Ratios** (gross margin, operating margin, ROE, ROA)\n2. **Liquidity Ratios** (current ratio, quick ratio)\n3. **Leverage Ratios** (debt-to-equity, interest coverage)\n4. **Efficiency Ratios** (asset turnover, inventory turnover)\n5. **Year-over-year comparison** (if prior period data available)\n6. **Industry benchmark comparison**\n7. **Key strengths** from the financials\n8. **Risk factors and red flags**\n9. **Executive summary** (3–5 sentences for non-finance audience)\n10. **Recommendations**`,
    description: 'Perform a complete financial ratio analysis with benchmarks, red flags, and executive summary.',
    useCase: 'Use when reviewing client financials, preparing audit work, or supporting investment decisions.',
    professionSlug: 'accountants', categorySlug: 'financial-analysis-prompts', difficulty: 'advanced',
    exampleOutput: '## Financial Analysis: TechCo Inc. FY2024\n\n**Profitability:**\n- Gross Margin: 72% (Industry avg: 68%) ✓ Above benchmark\n- Operating Margin: 18% (Industry avg: 22%) ⚠ Below benchmark — investigate operating expenses\n\n**Liquidity:**\n- Current Ratio: 2.4 — Strong liquidity position\n...',
    tags: ['financial analysis', 'ratios', 'financial statements', 'accounting', 'CFA'], featured: true,
  },
  {
    id: 'a-r-001', slug: 'financial-report-generator', title: 'Generate a Financial Report Narrative',
    content: `Act as a senior financial writer and CPA. Write a professional financial report narrative for:\n\n**Report Type:** [MONTHLY / QUARTERLY / ANNUAL / MANAGEMENT ACCOUNTS]\n**Company:** [NAME]\n**Period:** [PERIOD]\n**Audience:** [BOARD / INVESTORS / MANAGEMENT / BANK]\n**Key Financial Data:**\n- Revenue: [FIGURE] vs. budget: [FIGURE]\n- Expenses: [FIGURE]\n- Net profit/loss: [FIGURE]\n- Key variances: [DESCRIBE]\n**Notable Events:** [ANY SIGNIFICANT BUSINESS EVENTS]\n\nWrite:\n1. **Executive Summary** (3–5 sentences for busy executives)\n2. **Revenue Analysis** (performance vs. budget, drivers)\n3. **Expense Analysis** (key variances and explanations)\n4. **Profitability Commentary**\n5. **Cash Position and Outlook**\n6. **Risks and Opportunities**\n7. **Forward-Looking Statements** (next period expectations)\n\nTone: professional, clear, and suitable for [AUDIENCE].`,
    description: 'Write professional financial report narratives that translate numbers into clear business insights.',
    useCase: 'Use for monthly management accounts, board reports, or investor communications.',
    professionSlug: 'accountants', categorySlug: 'reporting-prompts', difficulty: 'intermediate',
    exampleOutput: '## Q3 2024 Financial Report — Acme Corp\n\n**Executive Summary:**\nQ3 2024 delivered revenue of $4.2M, exceeding budget by 8% driven by strong performance in the enterprise segment. Operating expenses increased by 12% year-on-year, primarily due to headcount additions supporting growth plans...',
    tags: ['financial report', 'management accounts', 'board report', 'financial writing'], featured: true,
  },
  {
    id: 'a-ex-001', slug: 'excel-formula-builder', title: 'Build Complex Excel Formulas',
    content: `Act as an Excel and financial modeling expert. Help me build an Excel formula or solution for:\n\n**What I need to achieve:** [DESCRIBE YOUR GOAL]\n**Data Structure:** [DESCRIBE YOUR SPREADSHEET LAYOUT]\n**Current Formula (if any):** [PASTE EXISTING FORMULA]\n**Excel Version:** [365 / 2021 / 2019 / online]\n**Additional Constraints:** [any specific requirements]\n\nProvide:\n1. **The complete formula** (ready to paste)\n2. **Step-by-step explanation** of each component\n3. **How to apply it** (where to put it, how to drag/fill)\n4. **Common errors** you might encounter and fixes\n5. **Alternative formulas** (if multiple approaches exist)\n6. **Related functions** that might also help\n7. **Optimization tips** (if formula might be slow on large datasets)`,
    description: 'Get working Excel formulas with step-by-step explanations for any financial task.',
    useCase: 'Use when you need complex formulas (VLOOKUP, INDEX/MATCH, SUMIFS, array formulas, etc.).',
    professionSlug: 'accountants', categorySlug: 'excel-prompts', difficulty: 'beginner',
    exampleOutput: '## Excel Formula: Dynamic VLOOKUP with Error Handling\n\n**Formula:**\n```\n=IFERROR(VLOOKUP(A2, Sheet2!$A:$D, 3, FALSE), "Not Found")\n```\n\n**Breakdown:**\n- `VLOOKUP(A2, ...)` — Looks up value in A2\n- `Sheet2!$A:$D` — Searches columns A through D on Sheet2\n- `3` — Returns value from 3rd column (column C)\n- `FALSE` — Exact match required\n- `IFERROR(...)` — Returns "Not Found" instead of #N/A error',
    tags: ['Excel', 'formulas', 'VLOOKUP', 'financial modeling', 'spreadsheet'], featured: true,
  },
  {
    id: 'a-tx-001', slug: 'tax-research-memo', title: 'Draft a Tax Compliance & Research Summary',
    content: `Act as a senior corporate tax specialist and CPA with expertise in [JURISDICTION] tax codes. Draft a tax research and compliance summary for:\n\n**Tax Position/Question:** [DESCRIBE THE TAX QUESTION]\n**Client Situation:** [BRIEF FACTS]\n**Jurisdiction:** [US FEDERAL / STATE / UK / etc.]\n**Tax Year:** [YEAR]\n**Relevant Entity Type:** [INDIVIDUAL / C-CORP / S-CORP / LLC / TRUST]\n\nSummary format:\n1. **Tax Position Statement** (precise accounting/tax question)\n2. **Facts** (relevant business facts only)\n3. **Applicable Tax Codes** (statutes, regulations, IRS guidance)\n4. **Analysis** (apply tax rules to facts)\n5. **Conclusion** (clear accounting recommendation)\n6. **Limitations and Caveats**\n7. **Sources Cited** (mark as [VERIFY] since AI should not be the final tax authority)\n\n*Note: Mark all specific citations as [VERIFY] — this summary is a starting framework, not final tax or legal advice.*`,
    description: 'Draft a structured tax research and compliance summary in standard corporate format.',
    useCase: 'Use as a starting framework for tax research questions to organize thinking and structure.',
    professionSlug: 'accountants', categorySlug: 'tax-research-prompts', difficulty: 'advanced',
    exampleOutput: '## Tax Compliance & Research Summary\n\n**Date:** [DATE] | **Prepared by:** [NAME] | **Reviewed by:** [NAME]\n\n**Tax Position:** Whether a small business owner\'s home office expenses qualify for deduction under IRC §280A when the taxpayer is a sole proprietor...',
    tags: ['tax research', 'tax compliance', 'CPA', 'accounting', 'tax code'], featured: false,
  },
  {
    id: 'a-cc-001', slug: 'client-financial-explanation', title: 'Explain Complex Financial Concepts to Clients',
    content: `Act as a client-facing financial advisor who excels at making complex topics simple. Explain the following to a client:\n\n**Topic:** [FINANCIAL CONCEPT, TAX ISSUE, OR ACCOUNTING TREATMENT]\n**Client Background:** [BUSINESS OWNER / INDIVIDUAL / NON-FINANCE PROFESSIONAL]\n**Why It Matters to Them:** [IMPACT ON THEIR SITUATION]\n**Decision They Need to Make:** [WHAT THEY'RE DECIDING]\n\nCreate:\n1. **Simple explanation** (no jargon, analogies welcome)\n2. **Why this matters to them** (specific to their situation)\n3. **Options available** (3 or fewer with pros/cons)\n4. **Recommendation** (if appropriate)\n5. **Frequently Asked Questions** (3 questions they're likely to ask)\n6. **Email version** (ready-to-send explanation to client)\n7. **One-page summary** (for a client who wants the short version)`,
    description: 'Translate complex financial and tax concepts into clear client communications.',
    useCase: 'Use when explaining difficult accounting or tax matters to non-financial clients.',
    professionSlug: 'accountants', categorySlug: 'client-communication-prompts', difficulty: 'intermediate',
    exampleOutput: '## Client Explanation: Depreciation vs. Expensing\n\n**Simple Version:**\nThink of buying a delivery truck for your business. You could either:\n- Write off the full cost this year (like throwing away the receipt immediately)\n- Or spread the cost over 5 years (like paying in installments on your tax return)\n\nThe IRS gives you both options, and choosing the right one can save you thousands...',
    tags: ['client communication', 'financial explanation', 'plain language', 'advisory'], featured: false,
  },

  // ===================== WRITERS =====================
  {
    id: 'w-gp-001', slug: 'chatgpt-prompts-for-writers', title: 'Best ChatGPT Prompts for Writers',
    content: `Act as a professional developmental editor and writing coach. I am working on a writing project:\n\n**Project Type:** [BOOK / NOVEL / ARTICLE / SHORT STORY / MEMOIR]\n**Genre:** [E.G. SCI-FI / FANTASY / MYSTERY / NON-FICTION]\n**Working Title:** [TITLE / TOPIC]\n**Core Concept:** [BRIEF DESCRIPTION]\n**My Current Challenge:** [E.G. WRITER'S BLOCK / PLOT HOLE / PACE / CHARACTER DIALOGUE]\n\nProvide:\n1. **Critical Analysis**: Identify the strengths and potential pitfalls of the concept.\n2. **Structural Advice**: Suggest a 3-act structure outline for this concept.\n3. **Dialogue Polish**: Give me 3 tips to improve the voice of characters in this genre.\n4. **Actionable Exercises**: Give me 3 writing prompts to help me break through my current challenge.\n5. **Recommended Word Count & Pace Guide** for this project type.`,
    description: 'Get comprehensive feedback, structural edits, and character guidance from a professional editing persona.',
    useCase: 'Use when starting a new draft, refining a manuscript, or resolving writer\'s block.',
    professionSlug: 'writers', categorySlug: 'creative-writing-prompts', difficulty: 'intermediate',
    exampleOutput: '## Writing Coach Evaluation: Sci-Fi Novel\n\n**Concept Analysis:** Your premise about digital memory transfer is compelling, but watch out for the "exposition dump" trap. Show the technology in action instead of explaining it...',
    tags: ['creative writing', 'editing', 'writing coach', 'novel structure', 'narrative style'], featured: true,
  },
  {
    id: 'w-sg-001', slug: 'story-generator-prompts', title: 'Generate Engaging Story Outlines',
    content: `Act as a master fiction storyteller. Generate a complete, engaging short story outline based on:\n\n**Genre:** [E.G. THRILLER / ROMANCE / SCI-FI / URBAN FANTASY]\n**Protagonist:** [NAME, BRIEF DESCRIPTION]\n**Setting:** [TIME, PLACE, ATMOSPHERE]\n**The Inciting Incident:** [WHAT SPARKS THE STORY]\n**Key Theme:** [E.G. REDEMPTION / ISOLATION / FORGIVENESS]\n\nPlease generate:\n1. **Logline**: A 1-sentence hook.\n2. **Beat Sheet**: 15 key plot points matching the Save the Cat format.\n3. **Major Conflict**: Define the internal and external stakes.\n4. **Dialogue Sample**: A 10-line dialogue showing the chemistry between the protagonist and antagonist.\n5. **Climax & Resolution Blueprint**..`,
    description: 'Generate structured beat sheets, plot points, and dialogue snippets for any genre.',
    useCase: 'Use when brainstorming short stories or mapping out novel chapter outlines.',
    professionSlug: 'writers', categorySlug: 'story-writing-prompts', difficulty: 'advanced',
    exampleOutput: '## Story Outline: Crimson Sky (Thriller)\n\n**Logline:** A retired detective is forced back into action when a signature calling card from a cold case appears in his own home...\n**Beat Sheet:**\n1. Opening Image: Rain-slicked streets of New Chicago...\n...',
    tags: ['story generator', 'plotting', 'fiction writing', 'plot outline', 'storytelling'], featured: true,
  },
  {
    id: 'w-cc-001', slug: 'character-creation-prompts', title: 'Build Deep, Multi-Dimensional Characters',
    content: `Act as a novelist and character psychologist. Help me build a detailed character profile for:\n\n**Role in Story:** [PROTAGONIST / ANTAGONIST / MENTOR / SIDEKICK]\n**Archetype:** [E.G. THE REBEL / THE RULER / THE CAREMONGER]\n**Age & Background:** [BRIEF DETAILS]\n**Core Motivation:** [WHAT DO THEY WANT MORE THAN ANYTHING?]\n**The Lie They Believe:** [WHAT INTERNAL FLAW HOLDS THEM BACK?]\n\nCompile a character dossier including:\n1. **Physical Attributes & Quirks** (including body language, speech patterns)\n2. **Psychological Profile** (core fear, primary wound, hidden virtue, dominant vice)\n3. **Internal vs. External Conflict Matrix**\n4. **Character Arc Blueprint** (from flaw to realization/change)\n5. **Diagnostic Monologue**: Write a 1-paragraph monologue where the character explains their worldview.`,
    description: 'Design complete character dossiers with flaws, wounds, arcs, and voice samples.',
    useCase: 'Use when designing your cast to ensure they feel like real people with believable motives.',
    professionSlug: 'writers', categorySlug: 'novel-writing-prompts', difficulty: 'advanced',
    exampleOutput: '## Character Dossier: Elena Vance (The Rebel)\n\n**Core Motivation:** To expose the council\'s surveillance network.\n**The Lie She Believes:** "If I trust anyone, they will betray me."\n**Physical Quirk:** Constantly adjusts her left sleeve when nervous...',
    tags: ['character creation', 'character profile', 'novel writing', 'fiction cast', 'dossier'], featured: true,
  },
  {
    id: 'w-wb-001', slug: 'world-building-prompts', title: 'Design Rich, Immersive Settings & Lore',
    content: `Act as a speculative fiction world-builder. Construct a detailed world setting and lore outline for:\n\n**Genre:** [E.G. HIGH FANTASY / CYBERPUNK / APOCALYPTIC]\n**Core Magic/Tech System:** [DESCRIBE THE RULES OF MAGIC OR TECHNOLOGY]\n**Dominant Society/Government:** [BRIEF DESCRIPTION]\n**Primary Conflict/Crisis:** [E.G. RESOURCE SCARCITY / REBELLION / MAGIC CORRUPTION]\n**Aesthetic/Vibe:** [E.G. RETRO-FUTURISTIC / GRITTY MEDIEVAL]\n\nGenerate a world dossier including:\n1. **Cosmology & Laws**: How magic/technology shapes daily life.\n2. **Social Hierarchy**: Major factions, guilds, or social structures.\n3. **Geography & Key Cities**: 3 notable locations with active cultural descriptions.\n4. **History & Myths**: The biggest historical event (war, disaster, discovery) that defines the current era.\n5. **Local Sayings/Slang**: 3 idioms or slang terms unique to this world.`,
    description: 'Design speculative magic/tech rules, social structures, geography, and lore.',
    useCase: 'Use for world-building prep in sci-fi, fantasy, or historical fiction projects.',
    professionSlug: 'writers', categorySlug: 'creative-writing-prompts', difficulty: 'advanced',
    exampleOutput: '## World Dossier: Neo-Venice (Cyberpunk)\n\n**Aesthetic:** Bioluminescent canals beneath heavy chrome structures.\n**Geography:**\n1. The Spire: Upper-class sector hovering over the ocean...\n...',
    tags: ['world building', 'speculative fiction', 'fantasy lore', 'sci-fi setting', 'worldbuilder'], featured: true,
  },
];

// Import categories to generate dynamic prompts programmatically
import { categories } from './categories';

// Programmatic generation of 300+ prompts to meet the SEO requirement
const generatedPrompts: Prompt[] = [];

const subjects = {
  teachers: ['World History', 'Algebra 2', 'Chemistry', 'English Literature', 'Introduction to Coding', 'Creative Writing', 'Middle School Art', 'Physical Education', 'Biology', 'Geography', 'Special Education', 'Early Childhood', 'ESL Instruction', 'Classroom Management', 'STEM Projects'],
  developers: ['React', 'TypeScript', 'Node.js', 'Python', 'Go', 'Docker', 'PostgreSQL', 'AWS', 'Next.js', 'Rust', 'Kubernetes', 'GraphQL', 'CI-CD Pipelines', 'Swift Mobile', 'SQL Optimization'],
  marketers: ['SaaS Product Launch', 'E-commerce Brand', 'B2B Lead Generation', 'Local Service Business', 'Personal Brand', 'Real Estate Agency', 'Mobile App Marketing', 'Fitness Coach Marketing', 'Event Promotion', 'Non-profit Outreach', 'TikTok Organic', 'LinkedIn Branding', 'Cold Email Outreach', 'Influencer Campaigns', 'Conversion Rate Optimization'],
  recruiters: ['Senior Software Engineer', 'Product Manager', 'Data Analyst', 'HR Business Partner', 'Customer Success Manager', 'Financial Analyst', 'Marketing Director', 'Sales Executive', 'UX Designer', 'DevOps Specialist', 'Technical Sourcing', 'Executive Search', 'Diversity Hiring', 'Onboarding Systems', 'Talent Vetting'],
  students: ['AP US History', 'Organic Chemistry', 'Calculus BC', 'Macroeconomics', 'Introduction to Philosophy', 'Environmental Science', 'Linear Algebra', 'World Literature', 'Psychology 101', 'Sociology', 'Physics C', 'European History', 'Computer Science A', 'SAT Test Prep', 'College Applications'],
  accountants: ['Corporate Tax Returns', 'Monthly Bookkeeping', 'Internal Audit Prep', 'Cash Flow Forecasting', 'Fixed Asset Depreciation', 'Inventory Valuation', 'Payroll Reconciliation', 'Budget vs Actual Variance', 'SaaS ARR Analysis', 'Mergers & Acquisitions Due Diligence', 'Tax Audit Support', 'Forensic Accounting', 'Cost Allocation Models', 'Cryptocurrency Taxing', 'QuickBooks Integration'],
  photographers: ['Studio Portraits', 'Wedding Events', 'Natural Light Scenarios', 'Product Visuals', 'Camera Rig Configs', 'Lightroom Presets', 'Model Directing', 'Commercial Advertising', 'Headshots', 'Fine Art Curation', 'Real Estate Shoots', 'Drone Aerials', 'Portrait Retouching', 'Color Grading LUTs', 'Client Print Sales'],
  'hr-professionals': ['Employee Onboarding', 'Conflict Resolution', 'Compliance Audits', 'Performance Appraisals', 'Policy Manuals', 'Benefits Enrollment', 'Diversity Training', 'Workspace Guidelines', 'Exit Interviews', 'Termination Protocols', 'Remote Work Policy', 'Employee Retention', 'Salary Benchmark Audits', 'Mental Health Wellness', 'Incident Reporting'],
  'content-writers': ['SEO Blog Outlines', 'Headline Writing', 'Intro Hooks', 'Newsletter Layouts', 'Whitepapers', 'Case Studies', 'Ebooks', 'Competitor Audits', 'FAQ Copywriting', 'Style Editing', 'Ghostwriting Threads', 'Press Releases', 'Product Descriptions', 'Interactive Quizzes Copy', 'Content Refresh Guides'],
  copywriters: ['AIDA Landing Pages', 'PAS Email Sequences', 'Facebook Ad Layouts', 'Sales Pitch Frameworks', 'Slogans', 'Pricing Pages', 'Upsell Funnels', 'SMS Marketing Copy', 'VSL Scripts', 'Testimonials Blocks', 'Email Subject Lines', 'Google Search Ads', 'Product Comparison Tables', 'Checkout Cart Recovery', 'Customer Winback Scripts'],
  entrepreneurs: ['Business Models Validation', 'Pitch Deck Outlines', 'Competitor Matrix Profiles', 'Resource Allocations', 'Venture Capital Scenarios', 'SaaS Pricing Audits', 'Go-To-Market Timelines', 'Customer Personas Audits', 'Exit Options Analysis', 'Strategic Partners Maps', 'Bootstrapping Budgets', 'MVP Validation Scripts', 'Fractional Hire Sourcing', 'Unit Economics Calculators', 'Market Penetration Roadmaps']
};

const difficulties: ('beginner' | 'intermediate' | 'advanced')[] = ['beginner', 'intermediate', 'advanced'];

// We loop through categories and dynamically create prompts
categories.forEach((cat) => {
  const profSlug = cat.professionSlug;
  const profSubjects = subjects[profSlug as keyof typeof subjects] || [
    'General Workflows', 'Client Engagements', 'Process Optimization', 'Reporting Metrics', 
    'Strategic Planning', 'Operational Alignment', 'Team Management', 'Asset Curation', 
    'Compliance Review', 'Budget Allocations', 'Security Compliance', 'Cost Control Audits',
    'Resource Scheduling', 'Quality Assurance', 'Training Workbooks'
  ];
  
  profSubjects.forEach((subject, index) => {
    const id = `${profSlug.substring(0, 2)}-gen-${cat.slug.substring(0, 3)}-${index}`;
    const slug = `chatgpt-prompts-for-${profSlug}-${cat.slug}-${subject.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    const difficulty = difficulties[index % difficulties.length];
    
    let title = '';
    let content = '';
    let description = '';
    let useCase = '';
    let exampleOutput = '';
    let tags: string[] = [];

    if (profSlug === 'teachers') {
      title = `${cat.name} ChatGPT Prompts for ${subject}`;
      description = `A curated, highly effective ChatGPT prompt designed to help educators with ${cat.name.toLowerCase()} for ${subject}.`;
      useCase = `Use this template when you need to prepare or optimize ${cat.name.toLowerCase()} materials for your ${subject} class.`;
      content = `You are an expert educator in ${subject}. Create a high-quality resource for ${cat.name.toLowerCase()} on the topic of [TOPIC]. Set the grade level to [GRADE]. Provide clear directions, exercises, rubrics if applicable, and alignment with academic standards.`;
      exampleOutput = `### ${subject} ${cat.name} Resource\n**Topic:** [TOPIC]\n**Outcome:** Generated lesson assets, homework exercises, and grading rubrics tailored to ${subject} standards. Ready for classroom use.`;
      tags = ['education', subject.toLowerCase(), cat.name.toLowerCase(), 'classroom', 'teachers'];
    } else if (profSlug === 'developers') {
      title = `Best ${cat.name} Prompts for ${subject}`;
      description = `Improve your development workflow and solve ${cat.name.toLowerCase()} challenges in ${subject} with this senior developer prompt.`;
      useCase = `Perfect for software developers looking to automate and speed up ${cat.name.toLowerCase()} in their ${subject} codebase.`;
      content = `You are a senior software developer specializing in ${subject}. Help me with a ${cat.name.toLowerCase()} task for my project. Detail potential bugs, edge cases, performance considerations, and write clean, commented code illustrating best practices.`;
      exampleOutput = `### ${subject} ${cat.name} Solution\n\`\`\`${subject.toLowerCase()}\n// Example code showing optimized implementation of ${cat.name.toLowerCase()} for ${subject}...\n\`\`\``;
      tags = ['programming', subject.toLowerCase(), cat.name.toLowerCase(), 'code', 'developers'];
    } else if (profSlug === 'marketers') {
      title = `AI Prompts for ${subject} ${cat.name}`;
      description = `Boost your marketing results with this ${cat.name.toLowerCase()} prompt tailored for ${subject} campaigns.`;
      useCase = `Use this prompt when planning or executing ${cat.name.toLowerCase()} content and copy for ${subject}.`;
      content = `You are an elite growth marketer and copywriter. Create a comprehensive strategy and copy for ${cat.name.toLowerCase()} for a ${subject}. Define the target audience, tone of voice, copy parameters, and key metrics.`;
      exampleOutput = `### ${subject} - ${cat.name} Strategy\n**Campaign Goal:** Drive high-intent traffic and increase conversions...\n**Sample Copy Draft:** [Generated copy tailored to ${subject} audience]`;
      tags = ['marketing', subject.toLowerCase(), cat.name.toLowerCase(), 'growth', 'marketers'];
    } else if (profSlug === 'recruiters') {
      title = `AI Prompts for Recruiters: ${subject} ${cat.name}`;
      description = `Optimize your recruitment and hiring process for ${subject} positions using this tailored screening prompt.`;
      useCase = `Helps talent acquisition teams streamline candidate vetting and ${cat.name.toLowerCase()} for high-priority ${subject} roles.`;
      content = `You are a professional technical recruiter. Create materials for ${cat.name.toLowerCase()} for a ${subject} position. Include key requirements, vetting questions, evaluation scorecards, and candidate communications templates.`;
      exampleOutput = `### Hiring Guide: ${subject}\n**Role:** ${subject}\n**Vetting Questions:** [Tailored questions testing core ${subject} skills]\n**Scorecard Criteria:** [1 to 5 rating scale]`;
      tags = ['recruiting', subject.toLowerCase(), cat.name.toLowerCase(), 'hiring', 'recruiters'];
    } else if (profSlug === 'students') {
      title = `${cat.name} Study Prompts for ${subject}`;
      description = `Ace your exams and accelerate your learning in ${subject} using this interactive study prompt.`;
      useCase = `Use this prompt to prepare study guides, notes, summaries, or research papers for your ${subject} course.`;
      content = `You are a top academic tutor. Help me study ${cat.name.toLowerCase()} in ${subject}. Break down complex theories, provide clear explanations, practice questions, and suggest memory frameworks.`;
      exampleOutput = `### Study Pack: ${subject}\n**Subject Matter:** Key elements of ${cat.name}...\n**Mnemonics:** Acronyms and visual maps for memorization...`;
      tags = ['study', subject.toLowerCase(), cat.name.toLowerCase(), 'academia', 'students'];
    } else if (profSlug === 'accountants') {
      title = `Prompt Engineering for Accountants: ${subject} ${cat.name}`;
      description = `Streamline your accounting and ${cat.name.toLowerCase()} tasks for ${subject} using this professional financial prompt.`;
      useCase = `Use this when reviewing, reporting, or analyzing ${subject} data in an accounting or finance practice.`;
      content = `You are a certified public accountant (CPA). Help me perform ${cat.name.toLowerCase()} on a ${subject} project. Outline regulatory compliance, audit checklists, tax regulations, and key reporting metrics.`;
      exampleOutput = `### Financial Report: ${subject}\n**Asset Category:** ${subject}\n**Standard:** GAAP / IFRS compliance guidelines...\n**Analysis Summary:** ...`;
      tags = ['accounting', subject.toLowerCase(), cat.name.toLowerCase(), 'finance', 'accountants'];
    } else {
      title = `Best ${cat.name} Prompts for ${subject}`;
      description = `An AI template designed to help professionals perform ${cat.name.toLowerCase()} for ${subject}.`;
      useCase = `Use this prompt to organize, streamline, or audit ${cat.name.toLowerCase()} relating to ${subject}.`;
      content = `You are an expert advisor in ${subject}. Help me optimize and execute ${cat.name.toLowerCase()} tasks. Draft clear instructions, provide worksheets, and suggest structural milestones to complete the project successfully.`;
      exampleOutput = `### ${subject} - ${cat.name} Output\n**Objective:** Complete ${cat.name.toLowerCase()} operations...\n**Suggested Action Steps:** [Generated custom action guidelines for ${subject}]`;
      tags = [profSlug, subject.toLowerCase().replace(/ /g, '-'), cat.name.toLowerCase(), 'workflows'];
    }

    generatedPrompts.push({
      id,
      slug,
      title,
      content,
      description,
      useCase,
      professionSlug: profSlug,
      categorySlug: cat.slug,
      difficulty,
      exampleOutput,
      tags,
      featured: index === 0,
    });
  });
});

const mappedEmailPrompts: Prompt[] = emailPrompts.map(ep => ({
  id: ep.id,
  slug: ep.slug,
  title: ep.title,
  content: ep.content,
  description: ep.description,
  useCase: ep.description,
  professionSlug: 'emails',
  categorySlug: ep.categorySlug,
  difficulty: 'intermediate' as const,
  exampleOutput: ep.exampleOutput,
  tags: ep.tags,
  featured: true
}));

export const prompts: Prompt[] = [...staticPrompts, ...generatedPrompts, ...mappedEmailPrompts];

// ========== QUERY FUNCTIONS ==========

export function getPromptsByProfession(professionSlug: string): Prompt[] {
  return prompts.filter((p) => p.professionSlug === professionSlug);
}

export function getPromptsByCategory(categorySlug: string, professionSlug: string): Prompt[] {
  return prompts.filter((p) => p.categorySlug === categorySlug && p.professionSlug === professionSlug);
}

export function getPromptBySlug(slug: string): Prompt | undefined {
  return prompts.find((p) => p.slug === slug);
}

export function getFeaturedPrompts(limit = 6): Prompt[] {
  return prompts.filter((p) => p.featured).slice(0, limit);
}

export function getRelatedPrompts(prompt: Prompt, limit = 4): Prompt[] {
  return prompts
    .filter((p) => p.id !== prompt.id && (p.categorySlug === prompt.categorySlug || p.professionSlug === prompt.professionSlug))
    .slice(0, limit);
}

export function searchPrompts(query: string, professionSlug?: string): Prompt[] {
  const q = query.toLowerCase();
  return prompts.filter((p) => {
    const matchesQuery =
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      p.content.toLowerCase().includes(q);
    const matchesProfession = professionSlug ? p.professionSlug === professionSlug : true;
    return matchesQuery && matchesProfession;
  });
}

export function getAllPromptSlugs(): string[] {
  return prompts.map((p) => p.slug);
}
