import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../content';
import { MenuIcon } from './icons';

export function Nav() {
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
          <nav className="nav-links" aria-label="প্রধান মেনু">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
            <a href="#grow" className="btn btn-primary" style={{ padding: '10px 20px' }}>
              অ্যাপ নিন
            </a>
          </nav>
          <button
            className="hamburger"
            aria-label="মেনু"
            aria-expanded={open}
            aria-controls="mm"
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${open ? ' open' : ''}`} id="mm">
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#grow" className="btn btn-primary" onClick={() => setOpen(false)}>
          অ্যাপ ডাউনলোড করুন
        </a>
      </div>
    </>
  );
}
