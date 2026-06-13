// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import styles from './Faq.module.css';

function Faq() {
    const url = "https://raw.githubusercontent.com/LeonardoRibeiro-cpu/Landing-Page---Luciana-Melo/main/APIs/Faq.json";
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/immutability
        buscarFaqs();
    }, []);

    async function buscarFaqs() {
        const response = await fetch(url);
        const faqsServidor = await response.json();
        setFaqs(faqsServidor.faqs);
    }

    return (
        <div className={styles.faqContainer}>
            {faqs.length === 0 ? (
                <p>Carregando...</p>
            ) : (
                faqs.map((faq, indice) => (
                    <details key={indice} className={styles.faqItem}>
                        <summary className={styles.pergunta}>
                            <span>{faq.pergunta}</span>
                        </summary>
                        <div className={styles.respostaWrapper}>
                            <p className={styles.resposta}>{faq.resposta}</p>
                        </div>
                    </details>
                ))
            )}
        </div>
    );
}

export default Faq;