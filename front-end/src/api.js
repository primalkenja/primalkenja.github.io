// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchProfessors = () => axios.get(`${API_URL}/professors`);
export const fetchProfessorWithReviews = (id) => {
  /* const token = localStorage.getItem('token'); // Fetch the token from localStorage
  if (!token) {
    throw new Error('No token found! Please log in.');
  }*/ //we can uncomment this one when we get login/register working on the site, then it should pass the token to localstorage and be retrievable. 
  //For now we hardcode a valid token that is created through a POST register user thru postman. This is what you see in line 15 Bearer {token}

  return axios.get(`${API_URL}/professors/${id}/reviews`, {
    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3M2Y2MzVmN2M0YjljNGZlN2RlMWM4NSIsInVzZXJuYW1lIjoiSm9obiBEb2UiLCJlbWFpbCI6ImpvaG5kb2VAZXhhbXBsZS5jb20iLCJpYXQiOjE3MzIyMDc0OTAsImV4cCI6MTczMjI5Mzg5MH0.5rUCbwiHCTPytQLaShkOnOaG51rtyoEV4gDs7Q_dTAI` }, // Include token in the header
  });
};

export const createReview = (data) => axios.post(`${API_URL}/reviews`, data, {
  headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
});
