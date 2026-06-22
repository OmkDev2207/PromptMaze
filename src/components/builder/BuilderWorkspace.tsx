'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Cpu, Copy, Check, Sparkles, RefreshCw, Download, FolderPlus, 
  History, Trash, Plus, ChevronRight, ChevronDown, Settings, 
  AlertCircle, ExternalLink, FileText, Database, Share2, FolderOpen
} from 'lucide-react';
import { builderProfessions, BuilderProfession, BuilderTask } from '@/lib/data/builderTasks';
import { improvePrompt } from '@/lib/utils/improvementEngine';

interface BuilderWorkspaceProps {
  initialProfessionSlug?: string;
  initialTaskSlug?: string;
}

interface SavedPrompt {
  id: string;
  title: string;
  timestamp: number;
  professionId: string;
  taskId: string;
  values: Record<string, string>;
  style: string;
  format: string;
  advancedOptions: Record<string, boolean>;
  fewShotText: string;
  isImproved: boolean;
}

interface Collection {
  id: string;
  name: string;
  promptIds: string[];
}

export default function BuilderWorkspace({
  initialProfessionSlug,
  initialTaskSlug
}: BuilderWorkspaceProps) {
  const router = useRouter();

  // Find initial profession and task
  const defaultProf = builderProfessions.find(p => p.slug === initialProfessionSlug) || builderProfessions[0];
  const defaultTask = defaultProf.tasks.find(t => t.slug === initialTaskSlug) || defaultProf.tasks[0];

  // Component States
  const [selectedProf, setSelectedProf] = useState<BuilderProfession>(defaultProf);
  const [selectedTask, setSelectedTask] = useState<BuilderTask>(defaultTask);
  const [inputValues, setInputValues] = useState<Record<string, string>>({});
  const [style, setStyle] = useState('Professional');
  const [format, setFormat] = useState('Markdown');
  const [isImproved, setIsImproved] = useState(true);
  const [showAllProfessions, setShowAllProfessions] = useState(false);
  const [activeTab, setActiveTab] = useState<'history' | 'collections'>('history');

  // Advanced Options
  const [advancedOptions, setAdvancedOptions] = useState<Record<string, boolean>>({
    cot: false,
    fewShot: false,
    selfCritique: false,
    expert: false,
    clarify: false,
    stepByStep: false,
    multiApproach: false,
    risk: false,
  });
  const [fewShotText, setFewShotText] = useState('');

  // Storage states
  const [historyList, setHistoryList] = useState<SavedPrompt[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [savedPrompts, setSavedPrompts] = useState<SavedPrompt[]>([]);
  
  // UI states
  const [copied, setCopied] = useState(false);
  const [copiedNotion, setCopiedNotion] = useState(false);
  const [showExportDropdown, setShowExportDropdown] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [saveTitle, setSaveTitle] = useState('');
  const [selectedCollectionId, setSelectedCollectionId] = useState('');
  const [newCollectionName, setNewCollectionName] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  // Load from preselected props on client mount or prop change
  useEffect(() => {
    if (initialProfessionSlug) {
      const prof = builderProfessions.find(p => p.slug === initialProfessionSlug);
      if (prof) {
        setSelectedProf(prof);
        const task = prof.tasks.find(t => t.slug === initialTaskSlug) || prof.tasks[0];
        setSelectedTask(task);
      }
    }
  }, [initialProfessionSlug, initialTaskSlug]);

  // Reset inputs when task changes
  useEffect(() => {
    const defaultVals: Record<string, string> = {};
    selectedTask.inputs.forEach((input) => {
      defaultVals[input.key] = '';
    });
    setInputValues(defaultVals);
  }, [selectedTask]);

  // LocalStorage Sync
  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem('promptmaze_builder_history');
      if (storedHistory) setHistoryList(JSON.parse(storedHistory));

      const storedSaved = localStorage.getItem('promptmaze_builder_saved_prompts');
      if (storedSaved) setSavedPrompts(JSON.parse(storedSaved));

      const storedCollections = localStorage.getItem('promptmaze_builder_collections');
      if (storedCollections) setCollections(JSON.parse(storedCollections));
    } catch (e) {
      console.error('LocalStorage load failed:', e);
    }
  }, []);

  const saveToHistory = (compiled: string) => {
    const newHistoryItem: SavedPrompt = {
      id: Math.random().toString(36).substring(7),
      title: `${selectedProf.name} - ${selectedTask.name}`,
      timestamp: Date.now(),
      professionId: selectedProf.id,
      taskId: selectedTask.id,
      values: inputValues,
      style,
      format,
      advancedOptions,
      fewShotText,
      isImproved,
    };

    const updated = [newHistoryItem, ...historyList].slice(0, 50); // limit to 50 items
    setHistoryList(updated);
    localStorage.setItem('promptmaze_builder_history', JSON.stringify(updated));
  };

  const handleRestorePrompt = (item: SavedPrompt) => {
    const prof = builderProfessions.find(p => p.id === item.professionId);
    if (prof) {
      setSelectedProf(prof);
      const task = prof.tasks.find(t => t.id === item.taskId);
      if (task) {
        setSelectedTask(task);
        setInputValues(item.values);
        setStyle(item.style);
        setFormat(item.format);
        setAdvancedOptions(item.advancedOptions);
        setFewShotText(item.fewShotText);
        setIsImproved(item.isImproved);
      }
    }
  };

  const handleDeleteHistory = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = historyList.filter(item => item.id !== id);
    setHistoryList(updated);
    localStorage.setItem('promptmaze_builder_history', JSON.stringify(updated));
  };

  const handleCreateCollection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCollectionName.trim()) return;
    const newColl: Collection = {
      id: Math.random().toString(36).substring(7),
      name: newCollectionName.trim(),
      promptIds: [],
    };
    const updated = [...collections, newColl];
    setCollections(updated);
    localStorage.setItem('promptmaze_builder_collections', JSON.stringify(updated));
    setNewCollectionName('');
  };

  const handleSaveToCollection = () => {
    if (!saveTitle.trim()) return;
    
    const promptId = Math.random().toString(36).substring(7);
    const newSavedPrompt: SavedPrompt = {
      id: promptId,
      title: saveTitle.trim(),
      timestamp: Date.now(),
      professionId: selectedProf.id,
      taskId: selectedTask.id,
      values: inputValues,
      style,
      format,
      advancedOptions,
      fewShotText,
      isImproved,
    };

    // Save prompt
    const updatedSaved = [newSavedPrompt, ...savedPrompts];
    setSavedPrompts(updatedSaved);
    localStorage.setItem('promptmaze_builder_saved_prompts', JSON.stringify(updatedSaved));

    // Save to collection
    if (selectedCollectionId) {
      const updatedColl = collections.map(coll => {
        if (coll.id === selectedCollectionId) {
          return { ...coll, promptIds: [...coll.promptIds, promptId] };
        }
        return coll;
      });
      setCollections(updatedColl);
      localStorage.setItem('promptmaze_builder_collections', JSON.stringify(updatedColl));
    }

    setShowSaveModal(false);
    setSaveTitle('');
  };

  const handleDeleteSavedPrompt = (promptId: string, collectionId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Remove from saved list
    const updatedSaved = savedPrompts.filter(p => p.id !== promptId);
    setSavedPrompts(updatedSaved);
    localStorage.setItem('promptmaze_builder_saved_prompts', JSON.stringify(updatedSaved));

    // Remove from collection references
    const updatedColl = collections.map(coll => {
      if (coll.id === collectionId) {
        return { ...coll, promptIds: coll.promptIds.filter(id => id !== promptId) };
      }
      return coll;
    });
    setCollections(updatedColl);
    localStorage.setItem('promptmaze_builder_collections', JSON.stringify(updatedColl));
  };

  const handleDeleteCollection = (collectionId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Find collection prompt IDs
    const collection = collections.find(c => c.id === collectionId);
    const promptIdsToRemove = collection ? collection.promptIds : [];

    // Filter out prompts belonging to this collection
    const updatedSaved = savedPrompts.filter(p => !promptIdsToRemove.includes(p.id));
    setSavedPrompts(updatedSaved);
    localStorage.setItem('promptmaze_builder_saved_prompts', JSON.stringify(updatedSaved));

    // Remove collection
    const updatedColl = collections.filter(c => c.id !== collectionId);
    setCollections(updatedColl);
    localStorage.setItem('promptmaze_builder_collections', JSON.stringify(updatedColl));
  };

  // Compile prompt logic
  const compilePromptText = () => {
    let prompt = selectedTask.basePrompt;

    // Optional blocks replacing: [KEY_START] ... [KEY] ... [KEY_END]
    selectedTask.inputs.forEach((input) => {
      const keyUpper = input.key.toUpperCase();
      const startTag = `[${keyUpper}_START]`;
      const endTag = `[${keyUpper}_END]`;

      if (prompt.includes(startTag) && prompt.includes(endTag)) {
        const val = inputValues[input.key] || '';
        if (!val.trim()) {
          const regex = new RegExp(`\\[${keyUpper}_START\\][\\s\\S]*?\\[${keyUpper}_END\\]`, 'g');
          prompt = prompt.replace(regex, '');
        } else {
          prompt = prompt.replaceAll(startTag, '').replaceAll(endTag, '');
          prompt = prompt.replaceAll(`[${keyUpper}]`, val);
        }
      }
    });

    // Replace regular parameters
    selectedTask.inputs.forEach((input) => {
      const keyUpper = input.key.toUpperCase();
      const val = inputValues[input.key] || '';
      const replacement = val.trim() || `___(Insert your ${input.label.toLowerCase()} here)___`;
      prompt = prompt.replaceAll(`[${keyUpper}]`, replacement);
    });

    // Apply client-side Auto-Improvement Engine wrapper
    if (isImproved) {
      prompt = improvePrompt(prompt, style, format);
    }

    // Appending Advanced Options
    if (advancedOptions.cot) {
      prompt += '\n\n# REASONING PROTOCOL\nUse Chain of Thought reasoning: think step-by-step to arrive at the solution. Show your thinking process.';
    }
    if (advancedOptions.fewShot && fewShotText.trim()) {
      prompt += `\n\n# EXAMPLES\nHere are examples of the desired format and style:\n${fewShotText}`;
    }
    if (advancedOptions.selfCritique) {
      prompt += '\n\n# SELF-CRITIQUE PROTOCOL\nAfter generating the initial output, perform a self-critique. Identify potential errors, bias, or gaps, and refine the output accordingly to provide a corrected final version.';
    }
    if (advancedOptions.expert) {
      prompt += '\n\n# EXPERT STANDARDS\nEnsure the output is of publication-grade quality, demonstrating deep domain expertise, high analytical rigor, and comprehensive coverage.';
    }
    if (advancedOptions.clarify) {
      prompt += '\n\n# ELICITATION PROTOCOL\nIf the request is ambiguous, lacks necessary context, or has hidden assumptions, ask clarifying questions first before outputting the final response.';
    }
    if (advancedOptions.stepByStep) {
      prompt += '\n\n# STRUCTURED RATIONALE\nBreak down your response into logical steps, explaining the rationale behind each step and decision.';
    }
    if (advancedOptions.multiApproach) {
      prompt += '\n\n# COMPARATIVE ANALYSIS\nProvide at least two alternative approaches to solve this task, comparing their pros, cons, and performance trade-offs.';
    }
    if (advancedOptions.risk) {
      prompt += '\n\n# RISK & ASSUMPTIONS\nInclude a brief risk assessment or list of assumptions/dependencies for the proposed solution.';
    }

    return prompt;
  };

  const compiledPrompt = compilePromptText();

  // Score Calculator
  const calculateQualityScore = () => {
    let score = 15;

    // 1. Input completeness (up to 40 points)
    const filledCount = selectedTask.inputs.filter(input => (inputValues[input.key] || '').trim().length > 0).length;
    if (selectedTask.inputs.length > 0) {
      score += Math.round((filledCount / selectedTask.inputs.length) * 40);
    }

    // 2. Style & Format chosen (10 points each)
    if (style) score += 10;
    if (format) score += 10;

    // 3. Advanced controls checked (5 points each, up to 40 max)
    const checkedOptionsCount = Object.values(advancedOptions).filter(Boolean).length;
    score += checkedOptionsCount * 5;

    // 4. Auto-improve active (15 points)
    if (isImproved) score += 15;

    return Math.min(100, score);
  };

  const qualityScore = calculateQualityScore();

  // Recommendations panel messages based on current config
  const getQualityTips = () => {
    const tips = [];
    const emptyInputs = selectedTask.inputs.filter(input => !(inputValues[input.key] || '').trim());

    if (emptyInputs.length > 0) {
      tips.push({
        text: `Provide inputs for "${emptyInputs[0].label}" to add essential context.`,
        action: `Focus input`
      });
    }

    if (!isImproved) {
      tips.push({
        text: 'Activate "Auto-Improve Prompt" to wrap your prompt in our elite system framework.',
        action: 'Improve'
      });
    }

    if (Object.values(advancedOptions).filter(Boolean).length < 2) {
      tips.push({
        text: 'Enable "Chain of Thought" or "Self-Critique" to enhance reasoning depth.',
        action: 'Enable advanced'
      });
    }

    if (tips.length === 0) {
      tips.push({
        text: 'Excellent! Your prompt has comprehensive instructions, clear style constraints, and reasoning frameworks.',
        action: null
      });
    }

    return tips;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(compiledPrompt);
    setCopied(true);
    saveToHistory(compiledPrompt);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyNotion = () => {
    const formatted = `### Prompt Architect: ${selectedTask.name}
**Profession:** ${selectedProf.name}
**Style/Tone:** ${style} | **Format:** ${format}

\`\`\`markdown
${compiledPrompt}
\`\`\``;
    navigator.clipboard.writeText(formatted);
    setCopiedNotion(true);
    saveToHistory(compiledPrompt);
    setTimeout(() => setCopiedNotion(false), 2000);
  };

  const handleExportTxt = () => {
    const element = document.createElement("a");
    const file = new Blob([compiledPrompt], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `promptmaze-${selectedProf.slug}-${selectedTask.slug}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setShowExportDropdown(false);
    saveToHistory(compiledPrompt);
  };

  const handleExportJson = () => {
    const data = {
      title: `${selectedProf.name} - ${selectedTask.name}`,
      profession: selectedProf.name,
      task: selectedTask.name,
      style,
      format,
      inputs: inputValues,
      advancedOptions,
      isImproved,
      compiledPrompt
    };
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
    element.href = URL.createObjectURL(file);
    element.download = `promptmaze-${selectedProf.slug}-${selectedTask.slug}.json`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setShowExportDropdown(false);
    saveToHistory(compiledPrompt);
  };

  const handleResetFields = () => {
    const defaultVals: Record<string, string> = {};
    selectedTask.inputs.forEach((input) => {
      defaultVals[input.key] = '';
    });
    setInputValues(defaultVals);
    setFewShotText('');
    setAdvancedOptions({
      cot: false,
      fewShot: false,
      selfCritique: false,
      expert: false,
      clarify: false,
      stepByStep: false,
      multiApproach: false,
      risk: false,
    });
  };

  const displayedProfessions = showAllProfessions ? builderProfessions : builderProfessions.slice(0, 8);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
      
      {/* Left Column: Build Studio Controls */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        
        {/* Step 1: Select Profession */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3 flex items-center gap-1.5">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-violet-100 text-xs font-black text-violet-600 dark:bg-violet-950/40 dark:text-violet-400">1</span>
            Select Profession
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {displayedProfessions.map((prof) => {
              const isSelected = selectedProf.id === prof.id;
              return (
                <button
                  key={prof.id}
                  onClick={() => {
                    setSelectedProf(prof);
                    setSelectedTask(prof.tasks[0]);
                  }}
                  className={`flex flex-col items-center justify-center rounded-xl border p-3 text-center transition-all select-none hover:scale-[1.02] ${
                    isSelected
                      ? `border-violet-500 bg-gradient-to-b from-violet-50 to-indigo-50/50 text-zinc-900 dark:from-violet-950/20 dark:to-zinc-900 dark:text-zinc-50 shadow-sm ring-1 ring-violet-500/20`
                      : 'border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-400'
                  }`}
                >
                  <span className="text-xl mb-1">{prof.icon}</span>
                  <span className="text-xs font-bold leading-tight line-clamp-1">{prof.name}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setShowAllProfessions(!showAllProfessions)}
            className="w-full mt-4 flex items-center justify-center gap-1 text-xs font-bold text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 transition-colors"
          >
            {showAllProfessions ? 'Show Less' : 'Show All 16 Professions'}
            <ChevronDown className={`h-3.5 w-3.5 transition-transform ${showAllProfessions ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Step 2 & 3: Task & Dynamic Variables */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-100 dark:border-zinc-800/80 pb-4 mb-5 gap-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-violet-100 text-xs font-black text-violet-600 dark:bg-violet-950/40 dark:text-violet-400">2</span>
              Configure Workspace
            </h2>
            
            {/* Task selector */}
            <div className="flex items-center gap-2 max-w-xs w-full">
              <span className="text-xs text-zinc-400 shrink-0 font-medium">Task:</span>
              <div className="relative w-full">
                <select
                  value={selectedTask.id}
                  onChange={(e) => {
                    const task = selectedProf.tasks.find(t => t.id === e.target.value);
                    if (task) setSelectedTask(task);
                  }}
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50 dark:bg-zinc-900 dark:border-zinc-800 px-3 py-2 text-xs font-bold text-zinc-800 dark:text-zinc-200 outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500 transition-all cursor-pointer appearance-none"
                >
                  {selectedProf.tasks.map((task) => (
                    <option key={task.id} value={task.id}>{task.name}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-2.5 h-3.5 w-3.5 text-zinc-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6 italic bg-zinc-50 dark:bg-zinc-900 p-2.5 rounded-xl border border-zinc-200/50 dark:border-zinc-800/30">
            <strong>Task Context:</strong> {selectedTask.description}
          </p>

          {/* Dynamic input fields */}
          <div className="space-y-5">
            {selectedTask.inputs.map((input) => (
              <div key={input.key} className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300 flex items-center justify-between">
                  <span>{input.label}</span>
                  {input.key === 'error' || input.key === 'bottleneck' || input.key === 'cases' || input.key === 'guest' ? (
                    <span className="text-[10px] font-medium text-zinc-400 uppercase">Optional</span>
                  ) : (
                    <span className="text-[10px] font-black text-red-500">* Required</span>
                  )}
                </label>

                {input.type === 'textarea' ? (
                  <textarea
                    value={inputValues[input.key] || ''}
                    onChange={(e) => setInputValues({ ...inputValues, [input.key]: e.target.value })}
                    placeholder={input.placeholder}
                    className="w-full h-28 rounded-xl border border-zinc-200 bg-white p-3 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 placeholder-zinc-400 shadow-sm"
                  />
                ) : input.type === 'select' ? (
                  <div className="relative">
                    <select
                      value={inputValues[input.key] || ''}
                      onChange={(e) => setInputValues({ ...inputValues, [input.key]: e.target.value })}
                      className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-3 text-xs text-zinc-900 outline-none focus:ring-1 focus:ring-violet-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 appearance-none shadow-sm cursor-pointer"
                    >
                      <option value="">Select option...</option>
                      {input.options?.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3.5 top-3.5 h-3.5 w-3.5 text-zinc-400 pointer-events-none" />
                  </div>
                ) : (
                  <input
                    type="text"
                    value={inputValues[input.key] || ''}
                    onChange={(e) => setInputValues({ ...inputValues, [input.key]: e.target.value })}
                    placeholder={input.placeholder}
                    className="w-full rounded-xl border border-zinc-200 bg-white p-3 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 placeholder-zinc-400 shadow-sm"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Output Guidelines Accordion */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-5 flex items-center gap-1.5">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-violet-100 text-xs font-black text-violet-600 dark:bg-violet-950/40 dark:text-violet-400">3</span>
            Tone & Output Style Matrix
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Tone Selector */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">Target Tone / Persona Style</label>
              <div className="relative">
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-3 text-xs text-zinc-900 outline-none focus:ring-1 focus:ring-violet-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 appearance-none cursor-pointer shadow-sm"
                >
                  {['Professional', 'Beginner Friendly', 'Executive Summary', 'Technical', 'Detailed', 'Academic', 'Creative', 'Strategic'].map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3.5 top-3.5 h-3.5 w-3.5 text-zinc-400 pointer-events-none" />
              </div>
            </div>

            {/* Format Selector */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">Output Structure Format</label>
              <div className="relative">
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                  className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-3 text-xs text-zinc-900 outline-none focus:ring-1 focus:ring-violet-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 appearance-none cursor-pointer shadow-sm"
                >
                  {['Markdown', 'Bullet Points', 'Table', 'JSON', 'Checklist', 'Report', 'Presentation', 'Email', 'Action Plan'].map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3.5 top-3.5 h-3.5 w-3.5 text-zinc-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Step 4: Advanced Prompt Engineering Frameworks */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4 flex items-center gap-1.5">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-violet-100 text-xs font-black text-violet-600 dark:bg-violet-950/40 dark:text-violet-400">4</span>
            Advanced Prompt Frameworks
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {[
              { id: 'cot', label: 'Chain of Thought Reasoning', desc: 'Forces step-by-step thinking' },
              { id: 'selfCritique', label: 'Self-Critique Protocol', desc: 'Prompts AI to evaluate and refine answers' },
              { id: 'expert', label: 'Expert-Level Standard', desc: 'Sets extreme publication-grade benchmarks' },
              { id: 'clarify', label: 'Ask Clarifying Questions', desc: 'AI queries missing parameters first' },
              { id: 'stepByStep', label: 'Structured Rationale', desc: 'Documents details behind every decision' },
              { id: 'multiApproach', label: 'Comparative Solutions', desc: 'Compares two or more methodologies' },
              { id: 'risk', label: 'Assumptions & Risk Log', desc: 'Adds dependency risk analysis' },
              { id: 'fewShot', label: 'Few-Shot Example Block', desc: 'Inject reference data structures' }
            ].map((opt) => (
              <label
                key={opt.id}
                className={`flex items-start gap-3 rounded-xl border p-3 cursor-pointer select-none transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 ${
                  advancedOptions[opt.id]
                    ? 'border-violet-500/50 bg-violet-50/10 dark:bg-violet-950/10'
                    : 'border-zinc-100 bg-white dark:border-zinc-800/80 dark:bg-zinc-900/30'
                }`}
              >
                <input
                  type="checkbox"
                  checked={advancedOptions[opt.id]}
                  onChange={(e) => setAdvancedOptions({ ...advancedOptions, [opt.id]: e.target.checked })}
                  className="mt-0.5 rounded text-violet-600 focus:ring-violet-500 border-zinc-300 dark:border-zinc-800 h-3.5 w-3.5 cursor-pointer"
                />
                <div>
                  <span className="block text-xs font-bold text-zinc-800 dark:text-zinc-200">{opt.label}</span>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-400 leading-tight">{opt.desc}</span>
                </div>
              </label>
            ))}
          </div>

          {/* Render few-shot textarea if enabled */}
          {advancedOptions.fewShot && (
            <div className="mt-4 flex flex-col gap-1.5 animate-fadeIn">
              <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">Few-Shot Training Examples</label>
              <textarea
                value={fewShotText}
                onChange={(e) => setFewShotText(e.target.value)}
                placeholder="Insert input/output target examples here:&#10;e.g.&#10;Example Input: ...&#10;Example Output: ..."
                className="w-full h-32 rounded-xl border border-zinc-200 bg-white p-3 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 placeholder-zinc-400 font-mono shadow-sm"
              />
            </div>
          )}
        </div>

        {/* Global actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleResetFields}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-xs font-bold text-zinc-700 hover:bg-zinc-100 transition-all dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            Reset All Fields
          </button>
        </div>

      </div>

      {/* Right Column: Live Output, Quality Index & Local Storage */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        
        {/* Prompt Quality Index Widget */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
          <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-5 flex items-center justify-between">
            <span>Prompt Quality Score</span>
            <span className="text-[10px] bg-violet-100 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400 px-2 py-0.5 rounded font-black">PRO INDEX</span>
          </h2>

          <div className="flex items-center gap-5 border-b border-zinc-100 dark:border-zinc-800/80 pb-5">
            {/* Score Gauge */}
            <div className="relative shrink-0 flex items-center justify-center">
              <svg className="w-20 h-20 transform -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  className="stroke-zinc-100 dark:stroke-zinc-800"
                  strokeWidth="6"
                  fill="transparent"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  className="transition-all duration-500 ease-out"
                  stroke={
                    qualityScore < 45 ? '#f43f5e' : qualityScore < 80 ? '#f59e0b' : '#10b981'
                  }
                  strokeWidth="6"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 34}`}
                  strokeDashoffset={`${2 * Math.PI * 34 * (1 - qualityScore / 100)}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-lg font-black text-zinc-900 dark:text-zinc-100 leading-none">{qualityScore}</span>
                <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest leading-none mt-0.5">pts</span>
              </div>
            </div>

            {/* Score rating summary */}
            <div>
              <h3 className="text-sm font-extrabold text-zinc-800 dark:text-zinc-200 leading-snug">
                {qualityScore < 45 ? 'Basic Draft Prompt' : qualityScore < 80 ? 'Intermediate Grade' : 'Expert Engineered'}
              </h3>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1 leading-normal">
                {qualityScore < 45 
                  ? 'Add variables or constraints to improve target precision.' 
                  : qualityScore < 80 
                    ? 'Excellent base. Activate advanced controls for specialized reasoning.' 
                    : 'Battle-tested structure ready for highly professional enterprise tasks.'}
              </p>
            </div>
          </div>

          {/* Actionable recommendations lists */}
          <div className="mt-4 space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Optimization Checklist</h4>
            {getQualityTips().map((tip, idx) => (
              <div key={idx} className="flex items-start gap-2 bg-zinc-50 dark:bg-zinc-950 p-2.5 rounded-xl border border-zinc-200/40 dark:border-zinc-800/60 text-xs">
                <AlertCircle className={`h-4 w-4 shrink-0 mt-0.5 ${qualityScore >= 90 ? 'text-emerald-500' : 'text-zinc-400'}`} />
                <div className="flex-1">
                  <p className="text-zinc-600 dark:text-zinc-400 leading-normal font-semibold">{tip.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Output Section */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/80 pb-4 mb-5">
            <div className="flex items-center gap-2">
              <Cpu className="h-5 w-5 text-violet-500" />
              <h2 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-50">Compiled Prompt</h2>
            </div>
            
            {/* Auto-improve Switch */}
            <button
              onClick={() => setIsImproved(!isImproved)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                isImproved
                  ? 'bg-violet-100 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400 ring-1 ring-violet-500/20'
                  : 'bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5" />
              {isImproved ? 'Engine: Improved' : 'Engine: Standard'}
            </button>
          </div>

          {/* Compiled prompt viewport */}
          <div className="relative">
            <textarea
              readOnly
              value={compiledPrompt}
              onClick={(e) => (e.target as HTMLTextAreaElement).select()}
              className="w-full h-80 rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-[11px] leading-relaxed text-zinc-800 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 shadow-inner"
            />
          </div>

          {/* Action grid: Copy, save, export */}
          <div className="mt-5 flex flex-wrap gap-2.5 border-t border-zinc-100 dark:border-zinc-800/80 pt-4">
            
            {/* Primary Copy Button */}
            <button
              onClick={handleCopy}
              className={`flex-1 min-w-[150px] inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-3 text-xs font-black shadow-md transition-all active:scale-[0.98] ${
                copied
                  ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                  : 'bg-violet-600 text-white shadow-violet-500/25 hover:bg-violet-500 dark:bg-violet-700 dark:hover:bg-violet-600'
              }`}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Copied to Clipboard!' : 'Copy to Clipboard'}
            </button>

            {/* Notion Formatted Copy */}
            <button
              onClick={handleCopyNotion}
              className={`inline-flex items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3.5 py-3 text-xs font-bold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 ${
                copiedNotion ? 'text-emerald-600 border-emerald-500 bg-emerald-50/10' : ''
              }`}
              title="Copy formatted with metadata codeblock for Notion docs"
            >
              {copiedNotion ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
              <span>Copy for Notion</span>
            </button>

            {/* Export Dropdown toggle */}
            <div className="relative">
              <button
                onClick={() => setShowExportDropdown(!showExportDropdown)}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3.5 py-3 text-xs font-bold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                <Download className="h-4 w-4" />
                Export
              </button>

              {showExportDropdown && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setShowExportDropdown(false)} />
                  <div className="absolute right-0 bottom-full mb-2 w-48 rounded-xl border border-zinc-200 bg-white p-1.5 shadow-xl z-20 dark:border-zinc-800 dark:bg-zinc-900">
                    <button
                      onClick={handleExportTxt}
                      className="w-full flex items-center gap-2 rounded-lg p-2.5 text-xs text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 text-left font-bold"
                    >
                      <FileText className="h-4 w-4" />
                      Save as .TXT File
                    </button>
                    <button
                      onClick={handleExportJson}
                      className="w-full flex items-center gap-2 rounded-lg p-2.5 text-xs text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 text-left font-bold"
                    >
                      <Database className="h-4 w-4" />
                      Save as Parameter JSON
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Save to Collection */}
            <button
              onClick={() => {
                setSaveTitle(`${selectedProf.name} - ${selectedTask.name}`);
                setShowSaveModal(true);
              }}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3.5 py-3 text-xs font-bold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <FolderPlus className="h-4 w-4" />
              Save Prompt
            </button>
          </div>
        </div>

        {/* LocalStorage History and Custom Collections Manager */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="flex border-b border-zinc-200 dark:border-zinc-800/80 pb-3 mb-4">
            <button
              onClick={() => setActiveTab('history')}
              className={`flex-1 pb-2 text-xs font-extrabold flex items-center justify-center gap-1.5 border-b-2 transition-all ${
                activeTab === 'history'
                  ? 'border-violet-600 text-violet-600 dark:border-violet-400 dark:text-violet-400'
                  : 'border-transparent text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300'
              }`}
            >
              <History className="h-3.5 w-3.5" />
              Build History ({historyList.length})
            </button>
            <button
              onClick={() => setActiveTab('collections')}
              className={`flex-1 pb-2 text-xs font-extrabold flex items-center justify-center gap-1.5 border-b-2 transition-all ${
                activeTab === 'collections'
                  ? 'border-violet-600 text-violet-600 dark:border-violet-400 dark:text-violet-400'
                  : 'border-transparent text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300'
              }`}
            >
              <FolderOpen className="h-3.5 w-3.5" />
              Collections ({collections.length})
            </button>
          </div>

          {/* History Tab viewport */}
          {activeTab === 'history' && (
            <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
              {historyList.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleRestorePrompt(item)}
                  className="flex items-center justify-between rounded-xl border border-zinc-100 bg-zinc-50/50 p-3 hover:bg-zinc-100/50 hover:border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:bg-zinc-800/30 cursor-pointer select-none transition-all"
                >
                  <div className="min-w-0 flex-1">
                    <span className="block text-xs font-bold text-zinc-800 dark:text-zinc-200 truncate">{item.title}</span>
                    <span className="block text-[10px] text-zinc-400 mt-0.5">
                      {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • Style: {item.style}
                    </span>
                  </div>
                  <button
                    onClick={(e) => handleDeleteHistory(item.id, e)}
                    className="p-1 text-zinc-400 hover:text-red-500 transition-colors"
                  >
                    <Trash className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}

              {historyList.length === 0 && (
                <div className="text-center py-6 text-xs text-zinc-400">
                  No prompts built in this session yet. Adjust fields to compile.
                </div>
              )}
            </div>
          )}

          {/* Collections Tab viewport */}
          {activeTab === 'collections' && (
            <div className="space-y-4">
              {/* Create new collection block */}
              <form onSubmit={handleCreateCollection} className="flex gap-2">
                <input
                  type="text"
                  placeholder="New collection name..."
                  value={newCollectionName}
                  onChange={(e) => setNewCollectionName(e.target.value)}
                  className="flex-1 rounded-xl border border-zinc-200 bg-white p-2.5 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-1 rounded-xl bg-violet-600 text-white px-3 py-2.5 text-xs font-extrabold hover:bg-violet-600 transition-colors"
                >
                  <Plus className="h-3.5 w-3.5" />
                  Create
                </button>
              </form>

              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {collections.map((coll) => {
                  const collPrompts = savedPrompts.filter(p => coll.promptIds.includes(p.id));
                  return (
                    <div key={coll.id} className="rounded-xl border border-zinc-200 bg-zinc-50/20 p-3 dark:border-zinc-800">
                      <div className="flex items-center justify-between pb-2 border-b border-zinc-100 dark:border-zinc-800">
                        <span className="text-xs font-black text-zinc-800 dark:text-zinc-200">{coll.name}</span>
                        <button
                          onClick={(e) => handleDeleteCollection(coll.id, e)}
                          className="p-1 text-zinc-400 hover:text-red-500 transition-colors"
                        >
                          <Trash className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      <div className="mt-2 space-y-1.5">
                        {collPrompts.map(p => (
                          <div
                            key={p.id}
                            onClick={() => handleRestorePrompt(p)}
                            className="flex items-center justify-between rounded-lg p-2 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/40 text-xs cursor-pointer select-none"
                          >
                            <span className="text-zinc-600 dark:text-zinc-300 truncate flex-1 pr-3">{p.title}</span>
                            <button
                              onClick={(e) => handleDeleteSavedPrompt(p.id, coll.id, e)}
                              className="text-zinc-400 hover:text-red-500 shrink-0"
                            >
                              <Trash className="h-3 w-3" />
                            </button>
                          </div>
                        ))}

                        {collPrompts.length === 0 && (
                          <span className="block text-[10px] text-zinc-400 italic py-1">Folder is empty. Click "Save Prompt" above to store.</span>
                        )}
                      </div>
                    </div>
                  );
                })}

                {collections.length === 0 && (
                  <div className="text-center py-6 text-xs text-zinc-400">
                    No custom collections created yet. Build folders to organize prompts locally.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Save Prompt Modal */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-zinc-950/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl max-w-md w-full p-6 shadow-2xl animate-scaleIn">
            <h3 className="text-sm font-black uppercase tracking-wider text-zinc-800 dark:text-zinc-100 border-b border-zinc-100 dark:border-zinc-800 pb-3 mb-4">
              Save Prompt to Collections
            </h3>

            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">Prompt Title</label>
                <input
                  type="text"
                  value={saveTitle}
                  onChange={(e) => setSaveTitle(e.target.value)}
                  className="rounded-xl border border-zinc-200 bg-white p-3 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">Target Folder / Collection (Optional)</label>
                <div className="relative">
                  <select
                    value={selectedCollectionId}
                    onChange={(e) => setSelectedCollectionId(e.target.value)}
                    className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-3 text-xs text-zinc-900 outline-none focus:ring-1 focus:ring-violet-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 appearance-none cursor-pointer"
                  >
                    <option value="">Do not place in folder</option>
                    {collections.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-3.5 h-3.5 w-3.5 text-zinc-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-2.5 border-t border-zinc-100 dark:border-zinc-800/80 pt-4">
              <button
                onClick={() => setShowSaveModal(false)}
                className="rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-xs font-bold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveToCollection}
                className="rounded-xl bg-violet-600 text-white px-5 py-2.5 text-xs font-black hover:bg-violet-600 transition-colors"
              >
                Save Prompt
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
