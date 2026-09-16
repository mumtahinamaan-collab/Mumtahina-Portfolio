import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
   server: {
    proxy: {
      '/geocode': {
        target: 'https://geocoding-api.open-meteo.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/geocode/, '')
      },
      '/weather': {
        target: 'https://api.open-meteo.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/weather/, '')
      }
    }
  },
  build: {
    sourcemap: false,   // ✅ source maps band
    minify: 'terser',   // ✅ better minification
    // rollupOptions hatao ya agar chahiye toh manualChunks ko function banao
    // abhi ke liye bas hata do:
  },

})