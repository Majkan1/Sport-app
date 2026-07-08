"use client";
export default function SearchBar({
  value,
  onValue,
}: {
  value: string;
  onValue: (value: string) => void;
}) {
  return (
    <div className="flex justify-center mb-16">
      <div className="relative w-full max-w-160">
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 20 20"
          className="absolute left-5.5 top-1/2 -translate-y-1/2"
        >
          <circle
            cx="9"
            cy="9"
            r="6.5"
            fill="none"
            stroke="oklch(0.55 0.015 255)"
            strokeWidth="2"
          />
          <line
            x1="13.8"
            y1="13.8"
            x2="18.5"
            y2="18.5"
            stroke="oklch(0.55 0.015 255)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <input
          aria-label="Search leagues"
          className="w-full rounded-full border border-pitch-border2 bg-pitch-surface py-4.25 pr-6 pl-13 text-base text-pitch-text placeholder-pitch-faint outline-none transition-[border-color,box-shadow] duration-200 focus:border-accent focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-accent)_22%,transparent)]"
          placeholder="Search leagues..."
          value={value}
          onChange={(e) => {
            onValue(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
