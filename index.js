import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config({ override: true });

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 7000;
const DEFAULT_MONGO_URI = "mongodb://127.0.0.1:27017/stmdb";
const MONGO_URI = process.env.MONGO_URI || DEFAULT_MONGO_URI;

app.get("/", (req, res) => {
  res.json({
    ok: true,
    service: "stm-server",
    message: "Server is running"
  });
});

app.get("/health", (req, res) => {
  res.json({
    ok: mongoose.connection.readyState === 1,
    server: "running",
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected"
  });
});

const maskedMongoUri = MONGO_URI.includes("@")
  ? MONGO_URI.replace(/\/\/.*@/, "//***:***@")
  : MONGO_URI;

console.log("Using MongoDB URI:", maskedMongoUri);

if (!process.env.MONGO_URI) {
  console.warn("MONGO_URI not set; using local MongoDB fallback at mongodb://127.0.0.1:27017/stmdb");
}

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000
    });
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    console.error("Fix: start local MongoDB on port 27017 or set a valid MongoDB Atlas MONGO_URI in .env");
    console.log("Server will keep running and retry MongoDB in 10 seconds...");
    setTimeout(connectDB, 10000);
  }
};

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

connectDB();
