import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from '../components/layout/Layout'

const Main = lazy(() => import('../pages/main/Main'))
const NotFound = lazy(() => import('../pages/404/NotFound'))

const View = () => {
    return (
        <Router>
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    )
}

export default View