"use client";

import { useState } from "react";

type GateStyle = "green" | "gold" | "dark";

interface Phase {
  number: string;
  index: number;
  title: string;
  bubbleColor: string;
  dotStyle: "green" | "gold" | "dark";
  description: string;
  milestones: string[];
  gate: { label: string; style: GateStyle } | null;
}

const gateStyles: Record<GateStyle, string> = {
  green: "bg-[#E8F5EE] text-[#1A6B3A]",
  gold: "bg-[#FBF4E3] text-[#8B6914]",
  dark: "bg-[#EBEBEB] text-[#141414]",
};

const dotStyles: Record<"green" | "gold" | "dark", string> = {
  green: "bg-court-green",
  gold: "bg-[#C9A84C]",
  dark: "bg-net-silver",
};

export default function RoadmapCard({ phase }: { phase: Phase }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div id={`phase-${phase.number}`} className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm flex flex-col h-full mx-1 lg:mx-2 scroll-mt-20">
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0"
          style={{ backgroundColor: phase.bubbleColor }}
        >
          {phase.number}
        </div>
        <div className="pt-0.5 flex-1 min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-net-silver mb-0.5">
            Phase {phase.number}
          </p>
          <h3
            className="text-base font-semibold text-padel-black leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {phase.title}
          </h3>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex-shrink-0 text-xs font-semibold text-court-green hover:text-court-green-dark transition-colors pt-0.5 whitespace-nowrap"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      </div>

      <div className="h-px bg-gray-100 mb-3" />

      <p className="text-sm text-[#4A4A4A] leading-relaxed mb-3">
        {phase.description}
      </p>

      {/* Milestones — hidden until expanded */}
      {expanded && (
        <ul className="space-y-0 mb-3">
          {phase.milestones.map((m) => (
            <li
              key={m}
              className="flex items-start gap-2.5 py-1.5 border-b border-gray-50 last:border-0 text-xs text-padel-black leading-snug"
            >
              <span
                className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${dotStyles[phase.dotStyle]}`}
              />
              {m}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}
