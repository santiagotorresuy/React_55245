import { createContext, useState } from "react";

export const CartContext = createContext()
 
export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    const [cartIndicator, setCartIndicator] = useState("d-none")
  

    const addCart = (item) =>{
      setCart( [...cart, item] )
    }
    
    const isInCart = (id) =>{
      return cart.some((item) => item.id === id)
    }

    const removeItem = (id) =>{
      setCart( cart.filter((item) => item.id !== id))
      setCartIndicator("d-none")
    }

    const emptyCart = () =>{
      setCart([])
      setCartIndicator("d-none")
    }

    const buyItems = () =>{
      setCart([])
    }

    const totalPrice = () =>{
      return cart.reduce((acc, item) => acc + item.quantity * item.cost, 0)
    } 

    return(
        <CartContext.Provider value={{
            cart,
            setCart,
            addCart,
            isInCart,
            cartIndicator,
            setCartIndicator,
            removeItem,
            emptyCart,
            buyItems,
            totalPrice,
        }}>
            {children}
        </CartContext.Provider>
    )
}