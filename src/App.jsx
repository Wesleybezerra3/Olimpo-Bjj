import { useState } from 'react'
import {Header} from './components/header'
import {Hero} from './components/hero_section'
import {Objetivo} from './components/objetivos'
import { Footer } from './components/footer'
import { Section_traineer } from './components/section_traineer'
import { Menu } from './components/menu'



function App() {
  
 const [isMenuOpen, setIsMenuOpen] = useState(false)

 const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
    blockScroll(isMenuOpen)
 }

 function blockScroll(isMenuOpen){
  
    if (!isMenuOpen){
      document.body.style.overflow ='hidden';
      return;
    }
    document.body.style.overflow ='auto';
 }

  return (
    <>
    <Header toggleMenu = {toggleMenu}/>
    <Menu isMenuOpen = {isMenuOpen} toggleMenu = {toggleMenu}/>
    <Hero/>
    <Objetivo/>
    <Section_traineer/>
    <Footer/>
    </>
  )
}

export default App
