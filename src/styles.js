import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    h1 {
        font-family: NexaBold;
        font-size: 38px;
    }

    body {
        background-color: #D9D9D9;
        font-family: NexaLight;
        font-size: 20px;
    }

    @font-face {
        font-family: NexaBold;
        src: url(./src/fonts/NexaBold.otf);
    }

    @font-face {
        font-family: NexaLight;
        src: url(./src/fonts/NexaLight.otf);
    }
`

export const Container = styled.div`
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
`

/* export const Main = styled.main`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 35% 65%;
` */

export default GlobalStyle