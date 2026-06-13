import Styles from './Separador.module.css';



function Separador() {
    const especialidades = [
    "Periodontia",
    "Implantodontia",
    "Cirurgia Oral",
    "Enxertos Ósseos",
    "Estética Gengival",
    "Toxina Botulínica",
];
    return (
        <div className={Styles.separador}>
            <div className={Styles.lista}>
                {especialidades.map((item, indice) => (
                    <span key={indice} className={Styles.item}>
                        <span className={indice % 2 === 0 ? Styles.estrelaDourada : Styles.estrelaPrata}>
                            ✦
                        </span>
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Separador;