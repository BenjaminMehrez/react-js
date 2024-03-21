import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import './Menu.css';

function Menu() {


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
                    <li><NavLink to='/'>Inicio</NavLink></li>
                    <li><NavLink to='/categoria/remeras'>Remeras</NavLink></li>
                    <li><NavLink to='/categoria/zapatillas'>Zapatillas</NavLink></li>
                    <li><NavLink to='/categoria/camperas'>Camperas</NavLink></li>
                    <li><NavLink to='/categoria/conjuntos'>Conjuntos</NavLink></li>
                </ul>
            </nav>
        </div>


    )
}

export default Menu;
