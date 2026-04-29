import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // proxy /api/* to the superhero API base
      "/api": {
        target: "https://superheroapi.com/api/12f39f0f4994d7791eef37a0eaa783e5",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, "") // /api/search/q -> /search/q
      }
    }
  }
})
