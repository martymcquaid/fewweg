import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/a23c2614-e42a-4c54-95f6-bb17e2babab9/preview',
  plugins: [react()],
  server: {
    port: 5173,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },
})
