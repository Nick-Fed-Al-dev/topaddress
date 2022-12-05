import React from "react"

import aboutImg from "../../assets/images/main-about.png"
import backgroundImg from "../../assets/images/about-background.png"
import {Button} from "../Button"
import {PlayButton} from "../svg/PlayButton"

export const AboutSection = () => {

    return (
        <section className="main-about">
            <div className="title-line"></div>
            <img src={backgroundImg} alt="" className="main-about-background-img"/>
            <div className="main-about-title-wrapper">
                <h2 className="main-about-title">
                    TOP ADDRESS
                </h2>
                <Button isLink text="Читать Больше" textColor="dark-purple" color="white" isBorder />
            </div>
            <div className="main-about-content">
                <div className="main-about-text">
                    <h3 className="main-about-text-title">
                        ПОЧЕМУ TOP ADDRESS?
                    </h3>
                    <p className="main-about-text-p">
                        Al Ghadeer by Aldar – востребованное сообщество,
                        предлагающее ценную жилую <br /> недвижимость с высокой отдачей от инвестиций.
                        Малоэтажные жилые дома и виллы <br /> создают уютную атмосферу загородной жизни,
                        позволяя пользоваться относительной <br /> близостью к ключевым районам двух крупнейших эмиратов.
                        Сообщество отличается не <br /> только малоэтажной застройкой, но и окружением ландшафтными садами.
                    </p>
                    <div className="main-about-text-video">
                        <p className="main-about-text-video-text">
                            СМОТРЕТЬ ВИДЕО О НАС
                        </p>
                        <PlayButton />
                    </div>
                </div>
                <div className="main-about-img-wrapper">
                    <img src={aboutImg} alt="" className="main-about-img" />
                </div>
            </div>
        </section>
    )
}