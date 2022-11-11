import { ReactElement } from 'react'
import './header.styles.scss'

const image = 'yo.jpg'
const presentation = [
  'Hi!!! I am',
  'Nicolás Preiti',
  'Backend Developer'
]

export function Header (): ReactElement {
  return (
    <header id='home' className='header'>
      <section className='presentation'>
        <span className='presentation__hi'>
          {presentation[0]}
        </span>
        <h1 className='presentation__name'>
        {presentation[1]}
        </h1>
        <span className='presentation__position'>
        {presentation[2]}
        </span>
      </section>
      <picture className='header__picture'>
        <img className='header__img' src={image} alt="" />
      </picture>
    </header>
  )
}
