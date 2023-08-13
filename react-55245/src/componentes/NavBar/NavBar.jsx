import { Link } from "react-router-dom"


export const NavBar = () => {

    return(
        <div className="navBar">
            <ul className="navBar__ul">
                <li className="navBar__ul__li"><Link className="navBar__link" to="/">Todos</Link></li>
                <li className="navBar__ul__li"><Link className="navBar__link" to="/category/Productos_armados">Equipos armados</Link></li>
                <li className="navBar__ul__li"><Link className="navBar__link" to="/category/Notebooks">Notebooks</Link></li>
                <li className="navBar__ul__li"><Link className="navBar__link" to="/category/Consolas">Consolas</Link></li>
                <li className="navBar__ul__li"><Link className="navBar__link" to="/category/Monitores">Monitores</Link></li>
                <li className="navBar__ul__li"><Link className="navBar__link" to="/category/Pendrives_memorias">Pendrives y memorias</Link></li>
            </ul>
        </div>
    )       
    
}