import dotenv from "dotenv";
import connectDB from "../config/database.js";
import Scholarship from "../models/Scholarship.js";

dotenv.config();

const samples = [
  {
    title: "Undergraduate Merit Scholarship (DEMO)",
    provider: "Sample University",
    category: "Merit-Based",
    level: "Undergraduate",
    location: "Balochistan",
    deadline: new Date("2027-02-15"),
    funding: "Illustrative funding",
    description: "Demonstration record only. This is not an actual scholarship announcement.",
    status: "pending",
    isDemo: true,
  },
];

try {
  await connectDB();
  await Scholarship.deleteMany({ isDemo: true });
  await Scholarship.insertMany(samples);
  console.log("Demo record inserted as pending and will not appear in public listings.");
  process.exit(0);
} catch (error) {
  console.error(error);
  process.exit(1);
}
