/**
 * Language-independent presentation: which icon and which colour each item
 * uses. Copy lives in src/i18n; these join to it by id, so adding a locale
 * never means duplicating an icon choice.
 */

import type { ComponentType } from 'react';
import {
  MapPinIcon, SendIcon, ShieldCheckIcon,
  MegaphoneIcon, DropletIcon, StoreIcon, GovtIcon,
  HomeIcon, MosqueIcon, GradCapIcon,
  AlertIcon, LockIcon, ShieldIcon,
} from '../components/icons';
import type { FeatureId, PillarId, PointId, RoleId } from '../i18n/types';

export type IconComp = ComponentType<{ size?: number; color?: string }>;

type Visual = { icon: IconComp; color: string; soft: string };

export const PILLAR_VISUALS: Record<PillarId, Visual> = {
  geography: { icon: MapPinIcon, color: 'var(--brand)', soft: 'var(--brand-soft)' },
  lifeEvents: { icon: SendIcon, color: 'var(--gold)', soft: 'var(--gold-soft)' },
  trust: { icon: ShieldCheckIcon, color: 'var(--slate)', soft: 'var(--slate-soft)' },
};

export const FEATURE_VISUALS: Record<FeatureId, Visual> = {
  noticeboard: { icon: MegaphoneIcon, color: 'var(--brand)', soft: 'var(--brand-soft)' },
  blood: { icon: DropletIcon, color: 'var(--brick)', soft: 'var(--brick-soft)' },
  bazar: { icon: StoreIcon, color: 'var(--gold)', soft: 'var(--gold-soft)' },
  govt: { icon: GovtIcon, color: 'var(--slate)', soft: 'var(--slate-soft)' },
};

export const ROLE_VISUALS: Record<RoleId, Visual> = {
  upMember: { icon: HomeIcon, color: 'var(--brand)', soft: 'var(--brand-soft)' },
  imam: { icon: MosqueIcon, color: 'var(--gold)', soft: 'var(--gold-soft)' },
  teacher: { icon: GradCapIcon, color: 'var(--slate)', soft: 'var(--slate-soft)' },
  doctor: { icon: DropletIcon, color: 'var(--brick)', soft: 'var(--brick-soft)' },
};

export const POINT_ICONS: Record<PointId, IconComp> = {
  rumour: AlertIcon,
  privacy: LockIcon,
  anonymity: ShieldIcon,
};

/** Render order. The dictionaries are keyed, so order lives here. */
export const PILLAR_ORDER: PillarId[] = ['geography', 'lifeEvents', 'trust'];
export const FEATURE_ORDER: FeatureId[] = ['noticeboard', 'blood', 'bazar', 'govt'];
export const ROLE_ORDER: RoleId[] = ['upMember', 'imam', 'teacher', 'doctor'];
export const POINT_ORDER: PointId[] = ['rumour', 'privacy', 'anonymity'];
