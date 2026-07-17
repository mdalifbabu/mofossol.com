import { FEATURES } from '../content';
import { MicIcon } from './icons';
import { Reveal } from './Reveal';

export function Features() {
  return (
    <section className="sec" id="features">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="kicker">যা যা করতে পারবেন</div>
          <h2>গ্রামের প্রয়োজনে তৈরি।</h2>
          <p className="lead">
            প্রতিটি ফিচার এসেছে গ্রামের বাস্তবতা থেকে — নতুন কিছু শেখানোর জন্য নয়, বরং যা আপনি
            ইতিমধ্যে করেন, তাকে সহজ করার জন্য।
          </p>
        </Reveal>

        <div className="feat-grid">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <Reveal className="feat" key={f.title}>
                <div className="fico" style={{ background: f.soft }}>
                  <Icon size={28} color={f.color} />
                </div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                  <span className="replaces" style={{ color: f.color }}>{f.replaces}</span>
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
              <h3>কণ্ঠে পোস্ট করুন — লিখতে না জানলেও চলবে</h3>
              <p style={{ maxWidth: 640 }}>
                গ্রামের অনেকেই লিখতে-পড়তে স্বচ্ছন্দ নন, বিশেষ করে মুরুব্বি আর মা-খালারা। মাইকে চাপ
                দিয়ে বলুন, গ্রামের সবাই শুনবে — ঠিক যেভাবে মুখে মুখে খবর ছড়ায়।
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
