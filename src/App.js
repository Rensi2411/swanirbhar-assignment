import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import TeacherUploadForm from './components/TeacherUploadForm';
import AppContextProvider from './context/AppContext';
import NavBar from './components/NavBar';

function App() {
  const [courses, setCourses] = useState([]);

  const addCourse = (newCourse) => {
    setCourses([...courses, newCourse]);
  };

  return (
    <AppContextProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/upload" element={<TeacherUploadForm addCourse={addCourse} />} /> 
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
