import styles from  './MobileMenuButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MobileMenuButton({onClick,icon}){
    return (
        <button className={styles.mobileMenuButton} onClick={onClick}>
            <FontAwesomeIcon className={styles.icon} icon={icon} />
        </button>
    )    
}