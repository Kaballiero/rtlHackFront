import { useState } from 'react'
import cn from 'classnames'
import arrow from '../../common/arrow.svg'

import styles from './styles.module.scss'

const Raiting =()=>{

    const [tableData, setTableData] = useState([
        {
        description:'description1',
        num1:2,
        num2:22,
        num3:222,
    },{
        description:'description1',
        num1:2,
        num2:22,
        num3:222,
    },{
        description:'description1',
        num1:2,
        num2:22,
        num3:222,
    },])

    return(
    <div className={styles.raiting}>
        <p className={styles.raiting__label}>Рейтинг</p>

        <div className={styles.raiting__table}>
         <div className={styles.table__row_first}>
                <h1 className={cn(styles.table__text_small,styles.table__column_small)}>№</h1>
                <h1 className={cn(styles.table__text_small,styles.table__column_big)}>Описание</h1>
                <h1 className={cn(styles.table__text_small,styles.table__column_medium)}>Цифры</h1>
                <h1 className={cn(styles.table__text_small,styles.table__column_medium)}>Цифры</h1>   
                <h1 className={cn(styles.table__text_small,styles.table__column_medium)}>Цифры</h1>   
        </div>

        {tableData.map(
            (row,index)=>  <div className={styles.table__row}>
                <h1 className={cn(styles.table__text_bold,styles.table__column_small)}>{index+1}</h1>
                <h1 className={cn(styles.table__text,styles.table__column_big)}>{row.description}</h1>
                <h1 className={cn(styles.table__text_bold,styles.table__column_medium)}>{row.num1}</h1>
                <h1 className={cn(styles.table__text_bold,styles.table__column_medium)}>{row.num2}</h1>   
                <h1 className={cn(styles.table__text_bold,styles.table__column_medium)}>{row.num3}</h1>   
            </div>
            )}
        </div>
        <a href="#" className={styles.raiting__more}> 
        <h1 className={styles.raiting__more_text}>Полная информация</h1>
        <img src={arrow} alt="arow" className={styles.raiting__more_img} />
        </a>
    </div>
    )
}

 export default Raiting