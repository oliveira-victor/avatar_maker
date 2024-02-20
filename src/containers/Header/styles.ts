import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Header = styled.header`
    background-color: ${colors.bg};
    height: 80px;
    display: flex;
    gap: 30px;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    position: absolute;
    width: 100%;
`

export const SaveBtn = styled.button`
    background-color: ${colors.darkBg};
    color: #fff;
    font-size: 20px;
    padding: 14px 30px;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    gap: 10px;

    img {
        height: 18px;
    }
`