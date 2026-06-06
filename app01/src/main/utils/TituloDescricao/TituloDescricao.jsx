// eslint-disable-next-line no-unused-vars
import React from 'react';
import Styles from './TituloDescricao.module.css';
function TituloDescricao({ titulo="", descricao="",nivel = 2 }) {
    const Tag = `h${nivel}`;
    return (  
        <div className={Styles.tituloDescricao}>
            <Tag>{titulo}</Tag>
            <p>{descricao}</p>
        </div>
    );
}

export default TituloDescricao;