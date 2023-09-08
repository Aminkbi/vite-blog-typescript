import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsReducer';
import { postsApi } from './Api/postsApiService';
export const store = configureStore({
  reducer: {
    postsReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(postsApi.middleware);
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
