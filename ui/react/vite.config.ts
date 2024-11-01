import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { dependencies } from "./package.json";
// import { buildSharedDependencies } from '@poc/shared/vite/dependencies';

export default defineConfig(() => {
  return {
    plugins: [
      federation({
        filename: "remoteEntry.js",
        name: "@poc/ui/react",
        exposes: {
          "./button": "./src/exports/Button.ts",
          "./icon": "./src/exports/Icon.ts",
        },
        remotes: {
          "@poc/ui/base": {
            type: "module",
            name: "@poc/ui/base",
            entry: "http://localhost:5172/remoteEntry.js",
            entryGlobalName: "@poc/ui/base",
            shareScope: "default",
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
