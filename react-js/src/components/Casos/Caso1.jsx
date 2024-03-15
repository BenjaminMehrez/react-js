import React, { useState } from 'react'
import Select from './Select1'



const options = [
    {value: 1, text: "Azul"},
    {value: 2, text: "Rojo"},
]

const Caso1 = () => {

    const [option, setOption] = useState(1)

    function optionSelected(value) {
        setOption(value)
    }

    return (
        <Select option={option} optionSelected={optionSelected} options={options}/>
    )

}

export default Caso1