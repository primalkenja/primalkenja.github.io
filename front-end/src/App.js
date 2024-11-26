import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfessorList from "./components/ProfessorList";
import ProfessorDetails from "./components/ProfessorDetails";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import CreateProfessor from './pages/CreateProfessor';
import AddReview from './pages/AddReview';
import LogoutButton from './components/LogoutButton'; // Import the logout button



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <Router>
      <div className="app">
        <header className="app-header">

          {isLoggedIn && <LogoutButton />} {/* Only show logout button if logged in */}
        </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/professors" element={<ProfessorList />} />
        <Route path="/professors/:id" element={<ProfessorDetails />} />
        <Route path="/create-professor" element={<CreateProfessor />} />
        <Route path="/professors/:id/add-review" element={<AddReview />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      </div>
    </Router>
  );
}
// test comment

export default App;