import { ISkill } from '@/components/skill/skill.interface'
import { SiCss3, SiGit, SiGithub, SiHtml5, SiMysql, SiNodedotjs, SiReact, SiSass, SiTypescript, SiSequelize, SiJest, SiJava, SiAmazons3 } from 'react-icons/si'

export const skills: ISkill[] = [
  {
    name: 'typescript',
    icon: SiTypescript
  },
  {
    name: 'node',
    icon: SiNodedotjs
  },
  {
    name: 'mysql',
    icon: SiMysql
  },
  {
    name: 'sequelize',
    icon: SiSequelize
  },
  {
    name: 'java',
    icon: SiJava
  },
  {
    name: 'react',
    icon: SiReact
  },
  {
    name: 'html',
    icon: SiHtml5
  },
  {
    name: 'css',
    icon: SiCss3
  },
  {
    name: 'sass',
    icon: SiSass
  },
  {
    name: 'jest/testing',
    icon: SiJest
  },
  {
    name: 'aws s3',
    icon: SiAmazons3
  },
  {
    name: 'git',
    icon: SiGit
  },
  {
    name: 'github',
    icon: SiGithub
  }
]
