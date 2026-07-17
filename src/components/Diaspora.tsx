import { useCopy } from '../i18n/CopyContext';
import { Reveal } from './Reveal';

/** Flags are geography, not language — identical in both locales. */
const FLAGS = '🇸🇦 🇦🇪 🇶🇦 🇲🇾';

export function Diaspora() {
  const { diaspora } = useCopy();

  return (
    <section className="sec diaspora" id="diaspora">
      <div className="wrap dia-grid">
        <Reveal>
          <div className="kicker">{diaspora.kicker}</div>
          <h2>{diaspora.heading}</h2>
          <div className="flags">{FLAGS}</div>
          <p className="lead">{diaspora.lead}</p>
        </Reveal>

        <Reveal className="dia-card">
          <p className="dia-quote">{diaspora.quote}</p>
          <div className="dia-who">
            <div className="ava">{diaspora.who.avatar}</div>
            <div>
              <div className="nm">{diaspora.who.name}</div>
              <div className="loc">{diaspora.who.loc}</div>
            </div>
          </div>
          <div className="dia-fund">
            <div className="row">
              <span style={{ color: 'rgba(255,255,255,.75)' }}>{diaspora.fund.label}</span>
              <span className="amt" style={{ color: 'var(--gold)' }}>{diaspora.fund.amount}</span>
            </div>
            <div style={{ height: 6, borderRadius: 100, background: 'rgba(255,255,255,.16)', margin: '8px 0' }}>
              <div style={{ height: 6, width: '70%', borderRadius: 100, background: 'var(--gold)' }} />
            </div>
            <div className="row" style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.7)' }}>
              <span>{diaspora.fund.donors}</span>
              <span>{diaspora.fund.fromDiaspora}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
