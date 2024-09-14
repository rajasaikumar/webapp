import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer1';

const App = () => {
  return (
    <>
     <Router>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/experience' element={<Experience/>}/>
    </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App
