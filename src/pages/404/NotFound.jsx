import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NotFound.scss'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <section className='notFound'>
            <div className="container">
                <div className="notFound__context">
                    <h1>Page Not Found</h1>

                    <button onClick={() => navigate('/')}>Go Back</button>
                </div>
            </div>
        </section>
    )
}

export default NotFound