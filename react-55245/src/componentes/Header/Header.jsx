import "./Header.scss"
import { Title } from "../Title/Title"

export const Header = () =>{
    return(
        <header className="header">
            <Title/>
            <form action="" className="header__form">
                <input type="text" className="header__form__input"/>
                <button type="submit">Buscar</button>
            </form>
            <p>cart</p>
        </header>
    )
}