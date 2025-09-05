import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Crear el root una sola vez y luego renderizar
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <App />
)
