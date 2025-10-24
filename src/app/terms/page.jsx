import React from "react";
import Link from "next/link";
import "./terms.css";

function Terms() {
  return (
    <div className="terms-container">
      {/* Navigation */}
      <nav className="terms-nav">
        <div className="terms-nav-content">
          <Link href="/" className="terms-back-btn">
            ← Back to Home
          </Link>
          <h2 className="terms-nav-title">Terms & Conditions</h2>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="terms-hero">
        <div className="terms-hero-content">
          <h1 className="terms-title">
            Terms & Conditions
          </h1>
          <p className="terms-subtitle">
            Welcome to <strong className="terms-brand">Fresh on Ride</strong>. These terms and conditions outline the rules and regulations for the use of our platform for ordering fresh fish, meats, and other products.
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
            By accessing and using <strong className="terms-brand">Fresh on Ride</strong> services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>

          <h4 className="terms-section-title">
            <span className="terms-section-bullet"></span>
            2. Use License
          </h4>
          <p className="terms-text">
            Permission is granted to temporarily download one copy of the materials on <strong className="terms-brand">Fresh on Ride</strong> for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="terms-list">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>

          <h4 className="terms-section-title">
            <span className="terms-section-bullet"></span>
            3. Product Information & Quality
          </h4>
          <p className="terms-text">
            We strive to provide accurate product descriptions and maintain the highest quality standards. However:
          </p>
          <ul className="terms-list">
            <li>Product images are for illustration purposes and may vary from actual products</li>
            <li>We reserve the right to substitute products of equal or better quality</li>
            <li>Freshness and quality are guaranteed at the time of dispatch</li>
            <li>Storage and handling after delivery is the customer's responsibility</li>
          </ul>

          <h4 className="terms-section-title">
            <span className="terms-section-bullet"></span>
            4. Ordering & Payment
          </h4>
          <p className="terms-text">
            When placing an order:
          </p>
          <ul className="terms-list">
            <li>All orders are subject to product availability</li>
            <li>Prices are subject to change without notice</li>
            <li>Payment must be made in full before order processing</li>
            <li>We accept various payment methods as displayed during checkout</li>
            <li>Order confirmation will be sent via email/SMS</li>
          </ul>

          <h4 className="terms-section-title">
            <span className="terms-section-bullet"></span>
            5. Delivery Terms
          </h4>
          <p className="terms-text">
            Delivery terms and conditions:
          </p>
          <ul className="terms-list">
            <li>Delivery times are estimates and may vary based on location and demand</li>
            <li>Someone must be available to receive the order at the specified address</li>
            <li>We are not responsible for delays due to weather, traffic, or other external factors</li>
            <li>Delivery charges may apply based on location and order value</li>
            <li>Refrigerated products must be stored immediately upon delivery</li>
          </ul>

          <h4 className="terms-section-title">
            <span className="terms-section-bullet"></span>
            6. Cancellation & Refunds
          </h4>
          <p className="terms-text">
            Cancellation and refund policies:
          </p>
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
          <p className="terms-text">
            As a user of our platform, you agree to:
          </p>
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
            In no event shall <strong className="terms-brand">Fresh on Ride</strong> or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our platform, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h4 className="terms-section-title">
            <span className="terms-section-bullet"></span>
            9. Privacy Policy
          </h4>
          <p className="terms-text">
            Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
          </p>

          <h4 className="terms-section-title">
            <span className="terms-section-bullet"></span>
            10. Modifications
          </h4>
          <p className="terms-text">
            <strong className="terms-brand">Fresh on Ride</strong> may revise these terms of service at any time without notice. By using this service, you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h4 className="terms-section-title">
            <span className="terms-section-bullet"></span>
            11. Governing Law
          </h4>
          <p className="terms-text">
            These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
          </p>

          <h4 className="terms-section-title">
            <span className="terms-section-bullet"></span>
            12. Contact Information
          </h4>
          <p className="terms-text" style={{ marginBottom: "0" }}>
            If you have any questions about these Terms & Conditions, please contact us at{" "}
            <a
              href="mailto:support@freshonride.com"
              className="terms-link"
            >
              support@freshonride.com
            </a>.
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <div className="terms-footer">
        <div className="terms-footer-content">
          <p className="terms-footer-text">
            © 2025 Fresh on Ride. All rights reserved. 
          </p>
          <p className="terms-footer-subtext">
            Last updated: January 2025
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms;
