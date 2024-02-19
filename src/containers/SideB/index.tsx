import { useDispatch } from 'react-redux'
import { ChangeEvent, useEffect, useState } from 'react'

import ListItem from '../../components/ListItem'
import { avatarData } from '../../utils/data/avatarData'
import { setName } from '../../store/reducers/name'

import * as S from './styles'

const SideB = () => {

    const dispatch = useDispatch()

    const [newName, setNewName] = useState<string>('')

    useEffect(() => {
        dispatch(setName(newName))
    }, [newName])

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewName(event.target.value)
    }

    return (
        <S.ContainerB id="customScrollbar">
            <S.TopBar>
                <input value={newName} onChange={handleInputChange} type="text" name="name" id="name" placeholder="Character's name" />
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