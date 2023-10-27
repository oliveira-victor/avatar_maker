import { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';

import * as S from './styles'

import emtpyImg from '../../assets/placeholderImg.png'

const AvatarContainer = ({ charBody, charTop, charBottom, charSkin, charEyes, charMouth, refHandler }) => {

    const renderChar = (charPart) => {
        return <S.CharAbsoluteParts src={charPart} />
    }

    /* const ref = useRef(null)

    const saveImage = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'My-Avatar.png'
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [ref]) */

    return (
        <S.AvatarCanvas>
            <S.CharContainer ref={refHandler}>
                {renderChar(charSkin)}
                {renderChar(charBody)}
                {renderChar(charEyes)}
                {renderChar(charMouth)}
                {renderChar(charBottom)}
                {renderChar(charTop)}
                <S.PlaceholderImg src={emtpyImg} />
            </S.CharContainer>
            {/* <button onClick={saveImage}>Download</button> */}
        </S.AvatarCanvas>
    )
}

export default AvatarContainer