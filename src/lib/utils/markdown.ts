/**
 * Extremely lightweight and robust markdown parser to HTML.
 * Supports: Headers (#, ##, ###), bold (**), italic (*), lists (- or *), code blocks (```), inline code (`), and links ([text](url))
 */
export function parseMarkdown(markdown: string): string {
  if (!markdown) return '';

  let html = markdown;

  // Escape HTML entities to prevent XSS
  html = html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Extract code blocks first to prevent them from being split and wrapped in paragraphs
  const codeBlocks: string[] = [];
  html = html.replace(/```(?:[a-zA-Z0-9]+)?\n([\s\S]*?)\n```/g, (match, code) => {
    const placeholder = `__CODE_BLOCK_${codeBlocks.length}__`;
    codeBlocks.push(`<pre class="bg-zinc-50 p-4 rounded-xl border border-zinc-200 font-mono text-sm dark:bg-zinc-950 dark:border-zinc-800 overflow-x-auto my-4 text-zinc-800 dark:text-zinc-300"><code>${code}</code></pre>`);
    return placeholder;
  });

  // Inline code (`code`)
  html = html.replace(/`([^`]+)`/g, '<code class="bg-zinc-100 px-1.5 py-0.5 rounded text-indigo-600 dark:bg-zinc-900 dark:text-indigo-400 font-mono text-xs font-semibold">$1</code>');

  // Headers with generated slug IDs for Table of Contents anchors
  html = html.replace(/^### (.*$)/gim, (match, title) => {
    const slug = title.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `<h3 id="${slug}" class="text-lg font-bold text-zinc-900 dark:text-zinc-50 mt-6 mb-2 scroll-mt-20">${title}</h3>`;
  });
  html = html.replace(/^## (.*$)/gim, (match, title) => {
    const slug = title.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `<h2 id="${slug}" class="text-xl font-extrabold text-zinc-900 dark:text-zinc-50 mt-8 mb-4 border-b border-zinc-200 pb-2 dark:border-zinc-800 scroll-mt-20">${title}</h2>`;
  });
  html = html.replace(/^# (.*$)/gim, (match, title) => {
    const slug = title.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `<h1 id="${slug}" class="text-3xl font-black text-zinc-900 dark:text-zinc-50 mt-10 mb-6 scroll-mt-20">${title}</h1>`;
  });

  // Bold (**text**)
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-extrabold text-zinc-950 dark:text-zinc-50">$1</strong>');

  // Italic (*text*)
  html = html.replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>');

  // Blockquotes (> text)
  html = html.replace(/^&gt;\s+(.*)$/gim, '<blockquote class="border-l-4 border-zinc-300 pl-4 italic my-4 text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">$1</blockquote>');

  // Links ([text](url))
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-indigo-600 font-semibold hover:underline dark:text-indigo-400">$1</a>');

  // Unordered list items (- item or * item)
  html = html.replace(/^\s*[\-\*]\s+(.*)$/gim, '<li class="ml-4 list-disc text-zinc-700 dark:text-zinc-300">$1</li>');

  // Wrap list items in <ul> tags.
  html = html.replace(/(<li.*<\/li>)/g, '<ul class="space-y-1 my-4">$1</ul>');
  html = html.replace(/<\/ul>\s*<ul class="space-y-1 my-4">/g, '');

  // Paragraphs: Wrap lines that don't start with block tags in <p> tags
  const lines = html.split('\n');
  const processedLines = lines.map(line => {
    const trimmed = line.trim();
    if (!trimmed) return '';
    
    // Skip if it's a code block placeholder
    if (trimmed.startsWith('__CODE_BLOCK_') && trimmed.endsWith('__')) {
      return line;
    }

    // Skip already formatted blocks
    if (trimmed.startsWith('<h') || trimmed.startsWith('<ul') || trimmed.startsWith('</ul') || trimmed.startsWith('<li') || trimmed.startsWith('</li') || trimmed.startsWith('<blockquote') || trimmed.startsWith('</blockquote')) {
      return line;
    }
    return `<p class="my-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">${line}</p>`;
  });

  let finalHtml = processedLines.join('\n');

  // Restore code blocks
  codeBlocks.forEach((block, index) => {
    finalHtml = finalHtml.replace(`__CODE_BLOCK_${index}__`, block);
  });

  return finalHtml;
}
