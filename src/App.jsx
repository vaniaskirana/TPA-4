// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import {useState} from 'react';

function App() {


  return (
  <>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutMe/>} />
      {/* <Route path="/resume" element={<Biodata/>} /> */}

     
    </Routes>
    <div className="snowflakes"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
  </>
  )
}

export default App
