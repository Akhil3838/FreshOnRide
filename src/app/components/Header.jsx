'use client';
import Link from 'next/link';
import React, { useState } from 'react'

function Header() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    
      const closeMenu = () => {
        setIsMenuOpen(false);
      };
    
  return (
    <>
      <header className="transparent-header">
    <div className="container d-flex justify-content-between align-items-center">
      {/* Left - Logo */}
     <Link href={'/'}>
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



    </>
  )
}

export default Header