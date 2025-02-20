
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import CourseList from './components/courseList';
import CourseDetails from './components/courseinfo';
import Dashboard from './components/studentdash';
import { GraduationCap } from 'lucide-react';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <Link to="/" className="flex items-center">
                    <GraduationCap className="h-8 w-8 text-indigo-600" />
                    <span className="ml-2 text-xl font-bold text-gray-800">CourseHub</span>
                  </Link>
                </div>
                <div className="flex items-center space-x-4">
                  <Link to="/" className="text-gray-700 hover:text-indigo-600">Courses</Link>
                  <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600">Dashboard</Link>
                </div>
              </div>
            </div>
          </nav>

          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<CourseList />} />
              <Route path="/course/:id" element={<CourseDetails />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;