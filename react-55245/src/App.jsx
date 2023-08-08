import "./styles/styles.scss"  
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import { Header } from "./componentes/Header/Header.jsx"
import { NavBar } from './componentes/NavBar/NavBar.jsx'
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer.jsx"
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer"

function App() {
  
  return (
   <BrowserRouter>
      <Header/> 
      <NavBar/> 

      <Routes>
        <Route path="/" element= {<ItemListContainer/>}/>
        <Route path="/detail/:itemId" element= {<ItemDetailContainer/>}/>
        <Route path="/category/:categoryId" element= {<ItemListContainer/>}/>
        <Route path="/item/:id" element= {<ItemDetailContainer/>}/>
        <Route path="*" element={ <Navigate to="/"/> }/>
      </Routes>

   </BrowserRouter>
  )
}

export default App
