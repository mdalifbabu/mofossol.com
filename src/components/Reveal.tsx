import type { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

type Props = {
  children: ReactNode;
  className?: string;
};

/** Wraps a block so it fades up on first scroll into view. */
export function Reveal({ children, className = '' }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal${inView ? ' show' : ''}${className ? ' ' + className : ''}`}>
      {children}
    </div>
  );
}
