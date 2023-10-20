import ItemsCard from '../../components/ItemsCard'
import * as S from './styles'

import imgTest from '../../assets/a01.jpg'

const ItemsMenu = () => {
    return (
        <S.ItemsContainer>
            <ItemsCard
                title="Body" 
                img1={imgTest}
                img2={imgTest}
                img3={imgTest}
                img4={imgTest}
            />
            <ItemsCard
                title="Top" 
                img1={imgTest}
                img2={imgTest}
                img3={imgTest}
                img4={imgTest}
                img5={imgTest}
                img6={imgTest}
                img7={imgTest}
            />
            <ItemsCard
                title="Bottom" 
                img1={imgTest}
                img2={imgTest}
                img3={imgTest}
                img4={imgTest}
                img5={imgTest}
                img6={imgTest}
                img7={imgTest}
                img8={imgTest}
                img9={imgTest}
                img10={imgTest}
            />
        </S.ItemsContainer>
    )
}

export default ItemsMenu