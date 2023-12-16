import { useEffect, useState } from 'react';
import './css/App.css';
import CardsContainer from './Components/CardsContainer';
import Navbar from './Components/Navbar';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import CharPage from './CardComponents/CharPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/card/:name" element={<CharPage />} />
      </Routes>
    </div>
  );
}

export default App;
