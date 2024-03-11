import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { setCharLayer } from '../../store/reducers/avatarLayers'
import { RootReducer } from '../../store'

import * as S from './styles'

import arrow from '../../assets/images/arrow.svg'

type Imgs = {
    thumb: string
    full: string
}

type Props = {
    id: number
    title: string
    image: Imgs[]
    themeIsDark: boolean
}

const ListItem = ({ id, title, image, themeIsDark }: Props) => {

    const { t } = useTranslation()

    const [cardExpand, setCardExpand] = useState(true)

    const dispatch = useDispatch()

    const charParts = useSelector((state: RootReducer) => state.setCharLayer.avatarLayers)

    const getBgColor = (title: string) => {
        if (title === 'Eyes') {
            return '#d7d46d'
        }

        if (title === 'Top') {
            return '#8f442f'
        }

        if (title === 'Mouth') {
            return '#8db2b3'
        }

        if (title === 'Hair') {
            return '#8cd38f'
        }

        if (title === 'Bottom') {
            return '#c973bd'
        }

        if (title === 'Shoes') {
            return '#8c98bb'
        }

        if (title === 'Features') {
            return '#d88250'
        }

        if (title === 'Extra') {
            return '#9ad67e'
        }
    }

    const setThumbStyle = (item: string) => {
        const isLayerPresent = Object.values(charParts).includes(item)

        if (isLayerPresent === true) {
            if (themeIsDark) {
                return `thumbSelected darkThemeBorder`
            }
            
            return `thumbSelected`
        }
        return ''
    }

    return (
        <S.ListItem key={id}>
            <S.ItemTitle onClick={() => setCardExpand(!cardExpand)}>
                <h2>{t(`${title}`)}</h2>
                <img className={cardExpand ? '' : 'rotate'} src={arrow} alt="Arrow icon" />
            </S.ItemTitle>
            {cardExpand && (
                <S.ThumbsList>
                    {image.map((img) => (
                        <img 
                            key={img.thumb} 
                            src={img.thumb} 
                            alt={`Thumbnail for ${title}`} 
                            className={setThumbStyle(img.full)}
                            style={{backgroundColor: `${getBgColor(title)}`}}
                            onClick={() => dispatch(setCharLayer(img.full))}
                        />
                    ))}
                </S.ThumbsList>
            )}
        </S.ListItem>
    )
}

export default ListItem