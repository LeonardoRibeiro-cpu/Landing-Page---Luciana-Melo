// eslint-disable-next-line no-unused-vars
import React from 'react';
import Sessao1 from './Sessao1-Leonardo/Sessao1';
import Sessao3 from './Sessao3-Isaias/Sessao3';
import Sessao5 from './Sessao5-Isaias/Sessao5';
import Sessao6 from './Sessao6-Leonardo/Sessao6';
import Separador from './utils/Separador/Separador';
import Sessao7 from './Sessao7 - Giovanny/Sessao7';
import Sessao2 from './Sessao2-Giovanny/Sessao2';
function Main() {
    return (
        <main>
          <Sessao1 />
          <Separador />
          <Sessao2/>
          <Separador/>
          <Sessao3 />
          <Separador />

          <Sessao5 />
          <Separador />

          <Sessao6 />
          <Separador />
          
          <Sessao7/>
        </main>
    );
}

export default Main;