import styles from './ProjectButton.module.css'

export default function ProjectButton({ href,children }) {
    return (
        <a href={href}>
            <button className={styles.projectButton}>
                {children}
            </button>
        </a>
    )
}