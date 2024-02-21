import { useState } from 'react'

import * as S from './styles'

import arrow from '../../assets/images/arrow.svg'
import { useDispatch } from 'react-redux'
import { setCharLayer } from '../../store/reducers/avatarLayers'

type Imgs = {
    thumb: string
    full: string
}

type Props = {
    id: number
    title: string
    image: Imgs[]
}

const ListItem = ({ id, title, image }: Props) => {

    const [cardExpand, setCardExpand] = useState(true)

    const dispatch = useDispatch()

    return (
        <S.ListItem key={id}>
            <S.ItemTitle onClick={() => setCardExpand(!cardExpand)}>
                <h2>{title}</h2>
                <img className={cardExpand ? '' : 'rotate'} src={arrow} alt="Arrow icon" />
            </S.ItemTitle>
            {cardExpand && (
                <S.ThumbsList>
                    {image.map((img) => (
                        <img 
                            key={img.thumb} 
                            src={img.thumb} 
                            alt={`Thumbnail for ${title}`} 
                            onClick={() => dispatch(setCharLayer(img.full))}
                        />
                    ))}
                </S.ThumbsList>
            )}
        </S.ListItem>
    )
}

export default ListItem