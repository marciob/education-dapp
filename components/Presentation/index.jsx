import style from './style.module.scss'

export function Presentation () {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <h1>Proposta Totem.</h1>
                <div className={style.info}>
                    <img src='/icon-check.svg' alt="" />
                    <p>Learn to Earn.</p>
                    
                </div>
                <div className={style.info}>
                    <img src='/icon-check.svg' alt="" />
                    <p>Educação para todos.</p>
                </div>
                <div className={style.info}>
                    <img src='/icon-check.svg' alt="" />
                    <p>Educação integrada com a blockchain.</p>
                </div>
            </div>
        </div>
        
    )
}