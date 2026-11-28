import express from "express";
import Scholarship from "../models/Scholarship.js";

const router = express.Router();

// Public endpoint: only administrator-approved, non-demo opportunities are returned.
router.get("/", async (req, res, next) => {
  try {
    const { search = "", category = "All", location = "" } = req.query;
    const filter = { status: "approved", isDemo: false };

    if (category !== "All") filter.category = category;
    if (location.trim()) filter.location = { $regex: escapeRegex(location.trim()), $options: "i" };

    if (search.trim()) {
      const safeSearch = new RegExp(escapeRegex(search.trim()), "i");
      filter.$or = [
        { title: safeSearch },
        { provider: safeSearch },
        { location: safeSearch },
        { description: safeSearch },
      ];
    }

    const data = await Scholarship.find(filter)
      .select("title provider category level location deadline funding description officialUrl createdAt")
      .sort({ deadline: 1, createdAt: -1 })
      .limit(100)
      .lean();

    res.json({ success: true, count: data.length, data });
  } catch (error) {
    next(error);
  }
});

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default router;
