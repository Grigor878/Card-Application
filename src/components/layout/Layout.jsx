import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Instructions from '../instructions/Instructions'
import Footer from '../footer/Footer'
import './Layout.scss'

const Layout = () => {
    return (
        <div>
            <Header />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            <Instructions />
            <Footer />
        </div>
    )
}

export default Layout