import React from "react"

import mainDeveloperImg from "../../assets/images/main-developer-1.png"
import secondDeveloperImg from "../../assets/images/main-developer-2.png"
import thirdDeveloperImg from "../../assets/images/main-developer-3.png"
import {Button} from "../Button"
import {NavArrows} from "../svg/NavArrows"

export const DeveloperSection = () => {

    return (
        <section className="main-developer">
            <div className="main-developer-title-wrapper">
                <div className="title-line"></div>
                <h2 className="main-developer-title">
                    EMAAR <br /> PROPERTIES
                </h2>
                <div>
                    &bull; О ЗАСТРОЙЩИКЕ / ОБЪЕКТЫ
                </div>
            </div>
            <div className="main-developer-text">
                <div>
                    <h3 className="main-developer-text-title">
                        EMAAR PROPERTIES
                    </h3>
                    <p className="main-developer-text-p">
                        EMAAR Properties is a hidden gem on The Palm Jumeirah, home to <br />
                        a select few. This magnificent property is a private residential resort <br />
                        that offers an elite collection of 1, 2, 3 bedroom apartmentsand half-floor <br />
                        penthouses set in a stunning location overlooking The Palm, Atlantis, etc.
                    </p>
                    <Button
                        isLink
                        isBorder
                        text="Все застройщики"
                        className="main-developer-text-btn"
                        color="white"
                        textColor="dark-purple"
                    />
                    <NavArrows className="main-developer-text-arrows" />
                </div>
            </div>
            <img src={mainDeveloperImg} className="main-developer-img-1" alt=""/>
            <img src={secondDeveloperImg} alt="" className="main-developer-img-2"/>
            <img src={thirdDeveloperImg} alt="" className="main-developer-img-3"/>
        </section>
    )
}