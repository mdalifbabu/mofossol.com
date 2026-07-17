const BENGALI_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

/**
 * Renders a number in Bengali numerals. Per the root contract, numbers shown
 * to users are Bengali where natural — Latin digits read as foreign to the
 * people this is built for.
 */
export function toBengaliNumerals(value: number | string): string {
  return String(value).replace(/\d/g, (d) => BENGALI_DIGITS[Number(d)]);
}
