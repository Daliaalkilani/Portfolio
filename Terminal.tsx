"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";

interface TerminalLine {
  type: "input" | "output" | "error";
  content: string;
}

const COMMANDS: Record<string, () => TerminalLine[]> = {
  help: () => [
    { type: "output", content: '<span class="t-green">Available commands:</span>' },
    { type: "output", content: '  <span class="t-cyan">skills</span>   — core competencies & tech stack' },
    { type: "output", content: '  <span class="t-cyan">projects</span> — featured projects' },
    { type: "output", content: '  <span class="t-cyan">awards</span>   — honors & achievements' },
    { type: "output", content: '  <span class="t-cyan">contact</span>  — get in touch' },
    { type: "output", content: '  <span class="t-cyan">about</span>    — who am I?' },
    { type: "output", content: '  <span class="t-cyan">clear</span>    — clear terminal' },
  ],
  about: () => [
    { type: "output", content: '<span class="t-purple">Dalia Al-Kilani</span> — AI / NLP Engineer' },
    { type: "output", content: "  Specializing in Arabic language models" },
    { type: "output", content: "  Fine-tuning AraBERT & MARBERT for production" },
    { type: "output", content: "  Based in Hama, Syria 🇸🇾" },
  ],
  skills: () => [
    { type: "output", content: '<span class="t-green">Skills loaded ✓</span>' },
    { type: "output", content: '  <span class="t-pink">NLP</span>       → AraBERT, MARBERT, HuggingFace, Transformers' },
    { type: "output", content: '  <span class="t-pink">ML</span>        → PyTorch, Scikit-learn, FastAPI, Flask' },
    { type: "output", content: '  <span class="t-pink">Vision</span>    → OpenCV, MediaPipe, Real-time pipelines' },
    { type: "output", content: '  <span class="t-pink">Embedded</span>  → Arduino, ESP32, Raspberry Pi' },
    { type: "output", content: '  <span class="t-pink">Languages</span> → Python, C/C++, JavaScript, PHP' },
    { type: "output", content: '  <span class="t-pink">Frontend</span>  → React, Tailwind CSS, Next.js' },
  ],
  projects: () => [
    { type: "output", content: '<span class="t-green">Projects [3 found]</span>' },
    { type: "output", content: '  <span class="t-purple">01</span> <span class="t-cyan">NLP Text Classifier</span>' },
    { type: "output", content: "     AraBERT + MARBERT → FastAPI deployment" },
    { type: "output", content: "     5-fold stratified evaluation protocol" },
    { type: "output", content: '  <span class="t-purple">02</span> <span class="t-cyan">Sign Language Translator</span>' },
    { type: "output", content: "     MediaPipe + OpenCV → real-time bidirectional" },
    { type: "output", content: "     Speech-to-text + CustomTkinter GUI" },
    { type: "output", content: '  <span class="t-purple">03</span> <span class="t-cyan">Tasharok Platform</span>' },
    { type: "output", content: "     React + Tailwind + Laravel → P2P marketplace" },
  ],
  awards: () => [
    { type: "output", content: '<span class="t-green">Honors & Awards</span>' },
    { type: "output", content: "  🏅 ICPC Africa & Arab Girls — Honorable Mention (Jul 2023)" },
    { type: "output", content: "  🥉 RFG Youth Robotics Competition — 3rd Place (Dec 2023)" },
    { type: "output", content: "  🥈 RFG Teens Robotics Competition — 2nd Place (Nov 2024)" },
    { type: "output", content: "  🥉 Startup Weekend Hama — 3rd Place (Jan 2026)" },
  ],
  contact: () => [
    { type: "output", content: '<span class="t-green">Contact info</span>' },
    { type: "output", content: "  Email    → Daliaalkelani@gmail.com" },
    { type: "output", content: "  GitHub   → github.com/Daliaalkilani" },
    { type: "output", content: "  LinkedIn → linkedin.com/in/dalia-al-kilani" },
    { type: "output", content: "  Discord  → discord.com/users/1390344535368011776" },
  ],
};

const BOOT_LINES = [
  { type: "output" as const, content: '<span class="t-green">Dalia.Portfolio OS v2.0 — booting...</span>' },
  { type: "output" as const, content: '<span class="t-muted">Loading AI modules.............. ✓</span>' },
  { type: "output" as const, content: '<span class="t-muted">Connecting NLP pipeline......... ✓</span>' },
  { type: "output" as const, content: '<span class="t-muted">Initializing terminal........... ✓</span>' },
  { type: "output" as const, content: '<span class="t-green">Ready. Type \'help\' for commands.</span>' },
];

export default function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [booting, setBooting] = useState(true);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Boot sequence
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < BOOT_LINES.length) {
        setLines((prev) => [...prev, BOOT_LINES[i]]);
        i++;
      } else {
        clearInterval(interval);
        setBooting(false);
      }
    }, 280);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (outputRef.current)
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, [lines]);

  const runCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setHistory((h) => [trimmed, ...h]);
    setHistoryIdx(-1);

    const newLines: TerminalLine[] = [
      { type: "input", content: trimmed },
    ];

    if (trimmed === "clear") {
      setLines([]);
      return;
    } else if (COMMANDS[trimmed]) {
      newLines.push(...COMMANDS[trimmed]());
    } else {
      newLines.push({
        type: "error",
        content: `<span class="t-pink">command not found: ${trimmed}</span> <span class="t-muted">— type 'help'</span>`,
      });
    }

    setLines((prev) => [...prev, ...newLines]);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const idx = historyIdx + 1;
      if (idx < history.length) {
        setHistoryIdx(idx);
        setInput(history[idx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const idx = historyIdx - 1;
      if (idx >= 0) {
        setHistoryIdx(idx);
        setInput(history[idx]);
      } else {
        setHistoryIdx(-1);
        setInput("");
      }
    }
  };

  return (
    <div
      className="rounded-2xl border border-white/10 overflow-hidden font-mono text-sm"
      style={{ background: "#0d0d14" }}
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10" style={{ background: "#131320" }}>
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-4 text-xs text-white/30">dalia@portfolio ~ terminal</span>
      </div>

      {/* Output */}
      <div
        ref={outputRef}
        className="p-4 h-72 overflow-y-auto scrollbar-thin"
        style={{ scrollbarColor: "#333 transparent" }}
      >
        <style>{`
          .t-green { color: #a6e3a1; }
          .t-cyan  { color: #89dceb; }
          .t-pink  { color: #f38ba8; }
          .t-purple{ color: #cba6f7; }
          .t-muted { color: #6c7086; }
        `}</style>

        {lines.map((line, i) => (
          <div key={i} className="leading-relaxed">
            {line.type === "input" ? (
              <div>
                <span className="text-[#cba6f7]">dalia@portfolio</span>
                <span className="text-[#6c7086]">:~$</span>{" "}
                <span className="text-[#89dceb]">{line.content}</span>
              </div>
            ) : (
              <div
                className="text-[#cdd6f4] pl-2"
                dangerouslySetInnerHTML={{ __html: line.content }}
              />
            )}
          </div>
        ))}

        {!booting && (
          <div className="flex items-center gap-1 mt-1">
            <span className="text-[#cba6f7]">dalia@portfolio</span>
            <span className="text-[#6c7086]">:~$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              className="flex-1 bg-transparent outline-none text-[#cdd6f4] ml-1 caret-[#cba6f7]"
              placeholder="type a command..."
              autoComplete="off"
              spellCheck={false}
            />
          </div>
        )}
      </div>
    </div>
  );
}
