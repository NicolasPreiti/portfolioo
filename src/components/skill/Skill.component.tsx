import { ReactElement } from 'react'
import { ISkill } from './skill.interface'
import './skill.styles.scss'

export function Skill ({ name, ...p }: ISkill): ReactElement {
  return (
    <div key={name} className="skill">
      <p.icon className="skill__icon" />
      <div className="skill__info">
        <i className="skill__name">{name}</i>
      </div>
    </div>
  )
}
