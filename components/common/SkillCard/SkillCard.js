import styles from './SkillCard.module.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Skill from './Skill'

export default function SkillCard({icon,title,languages,frameworks,tools,others}){
    return (
        <div className={styles.skillCard}>
            <FontAwesomeIcon className={styles.icon} icon={icon} />
            <h3>{title}</h3>
            {languages && <Skill title='Lenguajes' skills={languages}/>}
            {frameworks && <Skill title='Frameworks' skills={frameworks}/>}
            {tools && <Skill title='Tools' skills={tools}/>}
            {others && <Skill title='Others' skills={others}/>}
        </div>
    )
}