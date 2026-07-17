import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const at = (path: string) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    // One HTML entry per locale, so /en/ is a real crawlable page with its own
    // <head> rather than a client-side toggle behind the Bengali URL.
    rollupOptions: {
      input: {
        bn: at('index.html'),
        en: at('en/index.html'),
      },
    },
    // Rural 3G is the target. Fail the build loudly if a dependency ever
    // pushes a chunk past this — it should stay far below it.
    chunkSizeWarningLimit: 200,
  },
});
