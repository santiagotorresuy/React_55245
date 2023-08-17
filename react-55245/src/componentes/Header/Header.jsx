import { useContext, useState } from "react"
import { Link } from "react-router-dom"

import { Title } from "../Title/Title"
import { CartContext } from "../../context/CartContext"


export const Header = () =>{
    const { cart, cartIndicator } = useContext(CartContext)
    const indicatorNumber = cart.length
    
    // const { products, setProducts } = useContext(ProdContext)
    // const [ input, setInput ] = useState("")


    // const handleChange = (e) =>{
    //     setInput(e.target.value)
    // }

    // const handleSubmit = (e) =>{
    //     e.preventDefault()
        
    //     const prodsByInput = products.find(prod => prod.title === input)
    //     setProducts(prodsByInput)
    // }

    return(
        <header className="header">
            <Title/>
            <form className="header__form">
                <input type="text" className="header__form__input" placeholder="Search..."/>
                <button className="header__form__btn" type="submit">Buscar</button>
            </form>
            <Link to="./cart" className="header__cart">
                <img src="/cart.png" alt="" className="header__cart__img"/>
                <p className={cartIndicator}>{indicatorNumber}</p> 
            </Link>
        </header> 
    )
}