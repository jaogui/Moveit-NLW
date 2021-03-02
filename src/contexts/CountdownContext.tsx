import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface countdownContextData{
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface countdownProviderProps{
    children: ReactNode;
}

export const CountdownContext = createContext({} as countdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({children}: countdownProviderProps){
    const { startNewChallenge } = useContext(ChallengesContext);
    const [time, setTime] = useState(0.1 * 60);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFineshed] = useState(false);

    
    
    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setHasFineshed(false);
        setIsActive(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFineshed(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])


    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown,

        }}>
            {children}
        </CountdownContext.Provider>

    )


}