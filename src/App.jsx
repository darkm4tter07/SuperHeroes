import { useEffect, useState } from 'react';
import './css/App.css';
import CardsContainer from './Components/CardsContainer';
import Navbar from './Components/Navbar';

function App() {
  const [CharacterName, setCharacterName] = useState("Batman");

  const handleSearch = (Character) => {
    setCharacterName((PrevCharacterName)=>{
      console.log('Search triggered:', CharacterName);
      return Character;
    })
    
  };
  return (
    <div className="App">
      <Navbar onSearch={handleSearch}/>
      <CardsContainer searchText={CharacterName}/>
    </div>
  );
}

export default App;
