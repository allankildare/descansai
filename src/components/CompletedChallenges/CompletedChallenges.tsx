import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengeContext'
import style from './CompletedChallenges.module.css'

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext)
    
    return (
        <div className={style.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{ challengesCompleted }</span>
        </div>
    )
}