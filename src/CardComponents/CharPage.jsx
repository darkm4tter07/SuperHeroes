import React from 'react'
import { Link } from 'react-router-dom'
import {useParams} from 'react-router-dom';
import '../css/CharPage.css'
import useCharacter from '../Components/useCharacter';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};


function CharPage() {
    const {name} = useParams();
    const character = useSelector((state) => state.character.value);

    const labels = ['Intelligence', 'Strength', 'Speed', 'Durability', 'Power', 'Combat'];

    const CharData = {
      labels,
      datasets:[
        {
          label: null,
          data: [character.intelligence,character.strength,character.speed, character.durability,character.power,character.combat],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
      ]
    }
  
  return (
    <div className='char__page'>
        <p>So! you clicked on {name}</p>
        <Bar options={options} data={CharData} />
        <Link to="/"><button>Home Page</button></Link>
    </div>
  )
}

export default CharPage;