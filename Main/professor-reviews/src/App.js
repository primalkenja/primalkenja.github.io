import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProfessorList from "./components/ProfessorList";
import ProfessorDetails from "./components/ProfessorDetails";
import HomePage from './pages/HomePage'; 

function App() {
  return (
    <Router>
      <div>
        <h1>Professors</h1>
        <Routes>
          {/* Main List Route */}
          <Route path="/" element={<ProfessorList />} />
          
          {/* Professor Details Route */}
          <Route path="/professor/:id" element={<ProfessorDetails />} />

          {/* Home Page */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default HomePage;
