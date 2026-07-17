export type { Copy, Locale, PillarId, FeatureId, RoleId, PointId, SplitHeading } from './types';

import type { Copy, Locale } from './types';
import { bn } from './bn';
import { en } from './en';

export const LOCALES: Record<Locale, Copy> = { bn, en };

export const CONTACT_EMAIL = 'hello@mofossol.com';
