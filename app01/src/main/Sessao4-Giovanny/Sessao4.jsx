import React from 'react';
import styles from './Sessao4.module.css';
import LucianaMelo from '../../img/consultorioLuciana.jpeg';
import TituloDescricao from '../utils/TituloDescricao/TituloDescricao';
import {
    FaAward,
    FaShieldAlt,
    FaUniversity,
    FaStar

} from "react-icons/fa";


function Sessao4() {

    return (
        <section className={styles.sessao4} id="quem-sou">

            <div className={styles.container}>

                <div className={styles.conteudo}>
                    <span className={styles.tag}>
                        QUEM SOU
                    </span>

                    <TituloDescricao
                        titulo={
                            <>
                                Mais de <em>20 anos</em>
                                <br />
                                dedicados ao seu
                                <br />
                                sorriso.
                            </>
                        }
                        descricao=""
                        nivel={2}
                    />

                    <div className={styles.texto}>
                        <p>
                            Luciana Melo de Paula é cirurgiã-dentista formada pela
                            Universidade Federal de Uberlândia (UFU), com atuação
                            consolidada em <strong>Periodontia e Implantodontia.</strong>
                        </p>

                        <p>
                            Pós-graduada em cirurgia avançada, reconstruções
                            ósseas e teciduais.

                            Reconhecida pela excelência em seus resultados,
                            participa constantemente de congressos nacionais e
                            internacionais.
                        </p>
                    </div>


                </div>

                <div className={styles.imagem}>
                    <div className={styles.imagemWrapper}>

                        <img src={LucianaMelo} alt="Dr. Luciana Melo" />
                    </div>
                </div>


            </div>
            <div className={styles.cards}>

                <div className={styles.card}>
                    <div className={styles.icone}>
                        <FaUniversity />
                    </div>

                    <div>
                        <h4>Formação UFU</h4>
                        <span>Universidade Federal de Uberlândia</span>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.icone}>
                        <FaAward />
                    </div>

                    <div>
                        <h4>Especialista</h4>
                        <span>Periodontia & Implantodontia</span>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.icone}>
                        <FaStar />
                    </div>

                    <div>
                        <h4>Biomateriais</h4>
                        <span>Técnicas modernas e estéticas</span>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.icone}>
                        <FaShieldAlt />
                    </div>

                    <div>
                        <h4>Atualização contínua</h4>
                        <span>Congressos internacionais</span>
                    </div>
                </div>

            </div>


        </section>
    );
}

export default Sessao4;