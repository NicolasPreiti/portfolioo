import { projects } from '@/data/projects.data'
import { ReactElement } from 'react'
import { Project } from '../project/Project.component'
import './projects.styles.scss'

const title = 'projects'

export function Projects (): ReactElement {
  return (
    <section id='projects' className='projects'>
      <h1 className='projects__title'>{title}</h1>
      <section className='projects__container'>
        {projects.map(p => (
          <Project key={p.name} name={p.name} image={p.image} links={p.links} />
        ))}
      </section>
    </section>
  )
}
