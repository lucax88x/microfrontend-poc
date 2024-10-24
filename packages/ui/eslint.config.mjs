// @ts-check
import js from '@eslint/js';
import ts from 'typescript-eslint';
import { configs as litConfigs } from 'eslint-plugin-lit';
import { configs as wcConfigs } from 'eslint-plugin-wc';
import eslintConfigPrettier from 'eslint-config-prettier';

export default ts.config(
  {
    files: ['**/*.{ts}'],
  },

  // eslint
  js.configs.recommended,

  // typescript
  ...ts.configs.recommended,
  ...ts.configs.stylistic,

  // lit
  litConfigs['flat/recommended'],
  
  // wc
  wcConfigs['flat/recommended'],

  // prettier
  eslintConfigPrettier,
);
