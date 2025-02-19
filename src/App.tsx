

import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import store from './redux/course'
import CourseList from './components/CourseList'
import CourseDetails from './components/CourseDetails'
import StudentDashboard from './components/StudentDashboard'

import './App.css'

function App() {
 

  return (
    <>
       <Provider store={store}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100">
          <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <Link to="/" className="flex-shrink-0 flex items-center">
                    <span className="text-xl font-bold">Course Portal</span>
                  </Link>
                </div>
                <div className="flex items-center">
                  <Link 
                    to="/dashboard" 
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
                  >
                    Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<CourseList />} />
              <Route path="/course/:id" element={<CourseDetails />} />
              <Route path="/dashboard" element={<StudentDashboard />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
