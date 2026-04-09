export function Footer() {
  return (
    <footer className="w-full pt-20 pb-12 border-t border-outline-variant bg-surface">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-end items-center text-[11px] font-bold uppercase tracking-[0.2em] text-secondary/60">
        <div className="flex gap-8 mt-6 md:mt-0">
          <a className="hover:text-accent-blue transition-colors" href="#">GitHub</a>
          <a className="hover:text-accent-blue transition-colors" href="#">Google Scholar</a>
          <a className="hover:text-accent-blue transition-colors" href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
