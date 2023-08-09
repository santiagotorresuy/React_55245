import { Link } from "react-router-dom"

export const NavBar = () => {

    return(
        <div className="navBar">
            <ul className="navBar__ul">
                <li className="navBar__ul__li"><Link className="navBar__link" to="/">Todos</Link></li>
                <li className="navBar__ul__li"><Link className="navBar__link" to="/category/standard-balls">Pokeballs</Link></li>
                <li className="navBar__ul__li"><Link className="navBar__link" to="/category/healing">Curaciones</Link></li>
                <li className="navBar__ul__li"><Link className="navBar__link" to="/category/vitamins">Vitaminas</Link></li>
                <li className="navBar__ul__li"><Link className="navBar__link" to="/category/stat-boosts">Boost de stats</Link></li>
                <li className="navBar__ul__li"><Link className="navBar__link" to="/category/evolution">Evolution</Link></li>
            </ul>
        </div>
    )
}