const express = require('express');
const Professor = require('../models/Professor');
const { protect } = require('../middleware/authMiddleware'); // Optional: protect route with JWT
const { getProfessorWithReviews } = require('../controllers/professorController');
const router = express.Router();

router.get('/:id/reviews', protect, getProfessorWithReviews);
router.get('/professors', async (req, res) => {
  try {
    const professors = await Professor.find(); 
    res.json(professors);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});
// backend/routes/professorRoutes.js
router.get('/professors/:id', async (req, res) => {
  try {
    const professor = await Professor.findById(req.params.id); // Get professor by ID
    if (!professor) {
      return res.status(404).send('Professor not found');
    }
    res.json(professor);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Route to create a new professor (only accessible by authenticated users)
router.post('/', protect, async (req, res) => {
  const { name, department } = req.body;

  try {
    // Check if professor already exists
    const professorExists = await Professor.findOne({ name });
    if (professorExists) {
      return res.status(400).json({ message: 'Professor already exists' });
    }

    // Create a new professor object
    const professor = new Professor({
      name,
      department,
    });

    // Save the professor to the database
    await professor.save();

    // Send the response
    res.status(201).json({ message: 'Professor created successfully', professor });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating professor' });
  }
});

module.exports = router;
