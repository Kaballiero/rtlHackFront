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


 interface IPieChart{
  data: string[],
  labels:string[],
}

export function BarChart(props:IPieChart) {

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

   const data = {
    labels: props.labels, 
    datasets: [
      {
        data: props.data, 
        backgroundColor: '#B581E8',
      }
    ],
  };
  return <Bar options={options} data={data} />;
}
