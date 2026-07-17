import { HERO_STATS } from '../content';
import { DownloadIcon } from './icons';
import { Noticeboard } from './Noticeboard';

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            গ্রামের জন্য সামাজিক যোগাযোগ · Bangladesh
          </span>
          <h1 className="hero-h">মফস্বলের <span className="grn">কণ্ঠ</span></h1>
          <div className="hero-en">The voice of the village</div>
          <p className="hero-sub">
            গ্রাম মানে বন্ধু তালিকা নয় — গ্রাম মানে <b style={{ color: 'var(--ink)' }}>সমাজ</b>।
            মফস্বল আপনার গ্রামের ডিজিটাল নোটিশবোর্ড, হাট-বাজার আর জীবনরেখা। জন্ম-মৃত্যু-বিয়ে,
            রক্তের ডাক আর প্রবাসের ভাই — সবাই এক সুতোয় গাঁথা।
          </p>
          <div className="hero-cta">
            <a href="#grow" className="btn btn-primary">
              <DownloadIcon />
              অ্যাপ ডাউনলোড করুন
            </a>
            <a href="#grow" className="btn btn-ghost">আপনার গ্রামে আনুন</a>
          </div>
          <div className="hero-stats">
            {HERO_STATS.map((s) => (
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
