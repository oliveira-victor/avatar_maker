import { useState } from 'react'

import * as S from './styles'

import body from '../../assets/body/00.svg'
import top1 from '../../assets/top/a1.svg'
import top2 from '../../assets/top/a2.svg'
import bottom from '../../assets/bottom/b1.svg'
import bottom2 from '../../assets/bottom/b2.svg'

const AvatarContainer = () => {

    const [charBody, setCharBody] = useState(body)
    const [charTop, setCharTop] = useState(top1)
    const [charBottom, setCharBottom] = useState(bottom)

    const handleChar = (charPart) => {
        return <img src={charPart} />
    }

    const handleTop = (chosenTop) => {
        setCharTop(chosenTop)
    }

    return (
        <S.AvatarCanvas>
            <button onClick={() => handleTop(top1)}>TEST</button>
            <button onClick={() => handleTop(top2)}>TEST2</button>
            <S.CharContainer>
                {handleChar(charBody)}
                {handleChar(charTop)}
                {handleChar(charBottom)}
            </S.CharContainer>
        </S.AvatarCanvas>
    )
}

export default AvatarContainer