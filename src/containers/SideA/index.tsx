import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import * as S from './styles'

import empty from '../../assets/images/empty.png'
import body from '../../assets/images/body/body.png'
import skin from '../../assets/images/skin/skin01.png'
import eyes from '../../assets/images/eyes/eyes01.png'
import mouth from '../../assets/images/mouth/mouth01.png'
import top from '../../assets/images/top/top01.png'
import frame from '../../assets/images/frame.png'

const SideA = () => {

    const charName = useSelector((state: RootReducer) => state.setName.charName)
    const charParts = useSelector((state: RootReducer) => state.setCharLayer.avatarLayers)

    return (
        <S.ContainerA>
            <S.AvatarContainer style={{backgroundImage: charParts.background === '' || charParts.background.includes("backgroundEmpty") ? '' : `url(${charParts.background})`}}>
                {charParts.background === '' || charParts.background.includes("backgroundEmpty") ? '' : <img className='frame' src={frame} alt="Image frame" />}
                <div className='avatarName'>
                    {charName}
                </div>
                <S.ImagesContainer className='float'>
                    <img className='absoluteIgm' src={body} alt="Avatar body image" />
                    <img src={empty} alt="Just an empty image" />
                    <img className='absoluteIgm' src={charParts.skin === '' ? skin : charParts.skin} alt="Character's skin" />
                    <img className='absoluteIgm' src={charParts.eyes === '' ? eyes : charParts.eyes} alt="Character's eyes" />
                    <img className='absoluteIgm' src={charParts.mouth === '' ? mouth : charParts.mouth} alt="Character's mouth" />
                    {charParts.hair === '' || charParts.hair.includes("hairEmpty") ? '' : <img className='absoluteIgm' src={charParts.hair} alt="Character's hair" />}
                    {charParts.features === '' || charParts.features.includes("featuresEmpty") ? '' : <img className='absoluteIgm' src={charParts.features} alt="Character's feature" />}
                    {charParts.shoes === '' || charParts.shoes.includes("shoesEmpty") ? '' : <img className='absoluteIgm' src={charParts.shoes} alt="Character's shoes" />}
                    {charParts.bottom === '' || charParts.bottom.includes("bottomEmpty") ? '' : <img className='absoluteIgm' src={charParts.bottom} alt="Character's bottom" />}
                    <img className='absoluteIgm' src={charParts.top === '' ? top : charParts.top} alt="Character's shirt" />
                    {charParts.extra === '' || charParts.extra.includes("extraEmpty") ? '' : <img className='absoluteIgm' src={charParts.extra} alt="Extra image" />}
                </S.ImagesContainer>
            </S.AvatarContainer>
        </S.ContainerA>
    )
}

export default SideA