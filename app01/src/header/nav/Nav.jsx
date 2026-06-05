import { useState } from 'react';
import FaleComigo from '../../componentes/FaleComigo/FaleComigo';
import styles from './Nav.module.css';

function Nav() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <nav className={styles.nav}>
            <div
                className={styles.menuHamburger}
                onClick={() => setMenuAberto(!menuAberto)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`${styles.lista} ${menuAberto ? styles.ativo : ''}`}>
                <li><a href="/especialidades">Especialidades</a></li>
                <li><a href="/sorrisos">Sorrisos</a></li>
                <li><a href="/quem-sou">Quem Sou</a></li>
                <li><a href="/depoimentos">Depoimentos</a></li>
                <li><a href="/duvidas">Dúvidas</a></li>
                <li><FaleComigo /></li>
            </ul>
        </nav>
    );
}

export default Nav;