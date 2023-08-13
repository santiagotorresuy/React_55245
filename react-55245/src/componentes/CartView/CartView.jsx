import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { CartWidget } from "../CartWidget/CartWidget"


export const CartView = () =>{
    const { cart, removeItem, emptyCart, buyItems, totalPrice } = useContext(CartContext)

    
    return(
        <div className="container d-flex w-100 justify-content-center">
            {
                cart.length === 0 
                    ?   <img src="https://kirti.skoozo.com/assets/img/empty-cart.png" alt="" />
                    :   <CartWidget 
                            cart={cart}
                            removeItem={removeItem}
                            emptyCart={emptyCart}
                            buyItems={buyItems} 
                            totalPrice={totalPrice}  
                        />   
            }
        </div>
    )
}

 