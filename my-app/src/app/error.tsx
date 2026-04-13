"use client";

export default function Error({error,reset,}: {error: Error;reset: () => void;}) {
  return (
    <div role="alert">
      <h2>{error.message}</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}