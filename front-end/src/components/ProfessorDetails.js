import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProfessorDetails.css';

const ProfessorDetails = () => {
  const { id } = useParams();
  const [professor, setProfessor] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfessorDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Unauthorized: Please log in to view professor details.');
        }
        const response = await axios.get(`http://localhost:5000/api/professors/${id}/reviews`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfessor(response.data.professor);
        setReviews(response.data.reviews);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load professor details.');
      }
    };

    fetchProfessorDetails();
  }, [id]);

  if (error) {
    return <div className="professor-details-error">{error}</div>;
  }

  if (!professor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="professor-details">
      <div className="professor-header">
        <h1>{professor.name}</h1>
        <p>{professor.department}</p>
        <p>Rating: {professor.rating ? `${professor.rating} / 5` : 'No rating yet'}</p>
        <button
          className="add-review-button"
          onClick={() => navigate(`/professors/${id}/add-review`)}
        >
          + Add Review
        </button>
      </div>

      <div className="reviews-section">
  <h2>Reviews</h2>
  {reviews.length === 0 ? (
    <p>No reviews yet. Be the first to add one!</p>
  ) : (
    <ul className="reviews-list">
      {reviews.map((review) => (
        <li key={review._id} className="review-item">
          <p className="review-comment">"{review.comment}"</p>
          <p className="review-rating">Rating: {review.rating} / 5</p>
          <p className="review-user">
            - {review.user ? review.user.username : 'Anonymous'}
          </p>
        </li>
      ))}
    </ul>
  )}
</div>

    </div>
  );
};

export default ProfessorDetails;
