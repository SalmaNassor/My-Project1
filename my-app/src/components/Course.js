import { Link,  } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Course from './Course';
import Settings from './Settings';
import Logout from './Logout';
import './Dashboard.css';


  


const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/courses/') 
      .then(response => {
        Course(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the courses', error);
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
              <li><Link to="/profile">profile</Link></li>
              <li><Link to="/course">Course</Link></li>
            </ul>
          </nav>
      </div>
      <div className='right-side'>
        <h1>Course</h1>
        <hr/>
        <div>
          <ul>
            {courses.map(courses => (
              <li key={courses.id}>{courses.course_name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    
  
  );
}

export default Courses;
