import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store/store';
import { markAsCompleted, updateProgress } from '../store/userSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const courses = useSelector((state: RootState) => state.courses.courses);

  const enrolledCourseDetails = user.enrolledCourses.map(enrollment => {
    const course = courses.find(c => c.id === enrollment.courseId);
    return course ? { ...course, ...enrollment } : null;
  }).filter(Boolean);

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Welcome, {user.name}!</h2>
        <p className="text-gray-600">{user.email}</p>
      </div>

      <h3 className="text-xl font-semibold mb-4">Your Enrolled Courses</h3>
      <div className="grid grid-cols-1 gap-6">
        {enrolledCourseDetails.map(course => course && (
          <div key={course.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start space-x-4">
              <img
                src={course.thumbnail}
                alt={course.name}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div className="flex-1">
                <Link to={`/course/${course.id}`} className="text-xl font-semibold text-indigo-600 hover:text-indigo-800">
                  {course.name}
                </Link>
                <p className="text-gray-600">{course.instructor}</p>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Progress: {course.progress}%</span>
                    {!course.completed && (
                      <button
                        onClick={() => dispatch(markAsCompleted(course.id))}
                        className="text-sm text-indigo-600 hover:text-indigo-800"
                      >
                        Mark as Completed
                      </button>
                    )}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
                {!course.completed && (
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={course.progress}
                    onChange={(e) => dispatch(updateProgress({
                      courseId: course.id,
                      progress: parseInt(e.target.value)
                    }))}
                    className="mt-4 w-full"
                  />
                )}
                {course.completed && (
                  <span className="inline-block mt-4 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Completed
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;