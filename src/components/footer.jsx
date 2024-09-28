import styles from "../modules/footer.module.css";
export function Footer() {
  return (
    <>
      <footer >
        <section className={`${styles.container_top}`}>
          <div className={styles.container_links}>
            <div className={styles.links}>
              <a href="#">Sobre nós</a>
              <a href="#">Responsáveis</a>
              <a href="#">Contatos</a>
            </div>
            <div className={styles.links}>
              <a href="#">Galeria</a>
              <a href="#">Posições</a>
            </div>
          </div>
          <div className={styles.container_doacao}>
            <div className={styles.text_doacao}>
              <p>
                Ajude a <strong>transformar</strong>
              </p>
              <p>
                <strong>vidas</strong> com o Jiu-Jitsu!
              </p>
            </div>
            <div>
              <a href="#" className={styles.btn_doacao}>
                Fazer Doação
              </a>
            </div>
          </div>
        </section>

        <section className={styles.container_bottom}>
          <div className={styles.endereco_footer}>
            <i class="fa-solid fa-location-dot"></i>
            <a href="https://maps.app.goo.gl/T4GhywxzwsM4K7UG7">
              R. Equador, N°339-351, Paulista - PE
            </a>
          </div>

          <div className={styles.text_footer}>
            <div className={styles.p1}>
              <p>
                <a href="https://www.instagram.com/olimpobjj/" target="_blank">
                  Olimpo{" "}
                </a>
                em parceria com
                <a
                  href="https://www.instagram.com/shockbullboxing/"
                  target="_blank"
                >
                  {" "}
                  ShockBull
                </a>
              </p>
            </div>

            <div>
              <p>&copy; Todos os direitos reservados.</p>
              <p>Desenvolvido por WB Sites.</p>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
