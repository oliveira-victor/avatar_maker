import { useState } from 'react'

import * as S from './styles'

import vfoStudio from '../../assets/images/vfostudio.svg'
import vfo from '../../assets/images/vfo_white.svg'
import github from '../../assets/images/github.svg'
import ModalWindow from '../../components/ModalWindow'

const Footer = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const closeModal = () => {
        setModalIsOpen(false)
    }

    return (
        <S.Footer>

            {modalIsOpen && (
                <ModalWindow closeModal={closeModal} />
            )}

            <S.FooterContent>
                <div>
                    <h2>Avatar Maker</h2>
                    <span>by <a href="https://victoroliveira.vercel.app/" target='_blank'>Victor Freire Oliveira</a></span> <span>- Software Engineer</span> <span>&copy; {new Date().getFullYear()}</span>
                    <br /><br />
                    <span className='aboutLink' onClick={() => setModalIsOpen(true)}>About </span>
                    •
                    <span> Donate: &nbsp;
                        <a href='https://www.paypal.com/donate/?business=SJF8WGT3UNRYN&no_recurring=0&item_name=Obrigado+por+considerar+doar+qualquer+quantia%21+Isso+%C3%A9+um+grande+incentivo+para+que+eu+continue+sendo+criativo.&currency_code=BRL' target='_blank'>
                            BRL
                        </a>
                        &nbsp;|&nbsp;
                        <a href="https://www.paypal.com/donate/?business=SJF8WGT3UNRYN&no_recurring=0&item_name=Thank+you+for+considering+donating+any+amount%21+That+is+a+huge+encouragement+to+keep+going.&currency_code=USD" target='_blank'>
                            USD
                        </a>
                        &nbsp;|&nbsp;
                        <a href="https://www.paypal.com/donate/?business=SJF8WGT3UNRYN&no_recurring=0&item_name=Thank+you+for+considering+donating+any+amount%21+That+is+a+huge+encouragement+to+keep+going.&currency_code=EUR" target='_blank'>
                            EUR
                        </a>
                    </span>

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