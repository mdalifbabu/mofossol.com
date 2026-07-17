import { FOOTER_COLS } from '../content';
import { toBengaliNumerals } from '../utils/bengali';

export function Footer() {
  const year = toBengaliNumerals(new Date().getFullYear());

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <a href="/" className="logo">
              <span className="mark" aria-hidden="true">ম</span>মফস্বল
            </a>
            <p>
              মফস্বলের কণ্ঠ — বাংলাদেশের গ্রামের জন্য তৈরি সামাজিক যোগাযোগ। জীবনের খবর, হাট-বাজার
              আর প্রবাসের ভাই, সব এক সুতোয়।
            </p>
          </div>

          {FOOTER_COLS.map((col) => (
            <div className="foot-col" key={col.heading}>
              <h5>{col.heading}</h5>
              {col.links.map((l) => (
                <a href={l.href} key={l.label}>{l.label}</a>
              ))}
            </div>
          ))}
        </div>

        <div className="stitch brand" style={{ marginBottom: 24 }} />
        <div className="foot-bottom">
          <span>© {year} মফস্বল · mofossol.com</span>
          <span>গ্রাম মানে সমাজ 🌾</span>
        </div>
      </div>
    </footer>
  );
}
