const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve the public folder
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// API Route
app.get("/api/stats", (req, res) => {
  const stats = {
    studentsReached: Math.floor(Math.random() * 601),
    schoolsPartnered: Math.floor(Math.random() * 1001),
    teachersTrained: Math.floor(Math.random() * 10001),
    graduationLift: parseFloat((Math.random() * 10).toFixed(1)),
  };
  res.json(stats);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});