import styled from "styled-components";

export const LanguagesContainer = styled.div`
    span {
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }

    .selectedLang {
        font-weight: bold;
        text-decoration: underline;
    }
`