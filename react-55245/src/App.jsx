import "./App.css"
import "./styles/styles.scss"  
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import { Header } from "./componentes/Header/Header.jsx"
import { NavBar } from './componentes/NavBar/NavBar.jsx'
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer.jsx"
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./context/CartContext";
import { CartView } from "./componentes/CartView/CartView";


function App() {
  
  return (
    <CartProvider>
      <BrowserRouter>
          <Header/> 
          <NavBar/> 

          <Routes>
            <Route path="/" element= { <ItemListContainer/> }/>
            <Route path="/detail/:itemId" element= { <ItemDetailContainer/> }/>
            <Route path="/category/:categoryId" element= { <ItemListContainer/> }/>
            <Route path="/item/:id" element= { <ItemDetailContainer/> }/>
            <Route path="/cart" element= { <CartView/> }/>
            <Route path="*" element={ <Navigate to="/"/> }/>
          </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
