// ViewRollList.js
import React, { useState, useEffect } from 'react';

// Sample data for roll lists based on assigned courses
const sampleRollLists = {
  'CS101': [
    { id: 1, rollNo: '22BCS001', name: 'Aarav Sharma', branch: 'Computer Science', emailId: 'aarav.sharma@example.com' },
    { id: 2, rollNo: '22BCS002', name: 'Vivaan Gupta', branch: 'Computer Science', emailId: 'vivaan.gupta@example.com' },
    { id: 3, rollNo: '22BCS003', name: 'Reyansh Patel', branch: 'Computer Science', emailId: 'reyansh.patel@example.com' },
    { id: 4, rollNo: '22BCS004', name: 'Arjun Mehta', branch: 'Computer Science', emailId: 'arjun.mehta@example.com' },
    { id: 5, rollNo: '22BCS005', name: 'Krishna Reddy', branch: 'Computer Science', emailId: 'krishna.reddy@example.com' },
    { id: 6, rollNo: '22BCS006', name: 'Aanya Desai', branch: 'Computer Science', emailId: 'aanya.desai@example.com' },
    { id: 7, rollNo: '22BCS007', name: 'Ishaan Nair', branch: 'Computer Science', emailId: 'ishaan.nair@example.com' },
    { id: 8, rollNo: '22BCS008', name: 'Tanvi Singh', branch: 'Computer Science', emailId: 'tanvi.singh@example.com' },
    { id: 9, rollNo: '22BCS009', name: 'Kabir Khanna', branch: 'Computer Science', emailId: 'kabir.khanna@example.com' },
    { id: 10, rollNo: '22BCS010', name: 'Diya Kapoor', branch: 'Computer Science', emailId: 'diya.kapoor@example.com' },
    { id: 11, rollNo: '22BCS011', name: 'Anaya Yadav', branch: 'Computer Science', emailId: 'anaya.yadav@example.com' },
    { id: 12, rollNo: '22BCS012', name: 'Rohan Choudhary', branch: 'Computer Science', emailId: 'rohan.choudhary@example.com' },
  ],
  'CS102': [
    { id: 1, rollNo: '22BCS013', name: 'Saanvi Joshi', branch: 'Computer Science', emailId: 'saanvi.joshi@example.com' },
    { id: 2, rollNo: '22BCS014', name: 'Riya Sethi', branch: 'Computer Science', emailId: 'riya.sethi@example.com' },
    { id: 3, rollNo: '22BCS015', name: 'Yash Bansal', branch: 'Computer Science', emailId: 'yash.bansal@example.com' },
    { id: 4, rollNo: '22BCS016', name: 'Anika Gupta', branch: 'Computer Science', emailId: 'anika.gupta@example.com' },
    { id: 5, rollNo: '22BCS017', name: 'Vikram Rathi', branch: 'Computer Science', emailId: 'vikram.rathi@example.com' },
    { id: 6, rollNo: '22BCS018', name: 'Meera Malhotra', branch: 'Computer Science', emailId: 'meera.malhotra@example.com' },
    { id: 7, rollNo: '22BCS019', name: 'Raghav Joshi', branch: 'Computer Science', emailId: 'raghav.joshi@example.com' },
    { id: 8, rollNo: '22BCS020', name: 'Gaurav Mehta', branch: 'Computer Science', emailId: 'gaurav.mehta@example.com' },
  ],
  'CS201': [
    { id: 1, rollNo: '22BCS021', name: 'Harsh Singh', branch: 'Computer Science', emailId: 'harsh.singh@example.com' },
    { id: 2, rollNo: '22BCS022', name: 'Neha Sharma', branch: 'Computer Science', emailId: 'neha.sharma@example.com' },
    { id: 3, rollNo: '22BCS023', name: 'Aditya Raghav', branch: 'Computer Science', emailId: 'aditya.raghav@example.com' },
    { id: 4, rollNo: '22BCS024', name: 'Pooja Agarwal', branch: 'Computer Science', emailId: 'pooja.agarwal@example.com' },
    { id: 5, rollNo: '22BCS025', name: 'Siddharth Bhatia', branch: 'Computer Science', emailId: 'siddharth.bhatia@example.com' },
    { id: 6, rollNo: '22BCS026', name: 'Nisha Verma', branch: 'Computer Science', emailId: 'nisha.verma@example.com' },
    { id: 7, rollNo: '22BCS027', name: 'Ankit Reddy', branch: 'Computer Science', emailId: 'ankit.reddy@example.com' },
    { id: 8, rollNo: '22BCS028', name: 'Kavya Dutta', branch: 'Computer Science', emailId: 'kavya.dutta@example.com' },
    { id: 9, rollNo: '22BCS029', name: 'Pranav Soni', branch: 'Computer Science', emailId: 'pranav.soni@example.com' },
    { id: 10, rollNo: '22BCS030', name: 'Sonam Agarwal', branch: 'Computer Science', emailId: 'sonam.agarwal@example.com' },
    { id: 11, rollNo: '22BCS031', name: 'Devansh Iyer', branch: 'Computer Science', emailId: 'devansh.iyer@example.com' },
    { id: 12, rollNo: '22BCS032', name: 'Priti Sen', branch: 'Computer Science', emailId: 'priti.sen@example.com' },
  ],
};

const ViewRollList = () => {
  const [selectedCourse, setSelectedCourse] = useState('CS101');
  const [rollList, setRollList] = useState([]);

  // Function to handle course selection
  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  // Fetch roll list based on selected course
  useEffect(() => {
    setRollList(sampleRollLists[selectedCourse]);
  }, [selectedCourse]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">View Roll List</h1>
      
      {/* Dropdown for selecting courses */}
      <label className="block mb-2 font-semibold">Select Course:</label>
      <select
        value={selectedCourse}
        onChange={handleCourseChange}
        className="mb-4 border border-gray-300 rounded p-2"
      >
        <option value="CS101">Introduction to Programming (CS101)</option>
        <option value="CS102">Data Structures and Algorithms (CS102)</option>
        <option value="CS201">Database Management Systems (CS201)</option>
      </select>

      <div className="overflow-y-auto max-h-80 border border-gray-300 rounded-lg">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-[#C3DCFD] sticky top-0 z-10">
              <th className="py-2 px-4 text-left text-[#7848B0]">S.No</th>
              <th className="py-2 px-4 text-left text-[#7848B0]">Roll No</th>
              <th className="py-2 px-4 text-left text-[#7848B0]">Name</th>
              <th className="py-2 px-4 text-left text-[#7848B0]">Branch</th>
              <th className="py-2 px-4 text-left text-[#7848B0]">Email ID</th>
            </tr>
          </thead>
          <tbody>
            {rollList.map((student) => (
              <tr key={student.id} className="border-b border-transparent hover:bg-gray-100 transition-colors duration-300">
                <td className="py-4 px-4">{student.id}</td>
                <td className="py-4 px-4">{student.rollNo}</td>
                <td className="py-4 px-4">{student.name}</td>
                <td className="py-4 px-4">{student.branch}</td>
                <td className="py-4 px-4">{student.emailId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewRollList;
