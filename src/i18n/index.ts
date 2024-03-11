import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './translations/en.json'
import ptBR from './translations/pt-BR.json'
import fr from './translations/fr.json'
import es from './translations/es.json'

export let activeLang = "en"

const detectLang = () => {
    navigator.language === "pt-BR" ? activeLang = "pt-BR" : activeLang = "en"
}

detectLang()

const resources = {
    en: {
        translation: en
    },
    pt: {
        translation: ptBR,
    },
    fr: {
        translation: fr,
    },
    es: {
        translation: es,
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: activeLang, 
        fallbackLng: activeLang,
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    })

    export default i18n