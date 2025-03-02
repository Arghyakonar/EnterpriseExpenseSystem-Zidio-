// App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./components/LoginPage.jsx"; 
import HomePage from "./components/Homepage.jsx"; 
import Dashboard from "./components/Dashboard.jsx"; // Import the Dashboard component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add a new route for the Dashboard */}
        <Route path="*" element={<Navigate to="/" />} /> 

      </Routes>
    </Router>
  );
}

export default App;