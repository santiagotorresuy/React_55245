import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Cart } from "../Cart/Cart"


export const CartView = () =>{
    const { cart, removeItem, emptyCart, buyItems, totalPrice } = useContext(CartContext)

    return(
        <Cart 
            cart={cart}
            removeItem={removeItem}
            emptyCart={emptyCart}
            buyItems={buyItems}
            totalPrice={totalPrice}
        />
    )
}

