import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx';
import "./styles/dashboard.css"
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
