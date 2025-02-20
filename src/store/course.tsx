import { createSlice,  PayloadAction } from '@reduxjs/toolkit';
import initialCourses from '../utils/dummyapi';
// import { Course } from '../types/courses';

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: initialCourses,
    searchQuery: '',
  },
  reducers: {
    updateLikes: (state, action: PayloadAction<{ courseId: number; likes: number }>) => {
      const course = state.courses.find(c => c.id === action.payload.courseId);
      if (course) {
        course.likes = action.payload.likes;
      }
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { updateLikes, setSearchQuery } = coursesSlice.actions;
export default coursesSlice.reducer;