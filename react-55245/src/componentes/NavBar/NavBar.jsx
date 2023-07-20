import "./NavBar.scss"
import { Link } from "react-router-dom"

export const NavBar = (props) => {

    return(
        <div className="navbar__container">
            <ul className="navbar__container__list">
                <li><Link className="navbar__link" to="*">Pokeballs</Link></li>
                <li><Link className="navbar__link" to="*">Curaciones</Link></li>
                <li><Link className="navbar__link" to="*">Vitaminas</Link></li>
                <li><Link className="navbar__link" to="*">Boost de stats</Link></li>
                <li><Link className="navbar__link" to="*">Evolution</Link></li>
            </ul>
        </div>
    )
}