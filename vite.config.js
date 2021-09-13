import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import ViteComponents from 'vite-plugin-components';
import path from 'path';

export default defineConfig({
  plugins: [Vue(), ViteComponents()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
});
