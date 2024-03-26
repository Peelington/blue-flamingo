import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ProductContextProvider } from './components/ProductContext.jsx';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </Router>,
)
