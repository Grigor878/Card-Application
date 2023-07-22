import React from 'react'
import './Footer.scss'
import { getCurrentYear } from '../../helpers/utils'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__context">
                    <p>ⓒ Solicy {getCurrentYear()} | All Rights Reserved</p>

                    <p>Website design & development by <span>Grigor Safaryan</span></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer