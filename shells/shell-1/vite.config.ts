import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { dependencies } from './package.json';

export default defineConfig(() => ({
  server: { fs: { allow: ['.', '../shared'] } },
  build: {
    target: 'chrome89',
  },
  plugins: [
    federation({
      name: 'shell',
      remotes: {
        '@poc/ui': {
          type: 'module',
          name: '@poc/ui',
          entry: 'http://localhost:5172/remoteEntry.js',
          entryGlobalName: '@poc/ui',
          shareScope: 'default',
        },
        'angular-1': {
          type: 'module',
          name: 'angular-1',
          entry: 'http://localhost:5174/remoteEntry.js',
          entryGlobalName: 'angular-1',
          shareScope: 'default',
        },
        'react-1': {
          type: 'module',
          name: 'react-1',
          entry: 'http://localhost:5175/remoteEntry.js',
          entryGlobalName: 'react-1',
          shareScope: 'default',
        },
      },
      exposes: {},
      filename: 'remoteEntry.js',
      shared: {
        react: {
          requiredVersion: dependencies.react,
          singleton: true,
        },
      },
    }),
    react(),
  ],
}));
