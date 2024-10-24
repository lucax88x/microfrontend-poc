import { federation } from '@module-federation/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    federation({
      filename: 'remoteEntry.js',
      name: '@poc/ui',
      exposes: {
        '.': './src/index.ts',
      },
      remotes: {},
    }),
  ],
});
