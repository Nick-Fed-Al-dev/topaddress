import React from "react"

import mainCatalogImg from "../../assets/images/main-catalog.png"
import {Button} from "../Button"

export const CatalogSection = () => {

    return (
        <section className="main-catalog">
            <img src={mainCatalogImg} alt="" className="main-catalog-img"/>
            <div className="title-line"></div>
            <div className="main-catalog-info">
                <div className="main-catalog-text">
                    <h2 className="main-catalog-text-title">
                        КАТАЛОГ ЛУЧШИХ <br />
                        ПРОЕКТОВ ДУБАЯ
                    </h2>
                    <p className="main-catalog-text-p">
                        Больше 10000 предложений апартаментов, квартир <br />
                        и другой недвижимости, которых нет на сайтах!
                    </p>
                </div>
                <Button isLink className="main-catalog-button" text="Скачать Каталог" color="white" />
            </div>
        </section>
    )
}