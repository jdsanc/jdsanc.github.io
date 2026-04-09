import { Sun, Moon, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark') ||
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);

    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-sm border-b border-outline-variant">
      <nav className="flex justify-end items-center max-w-5xl mx-auto px-6 h-16">
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide uppercase">
          <a className="transition-colors border-b border-accent-blue text-primary hover:text-accent-blue" href="#">About</a>
          <a className="transition-colors text-secondary hover:text-accent-blue" href="#">Publications</a>
          <a className="transition-colors text-secondary hover:text-accent-blue" href="#">Projects</a>
          <a className="transition-colors text-secondary hover:text-accent-blue" href="#">CV</a>
          <button onClick={toggleTheme} className="ml-4 text-secondary hover:text-accent-blue transition-colors" aria-label="Toggle theme">
            {isDark ? <Moon size={20} strokeWidth={1.5} /> : <Sun size={20} strokeWidth={1.5} />}
          </button>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="text-secondary hover:text-accent-blue transition-colors" aria-label="Toggle theme">
            {isDark ? <Moon size={20} strokeWidth={1.5} /> : <Sun size={20} strokeWidth={1.5} />}
          </button>
          <button className="text-primary hover:text-accent-blue transition-colors" aria-label="Menu">
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </nav>
    </header>
  );
}
