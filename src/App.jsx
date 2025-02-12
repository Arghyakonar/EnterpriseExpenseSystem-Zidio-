// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./components/LoginPage.jsx"; 
import HomePage from "./components/Homepage.jsx"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} /> 
        <Route path="*" element={<Navigate to="/" />} /> 

      </Routes>
    </Router>
  );
}

export default App;