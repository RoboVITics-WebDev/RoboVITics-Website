import { useState } from 'react'
import About from './components/About'
import Events from './components/Events'
import Projects from './components/Projects'
import Orcus from './components/Orcus'
import Kartavya from './components/Kartavya'
import Sponsors from './components/Sponsors'
import Board from './components/Board'
import ContactUs from './components/ContactUs'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <About/>
     <Events/>
     <Projects/>
     <Orcus/>
     <Kartavya/>
     <Sponsors/>
     <Board/>
     <ContactUs/>
    </>
  )
}

export default App
