import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

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
        display: false,
      },
    },
  };

function ChartComponent(){
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

    return(
        <div className="Chart">
            <Bar options={options} data={CharData} />
        </div>
    )
}

export default ChartComponent;
