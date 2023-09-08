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

type ApiResponsewithId = {
  success: boolean;
  total_blogs: number;
  message: string;
  offset: number;
  limit: number;
  blog: Post;
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
    getPostById: builder.query<ApiResponsewithId, number>({
      query: id => `/blog-posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = postsApi;
