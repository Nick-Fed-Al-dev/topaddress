import React from "react"
import {Routes, Route, Navigate} from "react-router-dom"

import {MainPage} from "./pages/MainPage.jsx"

export const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}