import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import LoginPage from './pages/LoginPage';
import UploadPage from './pages/UploadPage';
import Header from './components/Header';
import './assets/styles/main.scss';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/course/:id" element={<CoursePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/upload" element={<UploadPage />} />
            </Routes>
        </Router>
    );
}

export default App;
