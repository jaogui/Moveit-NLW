import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';


export function ChallangeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

function handleChallengeSucess(){
    completeChallenge();
    resetCountdown();
}

function handleChallengeFail(){
    resetChallenge();
    resetCountdown();
}

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeBoxActive}>
                    <header>Ganhe {activeChallenge.amount} XP</header>

                    <main><img src={`icons/${activeChallenge.type}.svg`} alt="" />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button type="button" onClick={handleChallengeFail} className={styles.buttonChallengeBtnFail}>Falha</button>
                        <button type="button" onClick={handleChallengeSucess} className={styles.buttonChallengeBtnComplete}>Completei</button>
                    </footer>
                </div>
            ) :
                (<div className={styles.challengeNotActive}>
                    <strong>
                        Finalize um ciclo para receber desáfios.
                </strong>

                <p>
                    < img src="icons/level-up.svg" alt="Level Up" />
                    Avançe de level completando os desáfios.
                </p>
                </div>
                )}
        </div>


    )
}