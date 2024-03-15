import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({children}) =>{

    const [cartList, setCartList] = useState([])

    function agregarAlCart(newProduct){

        const indexProduct = cartList.findIndex(product => product.id === newProduct.id)

        if (indexProduct === -1) {
            setCartList([
                ...cartList,
                newProduct
            ])   
        } else{
            cartList[indexProduct].quantity += newProduct.quantity
            setCartList([...cartList])
        }
    }


    const cantidadTotal = () => cartList.reduce((cantidadTotal, objProduct) => cantidadTotal += objProduct.quantity, 0 )

    const precioTotal = () =>{
        return cartList.reduce((totalPrice, objProduct) => totalPrice += (objProduct.price * objProduct.quantity), 0)
    }

    function vaciarCarrito(){
        setCartList([])
    }

    const eliminarCantidad = (pid) =>{
        setCartList(cartList.filter(product => product.id !== pid))
    }

    const eliminarItem = (pid) =>{
        const indexProduct = cartList.findIndex(product => product.id === pid)

        if (cartList[indexProduct].quantity > 1) {
            cartList[indexProduct].quantity = cartList[indexProduct].quantity -1
            setCartList([...cartList])
        } else {         
            setCartList(cartList.filter(product => product.id !== pid))
        }
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarAlCart,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            eliminarCantidad,
            eliminarItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

