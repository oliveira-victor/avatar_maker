import { useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'

const SideA = () => {

    const charName = useSelector((state: RootReducer) => state.setName.charName)

    return (
        <S.ContainerA>
            <S.AvatarContainer>
                <div className='avatarName'>
                    {charName}
                </div>
                <div>
                    avatar
                </div>
            </S.AvatarContainer>
        </S.ContainerA>
    )
}

export default SideA