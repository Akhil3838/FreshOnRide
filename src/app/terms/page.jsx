"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./terms.css";
import Footer from "../components/Footer";

function Terms() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="terms-container">
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
            <a href="/about">About Us</a>
            <a href="/contact">Contact Us</a>
            <a href="/vendor-register">Become a Seller</a>
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
      <div className="terms-hero" style={{marginTop:'100px'}}>
        <div className="terms-hero-content">
          <h1 className="terms-title">Terms & Conditions</h1>
          <p className="terms-subtitle">
            Welcome to{" "}
            <strong className="terms-brand">Fresh on Ride</strong>. These terms
            and conditions outline the rules and regulations for the use of our
            platform for ordering fresh fish, meats, and other products.
          </p>
        </div>
      </div>

      {/* Policy Content */}
      <div className="terms-content">
        <div className="terms-main-content">
          <h4 className="terms-section-title">
            <span className="terms-section-bullet"></span>
            1. Acceptance of Terms
          </h4>
          <p className="terms-text">
            By accessing and using{" "}
            <strong className="terms-brand">Fresh on Ride</strong> services, you
            accept and agree to be bound by the terms and provision of this
            agreement. If you do not agree to abide by the above, please do not
            use this service.
          </p>

          <h4 className="terms-section-title">
            <span className="terms-section-bullet"></span>
            2. Use License
          </h4>
          <p className="terms-text">
            Permission is granted to temporarily download one copy of the
            materials on <strong className="terms-brand">Fresh on Ride</strong>{" "}
            for personal, non-commercial transitory viewing only. This is the
            grant of a license, not a transfer of title, and under this license
            you may not:
          </p>
          <ul className="terms-list">
            <li>Modify or copy the materials</li>
            <li>
              Use the materials for any commercial purpose or for any public
              display
            </li>
            <li>
              Attempt to reverse engineer any software contained on the website
            </li>
            <li>
              Remove any copyright or other proprietary notations from the
              materials
            </li>
          </ul>

          <h4 className="terms-section-title">
            <span className="terms-section-bullet"></span>
            3. Product Information & Quality
          </h4>
          <p className="terms-text">
            We strive to provide accurate product descriptions and maintain the
            highest quality standards. However:
          </p>
          <ul className="terms-list">
            <li>
              Product images are for illustration purposes and may vary from
              actual products
            </li>
            <li>
              We reserve the right to substitute products of equal or better
              quality
            </li>
            <li>Freshness and quality are guaranteed at the time of dispatch</li>
            <li>
              Storage and handling after delivery is the customer's
              responsibility
            </li>
          </ul>

          <h4 className="terms-section-title">
            <span className="terms-section-bullet"></span>
            4. Ordering & Payment
          </h4>
          <p className="terms-text">When placing an order:</p>
          <ul className="terms-list">
            <li>All orders are subject to product availability</li>
            <li>Prices are subject to change without notice</li>
            <li>Payment must be made in full before order processing</li>
            <li>
              We accept various payment methods as displayed during checkout
            </li>
            <li>Order confirmation will be sent via email/SMS</li>
          </ul>

          <h4 className="terms-section-title">
            <span className="terms-section-bullet"></span>
            5. Delivery Terms
          </h4>
          <ul className="terms-list">
            <li>
              Delivery times are estimates and may vary based on location and
              demand
            </li>
            <li>
              Someone must be available to receive the order at the specified
              address
            </li>
            <li>
              We are not responsible for delays due to weather, traffic, or
              other external factors
            </li>
            <li>
              Delivery charges may apply based on location and order value
            </li>
            <li>Refrigerated products must be stored immediately</li>
          </ul>

          <h4 className="terms-section-title">
            <span className="terms-section-bullet"></span>
            6. Cancellation & Refunds
          </h4>
          <ul className="terms-list">
            <li>Orders can be cancelled within 30 minutes of placement</li>
            <li>Refunds will be processed within 5-7 business days</li>
            <li>Quality issues must be reported within 2 hours of delivery</li>
            <li>Refunds are subject to our quality assessment</li>
            <li>Promotional discounts are non-refundable</li>
          </ul>

          <h4 className="terms-section-title">
            <span className="terms-section-bullet"></span>
            7. User Responsibilities
          </h4>
          <ul className="terms-list">
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Use the service only for lawful purposes</li>
            <li>Not attempt to gain unauthorized access to our systems</li>
            <li>Respect other users and our staff</li>
          </ul>

          <h4 className="terms-section-title">
            <span className="terms-section-bullet"></span>
            8. Limitation of Liability
          </h4>
          <p className="terms-text">
            In no event shall <strong className="terms-brand">Fresh on Ride</strong>{" "}
            or its suppliers be liable for any damages (including, without
            limitation, damages for loss of data or profit, or due to business
            interruption) arising out of the use or inability to use the
            materials on our platform.
          </p>

          <h4 className="terms-section-title">
            <span className="terms-section-bullet"></span>
            9. Privacy Policy
          </h4>
          <p className="terms-text">
            Your privacy is important to us. Please review our Privacy Policy,
            which also governs your use of the service.
          </p>

          <h4 className="terms-section-title">
            <span className="terms-section-bullet"></span>
            10. Modifications
          </h4>
          <p className="terms-text">
            <strong className="terms-brand">Fresh on Ride</strong> may revise
            these terms at any time without notice.
          </p>

          <h4 className="terms-section-title">
            <span className="terms-section-bullet"></span>
            11. Governing Law
          </h4>
          <p className="terms-text">
            These terms are governed by and construed in accordance with the
            laws of India.
          </p>

          <h4 className="terms-section-title">
            <span className="terms-section-bullet"></span>
            12. Contact Information
          </h4>
          <p className="terms-text" style={{ marginBottom: "0" }}>
            For questions, contact{" "}
            <a href="mailto:support@freshonride.com" className="terms-link">
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

export default Terms;
