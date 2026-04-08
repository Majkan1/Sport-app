"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Wystąpił błąd:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6 text-center p-8">
        <div className="text-5xl">⚠️</div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-gray-800">
            Coś poszło nie tak!
          </h2>
          <p className="text-sm text-gray-500 max-w-sm">
            {process.env.NODE_ENV === "development"
              ? error.message
              : "Wystąpił nieoczekiwany błąd. Spróbuj ponownie."}
          </p>
        </div>
        <button
          onClick={reset}
          className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-700 active:scale-95"
        >
          Spróbuj ponownie
        </button>
      </div>
    </div>
  );
}