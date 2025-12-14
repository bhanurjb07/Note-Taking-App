import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import noteRoutes from "./routes/note.route.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB ✅");
  } catch (error) {
    console.error("Error connecting to MongoDB ❌", error);
    process.exit(1);
  }
};

connectDB();

// Routes
app.use("/api/v1/noteapp", noteRoutes);

// Test route (VERY IMPORTANT)
app.get("/", (req, res) => {
  res.send("Backend is live 🚀");
});

// Render PORT
const PORT = process.env.PORT || 4002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
