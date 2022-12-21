import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

export const data = {
    labels: ['Novel', 'Science', 'nonFiction', '4', '5'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
        },
    ],
};

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: "bottom",
        },
    },
};

export const PieChart = () => {
    return (<>
        <Pie data={data} options={options} />
    </>)
}