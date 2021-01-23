import styles from './Logo.module.css'

export default function Logo({color,size}){
    return(
        <p className={`${styles.logo} ${styles[color]} ${styles[size]}`}>Alejandro<span>RuizDiaz</span></p>
    )
}