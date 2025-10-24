import React from "react";
import Link from "next/link";
import "./shipping.css";

function Shipping() {
  return (
    <div className="shipping-container">
      {/* Navigation */}
      <nav className="shipping-nav">
        <div className="shipping-nav-content">
          <Link href="/" className="shipping-back-btn">
            ← Back to Home
          </Link>
          <h2 className="shipping-nav-title">Shipping Policy</h2>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="shipping-hero">
        <div className="shipping-hero-content">
          <h1 className="shipping-title">
            Shipping Policy
          </h1>
          <p className="shipping-subtitle">
            At <strong className="shipping-brand">Fresh on Ride</strong>, we ensure your fresh fish, meats, and other products are delivered safely and promptly to your doorstep with the highest quality standards.
          </p>
        </div>
      </div>

      {/* Policy Content */}
      <div className="shipping-content">
        <div className="shipping-main-content">
          <h4 className="shipping-section-title">
            <span className="shipping-section-bullet"></span>
            1. Delivery Areas
          </h4>
          <p className="shipping-text">
            We currently deliver to select areas within major cities. Our delivery coverage includes:
          </p>
          <ul className="shipping-list">
            <li>Metropolitan areas and surrounding suburbs</li>
            <li>Business districts and residential zones</li>
            <li>Universities and educational institutions</li>
            <li>Corporate offices and industrial areas</li>
          </ul>
          <p className="shipping-text">
            To check if we deliver to your area, please enter your pin code during checkout or contact our customer support.
          </p>

          <h4 className="shipping-section-title">
            <span className="shipping-section-bullet"></span>
            2. Delivery Timeframes
          </h4>
          <p className="shipping-text">
            We offer flexible delivery options to suit your schedule:
          </p>
          <ul className="shipping-list">
            <li><strong>Same Day Delivery:</strong> Orders placed before 2 PM (subject to availability)</li>
            <li><strong>Next Day Delivery:</strong> Orders placed after 2 PM or for next-day delivery</li>
            <li><strong>Scheduled Delivery:</strong> Choose your preferred date and time slot</li>
            <li><strong>Express Delivery:</strong> 2-4 hours delivery for urgent orders (additional charges apply)</li>
          </ul>

          <h4 className="shipping-section-title">
            <span className="shipping-section-bullet"></span>
            3. Delivery Charges
          </h4>
          <p className="shipping-text">
            Our delivery charges are transparent and competitive:
          </p>
          <ul className="shipping-list">
            <li><strong>Free Delivery:</strong> Orders above ₹500 in most areas</li>
            <li><strong>Standard Delivery:</strong> ₹50 for orders below ₹500</li>
            <li><strong>Express Delivery:</strong> ₹100 for 2-4 hour delivery</li>
            <li><strong>Remote Areas:</strong> Additional charges may apply for distant locations</li>
            <li><strong>Peak Hours:</strong> Surcharge during festivals and high-demand periods</li>
          </ul>

          <h4 className="shipping-section-title">
            <span className="shipping-section-bullet"></span>
            4. Packaging & Temperature Control
          </h4>
          <p className="shipping-text">
            We maintain the highest standards for packaging and temperature control:
          </p>
          <ul className="shipping-list">
            <li>Insulated packaging for temperature-sensitive products</li>
            <li>Ice packs and cooling materials for fresh items</li>
            <li>Separate compartments for different product categories</li>
            <li>Eco-friendly packaging materials where possible</li>
            <li>Quality seals and tamper-proof packaging</li>
          </ul>

          <h4 className="shipping-section-title">
            <span className="shipping-section-bullet"></span>
            5. Delivery Process
          </h4>
          <p className="shipping-text">
            Our streamlined delivery process ensures your order reaches you safely:
          </p>
          <ul className="shipping-list">
            <li>Order confirmation via SMS and email</li>
            <li>Real-time tracking updates</li>
            <li>Delivery partner assignment and route optimization</li>
            <li>Quality check before dispatch</li>
            <li>Delivery confirmation and feedback collection</li>
          </ul>

          <h4 className="shipping-section-title">
            <span className="shipping-section-bullet"></span>
            6. Delivery Requirements
          </h4>
          <p className="shipping-text">
            To ensure successful delivery, please ensure:
          </p>
          <ul className="shipping-list">
            <li>Someone is available to receive the order at the specified address</li>
            <li>Contact number is reachable during delivery hours</li>
            <li>Delivery address is complete and accurate</li>
            <li>Access instructions are provided for gated communities</li>
            <li>Refrigerator space is available for immediate storage</li>
          </ul>

          <h4 className="shipping-section-title">
            <span className="shipping-section-bullet"></span>
            7. Failed Delivery Attempts
          </h4>
          <p className="shipping-text">
            If delivery cannot be completed:
          </p>
          <ul className="shipping-list">
            <li>We will attempt delivery up to 2 times</li>
            <li>Customer will be contacted for alternative arrangements</li>
            <li>Orders may be held at our facility for 24 hours</li>
            <li>Refund or rescheduling options will be provided</li>
            <li>Additional delivery charges may apply for rescheduled deliveries</li>
          </ul>

          <h4 className="shipping-section-title">
            <span className="shipping-section-bullet"></span>
            8. Quality Assurance
          </h4>
          <p className="shipping-text">
            We guarantee the quality of your order:
          </p>
          <ul className="shipping-list">
            <li>Fresh products are sourced daily from trusted suppliers</li>
            <li>Temperature monitoring throughout the delivery chain</li>
            <li>Quality inspection before packaging</li>
            <li>Immediate replacement for quality issues</li>
            <li>Full refund for unsatisfactory products</li>
          </ul>

          <h4 className="shipping-section-title">
            <span className="shipping-section-bullet"></span>
            9. Weather & External Factors
          </h4>
          <p className="shipping-text">
            While we strive for timely delivery, certain factors may affect delivery times:
          </p>
          <ul className="shipping-list">
            <li>Severe weather conditions (heavy rain, storms)</li>
            <li>Traffic congestion and road closures</li>
            <li>Festival periods and high-demand days</li>
            <li>Government restrictions or lockdowns</li>
            <li>Force majeure events beyond our control</li>
          </ul>

          <h4 className="shipping-section-title">
            <span className="shipping-section-bullet"></span>
            10. Contact & Support
          </h4>
          <p className="shipping-text">
            For any shipping-related queries or issues:
          </p>
          <ul className="shipping-list">
            <li>Customer Support: <a href="tel:+91-9876543210" className="shipping-link">+91-9876543210</a></li>
            <li>Email: <a href="mailto:shipping@freshonride.com" className="shipping-link">shipping@freshonride.com</a></li>
            <li>Live Chat: Available on our website and app</li>
            <li>WhatsApp: <a href="https://wa.me/919876543210" className="shipping-link">+91-9876543210</a></li>
            <li>Support Hours: 8 AM - 10 PM (7 days a week)</li>
          </ul>

          <h4 className="shipping-section-title">
            <span className="shipping-section-bullet"></span>
            11. Policy Updates
          </h4>
          <p className="shipping-text" style={{ marginBottom: "0" }}>
            This shipping policy may be updated from time to time. We will notify customers of any significant changes via email or SMS. The latest version will always be available on our website.
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <div className="shipping-footer">
        <div className="shipping-footer-content">
          <p className="shipping-footer-text">
            © 2025 Fresh on Ride. All rights reserved. 
          </p>
          <p className="shipping-footer-subtext">
            Delivering freshness, one order at a time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
