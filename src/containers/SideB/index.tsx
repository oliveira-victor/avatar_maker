import { useDispatch } from 'react-redux'
import { ChangeEvent, useEffect, useState } from 'react'

import ListItem from '../../Components/ListItem'
import { thumbsData } from '../../utils/data/thumbsData'
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
                {thumbsData.map((item) => (
                    <ListItem 
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