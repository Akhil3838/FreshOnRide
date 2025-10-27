"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./vendor-register.css";
import Footer from "../components/Footer";

function VendorRegister() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    district: "",
    location: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Added for header

  const districts = ["Select District", "Kasargod", "Kannur"];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    if (!formData.name.trim()) {
      setSubmitMessage("Please enter your name");
      setIsSubmitting(false);
      return;
    }
    if (!formData.phoneNumber.trim()) {
      setSubmitMessage("Please enter your phone number");
      setIsSubmitting(false);
      return;
    }
    if (!formData.district || formData.district === "Select District") {
      setSubmitMessage("Please select a district");
      setIsSubmitting(false);
      return;
    }
    if (!formData.location.trim()) {
      setSubmitMessage("Please enter your location");
      setIsSubmitting(false);
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      setSubmitMessage("Please enter a valid 10-digit phone number");
      setIsSubmitting(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitMessage("Registration successful! We'll contact you soon.");
      setFormData({
        name: "",
        phoneNumber: "",
        district: "",
        location: ""
      });
    } catch (error) {
      setSubmitMessage("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="vendor-container">
      {/* Transparent Header (from Terms page) */}
      <header className="transparent-header">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Left - Logo */}
          <div className="logo">
            <img
              src="/assets/images/logo1.png"
              alt="Fresh on Ride Logo"
              className="logo-img"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-links desktop-nav">
            <a href="/about">About Us</a>
            <a href="/contact">Contact Us</a>
            <a href="/vendor-register" className="active-link">
              Become a Seller
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`hamburger ${isMenuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Offcanvas Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
          <div className="mobile-menu-overlay" onClick={closeMenu}></div>
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <img
                src="/assets/images/logo1.png"
                alt="Fresh on Ride Logo"
                className="mobile-logo"
              />
            </div>

            <nav className="mobile-nav-links">
              <a href="/about" onClick={closeMenu}>
                About Us
              </a>
              <a href="/contact" onClick={closeMenu}>
                Contact Us
              </a>
              <a href="/vendor-register" onClick={closeMenu}>
                Become a Vendor
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="vendor-hero" style={{marginTop:'100px'}}>
        <div className="vendor-hero-content">
          <h1 className="vendor-title">Join Our Vendor Network</h1>
          <p className="vendor-subtitle">
            Partner with <strong className="vendor-brand">Fresh on Ride</strong>{" "}
            and start delivering fresh fish, meats, and other products to
            customers in your area.
          </p>
        </div>
      </div>

      {/* Registration Form */}
      <div className="vendor-content">
        <div className="vendor-form-container">
          <div className="vendor-form-card">
            <h3 className="vendor-form-title">Vendor Registration Form</h3>
            <p className="vendor-form-subtitle">
              Fill in your details to get started as a vendor partner
            </p>

            <form onSubmit={handleSubmit} className="vendor-form">
              <div className="vendor-form-group">
                <label htmlFor="name" className="vendor-label">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="vendor-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="vendor-form-group">
                <label htmlFor="phoneNumber" className="vendor-label">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="vendor-input"
                  placeholder="Enter your 10-digit phone number"
                  maxLength="10"
                  required
                />
              </div>

              <div className="vendor-form-group">
                <label htmlFor="district" className="vendor-label">
                  District <span className="required">*</span>
                </label>
                <select
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  className="vendor-select"
                  required
                >
                  {districts.map((district, index) => (
                    <option key={index} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>

              <div className="vendor-form-group">
                <label htmlFor="location" className="vendor-label">
                  Location/Address <span className="required">*</span>
                </label>
                <textarea
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="vendor-textarea"
                  placeholder="Enter your complete address with area, city, and pin code"
                  rows="3"
                  required
                />
              </div>

              <button
                type="submit"
                className="vendor-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span> Registering...
                  </>
                ) : (
                  "Register as Vendor"
                )}
              </button>

              {submitMessage && (
                <div
                  className={`vendor-message ${
                    submitMessage.includes("successful") ? "success" : "error"
                  }`}
                >
                  {submitMessage}
                </div>
              )}
            </form>

            <div className="vendor-info">
              <h4>What happens next?</h4>
              <ul>
                <li>Our team will review your application within 24-48 hours</li>
                <li>We'll contact you for verification and onboarding</li>
                <li>You'll receive vendor credentials and training materials</li>
                <li>Start accepting orders and earning with us!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default VendorRegister;
