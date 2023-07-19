//import { pedirDatos }  from "../../helpers/pedirDatos";
//import ItemList from "../ItemList/ItemList";
//import { PokemonItemCard }  from "../PokemonItemCard/PokemonItemCard";

import "./ItemListContainer.scss"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"


export const ItemListContainer = () =>{
    const [itemList, setList] = useState([])

    useEffect(() =>{
        fetch(`https://pokeapi.co/api/v2/item`)
            .then((response) => response.json())
            .then((data) => {
                setList(data.results)
            })
    }, [])

    return(
        <div className="container">
            <h2>PokeItems</h2>
            <hr />
            <ItemList itemList={itemList}/>   
        </div>
    )
    /*const [productos, setProducts] = useState([]);

    useEffect(() => {
        pedirDatos()
            .then((result) => setProducts(result))
            .catch((error) => console.log(error))
    }, [])

    return(
        <div className="container_ItemList">
             <ItemList productos={productos}/>
         </div>    
    )*/
}

