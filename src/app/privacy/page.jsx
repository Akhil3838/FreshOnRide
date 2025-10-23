import React from "react";
import Link from "next/link";
import "./privacy.css";

function Privacy() {
  return (
    <div className="privacy-container">
      {/* Navigation */}
      <nav className="privacy-nav">
        <div className="privacy-nav-content">
          <Link href="/" className="privacy-back-btn">
            ← Back to Home
          </Link>
          <h2 className="privacy-nav-title">Privacy Policy</h2>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="privacy-hero">
        <div className="privacy-hero-content">
          <h1 className="privacy-title">
            Privacy Policy
          </h1>
          <p className="privacy-subtitle">
            Your privacy matters to us. At <strong className="privacy-brand">Fresh on Ride</strong>, we're committed
            to keeping your personal information safe and transparent.
          </p>
        </div>
      </div>

      {/* Policy Content */}
      <div className="privacy-content">
        <div className="privacy-main-content">
          <h4 className="privacy-section-title">
            <span className="privacy-section-bullet"></span>
            1. Introduction
          </h4>
          <p className="privacy-text">
            This Privacy Policy describes how <strong className="privacy-brand">Fresh on Ride</strong> collects,
            uses, and safeguards your information when you use our platform for ordering
            fish, meats, and other fresh products. By using our services, you agree to
            this policy.
          </p>

          <h4 className="privacy-section-title">
            <span className="privacy-section-bullet"></span>
            2. Information We Collect
          </h4>
          <ul className="privacy-list">
            <li>
              <strong>Personal Details</strong> — name, contact number, email, and address.
            </li>
            <li>
              <strong>Order Information</strong> — product preferences, delivery address, and transaction history.
            </li>
            <li>
              <strong>Technical Data</strong> — device details, browser type, and IP address.
            </li>
          </ul>

          <h4 className="privacy-section-title">
            <span className="privacy-section-bullet"></span>
            3. How We Use Your Data
          </h4>
          <p className="privacy-text">
            We use your data to:
          </p>
          <ul className="privacy-list">
            <li>Process and deliver your orders efficiently.</li>
            <li>Provide customer support and service updates.</li>
            <li>Enhance your overall shopping experience.</li>
            <li>Ensure safety and prevent fraudulent activities.</li>
          </ul>

          <h4 className="privacy-section-title">
            <span className="privacy-section-bullet"></span>
            4. Sharing Your Information
          </h4>
          <p className="privacy-text">
            We do not sell or rent your personal data. Information may be shared only
            with trusted delivery partners and payment providers to complete your orders.
          </p>

          <h4 className="privacy-section-title">
            <span className="privacy-section-bullet"></span>
            5. Data Protection
          </h4>
          <p className="privacy-text">
            Your data is stored securely using industry-standard encryption and access
            controls to prevent unauthorized access or misuse.
          </p>

          <h4 className="privacy-section-title">
            <span className="privacy-section-bullet"></span>
            6. Your Rights
          </h4>
          <p className="privacy-text">
            You may review, update, or delete your personal data at any time by contacting us.
            You can also opt out of promotional messages.
          </p>

          <h4 className="privacy-section-title">
            <span className="privacy-section-bullet"></span>
            7. Policy Updates
          </h4>
          <p className="privacy-text">
            We may update this policy occasionally to reflect new features or legal
            requirements. The latest version will always be available on our website.
          </p>

          <h4 className="privacy-section-title">
            <span className="privacy-section-bullet"></span>
            8. Contact Us
          </h4>
          <p className="privacy-text" style={{ marginBottom: "0" }}>
            For any questions or privacy concerns, contact our support team at{" "}
            <a
              href="mailto:support@freshonride.com"
              className="privacy-link"
            >
              support@freshonride.com
            </a>.
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <div className="privacy-footer">
        <div className="privacy-footer-content">
          <p className="privacy-footer-text">
            © 2025 Fresh on Ride. All rights reserved. 
          </p>
          <p className="privacy-footer-subtext">
            Committed to protecting your privacy and data security.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;