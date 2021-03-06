import style from './ExperienceBar.module.css'
export function ExperienceBar() {
    return (
        <header className={style.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: '50%' }}/>
                <span className={style.currentExperience} style={{ left: '50%' }}>300 xp</span>
            </div>
            <span>600 xp</span>
        </header>
    )
}