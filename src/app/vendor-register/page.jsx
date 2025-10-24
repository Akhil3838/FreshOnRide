"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./vendor-register.css";

function VendorRegister() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    district: "",
    location: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Indian districts for dropdown
  const districts = [
    "Select District",
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad",
    "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam",
    "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad",
    "Meerut", "Rajkot", "Kalyan-Dombivali", "Vasai-Virar", "Varanasi", "Srinagar", "Aurangabad",
    "Navi Mumbai", "Solapur", "Vijayawada", "Kolhapur", "Amritsar", "Nashik", "Sangli", "Malegaon",
    "Ulhasnagar", "Jalgaon", "Akola", "Latur", "Ahmadnagar", "Dhule", "Ichalkaranji", "Parbhani",
    "Jalna", "Bhusawal", "Panvel", "Satara", "Beed", "Yavatmal", "Kamptee", "Gondia", "Barshi",
    "Achalpur", "Osmanabad", "Nanded", "Wardha", "Udgir", "Hinganghat"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Basic validation
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

    // Phone number validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      setSubmitMessage("Please enter a valid 10-digit phone number");
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
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
      {/* Navigation */}
      <nav className="vendor-nav">
        <div className="vendor-nav-content">
          <Link href="/" className="vendor-back-btn">
            ← Back to Home
          </Link>
          <h2 className="vendor-nav-title">Vendor Registration</h2>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="vendor-hero">
        <div className="vendor-hero-content">
          <h1 className="vendor-title">
            Join Our Vendor Network
          </h1>
          <p className="vendor-subtitle">
            Partner with <strong className="vendor-brand">Fresh on Ride</strong> and start delivering fresh fish, meats, and other products to customers in your area.
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
              {/* Name Field */}
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

              {/* Phone Number Field */}
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

              {/* District Dropdown */}
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

              {/* Location Field */}
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

              {/* Submit Button */}
              <button
                type="submit"
                className="vendor-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Registering...
                  </>
                ) : (
                  "Register as Vendor"
                )}
              </button>

              {/* Submit Message */}
              {submitMessage && (
                <div className={`vendor-message ${submitMessage.includes("successful") ? "success" : "error"}`}>
                  {submitMessage}
                </div>
              )}
            </form>

            {/* Additional Information */}
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

      {/* Footer Note */}
      <div className="vendor-footer">
        <div className="vendor-footer-content">
          <p className="vendor-footer-text">
            © 2025 Fresh on Ride. All rights reserved. 
          </p>
          <p className="vendor-footer-subtext">
            Building a network of trusted vendors for fresh deliveries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VendorRegister;
