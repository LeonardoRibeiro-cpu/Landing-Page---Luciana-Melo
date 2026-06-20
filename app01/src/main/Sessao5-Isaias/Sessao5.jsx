import styles from "./Sessao5.module.css";
import TituloDescricao from "../utils/TituloDescricao/TituloDescricao";
import FaleComigo from "../../componentes/FaleComigo/FaleComigo";
import Depoimentos from "./Depoimentos/Depoimentos";

function Sessao5() {

    return (
        <section className={styles.sessao5}>

            <div className={styles.container}>

                <div className={styles.header}>

                    <span className={styles.tag}>
                        DEPOIMENTOS
                    </span>

                    <TituloDescricao
                        titulo="O que nossos pacientes dizem."
                    />

                </div>

                <Depoimentos />

                <div className={styles.botao}>
                    <FaleComigo />
                </div>

            </div>

        </section>
    );
}

export default Sessao5;