//import { Item } from "../Item/Item"
import { PokemonItemCard } from "../PokemonItemCard/PokemonItemCard"


const ItemList = ({itemList}) =>{
    return(
        <div className="row">
                    {
                        itemList && itemList.map((item) => (<PokemonItemCard key={item.name} url={item.url}/>))
                    }
        </div>
    )
}

export default ItemList