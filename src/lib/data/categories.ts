import type { Category } from '@/types';

const staticCategories: Category[] = [
  // TEACHERS
  { id: 'teachers-lesson-planning', slug: 'lesson-plan-prompts', professionSlug: 'teachers', name: 'Lesson Planning', description: 'Create engaging, structured lesson plans for any subject and grade level.', icon: '📝', sortOrder: 1 },
  { id: 'teachers-quiz-generation', slug: 'quiz-prompts', professionSlug: 'teachers', name: 'Quiz Generation', description: 'Generate quizzes, tests, and assessments tailored to your curriculum.', icon: '✅', sortOrder: 2 },
  { id: 'teachers-parent-communication', slug: 'parent-communication-prompts', professionSlug: 'teachers', name: 'Parent Communication', description: 'Write professional, empathetic communications for parents and guardians.', icon: '💌', sortOrder: 3 },
  { id: 'teachers-classroom-activities', slug: 'classroom-activity-prompts', professionSlug: 'teachers', name: 'Classroom Activities', description: 'Design creative, interactive activities to keep students engaged.', icon: '🎯', sortOrder: 4 },
  { id: 'teachers-student-feedback', slug: 'student-feedback-prompts', professionSlug: 'teachers', name: 'Student Feedback', description: 'Craft personalized, constructive feedback for individual students.', icon: '💬', sortOrder: 5 },

  // DEVELOPERS
  { id: 'developers-debugging', slug: 'debugging-prompts', professionSlug: 'developers', name: 'Debugging', description: 'Debug errors, trace bugs, and fix issues faster with AI assistance.', icon: '🐛', sortOrder: 1 },
  { id: 'developers-code-review', slug: 'code-review-prompts', professionSlug: 'developers', name: 'Code Review', description: 'Get thorough, AI-powered code reviews and improvement suggestions.', icon: '🔍', sortOrder: 2 },
  { id: 'developers-refactoring', slug: 'refactoring-prompts', professionSlug: 'developers', name: 'Refactoring', description: 'Refactor legacy code, improve structure, and reduce technical debt.', icon: '🔧', sortOrder: 3 },
  { id: 'developers-documentation', slug: 'documentation-prompts', professionSlug: 'developers', name: 'Documentation', description: 'Write clear, comprehensive technical documentation and READMEs.', icon: '📄', sortOrder: 4 },
  { id: 'developers-architecture', slug: 'architecture-prompts', professionSlug: 'developers', name: 'Architecture', description: 'Design scalable system architectures and technical specifications.', icon: '🏗️', sortOrder: 5 },

  // MARKETERS
  { id: 'marketers-content-creation', slug: 'content-creation-prompts', professionSlug: 'marketers', name: 'Content Creation', description: 'Create blog posts, articles, and long-form content that converts.', icon: '✍️', sortOrder: 1 },
  { id: 'marketers-seo', slug: 'seo-prompts', professionSlug: 'marketers', name: 'SEO', description: 'Optimize content for search engines and boost organic traffic.', icon: '🔎', sortOrder: 2 },
  { id: 'marketers-social-media', slug: 'social-media-prompts', professionSlug: 'marketers', name: 'Social Media', description: 'Write engaging social media posts for every platform.', icon: '📱', sortOrder: 3 },
  { id: 'marketers-email-marketing', slug: 'email-marketing-prompts', professionSlug: 'marketers', name: 'Email Marketing', description: 'Craft email sequences, newsletters, and campaigns that drive results.', icon: '📧', sortOrder: 4 },
  { id: 'marketers-ad-copy', slug: 'ad-copy-prompts', professionSlug: 'marketers', name: 'Ad Copy', description: 'Write high-converting ad copy for Google, Facebook, and beyond.', icon: '📣', sortOrder: 5 },

  // RECRUITERS
  { id: 'recruiters-resume-screening', slug: 'resume-screening-prompts', professionSlug: 'recruiters', name: 'Resume Screening', description: 'Evaluate resumes efficiently and identify the best candidates.', icon: '📋', sortOrder: 1 },
  { id: 'recruiters-candidate-outreach', slug: 'candidate-outreach-prompts', professionSlug: 'recruiters', name: 'Candidate Outreach', description: 'Write personalized, compelling outreach messages that get replies.', icon: '📨', sortOrder: 2 },
  { id: 'recruiters-interview-questions', slug: 'interview-prompts', professionSlug: 'recruiters', name: 'Interview Questions', description: 'Generate role-specific interview questions and evaluation frameworks.', icon: '🎤', sortOrder: 3 },
  { id: 'recruiters-job-descriptions', slug: 'job-description-prompts', professionSlug: 'recruiters', name: 'Job Descriptions', description: 'Write compelling, inclusive job descriptions that attract top talent.', icon: '📰', sortOrder: 4 },
  { id: 'recruiters-offer-letters', slug: 'offer-letter-prompts', professionSlug: 'recruiters', name: 'Offer & Rejection Letters', description: 'Write professional offer letters and respectful rejection emails.', icon: '✉️', sortOrder: 5 },

  // STUDENTS
  { id: 'students-study-planning', slug: 'study-prompts', professionSlug: 'students', name: 'Study Planning', description: 'Build effective study schedules and learning strategies.', icon: '📅', sortOrder: 1 },
  { id: 'students-research', slug: 'research-prompts', professionSlug: 'students', name: 'Research', description: 'Accelerate academic research, find sources, and synthesize information.', icon: '🔬', sortOrder: 2 },
  { id: 'students-exam-preparation', slug: 'exam-prep-prompts', professionSlug: 'students', name: 'Exam Preparation', description: 'Prepare for exams with practice questions, summaries, and mnemonics.', icon: '🎯', sortOrder: 3 },
  { id: 'students-note-generation', slug: 'note-taking-prompts', professionSlug: 'students', name: 'Note Generation', description: 'Transform lectures and readings into structured, memorable notes.', icon: '🗒️', sortOrder: 4 },
  { id: 'students-essay-writing', slug: 'essay-writing-prompts', professionSlug: 'students', name: 'Essay Writing', description: 'Outline, draft, and refine academic essays with AI guidance.', icon: '📝', sortOrder: 5 },

  // ACCOUNTANTS
  { id: 'accountants-financial-analysis', slug: 'financial-analysis-prompts', professionSlug: 'accountants', name: 'Financial Analysis', description: 'Analyze financial statements, ratios, and business performance.', icon: '📈', sortOrder: 1 },
  { id: 'accountants-reporting', slug: 'reporting-prompts', professionSlug: 'accountants', name: 'Reporting', description: 'Generate clear, professional financial reports and summaries.', icon: '📊', sortOrder: 2 },
  { id: 'accountants-excel-automation', slug: 'excel-prompts', professionSlug: 'accountants', name: 'Excel Automation', description: 'Write Excel formulas, macros, and automate repetitive financial tasks.', icon: '🗂️', sortOrder: 3 },
  { id: 'accountants-tax-research', slug: 'tax-research-prompts', professionSlug: 'accountants', name: 'Tax Research', description: 'Research tax regulations, deductions, and compliance requirements.', icon: '🏛️', sortOrder: 4 },
  { id: 'accountants-client-communication', slug: 'client-communication-prompts', professionSlug: 'accountants', name: 'Client Communication', description: 'Write clear financial explanations and client-facing documents.', icon: '💼', sortOrder: 5 },

  // WRITERS
  { id: 'writers-creative-writing', slug: 'creative-writing-prompts', professionSlug: 'writers', name: 'Creative Writing', description: 'Brainstorm creative outlines, prose styles, and story hooks.', icon: '💡', sortOrder: 1 },
  { id: 'writers-story-writing', slug: 'story-writing-prompts', professionSlug: 'writers', name: 'Story Writing', description: 'Generate engaging short stories, dialogues, and plot shifts.', icon: '📖', sortOrder: 2 },
  { id: 'writers-novel-writing', slug: 'novel-writing-prompts', professionSlug: 'writers', name: 'Novel Writing', description: 'Structure chapter outlines, book frameworks, and narratives.', icon: '📚', sortOrder: 3 },
  { id: 'writers-blog-writing', slug: 'blog-writing-prompts', professionSlug: 'writers', name: 'Blog Writing', description: 'Write engaging blog posts, article hooks, and editorial copy.', icon: '📰', sortOrder: 4 },
  { id: 'writers-essay-writing', slug: 'essay-writing-prompts', professionSlug: 'writers', name: 'Essay Writing', description: 'Formulate thesis statements, outlines, and structured arguments.', icon: '✍️', sortOrder: 5 },
  { id: 'writers-script-writing', slug: 'script-writing-prompts', professionSlug: 'writers', name: 'Script Writing', description: 'Draft screenplays, video script blueprints, and dialogues.', icon: '🎬', sortOrder: 6 },
  { id: 'writers-poetry-writing', slug: 'poetry-writing-prompts', professionSlug: 'writers', name: 'Poetry Writing', description: 'Write custom poems, sonnets, rhyming sequences, and free verses.', icon: '🖋️', sortOrder: 7 },
];

// Add programmatically compiled categories for the other 30 professions
const otherProfessionsSlugs = [
  'photographers', 'hr-professionals', 'content-writers', 'copywriters', 'entrepreneurs',
  'business-analysts', 'project-managers', 'customer-support', 'real-estate-agents', 'sales-representatives',
  'graphic-designers', 'ux-ui-designers', 'consultants', 'data-analysts', 'data-scientists',
  'cybersecurity-professionals', 'devops-engineers', 'product-managers', 'social-media-managers', 'researchers',
  'professors', 'school-administrators', 'startup-founders', 'virtual-assistants', 'freelancers'
];

const genericCategoryTemplates = [
  { slug: 'workflow-prompts', name: 'Workflow Optimization', description: 'Automate repetitive tasks, speed up delivery cycles, and structure procedures.', icon: '⚡' },
  { slug: 'client-prompts', name: 'Client Communication', description: 'Write email replies, proposal outlines, and presentation descriptions.', icon: '✉️' },
  { slug: 'reporting-prompts', name: 'Reporting & Analysis', description: 'Structure feedback lists, design summaries, and audit reports.', icon: '📈' },
  { slug: 'concept-prompts', name: 'Creative Brainstorming', description: 'Ideate new angles, research models, and explore layout concepts.', icon: '💡' }
];

const generatedCategories: Category[] = [];

otherProfessionsSlugs.forEach((profSlug) => {
  // If the profession is photographers, add a custom studio portraits category
  if (profSlug === 'photographers') {
    generatedCategories.push(
      { id: 'photographers-portraits', slug: 'portrait-prompts', professionSlug: 'photographers', name: 'Studio Portraits', description: 'Lighting configurations, Midjourney style settings, and pose descriptions.', icon: '👤', sortOrder: 1 },
      { id: 'photographers-workflow', slug: 'workflow-prompts', professionSlug: 'photographers', name: 'Workflow Optimization', description: 'Automate shoot schedules, camera logs, and asset checklist setups.', icon: '⚡', sortOrder: 2 },
      { id: 'photographers-clients', slug: 'client-prompts', professionSlug: 'photographers', name: 'Client Communication', description: 'Draft booking answers, quote emails, and contract reviews.', icon: '✉️', sortOrder: 3 }
    );
  } else {
    // Standard generic categories
    genericCategoryTemplates.forEach((tpl, idx) => {
      generatedCategories.push({
        id: `${profSlug}-${tpl.slug.split('-')[0]}`,
        slug: tpl.slug,
        professionSlug: profSlug,
        name: tpl.name,
        description: tpl.description,
        icon: tpl.icon,
        sortOrder: idx + 1
      });
    });
  }
});

export const categories: Category[] = [...staticCategories, ...generatedCategories];

export function getCategoriesByProfession(professionSlug: string): Category[] {
  return categories.filter((c) => c.professionSlug === professionSlug).sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getCategoryBySlug(slug: string, professionSlug: string): Category | undefined {
  return categories.find((c) => c.slug === slug && c.professionSlug === professionSlug);
}

export function getAllCategorySlugs(): { professionSlug: string; categorySlug: string }[] {
  return categories.map((c) => ({ professionSlug: c.professionSlug, categorySlug: c.slug }));
}
