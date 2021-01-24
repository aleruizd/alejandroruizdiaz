import styles from './Projects.module.css'
import { Project, LinkButton } from '../../common'

export default function Projects({ projects,seeMore }) {
    return (
        <div className={styles.projects}>
            <h2>Proyectos</h2>
            <h3>Aquí hay algunos proyectos personales que he ido desarrollando y publicado en GitHub.</h3>
            <div className={styles.projectList}>
                {projects.map(project => {
                    return <Project key={project.id} project={project}/>
                })}
            </div>
            {seeMore && <LinkButton href="/proyectos" mobileAvailable>Ver Mas</LinkButton>}
        </div>
    )
}

