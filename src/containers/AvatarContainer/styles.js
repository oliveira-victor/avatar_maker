import styled  from "styled-components";

export const AvatarCanvas = styled.div`
    background-color: #6b6b6b;
`

export const CharContainer = styled.div`
    max-width: 350px;
    width: 100%;
    margin: 0 auto;
    position: relative;

    @media (max-width: 767px) {
        width: 70vw;
    }

    & img {
        width: 100%;
        position: absolute;
    }
`