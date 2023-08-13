import { Item } from "../Item/Item"


const ItemList = ({itemList}) =>{

    return(
        <div className="item__list">          
                    {
                        itemList && itemList.map((item) => <Item key={item.id} item={item}/>)
                    }
        </div>  
    )
}
export default ItemList

