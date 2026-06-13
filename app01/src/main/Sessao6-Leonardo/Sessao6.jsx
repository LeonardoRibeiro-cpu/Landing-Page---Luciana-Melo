import Faq from "./Faq/Faq";
import TituloDescricao from "../utils/TituloDescricao/TituloDescricao";
import Styles from './Sessao6.module.css';

function Sessao6() {
    return (
        <section className={Styles.sessao6}>
            <div className={Styles.container}>
                <div className={Styles.tituloDescricao}>
                    <span className={Styles.tag}>Dúvidas frequentes</span>
                    <TituloDescricao
                        titulo="Respostas claras para começar com confiança."
                        descricao="Não encontrou sua dúvida? Fale comigo — terei o prazer em ajudar."
                        className={Styles.tituloFaq}
                    />
                </div>

                <div>
                    <Faq />
                </div>
            </div>
        </section>
    );
}

export default Sessao6;