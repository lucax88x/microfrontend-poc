import { federation } from "@module-federation/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    federation({
      filename: "remoteEntry.js",
      name: "design-system",
      exposes: {
        "./web-components": "./src/index.ts"
      },
      remotes: {},
    }),
  ],
});
