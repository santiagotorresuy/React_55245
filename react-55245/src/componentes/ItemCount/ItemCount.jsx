import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const ItemCount = ({ quantity, item, setQuantity }) =>{
    const { addCart, isInCart, setCartIcon } = useContext(CartContext)


    const handleAdd = () =>{
        quantity < 20 && setQuantity(prevQuantity => prevQuantity + 1)
    }

    const handleSubstract = () =>{
        quantity > 1 && setQuantity(prevQuantity => prevQuantity - 1)
    }    

    const handleAddCart = () =>{
        const newItem = {
            ...item,
            quantity
        }

        addCart(newItem)
        setCartIcon("header__cart__indicator--on")
    }

    return(
        <div className="item__count">
            <div className="item__count__quantity">
                <button onClick={handleSubstract} className="btn btn-primary">-</button>
                <span className="ps-2 pe-2">{quantity}</span>
                <button onClick={handleAdd} className="btn btn-primary">+</button>
            </div>
            {
                isInCart(item.id)
                    ? <Link className="item__count__cart" to="/cart">Terminar mi compra</Link>
                    : <button onClick={handleAddCart} type="button" className="item__count__cart">Agregar al carrito</button>
            }
        </div>
    )
}

export default ItemCount

