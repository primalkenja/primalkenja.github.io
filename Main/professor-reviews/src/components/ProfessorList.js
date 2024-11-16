import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProfessorList = () => {
  const [professors, setProfessors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the professors from backend API
    axios.get('http://localhost:5000/api/professors')
      .then(response => {
        setProfessors(response.data); // Update the state with the professor data
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch(error => {
        console.error('Error fetching professors:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  return (
    <div>
      <h1>Professors</h1>
      <ul>
        {professors.map(professor => (
          <li key={professor._id}>
            <Link to={`/professor/${professor._id}`}>{professor.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfessorList;
