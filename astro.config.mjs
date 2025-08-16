import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: 'static',
  }),
  // A base da URL para seu site
  base: '/',
  // O diretório de saída para o build
  outDir: './dist',
});