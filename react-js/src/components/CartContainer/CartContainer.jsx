import { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

import { useCartContext } from "../../Context/CartContext"

import './CartContainer.css'

const CartContainer = () => {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const { cartList, vaciarCarrito, precioTotal, eliminarItem, eliminarCantidad } = useCartContext()
    const [ comprado, setComprado ] = useState(true)

    const handleComprar = (e) => {

        e.preventDefault()
        setComprado(false)

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
        comprado ? (

            cartList.length === 0 ?

                <h2 className='product-cart'>No hay productos en el carrito</h2>

                :
                <div className='cart-container'>

                    <div className="cart-card">
                        {cartList.map(product => (
                            <div className="card-body-cart" key={product.id}>
                                <img className='img-cart' src={product.img} alt="img" />
                                <label>Nombre: {product.name}</label>
                                <label>Price: ${product.price}</label>
                                <label>Cantidad: {product.quantity}</label>
                                <button className='restar' onClick={() => eliminarItem(product.id)}>Quitar -1</button>
                                <button className='eliminar' onClick={() => eliminarCantidad(product.id)}>Eliminar Producto</button>
                            </div>
                        ))}
                    </div>

                    <div className='cart-form'>
                        <h3 className='precio-total'>Precio Total: ${precioTotal()}</h3>
                        <h3 className='cliente'>Cliente:</h3>
                        <form className='form' >
                            <input
                                className='cart-form-nombre'
                                type="text"
                                name='name'
                                placeholder='Nombre'
                                value={formData.name}
                                onChange={handleForm}
                            />
                            <input
                                className='cart-form-email'
                                type="text"
                                name='email'
                                placeholder='Email'
                                value={formData.email}
                                onChange={handleForm}
                            />
                            <input
                                className='cart-form-phone'
                                type="text"
                                name='phone'
                                placeholder='Telefono'
                                value={formData.phone}
                                onChange={handleForm}
                            />
                            <button className='cart-form-comprar' onClick={handleComprar}>Comprar</button>
                            <button className='cart-form-vaciar' onClick={vaciarCarrito}>Vaciar carrito</button>
                        </form >
                    </div>

                </div>
        ) :
            <h2 className='gracias'>GRACIAS POR SU COMPRA!!</h2>


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
