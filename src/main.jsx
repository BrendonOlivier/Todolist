import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import GlobalStyle from './styles/globalStyle.js'
import { ToastContainer } from 'react-toastify'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <Home />
    <ToastContainer autoClose={1000} theme='dark' />
  </StrictMode>,
)
