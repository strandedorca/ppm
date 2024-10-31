const express = require("express");

// Initialize your express application
const app = express();
const PORT = process.env.PORT || 1210;

// Create the first route that listens to GET request to '/'
// The callback is the route handler (runs when this route is accessed)
app.get("/", (req, res) => res.send("Server is running"));

// Start Express server and listens for incoming requests
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
