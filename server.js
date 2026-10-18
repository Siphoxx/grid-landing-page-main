const express = require("express");
const path = require("path");
const fs = require("fs"); // <-- We need this to read/write files
const session = require("express-session");
const bcrypt = require("bcryptjs");



const app = express();
const PORT = 3000;
const STATS_FILE = path.join(__dirname, "stats.json"); // <-- Path to your file

const ADMIN_PASSWORD_HASH = "$2a$10$X8sO2w2xV2m3E9B5j3U9e.Wq7V4o1F5c2M3x4T5y6Z7a8B9c0D1e";
// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use(session({
  secret: "super-secret-key-change-this-later", // Used to sign the cookie
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Set to true if you ever use HTTPS
}));

// ===== Helper: read stats from disk =====
function readStats() {
  const raw = fs.readFileSync(STATS_FILE, "utf-8");
  return JSON.parse(raw);
}

// ===== Helper: write stats to disk =====
function writeStats(stats) {
  fs.writeFileSync(STATS_FILE, JSON.stringify(stats, null, 2));
}

// ===== GET /api/stats — return the stored stats =====
app.get("/api/stats", (req, res) => {
  try {
    const stats = readStats();
    res.json(stats);
  } catch (err) {
    console.error("Failed to read stats:", err);
    res.status(500).json({ error: "Failed to read stats" });
  }
});

// ===== POST /api/stats — update the stored stats =====
app.post("/api/stats", (req, res) => {
  try {
    const newStats = req.body;

    // Basic validation
    const required = ["studentsReached", "schoolsPartnered", "teachersTrained", "graduationLift"];
    for (const key of required) {
      if (typeof newStats[key] !== "number") {
        return res.status(400).json({ error: `Missing or invalid field: ${key}` });
      }
    }

    writeStats(newStats);
    res.json({ message: "Stats updated", stats: newStats });
  } catch (err) {
    console.error("Failed to write stats:", err);
    res.status(500).json({ error: "Failed to write stats" });
  }
});

// ===== Start server =====
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});