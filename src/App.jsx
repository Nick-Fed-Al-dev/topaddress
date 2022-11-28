import React from "react"
import {BrowserRouter, HashRouter} from "react-router-dom"

import {Router} from "./Router.jsx"
import {Header} from "./components/sections/Header.jsx"
import {Footer} from "./components/sections/Footer.jsx"
import "./sass/index.sass"

export const App = () => {

    const RouterWrap = process.env.NODE_ENV === "production" ? HashRouter : BrowserRouter

    return (
        <RouterWrap>
            <div>
                <Header />
                <main className="main">
                    <Router />
                </main>
                <Footer />
            </div>
        </RouterWrap>
    )
}
