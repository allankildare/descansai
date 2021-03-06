import { createContext, useState, ReactNode } from 'react'

interface ChallengesContextData {
    level: number
    currentExperience: number
    challengesCompleted: number
    levelUp: () => void
    startNewChallenge: () => void
}

export const ChallengesContext = createContext({} as ChallengesContextData)

interface ChallengesProviderProps {
    children: ReactNode
}

export function ChallengesProvider({children}: ChallengesProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)
    
    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        console.log('Novo desafio')
    }

    return (
        <ChallengesContext.Provider value={{ level, currentExperience, challengesCompleted, levelUp, startNewChallenge}}>
            {children}
        </ChallengesContext.Provider>
    )
}