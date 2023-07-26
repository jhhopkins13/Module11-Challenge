const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON data in request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route handlers (You'll define these in apiRoutes.js and htmlRoutes.js)
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Use the route handlers
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
