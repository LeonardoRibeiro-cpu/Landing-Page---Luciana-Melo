import styles from './Card.module.css';

function Card({
    icone,
    titulo,
    subtitulo,
    descricao
}) {
    return (
        <article className={styles.card}>

            <div className={styles.icone}>
                {icone}
            </div>

            <h3>{titulo}</h3>

            <span>{subtitulo}</span>

            <p>{descricao}</p>

        </article>
    );
}

export default Card;