import * as S from './styles'

import imgTest from '../../assets/a01.jpg'

import top1 from '../../assets/top/a1.svg'
import top2 from '../../assets/top/a2.svg'

const ItemsMenu = ({ handleTop }) => {

    const renderThumbnail = (thumbnail, itemPart) => {
        return <img src={thumbnail} onClick={() => handleTop(itemPart)} />
    }

    return (
        <S.ItemsContainer>
            <S.Card>
                <h2>Top</h2>
                <S.Items>
                    {renderThumbnail(imgTest, top1)}
                    {renderThumbnail(imgTest, top2)}
                </S.Items>
            </S.Card>
        </S.ItemsContainer>
    )
}

export default ItemsMenu