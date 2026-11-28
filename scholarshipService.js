import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  timeout: 8000,
});

export async function getScholarships() {
  const response = await api.get("/scholarships");
  return response.data.data;
}
