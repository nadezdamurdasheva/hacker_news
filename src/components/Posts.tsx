import React from 'react';
import Post from './Post';
import { WrapperPosts } from '../styles/PostsStyle';

type HackerNews = number[]

interface PostsProps {
    data: HackerNews;
}

function Posts({data} : PostsProps) {
    return (
        <>
            <WrapperPosts>
            <h1>Hacker News</h1>
            {data.map(postId => (
                <Post key={postId} postId={postId} />
            ))}
            </WrapperPosts>
        </>
    )
}

export default Posts;