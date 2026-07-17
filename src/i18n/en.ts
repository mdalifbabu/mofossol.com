import type { Copy } from './types';

/**
 * English — served at `/en/`, written for the diaspora reader: someone from
 * the village who reads English more comfortably than Bengali, or is on an
 * English keyboard in Riyadh or Kuala Lumpur.
 *
 * It carries the same emotional weight as bn.ts, not a flattened literal
 * translation. Village vocabulary (para, union, haat-bazaar, janaza, aqiqah,
 * khatian) stays untranslated — this reader knows those words, and replacing
 * them with English approximations would make the page read like it was
 * written by an outsider.
 *
 * Bengali is authoritative. When copy changes there, it changes here too.
 */
export const en: Copy = {
  locale: 'en',

  langSwitch: {
    label: 'বাংলা',
    href: '/',
    ariaLabel: 'বাংলায় দেখুন',
  },

  a11y: {
    skipToMain: 'Skip to main content',
    mainMenu: 'Main menu',
    menuButton: 'Menu',
  },

  nav: {
    links: [
      { href: '#story', label: 'Story' },
      { href: '#features', label: 'Features' },
      { href: '#diaspora', label: 'Diaspora' },
      { href: '#trust', label: 'Safety' },
    ],
    getApp: 'Get the app',
    downloadApp: 'Download the app',
  },

  hero: {
    eyebrow: 'Social built for the village · Bangladesh',
    heading: { lead: 'The voice of the', accent: 'village' },
    accent: 'মফস্বলের কণ্ঠ',
    sub: {
      lead: "A village isn't a friend list — a village is a ",
      bold: 'community',
      rest: ". Mofossol is your village's digital noticeboard, its bazaar, and its lifeline. Births, deaths and weddings, the call for blood, and the brother working abroad — all held on one thread.",
    },
    ctaDownload: 'Download the app',
    ctaBring: 'Bring it to your village',
    stats: [
      { k: 'Para → Village → Union', v: 'Geography is your network' },
      { k: 'Post with your voice', v: "Works even if you can't write" },
      { k: 'Diaspora connected', v: 'Far away, still home' },
    ],
  },

  board: {
    blood: {
      chip: '🩸 Blood',
      badge: 'UP member',
      group: 'O+',
      title: 'Urgent: blood needed',
      detail: 'Sadar Hospital · 2 bags tonight',
    },
    death: {
      chip: 'Death notice',
      badge: 'Imam ✓',
      msg: "Inna lillahi wa inna ilayhi raji'un. Marhum Abdul Jalil (75) has passed away. Janaza after Zuhr, at the big mosque grounds.",
    },
    wedding: {
      chip: '✨ Wedding',
      avatar: 'S',
      name: 'Solayman Haque',
      time: 'Yesterday',
      msg: "Shahin's wedding is this Friday — the whole village is invited!",
    },
    fund: {
      chip: 'Fund',
      title: 'Road repair fund',
      raised: '৳42,000',
      goal: '৳60,000',
      diaspora: '✈️ 9 from abroad',
    },
  },

  story: {
    kicker: "The truth it's built on",
    heading: { before: 'A village is not a ', accent: 'list', after: ' of people.' },
    lead: "Facebook was built for the individual — my profile, my friends. But a village runs on community: duty, respect, and a shared identity. What gets announced over the mosque loudspeaker, what travels mouth to mouth — that is the village's real news. Mofossol is built for exactly that.",
    pillars: {
      geography: {
        title: 'Your village',
        body: "Not friendship — geography is the network here. You're connected to your para, your village, your union and upazila — the way a village is actually arranged.",
        accent: 'ভূগোলই নেটওয়ার্ক',
      },
      lifeEvents: {
        title: 'The news of life',
        body: 'Not vanity posts. Births, deaths, weddings, calls for blood, waz and milad, government notices — what the village actually needs, every day.',
        accent: 'জীবনের খবর',
      },
      trust: {
        title: 'Voices you can trust',
        body: "UP members, imams, teachers, doctors — with verified identities. So rumour can't bury the village's truth.",
        accent: 'বিশ্বস্ত কণ্ঠ',
      },
    },
  },

  features: {
    kicker: 'What you can do',
    heading: 'Built for what a village needs.',
    lead: 'Every feature comes from village reality — not to teach you something new, but to make easier what you already do.',
    items: {
      noticeboard: {
        title: 'Digital noticeboard',
        body: 'Births, deaths and weddings, lost and found, events, and government announcements — the whole village knows at once.',
        replaces: '↳ In place of the mosque loudspeaker',
      },
      blood: {
        title: 'Blood & emergencies',
        body: 'Find donors by blood group, gather people fast in a flood or disaster, keep emergency numbers within reach.',
        replaces: '↳ One call reaches the village',
      },
      bazar: {
        title: 'The village bazaar',
        body: 'Qurbani cattle, paddy and crops, land, day labour, and local services — the haat-bazaar now in your hand.',
        replaces: '↳ In place of the haat-bazaar',
      },
      govt: {
        title: 'Government information',
        body: 'NID, khatian, old-age allowance, agricultural subsidy — where and how to get them, with verified, correct information.',
        replaces: '↳ Clarity, not confusion',
      },
    },
    voice: {
      title: "Post with your voice — you don't need to write",
      body: "Many in the village aren't comfortable reading or writing, especially the elders and our mothers and aunts. Press the mic and speak, and the whole village hears — exactly the way news travels mouth to mouth.",
    },
  },

  diaspora: {
    kicker: 'The diaspora bridge',
    heading: 'Far away, still home.',
    lead: "Every village has brothers in Dubai, Riyadh, or Malaysia. The money they send keeps the village running, yet the village's news reaches them last. On Mofossol they see their nephew's aqiqah, hear that the boro paddy is in, join a janaza from far away — and contribute to the road repair fund with one tap.",
    quote: '"The old uncle from our village passed away — I had the news the moment it happened. I couldn\'t be at the janaza from this far, but I was there in my duas. May Allah grant him Jannah."',
    who: { avatar: 'R', name: 'Rahim Uddin', loc: '🇸🇦 Riyadh, Saudi Arabia · Chakalma village' },
    fund: {
      label: 'Road repair fund',
      amount: '৳42,000',
      donors: '23 have given',
      fromDiaspora: '9 from the diaspora',
    },
  },

  trust: {
    kicker: 'Safety & responsibility',
    heading: { before: 'Not rumour — ', accent: 'truth', after: '.' },
    lead: 'A platform tied directly to a village brings people close, but it also raises the risk of rumour spreading fast. So from day one Mofossol has treated safety as a responsibility, not a feature.',
    roles: {
      upMember: { title: 'UP member', desc: 'Government notices and allowance information' },
      imam: { title: 'Imam', desc: 'Death notices, janaza, religious gatherings' },
      teacher: { title: 'Teacher', desc: 'School routines, results, education' },
      doctor: { title: 'Doctor / health worker', desc: 'Health advice, calls for blood donation' },
    },
    points: {
      rumour: {
        title: 'Friction for rumour, not virality',
        body: "Unverified sensational claims don't spread easily — trusted voices get the reach.",
      },
      privacy: {
        title: "Women's privacy protected",
        body: 'No unwanted messages from strangers, and controlled visibility — so our mothers and sisters can take part safely.',
      },
      anonymity: {
        title: 'No anonymous incitement',
        body: 'A real, accountable identity behind every important announcement — protecting honour and dignity.',
      },
    },
  },

  grow: {
    pilotTag: '🌾 Pilot · Starting with Chakalma village',
    heading: { line1: 'Starting with one village.', line2: 'Is yours next?' },
    body: "Mofossol doesn't try to spread to a thousand villages at once — it works deeply in one village, then the next one over. If you're someone who gets things done in your village — a UP member, a teacher, a shopkeeper, or a young person — help bring Mofossol to your village.",
    form: {
      nameLabel: 'Your name',
      namePlaceholder: 'e.g. Karim Uddin',
      villageLabel: 'Village & union',
      villagePlaceholder: 'e.g. Chakalma, Sadar',
      phoneLabel: 'Mobile number',
      phonePlaceholder: '01XXX-XXXXXX',
      submit: 'Become a village anchor',
      note: 'Or download the app directly — coming soon',
    },
    mail: {
      subject: 'Mofossol in my village',
      nameField: 'Name',
      villageField: 'Village & union',
      phoneField: 'Mobile',
    },
  },

  footer: {
    blurb: 'The voice of the village — social built for rural Bangladesh. The news of life, the bazaar, and the brother abroad, all on one thread.',
    cols: [
      {
        heading: 'Platform',
        links: [
          { href: '#story', label: 'Story' },
          { href: '#features', label: 'Features' },
          { href: '#diaspora', label: 'Diaspora bridge' },
          { href: '#trust', label: 'Safety' },
        ],
      },
      {
        heading: 'Get involved',
        links: [
          { href: '#grow', label: 'Download the app' },
          { href: '#grow', label: 'Bring it to your village' },
          { href: 'mailto:hello@mofossol.com', label: 'Contact' },
          { href: 'mailto:hello@mofossol.com', label: 'Support' },
        ],
      },
      {
        heading: 'Company',
        links: [
          { href: '#story', label: 'About us' },
          { href: '#', label: 'Privacy policy' },
          { href: '#', label: 'Terms' },
          { href: '#', label: 'Irripump Software Ltd.' },
        ],
      },
    ],
    tagline: 'A village means community 🌾',
  },
};
