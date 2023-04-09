import icon from '../../common/footerIcon.svg'
import tg from '../../common/tg.svg'
import vk from '../../common/vk.svg'
import yb from '../../common/yb.svg'
import styles from './styles.module.scss'

const Footer =()=>{
    return(
    <div className={styles.footer}>
        <div className={styles.footer__info}>
            <img src={icon} alt="" className={styles.info__icon} />
            <h1 className={styles.info__address}>
                Москва, ул Кожевническая 14, стр. 5
                </h1>
            <h1 className={styles.info__other}>
                © 2023 Акционерное общество «Единая электронная торговая площадка» (АО «ЕЭТП»)
            </h1>
            <h1 className={styles.info__other}>
                 Политика конфиденциальности
            </h1>
        </div>
       
       <div className={styles.footer__contacts}>
        <div className={styles.contacts__socialNetwork}>
            <a href="https://t.me/zakupki_hack_chat" className={styles.socialNetwork__link}>
                <img src={tg} alt="tg" className={styles.socialNetwork__link_icon} />
            </a>
            <a href="https://vk.com/roseltorg" className={styles.socialNetwork__link}>
                <img src={vk} alt="vk" className={styles.socialNetwork__link_icon} />
            </a>  
            <a href="https://www.youtube.com/@RoseltorgOfficial" className={styles.socialNetwork__link}>
                <img src={yb} alt="yb" className={styles.socialNetwork__link_icon} />
            </a>
        </div>
        <h1 className={styles.contacts__email}>uni@roseltorg.ru</h1>
       </div>
    </div>) 
}

 export default Footer