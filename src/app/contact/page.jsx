"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./contact.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <div className="contact-container">

<Header/>
      {/* MAIN CONTENT */}
      <main className="contact-main mt-5">
        <div className="contact-main-content">
          <div className="contact-grid">

            {/* CONTACT FORM */}
            <div className="contact-form-section">
              <h3 className="contact-section-title">Send Us a Message</h3>

              <form className="contact-form" onSubmit={handleSubmit}>
                
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-input"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-input"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-input"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <select
                    className="form-select"
                    name="subject"
                    required
                    onChange={handleChange}
                  >
                    <option value="">Select Topic</option>
                    <option value="support">Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="business">Business Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-textarea"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message"
                  ></textarea>
                </div>

                <button className="form-submit" type="submit">
                  Send Message
                </button>

                {success && (
                  <div className="form-success">
                    Message sent successfully! We will get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* CONTACT INFO */}
            <div className="contact-info-section">

              <div className="contact-info-grid">

                <div className="contact-info-item">
                  <div className="contact-info-icon">📍</div>
                  <div>
                    <h4 className="contact-info-title">Our Address</h4>
                    <p className="contact-info-text">Kasaragod, Kerala</p>
                    <p className="contact-info-text">India</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">📞</div>
                  <div>
                    <h4 className="contact-info-title">Phone</h4>
                    <p className="contact-info-text">+91 98765 43210</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">✉️</div>
                  <div>
                    <h4 className="contact-info-title">Email</h4>
                    <p className="contact-info-text">support@example.com</p>
                  </div>
                </div>

              </div>

              {/* SOCIAL */}
              <div className="contact-social">
                <h4 className="contact-social-title">Follow Us</h4>
                <div className="contact-social-links">
                  <a className="contact-social-link" href="#">Facebook</a>
                  <a className="contact-social-link" href="#">Instagram</a>
                  <a className="contact-social-link" href="#">Twitter</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* Footer */}

      <Footer/>
    </div>
  );
}
