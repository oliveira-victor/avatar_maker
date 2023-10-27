import * as S from './styles'

const Header = ({ saveButtonAction }) => {

    return (
        <S.Header>
            <h1>Avatar Maker</h1>
            <S.HeaderBtn onClick={saveButtonAction}>Save</S.HeaderBtn>
        </S.Header>
    )
}

export default Header