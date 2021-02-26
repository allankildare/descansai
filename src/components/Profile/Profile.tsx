import style from './Profile.module.css'

export function Profile() {
    return (
        <div className={style.profileContainer}>
           <img src="https://github.com/allankildare.png" alt="Foto de perfil de Allan Kildare" />
           <div>
               <strong>Allan Kildare</strong>
               <p>
                   <img src="icons/level.svg" alt="Símbolo para nível de usuário"/>
                   Level 1
                </p>
           </div>
        </div>
    )
}