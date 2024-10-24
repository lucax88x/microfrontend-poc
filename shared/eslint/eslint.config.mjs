// @ts-check
import js from '@eslint/js';
import ts from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactCompiler from 'eslint-plugin-react-compiler';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintConfigPrettier from 'eslint-config-prettier';
import tailwind from 'eslint-plugin-tailwindcss';

export default ts.config(
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
  },

  // eslint
  js.configs.recommended,

  // typescript
  ...ts.configs.recommended,
  ...ts.configs.stylistic,

  // react
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],

  // react-compiler
  {
    plugins: { ['react-compiler']: reactCompiler },
    rules: {
      'react-compiler/react-compiler': 'error',
    },
  },

  // react-hooks
  {
    plugins: { ['react-hooks']: reactHooksPlugin },
    rules: reactHooksPlugin.configs.recommended.rules,
  },

  // a11y
  jsxA11y.flatConfigs.strict,

  // tailwind
  ...tailwind.configs['flat/recommended'],

  // prettier
  eslintConfigPrettier,
);
