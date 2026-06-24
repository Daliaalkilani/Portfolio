"use client";

import { useEffect, useState, useRef } from "react";

const CHARS = "アイウエオカキクケコABCDEFGHIJKLMNOP0123456789@#$%&*";

interface GlitchTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function GlitchText({ text, className = "", delay = 0 }: GlitchTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let iteration = 0;
      const totalSteps = text.length * 3;

      const interval = setInterval(() => {
        setDisplayed(
          text
            .split("")
            .map((char, idx) => {
              if (char === " ") return " ";
              if (idx < Math.floor(iteration / 3)) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        iteration++;
        if (iteration >= totalSteps) {
          clearInterval(interval);
          setDisplayed(text);
          setDone(true);
        }
      }, 40);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay]);

  return (
    <span
      className={`font-mono ${done ? "font-sans" : ""} ${className}`}
      style={{ transition: "font-family 0.3s" }}
    >
      {displayed || text.replace(/./g, "█")}
    </span>
  );
}
