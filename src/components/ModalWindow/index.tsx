import * as S from './styles'

import closeBtn from '../../assets/images/close.svg'

type Props = {
    closeModal: () => void
}

const ModalWindow = ({ closeModal }: Props) => {

    return (
        <S.Modal>
            <div className="overlay" onClick={closeModal}></div>
            <S.ModalContaienr>
                <div className='modalTitle'>
                    <h2>About Avatar Maker</h2>
                    <img onClick={closeModal} className='closeBtn' src={closeBtn} alt="Close button" />
                </div>
                <p>
                    Avatar Maker is a free web app designed and developed by <strong>Victor Freire Oliveira, for personal use only</strong>. All the art included was made by the same developer and are available for download and use under the <strong>Creative Commons Licence</strong>.
                </p>
                <br />
                <p>
                    If you want to see more art by the artist, you can check <a href="https://vfostudio.vercel.app/" target='_blank'>VFO Studio</a> page.
                </p>
                <br />
                <p>
                    Although this is a free app, you can always donate any amount to show support, if you feel like:
                </p>
                <S.DonateContainer>
                    <a href='https://www.paypal.com/donate/?business=SJF8WGT3UNRYN&no_recurring=0&item_name=Obrigado+por+considerar+doar+qualquer+quantia%21+Isso+%C3%A9+um+grande+incentivo+para+que+eu+continue+sendo+criativo.&currency_code=BRL' target='_blank'>
                        <button>BRL</button>
                    </a>
                    <a href="https://www.paypal.com/donate/?business=SJF8WGT3UNRYN&no_recurring=0&item_name=Thank+you+for+considering+donating+any+amount%21+That+is+a+huge+encouragement+to+keep+going.&currency_code=USD" target='_blank'>
                        <button>USD</button>
                    </a>
                    <a href="https://www.paypal.com/donate/?business=SJF8WGT3UNRYN&no_recurring=0&item_name=Thank+you+for+considering+donating+any+amount%21+That+is+a+huge+encouragement+to+keep+going.&currency_code=EUR" target='_blank'>
                        <button>EUR</button>
                    </a>

                </S.DonateContainer>
            </S.ModalContaienr>
        </S.Modal>
    )
}

export default ModalWindow