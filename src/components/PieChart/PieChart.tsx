import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const data = {
  labels: ['Сиреневая долька', 'Розовая долька', 'Розовая долька'],
  datasets: [
    {
      label: '# of Votes',
      data: [1, 2 ,4],
      backgroundColor: [
        '#673893',
        '#D331A0',
        '#82A0D3',
      ],
      borderWidth: 1,
    },
  ],
};

const options: any = {  
  plugins: {
    legend: {
      labels: {
        color: '#ffffff'
      }
    }
  },
   borderColor: '#B3B3B3',
   maintainAspectRatio : false,
   responsive: true,
   aspectRatio: 1,
   
 };

export function PieChart() {
  return <Pie data={data} options={options} />;
}
