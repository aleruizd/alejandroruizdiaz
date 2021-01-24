import styles from '../styles/ProjectsPage.module.css'
import { getProjects, getScreenshots } from '../helpers'
import {
    Header,
    PageHead,
    Projects,
    Footer
} from '../components/layout'

export default function ProjectsPage({projects}) {
    return (
        <div className={styles.projectsPage}>
            <PageHead />
            <Header />
            <Projects projects={projects} />
            <Footer />
        </div>
    )
}

export async function getStaticProps(){
    let projects = await getProjects();
    projects = await getScreenshots(projects);
  
    return {
      props: {
        projects
      }
    }
  }