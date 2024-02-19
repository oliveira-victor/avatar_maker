import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ContainerB = styled.div`
    overflow-y: scroll;

    #customScrollbar::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

#customScrollbar::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}

#customScrollbar::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}
`

export const TopBar = styled.nav`
    height: fit-content;
    padding: 10px 20px;
    border-bottom: 2px solid ${colors.bodyBg};

    input {
        width: 300px;
        height: 36px;
        border-radius: 16px;
        border: 2px solid ${colors.bodyBg};
        padding: 0 20px;
        font-family: 'Quicksand', sans-serif;
    }
`