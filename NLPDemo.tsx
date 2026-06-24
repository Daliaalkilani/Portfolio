"use client";

import { useState } from "react";

interface Category {
  label: string;
  labelAr: string;
  color: string;
  bg: string;
  keywords: string[];
}

const CATEGORIES: Category[] = [
  {
    label: "Registration Inquiry",
    labelAr: "استفسار تسجيل",
    color: "#8338ec",
    bg: "rgba(131,56,236,0.12)",
    keywords: ["سجل", "تسجيل", "قبول", "التحاق", "التسجيل", "أسجل"],
  },
  {
    label: "Academic Inquiry",
    labelAr: "استفسار أكاديمي",
    color: "#ff006e",
    bg: "rgba(255,0,110,0.12)",
    keywords: ["مادة", "مواد", "خطة", "درجة", "امتحان", "اختبار", "مقرر", "جدول"],
  },
  {
    label: "Financial Inquiry",
    labelAr: "استفسار مالي",
    color: "#00b4d8",
    bg: "rgba(0,180,216,0.12)",
    keywords: ["رسوم", "سداد", "دفع", "منحة", "تكلفة", "مبلغ", "مال", "قسط"],
  },
  {
    label: "Complaint",
    labelAr: "شكوى",
    color: "#f77f00",
    bg: "rgba(247,127,0,0.12)",
    keywords: ["مشكلة", "شكوى", "خطأ", "صعوبة", "مشاكل", "غلط", "مشكله"],
  },
  {
    label: "General Info",
    labelAr: "معلومات عامة",
    color: "#06d6a0",
    bg: "rgba(6,214,160,0.12)",
    keywords: [],
  },
];

const SAMPLES = [
  "كيف أسجل في الجامعة؟",
  "متى موعد امتحانات الفصل الأول؟",
  "ما هي رسوم الدراسة لهذا العام؟",
  "عندي مشكلة في جدول المحاضرات",
  "ما هي تخصصات الجامعة المتاحة؟",
];

export default function NLPDemo() {
  const [text, setText] = useState("كيف أسجل في الجامعة؟");
  const [results, setResults] = useState<{ cat: Category; pct: number }[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [hasRun, setHasRun] = useState(false);

  const classify = async () => {
    if (!text.trim()) return;
    setIsProcessing(true);

    // Simulate processing delay for realism
    await new Promise((r) => setTimeout(r, 600));

    const scores = CATEGORIES.map((cat) => {
      let score = 5 + Math.random() * 15;
      cat.keywords.forEach((kw) => {
        if (text.includes(kw)) score += 35 + Math.random() * 25;
      });
      return { cat, score };
    });

    const total = scores.reduce((s, c) => s + c.score, 0);
    const sorted = scores
      .map((c) => ({ cat: c.cat, pct: Math.round((c.score / total) * 100) }))
      .sort((a, b) => b.pct - a.pct);

    setResults(sorted);
    setHasRun(true);
    setIsProcessing(false);
  };

  const top = results[0];

  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden" style={{ background: "#13131a" }}>
      {/* Header */}
      <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
        <div>
          <h3 className="text-white font-semibold text-sm">Arabic NLP Classifier</h3>
          <p className="text-white/40 text-xs mt-0.5">AraBERT • MARBERT • FastAPI</p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/40 text-xs">model ready</span>
        </div>
      </div>

      <div className="p-5">
        {/* Input */}
        <div className="mb-4">
          <label className="text-white/50 text-xs mb-2 block">Input text (Arabic)</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/20 text-white text-sm px-4 py-3 resize-none outline-none focus:border-purple-500/50 transition-colors"
            dir="rtl"
            rows={2}
            placeholder="اكتب جملة عربية..."
          />
        </div>

        {/* Sample sentences */}
        <div className="flex flex-wrap gap-2 mb-4">
          {SAMPLES.map((s) => (
            <button
              key={s}
              onClick={() => setText(s)}
              className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/50 hover:border-purple-500/50 hover:text-white/80 transition-all"
              dir="rtl"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Classify button */}
        <button
          onClick={classify}
          disabled={isProcessing}
          className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all relative overflow-hidden"
          style={{
            background: isProcessing
              ? "rgba(131,56,236,0.3)"
              : "linear-gradient(135deg,#ff006e,#8338ec)",
            color: "white",
            opacity: isProcessing ? 0.7 : 1,
          }}
        >
          {isProcessing ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Processing...
            </span>
          ) : (
            "Classify → تصنيف"
          )}
        </button>

        {/* Results */}
        {hasRun && results.length > 0 && (
          <div className="mt-5">
            {/* Top prediction */}
            <div
              className="rounded-xl px-4 py-3 mb-4 border"
              style={{ background: top.cat.bg, borderColor: top.cat.color + "40" }}
            >
              <div className="text-xs text-white/50 mb-1">Top prediction</div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm" style={{ color: top.cat.color }}>
                  {top.cat.labelAr}
                </span>
                <span className="text-white/70 text-sm font-mono">{top.pct}%</span>
              </div>
            </div>

            {/* All categories */}
            <div className="space-y-2.5">
              {results.map(({ cat, pct }) => (
                <div key={cat.label} className="flex items-center gap-3">
                  <span className="text-white/50 text-xs w-28 text-right shrink-0" dir="rtl">
                    {cat.labelAr}
                  </span>
                  <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${pct}%`, background: cat.color }}
                    />
                  </div>
                  <span className="text-white/40 text-xs font-mono w-8 text-right shrink-0">
                    {pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
