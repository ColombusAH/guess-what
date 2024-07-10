import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const port = process.env.PORT ?  +process.env.PORT : 3000;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: port,
    host: '0.0.0.0'
  }
});