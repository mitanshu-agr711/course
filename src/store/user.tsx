import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/courses';

const initialState: User = {
  id: 101,
  name: 'Alice Johnson',
  email: 'alice@example.com',
  enrolledCourses: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    enrollCourse: (state, action: PayloadAction<number>) => {
      if (!state.enrolledCourses.find(c => c.courseId === action.payload)) {
        state.enrolledCourses.push({
          courseId: action.payload,
          progress: 0,
          completed: false,
        });
      }
    },
    updateProgress: (state, action: PayloadAction<{ courseId: number; progress: number }>) => {
      const course = state.enrolledCourses.find(c => c.courseId === action.payload.courseId);
      if (course) {
        course.progress = action.payload.progress;
      }
    },
    markAsCompleted: (state, action: PayloadAction<number>) => {
      const course = state.enrolledCourses.find(c => c.courseId === action.payload);
      if (course) {
        course.completed = true;
        course.progress = 100;
      }
    },
  },
});

export const { enrollCourse, updateProgress, markAsCompleted } = userSlice.actions;
export default userSlice.reducer;