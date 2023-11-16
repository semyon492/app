import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite"
import path from 'path'
import { fileURLToPath } from 'url'

export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        "./src/locales/**"
      ),
    }),
  ],
  resolve: {
    alias: {
      '@': '/src/'
    }
  },
});