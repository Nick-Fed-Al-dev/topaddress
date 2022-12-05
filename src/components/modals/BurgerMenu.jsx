import React from "react"
import {useSelector} from "react-redux"

import {AccordionArrow} from "../svg/AccordionArrow"
import {Button} from "../Button"
import {PhoneLogo} from "../svg/PhoneLogo"
import {TelegramLogo} from "../svg/TelegramLogo"
import {WhatsappLogo} from "../svg/WhatsappLogo"

export const BurgerMenu = () => {

    const {menu} = useSelector((store) => store.modal)

    const toggleAccordion = (event) => {
        document.querySelectorAll(".burger-menu-nav-item").forEach((el) => {
            if(event.target.parentNode.tagName === "LI" && !event.target.parentNode.classList.contains("accordion-open")) {
                el.classList.remove("accordion-open")
            }
            if(event.target.parentNode.parentNode.tagName === "LI" && !event.target.parentNode.parentNode.classList.contains("accordion-open")) {
                el.classList.remove("accordion-open")
            }
        })
        if(event.target.parentNode.tagName === "LI") {
            event.target.parentNode.classList.toggle("accordion-open")
        } else {
            event.target.parentNode.parentNode.classList.toggle("accordion-open")
        }
    }

    const toggleSubAccordion = (event) => {
        document.querySelectorAll(".burger-menu-nav-item-content-item").forEach((el) => {
            if(event.target.parentNode.tagName === "LI" && !event.target.parentNode.classList.contains("accordion-open")) {
                el.classList.remove("accordion-open")
            }
            if(event.target.parentNode.parentNode.tagName === "LI" && !event.target.parentNode.parentNode.classList.contains("accordion-open")) {
                el.classList.remove("accordion-open")
            }
        })
        if(event.target.parentNode.tagName === "LI") {
            event.target.parentNode.classList.toggle("accordion-open")
        } else {
            event.target.parentNode.parentNode.classList.toggle("accordion-open")
        }
    }

    return (
        <div className={`burger-menu ${menu ? "burger-menu-open": ""}`}>

            <nav className="burger-menu-nav">
                <ul className="accordion-container burger-menu-nav-list">
                    <li className="ac burger-menu-nav-item">
                        <div onClick={toggleAccordion} className="ac-header burger-menu-nav-item-header">
                            <p className="burger-menu-nav-item-header-text">
                                КУПИТЬ
                            </p>
                            <AccordionArrow />
                        </div>
                        <div className="ac-panel burger-menu-nav-item-content">
                            <ul className="burger-menu-nav-item-content-list">
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        ВСЯ НЕДВИЖИМОСТЬ В ДУБАЕ
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        КВАРТИРЫ В ДУБАЕ
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <div onClick={toggleSubAccordion} className="ac-header burger-menu-nav-item-content-item-header">
                                        <p className="burger-menu-nav-item-content-item-header-text">
                                            ПО СТИЛЮ ЖИЗНИ
                                        </p>
                                        <AccordionArrow />
                                    </div>
                                    <div className="ac-panel burger-menu-nav-item-content-item-content">
                                        <ul className="burger-menu-nav-item-content-item-content-list">
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                ВОЗЛЕ МОРЯ
                                            </li>
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                РЯДОМ С ПЛЯЖЕМ
                                            </li>
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                В ЦЕНТРЕ ДУБАЯ
                                            </li>
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                СПАЛЬНЫЕ РАЙОНЫ
                                            </li>
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                С ПОЛЕМ ДЛЯ ГОЛЬФА
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <div onClick={toggleSubAccordion} className="ac-header burger-menu-nav-item-content-item-header">
                                        <p className="burger-menu-nav-item-content-item-text">
                                            ПО ЛОКАЦИИ
                                        </p>
                                        <AccordionArrow />
                                    </div>
                                    <div className="ac-panel burger-menu-nav-item-content-item-content">
                                        <ul className="burger-menu-nav-item-content-item-content-list">
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                DUBAI MARINA
                                            </li>
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                PALM JUMEIRAH
                                            </li>
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                DUBAI CREEK HARBOUR
                                            </li>
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                MBR CITY - DISTRICT ONE
                                            </li>
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                JUMEIRAH VILLAGE CIRCLE
                                            </li>
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                DAMAC LAGOONS
                                            </li>
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                DUBAI HILLS ESTATE
                                            </li>
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                ARABIAN RANCHES
                                            </li>
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                DAMAC HILLS
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <div onClick={toggleSubAccordion} className="ac-header burger-menu-nav-item-content-item-header">
                                        <p className="burger-menu-nav-item-content-item-text">
                                            ПО ТИПУ НЕДВИЖИМОСТИ
                                        </p>
                                        <AccordionArrow />
                                    </div>
                                    <div className="ac-panel burger-menu-nav-item-content-item-content">
                                        <ul className="burger-menu-nav-item-content-item-content-list">
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                ДОМА И ВИЛЛЫ В ДУБАЕ
                                            </li>
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                ТАУНХАУСЫ В ДУБАЕ
                                            </li>
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                ДУПЛЕКСЫ В ДУБАЕ
                                            </li>
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                ПЕНТХАУСЫ В ДУБАЕ
                                            </li>
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                ОТЕЛЬНЫЕ АППАРТАМЕНТЫ
                                            </li>
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                КОММЕРЧЕСКАЯ НЕДВИЖИМОСТЬ
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        ИНВЕСТИЦИИ В НЕДВИЖИМОСТЬ ДУБАЯ
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        НЕДВИЖИМОСТЬ В РАССРОЧКУ В ДУБАЕ
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        ВСЯ НЕДВИЖИМОСТЬ АБУ-ДАБИ
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="ac burger-menu-nav-item">
                        <div onClick={toggleAccordion} className="ac-header burger-menu-nav-item-header">
                            <p className="burger-menu-nav-item-header-text">
                                НОВОСТРОИ
                            </p>
                            <AccordionArrow />
                        </div>
                        <div className="ac-panel burger-menu-nav-item-content">
                            <ul className=" ac-container burger-menu-nav-item-content-list">
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        НОВЫЕ ПРОЕКТЫ ДУБАЯ
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        НЕДВИЖИМОСТЬ ДУБАЯ НА КАРТЕ
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        SAFA TWO
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        CREEK VISTAS HEIGHTS
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        OAKLEY SQUARE RESIDENCES
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        AZIZI RIVIERA REVE
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        CENTRAL PARK LAUREL
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        DAMAC GEMS ESTATES
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        PENINSULA 5
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        DUSIT RIJAS
                                    </p>
                                </li>
                            </ul>
                            <div className="burger-menu-nav-item-content-line"></div>
                        </div>
                    </li>
                    <li className="ac burger-menu-nav-item">
                        <div onClick={toggleAccordion} className="ac-header burger-menu-nav-item-header">
                            <p className="burger-menu-nav-item-header-text">РАЙОНЫ</p>
                            <AccordionArrow />
                        </div>
                        <div className="ac-panel burger-menu-nav-item-content">
                            <ul className="ac-container burger-menu-nav-item-content-list">
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        ВСЕ РАЙОНЫ ДУБАЯ
                                    </p>
                                </li>
                                <li className="ac burger-menu-nav-item-content-item">
                                    <div onClick={toggleSubAccordion} className="ac-header burger-menu-nav-item-content-item-header">
                                        <p className="burger-menu-nav-item-content-item-text">
                                            ВОЗЛЕ МОРЯ
                                        </p>
                                        <AccordionArrow />
                                    </div>
                                    <div className="ac-panel burger-menu-nav-item-content-item-content">
                                        <ul className="burger-menu-nav-item-content-item-content-list">
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                DUBAI MARINA
                                            </li>
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                PALM JUMEIRAH
                                            </li>
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                EMAAR BEACHFRONT
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="ac burger-menu-nav-item-content-item">
                                    <div onClick={toggleSubAccordion} className="ac-header burger-menu-nav-item-content-item-header">
                                        <p className="burger-menu-nav-item-content-item-text">
                                            ЖИЗНЬ У ЛАГУНЫ
                                        </p>
                                        <AccordionArrow />
                                    </div>
                                    <div className="ac-panel burger-menu-nav-item-content-item-content">
                                        <ul className="burger-menu-nav-item-content-item-content-list">
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                DAMAC LAGOONS
                                            </li>
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                SOBHA HARTLAND
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="ac burger-menu-nav-item-content-item">
                                    <div onClick={toggleSubAccordion} className="ac-header burger-menu-nav-item-content-item-header">
                                        <p className="burger-menu-nav-item-content-item-text">
                                            ЖИЛЬЕ В ЦЕНТРЕ
                                        </p>
                                        <AccordionArrow />
                                    </div>
                                    <div className="ac-panel burger-menu-nav-item-content-item-content">
                                        <ul className="burger-menu-nav-item-content-item-content-list">
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                DOWNTOWN
                                            </li>
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                BUSINESS BAY
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="ac burger-menu-nav-item-content-item">
                                    <div onClick={toggleSubAccordion} className="ac-header burger-menu-nav-item-content-item-header">
                                        <p className="burger-menu-nav-item-content-item-text">СПАЛЬНЫЕ РАЙОНЫ</p>
                                        <AccordionArrow />
                                    </div>
                                    <div className="ac-panel burger-menu-nav-item-content-item-content">
                                        <ul className="burger-menu-nav-item-content-item-content-list">
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                MBR CITY - MEYDAN
                                            </li>
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                JVC - JUMEIRAH VILLAGE CIRCLE
                                            </li>
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                DUBAI CREEK HARBOUR
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="ac burger-menu-nav-item-content-item">
                                    <div onClick={toggleSubAccordion} className="ac-header burger-menu-nav-item-content-item-header">
                                        <p className="burger-menu-nav-item-content-item-text">
                                            ЗЕЛЕНЫЕ КВАРТАЛЫ
                                        </p>
                                        <AccordionArrow />
                                    </div>
                                    <div className="ac-panel burger-menu-nav-item-content-item-content">
                                        <ul className="burger-menu-nav-item-content-item-content-list">
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                DUBAI HEELS ESTATE
                                            </li>
                                            <li className="burger-menu-nav-item-content-item-content-item">
                                                TOWN SQUARE
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <div className="burger-menu-nav-item-content-line"></div>
                        </div>
                    </li>
                    <li className="ac burger-menu-nav-item">
                        <div onClick={toggleAccordion} className="ac-header burger-menu-nav-item-header">
                            <p className="burger-menu-nav-item-header-text">
                                ЗАСТРОЙЩИКИ
                            </p>
                            <AccordionArrow />
                        </div>
                        <div className="ac-panel burger-menu-nav-item-content">
                            <ul className="burger-menu-nav-item-content-list">
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        ВСЕ ЗАСТРОЙЩИКИ ДУБАЯ
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        EMAAR PROPERTIES
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        NAKHEEL PROPERTIES
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        MERAAS
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        DAMAC PROPERTIES
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        ELLINGTON PROPERTIES
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        OMNIYAT GROUP
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        SELECT GROUP
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        SOBHA REALTY
                                    </p>
                                </li>
                            </ul>
                            <div className="burger-menu-nav-item-content-line"></div>
                        </div>
                    </li>
                    <li className="ac burger-menu-nav-item">
                        <div onClick={toggleAccordion} className="ac-header burger-menu-nav-item-header">
                            <p className="burger-menu-nav-item-header-text">
                                О НАС
                            </p>
                            <AccordionArrow />
                        </div>
                        <div className="ac-panel burger-menu-nav-item-content">
                            <ul className="burger-menu-nav-item-content-list">
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        TOP ADDRESS
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        ОТЗЫВЫ НАШИХ КЛИЕНТОВ
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        КОНТАКТЫ
                                    </p>
                                </li>
                            </ul>
                            <div className="burger-menu-nav-item-content-line"></div>
                        </div>
                    </li>
                    <li className="ac burger-menu-nav-item">
                        <div onClick={toggleAccordion} className="ac-header burger-menu-nav-item-header">
                            <p className="burger-menu-nav-item-header-text">МЕДИА</p>
                            <AccordionArrow />
                        </div>
                        <div className="ac-panel burger-menu-nav-item-content">
                            <ul className="burger-menu-nav-item-content-list">
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        ВОПРОСЫ-ОТВЕТЫ
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        НОВОСТИ
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        СТАТЬИ
                                    </p>
                                </li>
                                <li className="burger-menu-nav-item-content-item">
                                    <p className="burger-menu-nav-item-content-item-text">
                                        ВИДЕО
                                    </p>
                                </li>
                            </ul>
                            <div className="burger-menu-nav-item-content-line"></div>
                        </div>
                    </li>
                </ul>
            </nav>

            <div className="burger-menu-footer">
                <Button text={"Связаться"} className="burger-menu-social-button" color="white" />
                <div className="burger-menu-social">
                    <div className="burger-menu-social-box">
                        <PhoneLogo />
                    </div>
                    <div className="burger-menu-social-box">
                        <TelegramLogo />
                    </div>
                    <div className="burger-menu-social-box">
                        <WhatsappLogo />
                    </div>
                </div>
            </div>

        </div>
    )
}