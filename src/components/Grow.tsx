import { useState, type FormEvent } from 'react';
import { CONTACT_EMAIL } from '../i18n';
import { useCopy } from '../i18n/CopyContext';
import { Reveal } from './Reveal';

/**
 * Anchor sign-up. There is no backend yet, so the form composes a mailto —
 * but it must still carry what the visitor typed. An empty email that drops
 * their village and number is worse than no form at all.
 */
export function Grow() {
  const { grow } = useCopy();
  const [name, setName] = useState('');
  const [village, setVillage] = useState('');
  const [phone, setPhone] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = [
      `${grow.mail.nameField}: ${name.trim() || '—'}`,
      `${grow.mail.villageField}: ${village.trim() || '—'}`,
      `${grow.mail.phoneField}: ${phone.trim() || '—'}`,
    ].join('\n');
    const subject = encodeURIComponent(grow.mail.subject);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="sec grow" id="grow">
      <div className="wrap">
        <Reveal className="grow-card">
          <div className="grow-inner">
            <div>
              <span className="pilot-tag">{grow.pilotTag}</span>
              <h2>{grow.heading.line1}<br />{grow.heading.line2}</h2>
              <p>{grow.body}</p>
            </div>

            <form className="form-card" onSubmit={onSubmit}>
              <label htmlFor="nm">{grow.form.nameLabel}</label>
              <input
                id="nm" name="name" type="text" autoComplete="name"
                placeholder={grow.form.namePlaceholder}
                value={name} onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="vil">{grow.form.villageLabel}</label>
              <input
                id="vil" name="village" type="text"
                placeholder={grow.form.villagePlaceholder}
                value={village} onChange={(e) => setVillage(e.target.value)}
              />
              <label htmlFor="ph">{grow.form.phoneLabel}</label>
              <input
                id="ph" name="phone" type="tel" autoComplete="tel"
                placeholder={grow.form.phonePlaceholder}
                value={phone} onChange={(e) => setPhone(e.target.value)}
              />
              <button type="submit" className="btn btn-gold">{grow.form.submit}</button>
              <div className="note-sm">{grow.form.note}</div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
