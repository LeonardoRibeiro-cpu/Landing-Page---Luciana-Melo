import { useEffect, useState } from "react";
import styles from "./Depoimentos.module.css";

function Depoimentos() {

    const url = "https://raw.githubusercontent.com/LeonardoRibeiro-cpu/Landing-Page---Luciana-Melo/main/APIs/Depoimentos.json";

    const [depoimentos, setDepoimentos] = useState([]);
    const [indice, setIndice] = useState(0);
    const mobile = window.innerWidth <= 768;
    const [cardsVisiveis, setCardsVisiveis] = useState(3);


    useEffect(() => {

        function atualizarLayout() {

            if (window.innerWidth <= 768) {
                setCardsVisiveis(1);
            }
            else if (window.innerWidth <= 1024) {
                setCardsVisiveis(2);
            }
            else {
                setCardsVisiveis(3);
            }
        }

        atualizarLayout();

        window.addEventListener(
            "resize",
            atualizarLayout
        );

        return () =>
            window.removeEventListener(
                "resize",
                atualizarLayout
            );

    }, []);

    useEffect(() => {
        buscarDepoimentos();
    }, []);

    async function buscarDepoimentos() {
        const response = await fetch(url);
        const dados = await response.json();
        setDepoimentos(dados.depoimentos);
    }

    useEffect(() => {

        if (depoimentos.length === 0) return;

        const intervalo = setInterval(() => {

            setIndice((atual) =>
                // atual === depoimentos.length - 1
                atual >= depoimentos.length - cardsVisiveis
                    ? 0
                    : atual + 1
            );
        // }, [depoimentos, cardsVisiveis]);
        }, 5000);

        return () => clearInterval(intervalo);

    }, [depoimentos]);

    return (
        <>

            {depoimentos.length === 0 ? (

                <p className={styles.carregando}>
                    Carregando...
                </p>

            ) : (

                <>
                    <div className={styles.wrapper}>

                        <div
                            className={styles.slider}
                            style={{
                                transform: `translateX(-${indice * (100 / cardsVisiveis)}%)`
                                // transform: mobile
                                //     ? `translateX(-${indice * 100}%)`
                                //     : `translateX(-${indice * 33.333}%)`
                            }}
                        >

                            {depoimentos.map((item, index) => (

                                <div
                                    key={index}
                                    className={styles.card}
                                >

                                    <span className={styles.aspas}>
                                        ❞
                                    </span>

                                    <p className={styles.texto}>
                                        "{item.texto}"
                                    </p>

                                    <hr />

                                    <div className={styles.autor}>
                                        <h4>{item.nome}</h4>

                                        <span>
                                            {item.procedimento}
                                        </span>
                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                    <div className={styles.indicadores}>

                        {depoimentos.map((_, index) => (

                            <button
                                key={index}
                                className={
                                    indice === index
                                        ? styles.ativo
                                        : ""
                                }
                                onClick={() =>
                                    setIndice(index)
                                }
                            />

                        ))}

                    </div>
                </>

            )}

        </>
    );
}

export default Depoimentos;