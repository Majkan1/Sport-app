
export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-slate-200 border-t-slate-900" />
        </div>
        <p className="text-base font-semibold text-slate-700">Loading...</p>
      </div>
    </div>
  );
}
