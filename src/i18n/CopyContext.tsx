import { createContext, useContext, type ReactNode } from 'react';
import type { Copy } from './types';

const CopyContext = createContext<Copy | null>(null);

export function CopyProvider({ copy, children }: { copy: Copy; children: ReactNode }) {
  return <CopyContext.Provider value={copy}>{children}</CopyContext.Provider>;
}

/** Every user-facing string in a component comes from here. */
export function useCopy(): Copy {
  const copy = useContext(CopyContext);
  if (!copy) throw new Error('useCopy must be used inside <CopyProvider>');
  return copy;
}
