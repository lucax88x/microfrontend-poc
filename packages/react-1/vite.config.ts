import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import {dependencies} from './package.json'
// import { buildSharedDependencies } from '@poc/shared/vite/dependencies';

export default defineConfig(() => {
  return {
    plugins: [
      tsconfigPaths(),
      federation({
        filename: 'remoteEntry.js',
        name: '@poc/react1',
        exposes: {
          './components/list-docs': './src/components/ListDocs.tsx',
          './components/line': './src/components/Line.tsx',
          './components/topbar': './src/components/Topbar.tsx',
          './components/drawer-chat': './src/components/DrawerChat.tsx',
        },
        remotes: {
          '@poc/ui': {
            type: 'module',
            name: '@poc/ui',
            entry: 'http://localhost:5172/remoteEntry.js',
            entryGlobalName: '@poc/ui',
            shareScope: 'default',
          },
        },
        // shared: {
        //   // ...buildSharedDependencies('../../pnpm-workspace.yaml'),
        // },
        shared: {
          react: {
            requiredVersion: dependencies.react,
            singleton: true,
          },
        },
      }),
      react(),
    ],
  };
});
