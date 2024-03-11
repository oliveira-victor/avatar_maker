import { Trans, useTranslation } from 'react-i18next'

import * as S from './styles'

import closeBtn from '../../assets/images/close.svg'

type Props = {
    closeModal: () => void
}

const ModalWindow = ({ closeModal }: Props) => {

    const { t } = useTranslation()

    return (
        <S.Modal>
            <div className="overlay" onClick={closeModal}></div>
            <S.ModalContaienr>
                <div className='modalTitle'>
                    <h2>{t('aboutTitle')}</h2>
                    <img onClick={closeModal} className='closeBtn' src={closeBtn} alt="Close button" />
                </div>
                <span className='version'>{t('version')} 1.5</span>
                <p>
                    <Trans i18nKey={t('aboutP1')} />
                </p>
                <br />
                <p>
                    {t('aboutP2a')} <a href='https://vfostudio.vercel.app/' target='_blank'>VFO Studio</a>, {t('aboutP2b')}  @<a href='https://instagram.com/vfo.studio' target='_blank'>vfo.studio</a>
                </p>
                <br />
                <p>
                    <Trans i18nKey={t('aboutP3')} /><a href='mailto:dev.victor.fo@gmail.com'>dev.victor.fo@gmail.com</a>
                </p>
                <br />
                <h3>{t('donateTitle')}</h3>
                <p>
                    {t('donateTxt')} @<a href='https://instagram.com/vfo.studio' target='_blank'>vfo.studio</a>
                </p>
                <S.DonateContainer>
                    <span>{t('donateMode')}</span>
                    <div>
                        <a href='https://www.paypal.com/donate/?business=SJF8WGT3UNRYN&no_recurring=0&item_name=Obrigado+por+considerar+doar+qualquer+quantia%21+Isso+%C3%A9+um+grande+incentivo+para+que+eu+continue+sendo+criativo.&currency_code=BRL' target='_blank'>
                            <button>BRL</button>
                        </a>
                        <a href="https://www.paypal.com/donate/?business=SJF8WGT3UNRYN&no_recurring=0&item_name=Thank+you+for+considering+donating+any+amount%21+That+is+a+huge+encouragement+to+keep+going.&currency_code=USD" target='_blank'>
                            <button>USD</button>
                        </a>
                        <a href="https://www.paypal.com/donate/?business=SJF8WGT3UNRYN&no_recurring=0&item_name=Thank+you+for+considering+donating+any+amount%21+That+is+a+huge+encouragement+to+keep+going.&currency_code=EUR" target='_blank'>
                            <button>EUR</button>
                        </a>
                    </div>
                </S.DonateContainer>
            </S.ModalContaienr>
        </S.Modal>
    )
}

export default ModalWindow