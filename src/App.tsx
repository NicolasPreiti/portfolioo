import { ReactElement } from 'react'
import { Footer } from './components/footer/Footer.component'
import { Header } from './components/header/Header.component'
import { Navbar } from './components/navbar/Navbar.component'
import { Projects } from './components/projects/Projects.component'
import { Skills } from './components/skills/Skills.component'

function App (): ReactElement {
  return (
    <div className='container'>
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
