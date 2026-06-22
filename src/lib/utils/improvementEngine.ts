// src/lib/utils/improvementEngine.ts

/**
 * Client-side rule-based prompt improvement engine.
 * Automatically restructures and enhances a user's prompt by adding 
 * system instructions, structural headers, constraints, and anti-hallucination guardrails.
 */
export function improvePrompt(
  rawPrompt: string,
  style: string = 'Professional',
  format: string = 'Detailed Report'
): string {
  if (!rawPrompt || !rawPrompt.trim()) {
    return 'Please enter or generate a prompt first before improving it.';
  }

  // Define expert system instructions
  const systemFramework = `# ROLE & CONTEXT
Act as an elite AI assistant and world-class expert in this domain. You possess deep industry knowledge, analytical rigor, and follow strict constraints. Your objective is to deliver a highly accurate, structured, and action-oriented output.

# SYSTEM INSTRUCTIONS
1. DO NOT use generic filler words, corporate buzzwords, or conversational fluff (e.g., "Sure, I can help with that"). Start directly with the requested output.
2. Maintain high information density. Every sentence must add concrete value, data, or context.
3. If the request involves technical or logical steps, show your working or specify your assumptions clearly.
4. **Anti-Hallucination Guardrail**: If you are unsure of any facts, statistics, or code syntax, do not make them up. Clearly state what information is missing and list any assumptions made.

# USER TASK`;

  // Parse sections of the user's prompt if possible, or wrap it cleanly
  const cleanedPrompt = rawPrompt
    .replace('# ROLE & CONTEXT', '')
    .replace('# SYSTEM INSTRUCTIONS', '')
    .replace('# USER TASK', '')
    .trim();

  // Create styling instructions based on selected style
  const styleInstructions: Record<string, string> = {
    Professional: 'Authoritative, direct, and corporate-appropriate. Focus on clarity and business value.',
    'Beginner Friendly': 'Simple, encouraging, and easy to understand. Define any advanced terminology used.',
    'Executive Summary': 'High-level, brief, and bullet-focused. Prioritize key takeaways and metrics.',
    Technical: 'High-density, detailed, and code/process-heavy. Focus on exact specifications and edge cases.',
    Detailed: 'Exhaustive, step-by-step, and comprehensive. Cover all aspects and adjacent details.',
    Academic: 'Formal, structured, objective, and analytical. Use academic conventions and citation layouts.',
    Creative: 'Engaging, narrative-driven, conversational, and highly original. Use evocative metaphors.',
    Strategic: 'Forward-looking, focus on competitive moats, KPIs, risk mitigation, and long-term impact.'
  };

  const formatInstructions: Record<string, string> = {
    'Bullet Points': 'Organized in a structured, hierarchical list of bullet points.',
    Table: 'Formatted as a clean Markdown table with headers and aligned columns.',
    JSON: 'Strictly valid JSON syntax, wrapped in a single markdown code block, matching target attributes.',
    Markdown: 'Well-formatted Markdown document using H2/H3 headers, bold highlights, and code blocks.',
    Checklist: 'An actionable step-by-step checklist with checkboxes [ ] for each item.',
    Report: 'A formal document with Executive Summary, Body Sections, and Recommendations.',
    Presentation: 'Slide-by-slide layout with Slide Titles, Slide Content (bullets), and Presenter Notes.',
    Email: 'A ready-to-send draft email with Subject Line options, Preview Text, and Body copy.',
    'Action Plan': 'A chronological, phase-based project roadmap with tasks, dependencies, and timelines.'
  };

  const styleText = styleInstructions[style] || styleInstructions.Professional;
  const formatText = formatInstructions[format] || formatInstructions.Markdown;

  return `${systemFramework}
${cleanedPrompt}

# OUTPUT SPECIFICATIONS
* **Target Style/Tone**: ${style} (${styleText})
* **Target Output Format**: ${format} (${formatText})
* Ensure the final output matches these criteria strictly. If code is generated, wrap it in appropriate syntax-highlighted code blocks.`;
}
