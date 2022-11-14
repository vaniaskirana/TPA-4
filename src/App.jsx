// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import "./css/SkillPage.css";
import "./css/SnowFlake.css";
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import SkillPage from "./pages/SkillPage";

import {useState} from 'react';
import Footer from './components/Footer';
import Article from './pages/Article';
import Article1 from './components/Article/Article1';
import Article2 from './components/Article/Article2';
import Article3 from './components/Article/Article3';
import ProjectMe from './pages/ProjectMe';

function App() {


  return (
  <>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutMe/>} />
      <Route path="/skill" element={<SkillPage/>} />
      <Route path="/article" element={<Article/>}>
      </Route>
      <Route path="article/1" element={<Article1/>} />
      <Route path="article/2" element={<Article2/>} />
      <Route path="article/3" element={<Article3/>} />
      <Route path="project" element={<ProjectMe/>} />

      
    </Routes>
  <Footer/>
    <div className="snowflakes"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
  </>
  )
}

export default App
