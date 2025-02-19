
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { enrollCourse } from '../redux/course';
import { getCourseById } from '../utils/dummyapi';

interface Course {
  id: number;
  name: string;
  instructor: string;
  description: string;
  thumbnail: string;
  duration: string;
  schedule: string;
  location: string;
  enrollmentStatus: string;
  prerequisites: string[];
  syllabus: Array<{
    week: number;
    topic: string;
    content: string;
  }>;
}

const CourseDetails: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [course, setCourse] = useState<Course | null>(null);
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      if (id) {
        const courseData = await getCourseById(Number(id));
        if (courseData) setCourse(courseData);
      }
    };
    fetchCourse();
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{course.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <img src={course.thumbnail} alt={course.name} className="w-full rounded-lg" />
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Course Information</h2>
          <div className="space-y-2">
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Schedule:</strong> {course.schedule}</p>
            <p><strong>Location:</strong> {course.location}</p>
            <p><strong>Status:</strong> {course.enrollmentStatus}</p>
          </div>
          
          <button
            onClick={() => dispatch(enrollCourse(course))}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Enroll Now
          </button>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700">{course.description}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Prerequisites</h2>
        <ul className="list-disc list-inside">
          {course.prerequisites.map((prereq, index) => (
            <li key={index} className="text-gray-700">{prereq}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Syllabus</h2>
        {course.syllabus.map((item) => (
          <div key={item.week} className="border-b last:border-b-0">
            <button
              className="w-full text-left p-4 flex justify-between items-center"
              onClick={() => setExpandedWeek(expandedWeek === item.week ? null : item.week)}
            >
              <span>Week {item.week}: {item.topic}</span>
              <span>{expandedWeek === item.week ? '−' : '+'}</span>
            </button>
            {expandedWeek === item.week && (
              <div className="p-4 bg-gray-50">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
