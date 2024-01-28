import { useSelector } from 'react-redux';
import { Bar} from 'react-chartjs-2';
import { defaults } from 'chart.js';
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

defaults.font.family = 'Arial';
defaults.font.color = 'rgb(15,11,11)';
// defaults.global.defaultFontColor = 'rgb(15,11,11)';

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
          data: [character.intelligence,character.strength,character.speed, character.durability,character.power,character.combat],
          borderColor: 'rgb(11, 48, 112)',
          backgroundColor: '#e28743',
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
