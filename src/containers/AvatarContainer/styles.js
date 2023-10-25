import styled from "styled-components";

export const AvatarCanvas = styled.div`
    background-color: #6b6b6b;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
        background-color: transparent;
    }
`

export const CharContainer = styled.div`
    max-width: 350px;
    position: relative;

    @media (max-width: 767px) {
            width: 70%;
        }
`

export const CharAbsoluteParts = styled.img`
    width: 100%;
    position: absolute;
`

export const PlaceholderImg = styled.img`
    width: 100%;
    position: relative;
`