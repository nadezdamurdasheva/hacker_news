import React from 'react';
import { useGetPostQuery } from '../services/hackerNews';
import { useParams } from 'react-router-dom';
import { PostData, PostDataTitle  } from '../styles/PostStyle';
import {WrapperPostDetails, PostDetailsTitle, StyledLinkBack} from '../styles/PostDetails';

type PostParams = {
    id: string
}

function PostDetails() {
    const {id} = useParams<PostParams>();
    const { data, error, isLoading } = useGetPostQuery(Number(id));
    const getDate = (ms: number): string => {
        const date = new Date(ms);
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0'+(date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();
        return day + '.' + month + '.' + year;
    }

    return (
        <>
        
            {isLoading ? (
                <>Loading...</>
            )
            : error ? (
                <div>Server error</div>
            ) : data ? (
                <WrapperPostDetails>
                    <PostDetailsTitle>{data.title}</PostDetailsTitle>
                    <PostData>
                        <span className='postdata'>
                        <PostDataTitle>By: </PostDataTitle>{data.by}
                        </span>
                        <span>
                        <PostDataTitle>Rating: </PostDataTitle>{data.score}
                        </span>
                        <span>
                        <PostDataTitle>Date: </PostDataTitle>{getDate(data.time)} 
                        </span>
                    </PostData>
                    <StyledLinkBack to='/hacker_news'>Back to main page</StyledLinkBack>
                </WrapperPostDetails>
            )
                : null} 
        </>
    )

}

export default PostDetails;