import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <section>
  {/* Background video */}
  <video 
    src="https://media.gettyimages.com/id/950061532/video/fishing-boat-trawler-vessel-huge-catch-of-fish.mp4?s=mp4-640x640-gi&k=20&c=uqkfnsF3Yf3o3bcf1-t5D3iLCgaPFoRCGEwQwDYggqU=" 
    autoPlay 
    loop 
    muted
  >
  </video>

  {/* Hero content */}
  <div className="hero-content container">
    <h1><strong>Fresh on Ride</strong></h1>
    <h2>India’s #1 <br /> food delivery app</h2>
    <p>Experience fast & easy online ordering on the Fresh on Ride app</p>

    <div className="app-buttons">
      <img src="/assets/images/googlepay.avif" alt="Get it on Google Play" />
      <img src="/assets/images/appstore.avif" alt="Download on the App Store" />
    </div>
  </div>

  <div className="scroll-down">
    <span>Scroll down</span>
    <i className="fa-solid fa-circle-chevron-down"/>
  </div>
</section>

{/* animation */}

<section className="animation">
  <div className="scene">
    {/* Left Road */}
    <svg viewBox="0 0 400 500">
      <path className="road" d="M 300,450 C 250,350 200,250 150,150 100,80 50,50 20,20" />
  
      {/* Green Location Pins */}
      <g transform="translate(300,450)">
        <path
          className="location-pin"
          d="M12 2C7.03 2 3 6.03 3 11C3 15.25 7.55 21.14 11.25 25.38C11.66 25.83 12.34 25.83 12.75 25.38C16.45 21.14 21 15.25 21 11C21 6.03 16.97 2 12 2Z"
        />
        <circle cx="12" cy="11" r="3.5" fill="white" />
      </g>
  
      <g transform="translate(150,150)">
        <path
          className="location-pin"
          d="M12 2C7.03 2 3 6.03 3 11C3 15.25 7.55 21.14 11.25 25.38C11.66 25.83 12.34 25.83 12.75 25.38C16.45 21.14 21 15.25 21 11C21 6.03 16.97 2 12 2Z"
        />
        <circle cx="12" cy="11" r="3.5" fill="white" />
      </g>
  
      <g transform="translate(20,20)">
        <path
          className="location-pin"
          d="M12 2C7.03 2 3 6.03 3 11C3 15.25 7.55 21.14 11.25 25.38C11.66 25.83 12.34 25.83 12.75 25.38C16.45 21.14 21 15.25 21 11C21 6.03 16.97 2 12 2Z"
        />
        <circle cx="12" cy="11" r="3.5" fill="white" />
      </g>
  
      {/* 🚗 Realistic Top-view Red Car */}
      <g className="car">
        <g className="top-car">
          <rect x="0" y="0" width="40" height="20" rx="6" ry="6" fill="#e63946" stroke="#222" strokeWidth="1.2" />
          <rect x="10" y="3" width="20" height="14" rx="3" ry="3" fill="#87CEEB" opacity="0.7" stroke="#222" strokeWidth="0.5" />
          <rect x="-1" y="2" width="3" height="16" fill="#333" />
          <rect x="38" y="2" width="3" height="16" fill="#333" />
          <circle cx="1" cy="4" r="1.5" fill="#ffeb3b" />
          <circle cx="1" cy="16" r="1.5" fill="#ffeb3b" />
          <circle cx="39" cy="4" r="1.5" fill="#f00" />
          <circle cx="39" cy="16" r="1.5" fill="#f00" />
        </g>
      </g>
    </svg>
  
    {/* Center Caption */}
    <div className="caption">
      <h1>Better Food, Better Journey</h1>
    </div>
  
    {/* Right Road */}
    <svg viewBox="0 0 400 500">
      <path className="road" d="M 100,450 C 150,350 200,250 250,150 300,100 350,80 380,50" />
  
      {/* Green Location Pins */}
      <g transform="translate(100,450)">
        <path
          className="location-pin"
          d="M12 2C7.03 2 3 6.03 3 11C3 15.25 7.55 21.14 11.25 25.38C11.66 25.83 12.34 25.83 12.75 25.38C16.45 21.14 21 15.25 21 11C21 6.03 16.97 2 12 2Z"
        />
        <circle cx="12" cy="11" r="3.5" fill="white" />
      </g>
  
      <g transform="translate(250,150)">
        <path
          className="location-pin"
          d="M12 2C7.03 2 3 6.03 3 11C3 15.25 7.55 21.14 11.25 25.38C11.66 25.83 12.34 25.83 12.75 25.38C16.45 21.14 21 15.25 21 11C21 6.03 16.97 2 12 2Z"
        />
        <circle cx="12" cy="11" r="3.5" fill="white" />
      </g>
  
      <g transform="translate(380,50)">
        <path
          className="location-pin"
          d="M12 2C7.03 2 3 6.03 3 11C3 15.25 7.55 21.14 11.25 25.38C11.66 25.83 12.34 25.83 12.75 25.38C16.45 21.14 21 15.25 21 11C21 6.03 16.97 2 12 2Z"
        />
        <circle cx="12" cy="11" r="3.5" fill="white" />
      </g>
  
      {/* 🚙 Realistic Top-view Blue Car */}
      <g className="car2">
        <g className="top-car">
          <rect x="0" y="0" width="40" height="20" rx="6" ry="6" fill="#0077b6" stroke="#111" strokeWidth="1.2" />
          <rect x="10" y="3" width="20" height="14" rx="3" ry="3" fill="#a7d8ff" opacity="0.7" stroke="#111" strokeWidth="0.5" />
          <rect x="-1" y="2" width="3" height="16" fill="#333" />
          <rect x="38" y="2" width="3" height="16" fill="#333" />
          <circle cx="1" cy="4" r="1.5" fill="#ffeb3b" />
          <circle cx="1" cy="16" r="1.5" fill="#ffeb3b" />
          <circle cx="39" cy="4" r="1.5" fill="#f00" />
          <circle cx="39" cy="16" r="1.5" fill="#f00" />
        </g>
      </g>
    </svg>
  </div>
  
</section>

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
