import { useRef, useState } from 'react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import Contacts from '../../components/Contacts/Contacts';
import Raiting from '../../components/Raiting/Raiting';
import DashBoard from '../../components/DashBoard/DashBoard';
import star from '../../common/star.svg'

import styles from './styles.module.scss'


const Main =()=>{

const [dashboardList,setDashboardList]=useState(["Количество обработанных операций 1592293","Количество классов ранжирования 5","Средний процент заполненности данных: 67%","Максимальное количество успешных операций: 5072"])
    const dashRef = useRef(null); //represents main section
    const raitRef = useRef(null); //represents about section
    const contRef = useRef(null); //represents how to use section    
    return(
    <div className={styles.main}>
        <Header dashboard={dashRef} raiting={raitRef} contacts={contRef} />
        <div className={styles.container}>
            <div className={styles.lab}>
                <div className="">
                    <p className={styles.lab__label}>
                    Комплексная система
                    рейтингования<br/> участников
                    рынка закупок</p>
                    <h1 className={styles.lab__description}>
                    Создание интеллектуальной системы сбора
                    и анализа данных<br/>  по участникам рынка закупок
                    из различных источников,<br/>  агрегация этих данных
                    в модель рейтингования и надежности</h1>
                </div>
                <img src={star} alt="star" className={styles.lab__img} />
            </div>
            <div ref={dashRef} className="">
                <DashBoard  dashboardList={dashboardList}/>
            </div>
            <div ref={raitRef} className="">
                <Raiting/>
            </div>
            <div ref={contRef} className="">
                <Contacts/>
            </div>
       </div> 
       <Footer/>
    </div>)
}

 export default Main