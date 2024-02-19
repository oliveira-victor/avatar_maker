import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ContainerB = styled.div`
    overflow-y: scroll;
`

export const TopBar = styled.nav`
    height: fit-content;
    padding: 10px 20px;
    border-bottom: 2px solid ${colors.bodyBg};

    input {
        width: 300px;
        height: 36px;
        border-radius: 16px;
        border: 2px solid ${colors.bodyBg};
        padding: 0 20px;
        font-family: 'Quicksand', sans-serif;
    }
`