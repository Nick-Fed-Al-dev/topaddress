import React from "react"

import {ButtonArrow} from "./svg/ButtonArrow"

export const Button = ({className, text}) => {

    return (
        <button className={`${className ?? ""}`} >
            {text}
            <ButtonArrow />
        </button>
    )
}