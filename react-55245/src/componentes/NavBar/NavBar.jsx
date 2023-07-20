import "./NavBar.scss"
import { Link } from "react-router-dom"

export const NavBar = (props) => {

    return(
        <div className="navbar__container">
            <ul className="navbar__container__list">
                <li><Link className="navbar__link" to="/">Todos</Link></li>
                <li><Link className="navbar__link" to="/category/standard-balls">Pokeballs</Link></li>
                <li><Link className="navbar__link" to="/category/healing">Curaciones</Link></li>
                <li><Link className="navbar__link" to="/category/vitamins">Vitaminas</Link></li>
                <li><Link className="navbar__link" to="/category/stat-boosts">Boost de stats</Link></li>
                <li><Link className="navbar__link" to="/category/evolution">Evolution</Link></li>
            </ul>
        </div>
    )
}