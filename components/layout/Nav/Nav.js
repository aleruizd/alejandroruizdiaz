import {LinkButton} from '../../common';
import styles from './Nav.module.css';

export default function Nav(){
    return(
        <nav className={styles.nav}>
            <LinkButton href='/proyectos'>Proyectos</LinkButton>
            <LinkButton href='/contacto'>Contacto</LinkButton>
        </nav>
    )
}