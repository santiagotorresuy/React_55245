import { useState } from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../Firebase/config"
import { OrderConfirm } from "../OrderConfirm/OrderConfirm"

export const Checkout = () =>{
    const { cart, totalPrice, emptyCart, setCartIndicator } = useContext(CartContext)
    const [ orderId, setOrderId ] = useState(null)
    const [ orderTotal, setOrderTotal ] = useState(0)

    const [values, setValues] = useState({
        nombre: "",
        celular: "",
        email: "",
    })

    const handleInputChange = (e) =>{
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()

        if(!values.nombre || !values.email || !values.celular){
            alert("Hay campos sin llenar!")
            return; 
        }

        const ordersRef = collection(db, "orders")

        const order = {
            client: values,
            items: cart.map(item => ({ id: item.id, title: item.title, cost: item.cost, quantity: item.quantity })),
            total: totalPrice(),
            fyh: new Date()
        }
        
        //BATCH (No pude hacerlo funcionar)
        // const batch = writeBatch(db)
        // const productsRef = collection(db, "products")
        // const q = query(productsRef, where( documentId(), "in", cart.map(prod => prod.id)))

        // const products = await getDocs(q)
        // const outOfStock = []

        // products.docs.forEach((doc) => {
        //     const item = cart.find(prod => prod.id === doc.id)
        //     const stock = doc.data().sock
            
        //     console.log(doc.ref)

        //     if(stock >= item.quantity){
        //         batch.update(doc.ref,{
        //             stock: stock - item.quantity
        //         })
        //     }else{
        //         outOfStock.push(item)
        //     }
        // })

        // if(outOfStock.length === 0) {
        //     await batch.commit()
        //     const doc = await addDoc(ordersRef, order)

        //     emptyCart()
        //     setOrderId(doc.id)
        // }else{
        //     alert("Hay items sin stock")
        //     console.log(outOfStock)
        // }

        await addDoc(ordersRef, order)
                .then((doc) =>{
                    emptyCart() 
                    setOrderId(doc.id)
                    setOrderTotal(order.total)
                })

        setCartIndicator("d-none")
    }

    if(orderId){
        return(
            <OrderConfirm 
                orderId={orderId}
                orderTotal={orderTotal}
            />
        )
    }

    return(
        <div className="checkout">
            <div className="checkout__container my-5">
                <h2>Checkout</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <input 
                        onChange={handleInputChange}
                        value={values.nombre}
                        type="text"
                        className="form-control my-2"
                        placeholder="Nombre"
                        name="nombre"
                    />

                    <input 
                        onChange={handleInputChange}
                        value={values.email}
                        type="Email"
                        className="form-control my-2"
                        placeholder="Email"
                        name="email"
                    />

                    <input 
                        onChange={handleInputChange}
                        value={values.celular}
                        type="Celular"
                        className="form-control my-2"
                        placeholder="Celular"
                        name="celular"
                    />

                    <button className="btn btn-success mt-4" type="submit">Enviar</button>
                </form>
            </div>  
        </div>
    )
}

