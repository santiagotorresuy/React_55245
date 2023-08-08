import "./Item.scss"

export const Item = ({item}) =>{
    return(
        <div className="product__card">
            <h1 className="product__card__name">{item.name}</h1>
            <h2 className="product__card__category">{item.category.name}</h2>
            <img src={item.sprites.default} alt="" className="product__card__img"/>
            <p>Precio: $USD {item.cost}</p>
        </div>
    )
}