import React, { useState } from 'react';
import '../css/Navbar.css';

function Navbar({onSearch}) {
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        onSearch(searchText);
        setSearchText("");
    }

  return (
    <div className='header'>
      <div className="name__container">
        <h1 className='header__name'>SuperHeroes</h1>
      </div>
      <div className="search__character">
        <input className='search__bar' type='search' placeholder='Character Name' value={searchText} onSearch={(event)=>{setSearchText(event.target.value)}} />
        <button className='search__button' onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default Navbar;
