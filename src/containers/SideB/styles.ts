import styled from "styled-components";
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
    background-color: ${(props) => props.theme.cardBg};
    display: flex;
    gap: 10px;
    transition: all .3s ease;

    input {
        background-color: ${(props) => props.theme.cardBg};
        color: ${(props) => props.theme.mainTxt};
        max-width: 300px;
        width: 100%;
        height: 36px;
        border-radius: 16px;
        border: 2px solid ${(props) => props.theme.border};
        padding: 0 20px;
        font-family: 'Quicksand', sans-serif;

        @media (max-width: ${screenSize.phone}) {
            width: 50%;
        }
    }

    div {
        height: 36px;
        border-radius: 16px;
        border: 2px solid ${(props) => props.theme.border};
        padding: 6px;
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    }

    img {
        height: 14px;
        opacity: 0.4;
        transition: all .3s ease;
    }

    .activateIcon {
        opacity: 1;
        height: 22px;
        transition: all .3s ease;
    }
`