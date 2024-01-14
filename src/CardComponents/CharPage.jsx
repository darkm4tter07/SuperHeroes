import React from 'react'
import { Link } from 'react-router-dom'
import {useParams} from 'react-router-dom';
import '../css/CharPage.css'
import Chart from './ChartComponent';
import ChartComponent from './ChartComponent';


function CharPage() {
    const {name} = useParams();
  
  return (
    <div className='char__page'>
        <p>So! you clicked on {name}</p>
        <ChartComponent/>
        <Link to="/"><button>Home Page</button></Link>
    </div>
  )
}

export default CharPage;