import { Link } from "react-router-dom"

export const Item = ({item}) =>{
    const URL = `/detail/${item.id}`

    return(
        <div className="product__card">
            <h1 className="product__card__name">{item.name}</h1>
            <h2 className="product__card__category">{item.category.name}</h2>
            <img src={item.sprites.default} alt="" className="product__card__img"/>
            <p>Precio: $USD {item.cost}</p>
            <Link className="btn btn-primary" to={URL} >Ver mas</Link>
        </div>
    )
}