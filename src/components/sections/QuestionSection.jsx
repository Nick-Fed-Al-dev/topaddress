import React from "react"

import personImg from "../../assets/images/person.png"
import {Button} from "../Button.jsx"

export const QuestionSection = () => {

    return (
        <section className="question-section">
            <div>
                <h2 className="question-section-title">ОСТАЛИСЬ <br /> ВОПРОСЫ?</h2>
                <div className="title-line"></div>
                <div className="question-section-person">
                    <img src={personImg} alt="" className="question-section-person-img"/>
                    <div className="question-section-person-text">
                        <h3 className="question-section-person-text-title">ДИАНА ХВАТОВА</h3>
                        <p className="question-section-person-title-p">
                            Эксперт по недвижимости в Дубае. <br />
                            Перезвонит вам в течение пяти минут
                        </p>
                    </div>
                </div>
            </div>
            <div className="question-section-form">
                <p className="question-section-form-agreement">
                    Я согласен на обработку моих персональных данных
                </p>
                <input placeholder="Ваше Имя" type="text" className="input question-section-form-input"/>
                <input placeholder="Ваш Телефон" type="text" className="input question-section-form-input"/>
                <input placeholder="Сообщение" type="text" className="input question-section-form-input"/>
                <Button isLink text="Отправить" color="white" className="question-section-form-btn" />
            </div>
        </section>
    )
}