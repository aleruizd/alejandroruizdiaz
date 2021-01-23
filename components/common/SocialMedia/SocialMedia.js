import styles from './SocialMedia.module.css'
import Link from 'next/link'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function SocialMedia({icon,href}){
    return(
        <Link href={href}>
            <a className={styles.socialMedia}>
                <FontAwesomeIcon className={styles.icon} icon={icon}/>
            </a>
        </Link>
    )
}