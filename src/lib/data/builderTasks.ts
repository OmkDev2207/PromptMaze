// src/lib/data/builderTasks.ts

export interface BuilderInput {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'select';
  placeholder?: string;
  options?: string[];
}

export interface BuilderTask {
  id: string;
  name: string;
  slug: string;
  description: string;
  inputs: BuilderInput[];
  basePrompt: string;
  recommendations: string[];
}

export interface BuilderProfession {
  id: string;
  slug: string;
  name: string;
  icon: string;
  gradient: string;
  tasks: BuilderTask[];
}

export const builderProfessions: BuilderProfession[] = [
  {
    id: 'developers',
    slug: 'developers',
    name: 'Developer',
    icon: '💻',
    gradient: 'from-emerald-500 to-teal-655',
    tasks: [
      {
        id: 'dev-debug',
        name: 'Debug Code',
        slug: 'debug-code',
        description: 'Find and fix syntax, logic, or runtime errors in a code block.',
        inputs: [
          { key: 'language', label: 'Programming Language', type: 'text', placeholder: 'e.g. Python, TypeScript' },
          { key: 'code', label: 'Code Snippet', type: 'textarea', placeholder: 'Paste code with error here...' },
          { key: 'error', label: 'Error Message (Optional)', type: 'textarea', placeholder: 'Paste console error or traceback...' }
        ],
        basePrompt: `You are an expert debugger in [LANGUAGE]. Please analyze the following code block for bugs:
\`\`\`
[CODE]
\`\`\`
[ERROR_START]The error traceback is:
[ERROR][ERROR_END]

Identify the issue, explain why it happens, and provide the fully optimized, corrected code.`,
        recommendations: ['Provide programming language', 'Include exact error message or stack trace', 'Specify target framework or library version']
      },
      {
        id: 'dev-refactor',
        name: 'Refactor Code',
        slug: 'refactor-code',
        description: 'Optimize code structure, improve readability, and reduce complexity.',
        inputs: [
          { key: 'language', label: 'Programming Language', type: 'text', placeholder: 'e.g. Python, JS' },
          { key: 'code', label: 'Code Snippet', type: 'textarea', placeholder: 'Paste code to refactor...' },
          { key: 'goals', label: 'Refactoring Goals', type: 'text', placeholder: 'e.g. improve speed, use newer syntax, reduce memory' }
        ],
        basePrompt: `You are a senior software architect. Refactor this [LANGUAGE] code to achieve the following goals: [GOALS].
\`\`\`
[CODE]
\`\`\`
Explain the changes made, their performance or readability implications, and output the clean version.`,
        recommendations: ['Specify focus area (performance vs readability)', 'Define coding conventions or style guidelines', 'Provide context on how the function is used']
      },
      {
        id: 'dev-explain',
        name: 'Explain Code',
        slug: 'explain-code',
        description: 'Break down complex code snippets into clear, plain explanations.',
        inputs: [
          { key: 'language', label: 'Programming Language', type: 'text', placeholder: 'e.g. C++, Go' },
          { key: 'code', label: 'Code Snippet', type: 'textarea', placeholder: 'Paste code to explain...' },
          { key: 'level', label: 'Target Audience Level', type: 'select', options: ['Beginner', 'Intermediate', 'Advanced'] }
        ],
        basePrompt: `Explain this [LANGUAGE] code snippet to an audience of [LEVEL] level developers.
\`\`\`
[CODE]
\`\`\`
Provide a high-level summary of what it does, followed by a step-by-step breakdown of key logic blocks.`,
        recommendations: ['State preferred level of detail', 'Ask for analogies for complex structures', 'Specify language features of interest']
      },
      {
        id: 'dev-api',
        name: 'Create API Endpoint',
        slug: 'create-api',
        description: 'Generate clean API endpoints with validations, models, and docs.',
        inputs: [
          { key: 'framework', label: 'Language & Framework', type: 'text', placeholder: 'e.g. Next.js API route, Express, FastAPI' },
          { key: 'endpoint', label: 'Endpoint Specifications', type: 'textarea', placeholder: 'e.g. POST /users to create a profile' },
          { key: 'models', label: 'Data Model/Fields', type: 'text', placeholder: 'e.g. email (string), age (number)' }
        ],
        basePrompt: `Design and write a complete API endpoint using [FRAMEWORK].
Endpoint specifications: [ENDPOINT]
Data model details: [MODELS]
Include appropriate input validation, response formats, error handling (400, 500), and Swagger/JSDoc documentation.`,
        recommendations: ['List specific error handling rules', 'Provide desired status code mapping', 'Specify database ORM integration if any']
      },
      {
        id: 'dev-optimize',
        name: 'Optimize Performance',
        slug: 'optimize-performance',
        description: 'Find performance bottlenecks and optimize execution speed.',
        inputs: [
          { key: 'language', label: 'Language', type: 'text', placeholder: 'e.g. Java, Python' },
          { key: 'code', label: 'Slow Code Snippet', type: 'textarea', placeholder: 'Paste code to optimize...' },
          { key: 'bottleneck', label: 'Known Bottleneck (Optional)', type: 'text', placeholder: 'e.g. nested loops, memory leaks' }
        ],
        basePrompt: `Optimize the execution performance of this [LANGUAGE] script.
\`\`\`
[CODE]
\`\`\`
[BOTTLENECK_START]The known bottleneck is: [BOTTLENECK][BOTTLENECK_END]
Provide the optimized code, explain the changes, and outline the Big-O time and space complexity changes.`,
        recommendations: ['Define target constraints', 'Mention resource limitations (RAM vs CPU)', 'Provide sample input sizes']
      },
      {
        id: 'dev-test',
        name: 'Write Unit Tests',
        slug: 'write-unit-tests',
        description: 'Generate unit tests covering edge cases, success paths, and errors.',
        inputs: [
          { key: 'framework', label: 'Test Framework', type: 'text', placeholder: 'e.g. Jest, PyTest, JUnit' },
          { key: 'code', label: 'Code to Test', type: 'textarea', placeholder: 'Paste code to write tests for...' },
          { key: 'cases', label: 'Special Test Cases (Optional)', type: 'text', placeholder: 'e.g. mock API call, check null values' }
        ],
        basePrompt: `Write robust unit tests using [FRAMEWORK] for this code block:
\`\`\`
[CODE]
\`\`\`
[CASES_START]Make sure to explicitly test these scenarios: [CASES][CASES_END]
Cover standard successful execution paths, edge cases, and expected errors. Use mock utilities where appropriate.`,
        recommendations: ['Specify mocking library requirements', 'Ask for boundary check scenarios', 'Specify coverage target level']
      },
      {
        id: 'dev-review',
        name: 'Code Review',
        slug: 'code-review',
        description: 'Evaluate code for design issues, safety risks, and clean structures.',
        inputs: [
          { key: 'language', label: 'Language', type: 'text', placeholder: 'e.g. Rust, Go' },
          { key: 'code', label: 'Code to Review', type: 'textarea', placeholder: 'Paste code snippet here...' },
          { key: 'focus', label: 'Review Focus', type: 'select', options: ['Security & Safety', 'Readability & Complexity', 'All Checklist'] }
        ],
        basePrompt: `Perform a comprehensive code review focusing on [FOCUS] for this [LANGUAGE] snippet:
\`\`\`
[CODE]
\`\`\`
List issues with line numbers, code quality problems, security vulnerabilities, or anti-patterns, and suggest improvements.`,
        recommendations: ['Specify security standards to check (OWASP, etc.)', 'Define target architecture principles', 'Request refactored alternatives for high-complexity lines']
      },
      {
        id: 'dev-docs',
        name: 'Write Documentation',
        slug: 'write-docs',
        description: 'Generate detailed technical specifications and code comments.',
        inputs: [
          { key: 'language', label: 'Language/Framework', type: 'text', placeholder: 'e.g. Python (Sphinx), JS (JSDoc)' },
          { key: 'code', label: 'Code Block', type: 'textarea', placeholder: 'Paste code here...' },
          { key: 'format', label: 'Docs Format', type: 'select', options: ['Inline Comments & JSDoc', 'README Markdown Guide', 'API Reference spec'] }
        ],
        basePrompt: `Generate professional documentation formatted as [FORMAT] for this [LANGUAGE] code:
\`\`\`
[CODE]
\`\`\`
Ensure all variables, parameters, return types, exceptions, and usage examples are clearly detailed.`,
        recommendations: ['Specify language-standard styling standard', 'Request concrete code usage examples', 'Include prerequisites or requirements lists']
      },
      {
        id: 'dev-arch',
        name: 'Design Architecture',
        slug: 'design-architecture',
        description: 'Outline microservices, database schemas, and caching layouts.',
        inputs: [
          { key: 'type', label: 'System Type', type: 'text', placeholder: 'e.g. Real-time chat app, E-commerce cart' },
          { key: 'requirements', label: 'Core Requirements', type: 'textarea', placeholder: 'e.g. support 10k users, high availability' },
          { key: 'stack', label: 'Preferred Stack', type: 'text', placeholder: 'e.g. AWS, PostgreSQL, Redis' }
        ],
        basePrompt: `Design a scalable system architecture for a [TYPE].
Core requirements: [REQUIREMENTS]
Preferred tech stack: [STACK]
Provide a detailed blueprint containing database schema, services layout, caching strategy, and key failure mitigations.`,
        recommendations: ['Highlight scale bounds', 'Describe data persistence strategy', 'Specify latency thresholds']
      },
      {
        id: 'dev-sql',
        name: 'SQL Query Builder',
        slug: 'sql-query-builder',
        description: 'Create optimized SQL queries for specific schemas and operations.',
        inputs: [
          { key: 'schema', label: 'Table Schemas', type: 'textarea', placeholder: 'e.g. users (id, name), orders (id, user_id, amount)...' },
          { key: 'goal', label: 'Query Goal', type: 'text', placeholder: 'e.g. get total spent per user this month' },
          { key: 'dialect', label: 'SQL Dialect', type: 'select', options: ['PostgreSQL', 'MySQL', 'SQLite', 'MS SQL Server'] }
        ],
        basePrompt: `Write an optimized [DIALECT] query based on this database schema:
\`\`\`
[SCHEMA]
\`\`\`
Query Goal: [GOAL]
Explain the query logic, join types used, and indexing recommendations to make this run efficiently.`,
        recommendations: ['Define indexing constraints', 'Specify null value treatment rules', 'Define sort orders or page caps']
      }
    ]
  },
  {
    id: 'teachers',
    slug: 'teachers',
    name: 'Teacher',
    icon: '🎓',
    gradient: 'from-blue-500 to-indigo-600',
    tasks: [
      {
        id: 'teach-lp',
        name: 'Lesson Plan',
        slug: 'lesson-plan',
        description: 'Generate structured lesson plans with objectives, hooks, and rubrics.',
        inputs: [
          { key: 'subject', label: 'Subject/Grade', type: 'text', placeholder: 'e.g. 7th Grade Science' },
          { key: 'topic', label: 'Lesson Topic', type: 'text', placeholder: 'e.g. Photosynthesis' },
          { key: 'duration', label: 'Lesson Duration', type: 'text', placeholder: 'e.g. 45 minutes' }
        ],
        basePrompt: `Create a structured lesson plan for [SUBJECT] covering the topic: [TOPIC].
Duration: [DURATION].
Include:
1. Learning Objectives
2. Materials Required
3. Hook & Intro (5m)
4. Direct Instruction (15m)
5. Guided Practice (10m)
6. Independent Practice (10m)
7. Exit Ticket (5m)
8. Differentiation adjustments.`,
        recommendations: ['Define academic standards targeted', 'Specify learner difficulties to scaffold', 'Define assessment style']
      },
      {
        id: 'teach-quiz',
        name: 'Quiz Creation',
        slug: 'quiz-creation',
        description: 'Generate multiple-choice or short-answer quizzes with answer keys.',
        inputs: [
          { key: 'subject', label: 'Subject & Grade', type: 'text', placeholder: 'e.g. High School History' },
          { key: 'topic', label: 'Quiz Topic', type: 'text', placeholder: 'e.g. French Revolution' },
          { key: 'count', label: 'Questions Count', type: 'text', placeholder: 'e.g. 5 multiple choice, 2 essay' }
        ],
        basePrompt: `Generate a quiz for [SUBJECT] on the topic: [TOPIC].
Questions requested: [COUNT].
Provide clear, unambiguous question stems, plausible distractor choices for multiple choice, and include a full correct answer key with explanatory notes at the end.`,
        recommendations: ['Specify question difficulty mix', 'Define answer key requirements', 'State formatting style preferences']
      },
      {
        id: 'teach-assess',
        name: 'Assessment Design',
        slug: 'assessment-design',
        description: 'Build projects, essays, or tests aligned to standards.',
        inputs: [
          { key: 'type', label: 'Assessment Type', type: 'text', placeholder: 'e.g. End of Unit Project, Final Exam' },
          { key: 'grade', label: 'Grade & Subject', type: 'text', placeholder: 'e.g. 9th Grade Algebra' },
          { key: 'goals', label: 'Learning Objectives', type: 'textarea', placeholder: 'e.g. show mastery of factoring quadratic equations' }
        ],
        basePrompt: `Design a [TYPE] assessment for [GRADE].
Learning objectives to test: [GOALS].
Include a detailed description of the assessment, step-by-step student instructions, evaluation guidelines, and a complete 4-point grading rubric.`,
        recommendations: ['Specify rubric categories (accuracy, structure, etc.)', 'Provide student instructions language tone preferences', 'Add project constraints']
      },
      {
        id: 'teach-activity',
        name: 'Classroom Activities',
        slug: 'classroom-activities',
        description: 'Design engaging group projects, warm-ups, or games.',
        inputs: [
          { key: 'topic', label: 'Topic & Grade', type: 'text', placeholder: 'e.g. Fractions, 4th Grade' },
          { key: 'groupSize', label: 'Group Size', type: 'text', placeholder: 'e.g. Pairs, groups of 4' },
          { key: 'materials', label: 'Materials Available', type: 'text', placeholder: 'e.g. paper, scissors, dice, none' }
        ],
        basePrompt: `Design an interactive classroom activity for [TOPIC].
Group setup: [GROUPSIZE].
Materials available: [MATERIALS].
Ensure the activity is highly engaging, takes less than 20 minutes, and solidifies understanding of the core concept. Provide setup steps and class management tips.`,
        recommendations: ['State target energy level', 'List student safety rules if physical', 'Provide teacher monitoring checklists']
      },
      {
        id: 'teach-parent',
        name: 'Parent Communication',
        slug: 'parent-communication',
        description: 'Draft polite, professional updates or behavior notices.',
        inputs: [
          { key: 'purpose', label: 'Message Purpose', type: 'textarea', placeholder: 'e.g. missing homework notice, field trip reminder' },
          { key: 'tone', label: 'Communication Tone', type: 'select', options: ['Friendly & Supportive', 'Professional & Direct', 'Urgent & Serious'] },
          { key: 'details', label: 'Key Details', type: 'text', placeholder: 'e.g. student missed 3 assignments, due Friday' }
        ],
        basePrompt: `Write an email to a parent/guardian.
Purpose: [PURPOSE]
Tone: [TONE]
Details to include: [DETAILS]
Ensure the communication is empathetic, clear, professional, and offers a collaborative solution or next steps.`,
        recommendations: ['Provide placeholder tags for name/dates', 'State desired level of detail', 'Define call-to-action requirements']
      },
      {
        id: 'teach-feedback',
        name: 'Student Feedback',
        slug: 'student-feedback',
        description: 'Craft constructive feedback outlining strengths and improvements.',
        inputs: [
          { key: 'assignment', label: 'Assignment Title', type: 'text', placeholder: 'e.g. Persuasive Essay on Recycling' },
          { key: 'strengths', label: 'Student Strengths', type: 'text', placeholder: 'e.g. strong thesis statement, clean grammar' },
          { key: 'improvements', label: 'Areas to Improve', type: 'text', placeholder: 'e.g. needs more evidence for body paragraphs' }
        ],
        basePrompt: `Craft supportive, constructive feedback for a student on the assignment "[ASSIGNMENT]".
Strengths observed: [STRENGTHS]
Areas of growth: [IMPROVEMENTS]
Write the feedback in a encouraging "Feedback Sandwich" style (Praise - Critique - Encouragement) suitable for student readability.`,
        recommendations: ['Define age-appropriate vocabulary limits', 'Provide guidance on tone', 'Suggest next steps format']
      },
      {
        id: 'teach-iep',
        name: 'IEP Accommodations',
        slug: 'iep-accommodations',
        description: 'Draft modifications for classrooms, tests, and homework.',
        inputs: [
          { key: 'needs', label: 'Student Learning Needs', type: 'textarea', placeholder: 'e.g. ADHD, visual processing delay, dyslexia' },
          { key: 'subject', label: 'Subject & Grade', type: 'text', placeholder: 'e.g. 5th Grade English Language Arts' }
        ],
        basePrompt: `Create a set of practical classroom accommodations for a student with [NEEDS] in [SUBJECT].
Provide concrete, actionable adjustments for:
1. Instruction delivery
2. Assignments and tests
3. Environmental setup
4. Executive function support.`,
        recommendations: ['Align with standard IEP frameworks', 'Focus on low-cost/easy adjustments', 'Provide teacher monitoring suggestions']
      },
      {
        id: 'teach-sub',
        name: 'Emergency Sub Plan',
        slug: 'sub-plan',
        description: 'Foolproof substitute lesson guides with clear instructions.',
        inputs: [
          { key: 'subject', label: 'Subject & Grade', type: 'text', placeholder: 'e.g. 8th Grade History' },
          { key: 'topic', label: 'Topic to Cover', type: 'text', placeholder: 'e.g. Jamestown Settlement' },
          { key: 'materials', label: 'Sub Materials', type: 'text', placeholder: 'e.g. workbook page 20, history video link' }
        ],
        basePrompt: `Create an emergency lesson plan for a substitute teacher.
Subject/Grade: [SUBJECT]
Topic: [TOPIC]
Available materials: [MATERIALS]
Ensure instructions are extremely clear, require zero subject knowledge from the sub, and keep students occupied and behaving for the entire period.`,
        recommendations: ['Provide classroom management protocols', 'Provide extension activities if done early', 'State clear directions for the sub']
      },
      {
        id: 'teach-rubric',
        name: 'Rubric Maker',
        slug: 'rubric-maker',
        description: 'Create detailed grading rubrics with descriptive levels.',
        inputs: [
          { key: 'project', label: 'Project Description', type: 'text', placeholder: 'e.g. Science Fair Poster Presentation' },
          { key: 'criteria', label: 'Evaluation Criteria', type: 'textarea', placeholder: 'e.g. content accuracy, organization, presentation quality' },
          { key: 'levels', label: 'Scale Levels', type: 'select', options: ['4 Levels (Advanced, Proficient, Basic, Below Basic)', '3 Levels (Exceeds, Meets, Developing)'] }
        ],
        basePrompt: `Generate a detailed grading rubric for: [PROJECT].
Evaluation criteria: [CRITERIA].
Grading scale layout: [LEVELS].
Format as a clear grid structure with descriptive benchmarks for what a student must demonstrate to earn each score.`,
        recommendations: ['Format output as a table', 'Ensure benchmarks are measurable', 'Specify target grade guidelines']
      },
      {
        id: 'teach-syllabus',
        name: 'Syllabus Draft',
        slug: 'syllabus-draft',
        description: 'Draft curriculum syllabi with course descriptions and policies.',
        inputs: [
          { key: 'course', label: 'Course Name & Grade', type: 'text', placeholder: 'e.g. Introduction to Biology (Grade 9)' },
          { key: 'duration', label: 'Duration', type: 'text', placeholder: 'e.g. Semester, Full Academic Year' },
          { key: 'topics', label: 'Core Unit Topics', type: 'textarea', placeholder: 'e.g. Unit 1: Ecology, Unit 2: Cells, Unit 3: Genetics' }
        ],
        basePrompt: `Draft a professional, welcoming course syllabus for [COURSE].
Course duration: [DURATION].
Topics list: [TOPICS].
Include:
1. Course Description
2. Core Units Breakdown
3. Grading Policy Outline (e.g. Homework, Exams, Participation)
4. Classroom Guidelines and Expectations.`,
        recommendations: ['State course tone guidelines', 'Specify formatting standards', 'Define textbook/materials requirement statements']
      }
    ]
  },
  {
    id: 'students',
    slug: 'students',
    name: 'Student',
    icon: '📚',
    gradient: 'from-yellow-500 to-orange-500',
    tasks: [
      {
        id: 'stud-prep',
        name: 'Exam Preparation',
        slug: 'exam-prep',
        description: 'Generate study guides, outline reviews, and flashcard topics.',
        inputs: [
          { key: 'subject', label: 'Subject/Course', type: 'text', placeholder: 'e.g. Chemistry 101' },
          { key: 'topic', label: 'Topics to Cover', type: 'textarea', placeholder: 'e.g. Periodic table, ionic bonding, stoichiometry' },
          { key: 'format', label: 'Preferred Style', type: 'select', options: ['Comprehensive Review Outline', 'Mock Quiz Questions', 'Flashcard Prompts List'] }
        ],
        basePrompt: `Create an exam study guide for [SUBJECT].
Topics to review: [TOPIC].
Study guide format: [FORMAT].
Ensure definitions are clear, and highlight common misconceptions or tips for remembering key concepts.`,
        recommendations: ['Specify focus areas', 'List standard equations or terms to include', 'Request mock practice questions']
      },
      {
        id: 'stud-schedule',
        name: 'Study Schedule',
        slug: 'study-schedule',
        description: 'Create calendar study plans leading up to final deadlines.',
        inputs: [
          { key: 'date', label: 'Exam Date / Deadline', type: 'text', placeholder: 'e.g. in 2 weeks, Dec 15th' },
          { key: 'topics', label: 'Topics to Cover', type: 'textarea', placeholder: 'e.g. Chapters 1 to 5 of biology textbook' },
          { key: 'hours', label: 'Daily Study Hours', type: 'text', placeholder: 'e.g. 2 hours a day, 5 days a week' }
        ],
        basePrompt: `Design a structured study calendar leading up to the deadline: [DATE].
Topics to master: [TOPICS].
Study capacity: [HOURS].
Organize the calendar day-by-day, incorporating regular review intervals, breaks, and practice tests to ensure retention.`,
        recommendations: ['Use spaced-repetition schedules', 'Include time buffers for difficult topics', 'Incorporate practice test days']
      },
      {
        id: 'stud-essay',
        name: 'Essay Outline',
        slug: 'essay-outline',
        description: 'Build thesis statements, paragraph flows, and argument points.',
        inputs: [
          { key: 'topic', label: 'Essay Topic/Question', type: 'textarea', placeholder: 'e.g. Should social media platforms be regulated?' },
          { key: 'thesis', label: 'Thesis Idea (Optional)', type: 'text', placeholder: 'e.g. Yes, to protect minor data and mental health' },
          { key: 'length', label: 'Target Length', type: 'text', placeholder: 'e.g. 5 paragraphs, 1500 words' }
        ],
        basePrompt: `Create a detailed essay outline for the topic: [TOPIC].
[THESIS_START]Core thesis direction: [THESIS][THESIS_END]
Target structure size: [LENGTH].
Provide:
1. Proposed Thesis Statement
2. Introduction outline with hook
3. Body paragraph structure (Topic, Evidence, Analysis)
4. Counterargument handling
5. Conclusion summary.`,
        recommendations: ['Suggest specific thesis arguments', 'Specify citation style context (MLA, APA)', 'Add support arguments']
      },
      {
        id: 'stud-flash',
        name: 'Flashcard Creator',
        slug: 'flashcard-creator',
        description: 'Create two-sided Q&A sets formatted for Quizlet or Anki.',
        inputs: [
          { key: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g. Biology Vocabulary' },
          { key: 'topic', label: 'Topic details', type: 'textarea', placeholder: 'e.g. cell organelles and their definitions' }
        ],
        basePrompt: `Create a set of study flashcards for [SUBJECT] based on: [TOPIC].
Format each card with a clear, concise question on the "Front" and a precise, easy-to-memorize explanation on the "Back". Keep cards focused on active recall.`,
        recommendations: ['Format output as a table', 'Ask for memory hooks/mnemonics', 'Keep explanation simple']
      },
      {
        id: 'stud-simplify',
        name: 'Simplify Concept',
        slug: 'simplify-concept',
        description: 'Explain tough topics using simple language and analogies.',
        inputs: [
          { key: 'concept', label: 'Concept to Explain', type: 'text', placeholder: 'e.g. Quantum Entanglement, Black Holes' },
          { key: 'level', label: 'Target Audience Level', type: 'select', options: ['5-year-old (ELI5)', 'High School Student', 'Non-Technical Adult'] }
        ],
        basePrompt: `Explain the concept of "[CONCEPT]" to a [LEVEL].
Use clear, simple analogies, avoid complex technical jargon, and focus on the fundamental intuition of how it works.`,
        recommendations: ['Request visual descriptions or diagrams', 'Use real-world everyday analogies', 'Keep sentences short and readable']
      },
      {
        id: 'stud-hw',
        name: 'Solve Homework Step-by-Step',
        slug: 'solve-homework',
        description: 'Solve homework problems with detailed explanations of steps.',
        inputs: [
          { key: 'problem', label: 'Homework Problem', type: 'textarea', placeholder: 'Paste problem text or formula here...' },
          { key: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g. Calculus, Physics' }
        ],
        basePrompt: `Solve this [SUBJECT] homework problem step-by-step:
\`\`\`
[PROBLEM]
\`\`\`
Provide a detailed explanation of each mathematical or logical step taken, state any rules/formulas applied, and highlight the final solution clearly.`,
        recommendations: ['Verify calculations step-by-step', 'Explain why equations are used', 'Highlight variables meanings']
      },
      {
        id: 'stud-sum',
        name: 'Summarize Reading',
        slug: 'summarize-reading',
        description: 'Extract core takeaways, arguments, and quotes from text.',
        inputs: [
          { key: 'text', label: 'Text to Summarize', type: 'textarea', placeholder: 'Paste textbook chapter, article, or notes...' },
          { key: 'focus', label: 'Summary Focus', type: 'text', placeholder: 'e.g. core arguments, historical dates, scientific facts' }
        ],
        basePrompt: `Generate a concise summary of the following text:
\`\`\`
[TEXT]
\`\`\`
Focus primarily on: [FOCUS].
Provide a bulleted list of core takeaways, define key terms mentioned, and list any significant supporting details.`,
        recommendations: ['List primary arguments', 'Format as readable study cards', 'Request short summaries']
      },
      {
        id: 'stud-script',
        name: 'Presentation Script',
        slug: 'presentation-script',
        description: 'Write presentation slide content and spoken voice scripts.',
        inputs: [
          { key: 'topic', label: 'Presentation Topic', type: 'text', placeholder: 'e.g. The impact of plastic pollution in oceans' },
          { key: 'duration', label: 'Target Duration', type: 'text', placeholder: 'e.g. 5 minutes, 10 slides' },
          { key: 'audience', label: 'Target Audience', type: 'text', placeholder: 'e.g. classmates, teachers, science fair judges' }
        ],
        basePrompt: `Write a presentation script for a [DURATION] talk on the topic: [TOPIC].
Target audience: [AUDIENCE].
For each slide/section provide:
- Slide Content: Bullet points or visuals to show
- Spoken Script: Exactly what the presenter should say in a natural, engaging voice.`,
        recommendations: ['Add hooks to startup slides', 'Suggest speaking pacing prompts (pause, emphasize)', 'Include transitional statements between slides']
      },
      {
        id: 'stud-bib',
        name: 'Research Bibliography',
        slug: 'research-bibliography',
        description: 'Organize research citation sources in standard formats.',
        inputs: [
          { key: 'topic', label: 'Research Topic', type: 'text', placeholder: 'e.g. solar energy efficiency improvements' },
          { key: 'format', label: 'Citation Format', type: 'select', options: ['APA 7th Edition', 'MLA 9th Edition', 'Chicago Manual of Style'] }
        ],
        basePrompt: `Create an annotated bibliography outline for a research paper on: [TOPIC].
Citation format: [FORMAT].
For each citation entry, provide a placeholder for author details and an example summary covering the source's methodology, relevance, and evaluation.`,
        recommendations: ['Include instructions on citation details', 'Provide clear formatting guides', 'Specify target sources type']
      },
      {
        id: 'stud-grammar',
        name: 'Grammar Check & Rewrite',
        slug: 'grammar-check',
        description: 'Correct grammar mistakes and improve vocabulary style.',
        inputs: [
          { key: 'text', label: 'Draft Text', type: 'textarea', placeholder: 'Paste essay paragraph or draft here...' },
          { key: 'style', label: 'Target Writing Style', type: 'select', options: ['Formal Academic', 'Clear & Concise', 'Engaging & Conversational'] }
        ],
        basePrompt: `Review and refine this text for grammar, punctuation, vocabulary, and style:
\`\`\`
[TEXT]
\`\`\`
Refine style target: [STYLE].
Highlight correction details (what was wrong and why), and output the fully polished draft.`,
        recommendations: ['Maintain original arguments', 'Provide reasons for changes', 'Clean up syntax flow']
      }
    ]
  },
  {
    id: 'recruiters',
    slug: 'recruiters',
    name: 'Recruiter',
    icon: '🤝',
    gradient: 'from-orange-500 to-amber-600',
    tasks: [
      {
        id: 'rec-jd',
        name: 'Job Description',
        slug: 'job-description',
        description: 'Generate inclusive, clear, and skill-focused job descriptions.',
        inputs: [
          { key: 'title', label: 'Job Title', type: 'text', placeholder: 'e.g. Senior Frontend Engineer' },
          { key: 'skills', label: 'Core Skills/Experience', type: 'textarea', placeholder: 'e.g. 5+ years React, TypeScript, Tailwind, Node.js' },
          { key: 'perks', label: 'Company Perks/Details', type: 'text', placeholder: 'e.g. Remote, unlimited PTO, health benefits' }
        ],
        basePrompt: `Generate a professional job description for the role: [TITLE].
Core skills requirements: [SKILLS].
Perks and corporate benefits: [PERKS].
Include sections for Role Overview, Key Responsibilities, Requirements (Must-have & Nice-to-have), Benefits, and an inclusive Equal Opportunity statement.`,
        recommendations: ['Ensure bias-free wording', 'State clear experience limits', 'Include cultural attributes']
      },
      {
        id: 'rec-screening',
        name: 'Candidate Screening',
        slug: 'candidate-screening',
        description: 'Build initial phone interview screens and scoring rubrics.',
        inputs: [
          { key: 'role', label: 'Role & Department', type: 'text', placeholder: 'e.g. Account Manager, Sales' },
          { key: 'skills', label: 'Key Skills to Screen', type: 'textarea', placeholder: 'e.g. communication, CRM management, cold calling' }
        ],
        basePrompt: `Create an initial screening call script and evaluation form for a [ROLE] candidate.
Screening targets: [SKILLS].
Provide greeting scripts, 5 direct screening questions with target/satisfactory answer descriptions, and a red-flag warning guide for recruiters.`,
        recommendations: ['Provide grading scale benchmarks', 'Limit call duration context', 'Include screening question guidelines']
      },
      {
        id: 'rec-interview',
        name: 'Interview Questions',
        slug: 'interview-questions',
        description: 'Generate behavioral and technical candidate questions.',
        inputs: [
          { key: 'role', label: 'Job Title', type: 'text', placeholder: 'e.g. Product Manager' },
          { key: 'skills', label: 'Target Skill Areas', type: 'textarea', placeholder: 'e.g. cross-functional collaboration, product design, KPIs' },
          { key: 'method', label: 'Question Type', type: 'select', options: ['STAR Method Behavioral', 'Technical Scenario-Based', 'Cultural Fit Questions'] }
        ],
        basePrompt: `Generate 8 interview questions for a [ROLE] candidate.
Target skill focus: [SKILLS].
Question type format: [METHOD].
For each question, explain what the interviewer should listen for and positive/negative indicators.`,
        recommendations: ['Provide situational scenario setup', 'Request grading criteria guidelines', 'Focus questions on metrics']
      },
      {
        id: 'rec-outreach',
        name: 'Cold Outreach Email',
        slug: 'cold-outreach',
        description: 'Draft personalized, high-open-rate candidate outreach.',
        inputs: [
          { key: 'role', label: 'Role Title', type: 'text', placeholder: 'e.g. DevOps Lead' },
          { key: 'company', label: 'Company Value Prop', type: 'textarea', placeholder: 'e.g. VC funded Series A startup, scaling platform from 1m to 10m users' },
          { key: 'hook', label: 'Personalization Hook', type: 'text', placeholder: 'e.g. their experience building scalable cloud databases' }
        ],
        basePrompt: `Draft a high-converting candidate sourcing cold email for a [ROLE] position.
Company positioning details: [COMPANY].
Personalization hook: [HOOK].
Write a punchy, click-worthy subject line, keep the body under 150 words, highlight company growth, and conclude with a low-friction call-to-action (e.g. "Open to a 10m chat?").`,
        recommendations: ['Keep subject line under 6 words', 'Use simple, conversational language', 'Highlight growth milestones']
      },
      {
        id: 'rec-offer',
        name: 'Offer Letter Draft',
        slug: 'offer-letter',
        description: 'Draft formal offer letters with compensation structures.',
        inputs: [
          { key: 'role', label: 'Job Title', type: 'text', placeholder: 'e.g. Backend Developer' },
          { key: 'salary', label: 'Salary & Equity', type: 'text', placeholder: 'e.g. $120k base, 0.05% options' },
          { key: 'benefits', label: 'Key Benefits', type: 'text', placeholder: 'e.g. health insurance, remote work, 4 weeks PTO' }
        ],
        basePrompt: `Draft a formal employment offer letter for a [ROLE] position.
Compensation details: [SALARY].
Benefits overview: [BENEFITS].
Ensure the letter is legally structured, professional, and covers salary, equity vesting, start date, supervisor reporting, and contingencies (background check).`,
        recommendations: ['Use clear placeholders for names', 'Highlight equity vesting schedule structure', 'Mention offer expiration timelines']
      },
      {
        id: 'rec-reject',
        name: 'Rejection Letter',
        slug: 'rejection-letter',
        description: 'Draft respectful, constructive candidate rejection emails.',
        inputs: [
          { key: 'stage', label: 'Interview Stage', type: 'select', options: ['Resume Review Stage', 'Initial Screening Call', 'Technical/Final Interview'] },
          { key: 'company', label: 'Company Name', type: 'text', placeholder: 'e.g. Acme Analytics' }
        ],
        basePrompt: `Write a respectful, polite candidate rejection email.
Current rejection stage: [STAGE].
Company details: [COMPANY].
Ensure the tone is warm, professional, expresses gratitude for their time, and leaves a positive impression of the brand.`,
        recommendations: ['Avoid generic template phrases', 'State that data will remain in database', 'Provide candidate feedback placeholder option']
      },
      {
        id: 'rec-rubric',
        name: 'Candidate Assessment Rubric',
        slug: 'assessment-rubric',
        description: 'Create detailed grids to evaluate candidates consistently.',
        inputs: [
          { key: 'role', label: 'Role Title', type: 'text', placeholder: 'e.g. Content Marketer' },
          { key: 'criteria', label: 'Core Criteria', type: 'textarea', placeholder: 'e.g. copy quality, SEO knowledge, project management, analytics' }
        ],
        basePrompt: `Generate a candidate interview evaluation rubric for a [ROLE] position.
Core capabilities to evaluate: [CRITERIA].
Use a 5-point scale (1: Poor, 3: Average, 5: Excellent). For each criteria, describe specific behaviors or skills that qualify a candidate for a score of 1, 3, and 5.`,
        recommendations: ['Format output as a table', 'Keep evaluations objective', 'Include scorecard definitions']
      },
      {
        id: 'rec-linkedin',
        name: 'LinkedIn Outreach',
        slug: 'linkedin-outreach',
        description: 'Write high-accept LinkedIn InMail templates.',
        inputs: [
          { key: 'role', label: 'Role Title', type: 'text', placeholder: 'e.g. UX Designer' },
          { key: 'sellingPoint', label: 'Job Highlights', type: 'text', placeholder: 'e.g. design system overhaul, remote-first' }
        ],
        basePrompt: `Write a short, engaging LinkedIn InMail candidate outreach message for a [ROLE] opportunity.
Role highlight: [SELLINGPOINT].
Keep the message under 300 characters (LinkedIn limit), start with a clean hook, highlight why their background fits, and make the CTA very low friction.`,
        recommendations: ['Keep CTA simple (yes/no)', 'Personalize hook guidelines', 'Limit words count']
      },
      {
        id: 'rec-boolean',
        name: 'Sourcing Query Builder',
        slug: 'boolean-query',
        description: 'Create Boolean search queries for LinkedIn, Google, or ATS.',
        inputs: [
          { key: 'role', label: 'Job Role', type: 'text', placeholder: 'e.g. Fullstack Python Dev' },
          { key: 'skills', label: 'Must-Have Skills', type: 'textarea', placeholder: 'e.g. Python, Django, React, AWS' },
          { key: 'exclude', label: 'Exclude Words (Optional)', type: 'text', placeholder: 'e.g. agency, recruiter, manager' }
        ],
        basePrompt: `Generate Boolean search strings to source a [ROLE] on LinkedIn or Google.
Core skills required: [SKILLS].
[EXCLUDE_START]Exclude words: [EXCLUDE][EXCLUDE_END]
Provide separate Boolean strings optimized for: LinkedIn Search, Google X-Ray Search, and ATS Database search.`,
        recommendations: ['Include variant skill synonyms (JS vs Javascript)', 'Ensure correct parentheses grouping', 'Optimize for search limits']
      },
      {
        id: 'rec-feedback',
        name: 'Interview Feedback Form',
        slug: 'interview-feedback',
        description: 'Organize candidate feedback for hiring manager reviews.',
        inputs: [
          { key: 'role', label: 'Role', type: 'text', placeholder: 'e.g. HR Generalist' },
          { key: 'strengths', label: 'Candidate Strengths', type: 'text', placeholder: 'e.g. strong payroll experience' },
          { key: 'concerns', label: 'Concerns/Gaps', type: 'text', placeholder: 'e.g. lacks international policy exposure' }
        ],
        basePrompt: `Write a structured candidate summary report for a [ROLE] position to present to the hiring manager.
Strengths: [STRENGTHS].
Concerns: [CONCERNS].
Provide a final recommendation (Hire, No Hire, Borderline), key arguments for/against, and proposed questions for the next interview round.`,
        recommendations: ['Structure arguments logically', 'Focus on role alignment metrics', 'List potential growth factors']
      }
    ]
  },
  {
    id: 'marketers',
    slug: 'marketers',
    name: 'Marketer',
    icon: '📢',
    gradient: 'from-purple-500 to-pink-600',
    tasks: [
      {
        id: 'mark-fb',
        name: 'Facebook Ads Copy',
        slug: 'facebook-ads',
        description: 'Generate high-converting Facebook/Instagram ad copy options.',
        inputs: [
          { key: 'product', label: 'Product/Service Name', type: 'text', placeholder: 'e.g. Smart Kettle' },
          { key: 'audience', label: 'Target Audience', type: 'textarea', placeholder: 'e.g. busy working professionals, gadget enthusiasts' },
          { key: 'offer', label: 'Special Offer/Promo', type: 'text', placeholder: 'e.g. 20% off with code SMART20' },
          { key: 'hook', label: 'Hook Style', type: 'select', options: ['Direct Problem Solving', 'Story Hook', 'Scarcity/Urgency'] }
        ],
        basePrompt: `Write 3 high-converting Facebook/Instagram ad copy variations for [PRODUCT].
Target Audience: [AUDIENCE].
Promo Offer: [OFFER].
Ad copy style: [HOOK].
For each variation include: Primary Text, Headline, and Description. Use emojis and structured line breaks to maximize readability.`,
        recommendations: ['Keep headlines short and punchy', 'Test different hook structures', 'Include a clear call-to-action (CTA)']
      },
      {
        id: 'mark-google',
        name: 'Google Search Ads',
        slug: 'google-ads',
        description: 'Create headlines and descriptions for Google Search Ads.',
        inputs: [
          { key: 'product', label: 'Product Name', type: 'text', placeholder: 'e.g. SaaS CRM' },
          { key: 'keywords', label: 'Target Keywords', type: 'textarea', placeholder: 'e.g. small business CRM, easy CRM software' },
          { key: 'cta', label: 'Call to Action', type: 'text', placeholder: 'e.g. Start Free Trial, Book Demo' }
        ],
        basePrompt: `Generate Google Search Ad assets for [PRODUCT].
Target Keywords: [KEYWORDS].
Primary CTA: [CTA].
Provide:
- 5 Headline options (max 30 characters each)
- 3 Description options (max 90 characters each)
Ensure keywords are naturally integrated into headlines and descriptions.`,
        recommendations: ['Respect strict character counts', 'Use title case for headlines', 'Highlight unique value propositions']
      },
      {
        id: 'mark-seo',
        name: 'SEO Blog Outline',
        slug: 'seo-blog-outline',
        description: 'Plan article structures optimized for search engine rankings.',
        inputs: [
          { key: 'topic', label: 'Blog Topic', type: 'text', placeholder: 'e.g. Remote team building activities' },
          { key: 'keywords', label: 'Primary & Secondary Keywords', type: 'textarea', placeholder: 'e.g. remote team bonding, virtual team building ideas' },
          { key: 'length', label: 'Target Word Count', type: 'text', placeholder: 'e.g. 1500 words, 2500 words' }
        ],
        basePrompt: `Create an SEO-optimized blog article outline for the topic: [TOPIC].
Target Keywords: [KEYWORDS].
Expected length: [LENGTH].
Provide:
1. Optimized Title (H1) options (minimum 3)
2. Meta Description options
3. Detailed H2 and H3 headings structure
4. Content directives for each section indicating where to integrate keywords.`,
        recommendations: ['Structure headings in logical sequence', 'Request semantic keyword variations', 'Keep outlines detailed and comprehensive']
      },
      {
        id: 'mark-landing',
        name: 'Landing Page Copy',
        slug: 'landing-page-copy',
        description: 'Write hero headlines, value cards, and CTAs for websites.',
        inputs: [
          { key: 'product', label: 'Product Name', type: 'text', placeholder: 'e.g. Eco Laundry Sheets' },
          { key: 'usp', label: 'Unique Selling Prop (USP)', type: 'textarea', placeholder: 'e.g. plastic-free, zero waste, concentrated cleaning power' },
          { key: 'audience', label: 'Target Audience', type: 'text', placeholder: 'e.g. eco-conscious parents, travelers' }
        ],
        basePrompt: `Write copy for a high-converting landing page for [PRODUCT].
Core USP: [USP].
Audience: [AUDIENCE].
Generate:
1. Hero Section: Headline, Subheadline, Primary CTA Button Text
2. Three Value Proposition Cards (Header + Description)
3. Social Proof Section framework
4. Closing Call to Action (CTA).`,
        recommendations: ['Focus on benefits over features', 'Keep landing page copy concise', 'Ensure CTA states clear value']
      },
      {
        id: 'mark-campaign',
        name: 'Email Marketing Campaign',
        slug: 'email-campaign',
        description: 'Draft drip sequences or newsletters that drive clicks.',
        inputs: [
          { key: 'goal', label: 'Campaign Goal', type: 'text', placeholder: 'e.g. onboarding new signups, black friday sale' },
          { key: 'audience', label: 'Target Audience', type: 'text', placeholder: 'e.g. trial users who haven\'t upgraded' },
          { key: 'tone', label: 'Tone', type: 'select', options: ['Casual & Friendly', 'Urgent & Promotional', 'Educational & Authoritative'] }
        ],
        basePrompt: `Draft a 3-part email sequence for [GOAL].
Target Audience: [AUDIENCE].
Tone: [TONE].
For each email, provide: Subject Line options, Preview Text, and complete Body Copy with clear CTA button placement.`,
        recommendations: ['Keep subject lines under 50 characters', 'Focus on single CTA per email', 'Personalize with variables placeholders']
      },
      {
        id: 'mark-calendar',
        name: 'Social Media Calendar',
        slug: 'social-media-calendar',
        description: 'Outline post topics, copy, and hashtags for social platforms.',
        inputs: [
          { key: 'topic', label: 'Core Theme/Topic', type: 'text', placeholder: 'e.g. productivity hacks for founders' },
          { key: 'platform', label: 'Platform', type: 'select', options: ['LinkedIn', 'Instagram / Threads', 'Twitter / X'] },
          { key: 'duration', label: 'Timeframe', type: 'select', options: ['5-Day Content Plan', '7-Day Content Plan'] }
        ],
        basePrompt: `Create a [DURATION] content calendar for [PLATFORM] based on the theme: [TOPIC].
For each day, provide:
1. Content Pillar/Topic
2. Complete Post Copy (formatted with line breaks and appropriate emojis)
3. Visual/Image description directives
4. Recommended hashtags.`,
        recommendations: ['Adapt length to platform standards', 'Test engagement hooks', 'Provide visual directions']
      },
      {
        id: 'mark-competitor',
        name: 'Competitor Analysis',
        slug: 'competitor-analysis',
        description: 'Analyze competitors to find positioning gaps.',
        inputs: [
          { key: 'product', label: 'Your Product', type: 'text', placeholder: 'e.g. online task management tool' },
          { key: 'competitors', label: 'Competitor List', type: 'textarea', placeholder: 'e.g. Trello, Asana, Monday' }
        ],
        basePrompt: `Analyze competitors for our product: [PRODUCT].
Competitors list: [COMPETITORS].
Outline:
1. Key strength and weakness of each competitor
2. Major positioning gaps in the market
3. Strategic recommendations to differentiate our product.`,
        recommendations: ['Identify pricing gaps', 'Identify feature overlaps', 'Highlight positioning options']
      },
      {
        id: 'mark-valprop',
        name: 'Value Proposition Draft',
        slug: 'value-proposition',
        description: 'Draft core value propositions for target user segments.',
        inputs: [
          { key: 'product', label: 'Product Name', type: 'text', placeholder: 'e.g. AI Meeting Summarizer' },
          { key: 'audience', label: 'Target Audience', type: 'text', placeholder: 'e.g. remote project managers' },
          { key: 'benefit', label: 'Core Benefit', type: 'textarea', placeholder: 'e.g. saves 5 hours a week on writing status reports' }
        ],
        basePrompt: `Develop 3 distinct value proposition frameworks for [PRODUCT].
Target Audience: [AUDIENCE].
Core Benefit: [BENEFIT].
Use standard frameworks (e.g. Steve Blank, Geoff Moore) to write concise, memorable value propositions.`,
        recommendations: ['Keep statements under 20 words', 'Focus on primary pain points', 'Make promises measurable']
      },
      {
        id: 'mark-brand',
        name: 'Brand Messaging Guide',
        slug: 'brand-messaging',
        description: 'Create voice, tone, and brand promise outlines.',
        inputs: [
          { key: 'company', label: 'Company Name', type: 'text', placeholder: 'e.g. FreshCart' },
          { key: 'values', label: 'Core Values', type: 'textarea', placeholder: 'e.g. convenience, local organic sourcing, transparency' }
        ],
        basePrompt: `Create a Brand Messaging Guide for [COMPANY].
Core Values: [VALUES].
Outline the company's brand voice description, tone rules (what to do vs what to avoid), brand promise, and 3 example messaging copy blocks.`,
        recommendations: ['Include specific tone adjectives', 'Request concrete copy examples', 'Structure voice parameters']
      },
      {
        id: 'mark-pr',
        name: 'PR Press Release',
        slug: 'press-release',
        description: 'Draft official announcements for media publications.',
        inputs: [
          { key: 'announcement', label: 'Core Announcement', type: 'textarea', placeholder: 'e.g. launching a new solar battery system' },
          { key: 'company', label: 'Company Info', type: 'text', placeholder: 'e.g. SolarGen, clean energy innovator' },
          { key: 'quote', label: 'CEO/Key Quote (Optional)', type: 'text', placeholder: 'e.g. This battery changes how we store home energy' }
        ],
        basePrompt: `Write a professional, AP-style press release for [COMPANY].
Core Announcement: [ANNOUNCEMENT].
[QUOTE_START]Key quote to embed: [QUOTE][QUOTE_END]
Format with Date, Location, Catchy Headline, Sub-headline, Body Paragraphs, and a standard company boilerplate.`,
        recommendations: ['Follow standard AP guidelines', 'Ensure quotes sound natural', 'Include clear media contact placeholder']
      }
    ]
  },
  {
    id: 'accountants',
    slug: 'accountants',
    name: 'Accountant',
    icon: '📊',
    gradient: 'from-teal-500 to-cyan-600',
    tasks: [
      {
        id: 'acc-audit',
        name: 'Financial Audit Checklist',
        slug: 'audit-checklist',
        description: 'Generate audit preparation checklists for various company sizes.',
        inputs: [
          { key: 'size', label: 'Company Size/Type', type: 'select', options: ['Small Business (SMB)', 'Mid-Market Enterprise', 'Non-Profit Entity'] },
          { key: 'industry', label: 'Industry', type: 'text', placeholder: 'e.g. Retail, Software SaaS, Construction' },
          { key: 'period', label: 'Fiscal Period', type: 'text', placeholder: 'e.g. Year-End 2026' }
        ],
        basePrompt: `Generate a comprehensive financial audit preparation checklist for a [SIZE] operating in the [INDUSTRY] sector.
Audit period: [PERIOD].
Organize the checklist by account categories (Cash, Accounts Receivable, Inventory, Revenue, Payroll) detailing required schedules, reconciliation reports, and supporting documents.`,
        recommendations: ['Align with GAAP/IFRS standards', 'List specific documents needed for each section', 'Highlight common risk areas']
      },
      {
        id: 'acc-excel',
        name: 'Excel Formula Builder',
        slug: 'excel-formula',
        description: 'Write formulas or macros for complex spreadsheet tasks.',
        inputs: [
          { key: 'layout', label: 'Data Layout description', type: 'textarea', placeholder: 'e.g. Column A has sales, Column B has regions' },
          { key: 'goal', label: 'Formula Goal', type: 'text', placeholder: 'e.g. calculate average sales in North region only' },
          { key: 'version', label: 'Excel Version', type: 'select', options: ['Excel 365 (supports XLOOKUP, FILTER)', 'Excel 2019/Older', 'Google Sheets'] }
        ],
        basePrompt: `Write a spreadsheet formula for [VERSION] based on this data layout:
\`\`\`
[LAYOUT]
\`\`\`
Goal: [GOAL].
Provide the exact formula syntax, explain how it works step-by-step, and list troubleshooting tips if it returns an error.`,
        recommendations: ['Use absolute references ($A$1) where appropriate', 'Provide error handling wraps (IFERROR)', 'List syntax details']
      },
      {
        id: 'acc-risk',
        name: 'Auditing Risk Assessment',
        slug: 'risk-assessment',
        description: 'Create risk analysis charts for corporate accounting audits.',
        inputs: [
          { key: 'business', label: 'Business Type/Industry', type: 'text', placeholder: 'e.g. E-Commerce retail' },
          { key: 'riskAreas', label: 'Key Risk Concerns', type: 'textarea', placeholder: 'e.g. inventory valuation, returns processing, cash transactions' }
        ],
        basePrompt: `Design an Auditing Risk Assessment framework for a [BUSINESS] business.
Key areas of concern: [RISKAREAS].
For each area, identify the potential audit risks, define the risk level (Low, Medium, High), list the key internal control recommendations, and suggest audit testing procedures.`,
        recommendations: ['Define risk indicators clearly', 'Suggest internal control actions', 'Organize as a table']
      },
      {
        id: 'acc-variance',
        name: 'Budget Variance Analysis',
        slug: 'variance-analysis',
        description: 'Draft financial reports explaining budget variances.',
        inputs: [
          { key: 'variance', label: 'Variance Details', type: 'textarea', placeholder: 'e.g. Marketing spent $50k vs $40k budget, Sales was 10% below target' },
          { key: 'threshold', label: 'Variance Threshold', type: 'text', placeholder: 'e.g. explanations needed for variances over 5%' }
        ],
        basePrompt: `Draft a Budget Variance Explanation Memo for management.
Variance details: [VARIANCE].
Explanation threshold: [THRESHOLD].
Structure the memo with an Executive Summary, a breakdown of key variances (Favorable vs Unfavorable), potential causes, and corrective action recommendations.`,
        recommendations: ['Include mathematical context where helpful', 'Provide actionable next steps', 'Write in professional tone']
      },
      {
        id: 'acc-tax',
        name: 'Tax Research Planner',
        slug: 'tax-research',
        description: 'Plan compliance audits and research plans for corporate tax.',
        inputs: [
          { key: 'jurisdiction', label: 'Tax Jurisdiction', type: 'text', placeholder: 'e.g. US Federal, California State, EU VAT' },
          { key: 'entity', label: 'Entity Type', type: 'select', options: ['S-Corporation', 'C-Corporation', 'Multi-Member LLC', 'Sole Proprietorship'] },
          { key: 'topic', label: 'Tax Topic/Query', type: 'textarea', placeholder: 'e.g. deductibility of remote employee home office expenses' }
        ],
        basePrompt: `Create a Tax Research and Compliance Plan for a [ENTITY] in [JURISDICTION].
Tax query: [TOPIC].
Outline the research framework: identify key tax codes/regulations, analyze applicability, outline document requirements, and compile compliance advice.`,
        recommendations: ['Cite official tax code structures', 'Suggest document filing templates', 'Highlight common audit flags']
      },
      {
        id: 'acc-request',
        name: 'Client Document Request',
        slug: 'document-request',
        description: 'Draft professional emails requesting client files.',
        inputs: [
          { key: 'client', label: 'Client Name/Type', type: 'text', placeholder: 'e.g. Acme Tech Corp' },
          { key: 'year', label: 'Fiscal Year/Period', type: 'text', placeholder: 'e.g. FY 2026' },
          { key: 'documents', label: 'Requested Documents', type: 'textarea', placeholder: 'e.g. bank statements, payroll registers, inventory counts' }
        ],
        basePrompt: `Write a professional client document request letter to [CLIENT] for [YEAR].
Requested items: [DOCUMENTS].
Ensure the email is clear, professional, lists items in a prioritized checklist, explains the purpose of each item, and states a deadline.`,
        recommendations: ['Use a polite but firm tone', 'Provide deadline placeholders', 'Format requested items as a checklist']
      },
      {
        id: 'acc-statement',
        name: 'Financial Statement Template',
        slug: 'statement-template',
        description: 'Structure balance sheets, income statements, or cash flows.',
        inputs: [
          { key: 'type', label: 'Statement Type', type: 'select', options: ['Income Statement (P&L)', 'Balance Sheet', 'Statement of Cash Flows'] },
          { key: 'industry', label: 'Industry Focus', type: 'text', placeholder: 'e.g. SaaS software subscription, Manufacturing' }
        ],
        basePrompt: `Structure a GAAP-compliant [TYPE] template for a [INDUSTRY] company.
List all standard line items, group them logically into appropriate sections (e.g., Current Assets vs Long-Term Assets), and provide calculations formulas.`,
        recommendations: ['Format output structure clearly', 'Include detailed sub-categories', 'Request standard accounts groupings']
      },
      {
        id: 'acc-policy',
        name: 'Bookkeeping Workflow Policy',
        slug: 'bookkeeping-policy',
        description: 'Create standard operating procedures (SOPs) for finance teams.',
        inputs: [
          { key: 'software', label: 'Accounting Software', type: 'text', placeholder: 'e.g. QuickBooks Online, Xero, NetSuite' },
          { key: 'workflows', label: 'Key Procedures', type: 'textarea', placeholder: 'e.g. daily bank feeds reconciliation, invoice approvals' }
        ],
        basePrompt: `Write a Bookkeeping standard operating procedure (SOP) for our finance team.
Target Software: [SOFTWARE].
Workflows to cover: [WORKFLOWS].
Structure with clear steps, role definitions, timeline targets (daily vs weekly), and validation checklists.`,
        recommendations: ['List specific menu/navigation steps in software if standard', 'Provide approval levels requirements', 'Keep instructions simple']
      },
      {
        id: 'acc-cost',
        name: 'Cost Reduction Analysis',
        slug: 'cost-reduction',
        description: 'Analyze budget items to identify expense reductions.',
        inputs: [
          { key: 'categories', label: 'Cost Categories', type: 'textarea', placeholder: 'e.g. office rent, software subscriptions, consulting fees' },
          { key: 'target', label: 'Target Savings', type: 'text', placeholder: 'e.g. reduce overall spending by 15%' }
        ],
        basePrompt: `Design a cost reduction framework to analyze spending in these categories: [CATEGORIES].
Target reduction: [TARGET].
Outline step-by-step procedures to audit each category, identify waste, renegotiate terms, and recommend cost-cutting actions without hurting productivity.`,
        recommendations: ['Provide negotiation script ideas', 'Suggest low-risk cuts first', 'Detail cost-audit checkpoints']
      },
      {
        id: 'acc-invoice',
        name: 'Invoice Payment Reminder',
        slug: 'invoice-reminder',
        description: 'Draft polite, escalating payment reminder emails.',
        inputs: [
          { key: 'client', label: 'Client Name', type: 'text', placeholder: 'e.g. Global Tech Inc' },
          { key: 'overdue', label: 'Days Overdue', type: 'select', options: ['Friendly (due in 3 days)', 'Moderate (15 days overdue)', 'Final Notice (30+ days overdue)'] }
        ],
        basePrompt: `Write a payment reminder email to [CLIENT].
Urgency level: [OVERDUE].
Ensure the email includes placeholders for invoice number, amount, and due date. Adjust tone from friendly/informative to firm/serious depending on urgency.`,
        recommendations: ['Include clear payment link placeholders', 'Detail consequences of late payment if final', 'Keep layout clean']
      }
    ]
  },
  {
    id: 'founders',
    slug: 'startup-founders',
    name: 'Founder',
    icon: '🚀',
    gradient: 'from-orange-500 to-amber-500',
    tasks: [
      {
        id: 'found-pitch',
        name: 'Elevator Pitch',
        slug: 'elevator-pitch',
        description: 'Create memorable, high-impact 30-second startup pitches.',
        inputs: [
          { key: 'product', label: 'Product Name/Details', type: 'text', placeholder: 'e.g. CleanBin - a smart compost monitor' },
          { key: 'problem', label: 'Problem Solved', type: 'textarea', placeholder: 'e.g. household food waste smells and goes bad quickly' },
          { key: 'audience', label: 'Target Audience', type: 'text', placeholder: 'e.g. eco-conscious homeowners' }
        ],
        basePrompt: `Generate 3 variations of a 30-second elevator pitch for our product [PRODUCT].
Core Problem: [PROBLEM].
Target Audience: [AUDIENCE].
Provide:
- One warm, story-based pitch hook
- One metrics/growth-based pitch hook
- One contrarian/curiosity-gap pitch hook.`,
        recommendations: ['Keep pitches under 75 words', 'End with a clear, memorable statement', 'Avoid jargon']
      },
      {
        id: 'found-validate',
        name: 'Idea Validation Blueprint',
        slug: 'idea-validation',
        description: 'Create user interview scripts and landing page tests.',
        inputs: [
          { key: 'idea', label: 'Startup Idea', type: 'textarea', placeholder: 'e.g. peer-to-peer lawn mower renting app' },
          { key: 'targetUser', label: 'Target Customer Segment', type: 'text', placeholder: 'e.g. suburban homeowners who mow lawns weekly' }
        ],
        basePrompt: `Design an Idea Validation Blueprint for: [IDEA].
Target Customer: [TARGETUSER].
Outline:
1. Core validation hypothesis to test
2. 5 user interview questions to uncover actual pain points (following "The Mom Test" guidelines)
3. Direct landing page smoke test setup details.`,
        recommendations: ['Avoid leading questions', 'Focus questions on past behaviors', 'Define clear success metrics for smoke test']
      },
      {
        id: 'found-competitor',
        name: 'Competitor Feature Grid',
        slug: 'competitor-grid',
        description: 'Outline comparisons of startup features against competitors.',
        inputs: [
          { key: 'startup', label: 'Your Startup & Features', type: 'textarea', placeholder: 'e.g. QuickCode - automated code reviews using localized schemas' },
          { key: 'competitors', label: 'Main Competitors', type: 'text', placeholder: 'e.g. SonarQube, Github Copilot' }
        ],
        basePrompt: `Create a Competitor Feature Grid for [STARTUP].
Key Competitors: [COMPETITORS].
Generate a structured matrix comparing core features, pricing strategies, strengths, and weaknesses, highlighting our startup's primary competitive moat.`,
        recommendations: ['Format output as a table', 'Focus on feature gaps', 'Describe competitive advantages']
      },
      {
        id: 'found-canvas',
        name: 'Business Model Canvas',
        slug: 'business-model-canvas',
        description: 'Generate lean business canvases summarizing operations.',
        inputs: [
          { key: 'startup', label: 'Startup Name', type: 'text', placeholder: 'e.g. GreenFast' },
          { key: 'valueProp', label: 'Value Proposition', type: 'textarea', placeholder: 'e.g. 10-minute organic grocery delivery using electric bikes' }
        ],
        basePrompt: `Generate a Lean Business Model Canvas for [STARTUP].
Primary Value Proposition: [VALUEPROP].
Structure the output using standard canvas sections: Key Partners, Key Activities, Value Propositions, Customer Relationships, Customer Segments, Key Resources, Channels, Cost Structure, Revenue Streams.`,
        recommendations: ['Be concise in each section', 'Ensure customer segments align with value props', 'Describe monetization models']
      },
      {
        id: 'found-deck',
        name: 'Pitch Deck Outline',
        slug: 'pitch-deck',
        description: 'Design slide structures and key metrics for investor pitches.',
        inputs: [
          { key: 'product', label: 'Product & Vision', type: 'text', placeholder: 'e.g. decentralized cloud storage network' },
          { key: 'funding', label: 'Funding Goal', type: 'text', placeholder: 'e.g. seeking $500k Pre-Seed round' }
        ],
        basePrompt: `Design a 10-slide Investor Pitch Deck Outline for [PRODUCT].
Funding target: [FUNDING].
For each slide (from Problem to Ask), detail the slide title, core message, required visual charts/elements, and key talking points.`,
        recommendations: ['Keep slides count around 10-12', 'Place Problem/Solution slides early', 'State clear usage of funds']
      },
      {
        id: 'found-calc',
        name: 'Financial Projections Helper',
        slug: 'financial-projections',
        description: 'Outline operational budgets and revenue growth models.',
        inputs: [
          { key: 'model', label: 'Revenue Model', type: 'select', options: ['SaaS Subscription (monthly/annual)', 'Transaction Fee/Marketplace', 'Usage-Based API Pricing'] },
          { key: 'pricing', label: 'Pricing Target', type: 'text', placeholder: 'e.g. $29/month per seat' }
        ],
        basePrompt: `Create a Financial Projections and Unit Economics outline for a [MODEL] startup.
Pricing structure: [PRICING].
Detail the key revenue drivers, customer acquisition cost (CAC) benchmarks, customer lifetime value (LTV) formulas, and a 12-month expense budget template.`,
        recommendations: ['Define CAC and LTV formulas', 'Provide month-by-month expense categories', 'Request SaaS metrics benchmarks']
      },
      {
        id: 'found-gtm',
        name: 'GTM Launch Strategy',
        slug: 'go-to-market',
        description: 'Plan launch channels, acquisition budgets, and messaging.',
        inputs: [
          { key: 'product', label: 'Product Name', type: 'text', placeholder: 'e.g. AI scheduling assistant' },
          { key: 'channel', label: 'Target Channels', type: 'textarea', placeholder: 'e.g. Product Hunt launch, cold email, SEO content' }
        ],
        basePrompt: `Create a Go-To-Market (GTM) launch plan for [PRODUCT].
Target channels: [CHANNEL].
Detail the pre-launch checklists, launch day schedule, acquisition tactics, and success metrics (KPIs) to track.`,
        recommendations: ['Provide week-by-week timelines', 'Suggest channel-specific copywriting hooks', 'List launch checklist items']
      },
      {
        id: 'found-agreement',
        name: 'Founder Agreement Outline',
        slug: 'founder-agreement',
        description: 'Draft equity splits, vesting schedules, and IP terms.',
        inputs: [
          { key: 'founders', label: 'Co-founders details', type: 'text', placeholder: 'e.g. 2 co-founders (CEO and CTO)' },
          { key: 'equity', label: 'Equity Split', type: 'text', placeholder: 'e.g. 50/50 split with 4-year vesting' }
        ],
        basePrompt: `Draft a Founder Agreement Terms Sheet for [FOUNDERS].
Equity split plan: [EQUITY].
Cover key clauses: Roles & Responsibilities, Equity Vesting (standard 1-year cliff + monthly), IP Assignment, Decision Making/Voting rights, and Exit/Buyout provisions.`,
        recommendations: ['Add clear vesting cliff parameters', 'Outline IP assignment rules', 'Keep clauses descriptive']
      },
      {
        id: 'found-interview',
        name: 'Customer Interview Script',
        slug: 'customer-interview',
        description: 'Build script prompts to run customer feedback loops.',
        inputs: [
          { key: 'customer', label: 'Target Customer Profile', type: 'text', placeholder: 'e.g. managers at remote marketing agencies' },
          { key: 'problem', label: 'Main Problem to Solve', type: 'textarea', placeholder: 'e.g. team collaboration is slow and messages get lost' }
        ],
        basePrompt: `Create a customer feedback interview script targeting [CUSTOMER] to validate issues around: [PROBLEM].
Include introduction scripts, 8 open-ended questions designed to uncover past behaviors/actual pain points, and follow-up prompts.`,
        recommendations: ['Avoid hypothetical questions', 'Encourage storytelling answers', 'List post-interview debrief items']
      },
      {
        id: 'found-cap',
        name: 'Equity Cap Table Outline',
        slug: 'cap-table',
        description: 'Plan pre-money valuations and pool share options.',
        inputs: [
          { key: 'valuation', label: 'Pre-Money Valuation', type: 'text', placeholder: 'e.g. $4 million' },
          { key: 'investment', label: 'Investment Amount', type: 'text', placeholder: 'e.g. $500,000' }
        ],
        basePrompt: `Generate a pre-and-post money capitalization (Cap Table) outline.
Pre-money valuation: [VALUATION].
New investment: [INVESTMENT].
Show the equity dilution calculations, calculate post-money valuation, and outline options pool adjustments (e.g. standard 10% pool).`,
        recommendations: ['Format calculations clearly', 'Show dilution percentages', 'Explain post-money formulas']
      }
    ]
  },
  {
    id: 'product-managers',
    slug: 'product-managers',
    name: 'Product Manager',
    icon: '🏗️',
    gradient: 'from-blue-600 to-indigo-700',
    tasks: [
      {
        id: 'pm-prd',
        name: 'PRD Document',
        slug: 'prd-document',
        description: 'Write complete product requirements docs with user stories.',
        inputs: [
          { key: 'feature', label: 'Feature Name', type: 'text', placeholder: 'e.g. Multi-User Real-time Chat' },
          { key: 'objective', label: 'Objective & Value', type: 'textarea', placeholder: 'e.g. increase workspace engagement by 20%' },
          { key: 'kpis', label: 'Core Metrics (KPIs)', type: 'text', placeholder: 'e.g. DAU/MAU chat usage, average messages sent' }
        ],
        basePrompt: `Write a Product Requirements Document (PRD) for the feature: [FEATURE].
Business Objective: [OBJECTIVE].
Core KPIs: [KPIS].
Include sections for Problem Statement, User Personas, Out-of-Scope items, Key User Flows, Functional Requirements, and Release criteria.`,
        recommendations: ['List specific out-of-scope items', 'Define edge cases for user flows', 'Request clear success metrics']
      },
      {
        id: 'pm-story',
        name: 'User Story Writer',
        slug: 'user-stories',
        description: 'Draft agile stories with acceptance criteria.',
        inputs: [
          { key: 'feature', label: 'Feature/Goal', type: 'text', placeholder: 'e.g. Password Reset via email' },
          { key: 'persona', label: 'User Persona', type: 'text', placeholder: 'e.g. registered user' }
        ],
        basePrompt: `Write 5 Agile User Stories for the feature: [FEATURE].
Persona context: [PERSONA].
For each story, use the standard format: "As a [role], I want to [action] so that [benefit]". Include detailed Acceptance Criteria formatted in Given-When-Then syntax.`,
        recommendations: ['Use Given-When-Then format', 'List negative validation cases', 'Specify edge conditions']
      },
      {
        id: 'pm-roadmap',
        name: 'Product Roadmap',
        slug: 'product-roadmap',
        description: 'Outline quarterly themes, features, and release schedules.',
        inputs: [
          { key: 'product', label: 'Product Name', type: 'text', placeholder: 'e.g. B2B CRM SaaS' },
          { key: 'themes', label: 'Core Themes/Goals', type: 'textarea', placeholder: 'e.g. Q1: Security & Compliance, Q2: Collaboration, Q3: Mobile App' }
        ],
        basePrompt: `Structure a quarterly Product Roadmap for [PRODUCT].
Core quarterly themes: [THEMES].
Detail the key epic items, feature priorities, dependencies, and target delivery timelines for each quarter.`,
        recommendations: ['Highlight epic items', 'Describe cross-functional dependencies', 'Format as a timeline']
      },
      {
        id: 'pm-prioritize',
        name: 'Feature Prioritization Matrix',
        slug: 'feature-prioritization',
        description: 'Use RICE or MoSCoW to rank feature lists.',
        inputs: [
          { key: 'features', label: 'Feature List', type: 'textarea', placeholder: 'e.g. SSO login, Dark mode, export PDF, invoice builder' },
          { key: 'framework', label: 'Framework Type', type: 'select', options: ['RICE (Reach, Impact, Confidence, Effort)', 'MoSCoW (Must, Should, Could, Wont)'] }
        ],
        basePrompt: `Perform a feature prioritization analysis on this list:
\`\`\`
[FEATURES]
\`\`\`
Framework to apply: [FRAMEWORK].
Provide evaluations, score rankings, and justify the priority mapping for each item.`,
        recommendations: ['Format output as a table', 'Define scoring criteria parameters', 'Detail prioritization rationale']
      },
      {
        id: 'pm-notes',
        name: 'Release Notes Draft',
        slug: 'release-notes',
        description: 'Draft client-facing summaries of product updates.',
        inputs: [
          { key: 'version', label: 'Version Number', type: 'text', placeholder: 'e.g. v2.4.0' },
          { key: 'updates', label: 'Raw Updates/Fixes', type: 'textarea', placeholder: 'e.g. added OAuth login, fixed cart crash, improved loading' }
        ],
        basePrompt: `Write customer-facing Release Notes for version [VERSION].
Raw updates details: [UPDATES].
Ensure the notes are engaging, easy to read, translate technical fixes into user benefits, and include a thank you section.`,
        recommendations: ['Group updates (New, Fixed, Improved)', 'Keep language simple and user-friendly', 'Focus on benefits']
      },
      {
        id: 'pm-teardown',
        name: 'Competitor Teardown',
        slug: 'competitor-teardown',
        description: 'Deconstruct a competitor UX/UI feature flow.',
        inputs: [
          { key: 'competitor', label: 'Competitor Feature', type: 'text', placeholder: 'e.g. Notion\'s database templates onboarding' },
          { key: 'focus', label: 'Teardown Focus', type: 'textarea', placeholder: 'e.g. signup funnel, onboarding steps, layout' }
        ],
        basePrompt: `Perform a Product Teardown analysis of [COMPETITOR].
Analysis focus: [FOCUS].
Break down the step-by-step user journey, list key strengths/positives in their UX, highlight friction points, and outline key takeaways we can apply.`,
        recommendations: ['List specific step flows', 'Suggest usability improvements', 'Highlight UI/UX trends']
      },
      {
        id: 'pm-tracking',
        name: 'Analytics Tracking Plan',
        slug: 'tracking-plan',
        description: 'Define event names, properties, and triggers.',
        inputs: [
          { key: 'flow', label: 'User Flow', type: 'text', placeholder: 'e.g. user checkout funnel' },
          { key: 'events', label: 'Key Actions to Track', type: 'textarea', placeholder: 'e.g. clicked checkout, entered promo, completed order' }
        ],
        basePrompt: `Design an Analytics Event Tracking Plan for this flow: [FLOW].
Target actions: [EVENTS].
Provide a tracking schema containing Event Names, Trigger Conditions, and Event Properties/Parameters (e.g. product_id, amount).`,
        recommendations: ['Format output as a table', 'Use snake_case naming standards', 'Define trigger events clearly']
      },
      {
        id: 'pm-feedback',
        name: 'Customer Feedback Analysis',
        slug: 'feedback-analysis',
        description: 'Categorize customer support and request data.',
        inputs: [
          { key: 'feedback', label: 'Raw Feedback List', type: 'textarea', placeholder: 'Paste client emails, reviews, or complaints...' }
        ],
        basePrompt: `Analyze the following customer feedback entries:
\`\`\`
[FEEDBACK]
\`\`\`
Categorize each item (e.g. Bug, Feature Request, Usability), assign priority based on frequency/urgency, and write a summary recommendation for the engineering team.`,
        recommendations: ['Group by categories', 'Provide summary metrics (count, %)', 'List specific action items']
      },
      {
        id: 'pm-sprint',
        name: 'Sprint Planning Checklist',
        slug: 'sprint-planning',
        description: 'Organize sprint goals, capacity, and backlogs.',
        inputs: [
          { key: 'goal', label: 'Sprint Goal', type: 'text', placeholder: 'e.g. complete authentication and onboarding checkout' },
          { key: 'capacity', label: 'Team Capacity details', type: 'text', placeholder: 'e.g. 3 backend devs, 2 frontend, 1 QA' }
        ],
        basePrompt: `Prepare a Sprint Planning Checklist and agenda.
Sprint Goal: [GOAL].
Team capacity context: [CAPACITY].
Outline the planning checklist, sprint backlog validation steps, capacity calculation guidelines, and meeting agenda.`,
        recommendations: ['Include time-boxed agenda sections', 'List common sprint planning blockers', 'Define sprint exit criteria']
      },
      {
        id: 'pm-vision',
        name: 'Product Vision Statement',
        slug: 'product-vision',
        description: 'Formulate vision statements using standard frameworks.',
        inputs: [
          { key: 'product', label: 'Product Name', type: 'text', placeholder: 'e.g. SmartHR' },
          { key: 'market', label: 'Target Market', type: 'text', placeholder: 'e.g. remote-first companies with 50-500 employees' },
          { key: 'competitorDiff', label: 'Competitor Differentiator', type: 'textarea', placeholder: 'e.g. automates local tax compliance out-of-the-box' }
        ],
        basePrompt: `Formulate a Product Vision Statement for [PRODUCT].
Target market: [MARKET].
Key differentiator: [COMPETITORDIFF].
Draft 3 variations using popular frameworks (e.g. Moore's framework, Elevator statement format).`,
        recommendations: ['Keep vision statement under 30 words', 'Focus on long-term aspiration', 'Define clear target segments']
      }
    ]
  },
  {
    id: 'writers',
    slug: 'writers',
    name: 'Writer',
    icon: '✍️',
    gradient: 'from-violet-600 to-indigo-650',
    tasks: [
      {
        id: 'write-hook',
        name: 'Story Hook',
        slug: 'story-hook',
        description: 'Draft creative opening lines and hooks for stories.',
        inputs: [
          { key: 'genre', label: 'Book Genre', type: 'text', placeholder: 'e.g. Sci-Fi, Mystery, Thriller' },
          { key: 'character', label: 'Protagonist Description', type: 'text', placeholder: 'e.g. a detective who can see 10 seconds into the future' },
          { key: 'conflict', label: 'Core Conflict', type: 'textarea', placeholder: 'e.g. they foresee their own murder in the next 10 seconds' }
        ],
        basePrompt: `Write 5 different variations of a story opening hook in the [GENRE] genre.
Protagonist details: [CHARACTER].
Core conflict: [CONFLICT].
Provide a mix of styles: action-first, dialogue-first, reflective, and suspenseful.`,
        recommendations: ['Focus on immediate tension', 'Vary sentence lengths', 'Create sensory details']
      },
      {
        id: 'write-outline',
        name: 'Chapter Outline',
        slug: 'chapter-outline',
        description: 'Structure chapters with goals, events, and cliffhangers.',
        inputs: [
          { key: 'genre', label: 'Book Genre', type: 'text', placeholder: 'e.g. Fantasy romance' },
          { key: 'protagonist', label: 'Protagonist', type: 'text', placeholder: 'e.g. Elora, a runaway princess with fire magic' },
          { key: 'goal', label: 'Chapter Goal/Event', type: 'textarea', placeholder: 'e.g. Elora enters the black market to buy a mapping compass' }
        ],
        basePrompt: `Write a detailed Chapter Outline for a [GENRE] book.
Protagonist: [PROTAGONIST].
Chapter goal details: [GOAL].
Outline the chapter's beginning setup, middle conflict/incident, climax, and closing cliffhanger.`,
        recommendations: ['Include character motivations', 'Suggest sensory description ideas', 'Specify pacing indicators']
      },
      {
        id: 'write-character',
        name: 'Character Profile',
        slug: 'character-profile',
        description: 'Create detailed character profiles with secrets and flaws.',
        inputs: [
          { key: 'name', label: 'Character Name', type: 'text', placeholder: 'e.g. Arthur Pendelton' },
          { key: 'role', label: 'Role in Story', type: 'text', placeholder: 'e.g. mentor figure, double agent' },
          { key: 'traits', label: 'Core Traits/Flaws', type: 'textarea', placeholder: 'e.g. cynical, extremely loyal, afraid of heights' }
        ],
        basePrompt: `Build a comprehensive Character Profile for "[NAME]".
Role: [ROLE].
Key traits: [TRAITS].
Outline: Physical description, Backstory summary, Internal motivation/goal, Core flaw, and a major secret they hide.`,
        recommendations: ['Focus on psychological depth', 'Provide character voice notes', 'Create relationship dynamics suggestions']
      },
      {
        id: 'write-dialogue',
        name: 'Dialogue Polisher',
        slug: 'dialogue-polisher',
        description: 'Improve drafts of character dialogue for subtext and voice.',
        inputs: [
          { key: 'scene', label: 'Scene Context', type: 'textarea', placeholder: 'e.g. two detectives arguing over a suspect\'s alibi' },
          { key: 'dialogue', label: 'Draft Dialogue', type: 'textarea', placeholder: 'Paste your draft dialogue lines here...' }
        ],
        basePrompt: `Polish and refine the following character dialogue:
\`\`\`
[DIALOGUE]
\`\`\`
Scene context: [SCENE].
Rewrite the lines to add subtext, improve pacing, ensure distinct character voices, and insert realistic character beats/actions.`,
        recommendations: ['Show, don\'t tell', 'Avoid overly expository lines', 'Add character actions/beats']
      },
      {
        id: 'write-blog',
        name: 'Blog Article Draft',
        slug: 'blog-article',
        description: 'Write engaging, SEO-friendly draft blog articles.',
        inputs: [
          { key: 'topic', label: 'Article Topic', type: 'text', placeholder: 'e.g. benefits of cold showers' },
          { key: 'keywords', label: 'Keywords to Include', type: 'text', placeholder: 'e.g. cold therapy, dopamine boost, recovery' },
          { key: 'style', label: 'Writing Style', type: 'select', options: ['Informative & Educational', 'First-Person Storytelling', 'Short & Bulleted'] }
        ],
        basePrompt: `Write a complete blog article draft on: [TOPIC].
Keywords: [KEYWORDS].
Writing style: [STYLE].
Include an engaging intro hook, 3 key subheaded sections, and a summarizing conclusion with a clear call to action.`,
        recommendations: ['Write in a conversational tone', 'Format with short paragraphs', 'Add subheadings']
      },
      {
        id: 'write-thesis',
        name: 'Thesis Statement',
        slug: 'thesis-statement',
        description: 'Formulate thesis arguments for academic essays.',
        inputs: [
          { key: 'topic', label: 'Essay Topic/Subject', type: 'text', placeholder: 'e.g. impact of remote work on office culture' },
          { key: 'argument', label: 'Your Argument', type: 'textarea', placeholder: 'e.g. it improves productivity but harms collaboration' }
        ],
        basePrompt: `Develop 3 different thesis statement options for an essay on: [TOPIC].
Core argument stance: [ARGUMENT].
Provide options ranging from a straightforward descriptive thesis to a complex, arguable thesis addressing counterarguments.`,
        recommendations: ['Make thesis arumentative and specific', 'Keep under 2 sentences', 'Address counter-evidence options']
      },
      {
        id: 'write-poetry',
        name: 'Poetry Verse',
        slug: 'poetry-verse',
        description: 'Generate rhyming or free verse poems on themes.',
        inputs: [
          { key: 'theme', label: 'Poem Theme', type: 'text', placeholder: 'e.g. nostalgia, change of seasons' },
          { key: 'format', label: 'Poetic Format', type: 'select', options: ['Free Verse', 'Rhyming Quatrains (AABB/ABAB)', 'Sonnet'] }
        ],
        basePrompt: `Write a poem exploring the theme: [THEME].
Poetic format target: [FORMAT].
Focus on concrete imagery, metaphor, and emotional resonance. Avoid cliches and predictable rhymes.`,
        recommendations: ['Focus on sensory descriptions', 'Vary line breaks for emphasis', 'Request specific rhyme guidelines']
      },
      {
        id: 'write-newsletter',
        name: 'Newsletter Outline',
        slug: 'newsletter-outline',
        description: 'Plan outlines for engaging email newsletters.',
        inputs: [
          { key: 'topic', label: 'Newsletter Topic', type: 'text', placeholder: 'e.g. how I built an email list' },
          { key: 'insight', label: 'Core Takeaway/Insight', type: 'textarea', placeholder: 'e.g. consistency matters more than hacks' }
        ],
        basePrompt: `Create an engaging email newsletter outline.
Topic: [TOPIC].
Core Insight: [INSIGHT].
Structure the newsletter with a personal hook, the main value lesson, 3 bulleted key takeaways, and a clear call to action.`,
        recommendations: ['Keep paragraphs short', 'Include subject line ideas', 'Write in conversational voice']
      },
      {
        id: 'write-blurb',
        name: 'Book Description Blurb',
        slug: 'book-blurb',
        description: 'Draft back-cover blurb copy for novels and books.',
        inputs: [
          { key: 'title', label: 'Book Title & Genre', type: 'text', placeholder: 'e.g. The Quiet Storm, Thriller' },
          { key: 'hook', label: 'Core Plot Hook', type: 'textarea', placeholder: 'e.g. a quiet librarian uncovers a spy ring operating in her building' }
        ],
        basePrompt: `Draft a back-cover marketing blurb for the book "[TITLE]".
Core plot hook: [HOOK].
Ensure it introduces the protagonist, outlines the inciting incident, establishes the high stakes, and ends with a dramatic question to hook readers.`,
        recommendations: ['Keep under 200 words', 'Focus on character motivation', 'Highlight stakes']
      },
      {
        id: 'write-dialogue-script',
        name: 'Script Dialogue',
        slug: 'script-dialogue',
        description: 'Draft video/screenplay script dialogues for scenes.',
        inputs: [
          { key: 'setting', label: 'Scene Setting/Action', type: 'textarea', placeholder: 'e.g. a dark diner at midnight, heavy rain outside' },
          { key: 'characters', label: 'Characters involved', type: 'text', placeholder: 'e.g. Leo (guilt-ridden) and Maya (suspicious)' }
        ],
        basePrompt: `Draft a screenplay script dialogue for a scene in: [SETTING].
Characters: [CHARACTERS].
Include scene descriptions, formatting conventions (Character names centered), subtext in dialogue lines, and visual actions/beats.`,
        recommendations: ['Focus on dialogue pacing', 'Keep script descriptions brief', 'Include character beats']
      }
    ]
  },
  {
    id: 'hr-professionals',
    slug: 'hr-professionals',
    name: 'HR',
    icon: '👥',
    gradient: 'from-blue-600 to-indigo-850',
    tasks: [
      {
        id: 'hr-policy',
        name: 'Employee Policy',
        slug: 'employee-policy',
        description: 'Draft clear, standard policies for company handbooks.',
        inputs: [
          { key: 'title', label: 'Policy Title', type: 'text', placeholder: 'e.g. Remote Work Policy' },
          { key: 'rules', label: 'Core Rules/Directives', type: 'textarea', placeholder: 'e.g. core hours 10am-4pm, internet stipend $50/mo' },
          { key: 'tone', label: 'Policy Tone', type: 'select', options: ['Warm & Culture-Focused', 'Professional & Compliant', 'Direct & Strict'] }
        ],
        basePrompt: `Draft a company policy for our employee handbook: "[TITLE]".
Core guidelines: [RULES].
Target Tone: [TONE].
Include sections for Policy Purpose, Scope, Specific Guidelines, FAQs for employees, and compliance details.`,
        recommendations: ['Use clear, non-legal jargon', 'State exceptions handling', 'List department lead duties']
      },
      {
        id: 'hr-review',
        name: 'Performance Review',
        slug: 'performance-review',
        description: 'Create performance scorecard templates with ratings.',
        inputs: [
          { key: 'cycle', label: 'Evaluation Period', type: 'text', placeholder: 'e.g. Mid-Year 2026' },
          { key: 'values', label: 'Core Competencies', type: 'textarea', placeholder: 'e.g. collaboration, innovation, execution, communication' }
        ],
        basePrompt: `Design an Employee Performance Review Template for the [CYCLE] cycle.
Competencies to grade: [VALUES].
Use a 4-point rating scale. Provide evaluation rubrics for each competency, open comment prompts for strengths/improvements, and a goal-setting roadmap.`,
        recommendations: ['Define rating criteria benchmarks', 'Request goal templates (SMART goals)', 'Keep scorecard layouts objective']
      },
      {
        id: 'hr-onboarding',
        name: 'Onboarding Schedule',
        slug: 'onboarding-schedule',
        description: 'Create detailed Week 1 schedules for new hires.',
        inputs: [
          { key: 'role', label: 'Role Title', type: 'text', placeholder: 'e.g. Customer Success Manager' },
          { key: 'dept', label: 'Department', type: 'text', placeholder: 'e.g. Sales Operations' }
        ],
        basePrompt: `Design a detailed Week 1 Onboarding Schedule for a new [ROLE] in the [DEPT] department.
Provide day-by-day blocks detailing training sessions, introductions, tool setups, and key deliverables for their first week.`,
        recommendations: ['Include breaks and self-study blocks', 'Name specific tooling configurations', 'Suggest check-in markers']
      },
      {
        id: 'hr-conflict',
        name: 'Conflict Resolution',
        slug: 'conflict-resolution',
        description: 'Build mediation guides and script prompts for HR disputes.',
        inputs: [
          { key: 'issue', label: 'Conflict Scenario', type: 'textarea', placeholder: 'e.g. two managers disagreeing over project resource allocation' },
          { key: 'rules', label: 'Company Policy Focus', type: 'text', placeholder: 'e.g. collaboration guidelines, communication norms' }
        ],
        basePrompt: `Create an HR mediation guide to resolve a dispute involving: [ISSUE].
Policy Context: [RULES].
Provide:
1. Preparation checklist for the HR mediator
2. Meeting agenda outline
3. Dialogue scripts/prompts for the mediator to de-escalate tension
4. Post-meeting action agreements framework.`,
        recommendations: ['Focus on neutral/objective language', 'State mediation best practices', 'Suggest consensus-building prompts']
      },
      {
        id: 'hr-dei',
        name: 'DEI Action Plan',
        slug: 'dei-plan',
        description: 'Plan D&I initiatives, training maps, and metric scorecards.',
        inputs: [
          { key: 'goals', label: 'Key DEI Goals', type: 'textarea', placeholder: 'e.g. diversify hiring funnel, build employee resource groups' },
          { key: 'metrics', label: 'Target Metrics', type: 'text', placeholder: 'e.g. 30% diverse candidate pools' }
        ],
        basePrompt: `Generate a Diversity, Equity, and Inclusion (DEI) Action Plan.
Key Goals: [GOALS].
Target Metrics: [METRICS].
Detail the steps to audit current processes, launch Employee Resource Groups (ERGs), introduce inclusive hiring practices, and track progress.`,
        recommendations: ['Recommend standard training topics', 'Ensure metrics are legally compliant', 'Detail employee feedback channels']
      },
      {
        id: 'hr-career',
        name: 'Career Path Roadmap',
        slug: 'career-path',
        description: 'Outline level tracks and criteria for departments.',
        inputs: [
          { key: 'dept', label: 'Department', type: 'text', placeholder: 'e.g. Engineering, Sales' },
          { key: 'levels', label: 'Target Level Steps', type: 'textarea', placeholder: 'e.g. Junior -> Mid-Level -> Senior -> Lead' }
        ],
        basePrompt: `Structure a Career Progression Framework for the [DEPT] department.
Level steps: [LEVELS].
For each level, define the required responsibilities, core skills competency requirements, and key performance indicators (KPIs) to qualify for promotion.`,
        recommendations: ['Format output as a table', 'Ensure differences between levels are clear', 'State objective evaluation guides']
      },
      {
        id: 'hr-announcement',
        name: 'HR Announcement',
        slug: 'hr-announcement',
        description: 'Draft internal memos announcing updates or events.',
        inputs: [
          { key: 'topic', label: 'Announcement Topic', type: 'text', placeholder: 'e.g. open enrollment for health insurance' },
          { key: 'dates', label: 'Key Dates/Deadlines', type: 'text', placeholder: 'e.g. ends November 30th' },
          { key: 'action', label: 'Required Action', type: 'textarea', placeholder: 'e.g. log into HR portal and select plan' }
        ],
        basePrompt: `Write an internal company-wide announcement about: [TOPIC].
Deadlines/Dates: [DATES].
Action Required: [ACTION].
Ensure the tone is warm, professional, clear, highlights the benefits of the update, and details exact steps to complete the action.`,
        recommendations: ['Keep paragraph layouts clean', 'Format deadlines as a list', 'Include help contact references']
      },
      {
        id: 'hr-exit',
        name: 'Employee Exit Survey',
        slug: 'exit-survey',
        description: 'Draft exit survey forms and offboarding questions.',
        inputs: [
          { key: 'dept', label: 'Department', type: 'text', placeholder: 'e.g. Customer Success' },
          { key: 'reason', label: 'Common Exit Context', type: 'text', placeholder: 'e.g. career growth limitations, management issues' }
        ],
        basePrompt: `Create an Employee Exit Survey questionnaire for the [DEPT] department.
Common context to explore: [REASON].
Generate 10 structured questions (rating scales and open text) focusing on compensation, management support, work-life balance, and training.`,
        recommendations: ['Ensure questions encourage honesty', 'Include offboarding instructions', 'Focus on constructive feedback']
      },
      {
        id: 'hr-teambuilding',
        name: 'Team Building Planner',
        slug: 'team-building',
        description: 'Plan virtual or in-person activities within budgets.',
        inputs: [
          { key: 'budget', label: 'Budget/Size', type: 'text', placeholder: 'e.g. $500 budget, 40 people' },
          { key: 'theme', label: 'Activity Focus/Theme', type: 'select', options: ['Virtual/Remote Friendly', 'In-Person Outdoor', 'Collaborative Problem-Solving'] }
        ],
        basePrompt: `Plan a team-building event for [BUDGET].
Activity theme: [THEME].
Provide 3 detailed options showing: event description, time breakdown, setup instructions, materials needed, and key icebreaker questions.`,
        recommendations: ['Focus on low-friction setups', 'Ensure inclusivity for all ability levels', 'Detail post-event feedback check']
      },
      {
        id: 'hr-training',
        name: 'Training Module Outline',
        slug: 'training-outline',
        description: 'Draft training maps with topics, outcomes, and timelines.',
        inputs: [
          { key: 'topic', label: 'Training Topic', type: 'text', placeholder: 'e.g. Information Security Basics' },
          { key: 'objectives', label: 'Learning Objectives', type: 'textarea', placeholder: 'e.g. recognize phishing emails, set secure passwords' }
        ],
        basePrompt: `Create a Training Module Outline for: [TOPIC].
Learning objectives: [OBJECTIVES].
Provide a 4-part training module detailing: lesson topics, presentation slide outlines, interactive activities, and a final assessment quiz framework.`,
        recommendations: ['Align with standard corporate training models', 'Request clear summaries', 'State prerequisites details']
      }
    ]
  },
  {
    id: 'support',
    slug: 'customer-support',
    name: 'Support',
    icon: '🎧',
    gradient: 'from-orange-500 to-amber-600',
    tasks: [
      {
        id: 'sup-reply',
        name: 'Customer Reply',
        slug: 'customer-reply',
        description: 'Draft empathetic support responses resolving client issues.',
        inputs: [
          { key: 'issue', label: 'Customer Issue', type: 'textarea', placeholder: 'e.g. order arrived broken, subscription double charged' },
          { key: 'sentiment', label: 'Customer Sentiment', type: 'select', options: ['Polite/Inquiring', 'Frustrated/Upset', 'Angry/Demanding Refund'] },
          { key: 'steps', label: 'Resolution Steps', type: 'text', placeholder: 'e.g. refunding $30, shipping replacement' }
        ],
        basePrompt: `Draft a customer support email response resolving: [ISSUE].
Customer sentiment level: [SENTIMENT].
Resolution action details: [STEPS].
Ensure the email is empathetic, professional, addresses their concern directly, details the refund/replacement status, and closes with support contact details.`,
        recommendations: ['Use customer name placeholder', 'Ensure refund timelines are stated', 'Tone adjustments guidelines']
      },
      {
        id: 'sup-script',
        name: 'Support Script',
        slug: 'support-script',
        description: 'Create call flow trees for support agents.',
        inputs: [
          { key: 'process', label: 'Support Process', type: 'text', placeholder: 'e.g. resetting account credentials, billing dispute' },
          { key: 'issue', label: 'Common Issues/Friction', type: 'textarea', placeholder: 'e.g. customer forgot email, security question fails' }
        ],
        basePrompt: `Write an interactive Call Script Flow for support agents handling: [PROCESS].
Potential friction points: [ISSUE].
Provide step-by-step greeting scripts, verification checkpoints, troubleshooting guidance, and escalation scripts.`,
        recommendations: ['Include agent tone guidelines', 'Define verification standards', 'Keep scripts simple']
      },
      {
        id: 'sup-faq',
        name: 'FAQ Article',
        slug: 'faq-article',
        description: 'Write search-friendly help center articles with steps.',
        inputs: [
          { key: 'topic', label: 'FAQ Topic', type: 'text', placeholder: 'e.g. How to export reports as CSV' },
          { key: 'steps', label: 'Resolution Steps', type: 'textarea', placeholder: 'e.g. log in, go to settings, click export, choose CSV' }
        ],
        basePrompt: `Write a clear Help Center FAQ Article for: [TOPIC].
Troubleshooting/Action steps: [STEPS].
Include a brief overview of why they might need to complete this action, step-by-step instructions with UI path directions, and a summary screenshot description checklist.`,
        recommendations: ['Use bold fonts for UI elements', 'Keep paragraphs short', 'Format steps as numbered list']
      },
      {
        id: 'sup-escalation',
        name: 'Escalation Memo',
        slug: 'escalation-memo',
        description: 'Draft internal memos passing issues to engineering/billing.',
        inputs: [
          { key: 'account', label: 'Customer Account Details', type: 'text', placeholder: 'e.g. Enterprise account #1204, Acme Corp' },
          { key: 'details', label: 'Issue Details', type: 'textarea', placeholder: 'e.g. database query Timeout error repeating on dashboard' }
        ],
        basePrompt: `Write an internal Support Escalation Memo for engineering/tier 2 support.
Account details: [ACCOUNT].
Issue details: [DETAILS].
Format with Severity level, Issue Summary, steps taken by Tier 1 support, system logs placeholder, and impact on client relationship.`,
        recommendations: ['Ensure technical details are clear', 'Format severity levels (S1, S2)', 'Keep descriptions objective']
      },
      {
        id: 'sup-chat',
        name: 'Live Chat Script',
        slug: 'live-chat-script',
        description: 'Write canned responses for live chat widgets.',
        inputs: [
          { key: 'commonIssues', label: 'Common Chat Queries', type: 'textarea', placeholder: 'e.g. tracking number request, refund status, login issue' }
        ],
        basePrompt: `Generate a suite of 5 Live Chat Canned Responses for our customer support widget.
Queries to cover: [COMMONISSUES].
Ensure messages are friendly, concise (under 200 characters), and direct the customer to the next steps or resources.`,
        recommendations: ['Focus on immediate answers', 'Keep layouts readable', 'Provide link formatting guidelines']
      },
      {
        id: 'sup-trouble',
        name: 'Troubleshooting Guide',
        slug: 'troubleshooting-guide',
        description: 'Write detailed hardware or software troubleshooting logs.',
        inputs: [
          { key: 'problem', label: 'Technical Problem', type: 'text', placeholder: 'e.g. mobile app crashing on login' },
          { key: 'os', label: 'Device/OS context', type: 'text', placeholder: 'e.g. iOS 16, iPhone 14' },
          { key: 'steps', label: 'Standard Fixes', type: 'textarea', placeholder: 'e.g. clear cache, reinstall app, check permissions' }
        ],
        basePrompt: `Write a Troubleshooting Guide for customer support agents handling: [PROBLEM].
Device context: [OS].
Standard fixes list: [STEPS].
Structure with primary solutions, secondary checks, and a checklist of questions to ask the customer to gather system details.`,
        recommendations: ['List specific error codes checks', 'Provide clear diagnostic paths', 'Write in direct language']
      },
      {
        id: 'sup-refund',
        name: 'Customer Refund Reply',
        slug: 'refund-reply',
        description: 'Draft policy-compliant refund approvals or denials.',
        inputs: [
          { key: 'reason', label: 'Refund Request Reason', type: 'text', placeholder: 'e.g. customer bought wrong size, requested after 30-day limit' },
          { key: 'status', label: 'Approval Status', type: 'select', options: ['Approved (full refund)', 'Approved (store credit)', 'Denied (out of policy)'] }
        ],
        basePrompt: `Draft a customer support email regarding a refund request.
Request reason: [REASON].
Policy outcome: [STATUS].
Ensure the email states the outcome clearly, references the company refund policy, and explains the next steps (processing times or alternative options).`,
        recommendations: ['Remain polite and professional', 'Cite specific policy limits', 'Use clean spacing layouts']
      },
      {
        id: 'sup-sla',
        name: 'Support SLA Policy',
        slug: 'sla-policy',
        description: 'Create response time and priority guidelines.',
        inputs: [
          { key: 'channels', label: 'Support Channels', type: 'text', placeholder: 'e.g. email, chat, phone' },
          { key: 'times', label: 'Response Targets', type: 'textarea', placeholder: 'e.g. email 24h, chat 5m, phone immediate' }
        ],
        basePrompt: `Write a customer-facing Service Level Agreement (SLA) Policy.
Support channels: [CHANNELS].
Response targets: [TIMES].
Include definition of priority levels (Critical, High, Medium, Low), target response times, and escalation paths.`,
        recommendations: ['Format output as a table', 'Ensure definitions are clear', 'Use clean layout guidelines']
      },
      {
        id: 'sup-feedback',
        name: 'Feedback Collection Survey',
        slug: 'feedback-survey',
        description: 'Draft post-ticket satisfaction survey questions.',
        inputs: [
          { key: 'segment', label: 'Customer Segment', type: 'text', placeholder: 'e.g. B2B software users' }
        ],
        basePrompt: `Design a post-support-ticket customer satisfaction survey for [SEGMENT].
Include 5 short questions focusing on CSAT (Customer Satisfaction), CES (Customer Effort Score), agent helpfulness, and open text feedback.`,
        recommendations: ['Keep questions short', 'State rating scales definitions', 'Keep layout clear']
      },
      {
        id: 'sup-solved',
        name: 'Customer CSAT Survey',
        slug: 'csat-survey',
        description: 'Draft emails asking for reviews after ticket closure.',
        inputs: [
          { key: 'client', label: 'Customer Name', type: 'text', placeholder: 'e.g. Sarah' },
          { key: 'issue', label: 'Resolved Issue', type: 'text', placeholder: 'e.g. invoice billing correction' }
        ],
        basePrompt: `Write a follow-up email to [CLIENT] after resolving their issue: "[ISSUE]".
Ask for their feedback, provide a placeholder for a 1-5 rating system link, and keep the email extremely short (under 100 words).`,
        recommendations: ['Focus on gratitude', 'Use clean spacing', 'Limit words count']
      }
    ]
  },
  {
    id: 'freelancers',
    slug: 'freelancers',
    name: 'Freelancer',
    icon: '💻',
    gradient: 'from-violet-650 to-indigo-600',
    tasks: [
      {
        id: 'free-proposal',
        name: 'Project Proposal',
        slug: 'project-proposal',
        description: 'Generate high-impact proposals with scope, price, and terms.',
        inputs: [
          { key: 'client', label: 'Client Name/Project', type: 'text', placeholder: 'e.g. Acme Tech Website Redesign' },
          { key: 'scope', label: 'Scope of Work', type: 'textarea', placeholder: 'e.g. redesign 5 pages on Figma, build on Webflow, set up CMS' },
          { key: 'price', label: 'Pricing & Timeline', type: 'text', placeholder: 'e.g. $4,000 flat fee, 4 weeks delivery' }
        ],
        basePrompt: `Draft a professional project proposal for [CLIENT].
Scope of work details: [SCOPE].
Pricing & Timeline: [PRICE].
Include: Project Overview, Scope Checklist, Timeline Milestones, Deliverables, Price Breakdown, and payment milestones.`,
        recommendations: ['Group deliverables clearly', 'Highlight client benefits', 'Detail payment targets']
      },
      {
        id: 'free-terms',
        name: 'Contract Terms Sheet',
        slug: 'contract-terms',
        description: 'Draft payments, revision limits, and IP transfer terms.',
        inputs: [
          { key: 'client', label: 'Client Name', type: 'text', placeholder: 'e.g. Acme Corp' },
          { key: 'payment', label: 'Payment Terms', type: 'text', placeholder: 'e.g. 50% upfront, 50% on completion, Net 15' },
          { key: 'revisions', label: 'Revisions Limit', type: 'text', placeholder: 'e.g. 2 rounds of revisions included' }
        ],
        basePrompt: `Draft a Freelance Contract Terms Sheet for [CLIENT].
Payment rules: [PAYMENT].
Revision limits: [REVISIONS].
Ensure it covers core clauses: Scope of Work boundaries, Payment terms, Revision limits, IP ownership transfer (upon final payment), and termination rules.`,
        recommendations: ['Define scope creep penalty terms', 'Ensure IP clauses are clear', 'State termination notice requirements']
      },
      {
        id: 'free-invoice',
        name: 'Client Invoice Memo',
        slug: 'invoice-memo',
        description: 'Draft clean invoice detail logs with payment instructions.',
        inputs: [
          { key: 'project', label: 'Project Name', type: 'text', placeholder: 'e.g. Brand Logo Design' },
          { key: 'amount', label: 'Invoice Amount', type: 'text', placeholder: 'e.g. $1,200' },
          { key: 'method', label: 'Payment Method', type: 'text', placeholder: 'e.g. Bank transfer, Stripe, Paypal' }
        ],
        basePrompt: `Draft a professional freelance invoice detailing: [PROJECT].
Total Amount due: [AMOUNT].
Payment methods instructions: [METHOD].
Format with clear tables showing hours/units, description, unit price, tax, total, and direct bank details placeholder.`,
        recommendations: ['Format output as a table', 'Include billing address placeholder', 'State late payment policy note']
      },
      {
        id: 'free-creep',
        name: 'Scope Creep Email',
        slug: 'scope-creep-email',
        description: 'Politely notify clients of out-of-scope tasks and costs.',
        inputs: [
          { key: 'request', label: 'New Client Request', type: 'textarea', placeholder: 'e.g. adding a custom login portal' },
          { key: 'original', label: 'Original Scope', type: 'text', placeholder: 'e.g. informational landing page' },
          { key: 'price', label: 'Price Adjustment', type: 'text', placeholder: 'e.g. extra $500 and 1 week delay' }
        ],
        basePrompt: `Write a polite, professional email to a client regarding a change in project scope.
New request details: [REQUEST].
Original contract scope: [ORIGINAL].
Price adjustment: [PRICE].
Politely explain that this request falls out of the original scope and offer to handle it under a separate work order with the specified price adjustment.`,
        recommendations: ['Keep tone polite and collaborative', 'Avoid sounding defensive', 'State clear alternatives']
      },
      {
        id: 'free-case',
        name: 'Portfolio Case Study',
        slug: 'portfolio-case-study',
        description: 'Draft case studies with problems, solutions, and metrics.',
        inputs: [
          { key: 'name', label: 'Project Name', type: 'text', placeholder: 'e.g. Local Gym SEO Campaign' },
          { key: 'problem', label: 'Client Challenge', type: 'textarea', placeholder: 'e.g. low website visits and zero online signups' },
          { key: 'results', label: 'Measurable Results', type: 'text', placeholder: 'e.g. 150% increase in traffic, 30 new signups/month' }
        ],
        basePrompt: `Generate a Freelance Case Study for our portfolio based on the project: [NAME].
Client challenge: [PROBLEM].
Results achieved: [RESULTS].
Structure the case study with: Executive Summary, The Problem, The Solution (your work steps), and Results/Impact.`,
        recommendations: ['Highlight metrics bolded', 'Use problem-solution structures', 'Keep descriptions action-focused']
      },
      {
        id: 'free-pitch',
        name: 'Pitch Email',
        slug: 'pitch-email',
        description: 'Draft direct cold emails pitching services to clients.',
        inputs: [
          { key: 'client', label: 'Target Client/Niche', type: 'text', placeholder: 'e.g. dental clinics in Boston' },
          { key: 'valueProp', label: 'Value Proposition', type: 'textarea', placeholder: 'e.g. design automated booking pages that reduce no-shows by 40%' }
        ],
        basePrompt: `Write a cold email pitch to [CLIENT] introducing our services.
Value Proposition details: [VALUEPROP].
Include a punchy subject line, keep the body under 120 words, highlight their potential pain point, and make the CTA very low friction (e.g. "open to a 5-min chat?").`,
        recommendations: ['Avoid generic pitching templates', 'Use direct benefit headlines', 'Keep layout clean']
      },
      {
        id: 'free-policy',
        name: 'Late Payment Policy',
        slug: 'late-payment-policy',
        description: 'Draft invoice reminders and interest rate terms.',
        inputs: [
          { key: 'fee', label: 'Late Fee / Interest', type: 'text', placeholder: 'e.g. 1.5% interest per month, $50 flat fee after 10 days' }
        ],
        basePrompt: `Draft a Freelance Late Payment Policy terms block to attach to client agreements.
Late fee rule details: [FEE].
Detail the invoice payment deadlines, penalty structures, notice periods, and terms for stopping project execution if payments are overdue.`,
        recommendations: ['Follow standard commercial terms', 'Ensure rules are legally clear', 'Keep descriptions objective']
      },
      {
        id: 'free-feedback',
        name: 'Revisions Feedback Form',
        slug: 'revisions-feedback',
        description: 'Create feedback sheets for project deliverables.',
        inputs: [
          { key: 'project', label: 'Project Name', type: 'text', placeholder: 'e.g. Mobile App Mockup' },
          { key: 'status', label: 'Current Status', type: 'text', placeholder: 'e.g. draft v1 complete, awaiting client comments' }
        ],
        basePrompt: `Design a feedback request sheet for our client on the project "[PROJECT]".
Current status context: [STATUS].
Create a structured feedback form asking the client to list specific edits grouped by categories (e.g. design, copy, functionality) and prioritize them.`,
        recommendations: ['Include specific editing templates', 'Request clear priorities designations', 'Keep instructions simple']
      },
      {
        id: 'free-termination',
        name: 'Contract Termination Letter',
        slug: 'contract-termination',
        description: 'Draft formal termination notice letters for clients.',
        inputs: [
          { key: 'client', label: 'Client Name', type: 'text', placeholder: 'e.g. Acme Agency' },
          { key: 'reason', label: 'Termination Reason', type: 'textarea', placeholder: 'e.g. repeated late payments, change in project direction' },
          { key: 'notice', label: 'Notice Period', type: 'text', placeholder: 'e.g. 30 days notice' }
        ],
        basePrompt: `Write a formal Contract Termination Letter to [CLIENT].
Termination reason: [REASON].
Notice period details: [NOTICE].
Ensure the tone is warm but firm, references the contract termination clauses, outlines final deliverables, and lists outstanding payments due.`,
        recommendations: ['Focus on neutral, legal wording', 'Detail outstanding payment timelines', 'State notice limits clearly']
      },
      {
        id: 'free-update',
        name: 'Weekly Project Update',
        slug: 'project-update',
        description: 'Create clean summaries of tasks and blockers.',
        inputs: [
          { key: 'tasks', label: 'Completed Tasks', type: 'textarea', placeholder: 'e.g. completed Figma designs, set up database' },
          { key: 'blockers', label: 'Blockers/Next Steps', type: 'textarea', placeholder: 'e.g. waiting on client logo files, setup CMS next week' }
        ],
        basePrompt: `Draft a Weekly Project Update email to our client.
Completed tasks list: [TASKS].
Blockers and next steps: [BLOCKERS].
Organize using bullet points, keep the email concise, highlight milestones achieved, and state clear actions required from the client.`,
        recommendations: ['Use bold fonts for action items', 'Keep text concise', 'Format timelines as lists']
      }
    ]
  },
  {
    id: 'researchers',
    slug: 'researchers',
    name: 'Researcher',
    icon: '🔬',
    gradient: 'from-cyan-500 to-blue-650',
    tasks: [
      {
        id: 'res-lit-review',
        name: 'Literature Review',
        slug: 'literature-review',
        description: 'Synthesize research papers and outline current literature status.',
        inputs: [
          { key: 'topic', label: 'Research Topic', type: 'text', placeholder: 'e.g. quantum computing error correction' },
          { key: 'papers', label: 'Key Papers/Findings', type: 'textarea', placeholder: 'List main articles or findings to synthesize...' }
        ],
        basePrompt: `You are an academic researcher. Write a comprehensive literature review summary on [TOPIC].
Key findings and papers to synthesize: [PAPERS].
Identify key themes, consensus, contradictions, and gaps in the literature.`,
        recommendations: ['Provide citations where possible', 'Highlight conflicting view points', 'Identify methodology gaps']
      },
      {
        id: 'res-proposal',
        name: 'Research Proposal',
        slug: 'research-proposal',
        description: 'Draft structured academic or industrial research proposals.',
        inputs: [
          { key: 'title', label: 'Proposal Title/Topic', type: 'text', placeholder: 'e.g. impact of microplastics on soil microbiome' },
          { key: 'objectives', label: 'Specific Objectives', type: 'textarea', placeholder: 'List 3 specific research objectives...' }
        ],
        basePrompt: `Draft a structured research proposal titled "[TITLE]".
Specific Objectives: [OBJECTIVES].
Outline: Introduction, Significance, Research Questions, Methodology Outline, and Expected Outcomes.`,
        recommendations: ['Keep objectives measurable', 'State societal or academic significance', 'Include brief scope limits']
      },
      {
        id: 'res-methodology',
        name: 'Methodology Design',
        slug: 'methodology-design',
        description: 'Define experimental workflows, controls, and data collection.',
        inputs: [
          { key: 'experiment', label: 'Experimental Goal', type: 'text', placeholder: 'e.g. testing drug X efficiency on cells' },
          { key: 'variables', label: 'Variables & Controls', type: 'textarea', placeholder: 'Independent, dependent variables, and negative/positive controls...' }
        ],
        basePrompt: `Design a detailed scientific methodology for: [EXPERIMENT].
Variables & Controls: [VARIABLES].
Provide step-by-step experimental steps, data collection procedures, and validation protocols.`,
        recommendations: ['Detail sample size and replication rules', 'Outline double-blind steps if applicable', 'Define success criteria']
      },
      {
        id: 'res-data-analysis',
        name: 'Data Analysis Plan',
        slug: 'data-analysis',
        description: 'Outline statistical methods, regression models, and tests.',
        inputs: [
          { key: 'data', label: 'Data Type/Source', type: 'text', placeholder: 'e.g. longitudinal patient health records' },
          { key: 'hypotheses', label: 'Hypotheses to Test', type: 'textarea', placeholder: 'List null and alternative hypotheses...' }
        ],
        basePrompt: `Create a statistical data analysis plan for: [DATA].
Hypotheses to test: [HYPOTHESES].
Outline the statistical models, regression types, ANOVA/T-tests, and data cleaning steps needed.`,
        recommendations: ['State significance level target (e.g. alpha = 0.05)', 'Specify software package preference', 'Describe handling of missing data']
      },
      {
        id: 'res-abstract',
        name: 'Abstract Writer',
        slug: 'abstract-writer',
        description: 'Draft concise, high-impact paper abstracts.',
        inputs: [
          { key: 'background', label: 'Background & Problem', type: 'text', placeholder: 'e.g. current models fail on edge cases' },
          { key: 'methods', label: 'Methods & Results', type: 'textarea', placeholder: 'Explain what you did and the main metrics achieved...' }
        ],
        basePrompt: `Write a professional academic abstract based on:
Background: [BACKGROUND]
Methods & Results: [METHODS].
Keep the abstract structured, concise (under 250 words), and highly objective.`,
        recommendations: ['Start with context, end with impact', 'Use precise quantitative findings', 'Highlight the primary novelty']
      },
      {
        id: 'res-peer-review',
        name: 'Peer Review Report',
        slug: 'peer-review',
        description: 'Review academic papers for rigor, clarity, and contribution.',
        inputs: [
          { key: 'claims', label: 'Main Claims of Paper', type: 'textarea', placeholder: 'Describe the main claims and findings of the paper...' },
          { key: 'concerns', label: 'Identified Concerns', type: 'textarea', placeholder: 'List methodology concerns, lack of references, or logic gaps...' }
        ],
        basePrompt: `Write a constructive academic peer review report.
Main Claims: [CLAIMS].
Identified Concerns: [CONCERNS].
Provide a summary of the paper, list major issues, minor suggestions, and general verdict.`,
        recommendations: ['Maintain professional and constructive tone', 'Group issues by severity', 'Request specific experiments if claims lack data']
      },
      {
        id: 'res-hypothesis',
        name: 'Hypothesis Generation',
        slug: 'hypothesis-generation',
        description: 'Generate testable scientific or business hypotheses.',
        inputs: [
          { key: 'observation', label: 'Core Observation', type: 'textarea', placeholder: 'e.g. mobile conversion dropped for older demographics after design change' }
        ],
        basePrompt: `Act as a senior scientific methodologist. Formulate 3 distinct, testable hypotheses based on the observation: [OBSERVATION].
For each, provide: The Hypothesis (If/Then format), The Underlying Mechanism, and a Suggested Test Method.`,
        recommendations: ['Ensure hypotheses are falsifiable', 'Focus on different root causes', 'Detail quick validation ideas']
      },
      {
        id: 'res-citation',
        name: 'Citation Formatter',
        slug: 'citation-formatter',
        description: 'Convert raw citation text into APA, MLA, Harvard, or Chicago style.',
        inputs: [
          { key: 'raw', label: 'Raw Reference Text', type: 'textarea', placeholder: 'Paste authors, year, title, journal, volume, pages...' },
          { key: 'style', label: 'Target Style', type: 'select', options: ['APA 7th', 'MLA 9th', 'Harvard', 'Chicago (Author-Date)'] }
        ],
        basePrompt: `Format the following raw reference text into [STYLE] style:
[RAW]
Ensure all punctuation, italicization, and ordering rules match the standard strictly.`,
        recommendations: ['Check book vs journal chapter formats', 'Double check author initials placement', 'Include DOI if provided']
      },
      {
        id: 'res-grant',
        name: 'Grant Proposal Draft',
        slug: 'grant-proposal',
        description: 'Outline societal impact, budget breakdown, and milestones.',
        inputs: [
          { key: 'project', label: 'Project Goal', type: 'text', placeholder: 'e.g. developing low-cost solar water filters' },
          { key: 'budget', label: 'Requested Budget & Use', type: 'textarea', placeholder: 'List main expense categories...' }
        ],
        basePrompt: `Write a compelling grant proposal section for: [PROJECT].
Requested Budget & Use: [BUDGET].
Highlight: Project Innovation, Broader Societal Impact, Implementation Milestones, and Resource Allocation justification.`,
        recommendations: ['Focus on societal ROI', 'Keep budget categories aligned to milestones', 'State team feasibility indicators']
      },
      {
        id: 'res-pres',
        name: 'Presentation Summary',
        slug: 'presentation-summary',
        description: 'Distill complex research papers into simple slide outlines.',
        inputs: [
          { key: 'paper', label: 'Paper Summary/Findings', type: 'textarea', placeholder: 'Paste core findings or full text of research paper...' }
        ],
        basePrompt: `Distill this research paper content into a 10-slide presentation outline:
[PAPER]
For each slide, provide: Slide Title, Key Bullet Points (ELI15 level), and short Presenter Notes.`,
        recommendations: ['Avoid cognitive overload on slides', 'Use clear narratives across slides', 'Keep bullet points short']
      }
    ]
  },
  {
    id: 'consultants',
    slug: 'consultants',
    name: 'Consultant',
    icon: '🧠',
    gradient: 'from-slate-500 to-zinc-600',
    tasks: [
      {
        id: 'cons-swot',
        name: 'SWOT Analysis',
        slug: 'swot-analysis',
        description: 'Evaluate internal strengths/weaknesses and external opportunities/threats.',
        inputs: [
          { key: 'business', label: 'Business Profile', type: 'text', placeholder: 'e.g. a local boutique coffee chain expanding online' },
          { key: 'market', label: 'Market Context', type: 'textarea', placeholder: 'List competitor trends, customer habits, etc...' }
        ],
        basePrompt: `Perform a detailed SWOT Analysis for: [BUSINESS].
Market Context: [MARKET].
Provide a matrix table of Strengths, Weaknesses, Opportunities, and Threats, followed by 3 key strategic recommendations.`,
        recommendations: ['Differentiate internal (SW) vs external (OT) factors', 'Prioritize factors by impact', 'Make recommendations actionable']
      },
      {
        id: 'cons-market-entry',
        name: 'Market Entry Strategy',
        slug: 'market-entry',
        description: 'Outline entry modes, pricing, and regulatory strategies.',
        inputs: [
          { key: 'product', label: 'Product/Service', type: 'text', placeholder: 'e.g. premium organic baby formula' },
          { key: 'target', label: 'Target Market/Region', type: 'text', placeholder: 'e.g. Vietnam, middle-class parents' }
        ],
        basePrompt: `Develop a Market Entry Strategy for introducing [PRODUCT] into [TARGET].
Outline: Entry Mode (Joint Venture, Direct, etc.), Target Customer Persona, Competitive Pricing, Distribution Channels, and Regulatory Barriers.`,
        recommendations: ['Consider local cultural habits', 'Evaluate pricing relative to local benchmarks', 'Identify key local regulatory barriers']
      },
      {
        id: 'cons-case-study',
        name: 'Business Case Study',
        slug: 'business-case-study',
        description: 'Draft business studies showing challenges, interventions, and metrics.',
        inputs: [
          { key: 'client', label: 'Client Challenge', type: 'textarea', placeholder: 'e.g. high customer churn at SaaS platform' },
          { key: 'intervention', label: 'Intervention/Strategy', type: 'textarea', placeholder: 'e.g. redesigned onboarding and active customer support follow-up' },
          { key: 'metrics', label: 'Measurable Impact', type: 'text', placeholder: 'e.g. churn dropped by 35% in 3 months' }
        ],
        basePrompt: `Generate a Business Case Study detailing:
Client Challenge: [CLIENT].
Intervention/Strategy: [INTERVENTION].
Impact: [METRICS].
Format with: Executive Summary, Root Cause Analysis, Implementation Steps, and Quantifiable Results.`,
        recommendations: ['Use client-consultant terminology', 'Present metrics clearly', 'Highlight scalability of solution']
      },
      {
        id: 'cons-pitch-deck',
        name: 'Pitch Deck Outline',
        slug: 'pitch-deck',
        description: 'Structure 12-slide investor pitch decks.',
        inputs: [
          { key: 'startup', label: 'Business Idea', type: 'text', placeholder: 'e.g. AI-powered inventory tracker for grocery stores' },
          { key: 'market', label: 'Market Opportunity', type: 'text', placeholder: 'e.g. $10B addressable market, 15% annual growth' }
        ],
        basePrompt: `Create a 12-slide Pitch Deck Outline for [STARTUP].
Market Context: [MARKET].
Follow standard VC slides: Problem, Solution, Product, Market Size (TAM/SAM/SOM), Business Model, Competition, Go-To-Market, Team, Financials, and The Ask.`,
        recommendations: ['Keep slides highly visual-ready', 'Refine the core value prop', 'Specify direct revenue model']
      },
      {
        id: 'cons-audit',
        name: 'Operations Audit',
        slug: 'operations-audit',
        description: 'Evaluate workflows for bottlenecks, waste, and costs.',
        inputs: [
          { key: 'workflow', label: 'Current Workflow', type: 'textarea', placeholder: 'Describe the current steps (e.g. manual invoicing, multi-level approvals)...' },
          { key: 'leakage', label: 'Known Inefficiencies', type: 'text', placeholder: 'e.g. 5-day delay in shipping, errors in order entry' }
        ],
        basePrompt: `Perform an operational audit of:
Current Workflow: [WORKFLOW].
Inefficiencies: [LEAKAGE].
Provide a bottleneck analysis and recommend 3 digital transformation or process optimization steps.`,
        recommendations: ['Calculate estimated time/cost savings', 'Focus on automation potentials', 'Detail change management risks']
      },
      {
        id: 'cons-change-mgmt',
        name: 'Change Management Plan',
        slug: 'change-management',
        description: 'Structure ADKAR-based company transition plans.',
        inputs: [
          { key: 'change', label: 'Proposed Change', type: 'text', placeholder: 'e.g. transitioning from legacy CRM to Salesforce' },
          { key: 'resistance', label: 'Primary Obstacles', type: 'textarea', placeholder: 'e.g. sales team doesn\'t want to learn a new tool, data migration concerns...' }
        ],
        basePrompt: `Develop a Change Management Plan for: [CHANGE].
Key Obstacles: [RESISTANCE].
Follow a structured framework (like ADKAR) addressing Awareness, Desire, Knowledge, Ability, and Reinforcement.`,
        recommendations: ['Design communication calendars', 'Outline training programs', 'Define feedback loops']
      },
      {
        id: 'cons-comp-analysis',
        name: 'Competitive Analysis',
        slug: 'competitive-analysis',
        description: 'Compare features, pricing, and positioning of competitors.',
        inputs: [
          { key: 'myProduct', label: 'Your Product', type: 'text', placeholder: 'e.g. premium organic tea bags' },
          { key: 'competitors', label: 'Competitors', type: 'textarea', placeholder: 'List main competitors, their pricing, and main benefits...' }
        ],
        basePrompt: `Perform a Competitive Analysis matching [MYPRODUCT] against key competitors:
[COMPETITORS]
Include a comparative feature matrix, a pricing comparison grid, and recommend positioning strategies to win market share.`,
        recommendations: ['Identify competitor weak spots', 'Highlight unique value points', 'Suggest price positioning models']
      },
      {
        id: 'cons-exec-brief',
        name: 'Executive Brief',
        slug: 'executive-brief',
        description: 'Distill complex reports into 1-page summaries.',
        inputs: [
          { key: 'report', label: 'Full Report Content', type: 'textarea', placeholder: 'Paste full report or key sections here...' }
        ],
        basePrompt: `Write a one-page Executive Brief summarizing:
[REPORT]
Structure with: Context/Objective, Key Takeaways, Financial/Resource Implications, and Actionable Recommendations.`,
        recommendations: ['Use high-density bullet points', 'Bold key metrics', 'Limit to under 400 words']
      },
      {
        id: 'cons-growth',
        name: 'Growth Strategy Matrix',
        slug: 'growth-strategy',
        description: 'Generate expansion tactics using Ansoff Matrix.',
        inputs: [
          { key: 'business', label: 'Business Profile', type: 'text', placeholder: 'e.g. online organic soap retailer' },
          { key: 'budget', label: 'Growth Budget / Resources', type: 'text', placeholder: 'e.g. low budget, focus on organic social media and email marketing' }
        ],
        basePrompt: `Develop a Growth Strategy Matrix for [BUSINESS].
Growth constraints: [BUDGET].
Propose strategies under the four Ansoff categories: Market Penetration, Market Development, Product Development, and Diversification.`,
        recommendations: ['Scale tactics relative to budget', 'Provide estimated timelines', 'Highlight low-hanging fruit']
      },
      {
        id: 'cons-cost-benefit',
        name: 'Cost-Benefit Analysis',
        slug: 'cost-benefit',
        description: 'Evaluate financial and qualitative ROI of projects.',
        inputs: [
          { key: 'project', label: 'Proposed Project', type: 'text', placeholder: 'e.g. buying a new coffee roasting machine' },
          { key: 'costs', label: 'Costs (Financial & Non-Financial)', type: 'textarea', placeholder: 'List machine cost, setup fees, training time...' },
          { key: 'benefits', label: 'Benefits (Financial & Non-Financial)', type: 'textarea', placeholder: 'List increased capacity, better taste, premium pricing...' }
        ],
        basePrompt: `Develop a Cost-Benefit Analysis for: [PROJECT].
Costs details: [COSTS].
Benefits details: [BENEFITS].
Provide a comparative table, calculate estimated payback period/ROI, and list qualitative advantages and disadvantages.`,
        recommendations: ['Differentiate upfront vs recurring costs', 'Assign approximate values to qualitative benefits', 'Identify main financial risks']
      }
    ]
  },
  {
    id: 'sales-reps',
    slug: 'sales-reps',
    name: 'Sales Representative',
    icon: '💰',
    gradient: 'from-green-500 to-emerald-600',
    tasks: [
      {
        id: 'sales-cold-outreach',
        name: 'Cold Outreach Email',
        slug: 'cold-outreach',
        description: 'Draft personalization-first cold outreach sales drafts.',
        inputs: [
          { key: 'prospect', label: 'Prospect Persona/Title', type: 'text', placeholder: 'e.g. VP of Marketing at Shopify Agencies' },
          { key: 'painPoint', label: 'Primary Pain Point', type: 'text', placeholder: 'e.g. low conversion rates on client ad accounts' },
          { key: 'mySolution', label: 'My Solution', type: 'text', placeholder: 'e.g. automated landing page optimization software' }
        ],
        basePrompt: `Draft a cold sales outreach email targeting: [PROSPECT].
Their main pain point: [PAINPOINT].
Our solution: [MYSOLUTION].
Include 3 punchy Subject Line options. The email must be brief (under 130 words), lead with a hook, offer value, and end with a low-friction CTA.`,
        recommendations: ['Write subject lines that look like internal emails', 'Focus on what the prospect gets, not what you sell', 'Make the CTA simple']
      },
      {
        id: 'sales-pitch-script',
        name: 'Sales Pitch Script',
        slug: 'pitch-script',
        description: 'Draft phone call scripts with hooks and questions.',
        inputs: [
          { key: 'product', label: 'Product Name/Value', type: 'text', placeholder: 'e.g. payroll software that reduces errors by 90%' },
          { key: 'persona', label: 'Target Buyer', type: 'text', placeholder: 'e.g. small business HR managers' }
        ],
        basePrompt: `Draft an interactive phone script for a sales pitch of [PRODUCT] targeting [PERSONA].
Include: The Hook/Opener, The Qualification (asking 3 target questions), The Pitch, and handling the "I don't have time" blocker.`,
        recommendations: ['Create collaborative conversational guidelines', 'Draft short responses', 'State specific transition phrases']
      },
      {
        id: 'sales-objection',
        name: 'Objection Handling Guide',
        slug: 'objection-handling',
        description: 'Create responses for price, timing, and competitor blocks.',
        inputs: [
          { key: 'product', label: 'Product/Service', type: 'text', placeholder: 'e.g. high-end corporate training programs' },
          { key: 'objections', label: 'Common Objections', type: 'textarea', placeholder: 'e.g. "it\'s too expensive", "we are happy with our current agency"' }
        ],
        basePrompt: `Create a Sales Objection Handling Guide for [PRODUCT].
Objections to handle: [OBJECTIONS].
For each, provide: The Underlying Concern, the Feel-Felt-Found response, and a Pivot Question.`,
        recommendations: ['Avoid sounding argumentative', 'Empathize with the prospect first', 'Ask open-ended follow up questions']
      },
      {
        id: 'sales-demo',
        name: 'Product Demo Script',
        slug: 'demo-script',
        description: 'Structure 15-minute product demos.',
        inputs: [
          { key: 'product', label: 'Product & Key Features', type: 'text', placeholder: 'e.g. dashboard for analytics and automatic report sending' },
          { key: 'buyerGoals', label: 'Prospect\'s Goals', type: 'textarea', placeholder: 'e.g. wants to save 10 hours a week on reporting, impress management' }
        ],
        basePrompt: `Design a 15-minute Product Demo Script for [PRODUCT].
Prospect\'s goals: [BUYERGOALS].
Provide a timeline structure: Welcome/Goals alignment (3 min), Feature Demo highlighting value (7 min), Custom Solution mapping (3 min), and CTA/Next steps (2 min).`,
        recommendations: ['Focus on value over features', 'Check in with the prospect frequently during the demo', 'Plan custom screen setups']
      },
      {
        id: 'sales-follow-up',
        name: 'Follow-Up Email Sequence',
        slug: 'follow-up',
        description: 'Create 3-step value-first sales email sequences.',
        inputs: [
          { key: 'meeting', label: 'Last Meeting Context', type: 'text', placeholder: 'e.g. had a demo last week, they liked the reports, promised to check budget' },
          { key: 'offer', label: 'Value Offer / Incentive', type: 'text', placeholder: 'e.g. case study of similar client saving 20% cost' }
        ],
        basePrompt: `Draft a 3-step Follow-Up Email Sequence after: [MEETING].
Value offer details: [OFFER].
Email 1: Value-first follow-up (2 days after). Email 2: Social proof/Case study (5 days after). Email 3: Simple check-in (10 days after).`,
        recommendations: ['Keep follow-ups ultra-short', 'Provide new value in every email', 'Do not sound passive-aggressive']
      },
      {
        id: 'sales-discovery',
        name: 'Discovery Call Questions',
        slug: 'discovery-questions',
        description: 'Draft open-ended questions for sales calls.',
        inputs: [
          { key: 'prospect', label: 'Prospect Type', type: 'text', placeholder: 'e.g. e-commerce store owner' },
          { key: 'myGoal', label: 'What I Sell', type: 'text', placeholder: 'e.g. SEO services to increase search traffic' }
        ],
        basePrompt: `Draft a checklist of 10 high-impact open-ended Discovery Call Questions for [PROSPECT] when selling [MYGOAL].
Group the questions: Situation questions, Pain point diagnostics, Impact questions, and Budget/Timeline validation.`,
        recommendations: ['Avoid simple yes/no questions', 'Focus on identifying business impact', 'Check for decision-making paths']
      },
      {
        id: 'sales-proposal-summary',
        name: 'Sales Proposal Summary',
        slug: 'proposal-summary',
        description: 'Synthesize custom pricing and SLAs.',
        inputs: [
          { key: 'client', label: 'Client Details', type: 'text', placeholder: 'e.g. Apex Retail Inc' },
          { key: 'deliverables', label: 'Core Deliverables', type: 'textarea', placeholder: 'e.g. set up CRM, train 10 employees, migrate 5,000 leads' },
          { key: 'pricing', label: 'Pricing options', type: 'text', placeholder: 'e.g. Option 1: Basic CRM Setup ($2k), Option 2: Full CRM + Training ($3.5k)' }
        ],
        basePrompt: `Draft a custom Sales Proposal Summary for [CLIENT].
Core deliverables: [DELIVERABLES].
Pricing options: [PRICING].
Format this as a compelling summary detailing the problems solved, the pricing options matrix, and next steps to start.`,
        recommendations: ['Provide tier-based options', 'Detail standard onboarding SLAs', 'Make calls-to-action clear']
      },
      {
        id: 'sales-value-prop',
        name: 'Value Proposition Map',
        slug: 'value-proposition',
        description: 'Map product features to pain points.',
        inputs: [
          { key: 'product', label: 'Product Name', type: 'text', placeholder: 'e.g. cloud security scanner' },
          { key: 'customer', label: 'Target Customer', type: 'text', placeholder: 'e.g. CTO of digital healthcare startup' },
          { key: 'features', label: 'Main Features', type: 'textarea', placeholder: 'List main features (daily automated scans, HIPAA compliance certification report)...' }
        ],
        basePrompt: `Develop a Value Proposition Map for [PRODUCT] targeting [CUSTOMER].
Product features: [FEATURES].
Propose a matrix mapping: Customer Pains, Pain Relievers, Customer Gains, Gain Creators, and construct 3 core marketing headlines.`,
        recommendations: ['Align pains directly to relief points', 'Differentiate gain creators from basics', 'Refine marketing hook drafts']
      },
      {
        id: 'sales-upsell',
        name: 'Upsell Strategy Draft',
        slug: 'upsell-strategy',
        description: 'Propose expansion pathways for active clients.',
        inputs: [
          { key: 'client', label: 'Current Client Context', type: 'textarea', placeholder: 'e.g. client is using our email newsletter service, open rate is 35%, very happy' },
          { key: 'upsell', label: 'Upsell Service', type: 'text', placeholder: 'e.g. automated behavioral email sequences setup' }
        ],
        basePrompt: `Draft an Upsell Strategy Proposal for: [CLIENT].
Service to upsell: [UPSELL].
Construct the pitch email and the strategy outline demonstrating how adding this service multiplies their current returns.`,
        recommendations: ['Lead with active positive results', 'Present cost vs revenue projections', 'Make transitioning easy']
      },
      {
        id: 'sales-referral',
        name: 'Referral Request Email',
        slug: 'referral-request',
        description: 'Politely ask happy customers for warm intros.',
        inputs: [
          { key: 'client', label: 'Happy Client Name', type: 'text', placeholder: 'e.g. Sarah at Zenith HR' },
          { key: 'success', label: 'Success achieved', type: 'text', placeholder: 'e.g. helped them hire 5 developers in 1 month' }
        ],
        basePrompt: `Draft a Referral Request Email targeting [CLIENT].
Success achieved: [SUCCESS].
Write a warm, non-pushy email asking if they would be open to introducing us to 1 or 2 peers in their network who face similar challenges.`,
        recommendations: ['Send at peak satisfaction moment', 'Make referral process easy (provide templates)', 'Avoid sounding demanding']
      }
    ]
  },
  {
    id: 'content-creators',
    slug: 'content-creators',
    name: 'Content Creator',
    icon: '🎥',
    gradient: 'from-red-500 to-pink-600',
    tasks: [
      {
        id: 'creator-video-script',
        name: 'Video Script Draft',
        slug: 'video-script',
        description: 'Draft structured video layouts with visual and audio cues.',
        inputs: [
          { key: 'topic', label: 'Video Topic/Goal', type: 'text', placeholder: 'e.g. 5 hidden iPhone features you don\'t know' },
          { key: 'duration', label: 'Target Length', type: 'select', options: ['Shorts/Reels (30-60s)', 'YouTube Video (5-10m)', 'Detailed Webinar (30m+)'] }
        ],
        basePrompt: `Write a high-converting Video Script on: [TOPIC].
Format: [DURATION].
Provide a two-column script: Visual directions and Audio/Speech text. Include a hook in the first 3 seconds and clear CTA.`,
        recommendations: ['Hook within 3 seconds', 'Include visual cues', 'State clear calls to action']
      },
      {
        id: 'creator-calendar',
        name: 'Content Calendar Layout',
        slug: 'content-calendar',
        description: 'Generate 4-week thematic social calendars.',
        inputs: [
          { key: 'niche', label: 'Creator Niche', type: 'text', placeholder: 'e.g. budget travel tips for students' },
          { key: 'platforms', label: 'Platforms', type: 'textarea', placeholder: 'e.g. Instagram Reels and TikTok, 3 posts per week' }
        ],
        basePrompt: `Develop a 4-week Social Content Calendar for: [NICHE].
Platforms details: [PLATFORMS].
Format as a weekly grid outlining Post Title, Content Goal, Visual/Format, Hook Idea, and CTA.`,
        recommendations: ['Vary content types (educational, entertaining)', 'Maintain consistent messaging', 'Design simple templates']
      },
      {
        id: 'creator-hook',
        name: 'Hook & Headline Ideas',
        slug: 'hook-ideas',
        description: 'Generate CTR-optimized headers and hooks.',
        inputs: [
          { key: 'topic', label: 'Content Topic', type: 'text', placeholder: 'e.g. how I saved $10k in college' },
          { key: 'platform', label: 'Target Platform', type: 'select', options: ['TikTok/Shorts', 'YouTube Thumbnails', 'LinkedIn Posts', 'Medium Articles'] }
        ],
        basePrompt: `Generate 10 viral hooks/headlines for [TOPIC] optimized for [PLATFORM].
Include a mix of curiosity gaps, numbers, contrarian statements, and benefit-led hooks.`,
        recommendations: ['Optimize click-through potential', 'Analyze platform-specific trends', 'Use active, sensory words']
      },
      {
        id: 'creator-newsletter',
        name: 'Newsletter Draft',
        slug: 'newsletter-draft',
        description: 'Draft engaging emails with stories and calls to action.',
        inputs: [
          { key: 'topic', label: 'Newsletter Topic', type: 'text', placeholder: 'e.g. why reading books is better than podcasts' },
          { key: 'cta', label: 'Newsletter Call to Action', type: 'text', placeholder: 'e.g. buy my new productivity e-book' }
        ],
        basePrompt: `Draft a high-engagement newsletter email on: [TOPIC].
Call to Action: [CTA].
Provide 3 Subject Lines, use a storytelling approach in the body, keep paragraphs short, and weave in the CTA organically.`,
        recommendations: ['Avoid sounding spammy', 'Provide genuine value before pitch', 'Keep layout simple and readable']
      },
      {
        id: 'creator-caption',
        name: 'Social Media Caption',
        slug: 'social-caption',
        description: 'Draft captions with hooks, body, and hashtag blocks.',
        inputs: [
          { key: 'postDescription', label: 'What is the Post About?', type: 'textarea', placeholder: 'Describe the visual or video content...' },
          { key: 'platform', label: 'Target Platform', type: 'select', options: ['Instagram', 'LinkedIn', 'TikTok'] }
        ],
        basePrompt: `Draft a social media caption optimized for [PLATFORM] based on: [POSTDESCRIPTION].
Include a hook, clean line breaks, emojis for spacing, an interactive question to drive comments, and 5 target hashtags.`,
        recommendations: ['Keep caption appropriate for platform', 'Include direct engagement calls', 'Format clean spacing blocks']
      },
      {
        id: 'creator-podcast',
        name: 'Podcast Outline',
        slug: 'podcast-outline',
        description: 'Structure 30-minute podcast episodes.',
        inputs: [
          { key: 'topic', label: 'Podcast Topic', type: 'text', placeholder: 'e.g. building a design business' },
          { key: 'guest', label: 'Guest Bio (Optional)', type: 'text', placeholder: 'e.g. John, founder of 7-figure studio' }
        ],
        basePrompt: `Generate a structured Podcast Outline for an episode on: [TOPIC].
[GUEST_START]Guest Bio: [GUEST][GUEST_END]
Provide segment structures: Intro (5m), Core Questions/Discussion Points (20m), Audience Q&A/Wrap-up (5m).`,
        recommendations: ['Write engaging question lists', 'Keep segments timeline flexible', 'Highlight transition hooks']
      },
      {
        id: 'creator-collab',
        name: 'Brand Collab Pitch',
        slug: 'brand-pitch',
        description: 'Draft pitches showcasing values and media kits.',
        inputs: [
          { key: 'brand', label: 'Target Brand Name', type: 'text', placeholder: 'e.g. Notion' },
          { key: 'audience', label: 'My Audience Metrics', type: 'textarea', placeholder: 'e.g. 50k followers on TikTok, focus on productivity tips, 5% engagement rate' }
        ],
        basePrompt: `Draft a Brand Collaboration Pitch Email targeting: [BRAND].
Audience & metrics profile: [AUDIENCE].
Explain why their product fits our community, outline 2 collaboration ideas, and propose a quick metrics call.`,
        recommendations: ['Focus on ROI for the brand', 'Keep pitch under 150 words', 'Add references to past successful work']
      },
      {
        id: 'creator-brief',
        name: 'SEO Content Brief',
        slug: 'content-brief',
        description: 'Draft outlines with headings and keywords.',
        inputs: [
          { key: 'keyword', label: 'Target Keyword', type: 'text', placeholder: 'e.g. best remote work setups' },
          { key: 'goals', label: 'Content Goals', type: 'text', placeholder: 'e.g. outline equipment, rank #1, direct to affiliate links' }
        ],
        basePrompt: `Generate a detailed SEO Content Brief for target keyword: [KEYWORD].
Core goals: [GOALS].
Include: Target Word Count, H2/H3 Heading Outline, Primary & LSI Keywords list, and Search Intent analysis.`,
        recommendations: ['Include specific structural outlines', 'Review competitor formatting recommendations', 'Keep outlines clean']
      },
      {
        id: 'creator-storyboard',
        name: 'Storyboard Framework',
        slug: 'storyboard-framework',
        description: 'Map visual scenes, timing, and overlay text.',
        inputs: [
          { key: 'concept', label: 'Creative Concept', type: 'textarea', placeholder: 'e.g. advert for organic laundry detergent' }
        ],
        basePrompt: `Create a Storyboard Framework for a 30-second commercial based on: [CONCEPT].
Break into 5 scenes with columns: Scene #, Action/Visual, Camera Angle, Audio/SFX, and Overlay Text/VFX.`,
        recommendations: ['Describe visual details clearly', 'Keep transition timing precise', 'Highlight brand logo appearances']
      },
      {
        id: 'creator-persona',
        name: 'Audience Persona Profile',
        slug: 'audience-persona',
        description: 'Map demographics, pain points, and platforms.',
        inputs: [
          { key: 'product', label: 'Product/Service/Niche', type: 'text', placeholder: 'e.g. premium organic coffee subscription' },
          { key: 'demographics', label: 'General Demographics', type: 'text', placeholder: 'e.g. millennials, remote office workers' }
        ],
        basePrompt: `Develop a detailed Audience Persona Profile for [PRODUCT].
General demographics: [DEMOGRAPHICS].
Detail: Persona Name/Profile, Daily Routine, Core Pain Points, Media Consumption Habits, and Buying triggers.`,
        recommendations: ['Make the persona feel realistic', 'Identify specific media channels used', 'Outline main purchasing blocks']
      }
    ]
  }
];
