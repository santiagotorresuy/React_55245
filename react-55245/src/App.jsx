import "./App.css"  
import { Header } from "./componentes/Header/Header.jsx"
import { NavBar } from './componentes/NavBar/NavBar.jsx'
import { Producto } from "./componentes/ItemListContainer/ItemListContainer.jsx"


function App() {
  
  return (
   <div>
      <Header/>
      <NavBar/> 
      <Producto nombre="Lenovo IdealPad" precio={200} stock={3}/>
   </div>
  )
}

export default App
