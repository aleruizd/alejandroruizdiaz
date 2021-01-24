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
                <SocialMedia href="https://www.linkedin.com/in/alejandro-ruiz-diaz-3942701a0/" icon={faLinkedinIn}/>
                <SocialMedia href="https://github.com/aleruizd" icon={faGithub}/>
                <SocialMedia href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${process.env.EMAIL}`} icon={faEnvelope}/>
            </div>
        </footer>
    )
}