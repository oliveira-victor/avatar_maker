import styled, { createGlobalStyle } from 'styled-components'
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

    @keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
}

    .float {
        animation: float 6s ease-in-out infinite;
    }

    @media (min-width: 768px) {
        #customScrollbar::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: ${(props) => props.theme.scrollBg};
    }

        #customScrollbar::-webkit-scrollbar {
            width: 12px;
            background-color: ${(props) => props.theme.scrollBg};
        }

        #customScrollbar::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
            background-color: ${(props) => props.theme.scroll};
        }
    }
`

export const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    background-color: ${(props) => props.theme.bodyBg};
    min-height: 100vh;
`

export const MainContainer = styled.main`
    background-color: ${(props) => props.theme.cardBg};
    max-width: 1440px;
    margin: 0 auto;
    padding-top: 80px;
    display: grid;
    grid-template-columns: 500px auto;
    height: 100vh;

    @media (max-width: ${screenSize.phone}) {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        height: 100%;
    }
`

export default GlobalStyle