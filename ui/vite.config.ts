import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port:5173
  },
  plugins: [
    react(),
    mkcert()
  ],
  define:{
    "process.env":{
      VITE_API_URL: process.env.VITE_API_URL
    }
  },
})
