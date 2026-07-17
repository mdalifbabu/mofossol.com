import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import type { Locale } from './i18n';
import './styles.css';

/** Shared by both locale entry points — each passes its own locale. */
export function mount(locale: Locale) {
  const root = document.getElementById('root');
  if (!root) throw new Error('#root not found');

  createRoot(root).render(
    <StrictMode>
      <App locale={locale} />
    </StrictMode>,
  );
}
