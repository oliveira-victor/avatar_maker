import styled from "styled-components";
import { colors } from "../../styles/colors";
import { screenSize } from "../../styles/screenSize";

export const Footer = styled.footer`
    background-color: ${colors.darkBg};
    color: #fff;
    padding: 40px;
`

export const FooterContent = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    
    @media (max-width: ${screenSize.phone}) {
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;
        gap: 40px;
    }

    a {
        text-decoration: none;
        color: #fff;

        &:hover {
            text-decoration: underline;
        }
    }

    h2 {
        font-size: 30px;
        font-family: 'Ubuntu', sans-serif;
    }

    span {
        white-space: nowrap;
    }

    .aboutLink {
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`

export const footerLogos = styled.div`
    display: flex;
    gap: 20px;

    img {
        height: 40px;
        transition: all .2s ease;

        &:hover {
            transform: translateY(-4px);
        }
    }
`