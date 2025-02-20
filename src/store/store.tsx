import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './course';
import userReducer from './user';

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;