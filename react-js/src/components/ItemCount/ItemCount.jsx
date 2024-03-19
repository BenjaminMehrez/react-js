import { useCount } from '../../hooks/useCount'

const ItemCount = ({initial=1, stock=5, min=1, onAdd}) => {

    const {contador, increment, decrement, reset} = useCount(1, stock, initial )

    function handleInput(){
        onAdd(contador)
    }


    return (
        <div className='contador'>
            <button className='mas' onClick={increment}> + </button>
            <label className='numero'>{contador}</label>
            <button className='menos' onClick={decrement}> - </button>
            <br />
            <button className='agregar' onClick={handleInput}>Agregar</button>
        </div> 
    )
}

export default ItemCount