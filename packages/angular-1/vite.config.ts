import angular from "@analogjs/vite-plugin-angular";
import { federation } from "@module-federation/vite";
import { defineConfig } from "vite";

export default defineConfig(() => ({
  build: {
    target: "chrome89",
  },
  resolve: {
    mainFields: ["module"],
  },
  plugins: [
    federation({
      filename: "remoteEntry.js",
      name: "angular-1",
      exposes: {
        "./app": "./src/app.component.ts",
        "./main": "./src/main.ts",
      },
      remotes: {},
      shared: ["@angular/core"],
    }),
    angular(),
  ],
}));
