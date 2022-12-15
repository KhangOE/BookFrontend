import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

export const data = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
        },
    ],
};

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: "left"
        },
    },
};

export const PieChart = () => {
    return (<>
        <Pie data={data} options={options} />
    </>)
}