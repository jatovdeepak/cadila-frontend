import axios from "axios";

const API_BASE = "http://localhost:5000";

// Upload PDF
export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(`${API_BASE}/upload`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Fetch cleaned documents
export const fetchCleanedDocs = async () => {
  const response = await axios.get(`${API_BASE}/documents/cleaned`);
  return response.data;
};
