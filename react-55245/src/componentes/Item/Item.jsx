


export const Item = ({item}) =>{
    return(
        <div className="product__card col-3 m-2">
            <h1>{item.nombre}</h1>
            <h2>{item.modelo}</h2>
            <img src={item.imagen} alt="" className="product__card__img"/>
            <p>Precio: {item.precio} $USD</p>
        </div>
    )
}