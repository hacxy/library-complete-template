import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      formats: ['es', 'umd'], // 打包出es和umd两种格式
      entry: './src/index.ts',
      name: 'UTILS',
      fileName: (format) => `index.${format === 'umd' ? 'min.js' : 'js'}`
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [dts()]
});
