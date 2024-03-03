import { useState } from 'react'

import ModalWindow from '../../components/ModalWindow'

import * as S from './styles'

import downloadBtn from '../../assets/images/downloadBtn.svg'

type Props = {
    themeIsDark: boolean
}

const Header = ({ themeIsDark }: Props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const handleSave = () => {
        setModalIsOpen(true)
        console.log('Save!')
    }

    return (
        <>
            <S.Header>
                <h1>Avatar Maker</h1>
                <S.SaveBtn type='button' onClick={handleSave}>SAVE <img src={downloadBtn} style={{ filter: themeIsDark ? 'invert(1)' : '' }} alt="Download icon" /></S.SaveBtn>
            </S.Header>

            {modalIsOpen && (
                <ModalWindow closeModal={closeModal} />
            )}
        </>
    )
}

export default Header