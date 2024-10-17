// NavBar.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Assigned Courses', path: '/assigned-courses' },
    { label: 'Course Management', path: '/course-management' },
    { label: 'Submit Marks', path: '/submit-marks' },
    { label: 'View Roll List', path: '/combined-assistantship' }
  ];

  return (
    <nav className="bg-transparent mb-4">
      <ul className="flex space-x-4 p-2">
        {navItems.map((item) => (
          <li key={item.path} className="border-b border-gray-300 pb-2">
            <span
              className={`text-black hover:text-gray-600 no-underline cursor-pointer ${
                location.pathname === item.path ? 'font-bold' : ''
              }`}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
