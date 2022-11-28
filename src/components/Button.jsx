import React from "react"

export const Button = ({color, text, className}) => {

    return (
        <button className={`btn ${className}`} style={{backgroundColor: color}}>
            {text}
        </button>
    )
}