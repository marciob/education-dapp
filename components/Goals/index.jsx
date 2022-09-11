import style from './style.module.scss'

export function Goals () {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <h1>Metas</h1>
                <div className={style.wrapParagrafh}>
                    <p>
                    Com o avanço tecnológico, as metodologias de ensino precisam se reinventar, mediante a adoção de ferramentas que transformem a aprendizagem em um processo atrativo, incitando os jovens a encarar a aquisição de conhecimento como um caminho prazeroso a ser seguido.
                    </p>
                    
                    <p>
                    É nessa linha que a gamificação da educação, implementada pela plataforma Totem, se destaca como um modelo de ensino iterativo, que propõe de o ensino num formato, além de didático, dinâmico.
                    </p>
                </div>
            </div>
        </div>
        
    )
}