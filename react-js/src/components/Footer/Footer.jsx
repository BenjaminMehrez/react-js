import React from 'react'

import './Footer.css'

const Footer = () => {

    return (

        <footer className='footer'>
            <div className='container-footer'>
                <div className='suscribete'>
                    <p>Suscribete a nuestro newsletter y obtené novedades y ofertas exclusivas.</p>
                    <form>
                        <input className='email' type="email" name="email" id="email" placeholder="Email" />
                        <input className='submit' type="submit" name="enviar" id="enviar" value="Enviar" />
                    </form>
                    <p className='adidas'>Adidas ©2012-2024</p>
                </div>
                <div className='contacto'>
                    <h6>CONTACTO</h6>
                    <p>contacto@infoadidas.com</p>
                </div>
                <p className='creador'>&copy;Benjamin Mehrez</p>
            </div>
        </footer>
    )
}

export default Footer