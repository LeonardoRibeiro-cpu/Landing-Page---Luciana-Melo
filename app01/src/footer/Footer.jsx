import 'react';
import img from '../img/logo.png';
import styles from './Footer.module.css';
function Footer () {
    return (
       <footer className={styles.footer}>
                   <div className={styles.logoArea}>
                    <img src={img} alt="Logo" width="50" />
                    <h1>Dra. Luciana <span>Melo</span></h1>
                   </div>
                <p className={styles.copyright}>© 2026 Dra. Luciana Melo · Periodontia & Implantodontia · URA/MG</p>
        </footer>
        
    );
}

export default Footer;