const express = require("express");

const app = express();
const PORT = 3000;

// Allow JSON requests
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send(`
    <h1>Hormony Server</h1>
    <p>Server is running successfully!</p>
  `);
});

// Test API route
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Hormony API is working!"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
