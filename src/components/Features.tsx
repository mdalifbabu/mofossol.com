import { FEATURE_ORDER, FEATURE_VISUALS } from '../config/visuals';
import { useCopy } from '../i18n/CopyContext';
import { MicIcon } from './icons';
import { Reveal } from './Reveal';

export function Features() {
  const { features } = useCopy();

  return (
    <section className="sec" id="features">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="kicker">{features.kicker}</div>
          <h2>{features.heading}</h2>
          <p className="lead">{features.lead}</p>
        </Reveal>

        <div className="feat-grid">
          {FEATURE_ORDER.map((id) => {
            const { icon: Icon, color, soft } = FEATURE_VISUALS[id];
            const text = features.items[id];
            return (
              <Reveal className="feat" key={id}>
                <div className="fico" style={{ background: soft }}>
                  <Icon size={28} color={color} />
                </div>
                <div>
                  <h3>{text.title}</h3>
                  <p>{text.body}</p>
                  <span className="replaces" style={{ color }}>{text.replaces}</span>
                </div>
              </Reveal>
            );
          })}

          {/* Voice-first is the load-bearing promise of the product, so it gets
              the full-width slot rather than sitting in the grid. */}
          <Reveal className="feat wide">
            <div className="fico" style={{ background: '#fff', boxShadow: '0 4px 14px rgba(192,57,43,.18)' }}>
              <MicIcon />
            </div>
            <div>
              <h3>{features.voice.title}</h3>
              <p style={{ maxWidth: 640 }}>{features.voice.body}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
