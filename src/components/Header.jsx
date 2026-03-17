export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-primary/10">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl">waves</span>
          <span className="text-xl font-bold tracking-tight uppercase">
            Theta Wave <span className="text-primary">Audio</span>
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-8">
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#services">Services</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#portfolio">Portfolio</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#blog">Blog</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#resources">Resources</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">About</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#faq">FAQ</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#contact">Contact</a>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-background-dark px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,238,255,0.3)]">
          BOOK YOUR MIX
        </button>
      </nav>
    </header>
  );
}
