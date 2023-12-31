import styled from "styled-components";

export const Main = styled.main`
    max-width: 1400px;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    padding-top: 80px;
    display: grid;
    grid-template-columns: 35% 65%;

    @media (max-width: 767px) {
        display: block;
        min-height: 80vh;
        height: fit-content;
    }
`