import menu_svg from '../assets/menu.svg'
import logo from '../assets/olimpo_logo.svg'
import styles from '../modules/header.module.css'

export function Header( { toggleMenu }) {

  return (
    <>
    <header>
        <div className={styles.container_header}>
           <div>
             <button className={styles.menu} onClick={toggleMenu}>
                <img src={menu_svg} alt="Menu" />
             </button>
           </div>

           <div>
             <a href="index.html">
                <img src={logo} alt="Logo da OlimpoBjj" />
             </a>
           </div>

        </div>
    </header>
    </>
  )
}
