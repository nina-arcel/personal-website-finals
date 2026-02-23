import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './form.css'

// Mount to the guestbook-root div instead of root
const root = ReactDOM.createRoot(document.getElementById('guestbook-root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)