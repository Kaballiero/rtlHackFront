import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ScriptableContext,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
  scaleFontColor : "#fff",
    maintainAspectRatio : false,
    responsive: true,
    aspectRatio: 1,
    height:"100%",
    borderColor: '#B3B3B3',
  };

const labels = ['0', '0', '0', '0', '0', '0'];

export const data = {
  labels,
  datasets: [
    {
        fill: true,
        data: [70,25,3,40,50],
        borderColor: '#B3B3B3',

        backgroundColor:(context: ScriptableContext<'line'>)=>{
            const ctx= context.chart.ctx
            const gradient = ctx.createLinearGradient(0,0,200,300)
            gradient.addColorStop(0,"#340668")
            gradient.addColorStop(1,"rgba(35, 137, 232, 0)")
            return gradient
        } 
      },
      {
        fill: true,
        data:  [1,25,35,4,50,30],
        backgroundColor:(context: ScriptableContext<'line'>)=>{
            const ctx= context.chart.ctx
            const gradient = ctx.createLinearGradient(0,0,0,300)
            gradient.addColorStop(0,"#B3B3B3")
            gradient.addColorStop(1,"rgba(179, 179, 179, 0.2)")  
            return gradient
        },
       
      },
  ],
};

export function Charts() {
  return <Line 
  options={options} 
  data={data}/>;
}
