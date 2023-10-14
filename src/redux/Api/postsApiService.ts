import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../postsReducer';

interface BaseResponse {
  success: boolean;
  total_blogs: number;
  message: string;
  offset: number;
  limit: number;
}

type ApiResponse = BaseResponse & {
  blogs: Post[];
};

type ApiResponsewithId = BaseResponse & {
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
