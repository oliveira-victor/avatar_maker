import * as S from './styles'

import emtpyImg from '../../assets/placeholderImg.png'

const AvatarContainer = ({ charBody, charTop, charBottom, charSkin, charEyes, charMouth }) => {

    const renderChar = (charPart) => {
        return <S.CharAbsoluteParts src={charPart} />
    }

    return (
        <S.AvatarCanvas>
            <S.CharContainer>
                {renderChar(charSkin)}
                {renderChar(charBody)}
                {renderChar(charEyes)}
                {renderChar(charMouth)}
                {renderChar(charBottom)}
                {renderChar(charTop)}
                <S.PlaceholderImg src={emtpyImg} />
            </S.CharContainer>
        </S.AvatarCanvas>
    )
}

export default AvatarContainer