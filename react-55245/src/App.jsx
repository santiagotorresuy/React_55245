import "./styles/styles.scss"  
import "./App.css"
import { Header } from "./componentes/Header/Header.jsx"
import { NavBar } from './componentes/NavBar/NavBar.jsx'
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
   <div>
      <Header/> 
      <NavBar/> 
      <ItemListContainer/>
   </div>
  )
}

export default App
