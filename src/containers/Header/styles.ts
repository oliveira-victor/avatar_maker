import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Header = styled.header`
    background-color: ${colors.bg};
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`

export const SaveBtn = styled.button`
    background-color: ${colors.darkBg};
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    padding: 14px 30px;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
`