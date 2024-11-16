// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchProfessors = () => axios.get(`${API_URL}/professors`);
export const fetchProfessorWithReviews = (id) => axios.get(`${API_URL}/professors/${id}/reviews`);
export const createReview = (data) => axios.post(`${API_URL}/reviews`, data, {
  headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
});
