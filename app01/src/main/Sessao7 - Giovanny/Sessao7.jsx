import React from "react";
import Formulario from "./Formulario/Formulario";
import style from "./Sessao7.module.css";
import TituloDescricao from "../utils/TituloDescricao/TituloDescricao";

import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaInstagram,
    FaWhatsapp,
    FaFacebookF
} from "react-icons/fa";

function Sessao7() {
    return (
        <section className={style.contato}>

            <div className={style.info}>



                <span className={style.subtitulo}>
                    FALE COMIGO
                </span>

                <TituloDescricao
                    titulo="Cuide do seu sorriso com quem entende do assunto."
                    descricao="Preencha o formulário e retornaremos em até 1 dia útil. Você também pode falar diretamente pelos canais abaixo."
                />

                <div className={style.itemContato}>
                    <div className={style.icone}>
                        <FaPhoneAlt />
                    </div>
                    <span>(34) 98843-9008</span>
                </div>

                <div className={style.itemContato}>
                    <div className={style.icone}>
                        <FaEnvelope />
                    </div>
                    <span>contato@lucianamelo.odo.br</span>
                </div>

                <div className={style.itemContato}>
                    <div className={style.icone}>
                        <FaMapMarkerAlt />
                    </div>
                    <span>Edifício São Lucas, Rua Frei Paulino 364, sala 911, Bairro Abadia, Uberaba MG</span>
                </div>

                <div className={style.redes}>
                    <div className={style.social}>
                        <FaInstagram />
                    </div>

                    <div className={style.social}>
                        <FaWhatsapp />
                    </div>

                    <div className={style.social}>
                        <FaFacebookF />
                    </div>
                </div>

            </div>

            <div className={style.areaFormulario}>
                <Formulario />
            </div>

        </section>
    );
}

export default Sessao7;