import { useCallback } from 'react';
import styles from './styles.module.scss'

interface IHeader{
    dashboard:any,
     raiting:any,
     contacts:any
}




const Header =(props:IHeader)=>{
    const handleScrollDash =(ref:any)=>{
        ref.current &&
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return(
    <div className={styles.header}>
        <p className={styles.logo}>RLT.Hack</p>
        <div className={styles.navBar}>
            <button 
            onClick={()=>handleScrollDash(props.dashboard)} 
            className={styles.navBar__link}>Dashboard</button>
            <button 
            onClick={()=>handleScrollDash(props.raiting)} 
            className={styles.navBar__link}>Рейтинг
            </button>
            
            <button
            
            onClick={()=>handleScrollDash(props.contacts)} 
            className={styles.navBar__link}>Контакты</button>
        </div>
    </div>)
}

 export default Header