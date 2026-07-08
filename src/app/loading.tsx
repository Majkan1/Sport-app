export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-1 items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <div className="h-11 w-11 animate-spin rounded-full border-3 border-pitch-line border-t-accent" />
        <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-pitch-muted">
          Loading
        </p>
      </div>
    </div>
  );
}
