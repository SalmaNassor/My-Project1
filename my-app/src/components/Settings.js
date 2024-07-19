import React from 'react';
import './Settings.css';

const data = [
  {
    studentName: 'Nassor Hamis Said',
    courseName: 'Course 1',
    creditHours: 3,
    answeredQuestions: 8,
    marks: 60,
  },
  {
    studentName: 'Nassor Hamis Said',
    courseName: 'Course 2',
    creditHours: 2,
    answeredQuestions: 5,
    marks: 45,
  },
  {
    studentName: 'Nassor Hamis Said',
    courseName: 'Course 3',
    creditHours: 4,
    answeredQuestions: 10,
    marks: 75,
  },
];

function Settings() {
  return (
    <div className="settings-container">
      <h2>Student Performance</h2>
      <table className="settings-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Course Name</th>
            <th>Credit Hours</th>
            <th>Questions Answered</th>
            <th>Marks</th>
            <th>Credit</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.studentName}</td>
              <td>{row.courseName}</td>
              <td>{row.creditHours}</td>
              <td>{row.answeredQuestions}</td>
              <td>{row.marks}</td>
              <td>{row.creditHours}</td>
              <td>{row.marks > 50 ? 'Pass' : 'Fail'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Settings;
