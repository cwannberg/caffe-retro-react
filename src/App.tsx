
import { Header } from './Components/Header'
import { Mainsection } from './Components/Mainsection'
import './assets/index.css'

function App() {

  return (
    <>
        <Header/>
        <main>
          <Mainsection part = "hot"/>
          <Mainsection part = "juicy"/>
          <Mainsection part = "cosy"/>
        </main>
        
    </>
  )
}

export default App
