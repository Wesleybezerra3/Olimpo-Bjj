import styles from "../modules/hero.module.css";
export function Hero() {

  return (
    <>
      <section className={`${styles.container_hero}`}>
        <div className={styles.container_text}>
          <p className={styles.p_top}>Projeto social de Jiu-Jitsu</p>
          <h1 className={styles.nome_olimpo}>OLIMPO</h1>
          <p className={styles.p_bottom}>Jiu-Jitsu para todos</p>
        </div>
      </section>
    </>
  );
}
