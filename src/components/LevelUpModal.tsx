import style  from '../styles/components/LevelUpModal.module.css'


export function LevelUpModal(){
    return(
        <div className={style.levelupOverlay}>
        <div className={style.levelupModalContainer}>
            <header>  2   </header>
                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>

                <button type="button" >
                    <img src="/icons/close.svg" alt="close"/>

                </button>
        

        </div>
        </div>
    )
}