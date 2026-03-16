import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),

      // ─── Next.js compatibility shims ────────────────────────────────────
      // These aliases let every page import from 'next/link' and
      // 'next/navigation' exactly as they would in a real Next.js project.
      // The shims delegate to React Router under the hood so routing works
      // in the Vite dev environment without any changes to the UI code.
      'next/link':       path.resolve(__dirname, './src/lib/next/link.tsx'),
      'next/navigation': path.resolve(__dirname, './src/lib/next/navigation.ts'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
