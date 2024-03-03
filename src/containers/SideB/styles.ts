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
    flex-wrap: wrap;
    gap: 10px;
    transition: all .3s ease;
    align-items: center;

    input {
        background-color: ${(props) => props.theme.cardBg};
        color: ${(props) => props.theme.mainTxt};
        width: 300px;
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
`

export const ToggleBtn = styled.div`
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

export const AboutBtn = styled.button`
    background-color: ${(props) => props.theme.mainTxt};
    color: ${(props) => props.theme.cardBg};
    font-size: 20px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
`