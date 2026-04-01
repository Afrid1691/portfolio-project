import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
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
      await axios.post("http://localhost:8080/contact", formData);

      setStatus("Message sent 🚀");
      setFormData({
        name: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send ❌");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-card">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-field">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="contact-field">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>

          {status && <p className="contact-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;