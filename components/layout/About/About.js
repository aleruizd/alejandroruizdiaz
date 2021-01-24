import styles from './About.module.css';
import {LinkButton} from '../../common'
import Link from 'next/link';

export default function About() {
    return (
        <section className={styles.about}>
            <h2>Sobre mi</h2>
            <p>Hola, me llamo Alejandro Agustin Ruiz Diaz y soy estudiante de Tecnicatura
            Superior en Programacion en la Universidad Tecnologica Nacional. Desde chico 
            soy un apasionado de la informatica, y al entrar en la adolescencia me interese 
            por el mundo de la programacion aprendiendo diferentes lenguajes de manera autodidacta. 
            Desde que aprendi a programar siempre he tratado de mejorar mis habilidades creando 
            proyectos personales realizando tanto el Front-end como el Back-end. Actualmente 
            me dedico al desarrollo web Front-end con ReactJS y NextJS.</p>
            <LinkButton href="#" color='secondary' mobileAvailable>Descargar CV</LinkButton>
        </section>
    )
}