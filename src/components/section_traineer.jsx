import styles from "../modules/section_traineer.module.css";
import ScrollReveal from 'scrollreveal'
export function Section_traineer() {
  // ScrollReveal().reveal('.reveal', {
  //   delay: 300,
  //   reset: true,
  // });
  return (
    
    <>
      <section className={`${styles.container_traineer}`}>
        <div className={styles.container_text}> 
            <article>
                <p>Treine Jiu-Jitsu </p>
                <p>e<span> conquiste</span></p>
                <p><span>sua melhor versão!</span></p>
            </article>
        </div>
        
        {/* <div className={styles.container_pattens}>
            <img className={styles.pattens} src={pattens} alt="Padrão preto" />
        </div> */}
      </section>
    </>
  );
}
