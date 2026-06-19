import React, { use, useState } from 'react';
import style from './Formulario.module.css';
import emailjs from '@emailjs/browser';

function Formulario() {

    const [form, setForm] = useState({
        nome: '',
        telefone: '',
        email: '',
        msg: ''
    });

    const [msgErro, setMsgErro] = useState("");


    function alterarForm(e) {
        setMsgErro("");
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function validar() {
        if (form.nome == "" || form.email == "" || form.msg == "" || form.telefone == "") {
            setMsgErro("Todos os campos devem ser preenchidos!");
        } else {
            var templateParams = {
                from_name: form.nome,
                from_telefone: form.nome,
                from_email: form.email,
                from_msg: form.msg
            };

            emailjs.send('service_c5rwkbz', 'template_c5ig6b8', templateParams, '2hzSUMhUaQqJzLSGr').then(
                (response) => {
                    setMsgErro("Email enviado com sucesso!!")
                },
                (error) => {
                    setMsgErro("Não foi possivel enviar o email")
                },
            );


        }

    }
    return (
        <>
            <form className={style.formulario}>

                <div className={style.linha}>
                    <div className={style.campo}>

                        <label htmlFor=""> NOME* </label>
                        <input type="text" name="nome" onChange={alterarForm} />

                    </div>
                    <div className={style.campo}>

                        <label htmlFor=""> TELEFONE* </label>
                        <input type="text" name="telefone" onChange={alterarForm} />
                    
                    </div>
                </div>

                <div className={style.campo}>
            
                        <label htmlFor=""> EMAIL* </label>
                        <input type="text" name="email" onChange={alterarForm} />

                </div>
                <div className={style.campo}>

                        <label htmlFor=""> MENSAGEM* </label>
                        <textarea
                        name="msg"
                        rows="6"
                        placeholder="Conte um pouco sobre o que você precisa..."
                        onChange={alterarForm}
                    />
                </div>

                <button
                    type="button"
                    className={style.botao}
                    onClick={validar}
                >
                    Enviar mensagem →
                </button>

                <p className={style.info}>
                    Seus dados são tratados com sigilo e não serão compartilhados.
                </p>


               <p className={style.info}>{msgErro}</p>
        </form >

        </>
    );
}

export default Formulario;