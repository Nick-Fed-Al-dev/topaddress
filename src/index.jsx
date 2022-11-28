import React from "react"
import ReactDOM from "react-dom/client"
import {Provider} from "react-redux"

import {store} from "./store/store.js"
import {App} from "./App.jsx"

const container = document.getElementById("root")

const root = ReactDOM.createRoot(container)

const children =
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>

root.render(children)

