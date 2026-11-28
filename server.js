import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import connectDB from "./config/database.js";
import healthRoutes from "./routes/health.routes.js";
import scholarshipRoutes from "./routes/scholarship.routes.js";

dotenv.config();
const app = express();

app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
}));
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));

app.use("/api", rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
}));

app.get("/", (_req, res) => res.json({
  success: true,
  message: "Welcome to Kech Students Scholarships API",
  project: "Kech Students Scholarships",
  version: "1.1.0",
}));

app.use("/api/health", healthRoutes);
app.use("/api/scholarships", scholarshipRoutes);

app.use((_req, res) => res.status(404).json({
  success: false,
  message: "API route not found",
}));

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === "production"
      ? "An unexpected server error occurred"
      : error.message,
  });
});

const PORT = process.env.PORT || 5000;
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();
