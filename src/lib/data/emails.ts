// src/lib/data/emails.ts

export interface EmailCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  introduction: string;
  icon: string;
}

export interface EmailPrompt {
  id: string;
  slug: string;
  title: string;
  categorySlug: string;
  description: string;
  content: string;
  exampleOutput: string;
  tags: string[];
}

export const emailCategories: EmailCategory[] = [
  {
    id: 'professional',
    slug: 'professional',
    name: 'Professional Emails',
    description: 'Draft internal workplace updates, budget requests, delegation notices, and executive reports.',
    seoTitle: 'Professional Business Email Prompts for ChatGPT | PromptMaze',
    seoDescription: 'Unlock professional email templates and ChatGPT prompts for workplace updates, delegations, budget approvals, and executive correspondence.',
    introduction: 'Clear workplace communication is vital for alignment and productivity. These templates help you frame project reviews, report delays, request budget approvals, and draft executive updates professionally.',
    icon: '💼'
  },
  {
    id: 'job-application',
    slug: 'job-application',
    name: 'Job Application Emails',
    description: 'Write standout cover letters, cold outreach to recruiters, and interview acceptances.',
    seoTitle: 'ChatGPT Prompts for Job Applications & Cover Letters | PromptMaze',
    seoDescription: 'Find the best ChatGPT prompts for writing job application cover letters, recruiter outreach, referrals, and offer acceptances.',
    introduction: 'Position yourself as the ideal candidate. These prompts help you generate custom cover letters, reach out directly to hiring managers, ask for internal referrals, and respond to job offers.',
    icon: '📄'
  },
  {
    id: 'follow-up',
    slug: 'follow-up',
    name: 'Follow-Up Emails',
    description: 'Send polite nudges for proposals, outstanding invoices, or post-interview status checks.',
    seoTitle: 'Polite Follow-Up Email Prompts for ChatGPT | PromptMaze',
    seoDescription: 'Discover ChatGPT prompts for follow-up emails after proposals, client calls, interviews, or outstanding invoice notices.',
    introduction: 'Never let a conversation drop. Use these polite but persistent follow-up email templates to keep prospects engaged, nudge unresponsive stakeholders, check interview statuses, or collect outstanding invoices.',
    icon: '⏰'
  },
  {
    id: 'sales',
    slug: 'sales',
    name: 'Sales Outreach Emails',
    description: 'Pitch value propositions, invite prospects to demos, and share customer success stories.',
    seoTitle: 'Sales Outreach Email Prompts & Pitches for AI | PromptMaze',
    seoDescription: 'Boost your sales conversions with optimized cold outreach prompts, product pitch templates, and demo invitation prompts for ChatGPT.',
    introduction: 'Win more business by starting conversations with value. These prompts draft engaging sales messages, from case study sharing and demo invitations to mutual connection warm pitches.',
    icon: '🚀'
  },
  {
    id: 'customer-support',
    slug: 'customer-support',
    name: 'Customer Support Emails',
    description: 'Resolve billing queries, explain technical fixes, and handle outages with empathy.',
    seoTitle: 'Customer Support Email Templates & ChatGPT Prompts | PromptMaze',
    seoDescription: 'Write empathetic customer support replies, billing dispute solutions, and system outage emails using ChatGPT.',
    introduction: 'Provide exceptional customer care. Use these prompts to draft polite, empathetic, and clear replies to complaints, technical troubleshooting steps, billing inquiries, and service outage alerts.',
    icon: '🎧'
  },
  {
    id: 'networking',
    slug: 'networking',
    name: 'Networking Emails',
    description: 'Request informational interviews, connect with mentors, and ask for referrals.',
    seoTitle: 'Professional Networking Email Prompts for ChatGPT | PromptMaze',
    seoDescription: 'Generate warm networking emails, informational interview requests, and mentor thank-you messages using AI.',
    introduction: 'Build meaningful connections in your industry. These prompts draft request templates for informational interviews, warm intros, former colleague reconnections, and mentor updates.',
    icon: '🤝'
  },
  {
    id: 'thank-you',
    slug: 'thank-you',
    name: 'Thank You Emails',
    description: 'Express gratitude to interviewers, clients, referrers, and helpful teammates.',
    seoTitle: 'Professional Thank You Email Prompts for ChatGPT | PromptMaze',
    seoDescription: 'Send polished appreciation letters, client thank-yous, and post-interview gratitude notes with ChatGPT.',
    introduction: 'Strengthen relationships with genuine appreciation. Draft high-impact thank-you notes for interviews, referrals, collaborations, and year-end customer appreciation campaigns.',
    icon: '✨'
  },
  {
    id: 'complaint',
    slug: 'complaint',
    name: 'Complaint Resolution Emails',
    description: 'Escalate service breaches, address billing errors, or notify vendors of delays.',
    seoTitle: 'Polite Complaint & Escalation Email Prompts | PromptMaze',
    seoDescription: 'Draft formal complaint letters, vendor delay notifications, and billing dispute requests with ChatGPT.',
    introduction: 'Address grievances constructively. These templates help you request refunds, notify suppliers of shipping delays, escalate ticket resolutions, and address team communication breakdowns professionally.',
    icon: '⚠️'
  },
  {
    id: 'cold',
    slug: 'cold',
    name: 'Cold Emails',
    description: 'Reach out to prospective partners, startup investors, or agency clients.',
    seoTitle: 'High-Converting Cold Email Prompts for ChatGPT | PromptMaze',
    seoDescription: 'Discover cold outreach prompts for SaaS pitches, agency marketing, investor intros, and podcast guest invites.',
    introduction: 'Break the ice with cold outreach that gets replies. Use these prompts to pitch marketing services, request investor introductions, ask to guest-author articles, or invite podcast guests.',
    icon: '❄️'
  },
  {
    id: 'meeting-request',
    slug: 'meeting-request',
    name: 'Meeting Request Emails',
    description: 'Coordinate schedules, set project kick-offs, or request performance reviews.',
    seoTitle: 'Meeting Request & Scheduling Email Prompts | PromptMaze',
    seoDescription: 'Save time coordinating schedules. Draft structured meeting invitations, demo requests, and performance review syncs.',
    introduction: 'Coordinate meetings with minimal back-and-forth. These templates assist you in scheduling performance reviews, contract discussions, product demonstrations, and project kick-offs.',
    icon: '📅'
  }
];

export const emailPrompts: EmailPrompt[] = [
  // 1. PROFESSIONAL EMAILS
  {
    id: 'emp-prof-001',
    slug: 'request-project-feedback',
    title: 'Request Project Feedback from Stakeholders',
    categorySlug: 'professional',
    description: 'Request constructive feedback from senior team members or key project stakeholders.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user needs to write a professional email requesting constructive feedback on a completed project draft or milestone.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, humble, and open-minded tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Sender Title: [Your Title]
- Recipient Name: [Recipient Name]
- Project Name: [Project Name]
- Feedback Deadline: [Deadline Date]
- Key areas of review: [Key Areas to Focus on]`,
    exampleOutput: `Subject: Review & Feedback Request: [Project Name]

Dear [Recipient Name],

I hope this email finds you well.

We have recently completed the draft version of [Project Name], and I would greatly appreciate your expert insights and feedback before we move to the final revision phase. 

Specifically, I would value your thoughts on:
- [Key Areas to Focus on]

To help us keep the project on track, could you please share your feedback by [Deadline Date]? Let me know if you would prefer to schedule a brief 10-minute sync instead.

Thank you in advance for your time and guidance.

Best regards,

[Your Name]
[Your Title]`,
    tags: ['project review', 'feedback request', 'collaboration', 'stakeholders']
  },
  {
    id: 'emp-prof-002',
    slug: 'announce-team-meeting',
    title: 'Announce an Upcoming Team Sync',
    categorySlug: 'professional',
    description: 'Formally notify the team about a scheduled sync, detailing the agenda and objectives.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user needs to write a professional email announcing an upcoming team meeting and sharing the agenda.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, structured, and informative tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Team Name: [Team Name]
- Meeting Date & Time: [Date & Time]
- Meeting Purpose: [Purpose]
- Agenda Points: [Agenda Points]`,
    exampleOutput: `Subject: Upcoming Team Sync: [Purpose] - [Date & Time]

Hi Team,

Please note that we have scheduled our next team sync for [Date & Time] to discuss [Purpose].

The primary agenda items we will cover include:
- [Agenda Points]

Please ensure you RSVP to the calendar invite and review any relevant materials beforehand. If you have additional topics to add to the agenda, please share them with me by tomorrow afternoon.

Looking forward to our discussion.

Best,

[Your Name]`,
    tags: ['team sync', 'meeting announcement', 'agenda', 'internal']
  },
  {
    id: 'emp-prof-003',
    slug: 'delegate-task-teammate',
    title: 'Delegate a Project Task with Clear Objectives',
    categorySlug: 'professional',
    description: 'Assign a task or project module to a colleague with clear boundaries, links, and deadlines.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user needs to write a professional email delegating a specific project task to a team member.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, supportive, and clear tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Recipient Name: [Recipient Name]
- Task Title: [Task Title]
- Deadline: [Deadline]
- Supporting links/assets: [Links/Assets]
- Key Deliverables: [Deliverables]`,
    exampleOutput: `Subject: Project Assignment: [Task Title]

Hi [Recipient Name],

I hope your week is going well.

To keep our project timeline moving smoothly, I am assigning the [Task Title] milestone to you. Given your experience, I am confident you will execute this exceptionally.

Here is a summary of the key deliverables for this task:
- [Deliverables]

You can access the relevant reference files and assets here: [Links/Assets]

Please review the requirements and let me know if you have any questions. The target deadline for this milestone is [Deadline]. 

Let's do a quick alignment check during our standup tomorrow.

Thanks,

[Your Name]`,
    tags: ['delegation', 'task assignment', 'project management', 'collaboration']
  },
  {
    id: 'emp-prof-004',
    slug: 'status-update-leadership',
    title: 'Weekly/Monthly Status Update to Leadership',
    categorySlug: 'professional',
    description: 'Structure progress reports for executives showing milestones achieved, delays, and next steps.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user needs to write a professional email status update to executive leadership or managers.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, structured, and professional tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Project Name: [Project Name]
- Key Achievements: [Achievements]
- Roadblocks/Risks: [Roadblocks]
- Next Steps: [Next Milestones]`,
    exampleOutput: `Subject: Status Update: [Project Name] - Progress & Roadblocks

Dear Leadership Team,

Please see below the progress status report for [Project Name].

Key Achievements:
- [Achievements]

Roadblocks & Risks:
- [Roadblocks]

Next Steps:
- [Next Milestones]

Please let me know if you would like me to expand on any of these points or schedule a deeper status review meeting.

Best regards,

[Your Name]`,
    tags: ['status update', 'leadership report', 'executive report', 'milestones']
  },
  {
    id: 'emp-prof-005',
    slug: 'request-budget-approval',
    title: 'Request Budget/Expense Approval',
    categorySlug: 'professional',
    description: 'Draft a formal request to management to approve a project expense or tool subscription.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user needs to write a professional email requesting approval for a budget allocation or business expense.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, formal, and persuasive tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Recipient Name: [Recipient Name]
- Expense Amount: [Amount]
- Purpose: [Tool/Service/Expense Name]
- Business Value/ROI: [Value]`,
    exampleOutput: `Subject: Budget Approval Request: [Purpose]

Dear [Recipient Name],

I hope you are having a productive week.

I am writing to request budget approval for [Purpose], amounting to a total expense of [Amount].

This purchase is critical for our operations because it will:
- [Value]

I have attached the formal quote and product breakdown for your review. If approved, I will coordinate with the finance team to process the PO.

Please let me know if you have any questions or require additional details.

Best regards,

[Your Name]`,
    tags: ['budget approval', 'expense request', 'finance', 'management']
  },
  {
    id: 'emp-prof-006',
    slug: 'share-project-docs',
    title: 'Share Completed Project Documentation',
    categorySlug: 'professional',
    description: 'Distribute finalized project documentation, specs, or reports to a wider team.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user needs to write a professional email sharing finalized project documentation with the team or clients.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, structured, and informative tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Project Name: [Project Name]
- Link to Docs: [URL/Path]
- Key Document Topics: [Topics Covered]`,
    exampleOutput: `Subject: Finalized Documentation: [Project Name]

Hi Team,

I am pleased to share that the final documentation for [Project Name] is now ready for review.

You can access the folders and docs here: [Link to Docs]

This documentation includes:
- [Topics Covered]

Please review the sections relevant to your team. If you identify any gaps or have questions, please log them in our shared workspace by the end of the week.

Thanks to everyone who contributed to compiling this resource.

Best,

[Your Name]`,
    tags: ['documentation', 'project handoff', 'internal links', 'reference']
  },
  {
    id: 'emp-prof-007',
    slug: 'announce-org-changes',
    title: 'Announce Organizational Policy or Team Changes',
    categorySlug: 'professional',
    description: 'Share company updates, policy adjustments, or staffing changes with your team.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user needs to write a professional email announcing an organizational policy update or staffing change to their team.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, empathetic, and clear tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Announcement Type: [Staffing Change / Policy Update]
- Details: [Change details]
- Action Needed: [Action needed from employees]`,
    exampleOutput: `Subject: Announcement: Upcoming [Announcement Type]

Dear Team,

I am writing to share an important update regarding [Announcement Type], which will go into effect on [Date].

Here are the key details of this transition:
- [Change details]

We believe this adjustment will help us streamline our work and support our long-term goals. To ensure a smooth transition, we ask that you:
- [Action Needed]

We will be hosting an open Q&A session this Thursday to answer any questions you might have. In the meantime, feel free to reach out to me directly.

Thank you for your dedication and adaptability.

Best,

[Your Name]`,
    tags: ['policy change', 'team update', 'internal announcement', 'transition']
  },
  {
    id: 'emp-prof-008',
    slug: 'apologize-project-delay',
    title: 'Apologize for a Project Delay with a Plan',
    categorySlug: 'professional',
    description: 'Formally notify stakeholders or clients of an unexpected delay, showing a new roadmap.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user needs to write a professional email apologizing for a project delay and providing a recovery plan.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, accountable, and proactive tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Client/Stakeholder Name: [Name]
- Project Name: [Project Name]
- Reason for Delay: [Reason]
- New Delivery Date: [New Date]
- Mitigation Action: [Proactive Steps]`,
    exampleOutput: `Subject: Status Update & New Timeline: [Project Name]

Dear [Client/Stakeholder Name],

I am writing to provide an update on the timeline for [Project Name]. 

Unfortunately, we have encountered an unexpected bottleneck due to [Reason]. As a result, our initial completion date will be pushed back to [New Date].

Please accept my sincere apologies for this delay. To resolve this and prevent further slippage, our team is:
- [Mitigation Action]

We are fully committed to delivering a high-quality product. I will send you a progress update on this recovery plan by next Wednesday. 

Please let me know if you would like to hop on a call to discuss the adjusted roadmap.

Sincerely,

[Your Name]`,
    tags: ['delay apology', 'project timeline', 'client relations', 'recovery plan']
  },
  {
    id: 'emp-prof-009',
    slug: 'request-it-support',
    title: 'Request Technical/IT Support',
    categorySlug: 'professional',
    description: 'Draft a support request to your internal IT team detailing technical issues.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user needs to write an email to the IT/Technical Support department to report a hardware, software, or network issue.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, objective, and descriptive tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- System/Software: [Name of app/device]
- Problem Description: [Error/Bug details]
- Impact/Urgency: [Blocked from work/Low priority]
- Troubleshooting Done: [Steps taken]`,
    exampleOutput: `Subject: IT Support Request: [System/Software] - [Problem Description]

Hi IT Support Team,

I am writing to report a technical issue with [System/Software]. 

**Issue Details:**
- [Problem Description]

**Troubleshooting Steps Taken:**
- [Troubleshooting Done]

**Business Impact:**
- [Impact/Urgency]

Could you please assist me in resolving this issue? I am available for a screenshare or a physical desk visit if needed.

Thank you,

[Your Name]`,
    tags: ['IT support', 'bug report', 'technical issue', 'internal ticket']
  },
  {
    id: 'emp-prof-010',
    slug: 'weekly-newsletter-digest',
    title: 'Weekly Internal Team Newsletter Digest',
    categorySlug: 'professional',
    description: 'Summarize wins, announcements, and reminders for your department.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user needs to write a weekly internal newsletter or team digest.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, engaging, and professional tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Week/Date Range: [Dates]
- Team Wins: [Wins]
- Key Announcements/Birthdays: [Announcements]
- Reminders: [Reminders]`,
    exampleOutput: `Subject: Weekly Team Digest: Wins, Updates, & Reminders - [Week/Date Range]

Hi Everyone,

Happy Friday! Here is your quick digest of updates, wins, and events from this week.

🌟 **This Week's Wins:**
- [Wins]

📢 **Key Announcements:**
- [Announcements]

🗓️ **Reminders & Deadlines:**
- [Reminders]

Thank you all for your hard work this week. Have a wonderful weekend!

Best,

[Your Name]`,
    tags: ['newsletter', 'team update', 'digest', 'internal communication']
  },

  // 2. JOB APPLICATION EMAILS
  {
    id: 'emp-job-001',
    slug: 'cover-letter-software-engineer',
    title: 'Software Engineer Cover Letter Email',
    categorySlug: 'job-application',
    description: 'Write a persuasive cover letter email pitching engineering skills and experience.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user is applying for a Software Engineer position and needs a high-impact cover letter email.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, confident, and professional tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Applicant Name: [Your Name]
- Company Name: [Company Name]
- Core Stack/Skills: [React/Node/Python/etc.]
- Experience Highlights: [Achievements/Years]
- Reference Link/Portfolio: [URL]`,
    exampleOutput: `Subject: Application: Software Engineer - [Your Name]

Dear Hiring Team,

I am writing to express my strong interest in the Software Engineer position at [Company Name]. 

With [Experience Highlights] of experience building robust web applications, I am confident I would be a great fit for your engineering team. My core expertise includes:
- [Core Stack/Skills]

In my previous role, I successfully drove key technical milestones and optimization goals. You can review some of my recent work at: [Reference Link/Portfolio]

I have attached my resume for your review and would love the opportunity to discuss how my background aligns with your product goals.

Thank you for your time and consideration.

Best regards,

[Your Name]`,
    tags: ['cover letter', 'software engineer', 'recruitment', 'developer job']
  },
  {
    id: 'emp-job-002',
    slug: 'cover-letter-product-manager',
    title: 'Product Manager Cover Letter Email',
    categorySlug: 'job-application',
    description: 'Draft a cover letter showcasing project roadmap success and collaboration metrics.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user is applying for a Product Manager position and needs an executive cover letter email.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, professional, and goal-oriented tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Applicant Name: [Your Name]
- Company Name: [Company Name]
- Achievements/Metrics: [e.g. 20% user growth]
- Focus Areas: [e.g. UX/agile delivery]`,
    exampleOutput: `Subject: Product Manager Application: [Your Name]

Dear Hiring Manager,

I am excited to submit my application for the Product Manager role at [Company Name].

I have a proven track record of managing end-to-end product lifecycles and delivering high-value user features. In my career, I have successfully achieved:
- [Achievements/Metrics]
- Cross-functional collaboration with engineering, design, and marketing teams.

I admire [Company Name]'s focus on user-centric design and would welcome the chance to discuss how I can bring my roadmap and growth experience to your team.

Thank you,

[Your Name]`,
    tags: ['cover letter', 'product manager', 'careers', 'pm job']
  },
  {
    id: 'emp-job-003',
    slug: 'cover-letter-marketing-coordinator',
    title: 'Marketing Coordinator Cover Letter Email',
    categorySlug: 'job-application',
    description: 'Highlight campaign coordination, social media growth, and analytics experience.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user is applying for a Marketing Coordinator role and needs a creative, marketing-focused cover letter.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, engaging, and professional tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Applicant Name: [Your Name]
- Target Company: [Company Name]
- Channels managed: [e.g., SEO, Paid Social, Email]
- Top achievement: [e.g. grew email list by 40%]`,
    exampleOutput: `Subject: Application: Marketing Coordinator - [Your Name]

Dear Hiring Team,

I am writing to apply for the Marketing Coordinator position at [Target Company].

I specialize in executing growth-oriented campaigns across [Channels managed]. A brief highlight of my work includes:
- [Top achievement]
- Designing and organizing multi-channel editorial calendars.

My background in writing compelling copy and analyzing campaign KPIs aligns directly with your goals. I have attached my portfolio and resume for review.

Thank you for your time.

Sincerely,

[Your Name]`,
    tags: ['cover letter', 'marketing', 'job application', 'creatives']
  },
  {
    id: 'emp-job-004',
    slug: 'direct-outreach-hiring-manager',
    title: 'Direct Pitch to a Hiring Manager',
    categorySlug: 'job-application',
    description: 'Reach out directly to the decision-maker for a role with a short value hook.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to bypass standard portals and email the hiring manager directly to express interest.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, direct, and value-first tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Applicant Name: [Your Name]
- Hiring Manager Name: [Manager Name]
- Target Role: [Role Title]
- Value Hook/Why you fit: [Value Hook]`,
    exampleOutput: `Subject: Direct Inquiry: [Role Title] - [Your Name]

Dear [Manager Name],

I hope you are having a great week.

I recently saw that you are hiring for a [Target Role] on your team. Recognizing your focus on scaling operations, I wanted to reach out directly.

I specialize in:
- [Value Hook/Why you fit]

I have submitted my formal application through the portal, but wanted to connect here to offer a brief summary of how I can contribute immediately. Would you be open to a 10-minute introductory call next Tuesday?

Thank you for your time and leadership.

Best regards,

[Your Name]`,
    tags: ['cold outreach', 'hiring manager', 'direct pitch', 'job search']
  },
  {
    id: 'emp-job-005',
    slug: 'application-with-referral',
    title: 'Submitting Job Application with Internal Referral',
    categorySlug: 'job-application',
    description: 'Reference an internal employee referral in your subject line and intro statement.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user is applying for a job and has been referred by an existing employee at the company.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, appreciative, and professional tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Applicant Name: [Your Name]
- Company Name: [Company Name]
- Referrer Name: [Referrer Name]
- Referrer Title: [Title]
- Target Role: [Role Title]`,
    exampleOutput: `Subject: Referral Application: [Role Title] - [Your Name] (referred by [Referrer Name])

Dear Hiring Team,

I am writing to apply for the [Target Role] position at [Company Name]. 

[Referrer Name], who currently serves as [Referrer Title] at your company, suggested I reach out regarding this opening. They spoke highly of your team culture and goals, which convinced me that my background would align perfectly.

I have attached my resume and covered my key achievements in the attached application documents. 

I would welcome the opportunity to discuss my qualifications further.

Best regards,

[Your Name]`,
    tags: ['referral', 'job application', 'internal candidate', 'networking']
  },
  {
    id: 'emp-job-006',
    slug: 'internship-application',
    title: 'Applying for an Internship Position',
    categorySlug: 'job-application',
    description: 'Pitch your academic achievements and eagerness to learn for an internship program.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user is a student or recent graduate applying for an internship role.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, enthusiastic, and respectful tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Applicant Name: [Your Name]
- University Name: [University Name]
- Target Department/Internship: [Internship Title]
- Relevant projects/courses: [Projects]`,
    exampleOutput: `Subject: Internship Application: [Internship Title] - [Your Name]

Dear Internship Coordinator,

I hope you are well.

I am a student at [University Name] studying [Major], and I am writing to apply for the [Target Department/Internship] internship.

Through my academic coursework, I have built a strong foundation in:
- [Relevant projects/courses]

I am eager to apply these skills in a real-world setting and learn from your experienced team. I have attached my transcript and resume for your review.

Thank you for supporting early-career talent.

Best regards,

[Your Name]`,
    tags: ['internship', 'student application', 'early career', 'entry level']
  },
  {
    id: 'emp-job-007',
    slug: 'follow-up-submitted-app',
    title: 'Follow-Up After Submitting Job Application',
    categorySlug: 'job-application',
    description: 'Politely follow up 1–2 weeks after submitting a resume to show continued interest.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user submitted a job application two weeks ago and wants to follow up on the status.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, brief, and non-intrusive tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Applicant Name: [Your Name]
- Target Role: [Role Title]
- Company Name: [Company Name]
- Date Submitted: [Date]`,
    exampleOutput: `Subject: Status Check: [Role Title] Application - [Your Name]

Dear Hiring Team,

I hope you are having a great week.

I am following up on the application I submitted on [Date] for the [Target Role] position. 

I remain very excited about the opportunity to join [Company Name] and wanted to see if you require any additional information or portfolio samples from my end.

Thank you for your time and review process.

Warm regards,

[Your Name]`,
    tags: ['application status', 'follow up', 'hiring process', 'careers']
  },
  {
    id: 'emp-job-008',
    slug: 'accept-job-offer',
    title: 'Accepting a Job Offer Formally',
    categorySlug: 'job-application',
    description: 'Confirm your acceptance of an offer, salary, start date, and onboarding requirements.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user received a job offer and wants to accept it formally via email.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, appreciative, and professional tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Hiring Manager Name: [Manager Name]
- Role Title: [Role Title]
- Confirmed Start Date: [Start Date]`,
    exampleOutput: `Subject: Job Offer Acceptance: [Role Title] - [Your Name]

Dear [Manager Name],

Thank you so much for offering me the [Role Title] position at [Company Name]. I am thrilled to accept the offer.

I have signed and attached the formal offer letter as requested. As discussed, my start date will be [Start Date]. 

Please let me know if you need any additional tax forms, IDs, or onboarding documentation before my first day. I look forward to working with the team.

Warm regards,

[Your Name]`,
    tags: ['job offer', 'acceptance email', 'onboarding', 'hr']
  },
  {
    id: 'emp-job-009',
    slug: 'decline-job-offer',
    title: 'Declining a Job Offer Politely',
    categorySlug: 'job-application',
    description: 'Decline an offer while keeping the relationship warm for future opportunities.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user needs to decline a job offer due to accepting another role, while preserving the relationship.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, courteous, and respectful tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Recipient Name: [Manager Name]
- Role Title: [Role Title]`,
    exampleOutput: `Subject: Update on Job Offer: [Role Title] - [Your Name]

Dear [Recipient Name],

Thank you so much for offering me the opportunity to join your team as a [Role Title]. I deeply appreciate the time you and the team spent during our discussions.

After careful consideration, I have decided to accept another offer that aligns closely with my current career goals. As a result, I must decline your offer.

It was a difficult decision, as I was highly impressed by your company's vision and team culture. I hope we can keep in touch and cross paths again in the future.

I wish you and [Company Name] continued success.

Warm regards,

[Your Name]`,
    tags: ['decline offer', 'relationship building', 'hr', 'professionalism']
  },
  {
    id: 'emp-job-010',
    slug: 'withdraw-job-application',
    title: 'Withdrawing Application from Consideration',
    categorySlug: 'job-application',
    description: 'Notify a company that you are withdrawing your candidacy during the interview process.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user is in the middle of an interview process and wants to withdraw their application.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, brief, and professional tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Recipient Name: [Recruiter/Manager Name]
- Role Title: [Role Title]`,
    exampleOutput: `Subject: Candidacy Update: [Role Title] - [Your Name]

Dear [Recipient Name],

I am writing to let you know that I would like to withdraw my application for the [Role Title] position. 

I recently accepted a different role and will no longer be on the job market. I wanted to notify you as soon as possible so your team can focus on other candidates.

Thank you so much for your time and the interview coordination.

Best regards,

[Your Name]`,
    tags: ['withdraw application', 'recruiter update', 'professional etiquette']
  },

  // 3. FOLLOW-UP EMAILS
  {
    id: 'emp-fup-001',
    slug: 'follow-up-client-proposal',
    title: 'Follow-Up After a Sent Proposal',
    categorySlug: 'follow-up',
    description: 'Check in on a sent project proposal or quote to handle potential questions.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user sent a business proposal to a client a few days ago and wants to follow up.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, consultative, and business-focused tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Client Name: [Client Name]
- Project/Proposal Name: [Proposal Title]
- Date Sent: [Date]`,
    exampleOutput: `Subject: Follow-Up: [Proposal Title] Proposal

Hi [Client Name],

I hope you are having a great week.

I am following up on the [Proposal Title] proposal I sent over on [Date]. I wanted to check if you had a chance to review it or if there are any aspects you would like me to clarify.

I would be happy to jump on a quick 10-minute call this Thursday to answer any questions or adjust scope if needed.

Looking forward to your thoughts.

Best,

[Your Name]`,
    tags: ['proposal follow up', 'sales sync', 'client nurture']
  },
  {
    id: 'emp-fup-002',
    slug: 'follow-up-discovery-call',
    title: 'Follow-Up After Initial Discovery Call',
    categorySlug: 'follow-up',
    description: 'Summarize the next steps agreed upon during a sales or discovery call.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user just completed a discovery call with a potential client and wants to outline next steps.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, structured, and action-oriented tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Recipient Name: [Name]
- Agreed Actions: [Actions agreed]
- Timeline: [Dates]`,
    exampleOutput: `Subject: Recap & Next Steps: Our Discussion

Hi [Recipient Name],

Thank you for taking the time to sync with me today. I enjoyed learning more about your goals.

As agreed during our call, here are our active next steps:
- [Agreed Actions]

We are on track to deliver our part by [Timeline]. Please let me know if I missed anything in this recap.

Best regards,

[Your Name]`,
    tags: ['discovery call', 'meeting recap', 'next steps', 'action items']
  },
  {
    id: 'emp-fup-003',
    slug: 'follow-up-no-response',
    title: 'Follow-Up After No Response to Sales Pitch',
    categorySlug: 'follow-up',
    description: 'A gentle, short nudge after a cold or warm sales email goes unanswered.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user sent a sales email a week ago and received no response. They want to nudge the prospect politely.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, short, and non-demanding tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Recipient Name: [Recipient Name]
- Value Hook: [Value Hook]`,
    exampleOutput: `Subject: Quick Check-In: [Value Hook]

Hi [Recipient Name],

I know you are busy, so I'll keep this brief.

I wanted to follow up on my previous message regarding [Value Hook]. If this isn't a priority for your team right now, I completely understand and won't crowd your inbox.

Should you have 5 minutes to connect next week, let me know.

Best,

[Your Name]`,
    tags: ['nudge email', 'unanswered sales', 'short follow up']
  },
  {
    id: 'emp-fup-004',
    slug: 'follow-up-post-interview',
    title: 'Post-Interview Thank You & Follow-Up',
    categorySlug: 'follow-up',
    description: 'Reiterate your excitement for a role and request a status update 1 week post-interview.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user had an interview a week ago and wants to follow up on the hiring decision status.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, appreciative, and professional tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Applicant Name: [Your Name]
- Interviewer Name: [Interviewer Name]
- Role Title: [Role Title]
- Interview Date: [Date]`,
    exampleOutput: `Subject: Status Update: [Role Title] Interview - [Your Name]

Dear [Interviewer Name],

I hope you are having a wonderful week.

I am following up on our interview on [Date] for the [Role Title] position. I thoroughly enjoyed our conversation and remain very excited about the opportunity to join the team.

I wanted to check if there are any updates regarding the next steps in the hiring process.

Thank you once again for your time and consideration.

Warmly,

[Your Name]`,
    tags: ['interview follow up', 'candidate status', 'hiring timeline']
  },
  {
    id: 'emp-fup-005',
    slug: 'follow-up-networking-event',
    title: 'Follow-Up After a Networking Event',
    categorySlug: 'follow-up',
    description: 'Reconnect with someone you met at an event to schedule a coffee chat.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user met a contact at an industry networking event and wants to reconnect.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, warm, and professional tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Recipient Name: [Contact Name]
- Event Name: [Event Name]
- Conversation Point: [Topic talked about]`,
    exampleOutput: `Subject: Great meeting you at [Event Name]

Hi [Recipient Name],

It was a pleasure meeting you at [Event Name] yesterday. 

I really enjoyed our conversation about [Conversation Point]. I found your insights on the topic very valuable.

If you are open to it, I would love to schedule a quick virtual coffee next week to continue our discussion and learn more about your work.

Best regards,

[Your Name]`,
    tags: ['networking', 'event follow up', 'coffee chat']
  },
  {
    id: 'emp-fup-006',
    slug: 'follow-up-outstanding-invoice',
    title: 'Follow-Up on Outstanding Invoice/Payment',
    categorySlug: 'follow-up',
    description: 'Send a polite reminder regarding a past-due invoice.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user needs to email a client about a past-due invoice.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, firm, and professional tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Client Name: [Client Name]
- Invoice Number: [Invoice #]
- Amount Due: [Amount]
- Due Date: [Due Date]`,
    exampleOutput: `Subject: Gentle Reminder: Invoice [Invoice #] is Past Due

Dear [Client Name],

I hope this email finds you well.

This is a gentle reminder that invoice [Invoice #] for the amount of [Amount], which was due on [Due Date], remains unpaid.

I have attached a copy of the invoice for your reference. Could you please check with your accounts department to ensure this payment is processed?

Thank you for your prompt attention to this matter.

Best regards,

[Your Name]`,
    tags: ['finance', 'billing', 'invoice reminder', 'late payment']
  },
  {
    id: 'emp-fup-007',
    slug: 'follow-up-request-contract',
    title: 'Follow-Up Request for Signed Contract',
    categorySlug: 'follow-up',
    description: 'Politely request a signed agreement or contract to begin project kickoff.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user is waiting on a client to sign a contract so they can begin working.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, welcoming, and action-oriented tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Recipient Name: [Recipient Name]
- Project Name: [Project Name]`,
    exampleOutput: `Subject: Action Required: Signature for [Project Name] Agreement

Hi [Recipient Name],

I hope you are well.

We are excited to begin working on [Project Name]. To ensure we meet our targeted launch date, we just need to finalize the contract signatures.

Could you please sign and return the agreement by this Friday? Once received, we will schedule our official kickoff call.

Please let me know if you have any questions about the terms.

Best,

[Your Name]`,
    tags: ['contract signature', 'kickoff prep', 'client boarding']
  },
  {
    id: 'emp-fup-008',
    slug: 'follow-up-vendor-delivery',
    title: 'Follow-Up with Vendor on Delivery Status',
    categorySlug: 'follow-up',
    description: 'Inquire with a supplier or vendor about a delayed package or service handoff.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user is following up with a vendor regarding delayed shipment or services.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, direct, and professional tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Vendor Contact: [Name]
- Order/Ticket Number: [Number]
- Expected Date: [Date]`,
    exampleOutput: `Subject: Delivery Status Inquiry: Order #[Order/Ticket Number]

Dear [Vendor Contact],

I am writing to inquire about the status of our order #[Order/Ticket Number], which was scheduled for delivery on [Expected Date].

We have not yet received the items or any tracking updates. Could you please check on this shipment and provide a revised delivery ETA as soon as possible?

Thank you for your assistance.

Sincerely,

[Your Name]`,
    tags: ['vendor check', 'order delay', 'logistics', 'supply chain']
  },
  {
    id: 'emp-fup-009',
    slug: 'follow-up-pending-decision',
    title: 'Follow-Up on a Pending Internal Decision',
    categorySlug: 'follow-up',
    description: 'Politely nudge colleagues for a decision that is blocking your work.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user is waiting for an internal decision from colleagues or managers that is blocking progress.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, collaborative, and professional tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Recipient Name: [Names]
- Decision needed: [What decision]
- Project Blocked: [Project Name]`,
    exampleOutput: `Subject: Blocked: Decision required on [Decision needed]

Hi [Recipient Name],

I hope you are doing well.

I am writing to check in on the decision regarding [Decision needed]. Our progress on [Project Blocked] is currently on hold until we finalize this direction.

Could we schedule a 5-minute huddle today to make a call on this?

Thanks for your help in keeping this moving forward.

Best,

[Your Name]`,
    tags: ['blocker clearance', 'internal sync', 'decision making']
  },
  {
    id: 'emp-fup-010',
    slug: 'final-follow-up-closing-lead',
    title: 'Breakup Email: Final Follow-Up Before Closing Lead',
    categorySlug: 'follow-up',
    description: 'Send a final email to an unresponsive lead, notifying them you are closing their file.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user has followed up multiple times with a prospective client with no response. They want to send a final email to close the loop.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, clean, and consultative tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Lead Name: [Lead Name]
- Product/Service: [Name]`,
    exampleOutput: `Subject: Closing your file for [Product/Service]

Hi [Lead Name],

I hope you are doing well.

As I haven't heard back from you regarding [Product/Service], I assume this isn't a priority for your team at the moment. I will go ahead and close your file so I don't crowd your inbox.

If you ever want to revisit this in the future, please feel free to reach out.

I wish you and your team all the best.

Best,

[Your Name]`,
    tags: ['breakup email', 'sales close', 'lead management']
  },

  // 4. SALES OUTREACH EMAILS
  {
    id: 'emp-sls-001',
    slug: 'sales-value-prop-pitch',
    title: 'Value Proposition Pitch to Decision-Maker',
    categorySlug: 'sales',
    description: 'Hook a high-level corporate decision-maker with a personalized value pitch.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to send a cold sales outreach email to a decision-maker introducing their service.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, benefits-focused, and persuasive tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Recipient Name: [Name]
- Recipient Company: [Company Name]
- Core Benefit/Solution: [Benefit]
- Credibility metric: [Metric]`,
    exampleOutput: `Subject: Streamlining [Recipient Company]'s workflows

Dear [Recipient Name],

I have been following [Recipient Company]'s growth and noticed your focus on scaling operations.

We help companies like yours [Core Benefit/Solution]. On average, our clients achieve a [Credibility metric] increase in productivity within the first 30 days.

Would you be open to a brief, 10-minute introductory call next Tuesday to see if we might be a fit for your team?

Best regards,

[Your Name]`,
    tags: ['sales outreach', 'cold outreach', 'value proposition', 'b2b']
  },
  {
    id: 'emp-sls-002',
    slug: 'introducing-new-feature',
    title: 'Introducing a New Product/Service Feature',
    categorySlug: 'sales',
    description: 'Announce a new feature or service line to existing clients or warm leads.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to announce a new product/service feature to warm leads or current customers.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, informative, and professional tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Feature Name: [Feature]
- Customer Pain Point Solved: [Pain Point]
- CTA: [e.g. book a demo / read launch notes]`,
    exampleOutput: `Subject: Now Live: Introduce [Feature] to boost your efficiency

Hi [Recipient Name],

We are excited to share a major update with you. Today, we are officially launching [Feature].

We designed this feature specifically to help you solve [Customer Pain Point Solved], saving your team hours of manual work.

You can try this feature in your dashboard starting today. If you'd like a quick walkthrough, you can book a slot with our product team here: [CTA Link]

Best,

[Your Name]`,
    tags: ['product launch', 'feature announcement', 'customer success']
  },
  {
    id: 'emp-sls-003',
    slug: 'free-trial-demo-invite',
    title: 'Free Trial or Live Demo Invitation',
    categorySlug: 'sales',
    description: 'Invite a qualified lead to a personalized live demo or register for a free trial.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to invite a prospect to register for a free trial or schedule a live demo of their software/service.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, inviting, and professional tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Prospect Name: [Name]
- Product Name: [Product]
- Demo Link: [URL]`,
    exampleOutput: `Subject: Invitation: Personalized Demo of [Product]

Hi [Prospect Name],

I hope you are well.

I would love to invite you to a personalized demo of [Product]. In just 15 minutes, we can show you how your team can leverage our software to optimize your active pipelines.

You can pick a convenient slot for your demo here: [Demo Link]

If you'd prefer to explore on your own, let me know and I'll send over a direct 14-day trial code.

Best regards,

[Your Name]`,
    tags: ['demo invite', 'free trial', 'saas sales', 'conversions']
  },
  {
    id: 'emp-sls-004',
    slug: 'invite-prospect-webinar',
    title: 'Invite Prospect to an Industry Webinar',
    categorySlug: 'sales',
    description: 'Leverage educational events to warm up sales leads and prospects.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user is hosting an educational webinar and wants to invite prospective clients.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, educational, and inviting tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Webinar Topic: [Topic]
- Date & Time: [Date & Time]
- Reg Link: [URL]
- Value Takeaway: [What they will learn]`,
    exampleOutput: `Subject: Invitation: Live Webinar on [Webinar Topic]

Hi [Recipient Name],

With market landscapes shifting, many teams are looking for ways to adapt.

To share strategies on this topic, we are hosting a live webinar on [Webinar Topic] on [Date & Time]. We will cover:
- [Value Takeaway]

You can register for your free spot here: [Reg Link]

Hope to see you there!

Best,

[Your Name]`,
    tags: ['webinar invite', 'event marketing', 'lead nurture', 'education']
  },
  {
    id: 'emp-sls-005',
    slug: 'share-client-success-case-study',
    title: 'Share a Customer Success Case Study',
    categorySlug: 'sales',
    description: 'Use social proof to warm up a lead by sharing a relevant client case study.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to send a follow-up or cold sales email containing a customer success story/case study.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, credible, and results-oriented tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Recipient Name: [Name]
- Case Study Client: [Company Name]
- Metric Result: [e.g. saved $50k / 3x speed]
- Case Study Link: [URL]`,
    exampleOutput: `Subject: Case Study: How [Case Study Client] achieved [Metric Result]

Hi [Recipient Name],

I wanted to share a quick case study that might be relevant to your current goals.

We recently worked with [Case Study Client] to optimize their development pipelines. By implementing our solutions, they were able to achieve:
- [Metric Result]

You can read the full breakdown of our approach here: [Case Study Link]

Would love to chat about whether we can implement a similar model for your team.

Best regards,

[Your Name]`,
    tags: ['case study', 'social proof', 'sales collateral', 'conversion']
  },
  {
    id: 'emp-sls-006',
    slug: 'free-consultation-audit',
    title: 'Offer a Free Consultation/Audit',
    categorySlug: 'sales',
    description: 'Pitch a free, no-obligation audit of a prospect’s systems or strategy to build trust.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to pitch a free audit or strategy session to a prospect as a sales lead-in.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, advisory, and helpful tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Recipient Name: [Name]
- Audit Type: [e.g. SEO Audit / Code Review]
- Audit Takeaways: [What they get]`,
    exampleOutput: `Subject: Complimentary [Audit Type] for your team

Hi [Recipient Name],

I hope you are well.

My team is offering complimentary [Audit Type] sessions this month to help companies identify hidden efficiencies in their processes.

During this brief audit, we will evaluate:
- [Audit Takeaways]

This session is completely obligation-free. If you are interested, you can schedule it here: [Link]

Sincerely,

[Your Name]`,
    tags: ['free audit', 'strategy session', 'consultative sales', 'lead gen']
  },
  {
    id: 'emp-sls-007',
    slug: 'reengage-lost-prospect',
    title: 'Re-Engage a Lost or Cold Sales Prospect',
    categorySlug: 'sales',
    description: 'Reach back out to a client who went quiet months ago to check on their current priorities.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to re-engage a prospect who went cold several months ago.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, light, and checking-in tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Recipient Name: [Name]
- Past Topic: [What you discussed]
- New Update/Resource: [Brief update/link]`,
    exampleOutput: `Subject: Reconnecting: [Past Topic]

Hi [Recipient Name],

I hope you've had a great year so far.

I wanted to check in and see how your projects around [Past Topic] are going. When we last spoke, this was a key focus for your team.

We recently launched a new update that addresses some of the constraints we discussed: [New Update/Resource]

Would love to reconnect and see if this aligns with your current priorities.

Best,

[Your Name]`,
    tags: ['reengage lead', 'cold account', 'sales pipeline']
  },
  {
    id: 'emp-sls-008',
    slug: 'mutual-connection-warm-outreach',
    title: 'Mutual Connection Warm Sales Outreach',
    categorySlug: 'sales',
    description: 'Leverage a shared connection to introduce your service or product to a warm lead.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user is reaching out to a prospect and sharing a mutual connection who referred them.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, warm, and credible tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Recipient Name: [Recipient Name]
- Mutual Contact: [Contact Name]
- Pitch Hook: [Brief value hook]`,
    exampleOutput: `Subject: Introduction via [Mutual Contact]

Dear [Recipient Name],

Our mutual connection, [Mutual Contact], suggested I reach out to you. 

They mentioned that you are currently scaling your systems and might benefit from our approach to [Pitch Hook].

We specialize in helping teams achieve operational efficiency with minimal setup. I would love to connect briefly to share how we work. Are you free for a quick chat next Tuesday?

Warm regards,

[Your Name]`,
    tags: ['warm outreach', 'referral sales', 'networking pitch']
  },
  {
    id: 'emp-sls-009',
    slug: 'end-of-quarter-promo',
    title: 'End of Quarter Promotion/Discount Email',
    categorySlug: 'sales',
    description: 'Create urgency with a discount or special promotion code.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user is offering a limited-time promotional offer or discount to convert warm leads.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, urgent, and professional tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Promotion Name: [Promo]
- Discount Details: [Discount]
- Expiry Date: [Date]`,
    exampleOutput: `Subject: Limited Time: [Promo] expires soon

Hi [Recipient Name],

To help you kick off next quarter with the right tools, we are offering a special promotion for our active leads.

Sign up for our plan before [Expiry Date] and receive:
- [Discount Details]

You can apply this directly in your checkout portal. Let me know if you would like me to set up a quick account setup call to help you get started.

Best regards,

[Your Name]`,
    tags: ['promotion', 'discount sales', 'urgency', 'conversion']
  },
  {
    id: 'emp-sls-010',
    slug: 'abm-personalized-outreach',
    title: 'Account-Based Marketing (ABM) Outreach',
    categorySlug: 'sales',
    description: 'Write a highly personalized cold email tailored to a specific target company.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user is doing personalized Account-Based Marketing (ABM) outreach.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, highly tailored, and professional tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Recipient Name: [Name]
- Recipient Company: [Company Name]
- Observation/Trigger Event: [e.g., launching a new product]
- Solution Match: [How you help]`,
    exampleOutput: `Subject: Supporting [Recipient Company]'s [Observation/Trigger Event]

Dear [Recipient Name],

I saw that [Recipient Company] is currently [Observation/Trigger Event]. Congratulations on this milestone.

With this transition, managing system load and uptime becomes critical. We partner with organizations to handle exactly this challenge by:
- [Solution Match]

Would you be open to a brief discussion on how we can support your roadmap during this phase?

Best regards,

[Your Name]`,
    tags: ['ABM outreach', 'personalized sales', 'enterprise cold call']
  },

  // 5. CUSTOMER SUPPORT EMAILS
  {
    id: 'emp-spt-001',
    slug: 'acknowledge-support-ticket',
    title: 'Acknowledge Support Ticket Receipt',
    categorySlug: 'customer-support',
    description: 'Confirm to a customer that their request has been logged and is under review.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user is a support representative acknowledging receipt of a customer's query/ticket.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, empathetic, and reassuring tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Company/Support Name: [Company Name]
- Ticket ID: [Ticket ID]
- Expected Resolution Time: [e.g., 24 hours]`,
    exampleOutput: `Subject: We've received your request - Ticket #[Ticket ID]

Hi [Customer Name],

Thank you for reaching out to [Company/Support Name] support.

We have successfully logged your query under ticket #[Ticket ID]. Our team is currently reviewing the details and will get back to you with an update or resolution within [Expected Resolution Time].

If you have additional details or screenshots to add, feel free to reply directly to this email.

Best regards,

[Company/Support Name] Support Team`,
    tags: ['support ticket', 'receipt confirmation', 'customer success']
  },
  {
    id: 'emp-spt-002',
    slug: 'explain-technical-workaround',
    title: 'Explain a Technical Workaround/Fix',
    categorySlug: 'customer-support',
    description: 'Provide step-by-step instructions to a customer to fix a technical bug.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user needs to write an email explaining a technical fix or temporary workaround to a customer.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, clear, and patient tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Support Issue: [Issue Name]
- Steps to Resolve: [Steps]`,
    exampleOutput: `Subject: Troubleshooting Steps: [Support Issue]

Hi [Customer Name],

Thank you for your patience while we investigated this issue.

To resolve [Support Issue], please follow these steps:
1. [Steps to Resolve]

If you follow these steps and still experience issues, please let me know and we can schedule a quick screen-share to troubleshoot together.

Warm regards,

[Your Name]`,
    tags: ['technical support', 'troubleshooting', 'workaround', 'customer care']
  },
  {
    id: 'emp-spt-003',
    slug: 'resolve-billing-inquiry',
    title: 'Resolve a Billing or Refund Inquiry',
    categorySlug: 'customer-support',
    description: 'Inform a client that their refund has been processed or clarify a billing charge.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user is resolving a customer's billing dispute or confirming a refund.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, transparent, and professional tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Support Rep Name: [Your Name]
- Billing Issue/Charge: [Details]
- Refund Status: [Approved/Processed]
- Processing Time: [e.g. 5-7 days]`,
    exampleOutput: `Subject: Resolution Update: Billing Inquiry

Dear [Customer Name],

Thank you for contacting us regarding your recent billing query for [Billing Issue/Charge].

I am pleased to confirm that we have processed a refund for this transaction. The funds should appear back in your account within [Processing Time], depending on your financial institution.

Please let me know if you need help with any other invoices.

Best regards,

[Your Name]`,
    tags: ['billing support', 'refund process', 'finance support']
  },
  {
    id: 'emp-spt-004',
    slug: 'service-outage-notification',
    title: 'Handle a Service Outage Notification',
    categorySlug: 'customer-support',
    description: 'Notify users of system downtime and explain mitigation efforts.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user needs to notify customers about an unexpected system outage or downtime.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, direct, and transparent tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Company Name: [Company Name]
- Affected Service: [Service Name]
- Incident status/Uptime link: [URL]`,
    exampleOutput: `Subject: Incident Alert: Uptime issues on [Affected Service]

Dear User,

Please note that we are currently experiencing unexpected downtime affecting [Affected Service].

Our engineering team is actively investigating the issue and working on a resolution. We apologize sincerely for any disruption to your workflow.

You can monitor real-time updates on our status page here: [Incident status/Uptime link]

Thank you for your patience.

Best,

[Company Name] Team`,
    tags: ['system outage', 'downtime notice', 'status alert', 'transparency']
  },
  {
    id: 'emp-spt-005',
    slug: 'request-additional-info',
    title: 'Request Additional Information/Screenshots',
    categorySlug: 'customer-support',
    description: 'Ask the client for error logs, screenshots, or system specs politely.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user needs more details or context from a client to debug a support ticket.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, supportive, and helpful tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Rep Name: [Your Name]
- Needed Details: [e.g. Browser version, OS, screenshot]`,
    exampleOutput: `Subject: Follow-up required: Details for Ticket #[Ticket ID]

Hi [Customer Name],

Thanks for reaching out. I would be happy to look into this issue for you.

To help me diagnose this quickly, could you please provide a few additional details?
- [Needed Details]

Once I have this information, I will investigate immediately.

Thanks for your cooperation.

Best,

[Your Name]`,
    tags: ['info request', 'ticket debug', 'customer sync']
  },
  {
    id: 'emp-spt-006',
    slug: 'apologize-bad-experience',
    title: 'Apologize for a Bad Service Experience',
    categorySlug: 'customer-support',
    description: 'De-escalate an angry customer by apologizing sincerely and offering a credit or solution.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user needs to apologize to a customer for a service breakdown or poor support experience.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, highly empathetic, and solution-oriented tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Incident: [Briefly describe incident]
- Resolution/Credit Offered: [Credit/Compensation details]`,
    exampleOutput: `Subject: Sincere Apology: Regarding your recent experience

Dear [Customer Name],

Please accept our sincere apologies for the issues you experienced with [Incident]. This does not reflect the standard of service we strive to provide.

We have investigated what went wrong and are taking steps to ensure this does not happen again. As a gesture of goodwill, we have credited [Resolution/Credit Offered] to your account.

We value your partnership and hope to restore your confidence in our service.

Sincerely,

[Your Name]`,
    tags: ['customer apology', 'retention support', 'dispute resolution']
  },
  {
    id: 'emp-spt-007',
    slug: 'upgrade-customer-account',
    title: 'Notify Account Upgrade/Change Success',
    categorySlug: 'customer-support',
    description: 'Confirm a plan upgrade, new features unlock, and thank the client.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user is confirming a successful subscription plan upgrade for a client.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, positive, and welcoming tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- New Plan Name: [Plan Name]
- Key features unlocked: [Features]`,
    exampleOutput: `Subject: Confirmed: Your account has been upgraded to [Plan Name]

Hi [Customer Name],

We have successfully processed your upgrade to the [Plan Name] plan!

You now have full access to:
- [Key Features unlocked]

Thank you for growing with us. If you need any assistance getting your team set up on the new features, let me know.

Best regards,

[Your Name]`,
    tags: ['billing upgrade', 'plan activation', 'customer onboarding']
  },
  {
    id: 'emp-spt-008',
    slug: 'request-feedback-resolution',
    title: 'Request Customer Review After Resolution',
    categorySlug: 'customer-support',
    description: 'Politely request a feedback rating or review after solving a support ticket.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to request feedback or a survey rating after successfully resolving a customer support ticket.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, brief, and appreciative tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Rep Name: [Your Name]
- Survey Link: [URL]`,
    exampleOutput: `Subject: How did we do? Rating for Ticket #[Ticket ID]

Hi [Customer Name],

I am pleased we were able to resolve your query regarding [Issue].

If you have a brief moment, would you mind sharing your feedback on your support experience? You can rate our service here: [Survey Link]

Your feedback helps us improve our customer experience daily.

Thank you,

[Your Name]`,
    tags: ['customer satisfaction', 'CSAT survey', 'feedback request']
  },
  {
    id: 'emp-spt-009',
    slug: 'close-ticket-inactivity',
    title: 'Close Support Ticket Due to Inactivity',
    categorySlug: 'customer-support',
    description: 'Politely inform a customer that their ticket is being closed due to no response.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user is closing a support ticket because the customer has not responded to follow-ups.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, standard, and informative tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Rep Name: [Your Name]
- Ticket ID: [Ticket ID]`,
    exampleOutput: `Subject: Closing Ticket #[Ticket ID] due to inactivity

Hi [Customer Name],

We are following up on your support ticket #[Ticket ID]. As we haven't heard back from you in the last few days, we are going ahead and closing this ticket.

If you are still experiencing the issue, simply reply to this email to automatically reopen it.

Thanks,

[Your Name]`,
    tags: ['close ticket', 'inactive customer', 'support operations']
  },
  {
    id: 'emp-spt-010',
    slug: 'explain-feature-limitations',
    title: 'Explain Product Limitations or Roadmap Status',
    categorySlug: 'customer-support',
    description: 'Handle feature requests politely by explaining limitations or linking to roadmaps.',
    content: `Act as a professional business communication expert.

CONTEXT:
A customer requested a feature that is not currently supported, and the user needs to explain this limitation.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, transparent, and constructive tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Rep Name: [Your Name]
- Requested Feature: [Feature]
- Alternative solution: [Alternative]
- Roadmap Link (optional): [URL]`,
    exampleOutput: `Subject: Feature Request: [Requested Feature] update

Hi [Customer Name],

Thank you for sharing your suggestion regarding [Requested Feature]. We appreciate hearing how we can make our product more useful for you.

Currently, we do not support this functionality directly. However, you can achieve a similar result by using:
- [Alternative solution]

We have logged this request with our product team. You can track our roadmap and feature releases here: [Roadmap Link]

Thanks for helping us improve.

Best,

[Your Name]`,
    tags: ['feature request', 'product limitation', 'roadmap sync']
  },

  // 6. NETWORKING EMAILS
  {
    id: 'emp-net-001',
    slug: 'informational-interview-request',
    title: 'Request an Informational Interview',
    categorySlug: 'networking',
    description: 'Ask an industry professional for a 15-minute chat to learn about their career path.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to request an informational interview with an industry professional.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, respectful, and curious tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Contact Name: [Contact Name]
- Target Industry/Role: [Industry/Role]
- Connection point: [e.g. shared group / read their article]`,
    exampleOutput: `Subject: Informational Interview Request: [Your Name]

Dear [Contact Name],

I hope this email finds you well.

I have been following your career path in [Target Industry/Role] and was particularly inspired by [Connection point].

I am looking to grow in this field and would value your insights. Would you be open to a brief 15-minute virtual chat sometime next week to share some advice on your career journey?

Thank you for your time and mentorship.

Best regards,

[Your Name]`,
    tags: ['informational interview', 'career advice', 'cold networking']
  },
  {
    id: 'emp-net-002',
    slug: 'reconnect-former-colleague',
    title: 'Reconnect with a Former Colleague',
    categorySlug: 'networking',
    description: 'Reach back out to a former team member to catch up and swap updates.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to reconnect with a former colleague or manager.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, warm, and friendly tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Colleague Name: [Colleague Name]
- Shared Workplace/Project: [Workplace/Project]`,
    exampleOutput: `Subject: Reconnecting / Catching up - [Your Name]

Hi [Colleague Name],

I hope you are doing great!

It's been a while since we worked together at [Shared Workplace/Project]. I was recently thinking about that project and wanted to reach out to check in.

How are things going with your work? I'd love to grab lunch or hop on a brief call soon to catch up and swap updates.

Warmly,

[Your Name]`,
    tags: ['reconnect', 'former colleague', 'warm outreach']
  },
  {
    id: 'emp-net-003',
    slug: 'advice-industry-expert',
    title: 'Seek Advice from an Industry Expert',
    categorySlug: 'networking',
    description: 'Ask a specific, high-value question to an industry leader or domain expert.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to ask a specific domain question to an industry expert.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, respectful, and appreciative tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Expert Name: [Expert Name]
- Specific Question: [Question]
- Why you ask them: [Reason]`,
    exampleOutput: `Subject: Inquiry: Advice regarding [Topic]

Dear [Expert Name],

I hope you are well.

I read your recent publication on [Reason] and found your analysis on the subject compelling.

I am currently working on a project facing similar constraints and had a brief question:
- [Specific Question]

Recognizing your time is valuable, I would deeply appreciate any quick insights you could share.

Thank you,

[Your Name]`,
    tags: ['expert advice', 'consultation request', 'domain sync']
  },
  {
    id: 'emp-net-004',
    slug: 'introduce-two-contacts',
    title: 'Introduce Two Professional Contacts',
    categorySlug: 'networking',
    description: 'Facilitate a warm introduction between two people in your network.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user is introducing two professional contacts to each other via email.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, bridging, and welcoming tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Contact 1 Name: [Name 1]
- Contact 1 Role/Value: [Role 1]
- Contact 2 Name: [Name 2]
- Contact 2 Role/Value: [Role 2]`,
    exampleOutput: `Subject: Introduction: [Name 1] & [Name 2]

Hi [Name 1] and [Name 2],

I am pleased to connect you both.

[Name 1], meet [Name 2]. [Name 2] is [Role 2] and specializes in projects that match your current interest.

[Name 2], meet [Name 1]. [Name 1] is [Role 1] and has been doing great work in similar areas.

I'll let you two take it from here to coordinate a sync.

Warm regards,

[Your Name]`,
    tags: ['introductions', 'bridge network', 'collaboration']
  },
  {
    id: 'emp-net-005',
    slug: 'thank-mentor-guidance',
    title: 'Thank a Mentor for Guidance',
    categorySlug: 'networking',
    description: 'Send a status update and thank-you note to a career mentor or advisor.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to thank their mentor and share a recent career success/milestone.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, warm, and appreciative tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Mentor Name: [Mentor Name]
- Specific Advice given: [Advice]
- Achievement achieved: [Success]`,
    exampleOutput: `Subject: Update & Thank You: [Achievement achieved]

Dear [Mentor Name],

I wanted to share some exciting news and express my deep gratitude.

Thanks to your guidance regarding [Specific Advice given], I was recently able to achieve [Achievement achieved].

Your mentorship has been invaluable in helping me navigate these milestones. I would love to treat you to coffee soon to catch up properly.

Best regards,

[Your Name]`,
    tags: ['mentor appreciation', 'success update', 'professional growth']
  },
  {
    id: 'emp-net-006',
    slug: 'ask-for-job-referral',
    title: 'Ask for a Professional Referral for a Role',
    categorySlug: 'networking',
    description: 'Ask a contact working at a target company if they would refer you for a job.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to ask a professional contact for an internal referral for a job opening.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, respectful, and low-pressure tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Contact Name: [Contact Name]
- Target Role/Link: [Role Title]
- Connection details: [How you know them]`,
    exampleOutput: `Subject: Inquiry: [Role Title] position at [Company Name]

Hi [Contact Name],

I hope you are doing well.

I noticed that your company is currently hiring for a [Target Role/Link]. Given our discussions on similar workflows, I wanted to reach out regarding this opening.

If you feel comfortable doing so, would you be open to submitting a referral for me? I have attached my resume and portfolio details for your review.

No worries at all if this is not possible. Thanks for your support either way.

Best,

[Your Name]`,
    tags: ['job referral', 'application boost', 'network outreach']
  },
  {
    id: 'emp-net-007',
    slug: 'invite-to-meetup-group',
    title: 'Invite Contact to a Local Meetup/Event',
    categorySlug: 'networking',
    description: 'Invite an industry contact to attend a local meetup or conference together.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to invite a contact to join them at an upcoming industry meetup or conference.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, friendly, and inviting tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Recipient Name: [Contact Name]
- Event Name: [Event Name]
- Date & Location: [Details]`,
    exampleOutput: `Subject: Attending [Event Name] next week?

Hi [Recipient Name],

I saw that [Event Name] is hosting a session on [Topic] this coming [Date & Location].

I am planning to attend and thought it would be a great opportunity to sync up. Let me know if you are interested in joining.

Best,

[Your Name]`,
    tags: ['meetup invite', 'event sync', 'industry networking']
  },
  {
    id: 'emp-net-008',
    slug: 'congratulations-promotion-role',
    title: 'Congratulations on a Promotion or New Role',
    categorySlug: 'networking',
    description: 'Congratulate a connection on their career milestone and keep the connection warm.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to congratulate a contact on their recent job promotion or new role.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, warm, and congratulatory tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Recipient Name: [Contact Name]
- New Role: [Role Title]
- New Company Name: [Company Name]`,
    exampleOutput: `Subject: Congratulations on your new role as [New Role]!

Hi [Recipient Name],

I saw the news about your new role as [New Role] at [New Company Name]!

I wanted to reach out and offer my warmest congratulations. This is a well-deserved milestone.

Wishing you all the best in your new position.

Best,

[Your Name]`,
    tags: ['congratulations', 'career milestone', 'relationship upkeep']
  },
  {
    id: 'emp-net-009',
    slug: 'pitch-collaboration-project',
    title: 'Pitch a Collaboration Project Idea',
    categorySlug: 'networking',
    description: 'Pitch a mutually beneficial project or content collaboration idea to a peer.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to pitch a collaboration project to a professional peer.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, collaborative, and benefit-driven tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Peer Name: [Recipient Name]
- Project Idea: [Co-authoring / Event / Co-marketing]
- Shared Value: [Why it benefits them]`,
    exampleOutput: `Subject: Collaboration Idea: [Project Idea]

Hi [Peer Name],

I hope your projects are going well.

I have been following your work and thought it would be great to explore a collaboration around [Project Idea].

Specifically, we could combine our resources to target [Shared Value]. Let me know if you would be open to a quick 10-minute brainstorming call next week.

Best,

[Your Name]`,
    tags: ['collaboration pitch', 'co-marketing', 'partnership building']
  },
  {
    id: 'emp-net-010',
    slug: 'share-industry-article',
    title: 'Share Relevant Industry Article with Contact',
    categorySlug: 'networking',
    description: 'Keep a connection warm by sharing a highly relevant article or guide without pitching.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to share a useful article or asset with a contact to maintain the relationship.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, helpful, and value-first tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Contact Name: [Recipient Name]
- Article Title/Topic: [Topic]
- Article Link: [URL]`,
    exampleOutput: `Subject: Thought you might find this interesting: [Article Title/Topic]

Hi [Contact Name],

I ran across this article regarding [Article Title/Topic] today and immediately thought of our recent conversation on this subject.

Here is the link to the resource: [Article Link]

No need to reply, just wanted to share.

Best regards,

[Your Name]`,
    tags: ['nurture contact', 'value share', 'relationship upkeep']
  },

  // 7. THANK YOU EMAILS
  {
    id: 'emp-tky-001',
    slug: 'thank-you-post-interview',
    title: 'Thank You Email After an Interview',
    categorySlug: 'thank-you',
    description: 'Send a professional appreciation email within 24 hours of your job interview.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user completed a job interview and wants to send a thank-you email to the interviewer.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, appreciative, and enthusiastic tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Applicant Name: [Your Name]
- Interviewer Name: [Name]
- Role Title: [Role Title]
- Conversation Point: [Something specific discussed]`,
    exampleOutput: `Subject: Thank you for your time: [Role Title] Interview

Dear [Interviewer Name],

Thank you so much for taking the time to speak with me today regarding the [Role Title] position.

I really enjoyed our discussion about [Conversation Point]. Our conversation reinforced my excitement about joining [Company Name].

Please let me know if you need any further details or references.

Best regards,

[Your Name]`,
    tags: ['thank you', 'interview follow up', 'candidate prep']
  },
  {
    id: 'emp-tky-002',
    slug: 'thank-you-client-business',
    title: 'Thank a Client for Their Business/Partnership',
    categorySlug: 'thank-you',
    description: 'Express appreciation to a client for their partnership or project renewal.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to thank a client for their business or contract renewal.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, warm, and professional tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Client Name: [Client Name]
- Partnership project: [Project/Milestone]`,
    exampleOutput: `Subject: Thank you for your continued partnership: [Partnership project]

Dear [Client Name],

As we reach our latest milestone on [Partnership project], I wanted to thank you for your business.

We value your trust and collaboration. Our team is committed to helping you achieve your milestones in the coming months.

Sincerely,

[Your Name]`,
    tags: ['client appreciation', 'retention', 'partnership account']
  },
  {
    id: 'emp-tky-003',
    slug: 'thank-you-teammate-help',
    title: 'Thank a Teammate for Help on Project',
    categorySlug: 'thank-you',
    description: 'Express gratitude to a coworker who assisted you or went the extra mile.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to thank a coworker for helping them on a project or task.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, warm, and collaborative tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Teammate Name: [Teammate Name]
- What they did: [Help details]`,
    exampleOutput: `Subject: Thank you for your help with [Task]!

Hi [Teammate Name],

I wanted to write a quick note to say thank you for your help with [What they did].

Your support was crucial in helping us meet our deadline. I really appreciate you taking the time to assist.

Best,

[Your Name]`,
    tags: ['team appreciation', 'internal sync', 'collaboration']
  },
  {
    id: 'emp-tky-004',
    slug: 'thank-you-speaker-event',
    title: 'Thank an Event Speaker/Panelist',
    categorySlug: 'thank-you',
    description: 'Thank a guest speaker or panelist for presenting at your event.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user hosted an event and wants to thank a guest speaker or panelist.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, formal, and appreciative tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Speaker Name: [Speaker Name]
- Event Name: [Event Name]
- Key takeaway: [Topic details]`,
    exampleOutput: `Subject: Thank you for speaking at [Event Name]

Dear [Speaker Name],

Thank you for presenting at our recent [Event Name]. 

Your session on [Key takeaway] was highly engaging and received excellent feedback from our attendees. We appreciate you sharing your expertise with our community.

Warm regards,

[Your Name]`,
    tags: ['speaker thanks', 'event hosting', 'professional relations']
  },
  {
    id: 'emp-tky-005',
    slug: 'thank-you-referral',
    title: 'Thank Someone for a Referral or Introduction',
    categorySlug: 'thank-you',
    description: 'Send a note of appreciation to someone who referred a client or candidate to you.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to thank a contact who referred a client, customer, or candidate to them.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, warm, and appreciative tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Contact Name: [Contact Name]
- Referred Person: [Name]
- Project/Context: [Referred project]`,
    exampleOutput: `Subject: Thank you for the introduction to [Referred Person]

Hi [Contact Name],

I wanted to say thank you for referring [Referred Person] to me. 

We had a productive discussion regarding [Project/Context] and are planning to kick off our project next week. I appreciate your trust and recommendation.

Best regards,

[Your Name]`,
    tags: ['referral thanks', 'introductions', 'nurture network']
  },
  {
    id: 'emp-tky-006',
    slug: 'thank-you-client-review',
    title: 'Thank Client for a Review/Testimonial',
    categorySlug: 'thank-you',
    description: 'Appreciate a customer who left a positive online review or written testimonial.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to thank a customer for writing a positive review or testimonial.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, warm, and appreciative tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Client Name: [Client Name]
- Platform reviewed on: [e.g. G2 / Google Reviews]`,
    exampleOutput: `Subject: Thank you for your review on [Platform reviewed on]!

Hi [Client Name],

I saw the review you left for us on [Platform reviewed on]. 

Thank you so much for taking the time to share your experience. Your support helps other users discover us and helps us continue improving.

Let me know if there is anything we can assist you with this month.

Warmly,

[Your Name]`,
    tags: ['review thanks', 'customer success', 'advocacy']
  },
  {
    id: 'emp-tky-007',
    slug: 'thank-you-hosting-event',
    title: 'Thank an Organization for Hosting an Event',
    categorySlug: 'thank-you',
    description: 'Politely thank a company or host who organized a professional dinner or conference.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user attended an event and wants to thank the hosting organization/person.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, appreciative, and courteous tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Host Name: [Host Name]
- Event Name: [Event Name]
- Highlight: [e.g. networking session]`,
    exampleOutput: `Subject: Thank you for hosting [Event Name]

Dear [Host Name],

I wanted to thank you for hosting the [Event Name] yesterday. 

The event was exceptionally organized, and I particularly enjoyed [Highlight]. It was a valuable opportunity to connect with peers in the industry.

Thanks to your team for putting together this event.

Sincerely,

[Your Name]`,
    tags: ['event hosting', 'dinner thanks', 'networking appreciation']
  },
  {
    id: 'emp-tky-008',
    slug: 'thank-you-service-provider',
    title: 'Thank a Service Provider/Vendor',
    categorySlug: 'thank-you',
    description: 'Send a note of appreciation to a vendor who delivered a project successfully.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to thank a vendor or service provider for excellent delivery.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, supportive, and business-focused tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Vendor Contact: [Name]
- Project Delivered: [Project Title]`,
    exampleOutput: `Subject: Appreciation: Successful delivery of [Project Delivered]

Dear [Vendor Contact],

I am writing to express my appreciation for your work on [Project Delivered].

Your team delivered the milestone ahead of schedule and with great attention to detail. We appreciate your partnership and dedication.

Looking forward to working together on future projects.

Best regards,

[Your Name]`,
    tags: ['vendor thanks', 'supply relations', 'project delivery']
  },
  {
    id: 'emp-tky-009',
    slug: 'thank-anniversary-congratulations',
    title: 'Thank You for Anniversary Congratulations',
    categorySlug: 'thank-you',
    description: 'Respond politely to coworker or client congratulations on a work anniversary.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user received congratulations on their work anniversary and wants to thank their team/network.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, warm, and appreciative tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Years of Service: [Number]
- Company Name: [Company Name]`,
    exampleOutput: `Subject: Thank you for the work anniversary wishes!

Hi Everyone,

Thank you so much for the kind messages and wishes on my [Years of Service] work anniversary at [Company Name]!

It has been a privilege working with this team, and I look forward to achieving more milestones together.

Best,

[Your Name]`,
    tags: ['anniversary thanks', 'internal culture', 'appreciation']
  },
  {
    id: 'emp-tky-010',
    slug: 'year-end-appreciation-customers',
    title: 'Year-End Appreciation Email to Customers',
    categorySlug: 'thank-you',
    description: 'Draft a warm holiday or year-end appreciation newsletter to your users.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to send a year-end/holiday appreciation email to their customer base.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, warm, and reflective tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Company Name: [Company Name]
- Year: [Year]`,
    exampleOutput: `Subject: Thank you for a wonderful [Year] from [Company Name]

Dear Customer,

As [Year] comes to a close, we wanted to reach out and express our sincere gratitude for your support.

We are proud to have partnered with you this year, and we look forward to bringing you more updates in the coming year.

We wish you and your family a restful holiday season.

Warmly,

[Company Name] Team`,
    tags: ['customer appreciation', 'year end digest', 'holiday update']
  },

  // 8. COMPLAINT RESOLUTION EMAILS
  {
    id: 'emp-cmp-001',
    slug: 'complaint-delayed-vendor-delivery',
    title: 'Complaint: Delayed Vendor Delivery Status',
    categorySlug: 'complaint',
    description: 'Draft a formal complaint to a supplier regarding an overdue critical delivery.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user needs to send a formal complaint to a vendor regarding a delayed shipment that is blocking business operations.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, firm, and professional tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Vendor Contact: [Name]
- PO/Order Number: [Number]
- Scheduled Date: [Date]
- Business Impact: [e.g. blocking assembly line]`,
    exampleOutput: `Subject: Urgent: Overdue Delivery - PO #[PO/Order Number]

Dear [Vendor Contact],

I am writing to formally raise a concern regarding the delivery status of PO #[PO/Order Number], which was scheduled to arrive on [Scheduled Date].

This shipment has not yet arrived, and our operations are currently blocked as a result. This delay is severely impacting our timelines.

Could you please immediately investigate this delivery and provide an expedited resolution?

Best regards,

[Your Name]`,
    tags: ['delayed delivery', 'vendor dispute', 'operations block']
  },
  {
    id: 'emp-cmp-002',
    slug: 'complaint-software-reliability',
    title: 'Complaint: Poor Software Uptime & Reliability',
    categorySlug: 'complaint',
    description: 'Escalate system downtime issues to your SaaS account manager.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user is experiencing frequent downtime with a paid software tool and wants to complain to their account manager.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, firm, and objective tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Account Manager: [Name]
- Tool Name: [SaaS Name]
- Downtime Instances: [Dates/details]`,
    exampleOutput: `Subject: Escalation: Reliability and Downtime Issues on [Tool Name]

Dear [Account Manager],

I am writing to escalate our concerns regarding the reliability of [Tool Name] over the past few weeks.

We have experienced several outages, specifically on [Downtime Instances]. This downtime is affecting our team's capability to meet project SLAs.

Could you please clarify what steps are being taken to stabilize the service, and how this will be credited against our active SLA agreement?

Sincerely,

[Your Name]`,
    tags: ['SaaS escalation', 'downtime complaint', 'SLA breach']
  },
  {
    id: 'emp-cmp-003',
    slug: 'complaint-incorrect-billing',
    title: 'Complaint: Incorrect Billing or Overcharges',
    categorySlug: 'complaint',
    description: 'Request a credit correction for incorrect billing line items.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user identified an overcharge or incorrect billing item on their invoice and wants to request correction.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, objective, and firm tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Invoice Number: [Invoice #]
- Charge Description: [Description]
- Expected Amount: [Amount]
- Overcharged Amount: [Amount]`,
    exampleOutput: `Subject: Correction Required: Billing Dispute - Invoice #[Invoice Number]

Dear Billing Team,

I hope you are well.

I am writing to request a correction for invoice #[Invoice Number]. I noticed a discrepancy regarding [Charge Description].

We were billed [Overcharged Amount] instead of our contracted rate of [Expected Amount]. Could you please adjust this invoice or credit the difference to our account?

Thank you for your assistance.

Best regards,

[Your Name]`,
    tags: ['billing correction', 'dispute', 'accounts payable']
  },
  {
    id: 'emp-cmp-004',
    slug: 'damaged-faulty-goods-replacement',
    title: 'Request Replacement for Damaged/Faulty Goods',
    categorySlug: 'complaint',
    description: 'Report damaged inventory received from a supplier and request replacement.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user received a shipment containing damaged or faulty inventory and wants to request replacements.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, firm, and fact-based tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Order Ref: [Reference]
- Damaged Items Description: [Description]`,
    exampleOutput: `Subject: Return & Replacement Request: Damaged Goods - Order #[Order Ref]

Dear Supplier Team,

I am writing to report that our recent delivery for Order #[Order Ref] contained damaged inventory.

Specifically, the following items were damaged in transit:
- [Damaged Items Description]

I have attached photos showing the packaging damage for your records. Could you please ship replacement units as soon as possible and send return labels for the damaged goods?

Thank you,

[Your Name]`,
    tags: ['damaged goods', 'supplier replacement', 'inventory return']
  },
  {
    id: 'emp-cmp-005',
    slug: 'unprofessional-staff-behavior',
    title: 'Complaint: Unprofessional Staff Conduct',
    categorySlug: 'complaint',
    description: 'Formally report unprofessional behavior of a vendor or partner rep to their supervisor.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user had an unprofessional encounter with a contractor or vendor representative and wants to notify the supervisor.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, objective, and formal tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Supervisor Name: [Name]
- Rep Name: [Name]
- Incident Date & Time: [Date & Time]
- Description of behavior: [Details]`,
    exampleOutput: `Subject: Formal Feedback: Professional Conduct on [Incident Date & Time]

Dear [Supervisor Name],

I am writing to bring a matter regarding professional conduct to your attention. 

During our sync on [Incident Date & Time], your representative, [Rep Name], exhibited behavior that did not align with a collaborative partnership. Specifically:
- [Description of behavior]

We value our partnership with your organization and wanted to raise this directly so we can ensure constructive collaboration moving forward.

Sincerely,

[Your Name]`,
    tags: ['conduct complaint', 'vendor escalation', 'professionalism']
  },
  {
    id: 'emp-cmp-006',
    slug: 'contract-termination-breach',
    title: 'Contract Termination Notification Due to Breach',
    categorySlug: 'complaint',
    description: 'Draft a formal contract termination notice based on missed SLA parameters.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user is terminating a contract because the vendor breached service level agreements or terms.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, formal, and objective tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Company Representative: [Name]
- Contract Name/Date: [Contract Details]
- Breach clause/failure: [Details of failure]
- Effective date of termination: [Date]`,
    exampleOutput: `Subject: Notice of Contract Termination: [Contract Name/Date]

Dear [Company Representative],

Please accept this email as formal notice of contract termination for [Contract Name/Date], effective [Effective date of termination].

This decision follows repeated failures to meet the contracted terms, specifically:
- [Breach clause/failure]

We will coordinate the final transition of files and invoices as outlined in our agreement.

Sincerely,

[Your Name]`,
    tags: ['contract termination', 'breach notification', 'legal relations']
  },
  {
    id: 'emp-cmp-007',
    slug: 'escalate-support-ticket',
    title: 'Escalate Unresolved Support Ticket',
    categorySlug: 'complaint',
    description: 'Escalate a support ticket that has been open for too long without resolution.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to escalate a customer support ticket that is past its resolution window.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, firm, and urgent tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Ticket ID: [Ticket ID]
- Ticket Subject: [Subject]
- Days Open: [Number]`,
    exampleOutput: `Subject: Escalation Request: Ticket #[Ticket ID] - [Ticket Subject]

Dear Support Manager,

I am writing to request an escalation for ticket #[Ticket ID] regarding [Ticket Subject].

This ticket has been open for [Days Open] days without progress. This issue is currently blocking our active production pipeline.

Could you please assign this ticket to a senior engineer and provide a revised resolution ETA today?

Best regards,

[Your Name]`,
    tags: ['support escalation', 'unresolved ticket', 'operations block']
  },
  {
    id: 'emp-cmp-008',
    slug: 'scope-creep-complaint',
    title: 'Addressing Project Scope Creep by Contractor',
    categorySlug: 'complaint',
    description: 'Politely remind a contractor or vendor of the agreed-upon project scope limits.',
    content: `Act as a professional business communication expert.

CONTEXT:
A contractor is requesting out-of-scope work additions or billing without approvals. The user wants to address this.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, firm, and collaborative tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Contractor Name: [Name]
- Original Scope Details: [Details]
- Scope Creep item: [Out of scope item]`,
    exampleOutput: `Subject: Project Scope Alignment: [Project Name]

Hi [Contractor Name],

I hope you are doing well.

I wanted to sync regarding the recent addition of [Scope Creep item] to our active development dashboard. 

As a reminder, our original agreed-upon scope covers:
- [Original Scope Details]

To ensure we stay aligned on budget and timeline, any out-of-scope additions must be formally approved via a change order before execution begins. Let's discuss this during our sync tomorrow.

Thanks,

[Your Name]`,
    tags: ['scope creep', 'project alignment', 'budget management']
  },
  {
    id: 'emp-cmp-009',
    slug: 'team-miscommunication-resolve',
    title: 'Addressing Miscommunication in a Team Project',
    categorySlug: 'complaint',
    description: 'Resolve a misunderstanding or miscommunication in a team project constructively.',
    content: `Act as a professional business communication expert.

CONTEXT:
There is a misunderstanding in a team project that is delaying progress. The user wants to clear the air.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, constructive, and diplomatic tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Recipient Name: [Name]
- Miscommunication topic: [Topic]`,
    exampleOutput: `Subject: Alignment Check: [Project Name] updates

Hi [Recipient Name],

I hope you are having a productive week.

I wanted to reach out regarding [Miscommunication topic] to ensure we are aligned on our next deliverables. It looks like there may have been a minor miscommunication regarding our roles in this sprint.

To clear this up, let's connect for 5 minutes after the standup tomorrow to review our checkpoints.

Thanks for your collaboration.

Best,

[Your Name]`,
    tags: ['team alignment', 'miscommunication fix', 'conflict resolution']
  },
  {
    id: 'emp-cmp-010',
    slug: 'request-sla-credit',
    title: 'Request SLA Credit for Service Downtime',
    categorySlug: 'complaint',
    description: 'Formally request financial credit for software outages exceeding SLA terms.',
    content: `Act as a professional business communication expert.

CONTEXT:
A vendor service failed to meet uptime requirements, and the user is requesting SLA financial credit.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, formal, and objective tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Vendor Account Rep: [Name]
- Outage Hours/Date: [Details]
- SLA terms: [Uptime % requirement]`,
    exampleOutput: `Subject: Formal Request: SLA Credit for Uptime Failure - [Month]

Dear [Vendor Account Rep],

Please accept this email as a formal request for billing credit under our SLA terms due to uptime failures in [Month].

Our logs show that your service experienced an outage on [Outage Hours/Date]. This downtime violates our contract requirement of [SLA terms] uptime.

Could you please verify these details and confirm the credit amount that will be applied to our next billing cycle?

Sincerely,

[Your Name]`,
    tags: ['billing credit', 'SLA claim', 'uptime outage']
  },

  // 9. COLD EMAILS
  {
    id: 'emp-cld-001',
    slug: 'cold-agency-pitch',
    title: 'Cold Outreach to Prospective Agency Client',
    categorySlug: 'cold',
    description: 'Pitch agency design, coding, or marketing services with a custom case study hook.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to pitch their agency services (development/marketing) to a cold lead.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, benefit-oriented, and low-friction tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Prospect Name: [Name]
- Agency Specialty: [e.g. CRO web design]
- Case study result: [e.g. 2x mobile conversion]`,
    exampleOutput: `Subject: Improving mobile conversions for [Company]

Dear [Prospect Name],

I was reviewing [Company]'s mobile site and noticed a few optimization opportunities.

We specialize in [Agency Specialty] and recently helped a similar brand achieve a [Case study result] within 60 days.

Would you be open to a 10-minute audit call next Tuesday to see if we can drive similar metrics for your store?

Best regards,

[Your Name]`,
    tags: ['agency sales', 'cold outreach', 'conversion optimization']
  },
  {
    id: 'emp-cld-002',
    slug: 'cold-co-marketing-pitch',
    title: 'Cold Pitch for Business Partnership/Co-Marketing',
    categorySlug: 'cold',
    description: 'Propose a joint webinar or co-authored ebook to a non-competing brand.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to propose a co-marketing collaboration to a non-competing business in a similar vertical.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, win-win focused, and professional tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Partner Contact: [Name]
- Partner Company: [Company]
- Co-marketing project: [e.g., joint webinar]
- Target Audience overlap: [Description]`,
    exampleOutput: `Subject: Partnership Proposal: Joint webinar with [Company]

Hi [Partner Contact],

I hope you are well.

I manage marketing at [Your Company] and have been following [Partner Company]'s growth. I notice we both serve the [Target Audience overlap] demographic.

I would love to explore hosting a [Co-marketing project] together next month. By pooling our email lists, we can deliver high-value content and generate high-quality leads for both our brands.

Let me know if you would be open to a quick 10-minute alignment call.

Best,

[Your Name]`,
    tags: ['co marketing', 'partnership building', 'audience swap']
  },
  {
    id: 'emp-cld-003',
    slug: 'cold-investor-pitch',
    title: 'Cold Pitch to Startup Investor/VC',
    categorySlug: 'cold',
    description: 'Hook venture capitalists or angel investors with traction metrics and vision.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to draft a cold outreach email pitching their startup to a venture capitalist or angel investor.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, data-backed, and concise tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Founder Name: [Your Name]
- Startup Name: [Startup Name]
- Problem Solved: [Problem]
- Traction Metric: [e.g., $20k MRR / 5k users]
- Funding Goal: [Amount]`,
    exampleOutput: `Subject: Pitch: [Startup Name] - Solving [Problem] ([Traction Metric])

Dear [Investor Name],

I am the founder of [Startup Name], and we are building a platform to solve [Problem].

We recently launched and have already achieved [Traction Metric] with zero marketing spend. We are raising our [Funding Goal] round to expand our team.

I have attached our executive deck. Would you be open to a brief discussion next week to see if this fits your current investment thesis?

Best regards,

[Your Name]`,
    tags: ['VC pitch', 'funding round', 'angel investor', 'startup traction']
  },
  {
    id: 'emp-cld-004',
    slug: 'cold-podcast-guest-pitch',
    title: 'Cold Pitch for Podcast/Interview Appearance',
    categorySlug: 'cold',
    description: 'Pitch yourself as a guest expert to a relevant industry podcast host.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to pitch themselves as a guest speaker to a podcast host.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, value-first, and concise tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Podcast Host: [Name]
- Podcast Title: [Title]
- Liked Episode: [Details]
- Pitch Topics: [3 topics you can discuss]`,
    exampleOutput: `Subject: Guest Pitch: [Sender Name] for [Podcast Title]

Hi [Podcast Host],

I am a long-time listener of [Podcast Title] and loved your recent episode on [Liked Episode].

I specialize in these areas and would love to guest on your show. Some topics that might interest your listeners include:
- [Pitch Topics]

You can check out some of my recent articles here: [Link]. Let me know if any of these topics resonate.

Thanks,

[Your Name]`,
    tags: ['podcast pitch', 'public relations', 'guest appearance']
  },
  {
    id: 'emp-cld-005',
    slug: 'cold-saas-pitch',
    title: 'Cold Outreach Pitching a SaaS Productivity Tool',
    categorySlug: 'cold',
    description: 'Pitch a SaaS tool by identifying inefficiencies in the prospect’s workflow.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to send a cold sales outreach email for their SaaS product.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, pain-focused, and professional tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Tool Name: [SaaS Name]
- Target Problem: [e.g. manual Excel data entry]
- Core Benefit: [e.g. automate in 1 click]`,
    exampleOutput: `Subject: Automating [Target Problem] at [Company]

Hi [Recipient Name],

If your team is like most, they spend hours weekly handling [Target Problem].

We built [Tool Name] to solve exactly this issue. Our platform allows teams to:
- [Core Benefit]

If you'd like to see a quick 2-minute demo of how this integrates with your system, you can book a slot here: [Link]

Best,

[Your Name]`,
    tags: ['SaaS sales', 'productivity tool', 'automation pitch']
  },
  {
    id: 'emp-cld-006',
    slug: 'cold-edtech-district-pitch',
    title: 'Cold Pitch to School/District for EdTech Tool',
    categorySlug: 'cold',
    description: 'Pitch an educational technology tool to school administrators or principals.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to pitch an EdTech platform to school principals or district leaders.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, outcome-focused, and respectful tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Administrator Title: [e.g., Principal Name]
- School/District: [Name]
- Tool Name: [EdTech Tool]
- Main Outcomes: [Outcomes]`,
    exampleOutput: `Subject: Supporting student engagement at [School/District]

Dear [Administrator Title],

As schools look for ways to boost engagement, managing teacher workloads remains a critical challenge.

We built [Tool Name] to address this gap. Our classroom-aligned software has helped teachers achieve:
- [Main Outcomes]

I would love to send you a 3-minute video overview of how [School/District] can trial this platform next term.

Best regards,

[Your Name]`,
    tags: ['EdTech sales', 'education outreach', 'district proposal']
  },
  {
    id: 'emp-cld-007',
    slug: 'cold-freelance-writer-pitch',
    title: 'Cold Pitch for Freelance Writing Services',
    categorySlug: 'cold',
    description: 'Pitch editorial content and copywriting services to a brand’s editor.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user is a freelance content writer pitching their editorial/writing services to a brand editor.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, creative, and credential-backed tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Writer Name: [Your Name]
- Editor Name: [Name]
- Publication Name: [Brand Name]
- Portfolio Link: [URL]
- Article Pitch Topics: [Topics]`,
    exampleOutput: `Subject: Pitch: [Writer Name] for [Publication Name] blog

Dear [Editor Name],

I am a freelance content writer specializing in your industry, and I'd love to pitch some article ideas for the [Publication Name] blog.

Here are three topics I believe would resonate with your readers:
- [Article Pitch Topics]

You can review my writing samples and portfolio here: [Portfolio Link]. If any of these topics fit your editorial calendar, I'd be happy to outline them.

Best,

[Your Name]`,
    tags: ['freelance writing', 'blog pitch', 'editorial outreach']
  },
  {
    id: 'emp-cld-008',
    slug: 'cold-retail-buyer-pitch',
    title: 'Cold Pitch to Retail Buyer for Product Placement',
    categorySlug: 'cold',
    description: 'Introduce your physical product line to a retail category manager.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to pitch their physical product line to a retail buyer or category manager.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, commercial, and benefit-driven tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Brand Founder: [Your Name]
- Product Category: [Product Name]
- Key selling point: [Selling point]
- Margin/Retail data: [Details]`,
    exampleOutput: `Subject: Product submission: [Product Category] line

Dear Buyer,

I am the founder of [Brand Name], and we manufacture a unique line of [Product Category].

Our line has been growing rapidly because of [Key selling point]. We offer retailers competitive margins:
- [Margin/Retail data]

I have attached our catalog. Would you be open to receiving a few product samples to review next week?

Sincerely,

[Your Name]`,
    tags: ['retail pitch', 'product placement', 'wholesale sales']
  },
  {
    id: 'emp-cld-009',
    slug: 'cold-guest-blogging-pitch',
    title: 'Cold Pitch for Guest Blogging Opportunities',
    categorySlug: 'cold',
    description: 'Request guest posting opportunities on a high-authority blog to build backlinks.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user is requesting a guest post slot on an industry blog for SEO/branding.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, mutually beneficial, and clean tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Blog Name: [Blog Name]
- Topic Ideas: [Topics]
- Portfolio Link: [Link]`,
    exampleOutput: `Subject: Guest Post Submission: [Topic Ideas]

Dear Editorial Team,

I hope you are well.

I am a regular reader of the [Blog Name] blog and would love to contribute a high-quality guest post to your site.

Here are a few topics I've outlined that would interest your audience:
- [Topic Ideas]

The article will be fully SEO-optimized and free of charge. You can review my writing samples here: [Portfolio Link]

Best regards,

[Your Name]`,
    tags: ['guest blogging', 'backlink outreach', 'SEO pitch']
  },
  {
    id: 'emp-cld-010',
    slug: 'cold-introductory-call-pitch',
    title: 'Cold Pitch to Book a 10-Minute Intro Call',
    categorySlug: 'cold',
    description: 'Focus outreach solely on scheduling a short 10-minute introductory sync.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to write a cold email with the sole objective of booking a 10-minute introductory call.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, short, and low-commitment tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Prospect Name: [Name]
- Purpose of call: [Reason]
- Calendar Link: [URL]`,
    exampleOutput: `Subject: 10-minute sync regarding [Purpose of call]

Hi [Prospect Name],

I hope you are having a productive week.

I help companies optimize their workflows regarding [Purpose of call]. 

Could we schedule a short 10-minute call next Tuesday to see if we might be a fit for your team? You can pick a time directly on my calendar here: [Calendar Link]

No pressure at all if this isn't on your roadmap right now.

Warm regards,

[Your Name]`,
    tags: ['intro call', 'sales sync', 'short outreach']
  },

  // 10. MEETING REQUEST EMAILS
  {
    id: 'emp-mtg-001',
    slug: 'schedule-performance-review',
    title: 'Request 1-on-1 Performance Review Sync',
    categorySlug: 'meeting-request',
    description: 'Ask your manager or supervisor for a formal career and performance review sync.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to request a formal 1-on-1 performance review with their manager.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, respectful, and growth-oriented tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Manager Name: [Name]
- Review Agenda: [Agenda items]`,
    exampleOutput: `Subject: Performance Review Sync Request

Dear [Manager Name],

I hope you are well.

As we reach the end of this cycle, I would like to request a 1-on-1 performance review sync.

I would love to discuss:
- [Review Agenda]

Please let me know your availability for a 30-minute chat next week.

Best,

[Your Name]`,
    tags: ['performance review', 'internal sync', 'career growth']
  },
  {
    id: 'emp-mtg-002',
    slug: 'client-kickoff-meeting',
    title: 'Request Client Project Kick-off Sync',
    categorySlug: 'meeting-request',
    description: 'Invite a newly signed client to a project kick-off and onboarding call.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user is scheduling a kick-off meeting with a newly signed client.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, welcoming, and organized tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Client Name: [Name]
- Project Name: [Project Name]
- Agenda: [Agenda]
- Required Prep: [Onboarding homework]`,
    exampleOutput: `Subject: Kick-off Sync: [Project Name] onboarding

Dear [Client Name],

Welcome aboard! We are excited to begin our partnership.

To launch the project smoothly, let's schedule our official kick-off meeting. Our agenda will cover:
- [Agenda]

Before we connect, please ensure you complete these items:
- [Required Prep]

You can pick a convenient slot for our kickoff here: [Link].

Best regards,

[Your Name]`,
    tags: ['onboarding', 'project kickoff', 'client onboarding']
  },
  {
    id: 'emp-mtg-003',
    slug: 'team-brainstorming-session',
    title: 'Schedule Team Brainstorming Session',
    categorySlug: 'meeting-request',
    description: 'Coordinate a collaborative brainstorming meeting with your department.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to schedule a brainstorming session with their team.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, collaborative, and creative tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Target Topic: [Topic]
- Session Goal: [Goal]`,
    exampleOutput: `Subject: Brainstorming Session: [Target Topic]

Hi Team,

I'd like to schedule a collaborative session next week to brainstorm ideas for [Target Topic].

Our goal for this session is to:
- [Session Goal]

Please review the attached project board and add your initial thoughts before the meeting. I'll send out a calendar invite once we align on a slot.

Thanks,

[Your Name]`,
    tags: ['brainstorming', 'team sync', 'creative planning']
  },
  {
    id: 'emp-mtg-004',
    slug: 'budget-planning-meeting',
    title: 'Request Meeting to Discuss Budget Planning',
    categorySlug: 'meeting-request',
    description: 'Coordinate a meeting with department leads to review annual budget targets.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user needs to schedule a meeting with department leads or finance to plan budgets.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, structured, and goal-oriented tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Target Department: [Name]
- Budget Scope: [Scope]
- Prep Material Link: [URL]`,
    exampleOutput: `Subject: Budget Planning Session: [Budget Scope]

Dear Team Leads,

As we prepare for the next cycle, we need to align on budget targets for [Budget Scope].

I have scheduled our budget planning session for next Wednesday. Please review the current forecast draft and update your resource requirements beforehand: [Prep Material Link].

Looking forward to our alignment.

Best regards,

[Your Name]`,
    tags: ['budget sync', 'financial planning', 'internal management']
  },
  {
    id: 'emp-mtg-005',
    slug: 'reschedule-planned-meeting',
    title: 'Reschedule a Previously Planned Sync',
    categorySlug: 'meeting-request',
    description: 'Politely request to reschedule a meeting due to a calendar conflict.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user needs to reschedule an existing meeting due to a conflict.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, apologetic, and proactive tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Recipient Name: [Name]
- Meeting Name: [Meeting Title]
- New slots proposed: [Times]`,
    exampleOutput: `Subject: Rescheduling request: [Meeting Name]

Dear [Recipient Name],

Please accept my apologies, but I have an unexpected calendar conflict and need to reschedule our upcoming [Meeting Name] sync.

Could we move the meeting to one of the following times instead?
- [New slots proposed]

If none of these times work, please feel free to send over a link to your calendar.

Warm regards,

[Your Name]`,
    tags: ['reschedule sync', 'calendar alignment', 'professional etiquette']
  },
  {
    id: 'emp-mtg-006',
    slug: 'product-demo-sales-meeting',
    title: 'Request Product Demo Sync with Sales',
    categorySlug: 'meeting-request',
    description: 'Inquire with a vendor’s sales team to request a software demonstration.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to request a demo of a third-party software for their team.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, business-like, and interest-driven tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Vendor Company: [Company Name]
- Team Size: [Number]
- Core Use Case: [Details]`,
    exampleOutput: `Subject: Product Demo Request: [Vendor Company] solutions

Dear Sales Team,

I hope this email finds you well.

I am looking to explore [Vendor Company]'s platform for our team of [Team Size]. We are looking to leverage your software to:
- [Core Use Case]

Could we schedule a brief 15-minute demo session next week to walkthrough the platform?

Sincerely,

[Your Name]`,
    tags: ['demo request', 'software buying', 'procurement']
  },
  {
    id: 'emp-mtg-007',
    slug: 'vendor-contract-review',
    title: 'Schedule Vendor Contract Review Sync',
    categorySlug: 'meeting-request',
    description: 'Request a meeting with a supplier to negotiate and review contract renewal terms.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user is coordinating a contract review or renewal sync with a vendor.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, formal, and outcome-oriented tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Vendor Contact: [Name]
- Agreement Name: [Name]`,
    exampleOutput: `Subject: Contract Review Sync: [Agreement Name]

Dear [Vendor Contact],

As our agreement for [Agreement Name] approaches its renewal date, we need to schedule a brief terms review sync.

We would like to discuss a few contract optimizations. Please let me know your availability for a 30-minute discussion next Tuesday.

Best regards,

[Your Name]`,
    tags: ['contract negotiation', 'vendor renewal', 'finance sync']
  },
  {
    id: 'emp-mtg-008',
    slug: 'mentor-advice-sync-request',
    title: 'Request a Sync/Coffee Meeting with a Mentor',
    categorySlug: 'meeting-request',
    description: 'Politely invite your career advisor or mentor to a coffee sync.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to schedule a sync or coffee meeting with their mentor.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, highly respectful, and warm tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Mentor Name: [Name]
- Topic for advice: [Topic]`,
    exampleOutput: `Subject: Mentorship Sync Request: Advice on [Topic]

Dear [Mentor Name],

I hope you are doing well.

I am currently navigating a transition regarding [Topic] and would value your guidance on this direction.

If your schedule permits, would you be open to a 30-minute coffee sync next week? I can meet near your office or hop on a call.

Thank you for your ongoing support.

Sincerely,

[Your Name]`,
    tags: ['mentorship', 'career advice', 'coffee sync']
  },
  {
    id: 'emp-mtg-009',
    slug: 'project-retro-post-mortem',
    title: 'Schedule Project Retro/Post-Mortem Meeting',
    categorySlug: 'meeting-request',
    description: 'Coordinate a post-mortem review with the project team to identify lessons learned.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user wants to schedule a post-mortem/retro meeting after a project launch.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, objective, and constructive tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Project Name: [Project Name]
- Board Link: [URL]`,
    exampleOutput: `Subject: Project Retro: [Project Name] feedback session

Hi Team,

Congratulations on the launch of [Project Name]!

To help us improve our processes for future cycles, I have scheduled our project retro sync for this Thursday. Please add your wins, issues, and ideas to our retro board beforehand: [Board Link]

Looking forward to a constructive discussion.

Best,

[Your Name]`,
    tags: ['retro sync', 'project delivery', 'internal audit']
  },
  {
    id: 'emp-mtg-010',
    slug: 'board-meeting-coordination',
    title: 'Coordinate Board/Multi-party Meeting Availability',
    categorySlug: 'meeting-request',
    description: 'Coordinate schedules with multiple external stakeholders for a board sync.',
    content: `Act as a professional business communication expert.

CONTEXT:
The user needs to coordinate availability with multiple board members or stakeholders.

TASK:
Generate a clear, concise, and professional email.

CONSTRAINTS:
- Use a polite, formal, and organized tone.
- Include clear, actionable next steps.
- Maintain a proper email structure.
- The output MUST include a Subject Line.

Details to customize:
- Sender Name: [Your Name]
- Meeting Topic: [Topic]
- Scheduling Poll Link: [URL]`,
    exampleOutput: `Subject: Coordination: Scheduling our [Topic] Board Sync

Dear Board Members,

We are preparing to schedule our upcoming board sync regarding [Topic].

To help us find a time that works for everyone, could you please fill out your availability on our scheduling poll by this Friday: [Scheduling Poll Link]

Once compiled, I will distribute the calendar invitations and agenda.

Warm regards,

[Your Name]`,
    tags: ['board meeting', 'coordination', 'calendar scheduling']
  }
];

export function getEmailCategories() {
  return emailCategories;
}

export function getEmailCategoryBySlug(slug: string) {
  return emailCategories.find((c) => c.slug === slug);
}

export function getEmailPrompts() {
  return emailPrompts;
}

export function getEmailPromptsByCategory(categorySlug: string) {
  return emailPrompts.filter((p) => p.categorySlug === categorySlug);
}

export function getEmailPromptBySlug(slug: string) {
  return emailPrompts.find((p) => p.slug === slug);
}
