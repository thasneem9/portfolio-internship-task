
import './App.css'
import { AbouteMe } from './components/AbouteMe'
import ContactMe from './components/ContactMe'
import Header  from './components/Header'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'
function App() {


  return (
    <>
     <NavBar/>
     <Header/>
     <AbouteMe/>
     <Skills/>
     <Projects/>
  
     <ContactMe/>
   
    </>
  )
}

export default App
