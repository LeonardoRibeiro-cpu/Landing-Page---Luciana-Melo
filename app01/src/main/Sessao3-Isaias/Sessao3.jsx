import { useState } from "react";
import styles from "./Sessao3.module.css";
import TituloDescricao from "../utils/TituloDescricao/TituloDescricao";

import antes1 from "../../img/resultados/antes1.png";
import depois1 from "../../img/resultados/depois1.png";

import antes2 from "../../img/resultados/antes2.png";
import depois2 from "../../img/resultados/depois2.png";

import antes3 from "../../img/resultados/antes3.png";
import depois3 from "../../img/resultados/depois3.png";

import antes4 from "../../img/resultados/antes4.png";
import depois4 from "../../img/resultados/depois4.png";

import antes5 from "../../img/resultados/antes5.png";
import depois5 from "../../img/resultados/depois5.png";

function Sessao3() {

    const casos = [
        { antes: antes1, depois: depois1 },
        { antes: antes2, depois: depois2 },
        { antes: antes3, depois: depois3 },
        { antes: antes4, depois: depois4 },
        { antes: antes5, depois: depois5 }
    ];

    const [indice, setIndice] = useState(0);

    function proximo() {
        setIndice((atual) =>
            atual === casos.length - 1 ? 0 : atual + 1
        );
    }

    function anterior() {
        setIndice((atual) =>
            atual === 0 ? casos.length - 1 : atual - 1
        );
    }

    return (
        <section className={styles.sessao3}>

            <div className={styles.container}>

                <div className={styles.header}>
                    <span className={styles.tag}>
                        RESULTADOS
                    </span>

                    <TituloDescricao
                        titulo={
                            <>
                                Muitos sorrisos já
                                <br />
                                mudaram.
                            </>
                        }
                        descricao="Cada paciente, uma história. Veja transformações reais conduzidas com técnica e sensibilidade."
                    />
                </div>

                <div className={styles.carrossel}>

                    <button
                        className={styles.seta}
                        onClick={anterior}
                    >
                        ◀
                    </button>

                    <div className={styles.cards}>

                        <div className={styles.card}>
                            <img
                                src={casos[indice].antes}
                                alt="Antes do procedimento"
                            />

                            <div className={styles.overlay}>
                                Antes do procedimento
                            </div>
                        </div>

                        <div className={styles.card}>
                            <img
                                src={casos[indice].depois}
                                alt="Após o procedimento"
                            />

                            <div className={styles.overlay}>
                                Pós procedimento
                            </div>
                        </div>

                    </div>

                    <button
                        className={styles.seta}
                        onClick={proximo}
                    >
                        ▶
                    </button>

                </div>

                <div className={styles.indicadores}>
                    {casos.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.indicador} ${
                                indice === index ? styles.ativo : ""
                            }`}
                            onClick={() => setIndice(index)}
                        />
                    ))}
                </div>

            </div>

        </section>
    );
}

export default Sessao3;