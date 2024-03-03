import styled from "styled-components";

export const Modal = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 6;
    display: flex;
    justify-content: center;
    align-items: center;

    .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
    }
`

export const ModalContaienr = styled.div`
    background-color: ${(props) => props.theme.cardBg};
    color: ${(props) => props.theme.mainTxt};
    position: relative;
    max-width: 1024px;
    width: 90%;
    border-radius: 20px;
    border: 2px solid ${(props) => props.theme.border};
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    z-index: 2;

    a {
        color: ${(props) => props.theme.mainTxt};
    }

    .modalTitle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

            .closeBtn {
            height: 20px;
            cursor: pointer;
        }
    }
`

export const DonateContainer = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;

    button {
        background-color: ${(props) => props.theme.mainTxt};
        color: ${(props) => props.theme.cardBg};
        border: none;
        cursor: pointer;
        padding: 10px 20px;
        border-radius: 10px;
    }
`