import {defineConfig, normalizePath} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const indexStyle = normalizePath(path.resolve('./src/styles/index.scss'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${indexStyle}";`
      }
    }
  },
  resolve: {
    alias: {
      "@": resolve("./src"),
    },
  },
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    disableHostCheck: true,
    host: '0.0.0.0'
  }
})
