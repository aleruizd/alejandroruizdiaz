import {Logo} from '../../common';
import styles from './Header.module.css'
import {Nav} from '../'

export default function Header(){
    return(
        <header className={styles.header}>
            <Logo color='primary' size='large'/>
            <Nav/>
        </header>
    )
}