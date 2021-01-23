import styles from './Project.module.css'

export default function Project({project}){
    return( 
        <a href={`http://${project.alias[0].domain}`} className={styles.project}>
            {console.log(project)}
            <img className={styles.background} src={project.image.screenshot}/>
            <div className={styles.description}>

            </div>
        </a>
    )
}