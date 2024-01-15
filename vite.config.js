
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePostcss from 'rollup-plugin-postcss';


export default defineConfig({
  plugins: [
    react(),
    VitePostcss({
      extract: 'styles.css',
      config: 'postcss.config.cjs', 
    }),
  ],
});
