"use client";

import { useState } from "react";
import Footer from "./components/Footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
<section className="hero-section">
  {/* Transparent Header */}
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

      {/* Desktop Navigation Links */}
      <nav className="nav-links desktop-nav">
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
        <a href="/vendor-register">Become a Vendor</a>
        {/* <a href="/privacy">Privacy</a> */}
      </nav>

      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </div>

    {/* Mobile Offcanvas Menu */}
    <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
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
          <a href="/about" onClick={closeMenu}>About Us</a>
          <a href="/contact" onClick={closeMenu}>Contact Us</a>
          <a href="/vendor-register" onClick={closeMenu}>Become a Vendor</a>
          {/* <a href="/privacy" onClick={closeMenu}>Privacy Policy</a>
          <a href="/terms" onClick={closeMenu}>Terms & Conditions</a>
          <a href="/shipping" onClick={closeMenu}>Shipping Policy</a> */}
        </nav>
      </div>
    </div>
  </header>

  {/* Background video */}
  <video
    src="https://media.gettyimages.com/id/950061532/video/fishing-boat-trawler-vessel-huge-catch-of-fish.mp4?s=mp4-640x640-gi&k=20&c=uqkfnsF3Yf3o3bcf1-t5D3iLCgaPFoRCGEwQwDYggqU="
    autoPlay
    loop
    muted
  ></video>

  {/* Hero content */}
  <div className="hero-content container text-center">
    <h1>Always delivering</h1>
    <h1 className="highlight">an amazing experience</h1>
  </div>

  <div className="scroll-down text-center">
    <span>Scroll down</span>
    <i className="fa-solid fa-circle-chevron-down" />
  </div>
</section>

{/* animation */}


{/* app menu */}

<div className="features-section">
  <h1>What’s waiting for you on the app?</h1>
  <p>
    Our app is packed with features that enable you to experience food
    delivery like never before
  </p>

  <div className="features-row">
    {/* Left Features */}
    <div className="features-column">
      <div className="feature-box">
        <img src="/assets/images/fish.png" alt="Healthy" />
        <p>Healthy</p>
      </div>
      <div className="feature-box">
        <img src="/assets/images/fish.png" alt="Veg Mode" />
        <p>Veg Mode</p>
      </div>
      <div className="feature-box">
        <img src="/assets/images/fish.png" alt="Plan a Party" />
        <p>Plan a Party</p>
      </div>
      <div className="feature-box">
        <img src="/assets/images/fish.png" alt="Gift Cards" />
        <p>Gift Cards</p>
      </div>
    </div>

    {/* Center Phone */}
    <div className="phone-wrapper">
      <img src="/assets/images/phoneframe.avif" alt="Phone Frame" />
      <div className="center-feature">
        <img src="/assets/images/fish.png" alt="Schedule Order" />
        <p>Schedule your order</p>
      </div>
    </div>

    {/* Right Features */}
    <div className="features-column">
      <div className="feature-box">
        <img src="/assets/images/fish.png" alt="Gourmet" />
        <p>Gourmet</p>
      </div>
      <div className="feature-box">
        <img src="/assets/images/fish.png" alt="Offers" />
        <p>Offers</p>
      </div>
      <div className="feature-box">
        <img src="/assets/images/fish.png" alt="Food on Train" />
        <p>Food on Train</p>
      </div>
      <div className="feature-box">
        <img src="/assets/images/fish.png" alt="Collections" />
        <p>Collections</p>
      </div>
    </div>
  </div>
</div>

{/* app qr download */}

  <div class="download-container">
    {/* <!-- Left Section --> */}
    <div class="download-text">
      <h2>Download the app now!</h2>
      <p>Experience seamless online ordering only on the Zomato app</p>
      <div class="store-buttons">
        <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play"/></a>
        <a href="#"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store"/></a>
      </div>
    </div>

    {/* <!-- Right Section --> */}
    <div class="phone-container">
      <div class="phone-frame">
        <div class="notch"></div>
        <div class="qr-area">
          <img src="https://b.zmtcdn.com/data/o2_assets/98cc4eba0a6f59e728e5223a70fd39551742471514.png" alt="QR Code"/>
          {/* <!-- <p>Scan the QR code to<br>download the app</p> --> */}
        </div>
      </div>
    </div>
  </div>

  <Footer/>


    </>
  );
}
