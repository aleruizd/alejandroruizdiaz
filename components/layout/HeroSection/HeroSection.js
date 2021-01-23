import styles from './HeroSection.module.css';

export default function HeroSection(){
    return(
        <div className={styles.heroSection}>
            <h1>Front-end Developer</h1>
            <h3>Desarrollador de sitios y aplicaciones web con React</h3>
            <img src='/profile.png' alt='profile'/>
        </div>
    )
}