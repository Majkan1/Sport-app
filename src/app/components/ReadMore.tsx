"use client";

import { useState } from "react";

type ReadMoreProps = {
  text?: string | null;
  limit?: number;
};

export default function ReadMore({ text, limit = 420 }: ReadMoreProps) {
  const [expanded, setExpanded] = useState(false);

  if (!text) {
    return null;
  }

  const shouldTruncate = text.length > limit;
  const displayText =
    expanded || !shouldTruncate ? text : `${text.slice(0, limit)}...`;

  return (
    <div>
      <p className="max-w-[76ch] text-[15px] leading-[1.75] text-pitch-body">
        {displayText}
      </p>
      {shouldTruncate ? (
        <button
          type="button"
          className="mt-4 rounded-full border border-pitch-border3 px-4.5 py-2 text-[12px] font-semibold tracking-[0.14em] uppercase text-pitch-text2 transition-colors duration-200 hover:border-accent hover:text-accent"
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      ) : null}
    </div>
  );
}
