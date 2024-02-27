import styled from "styled-components";
import { screenSize } from "../../styles/screenSize";

export const ListItem = styled.div`
    background-color: ${(props) => props.theme.cardBg};
    color: ${(props) => props.theme.mainTxt};
    width: 98%;
    margin: 0 auto;
    margin-top: 4px;
    border: 2px solid ${(props) => props.theme.border};
    border-radius: 10px;
    padding: 4px;
    transition: all .3s ease;

    @media (max-width: ${screenSize.phone}) {
        height: 100%;
        width: 86%;
        margin-right: 6px;
    }
`

export const ItemTitle = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 10px;
    cursor: pointer;
    
    h2 {
        font-size: 26px;
        font-weight: bold;
    }

    img {
        height: 16px;
        transition: all .2s ease;
        margin-left: 6px;
    }

    .rotate {
        transform: rotate(-90deg);
    }
`

export const ThumbsList = styled.div`
    padding: 10px 4px 6px 4px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    border-top: 2px solid ${(props) => props.theme.border};

    img {
        cursor: pointer;
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 10px;
        transition: all .2s ease;

        &:hover {
            transform: translateY(-2px);
        }
    }

    @media (max-width: ${screenSize.phone}) {
        flex-wrap: nowrap;
        overflow-x: scroll;
    }
`