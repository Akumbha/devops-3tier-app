const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("🚀 Backend root working");
});

// API routes (handles /api, /api/, /api/anything)
app.use("/api", (req, res) => {
  res.send("🚀 Backend API working");
});

// Health check (useful for Kubernetes later)
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Handle unknown routes (important)
app.use((req, res) => {
  res.status(404).send("❌ Route not found");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
