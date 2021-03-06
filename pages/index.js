import styles from '../styles/Home.module.css'
import {getProjects, getScreenshots} from '../helpers'
import {
  Header, 
  PageHead, 
  HeroSection, 
  About, 
  SkillSection,
  Projects,
  Footer
} from '../components/layout'

export default function Home({projects}) {
  return (
    <div className={styles.container}>
      <PageHead/>
      <Header/>
      <HeroSection/>
      <About/>
      <SkillSection/>
      <Projects projects={projects} seeMore/>
      <Footer/>
    </div>
  )
}

export async function getStaticProps(){
  let projects = await getProjects(3);
  projects = await getScreenshots(projects);

  return {
    props: {
      projects
    },
    revalidate: 1
  }
}
