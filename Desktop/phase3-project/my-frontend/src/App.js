import './App.css';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
import About from './components/About/About'
import Fundi from './components/Fundi /Fundi'

function App() {
  return (
    <div className='App'>
      <BrowserRouter >
        <NavBar />
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route exact path='/fundi' element={<Fundi />} />
        <Route exact path='/about' element={ <About /> } />
        </Routes>
        </BrowserRouter>
    </div>
  )
};
export default App;
