import { useInView } from '../hooks/useInView';
import { useCopy } from '../i18n/CopyContext';
import { BadgeCheckIcon } from './icons';

/**
 * The hero signature: four village notices pinned at angles, dealt in one
 * after another as the board scrolls into view. Positions and rotations live
 * in styles.css (.n1–.n4, .board.in) — this only toggles the trigger class.
 */
export function Noticeboard() {
  const { board } = useCopy();
  const [ref, inView] = useInView<HTMLDivElement>(0.2);

  return (
    <div ref={ref} className={`board${inView ? ' in' : ''}`} id="board">
      <div className="note n1">
        <div className="bar" style={{ background: 'var(--brick)' }} />
        <div className="pad">
          <div className="top">
            <span className="chip" style={{ background: 'var(--brick-soft)', color: 'var(--brick)' }}>
              {board.blood.chip}
            </span>
            <span className="badge"><BadgeCheckIcon /> {board.blood.badge}</span>
          </div>
          <div className="bloodbig">
            <div className="bg">{board.blood.group}</div>
            <div>
              <div className="nm" style={{ color: 'var(--brick)' }}>{board.blood.title}</div>
              <div style={{ fontSize: '.8rem', color: 'var(--muted)' }}>{board.blood.detail}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="note n2">
        <div className="bar" style={{ background: 'var(--slate)' }} />
        <div className="pad">
          <div className="top">
            <span className="chip" style={{ background: 'var(--slate-soft)', color: 'var(--slate)' }}>
              {board.death.chip}
            </span>
            <span className="badge">{board.death.badge}</span>
          </div>
          <p className="msg">{board.death.msg}</p>
        </div>
      </div>

      <div className="note n3">
        <div className="bar" style={{ background: 'var(--gold)' }} />
        <div className="pad">
          <div className="top">
            <span className="chip" style={{ background: 'var(--gold-soft)', color: 'var(--gold)' }}>
              {board.wedding.chip}
            </span>
          </div>
          <div className="who">
            <div className="ava" style={{ background: 'var(--gold-soft)', color: 'var(--gold)' }}>
              {board.wedding.avatar}
            </div>
            <div>
              <div className="nm">{board.wedding.name}</div>
              <div style={{ fontSize: '.78rem', color: 'var(--faint)' }}>{board.wedding.time}</div>
            </div>
          </div>
          <p className="msg" style={{ marginTop: 9 }}>{board.wedding.msg}</p>
        </div>
      </div>

      <div className="note n4">
        <div className="bar" style={{ background: 'var(--brand)' }} />
        <div className="pad">
          <div className="top">
            <span className="chip" style={{ background: 'var(--brand-soft)', color: 'var(--brand)' }}>
              {board.fund.chip}
            </span>
          </div>
          <div className="nm" style={{ marginBottom: 4 }}>{board.fund.title}</div>
          <div className="prog"><i style={{ width: '70%' }} /></div>
          <div
            className="row"
            style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.8rem', color: 'var(--muted)' }}
          >
            <span>
              <b style={{ color: 'var(--brand)' }}>{board.fund.raised}</b> / {board.fund.goal}
            </span>
            <span>{board.fund.diaspora}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
