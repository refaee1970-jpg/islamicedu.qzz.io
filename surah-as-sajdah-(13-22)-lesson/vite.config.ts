import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This ensures assets (css/js) are linked relatively, 
  // allowing the app to work in a GitHub subfolder or root.
  base: './', 
  define: {
    'process.env': process.env
  }
})