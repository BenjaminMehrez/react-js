import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CartWidget from './components/CartContainer/cartContainer'
import NavBar from './components/NavBar/NavBar'
import { CartContextProvider } from './Context/CartContext'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import './App.css'


function App() {

    return (
        <BrowserRouter>
            <CartContextProvider>
                <>
                 
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<ItemListContainer />} />
                        <Route path='/categoria/:cid' element={<ItemListContainer />} />

                        <Route path='/detail/:pid' element={<ItemDetailContainer />} />

                        <Route path='/cart' element={<CartWidget />} />
                    </Routes>

                </>
            </CartContextProvider>

        </BrowserRouter>

    )
}

export default App