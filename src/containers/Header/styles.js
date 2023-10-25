import styled from "styled-components";

export const Header = styled.header`
    background-color: #fff;
    height: 80px;
    width: 100%;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    z-index: 10;
    position: fixed;

    @media (max-width: 767px) {
        & h1 {
            font-size: 30px;
        }
    }
`

export const HeaderBtn = styled.button`
    background-color: #242424;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 14px 30px;
    font-size: 20px;
    text-transform: uppercase;
    cursor: pointer;

    @media (max-width: 767px) {
        padding: 16px 20px;
        font-size: 16px;
    }
`