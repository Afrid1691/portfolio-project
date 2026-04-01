import React, { useState } from "react";
import axios from "axios";

function ResumeModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [status, setStatus] = useState("");

  const API = process.env.REACT_APP_API_BASE_URL || "http://localhost:8080";

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API}/resume-request`, formData);
      setStatus("Request sent ✅");
      setFormData({ name: "", email: "" });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send ❌");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <button type="submit">Send</button>
        {status && <p>{status}</p>}
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ResumeModal;