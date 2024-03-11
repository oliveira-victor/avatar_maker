import styled from "styled-components";

export const Header = styled.header`
    background-color: ${(props) => props.theme.cardBg};
    color: ${(props) => props.theme.mainTxt};
    height: 80px;
    display: flex;
    gap: 30px;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    position: absolute;
    width: 100%;
    transition: all .3s ease;
    z-index: 3;
`

export const SaveBtn = styled.button`
    background-color: ${(props) => props.theme.saveBtn};
    color: ${(props) => props.theme.cardBg};
    font-size: 20px;
    text-transform: uppercase;
    padding: 14px 30px;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    gap: 10px;

    img {
        height: 18px;
    }
`