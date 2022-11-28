import React from "react"

import MainHeroImg from "../../assets/images/main-hero-background.png"
import {Button} from "../Button"

export const MainHeroSection = () => {

    return (
        <section className="main-hero">
            <img className="main-hero-img" src={MainHeroImg} alt=""/>
            <div className="main-hero-certain"></div>
            <div className="container">
                <h1 className="main-hero-text">
                    <div className="main-hero-text-1">
                        <div>ПРОДАЖА</div>
                        <div>ЛУЧШЕЙ</div>
                        <div>НЕДВИЖИМОСТИ</div>
                    </div>
                    <div className="main-hero-text-2">в Дубае</div>
                </h1>
                <div className="main-hero-form">
                    <div className="main-hero-form-select"></div>
                    <div className="main-hero-form-select"></div>
                    <div className="main-hero-form-select"></div>
                    <Button className="main-hero-form-button" text="Начать Подбор" />
                </div>
            </div>
        </section>
    )
}