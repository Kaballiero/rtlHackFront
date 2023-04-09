import styles from './styles.module.scss'

const Contacts =()=>{
    return(
    <div className={styles.contacts}>
        <p className={styles.contacts__label}>Контакты</p>
        <div className={styles.contacts__container}>
            <div className={styles.container}>
                <h1 className={styles.container__item_label}>Офис</h1>
                <h1 className={styles.container__item_info}>г. Москва, ул. Кожевническая, д.14с5</h1>
            </div>
            <div className={styles.container__item}>
                <h1 className={styles.container__item_label}>Электронная почта</h1>
                <h1 className={styles.container__item_info}>uni@roseltorg.ru</h1>
            </div>
        </div>
        <div className={styles.contacts__socialNetwork}>
            <a href='https://t.me/zakupki_hack_chat' className={styles.contacts__socialNetwork_item}>
                Мы в Telegram
            </a>
            <a  href='https://vk.com/roseltorg' className={styles.contacts__socialNetwork_item}>
                Мы в ВКонтакте
            </a>
            <a  href='https://www.youtube.com/@RoseltorgOfficial' className={styles.contacts__socialNetwork_item}>
                Мы в Youtube
            </a>
        </div>
    </div>
    )
}

 export default Contacts