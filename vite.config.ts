import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Deployment target switches via BASE env var:
//   default (cPanel / soeil.net root)              -> "/"
//   GitHub Pages (https://*.github.io/Portfolio/)  -> BASE=/Portfolio/ npm run build
const base = process.env.BASE ?? '/';

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'framer-motion': ['framer-motion'],
        },
      },
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Target modern browsers for smaller output
    target: 'es2020',
  },
});
