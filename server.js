const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// API endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: "Hello from Final project" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
