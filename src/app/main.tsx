import '@/styles/index.css'
import '@/styles/fonts.css'
import { ViteReactSSG } from 'vite-react-ssg/single-page'
import React from 'react'
import { App } from '@/pages/index'

export const createRoot = ViteReactSSG(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
