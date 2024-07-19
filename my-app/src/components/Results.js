import React from 'react';
import { Link,  } from 'react-router-dom';
import Course from './Course';
import Settings from './Settings';
import Logout from './Logout';
import './Dashboard.css';

function Results() {
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
        <h1>Results</h1>
        <hr/>
      </div>
    </div>
    
  
  );
}

export default Results;
