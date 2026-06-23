// eslint-disable-next-line no-unused-vars
import React from 'react';
import Nav from './nav/Nav';
import styles from './Header.module.css';
import img from '../img/logo.png';
function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoArea}>
             <img src={img} alt="Logo" width="50" onClick={() => window.location.href = '#'} />
             <h1>Dra. Luciana <span>Melo</span></h1>
            </div>
            <Nav />
        </header>
    );
}

export default Header;      