import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengeContext'
import style from './ChallengeBox.module.css'
export function ChallengeBox() {
    const { activeChallenge, resetChallenge } = useContext(ChallengesContext)
    
    return (
        <div className={style.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={style.challengeActive}>
                    <header>Ganhe { activeChallenge.amount } xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                        <strong>Novo desafio</strong>
                        <p>{ activeChallenge.description }</p>
                    </main>

                    <footer>
                        <button type="button" className={style.challengeFailedButton} onClick={resetChallenge}>Falhei</button>
                        <button type="button" className={style.challengeSuceededButton}>Completei!</button>
                    </footer>
                </div>
            ) : (
                <div className={style.challengeBoxNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                        Avance de nível completando desafios
                    </p>
                </div>
            )}
            
        </div>
    )
}