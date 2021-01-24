import styles from '../styles/ContactPage.module.css'
import {
    Header, 
    PageHead,
    Contact, 
    Footer
  } from '../components/layout'

export default function ContactPage(){
    return(
        <div className={styles.contactPage}>
            <PageHead/>
            <Header/>
            <Contact/>
            <Footer/>
        </div>
    )
}