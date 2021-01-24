import styles from './LinkButton.module.css'
import Link from 'next/link'

export default function LinkButton({href,children,color,mobileAvailable}){
    return(
        <Link href={href}>
            <button 
                className={`
                    ${styles.linkButton} 
                    ${styles[color]} 
                    ${mobileAvailable ? styles.mobile : ''}
                `}
            >
                {children}
            </button>
        </Link>
    )
}