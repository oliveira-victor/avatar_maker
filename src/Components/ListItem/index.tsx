import * as S from './styles'

import arrow from '../../assets/images/arrow.svg'
import { useState } from 'react'

const ListItem = () => {

    const [cardExpand, setCardExpand] = useState(true)

    return (
        <S.ListItem>
            <S.ItemTitle>
                <h2>Title</h2>
                <img onClick={() => setCardExpand(!cardExpand)} className={cardExpand ? '' : 'rotate'} src={arrow} alt="Arrow icon" />
            </S.ItemTitle>
            {cardExpand && (
                <S.ThumbsList>
                <img src="http://placehold.it/50x50" alt="" />
                <img src="http://placehold.it/50x50" alt="" />
                <img src="http://placehold.it/50x50" alt="" />
            </S.ThumbsList>
            )}
        </S.ListItem>
    )
}

export default ListItem