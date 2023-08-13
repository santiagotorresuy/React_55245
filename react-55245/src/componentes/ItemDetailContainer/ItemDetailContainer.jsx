import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Loader } from "../Loader/Loader";
import { ItemDetail } from "../ItemDetail/ItemDetail";
 
// import { useProducts } from "../../hooks/useProducts";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase/config";



export const ItemDetailContainer = () =>{
    const [loading, setLoading] = useState(true)
    const [ item, setItem ] = useState(null)

    const { itemId } = useParams()

    useEffect(() =>{
        setLoading(true)

        const itemRef = doc(db, "productos", itemId)

        getDoc(itemRef)
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [])

    return(
        <div className="container item__detail__container">
            {
                loading
                    ? <Loader/> 
                    : <ItemDetail item={item} /> 
            }
        </div>
    )
} 