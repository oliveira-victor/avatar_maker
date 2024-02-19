import styled, { createGlobalStyle } from 'styled-components'
import { colors } from './colors'
import { screenSize } from './screenSize'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Quicksand', sans-serif;
    }

    h1{
        font-family: 'Ubuntu', sans-serif;
    }

    @media (min-width: 768px) {
        #customScrollbar::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #F5F5F5;
    }

        #customScrollbar::-webkit-scrollbar {
            width: 12px;
            background-color: #F5F5F5;
        }

        #customScrollbar::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
            background-color: #555;
        }
    }
`

export const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    background-color: ${colors.bodyBg};
    min-height: 100vh;
`

export const MainContainer = styled.main`
    background-color: ${colors.bg};
    max-width: 1440px;
    margin: 0 auto;
    padding-top: 80px;
    display: grid;
    grid-template-columns: 500px auto;
    height: 100vh;

    @media (max-width: ${screenSize.phone}) {
        display: flex;
        flex-direction: column;
    }
`

export default GlobalStyle