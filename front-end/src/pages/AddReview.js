import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './AddReview.css';

const AddReview = () => {
  const { id } = useParams();
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Unauthorized: Please log in to add a review.');
      }
      await axios.post(
        `http://localhost:5000/api/professors/${id}/reviews`,
        { rating, comment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate(`/professors/${id}`);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit review.');
    }
  };

  return (
    <div className="add-review">
      <h1>Add Review</h1>
      <form className="add-review-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Rating (1-5):</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            required
          />
        </div>
        <div className="form-group">
          <label>Comment:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your review here"
            required
          ></textarea>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="primary-button">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
