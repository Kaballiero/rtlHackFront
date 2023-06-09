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

interface IPieChart{
  data: string[],
  labels:string[],
}

export function PieChart(props:IPieChart) {

  const data = {
    labels: props.labels,
    datasets: [
      {
        data: props.data,  
        backgroundColor: [
          '#673893',
          '#D331A0',
          ' #E55059',
          '#F7D83A',
          '#52D075'
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

  return <Pie data={data} options={options} />;
}
