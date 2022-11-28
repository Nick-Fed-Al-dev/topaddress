import React from "react"

import {MainHeroSection} from "../components/sections/MainHeroSection.jsx"
import {TrustedProjectsSection} from "../components/sections/TrustedProjectsSection.jsx"
import {CatalogSection} from "../components/sections/CatalogSection.jsx"
import {DeveloperSection} from "../components/sections/DeveloperSection.jsx"
import {QuizSection} from "../components/sections/QuizSection.jsx"
import {LocationSection} from "../components/sections/LocationSection.jsx"
import {NewProjectsSection} from "../components/sections/NewProjectsSection.jsx"
import {NewsSection} from "../components/sections/NewsSection.jsx"
import {QuestionsAnswersSection} from "../components/sections/QuestionsAnswersSection.jsx"
import {AboutSection} from "../components/sections/AboutSection.jsx"
import {QuestionSection} from "../components/sections/QuestionSection.jsx"

export const MainPage = () => {

    return (
        <>
            <MainHeroSection />
            <TrustedProjectsSection />
            <CatalogSection />
            <DeveloperSection />
            <QuizSection />
            <LocationSection />
            <NewProjectsSection />
            <NewsSection />
            <QuestionsAnswersSection />
            <AboutSection />
            <QuestionSection />
        </>
    )
}