import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ContainerA = styled.div`
    background-color: ${colors.avatarBg};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AvatarContainer = styled.div`
    background-color: red;
    max-width: 400px;
    width: 100%;
    max-height: 500px;
    height: 100%;

    .avatarName {
        background-color: blue;
        text-align: center;
        font-size: 30px;
    }
`