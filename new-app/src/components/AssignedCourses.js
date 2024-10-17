// AssignedCourses.js
import React, { useState, useEffect } from 'react';

// Sample data for assigned courses (You can replace this with data from an API or your state management)
const sampleCourses = [
  {
    id: 1,
    courseName: 'Introduction to Programming',
    courseCode: 'CS101',
    programme: 'B.Tech',
    branch: 'Computer Science',
    batch: '2024'
  },
  {
    id: 2,
    courseName: 'Data Structures and Algorithms',
    courseCode: 'CS102',
    programme: 'B.Tech',
    branch: 'Computer Science',
    batch: '2024'
  },
  {
    id: 3,
    courseName: 'Database Management Systems',
    courseCode: 'CS201',
    programme: 'B.Tech',
    branch: 'Computer Science',
    batch: '2023'
  }
];

const AssignedCourses = () => {
  const [courses, setCourses] = useState([]);

  // Simulate fetching data from an API
  useEffect(() => {
    // Replace this with your actual data fetching logic
    setCourses(sampleCourses);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Assigned Courses</h1>
      <table className="min-w-full bg-white rounded-lg overflow-hidden border border-gray-300">
        <thead>
          <tr style={{ backgroundColor: '#C3DCFD' }}>
            <th className="py-4 px-4 text-left text-[#7848B0]">Course Name</th>
            <th className="py-4 px-4 text-left text-[#7848B0]">Course Code</th>
            <th className="py-4 px-4 text-left text-[#7848B0]">Programme</th>
            <th className="py-4 px-4 text-left text-[#7848B0]">Branch</th>
            <th className="py-4 px-4 text-left text-[#7848B0]">Batch</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id} className="border-b border-transparent hover:bg-gray-100 transition-colors duration-300">
              <td className="py-4 px-4">{course.courseName}</td>
              <td className="py-4 px-4">{course.courseCode}</td>
              <td className="py-4 px-4">{course.programme}</td>
              <td className="py-4 px-4">{course.branch}</td>
              <td className="py-4 px-4">{course.batch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignedCourses;
