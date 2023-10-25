import * as S from './styles'

import vfoIcon from '../../assets/vfo_white.svg'
import github from '../../assets/github.svg'

const Footer = () => {
    return (
        <S.Footer>
            <S.FooterContainer>
                <span>
                    Avatar Maker was created by Victor Freire Oliveira - Frontend Developer
                    <br />with the use of React JS + Styled Components
                </span>
                <S.FooterIcons>
                    <a href="https://victoroliveira.vercel.app/" target='_blank' rel="noreferrer"><img src={vfoIcon} alt="VFO Icon" /></a>
                    <a href="https://github.com/oliveira-victor" target='_blank' rel="noreferrer"><img src={github} alt="GitHub Icon" /></a>
                </S.FooterIcons>
            </S.FooterContainer>
        </S.Footer>
    )
}

export default Footer