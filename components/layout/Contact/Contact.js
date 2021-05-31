import { useState } from 'react';
import { useRouter } from 'next/router'
import styles from './Contact.module.css'

export default function Contact() {
    const router = useRouter()
    const [state,setState] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [errorMessage,setErrorMessage] = useState('');

    async function sendMessage(event) {
        event.preventDefault();

        let config = {
            method: 'POST',
            body: JSON.stringify(state)
        }

        let res = await fetch("/api/message",config);
        let status = await res.json();

        if(status.ok){
            router.push("/success");
        }else{
            setErrorMessage(status.error);
        }
    }

    function handleInput(e) {
        let name = e.target.name;
        let value = e.target.value;

        setState({
            ...state,
            [name]: value
        })
    }

    return (
        <div className={styles.contact}>
            <h2>Contacto</h2>
            {errorMessage != '' && <span className={styles.errorMessage}>{errorMessage}</span>}
            <form onSubmit={sendMessage}>
                <input type="text" name='name' value={state.name} placeholder="Nombre" required onChange={handleInput} />
                <input type="emal" name='email' value={state.email} placeholder="Email" required onChange={handleInput} />
                <textarea placeholder="Mensaje" value={state.message} name='message' rows='10' required onChange={handleInput}></textarea>
                <input type="submit"/>
            </form>
        </div>
    )
}