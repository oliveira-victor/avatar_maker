import styled, { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

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
    grid-template-columns: 1fr 2fr;
    height: 100vh;
`

export default GlobalStyle