const express = require("express");
const path = require("path");
const compression = require("compression");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
require('dotenv').config()
const server = express();

//Compress Data
server.use(compression());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  server.use(express.static("client/build"));
}

//connect to database or local host
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/projects");

// Allow server to use params
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

//Routes
const projectRoutes = require("./routes/projectRoutes");
server.use(projectRoutes);

// Send every request to the React app
// Define any API routes before this runs
server.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

server.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
