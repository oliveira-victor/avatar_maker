import * as S from './styles'



const AvatarContainer = ({ charBody, charTop, charBottom }) => {

    const renderChar = (charPart) => {
        return <img src={charPart} />
    }

    return (
        <S.AvatarCanvas>
            <S.CharContainer>
                {renderChar(charBody)}
                {renderChar(charTop)}
                {renderChar(charBottom)}
            </S.CharContainer>
        </S.AvatarCanvas>
    )
}

export default AvatarContainer