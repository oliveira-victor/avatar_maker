import { useDispatch } from 'react-redux'
import { ChangeEvent, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import ListItem from '../../components/ListItem'
import { avatarData } from '../../utils/data/avatarData'
import { setName } from '../../store/reducers/name'
import ModalWindow from '../../components/ModalWindow'
import Shuffle from '../../components/Shuffle'
import { aliceData } from '../../utils/data/aliceData'

import * as S from './styles'

import sunIcon from '../../assets/images/sun-icon.svg'
import moonIcon from '../../assets/images/moon-icon.svg'

type Props = {
    switchTheme: () => void
    themeIsDark: boolean
    getFileName: (data: string) => void
}

const SideB = ({ switchTheme, themeIsDark, getFileName }: Props) => {

    const { t } = useTranslation()

    const dispatch = useDispatch()

    const [newName, setNewName] = useState<string>('')

    const [aliceEasterEgg, setAliceEasterEgg] = useState<boolean>(false)

    useEffect(() => {
        dispatch(setName(newName))
    }, [newName])

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewName(event.target.value)
        getFileName(event.target.value)
    }

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const checkName = () => {
        newName.toLocaleLowerCase().trim() === 'alice' ? setAliceEasterEgg(true) : setAliceEasterEgg(false)
    }

    return (
        <S.ContainerB id="customScrollbar">

            {modalIsOpen && (
                <ModalWindow closeModal={closeModal} />
            )}

            <S.TopBar>
                <input
                    value={newName}
                    onChange={handleInputChange}
                    onBlur={checkName}
                    type="text"
                    name="name"
                    id="name"
                    placeholder={t('inputPlaceholder')}
                    maxLength={26}
                />
                <S.ToggleBtn onClick={switchTheme}>
                    <img
                        className={themeIsDark ? '' : 'activateIcon'}
                        style={{ filter: themeIsDark ? 'invert(1)' : '' }}
                        src={sunIcon}
                        alt="Light theme icon"
                        title={t('switchTheme')}
                    />
                    <img
                        className={themeIsDark ? 'activateIcon' : ''}
                        style={{ filter: themeIsDark ? 'invert(1)' : '' }}
                        src={moonIcon}
                        alt="Dark theme icon"
                        title={t('switchTheme')}
                    />
                </S.ToggleBtn>
                <Shuffle themeIsDark={themeIsDark} />
                <S.AboutBtn onClick={() => setModalIsOpen(true)}>
                    ?
                </S.AboutBtn>
            </S.TopBar>
            <ul>
                {avatarData.map((item) => (
                    <ListItem key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        themeIsDark={themeIsDark}
                    />
                ))}
                {aliceEasterEgg &&
                    aliceData.map((item) => (
                        <ListItem key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            themeIsDark={themeIsDark}
                        />
                    ))
                }
            </ul>
        </S.ContainerB>
    )
}

export default SideB