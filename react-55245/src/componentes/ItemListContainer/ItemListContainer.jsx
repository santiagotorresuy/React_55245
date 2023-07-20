//import { pedirDatos }  from "../../helpers/pedirDatos";
//import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.scss"
import { useEffect, useState } from "react"
import { PokemonItemCard }  from "../PokemonItemCard/PokemonItemCard";
import { useParams } from "react-router-dom"


export const ItemListContainer = () =>{
    const [itemList, setList] = useState([])
    const [pagination, setPagination] = useState({
        next: null,
        previous: null
    })
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/item`)

    //const { categoryId } = useParams()

    useEffect(() =>{
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setList(data.results)

                /*if(categoryId){
                    setList(data.result.find(item => item.category.name === categoryId))
                }else{
                    setList(data.results)
                }*/

                setPagination({
                    next: data.next,
                    previous: data.previous
                })
            })
    }, [url])

    const handleNext = () =>{
        pagination.next && setUrl(pagination.next)
    }

    const handlePrevious = () =>{
        pagination.previous && setUrl(pagination.previous)
    }

    return(
        <div className="container w-75 mt-4">
            <h2 className="mb-4">PokeItems</h2>
            <hr />
            
            <div className="row mb-4">

                {
                    itemList.map((item) => <PokemonItemCard key={item.name} url={item.url}/>)
                }

            </div>
            <div className="row justify-content-between">
                <button onClick={handlePrevious} className="btn btn-primary col-2">Previous</button>
                <button onClick={handleNext} className="btn btn-primary col-2 ">Next</button>
            </div>
        </div>
    )
}

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
