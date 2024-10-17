import React, { useState } from 'react';

// Sample course data
const courses = [
  { id: 1, name: 'Introduction to Programming', code: 'CS101', branch: 'CSE' },
  { id: 2, name: 'Data Structures and Algorithms', code: 'CS102', branch: 'CSE' },
  { id: 3, name: 'Database Management Systems', code: 'CS201', branch: 'CSE' },
  // Add more courses as needed
];

// Sample student data
const students = [
  { sno: 1, rollNo: '22BCS101', name: 'Aarav Sharma', branch: 'CSE', emailId: 'aarav@example.com' },
  { sno: 2, rollNo: '22BCS102', name: 'Vivaan Singh', branch: 'CSE', emailId: 'vivaan@example.com' },
  { sno: 3, rollNo: '22BCS103', name: 'Anaya Gupta', branch: 'CSE', emailId: 'anaya@example.com' },
  { sno: 4, rollNo: '22BCS104', name: 'Aditya Patel', branch: 'CSE', emailId: 'aditya@example.com' },
  { sno: 5, rollNo: '22BCS105', name: 'Diya Reddy', branch: 'CSE', emailId: 'diya@example.com' },
  { sno: 6, rollNo: '22BCS106', name: 'Kabir Khan', branch: 'CSE', emailId: 'kabir@example.com' },
  { sno: 7, rollNo: '22BCS107', name: 'Saanvi Rao', branch: 'CSE', emailId: 'saanvi@example.com' },
  { sno: 8, rollNo: '22BCS108', name: 'Vihaan Joshi', branch: 'CSE', emailId: 'vihaan@example.com' },
  // Add more students as needed
];

const SubmitMarks = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [marks, setMarks] = useState({});

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  const handleMarkChange = (rollNo, evaluation, value) => {
    setMarks((prev) => ({
      ...prev,
      [rollNo]: {
        ...prev[rollNo],
        [evaluation]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    console.log('Marks submitted:', marks);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Submit Marks</h1>

      <div className="mb-4">
        <label htmlFor="course" className="block text-sm font-medium text-gray-700">Select Course:</label>
        <select
          id="course"
          value={selectedCourse}
          onChange={handleCourseChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">-- Select a Course --</option>
          {courses.map((course) => (
            <option key={course.id} value={course.code}>{course.name}</option>
          ))}
        </select>
      </div>

      {selectedCourse && (
        <form onSubmit={handleSubmit}>
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-C3DCFD text-7848B0">
                <th className="p-2 border-b">S.No</th>
                <th className="p-2 border-b">Roll No</th>
                <th className="p-2 border-b">Name</th>
                <th className="p-2 border-b">Quiz 1</th>
                <th className="p-2 border-b">Mid Sem</th>
                <th className="p-2 border-b">Quiz 2</th>
                <th className="p-2 border-b">End Sem</th>
                <th className="p-2 border-b">Lab</th>
                <th className="p-2 border-b">Project</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.rollNo} className="hover:bg-gray-100">
                  <td className="p-2 border-b">{student.sno}</td>
                  <td className="p-2 border-b">{student.rollNo}</td>
                  <td className="p-2 border-b">{student.name}</td>
                  {['quiz1', 'midsem', 'quiz2', 'endsem', 'lab', 'project'].map((evaluation) => (
                    <td key={evaluation} className="p-2 border-b">
                      <input
                        type="number"
                        value={marks[student.rollNo]?.[evaluation] || ''}
                        onChange={(e) => handleMarkChange(student.rollNo, evaluation, e.target.value)}
                        className="border border-gray-300 rounded-md w-full p-1"
                        placeholder="Enter Marks"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
        </form>
      )}
    </div>
  );
};

export default SubmitMarks;
