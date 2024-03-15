export default function Select({ options, optionSelected, option = 1 }) {

    return (
        <>
            {option === 1 ?
                <img src='https://http2.mlstatic.com/D_NQ_NP_847504-MLA50752369333_072022-O.webp' alt='foto'/>
                :
                <img src='https://http2.mlstatic.com/D_NQ_NP_813893-MLA50752382031_072022-O.webp' alt='foto'/> 
            }
            
            <select 
                onChange={(evt) => optionSelected(Number(evt.target.value))}
                
            >
                
            {
                options.map((val)=>(
                    <option value={val.value}>{val.text}</option>
                ))
            }
            
            </select>
        </>

    )
}