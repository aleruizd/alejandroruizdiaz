import styles from './Footer.module.css'
import {Logo, SocialMedia} from '../../common'
import Link from 'next/link'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedinIn,faGithub} from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <Logo size='small' color='secondary'/>
            <p>Front-end Developer</p>
            <nav>
                <Link href="/"><a>Inicio</a></Link>
                <Link href="/proyectos"><a>Proyectos</a></Link>
                <Link href="/contacto"><a>Contacto</a></Link>
            </nav>
            <div className={styles.socialMediaList}>
                <SocialMedia href="#" icon={faLinkedinIn}/>
                <SocialMedia href="#" icon={faGithub}/>
                <SocialMedia href="#" icon={faEnvelope}/>
            </div>
        </footer>
    )
}