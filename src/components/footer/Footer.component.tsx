import { ReactElement } from 'react'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import './footer.styles.scss'

export function Footer (): ReactElement {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <div className='footer__social'>
          <a href=""><SiGithub /></a>
          <a href=""><SiLinkedin /></a>
        </div>
        <div>
          <span className='footer__creator'>By Nicolás Preiti</span>
        </div>
      </div>
    </footer>
  )
}
