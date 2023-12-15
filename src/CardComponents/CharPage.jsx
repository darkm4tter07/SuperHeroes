import React from 'react'
import { Link } from 'react-router-dom'
import {useParams} from 'react-router-dom';
import '../css/CharPage.css'
import useCharacter from '../Components/useCharacter';


function CharPage() {
    const {id} = useParams();
    const url = `https://superheroapi.com/api/1008675766870075/${id}`;
    const {data, laoding, error} = useCharacter(url, id);
    console.log(data);
  return (
    <div className='char__page'>
        <p>So! you clicked on {data && data.name}</p>
        <Link to="/"><button>Home Page</button></Link>
    </div>
  )
}

export default CharPage;