import { useEffect, useState, useCallback } from 'react';
import { Menu, X, Download } from 'lucide-react';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback((id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="wrap nav__inner">
        <a
          href="#home"
          className="nav__brand"
          onClick={(e) => { e.preventDefault(); goTo('home'); }}
        >
          KARTHI<span>S</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav__link ${active === l.id ? 'is-active' : ''}`}
              onClick={(e) => { e.preventDefault(); goTo(l.id); }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          className="btn btn-primary btn-sm nav__cta"
          href="/Karthi_S_Resume.pdf"
          download="Karthi_S_Resume.pdf"
        >
          <Download size={15} strokeWidth={2.4} /> Resume
        </a>

        <button
          className="nav__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`nav__mobile ${open ? 'is-open' : ''}`}>
        <nav className="nav__mobile-links" aria-label="Mobile">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? 'is-active' : ''}
              onClick={(e) => { e.preventDefault(); goTo(l.id); }}
            >
              {l.label}
            </a>
          ))}
          <a
            className="btn btn-primary nav__mobile-cta"
            href="/Karthi_S_Resume.pdf"
            download="Karthi_S_Resume.pdf"
          >
            <Download size={16} strokeWidth={2.4} /> Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
