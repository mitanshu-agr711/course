
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markCourseCompleted } from '../redux/course';
import { RootState } from '../redux';

const StudentDashboard: React.FC = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state: RootState) => state.courses.enrolledCourses);

  interface Course {
    id: string | number;
    thumbnail: string;
    name: string;
    instructor: string;
    schedule: string;
    enrollmentStatus: 'Open' | 'Closed';
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Enrolled Courses</h1>
      
      <div className="grid grid-cols-1 gap-4">

        {enrolledCourses.map((course: Course) => (
                            <div key={course.id} className="border rounded-lg p-4 flex items-center">
                                <img
                                    src={course.thumbnail}
                                    alt={course.name}
                                    className="w-24 h-24 object-cover rounded-lg mr-4"
                                />
                                
                                <div className="flex-grow">
                                    <h3 className="text-xl font-semibold">{course.name}</h3>
                                    <p className="text-gray-600">Instructor: {course.instructor}</p>
                                    <p className="text-sm text-gray-500">Schedule: {course.schedule}</p>
                                </div>

                                <button
                                    onClick={() => dispatch(markCourseCompleted(course.id))}
                                    className={`px-4 py-2 rounded ${
                                        course.enrollmentStatus === 'Closed'
                                            ? 'bg-gray-200 text-gray-700'
                                            : 'bg-green-600 text-white hover:bg-green-700'
                                    }`}
                                    disabled={course.enrollmentStatus === 'Closed'}
                                >
                                    {course.enrollmentStatus === 'Closed' ? 'Completed' : 'Mark as Complete'}
                                </button>
                            </div>
                        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
