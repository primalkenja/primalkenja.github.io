const express = require('express');
const Review = require('../models/Review');
const Professor = require('../models/Professor');
const { protect } = require('../middleware/authMiddleware'); // Assuming you have JWT middleware
const router = express.Router();

// POST route to create a review for a professor
router.post('/', protect, async (req, res) => {
  console.log("Inside createReview route:");
  console.log("req.user at start:", req.user); // Log req.user immediately
  const { professorId, rating, comment } = req.body;

  try {
    // Check if the user object is correctly populated
    if (!req.user || !req.user.id) {
      console.log("User information is missing inside route");  // Additional log
      return res.status(400).json({ message: 'User information is missing' });
    }
    console.log('Authenticated user:', req.user); // Log the user object

    // Check if the professor exists
    const professor = await Professor.findById(professorId);
    if (!professor) {
      return res.status(404).json({ message: 'Professor not found' });
    }

    // Create a new review
    const review = new Review({
      professor: professorId,
      user: req.user.id, // The authenticated user
      rating,
      comment,
    });

    // Save the review
    await review.save();

    // Optionally, update the professor's average rating (in case of new review)
    const reviews = await Review.find({ professor: professorId });
    const avgRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
    professor.rating = avgRating;
    await professor.save();

    res.status(201).json({ message: 'Review created successfully', review });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating review' });
  }
});

// GET route to fetch reviews for a specific professor
router.get('/:professorId', async (req, res) => {
  const { professorId } = req.params;

  try {
    const reviews = await Review.find({ professor: professorId }).populate('user', 'name'); // Populate user data if needed
    res.status(200).json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching reviews' });
  }
});

module.exports = router;
