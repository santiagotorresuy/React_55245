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

    const { categoryId } = useParams();


    useEffect(() => {
        fetchItemsFiltrados(url, categoryId)
    }, [url, categoryId]);
    
    const fetchItemsFiltrados = (url, categoryId) => {
        let apiUrl = url;

        if (categoryId) {
          apiUrl = `https://pokeapi.co/api/v2/item-category/${categoryId}/`;
        }
    
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            setList(data.items || data.results);
            setPagination({
              next: data.next,
              previous: data.previous,
            });
          });
    };

    /*
    useEffect(() =>{
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setList(data.results)

                setPagination({
                    next: data.next,
                    previous: data.previous
                })
            })
    }, [url])
    */

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
            <div className="row justify-content-between mb-5">
                <button onClick={handlePrevious} className="btn btn-primary col-2">Previous</button>
                <button onClick={handleNext} className="btn btn-primary col-2 ">Next</button>
            </div>
        </div>
    )
}


