import FaleComigo from "../../componentes/FaleComigo/FaleComigo";
import TituloDescricao from "../utils/TituloDescricao/TituloDescricao";
import LucianaMelo from '../../img/luciana.png';
import styles from './Sessao1.module.css';

function Sessao1() {
  return (
    <section className={styles.sessao1}>
      <div className={styles.container}>
        <div className={styles.conteudo}>

          <span className={styles.tag}>Periodontia · Implantodontia</span>

          <TituloDescricao
            titulo={<>Reabilitação <em>imediata</em><br /> com implantes.</>}
            descricao="Reabilite seu sorriso e sua autoestima com segurança, conforto e qualidade. Tratamentos especializados em periodontia, implantodontia e cirurgia."
            nivel={1}
          />

          <FaleComigo />

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumero}>20+</span>
              <span className={styles.statLabel}>Anos de<br/>experiência</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumeroPrata}>EAO</span>
              <span className={styles.statLabel}>Formação<br/>internacional</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumero}>100%</span>
              <span className={styles.statLabel}>Atendimento<br/>personalizado</span>
            </div>
          </div>

        </div>

        <div className={styles.imagem}>
          <div className={styles.imagemWrapper}>
            <img src={LucianaMelo} alt="Dr. Luciana Melo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sessao1;