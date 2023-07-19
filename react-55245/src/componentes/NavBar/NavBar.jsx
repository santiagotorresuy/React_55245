import "./NavBar.scss"

export const NavBar = (props) => {

    return(
        <div className="navbar__container">
            <ul className="navbar__container__list">
                <li><a href="">Celulares</a></li>
                <li><a href="">Laptops</a></li>
                <li><a href="">Equipos Armados</a></li>
                <li><a href="">Componentes</a></li>
                <li><a href="">Accesorios</a></li>
            </ul>
        </div>
    )
}