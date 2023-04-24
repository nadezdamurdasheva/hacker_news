import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

type HackerNews = number[];

interface Post {
by: string;
descendants: number;
id: number;
kids: number[] | number;
score: number;
time: number;
title: string;
type: string;
url: string;
}

export const hackerNewsApi = createApi({
    reducerPath: 'hackerNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://hacker-news.firebaseio.com/v0/' }),
    endpoints: (builder) => ({
        getIdsHackerNews: builder.query<HackerNews, void>({
            query: () => `/newstories.json?limitToFirst=5&orderBy="$key"`
        }),
        getPost: builder.query<Post, number>({
            query: (postId) => `/item/${postId}.json`
        }),
    })
});

export const { useGetIdsHackerNewsQuery, useGetPostQuery } = hackerNewsApi;