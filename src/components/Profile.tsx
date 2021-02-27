import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){

    const { level } = useContext(ChallengesContext);


    return(
        <div className={styles.profileContainer}>
            <span>
                <img src="https://avatars.githubusercontent.com/u/32625236?s=400&u=637f403b90b3e279bf7844fbd3f8c8b67700f070&v=4" alt="Joao Benine" />
            </span>
            <div>
                <strong>João Benine</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}</p>
            </div>
        
        </div>
    );
}