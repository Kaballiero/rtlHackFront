import { BarChart } from '../BarChart/BarChart'
import { Charts } from '../LineChart/LineChart'
import { PieChart } from '../PieChart/PieChart'
import styles from './styles.module.scss'

interface IDashBoard{
    dashboardList: string[]
}

const data = [70,25,3,40]
const DashBoard =(props:IDashBoard)=>{
    return(
        <div className={styles.dashboard}>
        <p className={styles.dashboard__label}>DASBOARD</p>
        <div className={styles.dashboard__content}>
            <div className={styles.content__chart}>
                <Charts/>
            </div>
            <div className={styles.сontent__list}>
                {props.dashboardList.map((item)=>
                    <p className={styles.сontent__list__item}>{item}</p>)
                 }
            </div>
    
    </div>
    <div className={styles.dashboard__charts}>
        <div className={styles.dashboard__charts_pie}>
            <PieChart/>
        </div>
        <div className={styles.dashboard__charts_bar}>
            <div className={styles.dashboard__charts_bar_data}>
                 {data.map((item)=>
                    <h1 className={styles.dashboard__charts_bar_data_value}>{item}</h1>
                 )}
            </div>
            <BarChart/>
        </div>
    </div>
</div>
    )
}

 export default DashBoard