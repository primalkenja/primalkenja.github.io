// src/components/ProfessorDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { fetchProfessorWithReviews } from '../api';
import AddReviewForm from './AddReviewForm';

function ProfessorDetails({ match }) {
    const professorId = useParams();
    const [professor, setProfessor] = useState(null);

    useEffect(() => {
        const loadProfessorData = async () => {
            try {
                const response = await fetchProfessorWithReviews(professorId);
                setProfessor(response.data);
            } catch (error) {
                console.error("Error fetching professor details:", error);
            }
        };
        loadProfessorData();
    }, [professorId]);

    if (!professor) return <div>Loading...</div>;

    return (
        <div>
            <h2>{professor.professor.name}</h2>
            <p>Department: {professor.professor.department}</p>
            <p>Average Rating: {professor.professor.rating}</p>

            <h3>Reviews</h3>
            <ul>
                {professor.reviews.map(review => (
                    <li key={review._id}>
                        {review.user.username}: {review.comment} - Rating: {review.rating}
                    </li>
                ))}
            </ul>

            <h3>Add a Review</h3>
            <AddReviewForm professorId={professorId} />
        </div>
    );
}

export default ProfessorDetails;
