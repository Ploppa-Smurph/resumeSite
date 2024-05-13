import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageURL } from '../../utils';

export const Experience = () => {
    return ( 
    <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                    <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={getImageURL(skill.imageSrc)} alt={skill.title} />
                        </div>
                        <p>{skill.title}</p>
                    </div>
                );
            })}
            </div>
            <ul className={styles.history}>
                {
                history.map((historyItem, id) => {
                    return (
                        <li key={id} className={styles.historyItem}>
                            <img 
                            src={getImageURL(historyItem.imageSrc)} 
                            alt={`${historyItem.organization} Logo`} 
                            />
                        <div className={styles.historyItemDetails}>
                            <h3>{`${historyItem.role} - ${historyItem.organization}`}</h3>
                            <p>{`${historyItem.startdate} - ${historyItem.enddate}`}</p>
                            <ul>
                                {historyItem.experience.map((experience, id) => {
                                return <li key={id}>{experience}</li>;
                            })}
                        </ul>
                        </div>
                    </li>
                    );
                })}
            </ul>
        </div>
    </section>   
    );
};