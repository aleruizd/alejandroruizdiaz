import styles from './SkillSection.module.css'
import {SkillCard} from '../../common';
import { faCode, faDatabase, faTools} from '@fortawesome/free-solid-svg-icons'

export default function SkillSection(){
    return(
        <div className={styles.skillSection}>
            <SkillCard 
                icon={faCode}
                title='Front-end'
                languages={['HTML','CSS','JavaScript']}
                frameworks={['ReactJS','NextJS','SASS']}
            />
            <SkillCard 
                icon={faDatabase}
                title='Back-end'
                languages={['JavaScript con NodeJS','SQL']}
                frameworks={['Express']}
                tools={['Postman']}
            />
            <SkillCard 
                icon={faTools}
                title='Otras habilidades'
                languages={['C, C++ y C#']}
                others={['Git y GitHub','Linux','Unity','Ingles intermedio']}
            />
        </div>
    )
}