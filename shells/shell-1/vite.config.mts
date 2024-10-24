import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { dependencies } from './package.json';
// import { buildSharedDependencies } from '@poc/shared/vite/dependencies.js';

// console.log(buildSharedDependencies())

export default defineConfig(() => ({
    plugins: [
        tsconfigPaths(),
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
                '@poc/react-1': {
                    type: 'module',
                    name: '@poc/react-1',
                    entry: 'http://localhost:5175/remoteEntry.js',
                    entryGlobalName: '@poc/react-1',
                    shareScope: 'default',
                },
            },
            exposes: {},
            filename: 'remoteEntry.js',
            // shared: {
            //     // ...buildSharedDependencies('../../pnpm-workspace.yaml'),
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
}));
