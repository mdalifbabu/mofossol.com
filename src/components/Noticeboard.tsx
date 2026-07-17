import { useInView } from '../hooks/useInView';
import { BadgeCheckIcon } from './icons';

/**
 * The hero signature: four village notices pinned at angles, dealt in one
 * after another as the board scrolls into view. Positions and rotations live
 * in styles.css (.n1–.n4, .board.in) — this only toggles the trigger class.
 */
export function Noticeboard() {
  const [ref, inView] = useInView<HTMLDivElement>(0.2);

  return (
    <div ref={ref} className={`board${inView ? ' in' : ''}`} id="board">
      <div className="note n1">
        <div className="bar" style={{ background: 'var(--brick)' }} />
        <div className="pad">
          <div className="top">
            <span className="chip" style={{ background: 'var(--brick-soft)', color: 'var(--brick)' }}>
              🩸 রক্ত
            </span>
            <span className="badge"><BadgeCheckIcon /> ইউপি সদস্য</span>
          </div>
          <div className="bloodbig">
            <div className="bg">O+</div>
            <div>
              <div className="nm" style={{ color: 'var(--brick)' }}>জরুরি রক্ত দরকার</div>
              <div style={{ fontSize: '.8rem', color: 'var(--muted)' }}>
                সদর হাসপাতাল · আজ রাতেই ২ ব্যাগ
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="note n2">
        <div className="bar" style={{ background: 'var(--slate)' }} />
        <div className="pad">
          <div className="top">
            <span className="chip" style={{ background: 'var(--slate-soft)', color: 'var(--slate)' }}>
              মৃত্যু সংবাদ
            </span>
            <span className="badge">ইমাম ✓</span>
          </div>
          <p className="msg">
            ইন্না লিল্লাহি ওয়া ইন্না ইলাইহি রাজিউন। মরহুম আব্দুল জলিল (৭৫) ইন্তেকাল করেছেন।
            জানাজা বাদ যোহর, বড় মসজিদ মাঠে।
          </p>
        </div>
      </div>

      <div className="note n3">
        <div className="bar" style={{ background: 'var(--gold)' }} />
        <div className="pad">
          <div className="top">
            <span className="chip" style={{ background: 'var(--gold-soft)', color: 'var(--gold)' }}>
              ✨ বিবাহ
            </span>
          </div>
          <div className="who">
            <div className="ava" style={{ background: 'var(--gold-soft)', color: 'var(--gold)' }}>স</div>
            <div>
              <div className="nm">সোলায়মান হক</div>
              <div style={{ fontSize: '.78rem', color: 'var(--faint)' }}>গতকাল</div>
            </div>
          </div>
          <p className="msg" style={{ marginTop: 9 }}>
            শাহিনের বিয়ে আগামী শুক্রবার — গ্রামের সবাইকে দাওয়াত রইল!
          </p>
        </div>
      </div>

      <div className="note n4">
        <div className="bar" style={{ background: 'var(--brand)' }} />
        <div className="pad">
          <div className="top">
            <span className="chip" style={{ background: 'var(--brand-soft)', color: 'var(--brand)' }}>
              তহবিল
            </span>
          </div>
          <div className="nm" style={{ marginBottom: 4 }}>রাস্তা মেরামত তহবিল</div>
          <div className="prog"><i style={{ width: '70%' }} /></div>
          <div
            className="row"
            style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.8rem', color: 'var(--muted)' }}
          >
            <span><b style={{ color: 'var(--brand)' }}>৳৪২,০০০</b> / ৳৬০,০০০</span>
            <span>✈️ ৯ জন প্রবাসী</span>
          </div>
        </div>
      </div>
    </div>
  );
}
