import { useEffect, useState } from 'react'
import cn from 'classnames'
import arrow from '../../common/arrow.svg'

import styles from './styles.module.scss'
import axios from 'axios'
interface Idata{
    for_month_chart:string,
    for_pie_chart: string,
    table:string
}
function getDataChart(data:any){
    let arrData: any[]=[]
        const for_month_chart=JSON.parse(data.table)
        for_month_chart.map((el: any ) =>{
            const gg={
                "supplier_inn": el.supplier_inn,
                "win_qty": el.win_qty,
                "y_proba": el.y_proba,
                "rank": el.rank,
            }
            arrData.push(gg)
        })
   
    return [arrData]
}

const Raiting =()=>{
    
    const [datas, setData]=useState<Idata>(
       { "for_month_chart":"",
        "for_pie_chart": "",
        "table":""})
    const [search, setSearch]=useState('')

    const  getData=async ()=>{
        await axios.get('http://80.78.253.91:3000/load_info').then((response) => {
            setData(response.data);
          });
    }

    
useEffect(()=>{
        getData()
    },[])

    const [tableData,setTableData]= useState<any>()
    const [filteredList,setfilteredList]= useState<any>([])

useEffect(()=>{
    if(datas.table!=='')
        setfilteredList(getDataChart(datas)[0])
},[datas])
 
    return(
    <div className={styles.raiting}>
        <p className={styles.raiting__label}>Рейтинг</p>

      <div className={styles.table__row_first}>
                <h1 className={cn(styles.table__text_small,styles.table__column_small)}>№</h1>
                <h1 className={cn(styles.table__text_small,styles.table__column_big)}>ИНН</h1>
                <h1 className={cn(styles.table__text_small,styles.table__column_medium)}>Кол-во успешных операция</h1>
                <h1 className={cn(styles.table__text_small,styles.table__column_medium)}>качество работы</h1>   
                <h1 className={cn(styles.table__text_small,styles.table__column_small)}>Ранг</h1>   
        </div>
        <div className={styles.raiting__table}>
         

        {filteredList.map(
            (row:any,index:number)=>  <div className={styles.table__row}>
                <h1 className={cn(styles.table__text_bold,styles.table__column_small)}>{index+1}</h1>
                <h1 className={cn(styles.table__text,styles.table__column_big)}>{row.supplier_inn}</h1>
                <h1 className={cn(styles.table__text_bold,styles.table__column_medium)}>{row.win_qty}</h1>
                <h1 className={cn(styles.table__text_bold,styles.table__column_medium)}>{row.y_proba}</h1>   
                <h1 className={cn(styles.table__text_bold,styles.table__column_small)}>{row.rank}</h1>   
            </div>
            )}
        </div>
    </div>
    )
}

 export default Raiting