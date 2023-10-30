import * as S from './styles'

import nullIcon from '../../assets/null-icon.png'

import skin1 from '../../assets/skin/skin1.png'
import skin2 from '../../assets/skin/skin2.png'
import skin3 from '../../assets/skin/skin3.png'
import skin4 from '../../assets/skin/skin4.png'
import skin5 from '../../assets/skin/skin5.png'
import skin6 from '../../assets/skin/skin6.png'
import skin7 from '../../assets/skin/skin7.png'
import skin8 from '../../assets/skin/skin8.png'
import skin9 from '../../assets/skin/skin9.png'

import thumbSkin1 from '../../assets/skin/thumbs/skin1.jpg'
import thumbSkin2 from '../../assets/skin/thumbs/skin2.jpg'
import thumbSkin3 from '../../assets/skin/thumbs/skin3.jpg'
import thumbSkin4 from '../../assets/skin/thumbs/skin4.jpg'
import thumbSkin5 from '../../assets/skin/thumbs/skin5.jpg'
import thumbSkin6 from '../../assets/skin/thumbs/skin6.jpg'
import thumbSkin7 from '../../assets/skin/thumbs/skin7.jpg'
import thumbSkin8 from '../../assets/skin/thumbs/skin8.jpg'
import thumbSkin9 from '../../assets/skin/thumbs/skin9.jpg'

import mouth1 from '../../assets/mouth/mouth1.png'
import mouth2 from '../../assets/mouth/mouth2.png'
import mouth3 from '../../assets/mouth/mouth3.png'
import mouth4 from '../../assets/mouth/mouth4.png'
import mouth5 from '../../assets/mouth/mouth5.png'
import mouth6 from '../../assets/mouth/mouth6.png'

import iconMouth1 from '../../assets/mouth/icon1.jpg'
import iconMouth2 from '../../assets/mouth/icon2.jpg'
import iconMouth3 from '../../assets/mouth/icon3.jpg'
import iconMouth4 from '../../assets/mouth/icon4.jpg'
import iconMouth5 from '../../assets/mouth/icon5.jpg'
import iconMouth6 from '../../assets/mouth/icon6.jpg'

import eyes1 from '../../assets/eyes/eyes1.png'
import eyes2 from '../../assets/eyes/eyes2.png'
import eyes3 from '../../assets/eyes/eyes3.png'
import eyes4 from '../../assets/eyes/eyes4.png'
import eyes5 from '../../assets/eyes/eyes5.png'
import eyes6 from '../../assets/eyes/eyes6.png'
import eyes7 from '../../assets/eyes/eyes7.png'
import eyes8 from '../../assets/eyes/eyes8.png'

import iconEyes1 from '../../assets/eyes/icon1.jpg'
import iconEyes2 from '../../assets/eyes/icon2.jpg'
import iconEyes3 from '../../assets/eyes/icon3.jpg'
import iconEyes4 from '../../assets/eyes/icon4.jpg'
import iconEyes5 from '../../assets/eyes/icon5.jpg'
import iconEyes6 from '../../assets/eyes/icon6.jpg'
import iconEyes7 from '../../assets/eyes/icon7.jpg'
import iconEyes8 from '../../assets/eyes/icon8.jpg'

import hair1 from '../../assets/hair/hair1.png'
import hair2 from '../../assets/hair/hair2.png'
import hair3 from '../../assets/hair/hair3.png'

import iconHair1 from '../../assets/hair/icon1.jpg'
import iconHair2 from '../../assets/hair/icon2.jpg'
import iconHair3 from '../../assets/hair/icon3.jpg'

import top1 from '../../assets/top/top1.png'
import top2 from '../../assets/top/top2.png'

import iconTop1 from '../../assets/top/icon1.jpg'
import iconTop2 from '../../assets/top/icon2.jpg'

import bottom1 from '../../assets/bottom/bottom1.png'
import bottom2 from '../../assets/bottom/bottom2.png'
import bottom3 from '../../assets/bottom/bottom3.png'

import iconBottom1 from '../../assets/bottom/icon1.jpg'
import iconBottom2 from '../../assets/bottom/icon2.jpg'
import iconBottom3 from '../../assets/bottom/icon3.jpg'

import shoes1 from '../../assets/shoes/shoes1.png'
import shoes2 from '../../assets/shoes/shoes2.png'

import iconShoes1 from '../../assets/shoes/icon1.jpg'
import iconShoes2 from '../../assets/shoes/icon2.jpg'

const ItemsMenu = ({ handleMouth, handleBottom, handleTop, handleSkin, handleEyes, handleShoes, handleHair }) => {

    const renderSkinThumbnail = (thumbnail, itemPart) => {
        return <img src={thumbnail} onClick={() => handleSkin(itemPart)} />
    }

    const renderEyesThumbnail = (thumbnail, itemPart) => {
        return <img src={thumbnail} onClick={() => handleEyes(itemPart)} />
    }

    const renderTopThumbnail = (thumbnail, itemPart) => {
        return <img src={thumbnail} onClick={() => handleTop(itemPart)} />
    }

    const renderBottomThumbnail = (thumbnail, itemPart) => {
        return <img src={thumbnail} onClick={() => handleBottom(itemPart)} />
    }

    const renderMouthThumbnail = (thumbnail, itemPart) => {
        return <img src={thumbnail} onClick={() => handleMouth(itemPart)} />
    }

    const renderHairThumbnail = (thumbnail, itemPart) => {
        return <img src={thumbnail} onClick={() => handleHair(itemPart)} />
    }

    const renderShoesThumbnail = (thumbnail, itemPart) => {
        return <img src={thumbnail} onClick={() => handleShoes(itemPart)} />
    }

    return (
        <S.ItemsContainer>
            <S.Card>
                <h2>Skin</h2>
                <S.Items>
                    {renderSkinThumbnail(thumbSkin1, skin1)}
                    {renderSkinThumbnail(thumbSkin2, skin2)}
                    {renderSkinThumbnail(thumbSkin3, skin3)}
                    {renderSkinThumbnail(thumbSkin4, skin4)}
                    {renderSkinThumbnail(thumbSkin5, skin5)}
                    {renderSkinThumbnail(thumbSkin6, skin6)}
                    {renderSkinThumbnail(thumbSkin7, skin7)}
                    {renderSkinThumbnail(thumbSkin8, skin8)}
                    {renderSkinThumbnail(thumbSkin9, skin9)}
                </S.Items>
            </S.Card>
            <S.Card>
                <h2>Eyes</h2>
                <S.Items>
                    {renderEyesThumbnail(iconEyes1, eyes1)}
                    {renderEyesThumbnail(iconEyes2, eyes2)}
                    {renderEyesThumbnail(iconEyes3, eyes3)}
                    {renderEyesThumbnail(iconEyes4, eyes4)}
                    {renderEyesThumbnail(iconEyes5, eyes5)}
                    {renderEyesThumbnail(iconEyes6, eyes6)}
                    {renderEyesThumbnail(iconEyes7, eyes7)}
                    {renderEyesThumbnail(iconEyes8, eyes8)}
                </S.Items>
            </S.Card>
            <S.Card>
                <h2>Mouth</h2>
                <S.Items>
                    {renderMouthThumbnail(nullIcon, '')}
                    {renderMouthThumbnail(iconMouth1, mouth1)}
                    {renderMouthThumbnail(iconMouth2, mouth2)}
                    {renderMouthThumbnail(iconMouth3, mouth3)}
                    {renderMouthThumbnail(iconMouth4, mouth4)}
                    {renderMouthThumbnail(iconMouth5, mouth5)}
                    {renderMouthThumbnail(iconMouth6, mouth6)}
                </S.Items>
            </S.Card>
            <S.Card>
                <h2>Top</h2>
                <S.Items>
                    {renderTopThumbnail(iconTop1, top1)}
                    {renderTopThumbnail(iconTop2, top2)}
                </S.Items>
            </S.Card>
            <S.Card>
                <h2>Bottom</h2>
                <S.Items>
                    {renderBottomThumbnail(iconBottom1, bottom1)}
                    {renderBottomThumbnail(iconBottom2, bottom2)}
                    {renderBottomThumbnail(iconBottom3, bottom3)}
                </S.Items>
            </S.Card>
            <S.Card>
                <h2>Hair</h2>
                <S.Items>
                    {renderHairThumbnail(nullIcon, '')}
                    {renderHairThumbnail(iconHair1, hair1)}
                    {renderHairThumbnail(iconHair2, hair2)}
                    {renderHairThumbnail(iconHair3, hair3)}
                </S.Items>
            </S.Card>
            <S.Card>
                <h2>Shoes</h2>
                <S.Items>
                    {renderShoesThumbnail(nullIcon, '')}
                    {renderShoesThumbnail(iconShoes1, shoes1)}
                    {renderShoesThumbnail(iconShoes2, shoes2)}
                </S.Items>
            </S.Card>
        </S.ItemsContainer>
    )
}

export default ItemsMenu