import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig, mergeConfig } from 'vite'
import eslint from 'vite-plugin-eslint2'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig as defineVitestConfig } from 'vitest/config'

const { VITE_APP_ROOT_URL: ROOT_URL, VITE_APP_MODE: MODE } = process.env

/**
 * Vite configuration.
 */
const viteConfig = defineConfig({
  base: ROOT_URL,
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'chunks/[name]-[hash].js',
        entryFileNames: '[name]-[hash].js',
        manualChunks: {
          redux: ['@reduxjs/toolkit', 'react-redux'],
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    },
    sourcemap: MODE !== 'production'
  },
  optimizeDeps: {
    include: ['@reduxjs/toolkit', 'react', 'react-dom', 'react-redux', 'react-router-dom']
  },
  plugins: [eslint(), react(), svgr(), tsconfigPaths()]
})

/**
 * Vitest configuration.
 */
const vitestConfig = defineVitestConfig({
  test: {
    coverage: {
      exclude: []
    },
    css: true,
    environment: 'jsdom',
    globals: true,
    setupFiles: resolve(__dirname, './src/__tests__/tests.config.ts')
  }
})

export default mergeConfig(viteConfig, vitestConfig)
