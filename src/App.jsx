
import './App.css'
import { NavBar } from './components/layout/NavBar'
import ItemsListContainer from './components/pages/itemsListContainer'


function App() {
  

  return (
    <div>
      <NavBar/>
      <ItemsListContainer greeting={"Este sera el espacio para los items de mascotas"}/>
    </div>
  )
}

export default App
