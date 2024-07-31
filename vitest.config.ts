import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['specs/**/*.{spec,spec-d}.ts'],
    watch: false,
    coverage: {
      all: false,
    },
  },
});
