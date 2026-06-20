import styles from "./FaleComigo.module.css";

function FaleComigo() {
    return ( 
        <>
            <button type="button" className={styles.button} onClick={() =>{
                document.getElementById("sobre").scrollIntoView({
                    behavior:"smooth",
                })
            }}>Fale comigo →</button>
        </>
     );
}

export default FaleComigo;