import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/types': '/src/types',
      '@/constants': '/src/constants',
      '@/context': '/src/context',
      '@/hooks': '/src/hooks',
      '@/utils': '/src/utils',
      '@/features': '/src/features',
      '@/components': '/src/components',
      '@/assets': '/src/assets',
    },
  },
});
