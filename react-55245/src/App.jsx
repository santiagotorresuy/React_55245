import "./App.css"
import "./styles/styles.scss"  
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import { Header } from "./componentes/Header/Header.jsx"
import { NavBar } from './componentes/NavBar/NavBar.jsx'
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer.jsx"
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { CartContext } from "./context/CartContext";

function App() {
  const [cart, setCart] = useState([])
  const [cartIcon, setCartIcon] = useState("d-none")

  
  const addCart = (item) =>{
    setCart([...cart, item])
  }
  
  const isInCart = (id) =>{
    return cart.some((item) => item.id === id)
  }
  
  return (
    <CartContext.Provider value={{
        cart,
        addCart,
        isInCart,
        cartIcon,
        setCartIcon
    }}>
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
    </CartContext.Provider>
  )
}

export default App
