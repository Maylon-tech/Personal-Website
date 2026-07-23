/*
@copyright 2026 NemotoDev
@licence Apache-2.0
*/


// Node Modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Styles
import '@/index.css'

// Components
import App from '@/App'
import Sidebar from '@/components/Sidebar'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className="min-h-screen lg:flex lg:justify-center lg:items-start lg:gap-10">
      <Sidebar />
      <App />
    </main>
  </StrictMode>,
)
