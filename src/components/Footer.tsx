import { useCopy } from '../i18n/CopyContext';
import { toBengaliNumerals } from '../utils/bengali';

export function Footer() {
  const { footer, locale } = useCopy();

  // Bengali numerals are right on the Bengali page and wrong on the English
  // one — "© ২০২৬" reads as a glyph, not a year, to someone reading English.
  const year = locale === 'bn'
    ? toBengaliNumerals(new Date().getFullYear())
    : String(new Date().getFullYear());

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            {/* মফস্বল is the brand mark — it stays Bengali in both locales. */}
            <a href="/" className="logo">
              <span className="mark" aria-hidden="true">ম</span>মফস্বল
            </a>
            <p>{footer.blurb}</p>
          </div>

          {footer.cols.map((col) => (
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
          <span>{footer.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
