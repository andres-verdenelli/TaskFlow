import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
  },
  server: {
    sourcemap: false, // asegúrate de aplicar también para desarrollo
    port: 5174,
  },
})
