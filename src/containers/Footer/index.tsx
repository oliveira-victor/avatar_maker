import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import ModalWindow from '../../components/ModalWindow'

import * as S from './styles'

import vfoStudio from '../../assets/images/vfostudio.svg'
import vfo from '../../assets/images/vfo_white.svg'
import github from '../../assets/images/github.svg'
import instagram from '../../assets/images/instagram.svg'
import Languages from '../../components/Languages'

const Footer = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const { t } = useTranslation()

    return (
        <S.Footer>

            {modalIsOpen && (
                <ModalWindow closeModal={closeModal} />
            )}

            <S.FooterContent>
                <div>
                    <h2>Avatar Maker</h2>
                    <span>{t('by')} <a href="https://victoroliveira.vercel.app/" target='_blank'>Victor Freire Oliveira</a></span> <span>- {t('softwareEngineer')}</span> <span>&copy; {new Date().getFullYear()}</span>
                    <br /><br />
                    <S.FooterList>
                        <li>
                            <span className='aboutLink' onClick={() => setModalIsOpen(true)}>{t('about')} </span>
                        </li>
                        <li>
                            <Languages />
                        </li>
                        <li>
                            {t('donate')}&nbsp;
                            <span>
                                <a href='https://www.paypal.com/donate/?business=SJF8WGT3UNRYN&no_recurring=0&item_name=Obrigado+por+considerar+doar+qualquer+quantia%21+Isso+%C3%A9+um+grande+incentivo+para+que+eu+continue+sendo+criativo.&currency_code=BRL' target='_blank'>
                                    BRL
                                </a>
                            </span>
                            <span>
                                &nbsp;|&nbsp;
                                <a href="https://www.paypal.com/donate/?business=SJF8WGT3UNRYN&no_recurring=0&item_name=Thank+you+for+considering+donating+any+amount%21+That+is+a+huge+encouragement+to+keep+going.&currency_code=USD" target='_blank'>
                                    USD
                                </a>
                            </span>
                            <span>
                                &nbsp;|&nbsp;
                                <a href="https://www.paypal.com/donate/?business=SJF8WGT3UNRYN&no_recurring=0&item_name=Thank+you+for+considering+donating+any+amount%21+That+is+a+huge+encouragement+to+keep+going.&currency_code=EUR" target='_blank'>
                                    EUR
                                </a>
                            </span>
                        </li>
                    </S.FooterList>
                </div>
                <S.footerLogos>
                    <a href="https://victoroliveira.vercel.app/" target='_blank'>
                        <img src={vfo} alt="VFO logo" title={t('portfolioTitle')} />
                    </a>
                    <a href="https://vfostudio.vercel.app/" target='_blank'>
                        <img src={vfoStudio} alt="Logo VFO Studio" title={t('vfoStudioTitle')} />
                    </a>
                    <a href="https://github.com/oliveira-victor" target='_blank'>
                        <img src={github} alt="GitHub logo" title={t('githubTitle')} />
                    </a>
                    <a href="https://instagram.com/vfo.studio" target='_blank'>
                        <img src={instagram} alt="Instagram logo" title={t('instagram')} />
                    </a>
                </S.footerLogos>
            </S.FooterContent>
        </S.Footer>
    )
}

export default Footer