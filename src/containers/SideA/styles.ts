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
    background-color: red;
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

        border: 2px solid green;

        @media (max-width: 400px) {
            font-size: 40px;
        }
    }
`

export const ImagesContainer = styled.div`
    border: 2px solid blue;
    width: 80%;
    text-align: center;

    img {
        background-color: green;
        width: 100%;
    }
`