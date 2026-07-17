import { PILLARS } from '../content';
import { Reveal } from './Reveal';

export function Story() {
  return (
    <section className="sec insight" id="story">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="kicker">যে সত্যের ওপর তৈরি</div>
          <h2>একটা গ্রাম মানুষের <span style={{ color: 'var(--brand)' }}>তালিকা</span> নয়।</h2>
          <p className="lead">
            ফেসবুক বানানো হয়েছিল ব্যক্তির জন্য — আমার প্রোফাইল, আমার বন্ধু। কিন্তু গ্রাম চলে সমাজে:
            দায়িত্ব, সম্মান আর ভাগাভাগি করা পরিচয়ে। যা মসজিদের মাইকে ঘোষণা হয়, যা মুখে মুখে ছড়ায় —
            সেটাই গ্রামের আসল খবর। মফস্বল ঠিক সেই জিনিসটার জন্য তৈরি।
          </p>
        </Reveal>

        <div className="pillars">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <Reveal className="pillar" key={p.title}>
                <div className="pico" style={{ background: p.soft }}>
                  <Icon size={26} color={p.color} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <div className="en">{p.en}</div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
