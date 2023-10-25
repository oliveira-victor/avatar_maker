import * as S from './styles'

import imgTest from '../../assets/a01.jpg'

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

import eyes1 from '../../assets/eyes/eyes1.png'
import eyes2 from '../../assets/eyes/eyes2.png'
import eyes3 from '../../assets/eyes/eyes3.png'
import eyes4 from '../../assets/eyes/eyes4.png'
import eyes5 from '../../assets/eyes/eyes5.png'
import eyes6 from '../../assets/eyes/eyes6.png'
import eyes7 from '../../assets/eyes/eyes7.png'
import eyes8 from '../../assets/eyes/eyes8.png'

import top1 from '../../assets/top/top1.png'
import top2 from '../../assets/top/top2.png'

import bottom1 from '../../assets/bottom/bottom1.png'
import bottom2 from '../../assets/bottom/bottom2.png'
import bottom3 from '../../assets/bottom/bottom3.png'

const ItemsMenu = ({ handleMouth, handleBottom, handleTop, handleSkin, handleEyes }) => {

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
                    {renderEyesThumbnail(imgTest, eyes1)}
                    {renderEyesThumbnail(imgTest, eyes2)}
                    {renderEyesThumbnail(imgTest, eyes3)}
                    {renderEyesThumbnail(imgTest, eyes4)}
                    {renderEyesThumbnail(imgTest, eyes5)}
                    {renderEyesThumbnail(imgTest, eyes6)}
                    {renderEyesThumbnail(imgTest, eyes7)}
                    {renderEyesThumbnail(imgTest, eyes8)}
                </S.Items>
            </S.Card>
            <S.Card>
                <h2>Mouth</h2>
                <S.Items>
                    {renderMouthThumbnail(imgTest, '')}
                    {renderMouthThumbnail(imgTest, mouth1)}
                    {renderMouthThumbnail(imgTest, mouth2)}
                    {renderMouthThumbnail(imgTest, mouth3)}
                    {renderMouthThumbnail(imgTest, mouth4)}
                    {renderMouthThumbnail(imgTest, mouth5)}
                    {renderMouthThumbnail(imgTest, mouth6)}
                </S.Items>
            </S.Card>
            <S.Card>
                <h2>Top</h2>
                <S.Items>
                    {renderTopThumbnail(imgTest, top1)}
                    {renderTopThumbnail(imgTest, top2)}
                </S.Items>
            </S.Card>
            <S.Card>
                <h2>Bottom</h2>
                <S.Items>
                    {renderBottomThumbnail(imgTest, bottom1)}
                    {renderBottomThumbnail(imgTest, bottom2)}
                    {renderBottomThumbnail(imgTest, bottom3)}
                </S.Items>
            </S.Card>
        </S.ItemsContainer>
    )
}

export default ItemsMenu