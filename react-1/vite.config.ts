import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { writeFileSync } from "fs";
import { defineConfig, loadEnv } from "vite";
import { dependencies } from "./package.json";

export default defineConfig(({ mode }) => {
  const selfEnv = loadEnv(mode, process.cwd());
  return {
    server: {
      fs: {
        allow: [".", "../shared"],
      },
    },
    build: {
      target: "chrome89",
    },
    plugins: [
      {
        name: "generate-environment",
        options: function () {
          console.info("selfEnv", selfEnv);
          writeFileSync(
            "./src/environment.ts",
            `export default ${JSON.stringify(selfEnv, null, 2)};`,
          );
        },
      },
      federation({
        filename: "remoteEntry.js",
        name: "react1",
        exposes: {
          "./app": "./src/App.tsx",
          "./components/list-docs": "./src/components/ListDocs.tsx",
          "./components/line": "./src/components/Line.tsx",
          "./components/topbar": "./src/components/Topbar.tsx",
        },
        remotes: {
          "design-system": {
            type: "module",
            name: "design-system",
            entry: "http://localhost:5172/remoteEntry.js",
            entryGlobalName: "design-system",
            shareScope: "default",
          },
        },
        shared: {
          react: {
            requiredVersion: dependencies.react,
            singleton: true,
          },
          "lit": {}
        },
      }),
      react(),
    ],
  };
});
