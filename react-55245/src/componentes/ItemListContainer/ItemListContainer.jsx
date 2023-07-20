//import { pedirDatos }  from "../../helpers/pedirDatos";
//import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.scss"
import { useEffect, useState } from "react"
import { PokemonItemCard }  from "../PokemonItemCard/PokemonItemCard";
import { useParams } from "react-router-dom"
import  useFetch  from "../../hooks/useFetch";


export const ItemListContainer = () =>{
    const [itemList, setList] = useState([])
    const [retry, setRetry] = useState(0)
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/item`)
    
    const { categoryId } = useParams();


    /*const url = `https://pokeapi.co/api/v2/item-category/${categoryId}/`

    const { list, pagination, loading, error } = useFetch(url, categoryId)

    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }*/
    
    const [pagination, setPagination] = useState({
        next: null,
        previous: null
    })


    useEffect(() =>{
        let urlFilter;

        if(categoryId){
            urlFilter =  `https://pokeapi.co/api/v2/item-category/${categoryId}/`
        }else{
            urlFilter = url
        }

        fetch(urlFilter)
            .then((response) => response.json())
            .then((data) => {
                setList(data.items || data.results)

                setPagination({
                    next: data.next,
                    previous: data.previous
                })
            })
    }, [url, categoryId, retry])

    useEffect(() =>{
        const i = setInterval (() =>{
            setRetry(v => v+1)
        }, 10000)

        return () => clearInterval(i)
    }, [])
    
    /*const fetchItemsFiltrados = (url, categoryId) => {
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
    };*/

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


