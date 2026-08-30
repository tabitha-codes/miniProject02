import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.jsx'

// BrowserRouter has to wrap App — useNavigate() and <Routes> inside
// App only work because they're nested under this. Without it, both
// throw immediately at runtime (not a silent failure).
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)