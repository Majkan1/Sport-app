"use client";

import { useState } from "react";

type ReadMoreProps = {
  text?: string | null;
  limit?: number;
};

export default function ReadMore({ text, limit = 180 }: ReadMoreProps) {
  const [expanded, setExpanded] = useState(false);

  if (!text) {
    return null;
  }

  const shouldTruncate = text.length > limit;
  const displayText = expanded || !shouldTruncate ? text : `${text.slice(0, limit)}...`;

  return (
    <div className="space-y-2">
      <p className="text-sm text-slate-600 leading-relaxed">{displayText}</p>
      {shouldTruncate ? (
        <button
          type="button"
          className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-semibold transition-colors duration-200"
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      ) : null}
    </div>
  );
}
