"use client";

import { useState } from "react";

type ReadMoreProps = {
  text?: string;
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
      <p className="text-sm text-slate-700">{displayText}</p>
      {shouldTruncate ? (
        <button
          type="button"
          className="text-blue-600 hover:underline text-sm font-medium"
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      ) : null}
    </div>
  );
}
