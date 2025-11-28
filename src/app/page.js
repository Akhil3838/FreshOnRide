"use client";

import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {

  return (
    <>

<section className="hero-section">
  {/* Transparent Header */}
<Header/>
  {/* Background video */}
  <video
    src="https://player.vimeo.com/progressive_redirect/playback/562675904/rendition/720p/file.mp4?loc=external&log_user=0&signature=566a3ea31f36424694bb6f1e41770e89c9133e3c6a282acc365b8ff06c573708"
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

{/* section features */}
<div>
     <div className="container py-5">
        <div className="row text-center justify-content-center">
          
          {/* Feature 1 */}
          <div className="col-6 col-md-4 col-lg-3 mb-4">
            <div className="p-4  bg-white h-100">
              <img
                src="https://www.happyway.com.au/cdn/shop/articles/Healthy-Eating-Tips.jpg?v=1749438901"
                alt="Healthy"
                className="img-fluid rounded-circle border border-3 border-light shadow-sm mb-3"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <h6 className="fw-semibold mt-2">Healthy</h6>
              <p> healthy, sound, wholesome, robust, hale, well mean enjoying or indicative of good health. healthy implies full strength and vigor </p>
            </div>
          </div>
  
          {/* Feature 2 */}
          <div className="col-6 col-md-4 col-lg-3 mb-4">
            <div className="p-4  bg-white h-100">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAY-deyGHv_t21Yd2BvB4ZjzJye-NC_UvQMA&s"
                alt="Fresh"
                className="img-fluid rounded-circle border border-3 border-light shadow-sm mb-3"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <h6 className="fw-semibold mt-2">Fresh</h6>
               <p> healthy, sound, wholesome, robust, hale, well mean enjoying or indicative of good health. healthy implies full strength and vigor </p>
            </div>
          </div>
  
          {/* Feature 3 */}
          <div className="col-6 col-md-4 col-lg-3 mb-4">
            <div className="p-4  bg-white h-100">
              <img
                src="https://damgoodfish.com/cdn/shop/files/pabda.webp?v=1757492128&width=1100"
                alt="Clean"
                className="img-fluid rounded-circle border border-3 border-light shadow-sm mb-3"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <h6 className="fw-semibold mt-2">Clean</h6>
               <p> healthy, sound, wholesome, robust, hale, well mean enjoying or indicative of good health. healthy implies full strength and vigor </p>
            </div>
          </div>
  
        </div>
      </div>
  
</div>


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

  <section
      className="position-relative text-center text-white"
      style={{
        backgroundImage: "url('https://t4.ftcdn.net/jpg/03/94/73/73/360_F_394737308_A5IJf7vijvkGWCsiCcNI1kAGWoa5g54h.jpg')", // replace with your background
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
      ></div>

      {/* Content */}
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <h6 className="fw-semibold mb-3 text-uppercase">
              Deliver with Fresh On Ride
            </h6>
            <h1 className="fw-bold display-5 mb-4">
              Find work that suits you
            </h1>
            <button
              className="btn btn-lg"
              style={{
                backgroundColor: "#00ccbc",
                color: "#fff",
                fontWeight: "600",
                padding: "10px 35px",
                borderRadius: "8px",
              }}
            >
              Apply now
            </button>
          </div>
        </div>
      </div>
    </section>
{/* app qr download */}

  <div className="download-container">
    {/* <!-- Left Section --> */}
    <div className="download-text">
      <h2>Download the app now!</h2>
      <p>Experience seamless online ordering only on the Fresh on Ride app</p>
      <div className="store-buttons">
        <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play"/></a>
        <a href="#"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store"/></a>
      </div>
    </div>

    {/* <!-- Right Section --> */}
    <div className="phone-container">
      <div className="phone-frame">
        <div className="notch"></div>
        <div className="qr-area">
          <img src="https://b.zmtcdn.com/data/o2_assets/98cc4eba0a6f59e728e5223a70fd39551742471514.png" alt="QR Code"/>
          {/* <!-- <p>Scan the QR code to<br>download the app</p> --> */}
        </div>
      </div>
    </div>
  </div>

  {/* Testimonials Section */}
<section className="testimonials-section">
  <div className="container">
    <div className="testimonials-header text-center">
      <h2>What Our Customers Say</h2>
      <p>Don't just take our word for it - hear from our satisfied customers</p>
    </div>
    
    <div className="testimonials-grid">
      {/* Testimonial 1 */}
      <div className="testimonial-card">
        <div className="testimonial-bubble">
          <p>
            Everything I need to order is in one place. Fresh, on-time, and super easy to track. Couldn’t ask for more!
          </p>
        </div>
        <div className="testimonial-author-row">
          <div className="author-avatar">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" alt="Sarah Johnson" />
          </div>
          <div className="author-meta">
            <h4>Sarah Johnson</h4>
            <span>Regular Customer</span>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="testimonial-card">
        <div className="testimonial-bubble">
          <p>
            You’ve been the most helpful app I’ve used. Healthy options and clear nutrition info make choices simple. Love it!
          </p>
        </div>
        <div className="testimonial-author-row">
          <div className="author-avatar">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="Michael Chen" />
          </div>
          <div className="author-meta">
            <h4>Michael Chen</h4>
            <span>Health Enthusiast</span>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="testimonial-card">
        <div className="testimonial-bubble">
          <p>
            I never overbook meals now. Scheduling is a game changer and deliveries are always on time. I LOVE IT!
          </p>
        </div>
        <div className="testimonial-author-row">
          <div className="author-avatar">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" alt="Emily Rodriguez" />
          </div>
          <div className="author-meta">
            <h4>Emily Rodriguez</h4>
            <span>Loyal Customer</span>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</section>


  <Footer/>


    </>
  );
}
