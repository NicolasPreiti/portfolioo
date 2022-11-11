import { skills } from '@/data/skills.data'
import { ReactElement } from 'react'
import { Skill } from '../skill/Skill.component'
import './skills.styles.scss'

const title = 'skills'

export function Skills (): ReactElement {
  return (
    <section id='skills' className='skills'>
      <h2 className='skills__title'>{ title }</h2>
      <div className='skills__container'>
        {skills.map(s => (
            <Skill key={s.name} name={s.name} icon={s.icon} />
        ))}
      </div>
    </section>
  )
}
