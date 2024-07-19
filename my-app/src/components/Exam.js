import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Exam = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/exams/')
      .then(response => {
        setExams(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the exams', error);
      });
  }, []);

  return (
    <div className='body-container'>
      <div className="dashboard">
        <nav className="sidebar">
          <h2>Dashboard</h2>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/exams">Examinations</Link></li>
            <li><Link to="/results">Results</Link></li>
            <li><Link to="/logout">Logout</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/course">Course</Link></li>
          </ul>
        </nav>
      </div>
      <div className='right-side'>
        <h1>Available Examinations</h1>
        <hr />
        <div>
          <ul>
            {exams.map(exam => (
              <li key={exam.id}>
                <Link to={`/exams/${exam.id}`}>{exam.course}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Exam;
