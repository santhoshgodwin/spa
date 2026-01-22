import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Users from "./pages/Users";
import NavBar from "./components/NavBar"
import ApiDemo from "./pages/ApiDemo"
import Home from "./pages/Home"
import PageOptimize from './pages/PageOptimization';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/api-demo" element={<ApiDemo/>}/>
        <Route path="/page-optimization" element={<PageOptimize/>}/>
      </Routes>
    </>
  );
}

export default App
