import styled from "styled-components";
import { colors } from "../../styles/colors";
import { screenSize } from "../../styles/screenSize";

export const ContainerA = styled.div`
    background-color: ${colors.avatarBg};
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70%;

    @media (max-width: ${screenSize.phone}) {
        min-height: auto;
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

    .avatarName {
        text-align: center;
        font-size: 30px;
        height: 40px;
    }
`