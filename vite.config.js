import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/BJM/',
  plugins: [react()],
  ssgOptions: {
    // GitHub Pages serves /about/ from about/index.html (not about.html)
    dirStyle: 'nested',
  },
})
