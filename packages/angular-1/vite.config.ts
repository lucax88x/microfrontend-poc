import angular from "@analogjs/vite-plugin-angular";
import { federation } from "@module-federation/vite";
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from "vite";

export default defineConfig(() => ({
  build: {
    target: "chrome89",
  },
  resolve: {
    mainFields: ["module"],
  },
  plugins: [
    tsconfigPaths(),
    federation({
      filename: "remoteEntry.js",
      name: "angular-1",
      exposes: {
        "./app": "./src/app.component.ts",
        "./bootstrap": "./src/bootstrap.ts",
      },
      remotes: {},
      shared: ["@angular/core"],
    }),
    angular(),
  ],
}));
