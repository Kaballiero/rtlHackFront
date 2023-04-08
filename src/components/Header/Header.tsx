import styles from './styles.module.scss'

const Header =()=>{
    return(
    <div className={styles.header}>
        <p className={styles.logo}>RLT.Hack</p>
        <div className={styles.navBar}>
            <h1 className={styles.navBar__link}>Dashboard</h1>
            <h1 className={styles.navBar__link}>Рейтинг</h1>
            <h1 className={styles.navBar__link}>Контакты</h1>
        </div>
    </div>)
}

 export default Header