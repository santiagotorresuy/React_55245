import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"


const ItemCount = ({ item, quantity, handleAdd, handleSubstract, handleAddCart }) =>{
    const { isInCart } = useContext(CartContext)
 
    return(
        <div className="item__count"> 
            <div className="item__count__quantity"> 
                <button onClick={handleSubstract} className="item__count__quantity__btn">-</button>
                <span className="ps-2 pe-2">{quantity}</span>
                <button onClick={handleAdd} className="item__count__quantity__btn">+</button>

            </div>
            {
                !isInCart(item.id)
                    ? <button onClick={handleAddCart} type="button" className="item__count__cart">Agregar al carrito</button>
                    : <Link onClick={handleAddCart} className="item__count__cart" to="/cart">Terminar mi compra</Link>
            }
        </div>
    )
}

export default ItemCount

