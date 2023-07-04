import "./NavBar.css"

export const NavBar = (props) => {

    return(
        <div className="contenedor_lista">
            <ul className="lista_categorias">
                <li><a href="">Celulares</a></li>
                <li><a href="">Laptops</a></li>
                <li><a href="">Equipos Armados</a></li>
                <li><a href="">Componentes</a></li>
                <li><a href="">Accesorios</a></li>
            </ul>
        </div>
    )
}