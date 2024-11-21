const Review = require('../models/Review');

exports.createReview = async (req, res) => {
    try {
        const { professorId, rating, reviewText } = req.body;
        const review = new Review({
            userId: req.user.userId,
            professorId,
            rating,
            reviewText,
        });
        await review.save();
        res.status(201).json(review);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
