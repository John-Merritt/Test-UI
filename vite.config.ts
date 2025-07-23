import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://localhost:32769', // or the port mapped from Docker
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api/, ''), // 🔥 strips '/api'
      },
    },
  },
})