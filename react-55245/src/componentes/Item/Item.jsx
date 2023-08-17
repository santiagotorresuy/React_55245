import { Link } from "react-router-dom"

export const Item = ({item}) =>{
    const URL = `/detail/${item.id}`

    return( 
            <div className="product__card">
                <h1 className="product__card__name">{item.title}</h1>
                <h2 className="text-secondary fs-6">{item.category}</h2>

                <img src={item.image} alt="" className="product__card__img"/>
                <p className="text-secondary fs-3">US$ {item.cost}</p>
                <Link className="product__card__btn" to={URL} >Ver mas</Link>
            </div>
    )
}    