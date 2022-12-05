import React, {useEffect} from "react"
import {useSelector} from "react-redux"

import {Logo} from "../svg/Logo.jsx"
import {BurgerMenu} from "../modals/BurgerMenu.jsx"
import {useActions} from "../../hooks/useActions.js"
import {BurgerButton} from "../svg/BurgerButton"
import {WhatsappLogo} from "../svg/WhatsappLogo"
import {TelegramLogo} from "../svg/TelegramLogo"
import {useScrollPosition} from "../../hooks/useScrollPosition.js"
import {HeaderArrow} from "../svg/HeaderArrow.jsx"


export const Header = () => {

    const scrollPosition = useScrollPosition()
    const {toggleMenu} = useActions()

    const {menu} = useSelector((store) => store.modal)

    const burgerSvg = <BurgerButton />

    useEffect(() => {
        if(!menu) {
            document.querySelectorAll(".burger-menu-nav-item").forEach((el) => {
                el.classList.remove("accordion-open")
            })
        }
    }, [menu])

    const fixedSelector = menu ? "header-fixed" : scrollPosition > 50 ? "header-fixed" : ""

    return (
        <header className={`header ${fixedSelector}`}>
            <div className="header-line"></div>
            <BurgerMenu />
            <Logo />
            <nav className="header-nav">
                <ul className="header-nav-list">
                    <li className="header-nav-item">
                        <div className="header-nav-item-text">КУПИТЬ</div>
                        <div className="header-nav-item-menu">
                            <ul className="header-nav-item-menu-list">
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        ВСЯ НЕДВИЖИМОСТЬ ДУБАЯ
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        КВАРТИРЫ В ДУБАЕ
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        ПО СТИЛЮ ЖИЗНИ
                                    </p>
                                    <div className="header-nav-item-menu-item-menu-arrow"><HeaderArrow /></div>
                                    <div className="header-nav-item-menu-item-menu">
                                        <ul className="header-nav-item-menu-item-menu-list">
                                            <li className="header-nav-item-menu-item-menu-item">ВОЗЛЕ МОРЯ</li>
                                            <li className="header-nav-item-menu-item-menu-item">РЯДОМ С ПЛЯЖЕМ</li>
                                            <li className="header-nav-item-menu-item-menu-item">В ЦЕНТРЕ ДУБАЯ</li>
                                            <li className="header-nav-item-menu-item-menu-item">СПАЛЬНЫЕ РАЙОНЫ</li>
                                            <li className="header-nav-item-menu-item-menu-item">С ПОЛЕМ ДЛЯ ГОЛЬФА</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        ПО ЛОКАЦИИ
                                    </p>
                                    <div className="header-nav-item-menu-item-menu-arrow"><HeaderArrow /></div>
                                    <div className="header-nav-item-menu-item-menu">
                                        <ul className="header-nav-item-menu-item-menu-list">
                                            <li className="header-nav-item-menu-item-menu-item">DUBAI MARINA</li>
                                            <li className="header-nav-item-menu-item-menu-item">PALM JUMEIRAH</li>
                                            <li className="header-nav-item-menu-item-menu-item">DUBAI CREEK HARBOUR</li>
                                            <li className="header-nav-item-menu-item-menu-item">MBR CITY - DISTRICT ONE</li>
                                            <li className="header-nav-item-menu-item-menu-item">JUMEIRAH VILLAGE CIRCLE</li>
                                            <li className="header-nav-item-menu-item-menu-item">DAMAC LAGOONS</li>
                                            <li className="header-nav-item-menu-item-menu-item">DUBAI HILLS ESTATE</li>
                                            <li className="header-nav-item-menu-item-menu-item">ARABIAN RANCHES</li>
                                            <li className="header-nav-item-menu-item-menu-item">DAMAC HILLS</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        ПО ТИПУ НЕДВИЖИМОСТИ
                                    </p>
                                    <div className="header-nav-item-menu-item-menu-arrow"><HeaderArrow /></div>
                                    <div className="header-nav-item-menu-item-menu">
                                        <ul className="header-nav-item-menu-item-menu-list">
                                            <li className="header-nav-item-menu-item-menu-item">ДОМА И ВИЛЛЫ В ДУБАЕ</li>
                                            <li className="header-nav-item-menu-item-menu-item">ТАУНХАУСЫ В ДУБАЕ</li>
                                            <li className="header-nav-item-menu-item-menu-item">ДУПЛЕКСЫ В ДУБАЕ</li>
                                            <li className="header-nav-item-menu-item-menu-item">ПЕНТХАУСЫ В ДУБАЕ</li>
                                            <li className="header-nav-item-menu-item-menu-item">ОТДЕЛЬНЫЕ АПАРТАМЕНТЫ В ДУБАЕ</li>
                                            <li className="header-nav-item-menu-item-menu-item">КОММЕРЧЕСКАЯ НЕДВИЖИМОСТЬ</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        ИНВЕСТИЦИИ В НЕДВИЖИМОСТЬ ДУБАЯ
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        НЕДВИЖИМОСТЬ В РАССРОЧКУ В ДУБАЕ
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        ВСЯ НЕДВИЖИМОСТЬ В АБУ-ДАБИ
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="header-nav-item">
                        <div className="header-nav-item-text">НОВОСТРОИ</div>
                        <div className="header-nav-item-menu">
                            <ul className="header-nav-item-menu-list">
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        НОВЫЕ ПРОЕКТЫ ДУБАЯ
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        НЕДВИЖИМОСТЬ ДУБАЯ НА КАРТЕ
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        SAFA TWO
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        CREEK VISTAS HEIGHTS
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        OAKLEY SQUARE RESIDENCES
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        AZIZI RIVIERA REEVE
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        CENTRAL PARK LAUREL
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        DAMAC GEMS ESTATES
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        PENINSULA 5
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        DUSIT RIJAS
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="header-nav-item">
                        <div className="header-nav-item-text">РАЙОНЫ</div>
                        <div className="header-nav-item-menu">
                            <ul className="header-nav-item-menu-list">
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        ВСЕ РАЙОНЫ ДУБАЯ
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        ВОЗЛЕ МОРЯ
                                    </p>
                                    <div className="header-nav-item-menu-item-menu-arrow"><HeaderArrow /></div>
                                    <div className="header-nav-item-menu-item-menu">
                                        <ul className="header-nav-item-menu-item-menu-list">
                                            <li className="header-nav-item-menu-item-menu-item">DUBAI MARINA</li>
                                            <li className="header-nav-item-menu-item-menu-item">PALM JUMEIRAH</li>
                                            <li className="header-nav-item-menu-item-menu-item">EMAAR BEACHFRONT</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        ЖИЗНЬ У ЛАГУНЫ
                                    </p>
                                    <div className="header-nav-item-menu-item-menu-arrow"><HeaderArrow /></div>
                                    <div className="header-nav-item-menu-item-menu">
                                        <ul className="header-nav-item-menu-item-menu-list">
                                            <li className="header-nav-item-menu-item-menu-item">DOMAC LAGOONS</li>
                                            <li className="header-nav-item-menu-item-menu-item">SOBHA HARTLAND</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        ЖИЛЬЕ В ЦЕНТРЕ
                                    </p>
                                    <div className="header-nav-item-menu-item-menu-arrow"><HeaderArrow /></div>
                                    <div className="header-nav-item-menu-item-menu">
                                        <ul className="header-nav-item-menu-item-menu-list">
                                            <li className="header-nav-item-menu-item-menu-item">DOWNTOWN</li>
                                            <li className="header-nav-item-menu-item-menu-item">BUSINESS BAY</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        СПАЛЬНЫЕ РАЙОНЫ
                                    </p>
                                    <div className="header-nav-item-menu-item-menu-arrow"><HeaderArrow /></div>
                                    <div className="header-nav-item-menu-item-menu">
                                        <ul className="header-nav-item-menu-item-menu-list">
                                            <li className="header-nav-item-menu-item-menu-item">MBR CITY - MEYDAN</li>
                                            <li className="header-nav-item-menu-item-menu-item">JVC - JUMEIRAH VILLAGE CIRCLE</li>
                                            <li className="header-nav-item-menu-item-menu-item">DUBAI CREEK HARBOUR</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        ЗЕЛЕНЫЕ КВАРТАРЫ
                                    </p>
                                    <div className="header-nav-item-menu-item-menu-arrow"><HeaderArrow /></div>
                                    <div className="header-nav-item-menu-item-menu">
                                        <ul className="header-nav-item-menu-item-menu-list">
                                            <li className="header-nav-item-menu-item-menu-item">DUBAI HILLS ESTATE</li>
                                            <li className="header-nav-item-menu-item-menu-item">TOWN SQUARE</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="header-nav-item">
                        <div className="header-nav-item-text">ЗАСТРОЙЩИКИ</div>
                        <div className="header-nav-item-menu">
                            <ul className="header-nav-item-menu-list">
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        ВСЕ ЗАСТРОЙЩИКИ ДУБАЯ
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        EMAAR PROPERTIES
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        NAKHEEL PROPERTIES
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        MERAAS
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        DAMAC PROPERTIES
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        ELLINGTON PROPERTIES
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        OMNIYAT GROUP
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        SELECT GROUP
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        SOBHA REALTY
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="header-nav-item">
                        <div className="header-nav-item-text">О НАС</div>
                        <div className="header-nav-item-menu">
                            <ul className="header-nav-item-menu-list">
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        TOP ADDRESS
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        ОТЗЫВЫ НАШИХ КЛИЕНТОВ
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        КОНТАКТЫ
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="header-nav-item">
                        <div className="header-nav-item-text">МЕДИА</div>
                        <div className="header-nav-item-menu">
                            <ul className="header-nav-item-menu-list">
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        ВОПРОСЫ-ОТВЕТЫ
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        НОВОСТИ
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        СТАТЬИ
                                    </p>
                                </li>
                                <li className="header-nav-item-menu-item">
                                    <p className="header-nav-item-menu-item-text">
                                        ВИДЕО
                                    </p>
                                </li>
                            </ul>
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