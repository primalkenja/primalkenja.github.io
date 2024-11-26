import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfessorList from "./components/ProfessorList";
import ProfessorDetails from "./components/ProfessorDetails";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import CreateProfessor from './pages/CreateProfessor';
import AddReview from './pages/AddReview';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/professors" element={<ProfessorList />} />
        <Route path="/professors/:id" element={<ProfessorDetails />} />
        <Route path="/create-professor" element={<CreateProfessor />} />
        <Route path="/professors/:id/add-review" element={<AddReview />} />
      </Routes>
    </Router>
  );
}
// test comment

export default App;