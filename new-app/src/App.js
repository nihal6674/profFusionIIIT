// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import AssignedCourses from './components/AssignedCourses';
import CourseManagement from './components/CourseManagement';
import SubmitMarks from './components/SubmitMarks';
import ViewRollList from './components/ViewRollList';

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* Render Sidebar */}
        <Sidebar />
        
        {/* Main content area */}
        <div className="flex-1 p-4">
          {/* Render NavBar */}
          <NavBar />
          
          {/* Define Routes */}
          <Routes>
            <Route path="/assigned-courses" element={<AssignedCourses />} />
            <Route path="/course-management" element={<CourseManagement />} />
            <Route path="/submit-marks" element={<SubmitMarks />} />
            <Route path="/combined-assistantship" element={<ViewRollList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
