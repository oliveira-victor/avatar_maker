import * as S from './styles'

import downloadBtn from '../../assets/images/downloadBtn.svg'

type Props = {
    themeIsDark: boolean
}

const Header = ({ themeIsDark }: Props) => {
    return (
        <S.Header>
            <h1>Avatar Maker</h1>
            <S.SaveBtn type='button'>SAVE <img src={downloadBtn} style={{filter: themeIsDark ? 'invert(1)' : ''}} alt="Download icon" /></S.SaveBtn>
        </S.Header>
    )
}

export default Header