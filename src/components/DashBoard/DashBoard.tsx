import axios from 'axios'
import { BarChart } from '../BarChart/BarChart'
import { Charts } from '../LineChart/LineChart'
import { PieChart } from '../PieChart/PieChart'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react'


interface IDashBoard{
    dashboardList: string[]
}

interface ICharts{
    for_month_chart:string,
    for_pie_chart: string,
}

function getDataChart(fieldName:string,data:ICharts){
    let arrLabels: any[]=[]
    let arrData: any[]=[]
    if(fieldName==="for_month_chart")
        {
        const for_month_chart=JSON.parse(data.for_month_chart)
        for_month_chart.map((el: any ) =>{
            arrLabels.push(el.month_termination)
            arrData.push(el.count)
        })}
    else  {
        const for_pie_chart=JSON.parse(data.for_pie_chart)
        for_pie_chart.map((el: any ) =>{
            arrLabels.push(el.contract_subject)
            arrData.push(el.count)
        })}
    return [arrLabels,arrData]
}

const DashBoard =(props:IDashBoard)=>{

    const [charts, setCharts]=useState<ICharts|null>()

    const  getData=async ()=>{
        await axios.get('http://80.78.253.91:3000/load_info').then((response) => {
            setCharts(response.data);
          });
    }
    
    useEffect(()=>{
        getData()
    },[])


    return(
        <div className={styles.dashboard}>
        <p className={styles.dashboard__label}>DASBOARD</p>
        <div className={styles.dashboard__content}>
            <div className={styles.content__chart}>
                <Charts data_1={["1","37","55","77","24","10"]} data_2={["25","13","47","5","24","10"]} labels={["0","0","0","0","0","0"]}/>
            </div>
            <div className={styles.сontent__list}>
                {props.dashboardList.map((item)=>
                    <p className={styles.сontent__list__item}>{item}</p>)
                 }
            </div>
    
    </div>
    {charts&&
        <div className={styles.dashboard__charts}>
        <div className={styles.dashboard__charts_pie}>
            <PieChart 
            data={getDataChart("for_pie_chart",charts)[1]} 
            labels={getDataChart("for_pie_chart",charts)[0]}/>
        </div>
        <div className={styles.dashboard__charts_bar}>
          
            <BarChart
            data={getDataChart("for_month_chart",charts)[1]} 
            labels={getDataChart("for_month_chart",charts)[0]}
            />
        </div>
    </div>}
</div>
    )
}

 export default DashBoard