import React from "react";

function Footer() {
  return (
    <footer className="fresh-footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-section">
            <h3 className="footer-logo">Fresh on Ride</h3>
            <p className="footer-tagline">Delivering freshness to your doorstep</p>
<div className="social-links d-flex gap-2">
  <a href="#" aria-label="LinkedIn" className="text-white fs-5">
    <i className="fab fa-linkedin"></i>
  </a>
  <a href="#" aria-label="Instagram" className="text-white fs-5">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="#" aria-label="YouTube" className="text-white fs-5">
    <i className="fab fa-youtube"></i>
  </a>
  <a href="#" aria-label="Facebook" className="text-white fs-5">
    <i className="fab fa-facebook"></i>
  </a>
  <a href="#" aria-label="Twitter" className="text-white fs-5">
    <i className="fab fa-x-twitter"></i>
  </a>
</div>
          </div>

          {/* Column 1 */}

          {/* Column 2 */}
          <div className="footer-section">
            <h6 className="footer-heading">Menu</h6>
            <ul className="footer-links">
              <li><a href="/vendor-register">Become a Seller</a></li>
               <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-section">
            <h6 className="footer-heading">Learn More</h6>
            <ul className="footer-links">
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/shipping">Shipping Policy</a></li>
              
            </ul>
          </div>

          {/* Column 4 */}
                   {/* <div className="footer-section"> */}
          {/* App Downloads */}
          <div className="footer-section">
            <h6 className="footer-heading">Get the App</h6>
            <div className="app-downloads">
              <a href="#" className="app-link">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on App Store"
                  width="120"
                />
              </a>
              <a href="#" className="app-link">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  width="120"
                />
              </a>
            </div>
          </div>
          </div>


        {/* </div> */}

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>
              By continuing past this page, you agree to our Terms of Service, Cookie Policy,
              Privacy Policy and Content Policies. All trademarks are properties of their
              respective owners.
            </p>
            <p>© 2025 Fresh on Ride™ Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;