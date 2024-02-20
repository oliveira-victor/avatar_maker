import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import * as S from './styles'

import body from '../../assets/images/body/body.png'

const SideA = () => {

    const charName = useSelector((state: RootReducer) => state.setName.charName)

    return (
        <S.ContainerA>
            <S.AvatarContainer>
                <div className='avatarName'>
                    {charName}
                </div>
                <S.ImagesContainer>
                    <img src={body} alt="Body image" />
                </S.ImagesContainer>
            </S.AvatarContainer>
        </S.ContainerA>
    )
}

export default SideA