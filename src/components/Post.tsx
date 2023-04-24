import React from 'react';
import { useGetPostQuery } from '../services/hackerNews';
import { PostData, PostDataTitle, PostTitle, WrapperPost } from '../styles/PostStyle';

interface PostProps {
    postId: number;
}

function Post({ postId }: PostProps) {
    const { data, error } = useGetPostQuery(postId);
    const getDate = (ms: number): string => {
        const date = new Date(ms);
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0'+(date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();
        return day + '.' + month + '.' + year;
    }

    return (
        <>
            {error ? (
                <div>Server error</div>
            ) : data ? (
                <WrapperPost>
                    <PostTitle>
                        <a href={data.url}>
                            {data.title}
                        </a>
                    </PostTitle>
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
                </WrapperPost>
            )
                : null} 
        </>
    )

}

export default Post;