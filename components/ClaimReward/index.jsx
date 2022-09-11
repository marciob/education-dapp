import style from './style.module.css'

export function ClaimReward () {
    return (
    <div className={style.container}>
    <div className={style.content}>
        <div>
            <p></p>
            <button type="button" className='bg-lime-500'>
                <p>Receba seu token</p>
            </button>
        </div>
    </div>
    </div>
    )
}