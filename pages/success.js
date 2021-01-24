import styles from '../styles/SuccessPage.module.css'
import { PageHead } from '../components/layout'
import { LinkButton, SuccessMessage } from '../components/common'

export default function SuccessPage() {
    return(
        <div className={styles.successPage}>
            <PageHead/>
            <SuccessMessage/>
            <LinkButton mobileAvailable href="/">Volver al inicio</LinkButton>
        </div>
    )
}