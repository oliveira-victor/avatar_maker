import styled from "styled-components";

export const Footer = styled.section`
    background-color: #242424;
    color: #fff;
    padding: 30px;
    font-size: 16px;
    line-height: 1.4;
`

export const FooterContainer = styled.div`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
        text-align: center;
        font-size: 14px;
    }
`

export const FooterIcons = styled.div`
    & img {
        width: 30px;
        margin-left: 20px;
        transition: all .3s ease;

        &:hover {
            transform: translateY(-4px);
        }
    }
`