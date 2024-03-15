import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"

const InputCount = () => {

    return (
        <>
            <Link to='/cart'>
                <button onClick={() => console.log('ir al cart')}>
                    Ir al carrito
                </button>
            </Link>
            <Link to='/'>
                <button onClick={() => console.log('ir al menu')}>Seguir Comprando</button>
            </Link>
        </>
    )
}

function ButtonCount({ handleInter }) {
    return (
        <>
            <div>
                <ItemCount initial={1} stock={5} />
            </div>
            <button onClick={handleInter}>
                Agregar al Carrito
            </button>
        </>

    )
}


const Intercambialidad = () => {

    const [inputType, setInputType] = useState('button')

    function handleInter() {
        setInputType('input')

    }

    return (
        <>
            {
                inputType === 'button' ?
                    <ButtonCount handleInter={handleInter} />
                    :
                    <InputCount />
            }
        </>

    )
}

export default Intercambialidad