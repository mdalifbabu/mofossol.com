import { PILLAR_ORDER, PILLAR_VISUALS } from '../config/visuals';
import { useCopy } from '../i18n/CopyContext';
import { Reveal } from './Reveal';

export function Story() {
  const { story } = useCopy();

  return (
    <section className="sec insight" id="story">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="kicker">{story.kicker}</div>
          <h2>
            {story.heading.before}
            <span style={{ color: 'var(--brand)' }}>{story.heading.accent}</span>
            {story.heading.after}
          </h2>
          <p className="lead">{story.lead}</p>
        </Reveal>

        <div className="pillars">
          {PILLAR_ORDER.map((id) => {
            const { icon: Icon, color, soft } = PILLAR_VISUALS[id];
            const text = story.pillars[id];
            return (
              <Reveal className="pillar" key={id}>
                <div className="pico" style={{ background: soft }}>
                  <Icon size={26} color={color} />
                </div>
                <h3>{text.title}</h3>
                <p>{text.body}</p>
                <div className="en">{text.accent}</div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
