import styles from './Sessao2.module.css';
import TituloDescricao from '../utils/TituloDescricao/TituloDescricao';
import Card from '../utils/Card/Card';

import {
    FaTooth,
    FaStar,
    FaCut
} from "react-icons/fa";

function Sessao2() {

    return (
        <section className={styles.sessao2}>

            <div className={styles.container}>

                <span className={styles.tag}>
                    ESPECIALIDADES
                </span>

                <TituloDescricao
                    titulo={
                        <>
                            Cuidado completo, do
                            <br />
                            diagnóstico à reabilitação.
                        </>
                    }
                    descricao="Tratamentos conduzidos com técnica avançada, biomateriais modernos e atenção individualizada em cada etapa."
                />

                <div className={styles.cards}>

                    <Card
                        icone={<FaTooth />}
                        titulo="Saúde da Gengiva"
                        subtitulo="PERIODONTIA"
                        descricao="Tratamento de gengivite e periodontite. Promoção de saúde e prevenção de doenças."
                    />

                    <Card
                        icone={<FaStar />}
                        titulo="Implantes Dentários"
                        subtitulo="IMPLANTODONTIA"
                        descricao="Reabilitação imediata com implantes unitários e múltiplos, devolvendo função e estética."
                    />

                    <Card
                        icone={<FaCut />}
                        titulo="Cirurgia Oral"
                        subtitulo="CIRURGIA"
                        descricao="Reconstruções ósseas, enxertos gengivais e extração dos terceiros molares."
                    />

                </div>

            </div>

        </section>
    );
}

export default Sessao2;