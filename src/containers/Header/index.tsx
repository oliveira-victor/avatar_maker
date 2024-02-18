import * as S from './styles'

import downloadBtn from '../../assets/images/downloadBtn.svg'

const Header = () => {
    return (
        <S.Header>
            <h1>Avatar Maker</h1>
            <S.SaveBtn type='button'>SAVE <img src={downloadBtn} alt="" /></S.SaveBtn>
        </S.Header>
    )
}

export default Header