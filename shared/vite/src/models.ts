export interface Workspace {
  catalogs: {
    eslint: {
      eslint: string;
      "eslint-config-prettier": string;
      "eslint-plugin-jsx-a11y": string;
      "eslint-plugin-prettier": string;
      "eslint-plugin-react": string;
      "eslint-plugin-react-compiler": string;
      "eslint-plugin-react-hooks": string;
      "eslint-plugin-tailwindcss": string;
      "typescript-eslint": string;
      "@eslint/js": string;
      "@types/eslint__js": string;
    };
    prettier: {
      prettier: string;
      "prettier-plugin-tailwindcss": string;
    };
    tailwindcss: {
      tailwindcss: string;
      postcss: string;
      autoprefixer: string;
    };
    react: {
      react: string;
      "react-dom": string;
      "@types/react": string;
      "@types/react-dom": string;
    };
    vite: {
      vite: string;
      "@vitejs/plugin-react": string;
      "@module-federation/vite": string;
      "vite-tsconfig-paths": string;
      yaml: string;
    };
  };
  catalog: {
    typescript: string;
  };
}
