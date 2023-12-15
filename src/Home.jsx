import { useEffect, useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './css/App.css';
import CardsContainer from './Components/CardsContainer';
import Navbar from './Components/Navbar';


function Home() {
  const [CharacterName, setCharacterName] = useState("Batman");

  const handleSearch = (Character) => {
    setCharacterName((PrevCharacterName)=>{
      console.log('Search triggered:', CharacterName);
      return Character;
    })
    
  };
  return (
    <div className="Home">
      <Navbar onSearch={handleSearch}/>
        <Outlet/>
      <CardsContainer searchText={CharacterName}/>
    </div>
  );
}

export default Home;
