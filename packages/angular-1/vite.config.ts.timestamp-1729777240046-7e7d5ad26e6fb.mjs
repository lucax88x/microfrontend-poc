// vite.config.ts
import angular from "file:///home/lucatrazzi/repos/microfrontend-poc/node_modules/.pnpm/@analogjs+vite-plugin-angular@1.9.0_@angular+build@18.2.10_@angular+compiler-cli@18.2.9_@angu_gns3nckdng4k3syifeosw3uzuu/node_modules/@analogjs/vite-plugin-angular/src/index.js";
import { federation } from "file:///home/lucatrazzi/repos/microfrontend-poc/node_modules/.pnpm/@module-federation+vite@1.1.3_@types+node@22.7.9_rollup@4.24.0_sass@1.77.6/node_modules/@module-federation/vite/lib/index.cjs";
import { defineConfig } from "file:///home/lucatrazzi/repos/microfrontend-poc/node_modules/.pnpm/vite@5.4.10_@types+node@22.7.9_sass@1.77.6/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig(() => ({
  build: {
    target: "chrome89"
  },
  resolve: {
    mainFields: ["module"]
  },
  plugins: [
    federation({
      filename: "remoteEntry.js",
      name: "angular-1",
      exposes: {
        "./remote-app": "./src/app.component.ts",
        "./bootstrap": "./src/main.ts"
      },
      remotes: {},
      shared: ["@angular/core"]
    }),
    angular()
  ]
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9sdWNhdHJhenppL3JlcG9zL21pY3JvZnJvbnRlbmQtcG9jL3BhY2thZ2VzL2FuZ3VsYXItMVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvbHVjYXRyYXp6aS9yZXBvcy9taWNyb2Zyb250ZW5kLXBvYy9wYWNrYWdlcy9hbmd1bGFyLTEvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvbHVjYXRyYXp6aS9yZXBvcy9taWNyb2Zyb250ZW5kLXBvYy9wYWNrYWdlcy9hbmd1bGFyLTEvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgYW5ndWxhciBmcm9tIFwiQGFuYWxvZ2pzL3ZpdGUtcGx1Z2luLWFuZ3VsYXJcIjtcbmltcG9ydCB7IGZlZGVyYXRpb24gfSBmcm9tIFwiQG1vZHVsZS1mZWRlcmF0aW9uL3ZpdGVcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoKSA9PiAoe1xuICBidWlsZDoge1xuICAgIHRhcmdldDogXCJjaHJvbWU4OVwiLFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgbWFpbkZpZWxkczogW1wibW9kdWxlXCJdLFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgZmVkZXJhdGlvbih7XG4gICAgICBmaWxlbmFtZTogXCJyZW1vdGVFbnRyeS5qc1wiLFxuICAgICAgbmFtZTogXCJhbmd1bGFyLTFcIixcbiAgICAgIGV4cG9zZXM6IHtcbiAgICAgICAgXCIuL3JlbW90ZS1hcHBcIjogXCIuL3NyYy9hcHAuY29tcG9uZW50LnRzXCIsXG4gICAgICAgIFwiLi9ib290c3RyYXBcIjogXCIuL3NyYy9tYWluLnRzXCIsXG4gICAgICB9LFxuICAgICAgcmVtb3Rlczoge30sXG4gICAgICBzaGFyZWQ6IFtcIkBhbmd1bGFyL2NvcmVcIl0sXG4gICAgfSksXG4gICAgYW5ndWxhcigpLFxuICBdLFxufSkpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVyxPQUFPLGFBQWE7QUFDdlgsU0FBUyxrQkFBa0I7QUFDM0IsU0FBUyxvQkFBb0I7QUFFN0IsSUFBTyxzQkFBUSxhQUFhLE9BQU87QUFBQSxFQUNqQyxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsWUFBWSxDQUFDLFFBQVE7QUFBQSxFQUN2QjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsV0FBVztBQUFBLE1BQ1QsVUFBVTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLFFBQ1AsZ0JBQWdCO0FBQUEsUUFDaEIsZUFBZTtBQUFBLE1BQ2pCO0FBQUEsTUFDQSxTQUFTLENBQUM7QUFBQSxNQUNWLFFBQVEsQ0FBQyxlQUFlO0FBQUEsSUFDMUIsQ0FBQztBQUFBLElBQ0QsUUFBUTtBQUFBLEVBQ1Y7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
