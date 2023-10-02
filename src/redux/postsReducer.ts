import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export type Post = {
  description: string;
  id: number;
  content_html: string;
  category: string;
  updated_at: Date;
  title: string;
  content_text: string;
  user_id: number;
  created_at: Date;
  photo_url: string;
};

type initialState = {
  posts: Array<Post>;
};

export const postSlice = createSlice({
  name: 'posts',
  initialState: {} as initialState,
  reducers: {
    addPostsFromApi: (state, action) => {
      state.posts = action.payload;
    },
  },
});
export const { addPostsFromApi } = postSlice.actions;
export const userSelector = (state: RootState) => state.postsReducer;
export default postSlice.reducer;
