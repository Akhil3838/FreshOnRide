"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./privacy.css";
import Footer from "../components/Footer";

function Privacy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="privacy-container">
      {/* Navigation */}
      <header className="transparent-header">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Left - Logo */}
         <Link href={'/'} style={{textDecoration:'none'}}>
            <div className="logo">
              <img
                src="/assets/images/logo1.png"
                alt="Fresh on Ride Logo"
                className="logo-img"
              />
            </div>
         </Link>

          {/* Desktop Navigation Links */}
          <nav className="nav-links desktop-nav">
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/vendor-register">Become a Seller</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
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
              <Link href="/about" onClick={closeMenu}>
                About Us
              </Link>
              <Link href="/contact" onClick={closeMenu}>
                Contact Us
              </Link>
              <Link href="/vendor-register" onClick={closeMenu}>
                Become a Vendor
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="privacy-hero" style={{marginTop:'100px'}}>
        <div className="privacy-hero-content">
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-subtitle">
            Your privacy matters to us. At{" "}
            <strong className="privacy-brand">Fresh on Ride</strong>, we're
            committed to keeping your personal information safe and transparent.
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
            This Privacy Policy describes how{" "}
            <strong className="privacy-brand">Fresh on Ride</strong> collects,
            uses, and safeguards your information when you use our platform for
            ordering fish, meats, and other fresh products. By using our
            services, you agree to this policy.
          </p>

          <h4 className="privacy-section-title">
            <span className="privacy-section-bullet"></span>
            2. Information We Collect
          </h4>
          <ul className="privacy-list">
            <li>
              <strong>Personal Details</strong> — name, contact number, email,
              and address.
            </li>
            <li>
              <strong>Order Information</strong> — product preferences, delivery
              address, and transaction history.
            </li>
            <li>
              <strong>Technical Data</strong> — device details, browser type,
              and IP address.
            </li>
          </ul>

          <h4 className="privacy-section-title">
            <span className="privacy-section-bullet"></span>
            3. How We Use Your Data
          </h4>
          <p className="privacy-text">We use your data to:</p>
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
            We do not sell or rent your personal data. Information may be shared
            only with trusted delivery partners and payment providers to
            complete your orders.
          </p>

          <h4 className="privacy-section-title">
            <span className="privacy-section-bullet"></span>
            5. Data Protection
          </h4>
          <p className="privacy-text">
            Your data is stored securely using industry-standard encryption and
            access controls to prevent unauthorized access or misuse.
          </p>

          <h4 className="privacy-section-title">
            <span className="privacy-section-bullet"></span>
            6. Your Rights
          </h4>
          <p className="privacy-text">
            You may review, update, or delete your personal data at any time by
            contacting us. You can also opt out of promotional messages.
          </p>

          <h4 className="privacy-section-title">
            <span className="privacy-section-bullet"></span>
            7. Policy Updates
          </h4>
          <p className="privacy-text">
            We may update this policy occasionally to reflect new features or
            legal requirements. The latest version will always be available on
            our website.
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
            </a>
            .
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <Footer/>
    </div>
  );
}

export default Privacy;
