import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProfessorWithReviews } from '../api';

const ProfessorDetails = () => {
  const { id } = useParams(); // Get professor ID from URL params
  const [professor, setProfessor] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProfessorWithReviews(id); // Fetch professor and reviews
        const { professor, reviews } = response.data; // Destructure the response data

        setProfessor(professor); // Set professor details
        setReviews(reviews); // Set reviews list
        setLoading(false);
      } catch (err) {
        console.error('Error fetching professor details:', err);
        setError('Failed to load professor details.');
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <h1>{professor?.name || 'Professor Details'}</h1>
      <h2>Department: {professor?.department}</h2>
      <h3>Overall Rating: {professor?.rating || 'N/A'}</h3>

      <h3>Reviews:</h3>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review._id}>
              <p><strong>Reviewer:</strong> {review.user?.username || 'Anonymous'}</p>
              <p><strong>Rating:</strong> {review.rating}/5</p>
              <p><strong>Comment:</strong> {review.comment}</p>
              <p><small>Posted on: {new Date(review.createdAt).toLocaleDateString()}</small></p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available for this professor.</p>
      )}
    </section>
  );
};

export default ProfessorDetails;
