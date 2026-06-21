// Let's declare interface types we need locally
export interface pSEOContent {
  introduction: string;
  beginnerSection: string;
  advancedSection: string;
  nicheSection: string;
  faqs: { question: string; answer: string }[];
  wordCount: number;
}

// Custom search intents per profession
const nicheKeywords: Record<string, { title: string; html: string }> = {
  photographers: {
    title: 'Best Studio Portrait Prompts & Lighting Configurations',
    html: `
### Mastering Best Studio Portrait Prompts

For professional portrait photographers, generative AI is a game-changer for shoot planning, lighting prep, and client concept mood boards. Instead of spending hours in pre-production, AI tools can help you outline precise lighting directions and style parameters.

#### Essential Midjourney Studio Portrait Prompts:
- **Classic Fine Art Portrait**: \`A studio portrait of a subject, editorial look, Rembrandt lighting setup, soft key light at 45 degrees, subtle fill, dark textured background, Shot on Hasselblad 500c, 80mm lens, f/4, photorealistic, 8k resolution --ar 4:5 --stylize 250\`
- **High-Key Beauty Portrait**: \`High-key beauty portrait, soft diffused ring light, bright white studio background, flawless clean skin, shot on 85mm lens, f/2.8, highly detailed reflection in eyes, commercial style --ar 4:5 --v 6.0\`
- **Cinematic Low-Key Lighting**: \`Low-key cinematic portrait of an individual, dramatic side lighting, chiascuro effect, rim lighting outlining the profile, dark smoky atmosphere, shot on 50mm f/1.4 lens, moody cinematic color grade --ar 16:9\`

#### Studio Lighting Configurator Prompt:
Use the following ChatGPT template to plan your physical studio setups:
> *\"Act as a master studio lighting assistant. I am doing a portrait shoot for a corporate executive who wants a professional yet approachable look. Suggest three distinct lighting setups using standard modifiers (Softboxes, Octaboxes, Reflectors, V-Flats). Specify modifiers, power ratios, key/fill positioning, and background separation lights.\"*
    `.trim()
  },
  teachers: {
    title: 'Standards-Aligned Lesson Planning & Grading Rubrics',
    html: `
### Automating Standards-Aligned Lesson Planning

In modern education, alignment with state standards (like Common Core or NGSS) is non-negotiable. ChatGPT can analyze standard criteria and generate custom lesson plans, quizzes, and rubrics in seconds.

#### Prompt Example for Math & Science Standards:
> *\"You are a curriculum designer. Create a 50-minute lesson plan aligned with Common Core Math Standard [CCSS.MATH.CONTENT.7.NS.A.1]. Include a warm-up activity, a guided practice section with visual models, 5 independent practice problems, and an exit ticket. Design a 4-point grading rubric assessing: Conceptual Understanding, Procedural Skill, and Mathematical Communication.\"*
    `.trim()
  },
  developers: {
    title: 'Automated Code Review & Debugging Frameworks',
    html: `
### Automated Code Review & Debugging

AI prompts help software engineers automate code reviews, audit dependencies for security vulnerabilities, and debug stack traces instantly.

#### Best Code Auditor Prompt:
> *\"Act as a principal security engineer. Audit the following [LANGUAGE] code block for vulnerabilities like SQL injection, XSS, insecure deserialization, or resource leaks. For each bug found, show: 1. Severity rating, 2. Root cause description, 3. Corrected code demonstrating mitigation, and 4. Prevention guidelines for future commits: [PASTE CODE HERE]\"*
    `.trim()
  },
  accountants: {
    title: 'Excel Automations & Tax Compliance Audits',
    html: `
### Mastering Excel Automations & Complex Financial Modeling

Accountants and auditors use AI prompts to construct complex Excel nested formulas, automate VBA macro scripts, and write custom Python code for data analysis.

#### Dynamic Excel Formula Builder Prompt:
> *\"You are a financial modeler. I have a workbook with sheet 'Ledger' containing columns A (Date), B (Account Code), and C (Amount). I need an Excel formula using INDEX, MATCH, and SUMIFS that dynamically calculates the cumulative total of account code '10100' for the month of January 2026. Explain step-by-step how the array lookup works.\"*
    `.trim()
  }
};

// Generic fallback keyword targets
const genericNicheTemplate = (profName: string) => ({
  title: `Accelerating ${profName} Workflows & Productivity`,
  html: `
### Optimizing ${profName} Operations with AI Prompts

For ${profName.toLowerCase()}, time management and workflow optimization are the primary drivers of success. Generative AI allows you to delegate administrative friction and focus on high-impact work.

#### Core AI Applications:
1. **Document Drafting**: Automate templates, outreach letters, and specifications.
2. **Analysis & Strategy**: Summarize competitor metrics, research compliance, and model scenarios.
3. **Client Relations**: Draft emails, replies, proposal frameworks, and follow-ups.

#### Standard Optimization Prompt:
> *\"Act as a senior consultant specializing in ${profName.toLowerCase()} workflows. Audit my current operational bottleneck: [DESCRIBE TASK]. Design a step-by-step automation framework using AI templates, outlining the inputs, constraints, and instructions to ensure maximum accuracy and quality.\"*
  `.trim()
});

export function generatePSEOContent(professionSlug: string, profName: string): pSEOContent {
  const customNiche = nicheKeywords[professionSlug] || genericNicheTemplate(profName);

  const introduction = `
The integration of generative artificial intelligence (AI) has shifted from a novelty to a fundamental component of professional success. For ${profName}, platforms like ChatGPT, Claude, and Gemini offer a cognitive multiplier — a virtual assistant capable of handling administrative tasks, drafting technical documents, planning projects, and analyzing data. However, the quality of AI output is directly proportional to the clarity and structure of the input prompt. By mastering prompt engineering frameworks, ${profName.toLowerCase()} can automate time-consuming routines, reclaim up to 10-15 hours per week, and focus on high-impact strategic initiatives.

This guide provides a comprehensive repository of battle-tested prompts, guides, and workflows designed specifically for ${profName.toLowerCase()}. Whether you are looking to accelerate daily tasks or design complex long-term strategies, this framework offers the exact templates needed to achieve top-tier results.
  `.trim();

  const beginnerSection = `
### How to Start Using AI as a ${profName.slice(0, -1)}

For beginners, the easiest way to write effective prompts is using the **ROLE-CONTEXT-TASK-CONSTRAINT** framework. Rather than asking a simple query, structure your prompt by defining:
- **Role**: Tell the AI who it is (e.g. \"Act as an experienced ${profName.slice(0, -1)}\").
- **Context**: Explain the situation, audience, and why the task matters.
- **Task**: Detail exactly what needs to be written or analyzed.
- **Constraint**: Restrict the format, tone, length, or parameters.

#### 1. Administrative Automation Template
> *\"Act as a administrative specialist for ${profName.toLowerCase()}. Help me organize my inbox by sorting the following client inputs. Summarize each input into a 1-sentence action item, tag it by priority (Low, Medium, High), and draft a short, professional response template: [INSERT INPUTS HERE]\"*

#### 2. Creative Brainstorming Template
> *\"You are a creative strategist specializing in ${profName.toLowerCase()} trends. Generate 5 unique concepts for [INSERT PROJECT/TOPIC]. For each concept outline: 1. Main idea, 2. Target audience hook, 3. Materials/assets required, and 4. Potential execution bottlenecks.\"*

#### 3. Client Onboarding Outline
> *\"Act as a lead coordinator. Draft a comprehensive onboarding questionnaire for new clients in the ${profName.toLowerCase()} niche. Include 10 diagnostic questions that help discover their exact needs, budget constraints, timeline expectations, and historical challenges.\"*
  `.trim();

  const advancedSection = `
### Advanced Prompt Chaining & Reasoning Models

To unlock the full potential of AI, advanced practitioners use **few-shot prompting** and **Chain of Thought (CoT)**. Few-shot prompting means providing the AI with examples of high-quality outputs before asking it to perform a task. Chain of Thought forces the model to document its thinking step-by-step, reducing errors on complex calculations or logical tasks.

#### 4. Chain of Thought audit template
> *\"You are a senior auditor in ${profName.toLowerCase()}. Audit the following process: [INSERT DATA/PROCESS]. Let's think step-by-step. First, identify any deviations from standard procedures. Second, calculate the operational impact of these deviations. Third, outline three concrete mitigations. Write down your reasoning for each phase before stating the final conclusion.\"*

#### 5. Tone Modifier & Style Mimic
> *\"Analyze the writing style of the following sample for vocabulary, structure, and tone: [PASTE SAMPLE]. Once analyzed, write a new briefing document about [TOPIC] mimicking this exact writing style. Avoid jargon, keep paragraphs under 3 sentences, and lead with key metrics.\"*

#### 6. Multi-Step Workflow Executor
> *\"Act as a project director. We are executing a campaign for [PROJECT]. Generate a multi-step execution plan consisting of: Phase 1 (Research), Phase 2 (Drafting), and Phase 3 (Delivery). For each phase, provide a specific prompt template that I can feed back to you to complete the tasks programmatically.\"*
  `.trim();

  const faqs = [
    {
      question: `What are the best AI prompts for ${profName}?`,
      answer: `The best prompts for ${profName.toLowerCase()} use the ROLE-CONTEXT-TASK-CONSTRAINT framework. By giving the AI a specific role (e.g. "senior DevOps engineer"), rich context about the task, and strict format constraints, you can generate ready-to-use professional outcomes.`
    },
    {
      question: `How can ${profName} use ChatGPT to save time?`,
      answer: `${profName} can use ChatGPT to draft client emails, summarize long research articles, generate outline drafts for projects, troubleshoot software bugs, design excel templates, and write policy guidelines.`
    },
    {
      question: `Can AI replace ${profName.toLowerCase()} in the future?`,
      answer: `No, AI is a tool designed to enhance human productivity, not replace human judgment. While AI excels at processing data and drafting templates, it lacks critical reasoning, contextual understanding, and relationship building.`
    },
    {
      question: `Is it safe to paste client data into ChatGPT?`,
      answer: `You should never paste sensitive, proprietary, or personally identifiable client information (PII) into public AI models. For company data, ensure you use enterprise versions (like ChatGPT Enterprise or Copilot) where data encryption is active and inputs are not used to train the models.`
    },
    {
      question: `How do I prevent AI hallucinations?`,
      answer: `To prevent AI from making up information, provide strict reference texts using delimiters (like triple backticks), define constraints clearly (e.g., "Only reference facts in the text above"), and instruct the model to state "I don't know" if the information is unavailable.`
    },
    {
      question: `What difficulty levels are these prompts designed for?`,
      answer: `Our library covers beginner, intermediate, and advanced prompting structures. Beginner templates cover simple content drafting, while advanced templates leverage few-shot examples and Chain-of-Thought reasoning.`
    }
  ];

  // Calculate approximate word count
  const allText = [
    introduction,
    beginnerSection,
    advancedSection,
    customNiche.html,
    faqs.map(f => f.question + ' ' + f.answer).join(' ')
  ].join(' ');
  const wordCount = allText.split(/\s+/).length;

  return {
    introduction,
    beginnerSection,
    advancedSection,
    nicheSection: customNiche.html,
    faqs,
    wordCount
  };
}
