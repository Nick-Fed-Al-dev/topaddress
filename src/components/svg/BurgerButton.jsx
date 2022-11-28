import React, {useEffect, useState} from "react"

import {useSelector} from "react-redux"

export const BurgerButton = () => {

    const {menu} = useSelector((store) => store.modal)
    const [edgeWidth, setEdgeWidth] = useState(40)
    const [midWidth, setMidWidth] = useState(25)

    useEffect(() => {

        if(menu) {
            let counter = 0
            const interval = setInterval(() => {
                setEdgeWidth((v) => v - .8)
                setMidWidth((v) => v + .3)

                if(counter === 49) clearInterval(interval)
                counter++
            }, 10)
        } else if (!menu && midWidth !== 25) {
            let counter = 0
            const interval = setInterval(() => {
                setEdgeWidth((v) => v + .8)
                setMidWidth((v) => v - .3)

                if(counter === 49) clearInterval(interval)
                counter++
            }, 10)
        }

    }, [menu])

    return (
        <svg width="40" height="14" viewBox="0 0 40 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1={40-edgeWidth} y1="0.730469" x2="40" y2="0.730469" stroke="white" />
            <line x1={40-midWidth} y1="6.78809" x2="40" y2="6.78809" stroke="white"/>
            <line x1={40-edgeWidth} y1="12.8457" x2="40" y2="12.8457" stroke="white"/>
        </svg>
    )
}