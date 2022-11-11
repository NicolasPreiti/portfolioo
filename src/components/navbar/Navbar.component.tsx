import { ReactElement, useRef, useState } from 'react'
import './navbar.styles.scss'

export function Navbar (): ReactElement {
  const nav = useRef(null) as any

  useState(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        nav.current.classList.add('nav--fixed')
      } else {
        nav.current.classList.remove('nav--fixed')
      }
    })
  })

  return (
    <nav className='nav' ref={nav}>
      <ul className='nav__ul container'>
        <li className='nav__li'><a href="#home">home</a></li>
        <li className='nav__li'><a href="#skills">skills</a></li>
        <li className='nav__li'><a href="#projects">projects</a></li>
      </ul>
    </nav>
  )
}
