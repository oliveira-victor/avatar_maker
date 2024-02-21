import styled from "styled-components";
import { colors } from "../../styles/colors";
import { screenSize } from "../../styles/screenSize";

export const ContainerA = styled.div`
    background-color: ${colors.avatarBg};
    display: flex;
    justify-content: center;
    align-items: center;
    /* min-height: 70%; */

    @media (max-width: ${screenSize.phone}) {
        /* min-height: auto; */
        flex-grow: 2;
    }
`

export const AvatarContainer = styled.div`
    /* background-color: ${colors.bg}; */
    border-radius: 20px;
    max-width: 450px;
    width: 100%;
    max-height: 600px;
    height: 100%;
    margin: 0 10px;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    .avatarName {
        text-align: center;
        font-size: 50px;
        width: 100%;
        height: 60px;
        position: absolute;
        bottom: 0;
        font-family: "Tangerine", cursive;
        font-weight: bold;

        @media (max-width: 400px) {
            font-size: 40px;
        }
    }
`

export const ImagesContainer = styled.div`
    width: 80%;
    text-align: center;
    position: relative;

    img {
        width: 100%;
    }

    .absoluteIgm {
        position: absolute;
        top: 0;
        left: 0;
    }
`