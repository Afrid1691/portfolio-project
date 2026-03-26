import React, { useState } from "react";
import axios from "axios";

function ResumeModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/resume-request", formData);
      setStatus("Request sent. I’ll review and share my resume.");
      setFormData({ name: "", email: "" });
    } catch (error) {
      setStatus("Failed to send request.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="resume-modal-card">
        <h2 className="resume-title">Request Resume</h2>
        <p className="resume-subtitle">
          Enter your details and I’ll share my resume after review.
        </p>

        <form className="resume-form" onSubmit={handleSubmit}>
          <div className="resume-field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="resume-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="resume-btn">
            Send Request
          </button>

          {status && <p className="resume-status">{status}</p>}
        </form>

        <button className="resume-close" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
}

export default ResumeModal;