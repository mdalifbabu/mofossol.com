import { TRUST_POINTS, VERIFIED_ROWS } from '../content';
import { useInView } from '../hooks/useInView';
import { VerifiedShieldIcon } from './icons';
import { Reveal } from './Reveal';

export function Trust() {
  // The points are a real <ul>, so this one reveals via the hook directly
  // rather than the <Reveal> wrapper (which would nest a div inside the grid).
  const [listRef, listInView] = useInView<HTMLUListElement>();

  return (
    <section className="sec" id="trust">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="kicker">নিরাপত্তা ও দায়িত্ব</div>
          <h2>গুজব নয়, <span style={{ color: 'var(--brick)' }}>সত্য</span>।</h2>
          <p className="lead">
            গ্রামের সাথে সরাসরি জড়িত একটা প্ল্যাটফর্ম মানুষকে যেমন কাছে আনে, তেমনি গুজব দ্রুত
            ছড়ানোর ঝুঁকিও বাড়ায়। তাই মফস্বল প্রথম দিন থেকেই নিরাপত্তাকে ফিচার নয়, দায়িত্ব হিসেবে
            নিয়েছে।
          </p>
        </Reveal>

        <div className="trust-grid">
          <Reveal className="verified-list">
            {VERIFIED_ROWS.map((r) => {
              const Icon = r.icon;
              return (
                <div className="vrow" key={r.title}>
                  <div className="vico" style={{ background: r.soft, color: r.color }}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <div className="vt">{r.title}</div>
                    <div className="vd">{r.desc}</div>
                  </div>
                  <span className="vcheck"><VerifiedShieldIcon /></span>
                </div>
              );
            })}
          </Reveal>

          <ul ref={listRef} className={`trust-points reveal${listInView ? ' show' : ''}`}>
            {TRUST_POINTS.map((p) => {
              const Icon = p.icon;
              return (
                <li key={p.title}>
                  <span className="ti"><Icon size={16} /></span>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.body}</p>
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
