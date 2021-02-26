import { createContext, useState, ReactNode, useEffect} from 'react';
import challenges from '../../challanges.json';
import Cookie from 'js-cookie';
import { LevelUpModal } from '../components/LevelUpModal';

interface ChallengesProviderProps{
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

interface Challenge{
    type: 'body' | 'eye';
    description: string;
    amount: number;

}

interface ChallengesContextData{
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    experienceToNextLevel: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
    closeLevelUpModal: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps){
    const [level, setLevel] = useState(rest.level);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted);
    const [activeChallenge, setActiveChallenge] = useState(null);

    const [isLevelUpModalOpen, setLevelUpModalOpen ] = useState(false);

  
    const experienceToNextLevel = Math.pow((level + 1) * 4,2);


    useEffect(() =>{
        Notification.requestPermission();
    },[])
     

    useEffect(()=> {
            Cookie.set('level', String(level));
            Cookie.set('currentExperience', String(currentExperience));
            Cookie.set('challengesCompleted', String(challengesCompleted));
        
        }, [level, currentExperience, challengesCompleted])

    function levelUp() {
        setLevel(level + 1);
        setLevelUpModalOpen(true);
    }


    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted'){
            new Notification ('Novo desafio', {
                body: `Valendo ${challenge.amount}xp!`})
        }
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }


    function completeChallenge(){
        if(!activeChallenge){
            return;
        }
        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);

    }


    function closeLevelUpModal(){
        setLevelUpModalOpen(false);
    }
    
    return(
        <ChallengesContext.Provider value={{
            level,
            levelUp,
            currentExperience,
            challengesCompleted,
            startNewChallenge,
            activeChallenge,
            resetChallenge,
            experienceToNextLevel,
            completeChallenge,
            closeLevelUpModal,
            }}>
            {children}

        { isLevelUpModalOpen && <LevelUpModal />}
        </ChallengesContext.Provider>
    );
}