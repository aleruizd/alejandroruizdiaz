import styles from './Project.module.css'
import ProjectButton from './ProjectButton'

export default function Project({project}){
    return( 
        <div className={styles.project}>
            <img className={styles.background} src={project.image.url}/>
            <div className={`${styles.description}`}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className={styles.buttons}>
                    <ProjectButton href={project.html_url}>GitHub Repo</ProjectButton>
                    <ProjectButton href={project.homepage}>Website</ProjectButton>
                </div>
            </div>
        </div>
    )
}