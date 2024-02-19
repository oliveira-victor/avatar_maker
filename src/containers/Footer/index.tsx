import * as S from './styles'

import vfoStudio from '../../assets/images/vfostudio.svg'
import vfo from '../../assets/images/vfo_white.svg'
import github from '../../assets/images/github.svg'

const Footer = () => {
    return (
        <S.Footer>
            <S.FooterContent>
                <div>
                    <h2>Avatar Maker</h2>
                    <span>by Victor Freire Oliveira</span> <span>- Software Engineer</span> | <span>&copy; {new Date().getFullYear()}</span>
                </div>
                <S.footerLogos>
                    <a href="https://victoroliveira.vercel.app/" target='_blank'>
                        <img src={vfo} alt="VFO logo" title="Go to Victor's portfolio" />
                    </a>
                    <a href="https://github.com/oliveira-victor" target='_blank'>
                        <img src={github} alt="GitHub logo" title="Go to Victor's GitHub page" />
                    </a>
                    <a href="https://vfostudio.vercel.app/" target='_blank'>
                        <img src={vfoStudio} alt="Logo VFO Studio" title='Go to VFO Studio page' />
                    </a>
                </S.footerLogos>
            </S.FooterContent>
        </S.Footer>
    )
}

export default Footer