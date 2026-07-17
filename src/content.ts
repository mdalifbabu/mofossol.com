/**
 * All user-facing copy for the landing page, in one place.
 *
 * Bengali is the default per the root contract; English strings here are the
 * secondary, decorative line only (the `en` fields). Copy edits happen here —
 * not inside components.
 */

import type { ComponentType } from 'react';
import {
  MapPinIcon, SendIcon, ShieldCheckIcon,
  MegaphoneIcon, DropletIcon, StoreIcon, GovtIcon,
  HomeIcon, MosqueIcon, GradCapIcon,
  AlertIcon, LockIcon, ShieldIcon,
} from './components/icons';

type IconComp = ComponentType<{ size?: number; color?: string }>;

export const NAV_LINKS = [
  { href: '#story', label: 'গল্প' },
  { href: '#features', label: 'ফিচার' },
  { href: '#diaspora', label: 'প্রবাসী' },
  { href: '#trust', label: 'নিরাপত্তা' },
] as const;

export const HERO_STATS = [
  { k: 'পাড়া → গ্রাম → ইউনিয়ন', v: 'ভূগোলই আপনার নেটওয়ার্ক' },
  { k: 'কণ্ঠে পোস্ট', v: 'লিখতে না জানলেও চলবে' },
  { k: 'প্রবাসী যুক্ত', v: 'দূরে থেকেও গ্রামেই' },
] as const;

export type Pillar = {
  icon: IconComp;
  color: string;
  soft: string;
  title: string;
  body: string;
  en: string;
};

export const PILLARS: Pillar[] = [
  {
    icon: MapPinIcon, color: 'var(--brand)', soft: 'var(--brand-soft)',
    title: 'আপনার গ্রাম',
    body: 'বন্ধুত্ব নয়, ভূগোলই এখানে নেটওয়ার্ক। আপনি যুক্ত পাড়া, গ্রাম, ইউনিয়ন আর উপজেলার সাথে — যেভাবে গ্রাম আসলেই সাজানো।',
    en: 'Geography is the graph',
  },
  {
    icon: SendIcon, color: 'var(--gold)', soft: 'var(--gold-soft)',
    title: 'জীবনের খবর',
    body: 'দেখনদারি পোস্ট নয়। জন্ম, মৃত্যু, বিয়ে, রক্তের ডাক, ওয়াজ-মিলাদ, সরকারি নোটিশ — গ্রামের প্রতিদিনের সত্যিকারের প্রয়োজন।',
    en: 'Life events, not vanity',
  },
  {
    icon: ShieldCheckIcon, color: 'var(--slate)', soft: 'var(--slate-soft)',
    title: 'বিশ্বস্ত কণ্ঠ',
    body: 'ইউপি সদস্য, ইমাম, শিক্ষক, ডাক্তার — যাচাইকৃত পরিচয়ে। গুজব যেন গ্রামের সত্যকে চাপা দিতে না পারে।',
    en: 'Trust is built in',
  },
];

export type Feature = {
  icon: IconComp;
  color: string;
  soft: string;
  title: string;
  body: string;
  replaces: string;
};

export const FEATURES: Feature[] = [
  {
    icon: MegaphoneIcon, color: 'var(--brand)', soft: 'var(--brand-soft)',
    title: 'ডিজিটাল নোটিশবোর্ড',
    body: 'জন্ম-মৃত্যু-বিয়ে, হারানো-প্রাপ্তি, অনুষ্ঠান আর সরকারি ঘোষণা — গ্রামের সবাই একসাথে জানবে।',
    replaces: '↳ মসজিদের মাইকিং-এর জায়গায়',
  },
  {
    icon: DropletIcon, color: 'var(--brick)', soft: 'var(--brick-soft)',
    title: 'রক্ত ও জরুরি সাহায্য',
    body: 'রক্তের গ্রুপ ধরে দাতা খুঁজুন, বন্যা-দুর্যোগে দ্রুত মানুষ জড়ো করুন, জরুরি নম্বর হাতের নাগালে।',
    replaces: '↳ এক ডাকে গ্রাম',
  },
  {
    icon: StoreIcon, color: 'var(--gold)', soft: 'var(--gold-soft)',
    title: 'গ্রামের বাজার',
    body: 'কোরবানির গরু, ধান-ফসল, জমি, দিনমজুর আর স্থানীয় সেবা — হাট-বাজার এবার হাতের মুঠোয়।',
    replaces: '↳ হাট-বাজারের জায়গায়',
  },
  {
    icon: GovtIcon, color: 'var(--slate)', soft: 'var(--slate-soft)',
    title: 'সরকারি তথ্য',
    body: 'NID, খতিয়ান, বয়স্ক ভাতা, কৃষি ভর্তুকি — কোথায় কীভাবে পাবেন, যাচাইকৃত সঠিক তথ্যে।',
    replaces: '↳ বিভ্রান্তি নয়, স্পষ্টতা',
  },
];

export type VerifiedRow = { icon: IconComp; color: string; soft: string; title: string; desc: string };

export const VERIFIED_ROWS: VerifiedRow[] = [
  { icon: HomeIcon, color: 'var(--brand)', soft: 'var(--brand-soft)', title: 'ইউপি সদস্য', desc: 'সরকারি নোটিশ ও ভাতার তথ্য' },
  { icon: MosqueIcon, color: 'var(--gold)', soft: 'var(--gold-soft)', title: 'ইমাম', desc: 'মৃত্যু সংবাদ, জানাজা, ধর্মীয় অনুষ্ঠান' },
  { icon: GradCapIcon, color: 'var(--slate)', soft: 'var(--slate-soft)', title: 'শিক্ষক', desc: 'স্কুলের রুটিন, ফলাফল, শিক্ষা' },
  { icon: DropletIcon, color: 'var(--brick)', soft: 'var(--brick-soft)', title: 'ডাক্তার / স্বাস্থ্যকর্মী', desc: 'স্বাস্থ্য পরামর্শ, রক্তদানের ডাক' },
];

export type TrustPoint = { icon: IconComp; title: string; body: string };

export const TRUST_POINTS: TrustPoint[] = [
  {
    icon: AlertIcon,
    title: 'গুজবে ঘর্ষণ, ভাইরালে নয়',
    body: 'যাচাই না হওয়া চাঞ্চল্যকর দাবি সহজে ছড়ায় না — বিশ্বস্ত কণ্ঠকেই অগ্রাধিকার।',
  },
  {
    icon: LockIcon,
    title: 'নারীর গোপনীয়তা সুরক্ষিত',
    body: 'অচেনা কারও অযাচিত বার্তা নয়, নিয়ন্ত্রিত দৃশ্যমানতা — যেন মা-বোনেরা নিরাপদে যুক্ত থাকতে পারেন।',
  },
  {
    icon: ShieldIcon,
    title: 'বেনামে উসকানি বন্ধ',
    body: 'প্রতিটি গুরুত্বপূর্ণ ঘোষণার পেছনে সত্যিকারের, দায়বদ্ধ পরিচয় — সম্মান আর ইজ্জত রক্ষা করে।',
  },
];

export const FOOTER_COLS = [
  {
    heading: 'প্ল্যাটফর্ম',
    links: [
      { href: '#story', label: 'গল্প' },
      { href: '#features', label: 'ফিচার' },
      { href: '#diaspora', label: 'প্রবাসী সেতু' },
      { href: '#trust', label: 'নিরাপত্তা' },
    ],
  },
  {
    heading: 'যুক্ত হন',
    links: [
      { href: '#grow', label: 'অ্যাপ ডাউনলোড' },
      { href: '#grow', label: 'গ্রামে আনুন' },
      { href: 'mailto:hello@mofossol.com', label: 'যোগাযোগ' },
      { href: 'mailto:hello@mofossol.com', label: 'সহায়তা' },
    ],
  },
  {
    heading: 'প্রতিষ্ঠান',
    links: [
      { href: '#story', label: 'আমাদের কথা' },
      { href: '#', label: 'গোপনীয়তা নীতি' },
      { href: '#', label: 'শর্তাবলী' },
      { href: '#', label: 'Irripump Software Ltd.' },
    ],
  },
] as const;

export const CONTACT_EMAIL = 'hello@mofossol.com';
