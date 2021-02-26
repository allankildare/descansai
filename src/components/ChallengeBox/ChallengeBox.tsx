import style from './ChallengeBox.module.css'
export function ChallengeBox() {
    const hasActiveChallenge = true
    return (
        <div className={style.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={style.challengeActive}>
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="icons/body.svg" alt=""/>
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3min</p>
                    </main>

                    <footer>
                        <button type="button" className={style.challengeFailedButton}>Falhei</button>
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