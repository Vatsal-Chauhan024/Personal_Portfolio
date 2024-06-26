import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import "aos/dist/aos.css"
import "aos/dist/aos.js"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ToastContainer/>
      <App />
  </React.StrictMode>,
)
