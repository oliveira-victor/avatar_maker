import { useState } from 'react'
import * as S from './styles'

import top1 from '../../assets/top/a1.svg'
import top2 from '../../assets/top/a2.svg'

const ItemsCard = (props) => {

    const { title, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 } = props

    const [charTop, setCharTop] = useState(top1)

    const handleTop = (chosenTop) => {
        setCharTop(chosenTop)
        console.log(`chosen ${chosenTop}`)
        console.log(`set top ${charTop}`)
    }

    return (
        <S.Card>
            <h2>{title}</h2>
            <S.Items>
                <img src={img1} onClick={() => handleTop(top1)} />
                <img src={img2} onClick={() => handleTop(top2)} />
                <img src={img3} />
                <img src={img4} />
                <img src={img5} />
                <img src={img6} />
                <img src={img7} />
                <img src={img8} />
                <img src={img9} />
                <img src={img10} />
            </S.Items>
        </S.Card>
    )
}

export default ItemsCard