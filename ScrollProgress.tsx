"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9998] h-0.5">
      <div
        className="h-full transition-[width] duration-75"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg,#ff006e,#8338ec,#00f5ff)",
        }}
      />
    </div>
  );
}
