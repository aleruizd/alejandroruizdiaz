import { Logo } from '../../common';
import styles from './Header.module.css'
import { MobileMenuButton } from '../../common'
import { Nav } from '../'
import { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Header() {
    const [deployMenu, setDeployMenu] = useState(false);

    function toggleMenu() {
        setDeployMenu(!deployMenu);
    }

    return (
        <div>
            <header className={styles.header}>
                <Link href="/">
                    <a><Logo color='primary' size='large' /></a>
                </Link>
                <MobileMenuButton onClick={toggleMenu} icon={faBars} />
                <Nav deployMenu={deployMenu} onToggleMenu={toggleMenu} />
            </header>
            <div className={styles.fixedOffset}></div>
        </div>
    )
}