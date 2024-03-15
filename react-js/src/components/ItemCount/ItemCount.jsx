import { useCount } from '../../hooks/useCount'

const ItemCount = ({initial=1, stock=5, min=1, onAdd}) => {

    const {contador, increment, decrement, reset} = useCount(1, stock, initial )

    function handleInput(){
        onAdd(contador)
    }


    return (
        <>
            <button onClick={increment}> + </button>
            <label>{contador}</label>
            <button onClick={decrement}> - </button>
            <button onClick={handleInput}>Agregar</button>
        </> 
    )
}

export default ItemCount