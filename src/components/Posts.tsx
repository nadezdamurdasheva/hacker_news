import React from 'react';
import Post from './Post';
import { WrapperPosts } from '../styles/PostsStyle';
import LoadingPage from './LoadingPage';
import { useGetIdsHackerNewsQuery } from '../services/hackerNews';
import ErrorPage from './ErrorPage';

function Posts() {
    const { data , error, isLoading } = useGetIdsHackerNewsQuery();
  if (isLoading) {
    return <LoadingPage />
  } 
  if (error) {
    if ('status' in error) {
      const errorMsg = error.status;

      return (
        <ErrorPage errorMsg={errorMsg}/>
      )
    }
    else {
        return <ErrorPage errorMsg={error.message}/>
    }
  } 
  if(data) {
    return (
        <WrapperPosts>
            <h1>Hacker News</h1>
            <ul>
                {data.map(postId => (
                    <li key={postId}>
                        <Post postId={postId} />
                    </li>
                ))}
            </ul>
        </WrapperPosts>
      )
  }
  return null;
}

export default Posts;