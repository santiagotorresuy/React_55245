import "./ItemList.scss"
import { ItemCard } from "../ItemCard/ItemCard"


const ItemList = ({itemList}) =>{
    return(
        <div className="row">
                    {
                       itemList && itemList.map((item) => (<ItemCard key={item.name} url={item.url}/>))
                    }
        </div>

    )
}

export default ItemList