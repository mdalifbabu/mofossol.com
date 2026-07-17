/**
 * The shape of every user-facing string on the page.
 *
 * Both locales must satisfy this type, so a string that exists in Bengali but
 * not English is a compile error rather than a Bengali word leaking onto the
 * English page. Add copy here first, then to bn.ts and en.ts.
 */

export type Locale = 'bn' | 'en';

export type PillarId = 'geography' | 'lifeEvents' | 'trust';
export type FeatureId = 'noticeboard' | 'blood' | 'bazar' | 'govt';
export type RoleId = 'upMember' | 'imam' | 'teacher' | 'doctor';
export type PointId = 'rumour' | 'privacy' | 'anonymity';

/** A heading split so one word can carry the accent colour. */
export type SplitHeading = {
  before: string;
  accent: string;
  after: string;
};

export type Copy = {
  locale: Locale;

  /** Where the language switch sends the visitor, and what it's called. */
  langSwitch: {
    /** Label for the *other* language, in that other language. */
    label: string;
    href: string;
    ariaLabel: string;
  };

  a11y: {
    skipToMain: string;
    mainMenu: string;
    menuButton: string;
  };

  nav: {
    links: { href: string; label: string }[];
    getApp: string;
    downloadApp: string;
  };

  hero: {
    eyebrow: string;
    heading: { lead: string; accent: string };
    /** The secondary line under the h1 — always the *other* language. */
    accent: string;
    sub: { lead: string; bold: string; rest: string };
    ctaDownload: string;
    ctaBring: string;
    stats: { k: string; v: string }[];
  };

  board: {
    blood: { chip: string; badge: string; group: string; title: string; detail: string };
    death: { chip: string; badge: string; msg: string };
    wedding: { chip: string; avatar: string; name: string; time: string; msg: string };
    fund: { chip: string; title: string; raised: string; goal: string; diaspora: string };
  };

  story: {
    kicker: string;
    heading: SplitHeading;
    lead: string;
    pillars: Record<PillarId, { title: string; body: string; accent: string }>;
  };

  features: {
    kicker: string;
    heading: string;
    lead: string;
    items: Record<FeatureId, { title: string; body: string; replaces: string }>;
    voice: { title: string; body: string };
  };

  diaspora: {
    kicker: string;
    heading: string;
    lead: string;
    quote: string;
    who: { avatar: string; name: string; loc: string };
    fund: { label: string; amount: string; donors: string; fromDiaspora: string };
  };

  trust: {
    kicker: string;
    heading: SplitHeading;
    lead: string;
    roles: Record<RoleId, { title: string; desc: string }>;
    points: Record<PointId, { title: string; body: string }>;
  };

  grow: {
    pilotTag: string;
    heading: { line1: string; line2: string };
    body: string;
    form: {
      nameLabel: string; namePlaceholder: string;
      villageLabel: string; villagePlaceholder: string;
      phoneLabel: string; phonePlaceholder: string;
      submit: string;
      note: string;
    };
    /** Composed into the mailto the form sends. */
    mail: { subject: string; nameField: string; villageField: string; phoneField: string };
  };

  footer: {
    blurb: string;
    cols: { heading: string; links: { href: string; label: string }[] }[];
    tagline: string;
  };
};
