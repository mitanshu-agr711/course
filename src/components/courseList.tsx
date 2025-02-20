
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { RootState } from '../store/store';
import { setSearchQuery } from '../store/course';

const CourseList = () => {
  const dispatch = useDispatch();
  const { courses, searchQuery } = useSelector((state: RootState) => state.courses);

  const filteredCourses = courses.filter(course => 
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses or instructors..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <Link
            key={course.id}
            to={`/course/${course.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={course.thumbnail}
              alt={course.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{course.name}</h3>
              <p className="text-gray-600">{course.instructor}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className={`px-2 py-1 rounded text-sm ${
                  course.enrollmentStatus === 'Open' ? 'bg-green-100 text-green-800' :
                  course.enrollmentStatus === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {course.enrollmentStatus}
                </span>
                <span className="text-gray-600">❤️ {course.likes}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CourseList;