import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import * as S from './styles'

import empty from '../../assets/images/body/empty.png'
import body from '../../assets/images/body/body.png'

const SideA = () => {

    const charName = useSelector((state: RootReducer) => state.setName.charName)
    const charParts = useSelector((state: RootReducer) => state.setCharLayer.avatarLayers)

    return (
        <S.ContainerA>
            <S.AvatarContainer>
                <div className='avatarName'>
                    {charName}
                </div>
                <S.ImagesContainer>
                    <img className='absoluteIgm' src={body} alt="Avatar body image" />
                    <img src={empty} alt="Just an empty image" />
                    <img className='absoluteIgm' src={charParts.skin} alt="" />
                    <img className='absoluteIgm' src={charParts.eyes} alt="" />
                </S.ImagesContainer>
            </S.AvatarContainer>
        </S.ContainerA>
    )
}

export default SideA