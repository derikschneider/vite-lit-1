// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // For a repo Pages site (https://<user>.github.io/vite-lit-1/) use '/vite-lit-1/'
  // For a user/org site (https://<user>.github.io/) change to '/'
  base: '/vite-lit-1/',

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    target: 'es2017'
  },

  optimizeDeps: {
    include: [
      'lit',
      'lit/decorators.js'
    ]
  }
});
