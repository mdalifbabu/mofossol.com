import { useEffect, useState } from 'react';
import { useCopy } from '../i18n/CopyContext';
import { MenuIcon } from './icons';

/**
 * The language switch is a real anchor to the other locale's URL, not a state
 * toggle — /en/ has to be linkable, shareable, and crawlable on its own.
 */
function LangSwitch({ className = '' }: { className?: string }) {
  const { langSwitch } = useCopy();
  return (
    <a
      className={`lang-switch${className ? ' ' + className : ''}`}
      href={langSwitch.href}
      hrefLang={langSwitch.href === '/' ? 'bn' : 'en'}
      aria-label={langSwitch.ariaLabel}
    >
      {langSwitch.label}
    </a>
  );
}

export function Nav() {
  const { nav, a11y } = useCopy();
  const [open, setOpen] = useState(false);

  // Escape closes the menu; body scroll is locked while it covers the page.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header>
        <div className="wrap nav">
          <a href="/" className="logo">
            <span className="mark" aria-hidden="true">ম</span>মফস্বল
          </a>
          <nav className="nav-links" aria-label={a11y.mainMenu}>
            {nav.links.map((l) => (
              <a key={l.label} href={l.href}>{l.label}</a>
            ))}
            <LangSwitch />
            <a href="#grow" className="btn btn-primary" style={{ padding: '10px 20px' }}>
              {nav.getApp}
            </a>
          </nav>
          <div className="nav-mobile-side">
            <LangSwitch />
            <button
              className="hamburger"
              aria-label={a11y.menuButton}
              aria-expanded={open}
              aria-controls="mm"
              onClick={() => setOpen((v) => !v)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${open ? ' open' : ''}`} id="mm">
        {nav.links.map((l) => (
          <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#grow" className="btn btn-primary" onClick={() => setOpen(false)}>
          {nav.downloadApp}
        </a>
      </div>
    </>
  );
}
