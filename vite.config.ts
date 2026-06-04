import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
    hmr: {
      host: '613da913-5173.preview.verdent.ai',
      protocol: 'wss',
      clientPort: 443,
    },
  },
})
