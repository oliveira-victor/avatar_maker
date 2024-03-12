import { useTranslation } from 'react-i18next'

import * as S from './styles'

const Languages = () => {

    const { i18n } = useTranslation()

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang)
    }

    return (
        <S.LanguagesContainer>
            <span className={i18n.resolvedLanguage === 'en' ? 'selectedLang' : ''} onClick={() => changeLanguage('en')}>English</span>&nbsp;|&nbsp;
            <span className={i18n.resolvedLanguage === 'pt' ? 'selectedLang' : ''} onClick={() => changeLanguage('pt-BR')}>Português</span>&nbsp;|&nbsp;
            <span className={i18n.resolvedLanguage === 'fr' ? 'selectedLang' : ''} onClick={() => changeLanguage('fr')}>Français</span>&nbsp;|&nbsp;
            <span className={i18n.resolvedLanguage === 'es' ? 'selectedLang' : ''} onClick={() => changeLanguage('es')}>Español</span>
        </S.LanguagesContainer>
    )
}

export default Languages