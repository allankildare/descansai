import style from './CompletedChallenges.module.css'

export function CompletedChallenges() {
    return (
        <div className={style.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    )
}