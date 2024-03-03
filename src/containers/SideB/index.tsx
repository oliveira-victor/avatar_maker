import { useDispatch } from 'react-redux'
import { ChangeEvent, useEffect, useState } from 'react'

import ListItem from '../../components/ListItem'
import { avatarData } from '../../utils/data/avatarData'
import { setName } from '../../store/reducers/name'

import * as S from './styles'

import sunIcon from '../../assets/images/sun-icon.svg'
import moonIcon from '../../assets/images/moon-icon.svg'
import Shuffle from '../../components/Shuffle/Shuffle'
import ModalWindow from '../../components/ModalWindow'

type Props = {
    switchTheme: () => void
    themeIsDark: boolean
}

const SideB = ({ switchTheme, themeIsDark }: Props) => {

    const dispatch = useDispatch()

    const [newName, setNewName] = useState<string>('')

    useEffect(() => {
        dispatch(setName(newName))
    }, [newName])

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewName(event.target.value)
    }

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const closeModal = () => {
        setModalIsOpen(false)
    }


    return (
        <S.ContainerB id="customScrollbar">

            {modalIsOpen && (
                <ModalWindow closeModal={closeModal} />
            )}

            <S.TopBar>
                <input value={newName} onChange={handleInputChange} type="text" name="name" id="name" placeholder="Character's name" />
                <S.ToggleBtn onClick={switchTheme}>
                    <img
                        className={themeIsDark ? '' : 'activateIcon'}
                        style={{ filter: themeIsDark ? 'invert(1)' : '' }}
                        src={sunIcon}
                        alt="Light theme icon"
                        title='Switch theme'
                    />
                    <img
                        className={themeIsDark ? 'activateIcon' : ''}
                        style={{ filter: themeIsDark ? 'invert(1)' : '' }}
                        src={moonIcon}
                        alt="Dark theme icon"
                        title='Switch theme'
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
                    />
                ))}
            </ul>
        </S.ContainerB>
    )
}

export default SideB