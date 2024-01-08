import React, { useState } from 'react';
import '../css/Navbar.css';

function Navbar({onSearch}) {
    const [searchText, setSearchText] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchText);
        setSearchText("");
    }

  return (
    <div className='header'>
      <div className="name__container">
        <h1 className='header__name'>SuperHeroes</h1>
      </div>
      <form className="search__character" onSubmit={handleSearch} >
        <input className='search__bar' type='text' placeholder='Character Name' value={searchText} onChange={(event)=>{setSearchText(event.target.value)}} />
        <button className='search__button' type='submit'>Search</button>
      </form>
    </div>
  );
}

export default Navbar;
