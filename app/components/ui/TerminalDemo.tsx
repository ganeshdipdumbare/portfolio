"use client";

import { useEffect, useState, useRef } from "react";

interface TerminalLine {
  text: string;
  type: "input" | "info" | "success" | "warning" | "error" | "code";
}

const TERMINAL_SCRIPTS: TerminalLine[][] = [
  // Script 1: Initializing & Indexing Multi-Repo Codebases
  [
    { text: "ganeshdip@research-node-1:~$ ai-research-engine --init --repos=all", type: "input" },
    { text: "⚡ scanning workspace directories for available repositories...", type: "info" },
    { text: "📂 indexing repo-1: 'einvoice-core' (Golang) ... 42 source files active", type: "code" },
    { text: "📂 indexing repo-2: 'auth-gateway' (Golang) ... 28 source files active", type: "code" },
    { text: "📂 indexing repo-3: 'research-rag-agent' (Python) ... 15 source files active", type: "code" },
    { text: "⚙ running semantic ast dependency resolver...", type: "info" },
    { text: "✔ multi-repo indexes synchronized. 1.2M tokens mapped to vector storage.", type: "success" },
    { text: "🚀 shared context cache loaded. research system ready.", type: "success" },
  ],
  // Script 2: Multi-Repo Code Graph & Semantic Query Tracing
  [
    { text: "ganeshdip@research-node-1:~$ ai-research-engine --analyze --query='trace user session'", type: "input" },
    { text: "🧠 loading deepseek-coder reasoning model (quantized context)...", type: "info" },
    { text: "🔍 tracing cross-repository API boundaries...", type: "info" },
    { text: "» matched: HTTP router [einvoice-core/client.go:82] -> invoke gRPC", type: "code" },
    { text: "» target: gRPC handler [auth-gateway/session.proto:14] resolved", type: "code" },
    { text: "» token flow: encrypt(user_id) -> validate_session -> redis_cache_check", type: "code" },
    { text: "✔ compiled execution paths. cross-repo semantic matches: 100% matched.", type: "success" },
  ],
  // Script 3: Cross-Repo Autonomous Refactoring & Integration Testing
  [
    { text: "ganeshdip@research-node-1:~$ ai-research-engine --refactor --issue='upgrade grpc-proto'", type: "input" },
    { text: "🤖 autonomous research agent launched (sync mode)...", type: "info" },
    { text: "● checking dependency compatibility in 'auth-gateway/go.mod'...", type: "info" },
    { text: "⚠️ conflict: upgrade to grpc v1.62 breaks signatures in 'einvoice-core'!", type: "warning" },
    { text: "🧠 running code refactoring agent to rewrite call sites...", type: "info" },
    { text: "✔ refactored: einvoice-core/grpc_client.go (updated dial options)", type: "success" },
    { text: "✔ verified: auth-gateway build passed. einvoice-core integration tests passed.", type: "success" },
    { text: "🚀 generated cross-repo pull-requests: PR-422 & PR-183 automatically.", type: "success" },
    { text: "✨ multi-repo synchronization completed successfully. no code broken.", type: "success" },
  ]
];

export function TerminalDemo() {
  const [currentScriptIndex, setCurrentScriptIndex] = useState(0);
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [activeLineIndex, setActiveLineIndex] = useState(0);
  const [activeCharIndex, setActiveCharIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset terminal when script index changes
    setLines([]);
    setActiveLineIndex(0);
    setActiveCharIndex(0);
  }, [currentScriptIndex]);

  useEffect(() => {
    const script = TERMINAL_SCRIPTS[currentScriptIndex];
    if (activeLineIndex >= script.length) {
      // Completed current script, wait and switch to next
      const timer = setTimeout(() => {
        setCurrentScriptIndex((prev) => (prev + 1) % TERMINAL_SCRIPTS.length);
      }, 5500);
      return () => clearTimeout(timer);
    }

    const currentLine = script[activeLineIndex];

    if (currentLine.type === "input") {
      // Animate typing for commands
      if (activeCharIndex < currentLine.text.length) {
        const timer = setTimeout(() => {
          setActiveCharIndex((prev) => prev + 1);
          
          // Update the current line typing
          setLines((prev) => {
            const copy = [...prev];
            if (copy[activeLineIndex]) {
              copy[activeLineIndex] = {
                ...currentLine,
                text: currentLine.text.substring(0, activeCharIndex + 1),
              };
            } else {
              copy.push({
                ...currentLine,
                text: currentLine.text.substring(0, 1),
              });
            }
            return copy;
          });
        }, 45);
        return () => clearTimeout(timer);
      } else {
        // Typing finished, move to next line
        const timer = setTimeout(() => {
          setActiveLineIndex((prev) => prev + 1);
          setActiveCharIndex(0);
        }, 400);
        return () => clearTimeout(timer);
      }
    } else {
      // Instantly print info, error, success, code lines with slight operational lag
      const timer = setTimeout(() => {
        setLines((prev) => [...prev, currentLine]);
        setActiveLineIndex((prev) => prev + 1);
      }, 150 + Math.random() * 250);
      return () => clearTimeout(timer);
    }
  }, [currentScriptIndex, activeLineIndex, activeCharIndex]);

  // Scroll to bottom on updates
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines]);

  const getLineColor = (type: TerminalLine["type"]) => {
    switch (type) {
      case "input":
        return "text-midground font-bold";
      case "info":
        return "text-midground/60";
      case "success":
        return "text-yellow-hl font-semibold";
      case "warning":
        return "text-red-400";
      case "error":
        return "text-red-400";
      case "code":
        return "text-midground/80 font-mono";
      default:
        return "text-midground";
    }
  };

  return (
    <div className="w-full border-4 border-double border-midground/25 bg-[#041c1c]/40 dark:bg-background/40 font-mono text-left shadow-2xl relative select-none">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-midground/15 px-4 py-2.5 bg-[#041c1c]/80 dark:bg-background/80 backdrop-blur-sm">
        <div className="flex gap-2">
          <span className="size-2 rounded-full bg-midground/50"></span>
          <span className="size-2 rounded-full bg-midground/30"></span>
          <span className="size-2 rounded-full bg-midground/15"></span>
        </div>
        <span className="text-[10px] tracking-widest text-midground/40 uppercase">
          berlin-node-1 • virtual-session
        </span>
      </div>

      {/* Terminal Display */}
      <div
        ref={containerRef}
        className="h-80 overflow-y-auto px-4 py-3 text-[11px] leading-[1.8] normal-case bg-black/10 scrollbar-thin scrollbar-thumb-current"
      >
        {lines.map((line, idx) => (
          <div key={idx} className={getLineColor(line.type)}>
            {line.text}
          </div>
        ))}
        {/* Blinking Cursor at active line */}
        {activeLineIndex < TERMINAL_SCRIPTS[currentScriptIndex].length && (
          <div className="inline-flex items-center">
            {TERMINAL_SCRIPTS[currentScriptIndex][activeLineIndex].type === "input" && (
              <span className="blink dither w-[1ch] h-[1.2em] bg-midground ml-0.5 mt-0.5"></span>
            )}
          </div>
        )}
      </div>
      
      {/* Absolute overlay tag */}
      <div className="absolute right-4 bottom-3 z-10 px-2 py-0.5 bg-midground/10 border border-midground/20 text-[9px] tracking-widest text-yellow-hl font-pixel">
        RUNNING DEMO
      </div>
    </div>
  );
}
