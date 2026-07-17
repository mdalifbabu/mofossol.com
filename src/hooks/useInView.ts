import { useEffect, useRef, useState, type RefObject } from 'react';

/**
 * Fires once when the element scrolls into view, then stops observing.
 *
 * Without IntersectionObserver the element is treated as already in view —
 * the animation is decoration, so its absence must never hide content.
 */
export function useInView<T extends HTMLElement>(
  threshold = 0.12,
): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setInView(true);
          io.unobserve(entry.target);
        }
      }
    }, { threshold });

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, inView];
}
