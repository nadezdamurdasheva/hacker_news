import styled from "styled-components";
import { WrapperPosts } from "./PostsStyle";

export const WrapperErrorLoading = styled(WrapperPosts)`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-size: 80px;
        color: #faad14;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    .loader {
        border: 16px solid #f3f3f3;  
        border-top: 16px solid #faad14; 
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
    }
    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`