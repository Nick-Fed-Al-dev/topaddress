import React from "react"
import {BrowserRouter} from "react-router-dom"

import {Router} from "./Router.jsx"
import {Header} from "./components/sections/Header.jsx"
import {Footer} from "./components/sections/Footer.jsx"
import "./sass/index.sass"

export const App = () => {

    return (
        <BrowserRouter>
            <div>
                <Header />
                <main className="main">
                    <Router />
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    )
}
