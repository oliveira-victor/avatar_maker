import styled from "styled-components";
import { screenSize } from "../../styles/screenSize";

export const ContainerA = styled.div`
    background-color: ${(props) => props.theme.avatarBg};
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${screenSize.phone}) {
        flex-grow: 2;
    }
`

export const AvatarContainer = styled.div`
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
    background-size: cover;

    .avatarName {
        color: ${(props) => props.theme.mainTxt};
        text-align: center;
        font-size: 50px;
        width: 100%;
        height: 60px;
        position: absolute;
        bottom: 0;
        margin-bottom: 6px;
        font-family: "Tangerine", cursive;
        font-weight: bold;

        @media (max-width: 400px) {
            font-size: 40px;
            margin-bottom: 0;
            transform: translateY(10px);
        }
    }

    .frame {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 10px;
    }
`

export const ImagesContainer = styled.div`
    width: 100%;
    text-align: center;
    position: relative;

    @media (max-height: 700px) {
        width: 80%;
    }

    img {
        width: 100%;
    }

    .absoluteIgm {
        position: absolute;
        top: 0;
        left: 0;
    }
`