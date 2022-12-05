import React from "react"

import footerMapImg from "../../assets/images/map.png"
import footerBackgroundImg from "../../assets/images/footer-background.png"
import {Logo} from "../svg/Logo"
import {TelegramLogo} from "../svg/TelegramLogo"
import {InstagramLogo} from "../svg/InstagramLogo"
import {FacebookLogo} from "../svg/FacebookLogo"
import {TictokLogo} from "../svg/TictokLogo"
import {YoutubeLogo} from "../svg/YoutubeLogo"
import {VkLogo} from "../svg/VkLogo"
import {MatesLogo} from "../svg/MatesLogo"

export const Footer = () => {

    return (
        <footer className="footer">
            <img src={footerMapImg} alt="" className="footer-map-img"/>
            <div className="footer-contacts">
                <h2 className="footer-contacts-title">
                    КОНТАКТЫ
                </h2>
                <img src={footerBackgroundImg} alt="" className="footer-contacts-background-img"/>
                <div className="footer-contacts-line"></div>
                <ul className="footer-contacts-list">
                    <li className="footer-contacts-item">
                        <p className="footer-contacts-item-title">
                            ТЕЛЕФОН
                        </p>
                        <p className="footer-contacts-item-text">
                            +971 52 123-94-11
                        </p>
                    </li>
                    <li className="footer-contacts-item">
                        <p className="footer-contacts-item-title">
                            АДРЕС
                        </p>
                        <p className="footer-contacts-item-text">
                            EMAAR BUSINESS PARK 1, <br />
                            AL THANYAH THIRD AREA, <br />
                            602, ДУБАЙ ОАЭ
                        </p>
                    </li>
                    <li className="footer-contacts-item">
                        <p className="footer-contacts-item-title">
                            ПОЧТА
                        </p>
                        <p className="footer-contacts-item-text">
                            SALES@TOPADDRESS.AE
                        </p>
                    </li>
                </ul>
            </div>
            <div className="footer-basement">
                <nav className="footer-basement-nav">
                    <div className="footer-basement-nav-object">
                        <h3 className="footer-basement-nav-object-title">ИНФОРМАЦИЯ</h3>
                        <ul className="footer-basement-nav-object-list">
                            <li className="footer-basement-nav-item">ГЛАВНАЯ</li>
                            <li className="footer-basement-nav-item">НОВОСТИ РЫНКА</li>
                            <li className="footer-basement-nav-item">О КОМПАНИИ</li>
                            <li className="footer-basement-nav-item">ОТЗЫВЫ КЛИЕНТОВ</li>
                            <li className="footer-basement-nav-item">ВОПРОС ОТВЕТ</li>
                            <li className="footer-basement-nav-item">КОНТАКТЫ</li>
                            <li className="footer-basement-nav-item">ВАКАНСИИ</li>
                            <li className="footer-basement-nav-item">СТАТЬ ПАРТНЕРОМ</li>
                        </ul>
                    </div>
                    <div className="footer-basement-nav-object">
                        <h3 className="footer-basement-nav-object-title">КУПИТЬ</h3>
                        <ul className="footer-basement-nav-object-list">
                            <li className="footer-basement-nav-item">ВСЯ НЕДЖИМОСТЬ ДУБАЯ</li>
                            <li className="footer-basement-nav-item">КВАРТИРЫ В ДУБАЕ</li>
                            <li className="footer-basement-nav-item">ДОМА И ВИЛЛЫ В ДУБАЕ</li>
                            <li className="footer-basement-nav-item">ПЕНТХАУСЫ В ДУБАЕ</li>
                            <li className="footer-basement-nav-item">ДУПЛЕКСЫ В ДУБАЕ</li>
                            <li className="footer-basement-nav-item">АППАРТАМЕНТЫ В ДУБАЕ</li>
                            <li className="footer-basement-nav-item">НОВОСТРОЙКИ В ДУБАЕ</li>
                        </ul>
                    </div>
                    <div className="footer-basement-nav-object">
                        <h3 className="footer-basement-nav-object-title">НАШИ ПРОЕКТЫ</h3>
                        <ul className="footer-basement-nav-object-list">
                            <li className="footer-basement-nav-item">ЭЛИТНАЯ НЕДВИЖИМОСТЬ В ДУБАЕ</li>
                            <li className="footer-basement-nav-item">ТОП-12 ВИЛЛ В ДУБАЕ</li>
                            <li className="footer-basement-nav-item">ТОП-5 ГОТОВЫХ ПРОЕКТОВ В ДУБАЕ</li>
                        </ul>
                    </div>
                </nav>
                <div className="footer-basement-social">
                    <Logo />
                    <ul className="footer-basement-social-list">
                        <TelegramLogo />
                        <InstagramLogo />
                        <FacebookLogo />
                        <TictokLogo />
                        <YoutubeLogo />
                        <VkLogo />
                        <MatesLogo />
                    </ul>
                </div>
                <div className="footer-basement-conditions">
                    <p className="footer-basement-conditions-text">
                        © 2007-2022 АГЕНСТВО НЕДВИЖИМОСТИ В ДУБАЕ «TOP ADDRESS»
                    </p>
                    <ul className="footer-basement-conditions-list">
                        <li className="footer-basement-conditions-item">
                            УСЛОВИЯ ИСПОЛЬЗОВАНИЯ
                        </li>
                        <li className="footer-basement-conditions-item">
                            КОНФИДЕНЦИАЛЬНОСТЬ
                        </li>
                        <li className="footer-basement-conditions-item">
                            COOKIE
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}