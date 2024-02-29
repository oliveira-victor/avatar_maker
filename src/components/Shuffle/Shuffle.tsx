import { useDispatch } from 'react-redux'
import { avatarData } from '../../utils/data/avatarData'
import { setCharLayer } from '../../store/reducers/avatarLayers'

import * as S from './styles'

import dices from '../../assets/images/dices.svg'

type Props = {
    themeIsDark: boolean
}

const Shuffle = ({ themeIsDark }: Props) => {

    const dispatch = useDispatch()

    const handleShuffle = () => {
        avatarData.forEach((item) => {
            
            let shuffledNumber = 0
            let chosenItem = ''

            shuffledNumber = Math.floor(Math.random() * item.image.length)

            chosenItem = item.image[shuffledNumber].full

            dispatch(setCharLayer(chosenItem))
        })
    }

    return (
        <>
            <S.ShuffleBtn 
                onClick={handleShuffle} 
                src={dices} 
                alt="Shuffle icon" 
                title='Create random character' 
                style={{filter: themeIsDark ? 'invert(1)' : ''}}
            />
        </>
    )
}

export default Shuffle