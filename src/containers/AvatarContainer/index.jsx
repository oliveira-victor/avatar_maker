import * as S from './styles'



const AvatarContainer = ({ charBody, charTop, charBottom, charSkin, charEyes, charMouth }) => {

    const renderChar = (charPart) => {
        return <img src={charPart} />
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
            </S.CharContainer>
        </S.AvatarCanvas>
    )
}

export default AvatarContainer