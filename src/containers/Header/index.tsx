import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import ModalWindow from '../../components/ModalWindow'

import * as S from './styles'

import downloadBtn from '../../assets/images/downloadBtn.svg'

type Props = {
    themeIsDark: boolean
    handleCapture: () => void
}

const Header = ({ themeIsDark, handleCapture }: Props) => {

    const { t } = useTranslation()

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const handleSave = () => {
        setModalIsOpen(true)
        handleCapture()
    }

    const checkBtnLength = () => {
        if (t('saveBtn').length > 6) {
            return 'reduceFontSize'
        }
        return ''
    }

    return (
        <>
            <S.Header>
                <h1>Avatar Maker</h1>
                <S.SaveBtn className={checkBtnLength()} type='button' onClick={handleSave}>{t('saveBtn')} <img src={downloadBtn} style={{ filter: themeIsDark ? 'invert(1)' : ''}} alt="Download icon" /></S.SaveBtn>
            </S.Header>

            {modalIsOpen && (
                <ModalWindow closeModal={closeModal} />
            )}
        </>
    )
}

export default Header