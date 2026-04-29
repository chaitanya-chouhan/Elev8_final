import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Serve the root directory so all existing static assets
  // (images, CSS, sub-page HTMLs) remain accessible at their original paths
  root: '.',
  publicDir: 'public',
})
