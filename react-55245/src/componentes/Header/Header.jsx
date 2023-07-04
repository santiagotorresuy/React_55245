import "./Header.css"

export const Header = () =>{
    return(
        <header className="header">
            <h1>TITLE</h1>
            <form action="" className="form">
                <input type="text" />
                <button type="submit">Buscar</button>
            </form>
            <img src="./cart.png" alt="" className="cart"/>
        </header>
    )
}