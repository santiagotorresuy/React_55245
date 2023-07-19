import "./ItemListContainer.scss"

export const Producto = ({nombre, precio, stock}) =>{
    return(
        <div className="product__card">
            <h1>{nombre}</h1>
            <img src="./cart.png" alt="" className="product__card__img"/>
            <p>{precio}$</p>
            <p>{stock} unidades</p>
        </div>
    )
}