import { Reveal } from './Reveal';

export function Diaspora() {
  return (
    <section className="sec diaspora" id="diaspora">
      <div className="wrap dia-grid">
        <Reveal>
          <div className="kicker">প্রবাসী সেতু</div>
          <h2>দূরে থেকেও গ্রামেই।</h2>
          <div className="flags">🇸🇦 🇦🇪 🇶🇦 🇲🇾</div>
          <p className="lead">
            প্রতিটি গ্রামের অনেক ভাই দুবাই, রিয়াদ কিংবা মালয়েশিয়ায়। তাঁদের পাঠানো টাকায় গ্রাম চলে,
            অথচ গ্রামের খবরটুকু তাঁরা দেরিতে পান। মফস্বলে তাঁরা ভাতিজার আকিকা দেখেন, বোরো ধান ওঠার
            খবর পান, জানাজায় দূর থেকে শরিক হন — আর এক ট্যাপে রাস্তা মেরামতের তহবিলে অবদান রাখেন।
          </p>
        </Reveal>

        <Reveal className="dia-card">
          <p className="dia-quote">
            "গ্রামের মুরুব্বি চাচা ইন্তেকাল করেছেন — খবরটা সাথে সাথেই পেলাম। দূর থেকে জানাজায় শরিক
            হতে পারলাম না, তবে দোয়ায় ছিলাম। আল্লাহ তাঁকে জান্নাত দান করুন।"
          </p>
          <div className="dia-who">
            <div className="ava">র</div>
            <div>
              <div className="nm">রহিম উদ্দিন</div>
              <div className="loc">🇸🇦 রিয়াদ, সৌদি আরব · চাকালমা গ্রাম</div>
            </div>
          </div>
          <div className="dia-fund">
            <div className="row">
              <span style={{ color: 'rgba(255,255,255,.75)' }}>রাস্তা মেরামত তহবিল</span>
              <span className="amt" style={{ color: 'var(--gold)' }}>৳৪২,০০০</span>
            </div>
            <div style={{ height: 6, borderRadius: 100, background: 'rgba(255,255,255,.16)', margin: '8px 0' }}>
              <div style={{ height: 6, width: '70%', borderRadius: 100, background: 'var(--gold)' }} />
            </div>
            <div className="row" style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.7)' }}>
              <span>২৩ জন দিয়েছেন</span>
              <span>৯ জন প্রবাসী থেকে</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
