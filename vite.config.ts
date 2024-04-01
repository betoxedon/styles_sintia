import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
   server: {
      port: 5148,
   },
   build: {
      rollupOptions: {
         output: {
            entryFileNames: 'script.js',
         },
      },
   },
   plugins: [vue()],
})
