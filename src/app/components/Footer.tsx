export default function Footer() {
  return (
    <footer className="mt-auto py-7 border-t border-pitch-line">
      <div className="mx-auto max-w-300 px-8 flex justify-between items-center gap-4">
        <p className="text-[13px] text-pitch-faint">
          © {new Date().getFullYear()} Created by{" "}
          <span className="font-semibold text-pitch-body">
            Mikołaj Michalak
          </span>
        </p>
        <p className="text-[11px] tracking-[0.16em] uppercase text-pitch-faintest">
          Data · TheSportsDB
        </p>
      </div>
    </footer>
  );
}
