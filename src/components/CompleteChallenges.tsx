import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompleteChellenges.module.css';


export function CompleteChallenges() {

    const {challengesCompleted} = useContext(ChallengesContext);

    return (
        <div className={styles.challengeContainer}>
            <span>Desafios Completados</span>
            <span>
                {challengesCompleted}
            </span>
        </div>
    )
}