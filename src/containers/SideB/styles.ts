import styled from "styled-components";
import { colors } from "../../styles/colors";
import { screenSize } from "../../styles/screenSize";

export const ContainerB = styled.div`
    overflow-y: scroll;

    @media (max-width: ${screenSize.phone}) {
        overflow-y: hidden;

        ul {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: scroll;
        }
    }
`

export const TopBar = styled.nav`
    height: fit-content;
    padding: 10px 20px;
    border-bottom: 2px solid ${colors.bodyBg};

    input {
        max-width: 300px;
        width: 100%;
        height: 36px;
        border-radius: 16px;
        border: 2px solid ${colors.bodyBg};
        padding: 0 20px;
        font-family: 'Quicksand', sans-serif;

        @media (max-width: ${screenSize.phone}) {
            width: 50%;
        }
    }
`