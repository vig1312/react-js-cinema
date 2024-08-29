import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact, { rules } from 'eslint-plugin-react';

export default [
  {
    rules: {
      
    }
  },
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  
];
