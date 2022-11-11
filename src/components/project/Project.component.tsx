import { ReactElement } from 'react'
import { IProject } from './project.interface'
import './project.styles.scss'

export function Project ({ name, image, links }: IProject): ReactElement {
  return (
    <div className='project'>
      <img className='project__img' src={image} alt="" />
      <div className='project__info'>
        <span className='project__name'>{name}</span>
        <div className='project__links'>
          <a href={links.deploy}>
            <button className='project__link'>deploy</button>
          </a>
          <a href={links.repository}>
            <button className='project__link'>repo</button>
          </a>
        </div>
      </div>
    </div>
  )
}
