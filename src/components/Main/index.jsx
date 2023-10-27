import { useState } from "react"
import AvatarContainer from "../../containers/AvatarContainer"
import ItemsMenu from "../../containers/ItemsMenu"

import * as S from './styles'

import skin1 from '../../assets/skin/skin1.png'
import eyes1 from '../../assets/eyes/eyes1.png'
import top1 from '../../assets/top/top1.png'
import body from '../../assets/body/body.png'
import bottom1 from '../../assets/bottom/bottom1.png'
import mouth1 from '../../assets/mouth/mouth1.png'

const Main = ({ refHandler }) => {

    const charBody = body 
    const [charSkin, setCharSkin] = useState(skin1)
    const [charEyes, setCharEyes] = useState(eyes1)
    const [charMouth, setCharMouth] = useState(mouth1)
    const [charTop, setCharTop] = useState(top1)
    const [charBottom, setCharBottom] = useState(bottom1)

    const handleSkin = (chosenItem) => {
        setCharSkin(chosenItem)
    }

    const handleEyes = (chosenItem) => {
        setCharEyes(chosenItem)
    }

    const handleMouth = (chosenItem) => {
        setCharMouth(chosenItem)
    }

    const handleTop = (chosenItem) => {
        setCharTop(chosenItem)
    }

    const handleBottom = (chosenItem) => {
        setCharBottom(chosenItem)
    }

    return (
        <S.Main>
            <AvatarContainer 
                refHandler={refHandler}
                charBody={charBody} 
                charSkin={charSkin} 
                charTop={charTop}
                charEyes={charEyes}
                charMouth={charMouth}
                charBottom={charBottom} 
            />
            <ItemsMenu 
                handleSkin={handleSkin}
                handleTop={handleTop} 
                handleEyes={handleEyes} 
                handleMouth={handleMouth} 
                handleBottom={handleBottom}
            />
        </S.Main>
    )
}

export default Main