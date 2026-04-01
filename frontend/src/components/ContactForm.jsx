import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
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
      await axios.post(`${API}/contact`, formData);
      setStatus("Message sent 🚀");
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required />
      <button type="submit">Send</button>
      {status && <p>{status}</p>}
    </form>
  );
}

export default ContactForm;