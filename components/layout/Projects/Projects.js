import styles from './Projects.module.css'
import { Project } from '../../common'

export default function Projects({ projects }) {
    return (
        <div className={styles.projects}>
            <h2>Proyectos</h2>
            <h3>Aqui hay algunos proyectos personales que he ido desarrollando y publicado en GitHub.</h3>
            <div className={styles.projectList}>
                <Project project={projects[0]} />
                <Project project={projects[0]} />
                <Project project={projects[0]} />
            </div>
        </div>
    )
}

/*{projects.map(project => {
    console.log(project);
    return <Project key={project.id}/>
})}*/