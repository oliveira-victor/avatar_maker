import styled from "styled-components";

export const ItemsContainer = styled.div`
    padding: 10px;
`

export const Card = styled.div`
    margin-top: 14px;
    background-color: #fff;
    padding: 16px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
`

export const Items = styled.div`
    margin-top: 10px;
    padding-top: 10px;
    border-top: 2px solid #c9c9c9;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    & img {
        height: 60px;
        border-radius: 6px;
        cursor: pointer;
        transition: all .2s ease;

        &:hover {
            transform: scale(1.05);
            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        }
    }
`