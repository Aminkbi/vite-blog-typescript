import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../postsReducer';

type ApiResponse = {
  success: boolean;
  total_blogs: number;
  message: string;
  offset: number;
  limit: number;
  blogs: Post[];
};

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.slingacademy.com/v1/sample-data',
  }),
  endpoints: builder => ({
    getPosts: builder.query<ApiResponse, void>({
      query: () => `/blog-posts?limit=50`,
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
