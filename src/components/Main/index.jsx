import { useState } from "react"
import AvatarContainer from "../../containers/AvatarContainer"
import ItemsMenu from "../../containers/ItemsMenu"

import * as S from './styles'

import top1 from '../../assets/top/a1.svg'
import body from '../../assets/body/00.svg'
import bottom from '../../assets/bottom/b1.svg'

const Main = () => {

    const [charBody, setCharBody] = useState(body)
    const [charTop, setCharTop] = useState(top1)
    const [charBottom, setCharBottom] = useState(bottom)

    const handleTop = (chosenTop) => {
        setCharTop(chosenTop)
    }

    return (
        <S.Main>
            <ItemsMenu 
                handleTop={handleTop} 
            />
            <AvatarContainer 
                charBody={charBody} 
                charTop={charTop}
                charBottom={charBottom} 
            />
        </S.Main>
    )
}

export default Main