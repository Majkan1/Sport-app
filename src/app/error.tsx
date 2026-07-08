"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      role="alert"
      className="flex min-h-[60vh] flex-1 items-center justify-center px-6"
    >
      <div className="w-full max-w-md rounded-2xl border border-pitch-border bg-pitch-surface p-8 text-center">
        <h2 className="font-display text-4xl font-bold uppercase tracking-[0.02em]">
          Oops!
        </h2>
        <p className="mt-2 text-sm text-pitch-muted">Something went wrong</p>
        <p className="mt-6 rounded-[10px] border border-red-500/25 bg-red-500/10 p-3.5 text-[13px] font-semibold text-red-400">
          We could not load the data. Please check your connection and try
          again.
        </p>
        <button
          onClick={reset}
          className="mt-6 w-full rounded-full bg-accent px-6 py-2.5 text-[14px] font-semibold text-accent-ink transition-[filter] duration-200 hover:brightness-110"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
