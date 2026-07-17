import { useCopy } from '../i18n/CopyContext';
import { DownloadIcon } from './icons';
import { Noticeboard } from './Noticeboard';

export function Hero() {
  const { hero } = useCopy();

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            {hero.eyebrow}
          </span>
          <h1 className="hero-h">
            {hero.heading.lead} <span className="grn">{hero.heading.accent}</span>
          </h1>
          {/* The secondary line is always the other language — it keeps the
              two-line rhythm of the source design in both locales. */}
          <div className="hero-en">{hero.accent}</div>
          <p className="hero-sub">
            {hero.sub.lead}
            <b style={{ color: 'var(--ink)' }}>{hero.sub.bold}</b>
            {hero.sub.rest}
          </p>
          <div className="hero-cta">
            <a href="#grow" className="btn btn-primary">
              <DownloadIcon />
              {hero.ctaDownload}
            </a>
            <a href="#grow" className="btn btn-ghost">{hero.ctaBring}</a>
          </div>
          <div className="hero-stats">
            {hero.stats.map((s) => (
              <div className="st" key={s.k}>
                <div className="k">{s.k}</div>
                <div className="v">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <Noticeboard />
      </div>
    </section>
  );
}
