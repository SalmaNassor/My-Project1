import React from 'react';
import { Link } from 'react-router-dom';
import './Logout.css';

function Logout() {
  return (
    <div className="logout-container">
      <h2>Logout</h2>
      <p>Thank you for using the Examination Portal. We hope you had a great experience.</p>
      <div className="logout-summary">
        <h3>Performance Summary</h3>
        <p>Student: Nassor Hamis Said</p>
        <ul>
          <li>Course 1: 60 marks (Pass)</li>
          <li>Course 2: 45 marks (Fail)</li>
          <li>Course 3: 75 marks (Pass)</li>
        </ul>
      </div>
      <p>If you wish to log out, please click the button below.</p>
      <Link to="/" className="logout-button">Confirm Logout</Link>
    </div>
  );
}

export default Logout;
