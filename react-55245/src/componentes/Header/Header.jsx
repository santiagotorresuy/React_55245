import { Title } from "../Title/Title"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"


export const Header = () =>{
    const { cart, cartIcon } = useContext(CartContext)

    const indicatorNumber = cart.length

    return(
        <header className="header">
            <Title/>
            <form action="" className="header__form">
                <input type="text" className="header__form__input" placeholder="Search..."/>
                <button className="header__form__btn" type="submit">Buscar</button>
            </form>
            <div className="header__cart">
                <img src="/cart.png" alt="" className="header__cart__img"/>
                <p className={cartIcon}>{indicatorNumber}</p> 
            </div>
        </header>
    )
}