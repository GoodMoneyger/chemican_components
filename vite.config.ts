import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), dts(), tailwindcss()],
  build: {
    lib: {
      entry: './src/index.ts', // Entry point for the library
      name: 'ChemicanComponents',
      formats: ['es', 'cjs'], // Output both ESM and CommonJS
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Peer dependencies
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
