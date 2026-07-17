import { POINT_ICONS, POINT_ORDER, ROLE_ORDER, ROLE_VISUALS } from '../config/visuals';
import { useInView } from '../hooks/useInView';
import { useCopy } from '../i18n/CopyContext';
import { VerifiedShieldIcon } from './icons';
import { Reveal } from './Reveal';

export function Trust() {
  const { trust } = useCopy();

  // The points are a real <ul>, so this one reveals via the hook directly
  // rather than the <Reveal> wrapper (which would nest a div inside the grid).
  const [listRef, listInView] = useInView<HTMLUListElement>();

  return (
    <section className="sec" id="trust">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="kicker">{trust.kicker}</div>
          <h2>
            {trust.heading.before}
            <span style={{ color: 'var(--brick)' }}>{trust.heading.accent}</span>
            {trust.heading.after}
          </h2>
          <p className="lead">{trust.lead}</p>
        </Reveal>

        <div className="trust-grid">
          <Reveal className="verified-list">
            {ROLE_ORDER.map((id) => {
              const { icon: Icon, color, soft } = ROLE_VISUALS[id];
              const text = trust.roles[id];
              return (
                <div className="vrow" key={id}>
                  <div className="vico" style={{ background: soft, color }}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <div className="vt">{text.title}</div>
                    <div className="vd">{text.desc}</div>
                  </div>
                  <span className="vcheck"><VerifiedShieldIcon /></span>
                </div>
              );
            })}
          </Reveal>

          <ul ref={listRef} className={`trust-points reveal${listInView ? ' show' : ''}`}>
            {POINT_ORDER.map((id) => {
              const Icon = POINT_ICONS[id];
              const text = trust.points[id];
              return (
                <li key={id}>
                  <span className="ti"><Icon size={16} /></span>
                  <div>
                    <h4>{text.title}</h4>
                    <p>{text.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
