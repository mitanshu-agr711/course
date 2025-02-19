import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getCourses, getCourseById } from '../utils/dummyapi';
import { Course } from '../types';

interface CourseState {
  courses: Course[];
  enrolledCourses: Course[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
}

const initialState: CourseState = {
  courses: [],
  enrolledCourses: [],
  loading: false,
  error: null,
  searchQuery: '',
};

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const courses = await getCourses();
  return courses;
});

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    enrollCourse: (state, action: PayloadAction<Course>) => {
    if (!state.enrolledCourses.some(course => course.id === action.payload.id)) {
      state.enrolledCourses.push(action.payload);
    }
    },
    markCourseCompleted: (state, action: PayloadAction<number>) => {
      const course = state.enrolledCourses.find(c => c.id === action.payload);
      if (course) {
        course.enrollmentStatus = 'Closed';
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch courses';
      });
  },
});

export const { setSearchQuery, enrollCourse, markCourseCompleted } = courseSlice.actions;
export default courseSlice.reducer;