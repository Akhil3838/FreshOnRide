import React from "react";

function Privacy() {
  return (
    <>
      {/* Hero Section */}
      <section 
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          color: "white",
          textAlign: "center",
          padding: "4rem 1rem",
          borderBottom: "3px solid #ff6b35"
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ 
            fontSize: "3rem", 
            fontWeight: "700", 
            marginBottom: "1rem",
            background: "linear-gradient(90deg, #ff6b35, #f7931e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Privacy Policy
          </h1>
          <p style={{ 
            fontSize: "1.25rem", 
            marginTop: "1.5rem",
            color: "#e0e0e0",
            lineHeight: "1.6"
          }}>
            Your privacy matters to us. At <strong style={{ color: "#ff6b35" }}>Fresh on Ride</strong>, we're committed
            to keeping your personal information safe and transparent.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section style={{ 
        padding: "4rem 1rem",
        background: "linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%)",
        minHeight: "100vh"
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{
            background: "white",
            border: "none",
            borderRadius: "16px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            padding: "3rem",
            position: "relative",
            overflow: "hidden"
          }}>
            {/* Decorative element */}
            <div style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "4px",
              background: "linear-gradient(90deg, #ff6b35, #f7931e)"
            }}></div>

            <h4 style={{ 
              fontWeight: "700", 
              marginBottom: "1rem",
              color: "#2d2d2d",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              <span style={{
                display: "inline-block",
                width: "8px",
                height: "8px",
                backgroundColor: "#ff6b35",
                borderRadius: "50%"
              }}></span>
              1. Introduction
            </h4>
            <p style={{ 
              color: "#666",
              lineHeight: "1.7",
              fontSize: "1.05rem",
              marginBottom: "2rem"
            }}>
              This Privacy Policy describes how <strong style={{ color: "#ff6b35" }}>Fresh on Ride</strong> collects,
              uses, and safeguards your information when you use our platform for ordering
              fish, meats, and other fresh products. By using our services, you agree to
              this policy.
            </p>

            <h4 style={{ 
              fontWeight: "700", 
              marginBottom: "1rem",
              color: "#2d2d2d",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "2.5rem"
            }}>
              <span style={{
                display: "inline-block",
                width: "8px",
                height: "8px",
                backgroundColor: "#ff6b35",
                borderRadius: "50%"
              }}></span>
              2. Information We Collect
            </h4>
            <ul style={{ 
              color: "#666",
              lineHeight: "1.7",
              fontSize: "1.05rem",
              paddingLeft: "1.5rem",
              marginBottom: "2rem"
            }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong style={{ color: "#2d2d2d" }}>Personal Details</strong> — name, contact number, email, and address.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong style={{ color: "#2d2d2d" }}>Order Information</strong> — product preferences, delivery address, and transaction history.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong style={{ color: "#2d2d2d" }}>Technical Data</strong> — device details, browser type, and IP address.
              </li>
            </ul>

            <h4 style={{ 
              fontWeight: "700", 
              marginBottom: "1rem",
              color: "#2d2d2d",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "2.5rem"
            }}>
              <span style={{
                display: "inline-block",
                width: "8px",
                height: "8px",
                backgroundColor: "#ff6b35",
                borderRadius: "50%"
              }}></span>
              3. How We Use Your Data
            </h4>
            <p style={{ 
              color: "#666",
              lineHeight: "1.7",
              fontSize: "1.05rem"
            }}>
              We use your data to:
            </p>
            <ul style={{ 
              color: "#666",
              lineHeight: "1.7",
              fontSize: "1.05rem",
              paddingLeft: "1.5rem",
              marginBottom: "2rem"
            }}>
              <li style={{ marginBottom: "0.5rem" }}>Process and deliver your orders efficiently.</li>
              <li style={{ marginBottom: "0.5rem" }}>Provide customer support and service updates.</li>
              <li style={{ marginBottom: "0.5rem" }}>Enhance your overall shopping experience.</li>
              <li style={{ marginBottom: "0.5rem" }}>Ensure safety and prevent fraudulent activities.</li>
            </ul>

            <h4 style={{ 
              fontWeight: "700", 
              marginBottom: "1rem",
              color: "#2d2d2d",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "2.5rem"
            }}>
              <span style={{
                display: "inline-block",
                width: "8px",
                height: "8px",
                backgroundColor: "#ff6b35",
                borderRadius: "50%"
              }}></span>
              4. Sharing Your Information
            </h4>
            <p style={{ 
              color: "#666",
              lineHeight: "1.7",
              fontSize: "1.05rem",
              marginBottom: "2rem"
            }}>
              We do not sell or rent your personal data. Information may be shared only
              with trusted delivery partners and payment providers to complete your orders.
            </p>

            <h4 style={{ 
              fontWeight: "700", 
              marginBottom: "1rem",
              color: "#2d2d2d",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "2.5rem"
            }}>
              <span style={{
                display: "inline-block",
                width: "8px",
                height: "8px",
                backgroundColor: "#ff6b35",
                borderRadius: "50%"
              }}></span>
              5. Data Protection
            </h4>
            <p style={{ 
              color: "#666",
              lineHeight: "1.7",
              fontSize: "1.05rem",
              marginBottom: "2rem"
            }}>
              Your data is stored securely using industry-standard encryption and access
              controls to prevent unauthorized access or misuse.
            </p>

            <h4 style={{ 
              fontWeight: "700", 
              marginBottom: "1rem",
              color: "#2d2d2d",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "2.5rem"
            }}>
              <span style={{
                display: "inline-block",
                width: "8px",
                height: "8px",
                backgroundColor: "#ff6b35",
                borderRadius: "50%"
              }}></span>
              6. Your Rights
            </h4>
            <p style={{ 
              color: "#666",
              lineHeight: "1.7",
              fontSize: "1.05rem",
              marginBottom: "2rem"
            }}>
              You may review, update, or delete your personal data at any time by contacting us.
              You can also opt out of promotional messages.
            </p>

            <h4 style={{ 
              fontWeight: "700", 
              marginBottom: "1rem",
              color: "#2d2d2d",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "2.5rem"
            }}>
              <span style={{
                display: "inline-block",
                width: "8px",
                height: "8px",
                backgroundColor: "#ff6b35",
                borderRadius: "50%"
              }}></span>
              7. Policy Updates
            </h4>
            <p style={{ 
              color: "#666",
              lineHeight: "1.7",
              fontSize: "1.05rem",
              marginBottom: "2rem"
            }}>
              We may update this policy occasionally to reflect new features or legal
              requirements. The latest version will always be available on our website.
            </p>

            <h4 style={{ 
              fontWeight: "700", 
              marginBottom: "1rem",
              color: "#2d2d2d",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "2.5rem"
            }}>
              <span style={{
                display: "inline-block",
                width: "8px",
                height: "8px",
                backgroundColor: "#ff6b35",
                borderRadius: "50%"
              }}></span>
              8. Contact Us
            </h4>
            <p style={{ 
              color: "#666",
              lineHeight: "1.7",
              fontSize: "1.05rem",
              marginBottom: "0"
            }}>
              For any questions or privacy concerns, contact our support team at{" "}
              <a
                href="mailto:support@freshonride.com"
                style={{
                  textDecoration: "none",
                  color: "#ff6b35",
                  fontWeight: "600",
                  borderBottom: "2px solid #ff6b35",
                  paddingBottom: "2px"
                }}
              >
                support@freshonride.com
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section style={{ 
        background: "linear-gradient(135deg, #04364A 0%, #0a4c6b 100%)",
        color: "white",
        textAlign: "center",
        padding: "2rem 1rem",
        borderTop: "3px solid #ff6b35"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ 
            margin: "0",
            fontSize: "0.9rem",
            color: "#e0e0e0"
          }}>
            © 2025 Fresh on Ride. All rights reserved. 
          </p>
          <p style={{ 
            margin: "0.5rem 0 0 0",
            fontSize: "0.8rem",
            color: "#b0b0b0"
          }}>
            Committed to protecting your privacy and data security.
          </p>
        </div>
      </section>
    </>
  );
}

export default Privacy;