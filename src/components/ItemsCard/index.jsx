import * as S from './styles'

const ItemsCard = (props) => {

    const { title, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 } = props

    const handleClick = () => {
        console.log('oi')
    }

    return (
        <S.Card>
            <h2>{title}</h2>
            <S.Items>
                <img src={img1} onClick={handleClick} />
                <img src={img2} />
                <img src={img3} />
                <img src={img4} />
                <img src={img5} />
                <img src={img6} />
                <img src={img7} />
                <img src={img8} />
                <img src={img9} />
                <img src={img10} />
            </S.Items>
        </S.Card>
    )
}

export default ItemsCard