import React from 'react'

import './Footer.css'

const Footer = () => {

    return (

            <footer className='footer'>
                <div className='container-footer'>
                    <div className='suscribcion'>
                        <p>Suscribete a nuestro newsletter y obtené novedades y ofertas exclusivas.</p>
                        <form>
                            <input type="email" name="email" id="email" placeholder="Email" />
                        </form>
                        <input className='submit' type="submit" name="enviar" id="enviar" value="Enviar" />

                        <p>Adidas ©2012-2024</p>
                    </div>
                    <div className='contacto'>
                        <h6>CONTACTO</h6>
                        <p>contacto@infoadidas.com</p>
                    </div>
                    <div className='by'>
                        <p>&copy;Benjamin Mehrez</p>
                    </div>

                </div>

            </footer>
    )
}

export default Footer