const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

// Middleware to check if the user is authenticated (i.e., has a valid JWT)
const protect = (req, res, next) => {
  let token;

  // Check if token is provided in headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      console.log("Token extracted:", token);  // Log token to see if it's extracted correctly

      // Decode the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded JWT:", decoded);  // Log the decoded token

      // Add the user info from decoded token to the request object
      req.user = decoded;  // Make sure decoded contains user data (e.g., _id, username, email)
      console.log("req.user populated:", req.user);  // Verify req.user after it's populated

      next(); // Continue with the request
    } catch (err) {
      console.error("JWT verification failed:", err);  // Log error if token verification fails
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    console.log("No token provided");  // Log if no token is provided
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };
