import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        line-height: 1;
        font-size: 16px;
    }
    ul {
        margin: 0;
        padding: 0;
    }
`

export const WrapperPosts = styled.main`
    padding: 20px 15px;
    max-width: 1140px;
    margin: 0 auto;

    ul {
        list-style-type: none;
    }
`
