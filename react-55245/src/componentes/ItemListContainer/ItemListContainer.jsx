import "./ItemListContainer.css"

export const Producto = ({nombre, precio, stock}) =>{
    return(
        <div className="carta_producto">
            <h1>{nombre}</h1>
            <img src="./cart.png" alt="" className="img_producto"/>
            <p>{precio}$</p>
            <p>{stock} unidades</p>
        </div>
    )
}