import { NavLink } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import  './NavBar.css'


const NavBar = () => {

    const { cantidadTotal } = useCartContext()

    return (
        <>
            <header className="header">
                <nav className="nav container">
                    <NavLink to="" className="logo">
                        <h2 className="titulo">Adidas</h2>
                    </NavLink>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'nav-link-underline' : 'nav-link'}>Inicio</NavLink>
                    <NavLink to='/categoria/remeras' className={({ isActive }) => isActive ? 'nav-link-underline' : 'nav-link'}>Remeras</NavLink>
                    <NavLink to='/categoria/zapatillas' className={({ isActive }) => isActive ? 'nav-link-underline' : 'nav-link'}>Zapatilla</NavLink>
                    <NavLink to='/categoria/camperas' className={({ isActive }) => isActive ? 'nav-link-underline' : 'nav-link'}>Camperas</NavLink>
                    <NavLink to='/categoria/conjuntos' className={({ isActive }) => isActive ? 'nav-link-underline' : 'nav-link'}>Conjuntos</NavLink>
                    <NavLink to='/cart' className={({ isActive }) => isActive ? 'nav-link-underline' : 'nav-link'}>{cantidadTotal() > 0 && cantidadTotal()}🛒</NavLink>
                </nav>
            </header>
        </>

    )
}

export default NavBar 


