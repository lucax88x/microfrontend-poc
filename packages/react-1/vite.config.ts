import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { dependencies } from './package.json';
// import { buildSharedDependencies } from '@poc/shared/vite/dependencies';

export default defineConfig(() => {
  return {
    plugins: [
      tsconfigPaths(),
      federation({
        filename: 'remoteEntry.js',
        name: '@poc/react1',
        exposes: {
          './components/ListDocs': './src/components/ListDocs.tsx',
          './components/Line': './src/components/Line.tsx',
          './components/Topbar': './src/components/Topbar.tsx',
          './components/DrawerChat': './src/components/DrawerChat.tsx',
        },
        remotes: {
          '@poc/ui/base': {
            type: 'module',
            name: '@poc/ui/base',
            entry: 'http://localhost:5172/remoteEntry.js',
            entryGlobalName: '@poc/ui/base',
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
