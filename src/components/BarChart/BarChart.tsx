import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options: any = {  
  plugins:{
    legend:{
        display:false
    },
   },
   scales: {
    x: {
      ticks: {
        color: '#ffffff'}
    },
    y: {
        ticks: {
          color: '#ffffff'}
      }
  }, 
   borderColor: '#B581E8',
   maintainAspectRatio : false,
   responsive: true,
   aspectRatio: 1,
   height:"50%",
   width:"50%",

 };

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1,2,3,5,8,13,21,34],
      backgroundColor: '#B581E8',
    }
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
