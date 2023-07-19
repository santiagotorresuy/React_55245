import "./Header.scss"

export const Header = () =>{
    return(
        <header className="header">
            <h1>TITLE</h1>
            <form action="" className="header__form">
                <input type="text" />
                <button type="submit">Buscar</button>
            </form>
            <img src="./cart.png" alt="" className="header__cart"/>
        </header>
    )
}