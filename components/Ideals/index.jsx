import style from'./style.module.scss'

export function Ideals () {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <h1>Totem Ideals</h1>
                <p>O Totem é uma plataforma Learn to Earn que, por meio do ensino à distância, foi construída para estimular a difusão de conhecimento, através da disponibilização de incentivos aos alunos, 
                consistente na transferência de tokens, os quais são conferidos em decorrência de determinados critérios,
                como assiduidade e avanço nos desafios propostos </p>
                <p className={style.secondParagraph}>A compensação monetária, via tokens, é um mecanismo potente para a manutenção do interesse dos estudantes   em                prosseguir nos cursos e concluir sua formação, evitando-se, com isso, a evasão educacional.</p>
            </div>
        </div>
    )

}