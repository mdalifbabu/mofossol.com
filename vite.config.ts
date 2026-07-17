import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Rural 3G is the target. Fail the build loudly if a dependency ever
    // pushes the bundle past this — it should stay far below it.
    chunkSizeWarningLimit: 200,
  },
});
