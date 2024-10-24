import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './testSetup.js',
    exclude: [...configDefaults.exclude, 'src/**/index.js'],
    coverage: {
      exclude: [...configDefaults.exclude, 'src/**/*.test.{js,jsx}', 'src/**/index.js'],
    },
  },
});
