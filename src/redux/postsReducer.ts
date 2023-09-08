import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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

const initialState: Array<Post> = [];
export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.push(action.payload);
    },
  },
});
export const { addPost } = postSlice.actions;
export const userSelector = (state: RootState) => state.postsReducer;
export default postSlice.reducer;
