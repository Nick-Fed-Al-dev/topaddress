import React from "react"

import {useSelector} from "react-redux"

export const BurgerMenu = () => {

    const {menu} = useSelector((store) => store.modal)

    return (
        <div className={`burger-menu ${menu ? "burger-menu-open": ""}`}>

        </div>
    )
}