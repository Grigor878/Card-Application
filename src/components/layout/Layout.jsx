import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Layout = () => {
    return (
        <React.Fragment>
            <Header />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            <Footer />
        </React.Fragment>
    )
}

export default Layout