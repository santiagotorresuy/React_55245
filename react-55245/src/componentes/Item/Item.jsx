import { Link } from "react-router-dom"

export const Item = ({item}) =>{
    const URL = `/detail/${item.id}`

    return( 
        <div className="item__card">
            <div className="product__card">
                <h1 className="product__card__name">{item.title}</h1>
                <h2 className="product__card__category">{item.category}</h2>

                <img src={item.image} alt="" className="product__card__img"/>
                <p className="text-secondary fs-3">US$ {item.cost}</p>
                <Link className="btn btn-primary" to={URL} >Ver mas</Link>
            </div>
        </div>
    )
}  