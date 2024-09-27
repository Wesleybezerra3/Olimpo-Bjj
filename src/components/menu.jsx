import style from "../modules/menu.module.css";
import close from "../assets/Close.svg";
import logo from '../assets/olimpo_logo.svg'
export function Menu({ isMenuOpen, toggleMenu }) {
  return (
    <>
      <div
        className={`${style.menu} ${isMenuOpen ? style['menu-open'] : ''}`}
      >
        <aside style={{ display: isMenuOpen ? "block" : "none" }}>
          <div className={style.container_btnClose}>
            <button className={style.close_btn} onClick={toggleMenu}>
              <img src={close} alt="Fechar menu" />
            </button>{" "}
          </div>
          <div className={style.container_tittle}>
            <img src={logo} alt="" />
            <p>
              Olimpo
            </p>
          </div>

          <div className={style.container_linksMenu} >
            <a href="#">Sobre Nós</a>
            <a href="#">Responsáveis</a>
            <a href="#">Galeria</a>
            <a href="#">Posições</a>
            <a href="#">Contato</a>
          </div>

          <div className={style.container_doacaoMenu}>
            <div className={style.text_doacaoMenu}>
              <p>
                Ajude a <strong>transformar</strong>
              </p>
              <p>
                <strong>vidas</strong> com o Jiu-Jitsu!
              </p>
            </div>

            <div>
              <a href="#" className={style.btn_doacaoMenu}>
                Fazer Doação
              </a>
            </div>

            </div>

        </aside>

        {/* <div className={style.fade}></div>  */}
      </div>
    </>
  );
}
