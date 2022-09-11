import style from './styles.module.scss' 

export function Hero () {
    return (
        <div className={style.container} >
            <div>
                <p>  
                    Plataforma de estudo Totem. 
                </p>

                <p>A plataforma que você estuda e ganha por isso.</p>
            </div>
            <div>
                <img src='/grafiteHero.png' alt="" />
            </div>
        </div>
    )
}