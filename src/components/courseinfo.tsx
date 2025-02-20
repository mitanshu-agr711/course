import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { enrollCourse } from '../store/userSlice';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CourseDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state: RootState) => 
    state.courses.courses.find(c => c.id === Number(id))
  );
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src={course.thumbnail}
            alt={course.name}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{course.name}</h1>
          <p className="text-xl text-gray-600 mt-2">Instructor: {course.instructor}</p>
          <div className="mt-4">
            <span className={`px-3 py-1 rounded-full text-sm ${
              course.enrollmentStatus === 'Open' ? 'bg-green-100 text-green-800' :
              course.enrollmentStatus === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {course.enrollmentStatus}
            </span>
          </div>
          <p className="mt-4 text-gray-700">{course.description}</p>
          <button
            onClick={() => dispatch(enrollCourse(course.id))}
            className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            disabled={course.enrollmentStatus !== 'Open'}
          >
            Enroll Now
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Course Details</h2>
          <div className="space-y-3">
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Schedule:</strong> {course.schedule}</p>
            <p><strong>Location:</strong> {course.location}</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Prerequisites</h2>
          <ul className="list-disc list-inside space-y-2">
            {course.prerequisites.map((prereq, index) => (
              <li key={index} className="text-gray-700">{prereq}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Syllabus</h2>
        <div className="space-y-4">
          {course.syllabus.map((week) => (
            <div key={week.week} className="border rounded-lg">
              <button
                className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50"
                onClick={() => setExpandedWeek(expandedWeek === week.week ? null : week.week)}
              >
                <span className="font-medium">Week {week.week}: {week.topic}</span>
                {expandedWeek === week.week ? <ChevronUp /> : <ChevronDown />}
              </button>
              {expandedWeek === week.week && (
                <div className="px-4 py-3 bg-gray-50">
                  <p className="text-gray-700">{week.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;