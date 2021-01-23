import styles from './Skill.module.css'

export default function Skill({title,skills}){
    return(
        <div className={styles.skill}>
            <h4>{title}</h4>
            {skills.map((skill,index) => {
                return <p key={index}>{skill}</p>
            })}
        </div>
    )
}