import * as S from './styles'

import arrow from '../../assets/images/arrow.svg'
import { useState } from 'react'

type Props = {
    id: number
    title: string
    image: string[]
}

const ListItem = ({ id, title, image }: Props) => {

    const [cardExpand, setCardExpand] = useState(true)

    return (
        <S.ListItem key={id}>
            <S.ItemTitle onClick={() => setCardExpand(!cardExpand)}>
                <h2>{title}</h2>
                <img className={cardExpand ? '' : 'rotate'} src={arrow} alt="Arrow icon" />
            </S.ItemTitle>
            {cardExpand && (
                <S.ThumbsList>
                    {image.map((img) => (
                            <img key={img} src={img} alt={`Thumbnail for ${title}`} />
                        ))}
                </S.ThumbsList>
            )}
        </S.ListItem>
    )
}

export default ListItem