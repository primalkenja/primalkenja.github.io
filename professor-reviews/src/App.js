import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProfessorList from "./components/ProfessorList";
import ProfessorDetails from "./components/ProfessorDetails";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
