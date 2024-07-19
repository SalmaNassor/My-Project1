import React from 'react';
import { Link,  } from 'react-router-dom';
import Course from './Course';
import Settings from './Settings';
import Logout from './Logout';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <nav className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li><Link to="home">Home</Link></li>
          <li><Link to="/exams">Examinations</Link></li>
          <li><Link to="settings">Results</Link></li>
          <li><Link to="logout">Logout</Link></li>
        </ul>
      </nav>
      </div>
  
  );
}

export default Dashboard;
