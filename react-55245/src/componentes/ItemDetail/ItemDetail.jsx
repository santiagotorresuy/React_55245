import { useContext, useState } from "react"

import { CartContext } from "../../context/CartContext"
import  ItemCount  from "../ItemCount/ItemCount"

export const ItemDetail = ({item}) =>{
    const { cart, setCart, addCart,  setCartIndicator, isInCart } = useContext(CartContext)
    const [ quantity, setQuantity ] = useState(1) 


    //HANDLERS
    const handleAdd = () =>{
        quantity < item.stock && setQuantity(prevQuantity => prevQuantity + 1)
    }

    const handleSubstract = () =>{
        quantity > 1 && setQuantity(prevQuantity => prevQuantity - 1)
    }    

    const handleAddCart = () =>{
        const newItem = {
            ...item,
            quantity
        }

        if(!isInCart(item.id)) {
            addCart(newItem);
        } else {
            const updatedCart = cart.map(cartItem => {
                if (cartItem.id === item.id) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity + quantity 
                    };
                }
                return cartItem;
            });
    
            setCart(updatedCart);
        }
        setCartIndicator("header__cart__indicator--on");
    };

    //CODIGO
    return(
        <div className="item__detail">
            {   
                item && 
                    <>
                        <img className="item__detail__img" src={item.image} alt={item.title}/>    
                        <div className="item__details">
                            <h3 className="item__details__name">{item.title}</h3>
                            <p className="item__details__description">"{item.description}"</p>
                            <p className="text-secondary fs-3">Precio: US$ {item.cost}</p> 
                            <ItemCount
                                item = {item}
                                quantity = {quantity}
                                handleAddCart = {handleAddCart}
                                handleAdd = {handleAdd}
                                handleSubstract = {handleSubstract}
                            />    
                        </div>
                    </>
            }                           
        </div>
    ) 
}