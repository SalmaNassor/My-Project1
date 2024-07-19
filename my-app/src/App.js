import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Results from './components/Results';

import Exam from './components/Exam';
import ExamDetails from './components/ExamDetails';
import Course from './components/Course';
import Home from './components/Home';
import Profile from './components/Profile';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/exams" element={<Exam />} />
          <Route path="/exams/:id" element={<ExamDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/course" element={<Course />} />
          <Route path="/home" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
