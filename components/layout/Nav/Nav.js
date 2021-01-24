import {LinkButton, MobileMenuButton} from '../../common';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import styles from './Nav.module.css';

export default function Nav({deployMenu, onToggleMenu}){

    return(
        <nav className={`${styles.nav} ${deployMenu ? styles.deploy : ''}`}>
            <MobileMenuButton className={styles.mobileMenuButton} icon={faTimes} onClick={onToggleMenu}/>
            <LinkButton href='/proyectos'>Proyectos</LinkButton>
            <LinkButton href='/contacto'>Contacto</LinkButton>
        </nav>
    )
}