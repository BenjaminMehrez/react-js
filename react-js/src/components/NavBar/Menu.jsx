import { useCartContext } from "../../Context/CartContext"
import { Link, NavLink } from "react-router-dom"
import { useState } from 'react';

import './Menu.css';

function Menu() {

    const { cantidadTotal } = useCartContext()

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            <button className="menu-toggle" onClick={toggleMenu}>
                {showMenu ? 'Cerrar' : 'Menú'}
            </button>
            <nav className={showMenu ? 'menu active' : 'menu'}>
                <ul>
                    <li><a href='/'>Inicio</a></li>
                    <li><a href='/categoria/remeras'>Remeras</a></li>
                    <li><a href='/categoria/zapatillas'>Zapatillas</a></li>
                    <li><a href='/categoria/camperas'>Camperas</a></li>
                    <li><a href='/categoria/conjuntos'>Conjuntos</a></li>
                </ul>
            </nav>
        </div>


    )
}

export default Menu;




{/* <div>
<button className="menu-toggle" onClick={toggleMenu}>
    {showMenu ? 'Cerrar' : 'Menú'}
</button>
<nav className={showMenu ? 'menu active' : 'menu'}>
    <ul>
        <NavLink to='/' className={({ isActive }) => isActive ? 'nav-link-underline' : 'nav-link'}>Inicio</NavLink>
        <NavLink to='/categoria/remeras' className={({ isActive }) => isActive ? 'nav-link-underline' : 'nav-link'}>Remeras</NavLink>
        <NavLink to='/categoria/zapatillas' className={({ isActive }) => isActive ? 'nav-link-underline' : 'nav-link'}>Zapatillas</NavLink>
        <NavLink to='/categoria/camperas' className={({ isActive }) => isActive ? 'nav-link-underline' : 'nav-link'}>Camperas</NavLink>
        <NavLink to='/categoria/conjuntos' className={({ isActive }) => isActive ? 'nav-link-underline' : 'nav-link'}>Conjuntos</NavLink>
        <NavLink to='/cart' className='cart'>{cantidadTotal() > 0 && cantidadTotal()}🛒</NavLink>
    </ul>
</nav>
</div> */}