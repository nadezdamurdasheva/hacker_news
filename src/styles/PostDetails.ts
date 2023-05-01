import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapperPostDetails = styled.section`
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:first-of-type {
        border-top: 0;
    }

    &:last-of-type {
        padding-bottom: 0;
        margin-bottom: 0;
    }
`

export const PostDetailsTitle = styled.h1`
    font-size: 25px;
    text-decoration: none;
    color: #2e2e2c;
    background-color: #fad414;
    margin-bottom: 30px;
`

export const StyledLinkBack = styled(Link)`
    margin-top: 30px;
    padding: 7px;
    text-decoration: none;
    transition: all .3s ease-out;
    border: 2px solid #fad414;
    border-radius: 4px;
    color: #2e2e2c;

    &:hover {
        background-color: #fad414;
        transition: none;
        cursor: pointer;
    }
`;
