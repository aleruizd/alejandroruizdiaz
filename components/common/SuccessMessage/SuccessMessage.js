import styles from './SuccessMessage.module.css'

export default function SuccessMessage(){
    return (
        <div className={styles.successMessage}>
            <img src="/mailbox.png" alt='success image'/>
            <h2>Mensaje recibido. Gracias!</h2>
            <p>Estare en contacto contigo muy pronto.</p>
        </div>
    )
}