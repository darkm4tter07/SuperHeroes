import React from 'react'
import { Link } from 'react-router-dom'
import {useParams} from 'react-router-dom';
import '../css/CharPage.css'
import useCharacter from '../Components/useCharacter';
import { useSelector } from 'react-redux';


function CharPage(data) {
    const {name} = useParams();
    const character = useSelector((state) => state.character.value);
  
  return (
    <div className='char__page'>
        <p>So! you clicked on {character.name}</p>
        <p>Intelligence: {character.intelligence}</p>
        <Link to="/"><button>Home Page</button></Link>
    </div>
  )
}

export default CharPage;