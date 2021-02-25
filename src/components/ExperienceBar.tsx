import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar(){

    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)
   
    const percentTonNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;
    return(
        <header className={styles.experienceBar}>
            <span>0 px</span>
            <div>
                <div style={{width:`${percentTonNextLevel}%`}}/>

                <span className={styles.currentExperience} style={{left:`${percentTonNextLevel}%`}}>{currentExperience} XP</span>
            </div>
            <span> {experienceToNextLevel} xp</span>
        </header>
    )
}