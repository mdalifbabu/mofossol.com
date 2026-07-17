import { useState, type FormEvent } from 'react';
import { CONTACT_EMAIL } from '../content';
import { Reveal } from './Reveal';

/**
 * Anchor sign-up. There is no backend yet, so the form composes a mailto —
 * but it must still carry what the visitor typed. An empty email that drops
 * their village and number is worse than no form at all.
 */
export function Grow() {
  const [name, setName] = useState('');
  const [village, setVillage] = useState('');
  const [phone, setPhone] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = [
      `নাম: ${name.trim() || '—'}`,
      `গ্রাম ও ইউনিয়ন: ${village.trim() || '—'}`,
      `মোবাইল: ${phone.trim() || '—'}`,
    ].join('\n');
    const subject = encodeURIComponent('আমার গ্রামে মফস্বল');
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="sec grow" id="grow">
      <div className="wrap">
        <Reveal className="grow-card">
          <div className="grow-inner">
            <div>
              <span className="pilot-tag">🌾 পাইলট · চাকালমা গ্রাম দিয়ে শুরু</span>
              <h2>একটি গ্রাম দিয়ে শুরু।<br />পরের গ্রাম আপনারটা?</h2>
              <p>
                মফস্বল একসাথে হাজারো গ্রামে ছড়ানোর চেষ্টা করে না — একটা গ্রামে গভীরভাবে কাজ করে,
                তারপর পাশের গ্রামে। আপনি যদি আপনার গ্রামের একজন উদ্যোগী মানুষ হন — ইউপি সদস্য,
                শিক্ষক, দোকানদার বা তরুণ — আপনার গ্রামে মফস্বল আনতে সাহায্য করুন।
              </p>
            </div>

            <form className="form-card" onSubmit={onSubmit}>
              <label htmlFor="nm">আপনার নাম</label>
              <input
                id="nm" name="name" type="text" autoComplete="name"
                placeholder="যেমন: করিম উদ্দিন"
                value={name} onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="vil">গ্রাম ও ইউনিয়ন</label>
              <input
                id="vil" name="village" type="text"
                placeholder="যেমন: চাকালমা, সদর"
                value={village} onChange={(e) => setVillage(e.target.value)}
              />
              <label htmlFor="ph">মোবাইল নম্বর</label>
              <input
                id="ph" name="phone" type="tel" autoComplete="tel"
                placeholder="০১XXX-XXXXXX"
                value={phone} onChange={(e) => setPhone(e.target.value)}
              />
              <button type="submit" className="btn btn-gold">গ্রামের অ্যাংকর হন</button>
              <div className="note-sm">অথবা সরাসরি অ্যাপ ডাউনলোড করুন — শীঘ্রই আসছে</div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
