import "./NavBar.scss"

export const NavBar = (props) => {

    return(
        <div className="navbar__container">
            <ul className="navbar__container__list">
                <li><a className="navbar_link" href="">Celulares</a></li>
                <li><a className="navbar_link" href="">Laptops</a></li>
                <li><a className="navbar_link" href="">Equipos Armados</a></li>
                <li><a className="navbar_link" href="">Componentes</a></li>
                <li><a className="navbar_link" href="">Accesorios</a></li>
            </ul>
        </div>
    )
}