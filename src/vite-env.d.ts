/// <reference types="vite/client" />

interface ImportMeta {
  env: ImportMetaEnv
}

interface ImportMetaEnv {
  VITE_API_URL: string
  VITE_IS_MOCKING_ENABLED: string
  VITE_MODE: string
  VITE_ROOT_URL: string
}
