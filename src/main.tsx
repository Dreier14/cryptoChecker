import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StoreProvider, store } from './store/index.ts'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <StoreProvider value={store}>
      <App />
    </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
