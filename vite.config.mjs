import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  envPrefix: 'REACT_APP_',
  build: {
    outDir: 'build',
  },
  test: {
    include: ['src/**/*.test.{js,jsx}'],
    // Reserved for the in-progress guest feature. Remove once it contains tests.
    exclude: [...configDefaults.exclude, 'src/guestUsage.test.js'],
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js'],
    globals: true,
  },
});
