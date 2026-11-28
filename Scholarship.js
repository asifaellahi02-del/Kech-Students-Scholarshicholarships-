import mongoose from "mongoose";

const scholarshipSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxlength: 140 },
  provider: { type: String, required: true, trim: true, maxlength: 140 },
  category: {
    type: String,
    required: true,
    enum: ["Merit-Based", "Need-Based", "Postgraduate", "Other"],
  },
  level: { type: String, trim: true, default: "Not specified" },
  location: { type: String, required: true, trim: true },
  deadline: { type: Date },
  funding: { type: String, trim: true, default: "See official announcement" },
  description: { type: String, required: true, maxlength: 2000 },
  officialUrl: { type: String, trim: true, default: "" },
  status: {
    type: String,
    enum: ["draft", "pending", "approved", "rejected"],
    default: "pending",
    index: true,
  },
  isDemo: { type: Boolean, default: false },
}, { timestamps: true });

scholarshipSchema.index({ title: "text", provider: "text", location: "text", description: "text" });

export default mongoose.model("Scholarship", scholarshipSchema);
