import { useEffect, useState } from "react";

export const useFetch= (url) =>{
    const [data, setData] = useState(null)
    
    useEffect(() =>{
        fetch(url) 
            .then((result) => result.json)
            .then((data) => setData(data))
            .catch((err) => console.log(err))
    }, [])

    return { data }
}