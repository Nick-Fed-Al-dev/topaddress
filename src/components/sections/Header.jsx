import React from "react"

import {Logo} from "../Logo.jsx"
import {BurgerMenu} from "../modals/BurgerMenu.jsx"
import {useActions} from "../../hooks/useActions.js"
import {BurgerButton} from "../svg/BurgerButton"
import {WhatsappLogo} from "../svg/WhatsappLogo"
import {TelegramLogo} from "../svg/TelegramLogo"
import {useScrollPosition} from "../../hooks/useScrollPosition.js"

export const Header = () => {

    const scrollPosition = useScrollPosition()
    const {toggleMenu} = useActions()

    const burgerSvg = <BurgerButton />

    return (
        <header className={`header ${scrollPosition > 100 ? "header-fixed" : ""}`}>
            <div className="header-line"></div>
            <BurgerMenu />
            <Logo />
            <nav className="header-nav">
                <ul className="header-nav-list">
                    <li className="header-nav-item">
                        <div className="header-nav-item-text">КУПИТЬ</div>
                        <div className="header-nav-item-menu">

                        </div>
                    </li>

                    <li className="header-nav-item">
                        <div className="header-nav-item-text">НОВОСТРОИ</div>
                        <div className="header-nav-item-menu">

                        </div>
                    </li>

                    <li className="header-nav-item">
                        <div className="header-nav-item-text">РАЙОНЫ</div>
                        <div className="header-nav-item-menu">

                        </div>
                    </li>

                    <li className="header-nav-item">
                        <div className="header-nav-item-text">ЗАСТРОЙЩИКИ</div>
                        <div className="header-nav-item-menu">

                        </div>
                    </li>

                    <li className="header-nav-item">
                        <div className="header-nav-item-text">О НАС</div>
                        <div className="header-nav-item-menu">

                        </div>
                    </li>

                    <li className="header-nav-item">
                        <div className="header-nav-item-text">МЕДИА</div>
                        <div className="header-nav-item-menu">

                        </div>
                    </li>

                </ul>
            </nav>
            <div className="header-social">
                <ul className="header-social-list">
                    <li className="header-social-item">WHATSAPP</li>
                    <li className="header-social-item">WA</li>
                    <li className="header-social-item">
                        <WhatsappLogo />
                    </li>
                    <li className="header-social-item">TELEGRAM</li>
                    <li className="header-social-item">TG</li>
                    <li className="header-social-item">
                        <TelegramLogo />
                    </li>
                    <li className="header-social-item">+7(90) 900-00-00</li>
                    <li className="header-burger" onClick={toggleMenu}>
                        {burgerSvg}
                    </li>
                </ul>
            </div>
        </header>
    )
}