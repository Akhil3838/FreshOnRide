import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./about.css";

function About() {
  return (
    <div className="about-container">
      {/* Navigation */}
      <nav className="about-nav">
        <div className="about-nav-content">
          <Link href="/" className="about-back-btn">
            ← Back to Home
          </Link>
          <h2 className="about-nav-title">About Us</h2>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-grid">
          <div className="about-hero-content">
            <h1 className="about-title">
              About Fresh on Ride
            </h1>
            <p className="about-subtitle">
              We're revolutionizing the way you get fresh fish and meat delivered to your doorstep. 
              Our mission is to bring the freshest products from the sea and farm directly to your kitchen.
            </p>
          </div>
          <div className="about-hero-image-wrap">
            <Image 
              src="/assets/images/fish.png" 
              alt="Fresh on Ride delivery illustration"
              className="about-hero-image"
              width={560}
              height={420}
              priority
            />
          </div>
        </div>
      </div>

      {/* Mission Section */}
      {/* <div className="about-mission">
        <div className="about-main-content">
          <div className="about-section">
            <h2 className="about-section-title">
              Our Mission
            </h2>
            <p className="about-text">
              To provide the freshest, highest-quality fish and meat products to our customers 
              through a seamless delivery experience. We believe everyone deserves access to 
              premium fresh products without compromising on quality or convenience.
            </p>
          </div>

          <div className="about-section">
            <h2 className="about-section-title">
              Our Vision
            </h2>
            <p className="about-text">
              To become the leading fresh food delivery platform, setting new standards 
              for quality, sustainability, and customer satisfaction in the food delivery industry.
            </p>
          </div>

          <div className="about-section">
            <h2 className="about-section-title">
              Our Values
            </h2>
            <div className="about-values-grid">
              <div className="about-value-card">
                <div className="about-value-icon">🌊</div>
                <h3 className="about-value-title">Freshness First</h3>
                <p className="about-value-text">We ensure every product is delivered at peak freshness</p>
              </div>
              <div className="about-value-card">
                <div className="about-value-icon">⚡</div>
                <h3 className="about-value-title">Fast Delivery</h3>
                <p className="about-value-text">Quick and reliable delivery to your doorstep</p>
              </div>
              <div className="about-value-card">
                <div className="about-value-icon">🌱</div>
                <h3 className="about-value-title">Sustainability</h3>
                <p className="about-value-text">Committed to eco-friendly and sustainable practices</p>
              </div>
              <div className="about-value-card">
                <div className="about-value-icon">🤝</div>
                <h3 className="about-value-title">Customer Care</h3>
                <p className="about-value-text">Dedicated to exceptional customer service</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Team Section */}
      <div className="about-team">
        <div className="about-main-content">
          <h2 className="about-section-title">
            Meet Our Team
          </h2>
          <div className="about-team-grid">
            <div className="about-team-card">
              <div className="about-team-avatar">
                <div className="about-avatar-placeholder">AK</div>
              </div>
              <h3 className="about-team-name">Akhil Kumar</h3>
              <p className="about-team-role">Founder & CEO</p>
              <p className="about-team-bio">
                Passionate about bringing fresh food to every household with innovative delivery solutions.
              </p>
            </div>
            <div className="about-team-card">
              <div className="about-team-avatar">
                <div className="about-avatar-placeholder">SM</div>
              </div>
              <h3 className="about-team-name">Sarah Mitchell</h3>
              <p className="about-team-role">Head of Operations</p>
              <p className="about-team-bio">
                Expert in supply chain management ensuring quality and freshness in every delivery.
              </p>
            </div>
            <div className="about-team-card">
              <div className="about-team-avatar">
                <div className="about-avatar-placeholder">RJ</div>
              </div>
              <h3 className="about-team-name">Rajesh Joshi</h3>
              <p className="about-team-role">Head of Technology</p>
              <p className="about-team-bio">
                Leading our tech team to create seamless digital experiences for our customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="about-stats">
        <div className="about-main-content">
          <h2 className="about-section-title">
            Our Impact
          </h2>
          <div className="about-stats-grid">
            <div className="about-stat-card">
              <div className="about-stat-number">10K+</div>
              <div className="about-stat-label">Happy Customers</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-number">50K+</div>
              <div className="about-stat-label">Orders Delivered</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-number">99%</div>
              <div className="about-stat-label">Customer Satisfaction</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-number">24/7</div>
              <div className="about-stat-label">Customer Support</div>
            </div>
          </div>
        </div>
      </div>


      {/* Contact Section */}
      <div className="about-contact">
        <div className="about-main-content">
          <h2 className="about-section-title">
            Get in Touch
          </h2>
          <p className="about-text">
            Have questions about our services or want to learn more about Fresh on Ride? 
            We'd love to hear from you!
          </p>
          <div className="about-contact-info">
            <div className="about-contact-item">
              <div className="about-contact-icon">📧</div>
              <div className="about-contact-details">
                <h3 className="about-contact-title">Email Us</h3>
                <p className="about-contact-text">support@freshonride.com</p>
              </div>
            </div>
            <div className="about-contact-item">
              <div className="about-contact-icon">📱</div>
              <div className="about-contact-details">
                <h3 className="about-contact-title">Call Us</h3>
                <p className="about-contact-text">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="about-contact-item">
              <div className="about-contact-icon">📍</div>
              <div className="about-contact-details">
                <h3 className="about-contact-title">Visit Us</h3>
                <p className="about-contact-text">123 Fresh Street, Food City, FC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="about-footer">
        <div className="about-footer-content">
          <p className="about-footer-text">
            © 2025 Fresh on Ride. All rights reserved. 
          </p>
          <p className="about-footer-subtext">
            Delivering freshness, one order at a time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
