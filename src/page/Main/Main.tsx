import { useState } from 'react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import Contacts from '../../components/Contacts/Contacts';
import Raiting from '../../components/Raiting/Raiting';

import styles from './styles.module.scss'
import DashBoard from '../../components/DashBoard/DashBoard';

const Main =()=>{

const [dashboardList,setDashboardList]=useState(["1","2","3","4","5"])

    return(
    <div className={styles.main}>
        <Header/>
        <div className={styles.container}>
            <div className={styles.lab}>
                <p className={styles.lab__label}>
                    Исследовательская<br/>
                    программа «Росэлторг<br/>
                    Лаборатория»</p>
                <h1 className={styles.lab__description}>
                    Научно-техническая программа Росэлторга<br/>
                    направленная на анализ и обработку информации,<br/>
                    проведение исследований, а также публикации<br/>
                    полученных результатов.</h1>
                <a className={styles.lab__link} href="/*">Перейти</a>
            </div>
        <DashBoard dashboardList={dashboardList}/>
        <Raiting/>
        <Contacts/>
       </div> 
       <Footer/>
    </div>)
}

 export default Main