import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapperPost = styled.section`
    border-top: 1px solid #ccc;
    padding-top: 20px;
    margin-bottom: 20px;

    &:first-of-type {
        border-top: 0;
    }

    &:last-of-type {
        padding-bottom: 0;
        margin-bottom: 0;
    }
`

export const PostTitle = styled.h2`
    font-size: 18px;
    text-decoration: none;
`

export const PostData = styled.div`
    font-style: italic;
    > span {
        margin-right: 10px;
    }
`

export const PostDataTitle = styled.span`
    font-weight: bold;
    color: ${props => props.color || "#2e2e2c"};
`

export const StyledLink = styled(Link)`
    color: #2e2e2c;
    text-decoration: none;
    background-color: #fad414;
    transition: all .3s ease-out;

    &:hover {
        background-color: #faad14;
        transition: none;
        cursor: pointer;
    }
`;

