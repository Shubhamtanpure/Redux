import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './Store/Store'


export default function Layout() {
    return (
        <Provider store={Store}>
            <Header />
            <Outlet />
            <Footer />
        </Provider>
    )
}
