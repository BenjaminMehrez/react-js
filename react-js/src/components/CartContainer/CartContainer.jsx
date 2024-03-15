import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from 'firebase/firestore'
import { useCartContext } from "../../Context/CartContext"
import { useState } from 'react'

const CartContainer = () => {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const { cartList, vaciarCarrito, precioTotal, eliminarItem, eliminarCantidad } = useCartContext()

    const handleComprar = (e) => {

        e.preventDefault()

        const orden = {
            buyer: formData,
            items: cartList.map(({ id, name, price }) => ({ id, name, price })),
            total: precioTotal()
        }

        const db = getFirestore()
        const queryCollection = collection(db, 'ordenes')

        addDoc(queryCollection, orden)
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
            .finally(() =>
                console.log('compra terminada'),
                vaciarCarrito()
            )
    }

    function handleForm(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    return (
        cartList.length === 0 ?

            <h2>No hay productos en el carrito</h2>

            :
            <div>
                <div className="card container">
                    {cartList.map(product => (
                        <div className="card-body" key={product.id}>
                            <img src={product.img} alt="img" />
                            <label>Nombre: {product.name}</label>
                            <label>Price: ${product.price}</label>
                            <label>Cantidad: {product.quantity}</label>
                            <button onClick={() => eliminarItem(product.id)}>Quitar -1</button>
                            <button onClick={() => eliminarCantidad(product.id)}>Eliminar Producto</button>
                        </div>
                    ))}
                </div>
                <div className='container'>
                    <h3>Precio Total: ${precioTotal()}</h3>
                    <button onClick={vaciarCarrito}>Vaciar carrito</button>
                    <form>
                        <input
                            type="text"
                            name='name'
                            placeholder='Nombre'
                            onChange={handleForm}
                            value={formData.name}
                        />
                        <input
                            type="text"
                            name='email'
                            placeholder='Email'
                            onChange={handleForm}
                            value={formData.email}
                        />
                        <input
                            type="text"
                            name='phone'
                            placeholder='Telefono'
                            onChange={handleForm}
                            value={formData.phone}
                        />
                    </form>
                    <button onClick={handleComprar}>Comprar</button>
                </div>
            </div>
    )
}

export default CartContainer








//ACTUALIZAR PRODUCTO
// const queryDoc = doc(db, 'productos', 'T8NUlSi1MYTq2JZJa9aZ')

// updateDoc(queryDoc,{
//     stock: 4
// })

//REALIZAR MULTIPLE OPERACIONES
// const queryCollection = collection(db, 'ordenes')

// const queryDoc1 = doc(queryCollection)
// const queryDoc2 = doc(queryCollection)
// const queryDoc3 = doc(queryCollection, ' Id de la orden')

// const batch = writeBatch(db)

// batch.set(queryDoc1, {buyer: 'Nombre 1', items: [], total: 1040}),
// batch.set(queryDoc2, {buyer: 'Nombre 2', items: [], total: 1050}),
// batch.update(queryDoc3, {buyer: 'Nombre 3', items: [], total: 1060})

// batch.commit()
