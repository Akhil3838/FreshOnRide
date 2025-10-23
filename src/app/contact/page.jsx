"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="contact-container">
      {/* Navigation */}
      <nav className="contact-nav">
        <div className="contact-nav-content">
          <Link href="/" className="contact-back-btn">
            ← Back to Home
          </Link>
          <h2 className="contact-nav-title">Contact Us</h2>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-title">
            Get in Touch
          </h1>
          <p className="contact-subtitle">
            Have questions about our services or need support? We're here to help! 
            Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="contact-main">
        <div className="contact-main-content">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2 className="contact-section-title">Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="delivery">Delivery Issue</option>
                    <option value="order">Order Problem</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="form-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="form-success">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <h2 className="contact-section-title">Contact Information</h2>
              
              <div className="contact-info-grid">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    📧
                  </div>
                  <div className="contact-info-details">
                    <h3 className="contact-info-title">Email Us</h3>
                    <p className="contact-info-text">support@freshonride.com</p>
                    <p className="contact-info-text">orders@freshonride.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    📱
                  </div>
                  <div className="contact-info-details">
                    <h3 className="contact-info-title">Call Us</h3>
                    <p className="contact-info-text">+1 (555) 123-4567</p>
                    <p className="contact-info-text">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    📍
                  </div>
                  <div className="contact-info-details">
                    <h3 className="contact-info-title">Visit Us</h3>
                    <p className="contact-info-text">123 Fresh Street</p>
                    <p className="contact-info-text">Food City, FC 12345</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    🕒
                  </div>
                  <div className="contact-info-details">
                    <h3 className="contact-info-title">Business Hours</h3>
                    <p className="contact-info-text">Mon - Fri: 8:00 AM - 8:00 PM</p>
                    <p className="contact-info-text">Sat - Sun: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <h3 className="contact-social-title">Follow Us</h3>
                <div className="contact-social-links">
                  <a href="#" className="contact-social-link">Facebook</a>
                  <a href="#" className="contact-social-link">Twitter</a>
                  <a href="#" className="contact-social-link">Instagram</a>
                  <a href="#" className="contact-social-link">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="contact-faq">
        <div className="contact-main-content">
          <h2 className="contact-section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">How do I place an order?</h3>
              <p className="faq-answer">
                You can place an order through our mobile app or website. Simply browse our fresh products, 
                add items to your cart, and proceed to checkout.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What are your delivery areas?</h3>
              <p className="faq-answer">
                We currently deliver to major cities within a 50-mile radius. Check our delivery areas 
                in the app or contact us to confirm if we deliver to your location.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How fresh are your products?</h3>
              <p className="faq-answer">
                All our products are sourced fresh daily and delivered within 24 hours of preparation. 
                We guarantee the highest quality and freshness.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What payment methods do you accept?</h3>
              <p className="faq-answer">
                We accept all major credit cards, debit cards, PayPal, and digital wallets. 
                Cash on delivery is also available in select areas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="contact-footer">
        <div className="contact-footer-content">
          <p className="contact-footer-text">
            © 2025 Fresh on Ride. All rights reserved. 
          </p>
          <p className="contact-footer-subtext">
            We're here to help - contact us anytime!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
