import React from "react";

export default function BakeryWebsite() {
  const [showSplash, setShowSplash] = React.useState(true);
  const [isMuted, setIsMuted] = React.useState(true);

  const openWhatsApp = (e) => {
    if (e) e.preventDefault();
    const phone = "919849500663";
    const protocolUrl = `whatsapp://send?phone=${phone}`;
    const webUrl = `https://api.whatsapp.com/send?phone=${phone}`;

    // Try protocol first (often bypasses browser frame blocks)
    window.location.href = protocolUrl;

    // Fallback to web URL in a new tab
    setTimeout(() => {
      window.open(webUrl, "_blank", "noopener,noreferrer");
    }, 500);
  };

  const enterSite = () => {
    setShowSplash(false);
    setIsMuted(false);
  };
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500&family=Playfair+Display:ital,wght@0,400..700;1,400..700&family=Sacramento&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&display=swap');

        :root {
          --bg-color: #fce4ec;
          --accent-pink: #f8bbd0;
          --dark-pink: #880e4f;
          --text-main: #2c3e50;
          --text-muted: #546e7a;
        }

        .splash-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: var(--bg-color);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
        }

        .splash-screen.hide {
          transform: translateY(-100%);
        }

        .splash-logo {
          font-family: 'Sacramento', cursive;
          font-size: 64px;
          color: var(--dark-pink);
          margin-bottom: 30px;
          animation: floating 3s ease-in-out infinite;
        }

        @keyframes floating {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .confetti-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: -1;
        }

        .confetti {
          position: absolute;
          top: -20px;
          border-radius: 2px;
          animation: confetti-fall linear infinite;
        }

        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }


        .enter-button {
          padding: 15px 45px;
          background-color: var(--dark-pink);
          color: white;
          border: none;
          border-radius: 40px;
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(136, 14, 79, 0.2);
        }

        .enter-button:hover {
          transform: scale(1.05);
          background-color: #ad1457;
          box-shadow: 0 15px 30px rgba(136, 14, 79, 0.3);
        }

        .bakery-container {
          font-family: 'Outfit', sans-serif;
          background-color: var(--bg-color); /* Full page is now pink */
          min-height: 100vh;
          color: var(--text-main);
          display: flex;
          flex-direction: column;
        }

        .content-wrapper {
          width: 100%;
          max-width: 1400px; /* Slightly wider for the spread */
          margin: 0 auto;
          padding: 20px 40px; /* Strong horizontal padding for edge alignment */
        }

        /* Navbar */
        .navbar {
          display: flex;
          align-items: center;
          margin-bottom: 30px;
          padding: 0 20px; /* Standard internal padding */
          gap: 20px;
        }

        .navbar-spacer {
          flex: 1; /* This will push everything after it to the right */
        }

        .logo {
          font-family: 'Sacramento', cursive;
          font-size: 34px; /* Smaller */
          color: #000000;
          margin: 0;
          cursor: pointer;
        }

        .nav-links {
          display: flex;
          gap: 30px; /* Closer links */
          font-size: 14px;
          font-weight: 400;
          text-transform: lowercase;
        }

        .nav-links span {
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .nav-links span:hover {
          color: var(--dark-pink);
        }

        .phone-icon {
          font-size: 16px;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
        }

        /* Utility for scrolling */
        html {
          scroll-behavior: smooth;
        }

        .about-section, .contact-section {
          padding: 80px 0;
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }

        .about-text {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          line-height: 1.8;
          color: var(--text-main);
          white-space: pre-line;
          padding: 0 40px;
        }

        .contact-content {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          padding: 40px;
          border-radius: 40px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: inline-block;
          min-width: 300px;
        }

        .contact-item {
          margin: 15px 0;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .contact-item a {
          color: var(--dark-pink);
          text-decoration: none;
          font-weight: 500;
        }


        /* Hero Section */
        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          padding: 0 20px;
        }

        .hero-content {
          max-width: 500px;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: 48px; /* Further reduced */
          line-height: 1;
          letter-spacing: 8px;
          margin: 0 0 15px 0;
          background: linear-gradient(90deg, #f8bbd0, #f48fb1, #ec407a);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block; /* Required for background clip */
          position: relative;
        }

        .hero-sub-logo {
          font-family: 'Sacramento', cursive;
          font-size: 18px;
          color: #cc8b8b;
          -webkit-text-fill-color: #cc8b8b;
          position: absolute;
          top: 32px;
          left: 210px; 
          letter-spacing: 0;
          white-space: nowrap;
          background-clip: initial;
          -webkit-background-clip: initial;
        }

        .cake-name {
          font-weight: 500;
          font-size: 16px;
          margin-bottom: 8px;
        }

        .cake-description {
          font-size: 13px;
          line-height: 1.4;
          color: var(--text-muted);
          margin-bottom: 15px;
          max-width: 400px;
        }

        .more-link {
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.3s ease;
        }

        .more-link:hover {
          transform: translateX(10px);
        }

        .image-container {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          position: relative;
        }

        .hero-image {
          width: 450px; /* Increased horizontally */
          height: auto;
          object-fit: contain;
          animation: dancing 3s ease-in-out infinite;
          cursor: pointer;
        }

        .sound-toggle {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.6);
          border: none;
          padding: 10px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 20px;
          backdrop-filter: blur(5px);
          transition: transform 0.2s ease;
          z-index: 10;
        }
        
        .sound-toggle:hover {
          transform: scale(1.1);
          background: rgba(255, 255, 255, 0.8);
        }

        @keyframes dancing {
          0% { transform: scale(1) translateY(0); }
          25% { transform: scale(1.03) translateY(-10px); }
          50% { transform: scale(1.01) translateY(0); }
          75% { transform: scale(1.03) translateY(-10px); }
          100% { transform: scale(1) translateY(0); }
        }

        /* Best Sellers - Specific Section Highlight */
        .best-sellers-section {
          background-color: #f8bbd0;
          width: 100%;
          padding: 40px 0; /* Further reduced */
          margin-top: 20px; /* Further reduced */
        }

        .best-sellers-content {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          padding: 0 20px;
        }

        .section-title {
          font-family: 'Sacramento', cursive;
          font-size: 48px;
          font-weight: 900;
          font-style: italic;
          margin-bottom: 60px;
          color: #CE4676;
          letter-spacing: 1px;
          text-align: center;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 50px; /* Even more gap for maximum neatness */
          width: 100%;
        }

        .product-item {
          width: 100%;
          max-width: 250px; /* Further reduction for breathing room */
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          padding: 15px;
          border-radius: 28px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid rgba(255, 255, 255, 0.15);
          margin: 0 auto;
        }

        .product-item:hover {
          transform: translateY(-15px) scale(1.02);
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 20px 40px rgba(136, 14, 79, 0.1);
        }

        .product-image {
          width: 100%;
          height: 200px; /* Reduced height for neater look */
          border-radius: 22px;
          object-fit: cover;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          margin-bottom: 20px;
          transition: transform 0.5s ease;
        }

        .product-item:hover .product-image {
          transform: scale(1.05);
        }

        .product-name {
          font-family: 'Playfair Display', serif;
          font-size: 16px; /* Slightly smaller */
          font-weight: 600;
          margin-bottom: 5px;
          color: var(--text-main);
          text-align: center;
        }

        .product-price {
          font-size: 16px;
          font-weight: 500;
          color: var(--dark-pink);
          margin-bottom: 12px;
        }

        .order-button {
          background-color: #880e4f;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 10px;
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.3s ease;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          box-sizing: border-box;
        }

        .order-button:hover {
          background-color: #ad1457;
        }

        .order-link {
          text-decoration: none;
          width: 100%;
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-content {
            margin: 0 auto;
          }
          .image-container {
            justify-content: center;
          }
          .hero-sub-logo {
            right: 50%;
            transform: translateX(200%);
          }
        }
      `}</style>

      <div className={`splash-screen ${!showSplash ? "hide" : ""}`}>
        <div className="confetti-container">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="confetti"
              style={{
                left: `${(i * 1.1) % 100}%`,
                width: `${4 + (i % 6)}px`,
                height: `${4 + (i % 6)}px`,
                backgroundColor: [
                  "#f8bbd0",
                  "#ffcc80",
                  "#f06292",
                  "#880e4f",
                  "#ffffff",
                ][i % 5],
                animationDelay: `${i * 0.05}s`,
                animationDuration: `${1.5 + (i % 3)}s`,
                opacity: 0.8,
              }}
            />
          ))}
        </div>
        <h1 className="splash-logo"> theButteredElephant 🐘</h1>
        <button className="enter-button" onClick={enterSite}>
          Step Into My Little Dream
        </button>
      </div>

      <div className="bakery-container">
        {/* Main Content (Hero and Nav) */}
        <div className="content-wrapper">
          <nav className="navbar">
            <h1 className="logo"> theButteredElephant 🐘</h1>
            <div className="navbar-spacer"></div>
            <div className="nav-links">
              <span
                onClick={() =>
                  document
                    .getElementById("gallery")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                gallery
              </span>
              <span
                onClick={() =>
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                about us
              </span>
              <span
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                contacts
              </span>
            </div>
            <a href="tel:+919849500663" className="phone-icon">
              📞
            </a>
          </nav>

          <main className="hero">
            <div className="hero-content">
              <h1 className="hero-title">
                HOME<span className="hero-sub-logo">lavanya</span>
                <br />
                BAKERY
              </h1>

              <div className="cake-name">Every bake is a promise</div>
              <p className="cake-description">
                The Buttered Elephant is a piece of a little girl’s dream,
                brought to life with love and passion. What once started as a
                simple joy has now grown into something deeply meaningful. I
                promise to deliver nothing less than the finest quality, where
                every bite feels warm, comforting, and truly special.
              </p>
            </div>

            <div className="image-container">
              <video
                src="https://res.cloudinary.com/dhtjil4zt/video/upload/v1775065339/vv_td7vax.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="hero-image"
                onClick={() => setIsMuted(!isMuted)}
              />
              <button
                className="sound-toggle"
                onClick={() => setIsMuted(!isMuted)}
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? "🔇" : "🔊"}
              </button>
            </div>
          </main>
        </div>

        {/* Best Sellers Section */}
        <section id="gallery" className="best-sellers-section">
          <div className="best-sellers-content">
            <h2 className="section-title">From the Elephant Kitchen</h2>
            <div className="products-grid">
              {[
                {
                  name: "Chocolate Cake",
                  price: "",
                  url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775055336/3_oc7kwn.jpg",
                },
                {
                  name: "sheet cake (Milk and chocolate available)",
                  price: "",
                  url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775055976/6_vek6t4.jpg",
                },
                {
                  name: "Brownie slab(1/2kg)",
                  price: "",
                  url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775059128/3_sw8u2t.jpg",
                },
                {
                  name: "choco chip cookie tin",
                  price: "",
                  url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775060140/1_bwrgmq.jpg",
                },
                {
                  name: "vanilla sheet cake",
                  price: "",
                  url: "https://res.cloudinary.com/dhtjil4zt/image/upload/q_auto/f_auto/v1775055274/1_ae2mhj.jpg",
                },
                {
                  name: "Brownie slab (1kg)",
                  price: "",
                  url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775059128/6_ve3mpj.jpg",
                },
                {
                  name: "pintresty vanilla milk chocolate cake",
                  price: "",
                  url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775059127/1_uvgdjt.jpg",
                },
                {
                  name: "vanilla cupcakes",
                  price: "",
                  url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775059129/8_i0bfr6.jpg",
                },
                {
                  name: "Blondies",
                  price: "",
                  url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775056296/Screenshot_2026-04-01_at_8.41.10_PM_lcgtog.png",
                },
                {
                  name: "Cupcakes",
                  price: "",
                  url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775059128/5_tnmizb.jpg",
                },
                {
                  name: "Blueberry Cake",
                  price: "",
                  url: "https://res.cloudinary.com/dhtjil4zt/image/upload/q_auto/f_auto/v1775055330/2_xuxrpf.jpg",
                },
                {
                  name: "Pistachio Kunafa Chocolate",
                  price: "",
                  url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775059129/9_vqv5qd.jpg",
                },
                {
                  name: "Classic vanilla",
                  price: "",
                  url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775056200/Screenshot_2026-04-01_at_8.39.03_PM_uws1vv.png",
                },
                {
                  name: "classic blueberry",
                  price: "",
                  url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775056926/5_i5go4j.png",
                },
                {
                  name: "chocolate cupcakes",
                  price: "",
                  url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775059129/7_limeqf.jpg",
                },
                {
                  name: "Tiramisu",
                  price: "",
                  url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775060150/3_etesmh.jpg",
                },
                {
                  name: "Nutella Brownies",
                  price: "",
                  url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775059128/2_v2lxv9.jpg",
                },
                {
                  name: "Brownie Slab",
                  price: "",
                  url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775059128/4_h2isuf.jpg",
                },
                {
                  name: "Red velvet Cake",
                  price: "",
                  url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775056833/copy_of_8_r9e1wh_fe1e87.png",
                },
                {
                  name: "Sen Sebastian Basque Cheesecake",
                  price: "",
                  url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775060154/4_ugdy2a.jpg",
                },
                {
                  name: "Vanilla sponge cake",
                  price: "",
                  url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775059021/Gemini_Generated_Image_og0vxbog0vxbog0v_gplyd0.png",
                },
                {
                  name: "Brownies(white & Dark chocolate)",
                  price: "",
                  url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775056440/9_fewo58.png",
                },
                {
                  name: "Tim Tams",
                  price: "",
                  url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775060145/2_jwi4vs.jpg",
                },
                {
                  name: "Blueberry cake",
                  price: "",
                  url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775056190/Screenshot_2026-04-01_at_8.39.27_PM_vsyghj.png",
                },
              ].map((product, index) => (
                <div className="product-item" key={index}>
                  <img
                    src={product.url}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="product-name">{product.name}</div>
                  <div className="product-price">{product.price}</div>
                  <a
                    href={`https://wa.me/919849500663?text=Hi%20Lavanya,%20I%20want%20to%20order%20${encodeURIComponent(
                      product.name
                    )}%20from%20The%20Buttered%20Elephant%20🧈🐘`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="order-button"
                  >
                    Order Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="about-section">
          <h2 className="section-title">A Piece of My Dream</h2>
          <div className="about-text">
            The Buttered Elephant is more than just a bakery — it’s a dream that
            grew with me.
            {"\n\n"}
            What started as a simple love for baking as a little girl has now
            turned into something I pour my heart into every single day. Every
            cake, every brownie, every little treat you see here carries that
            same passion, patience, and joy.
            {"\n\n"}I believe baking is not just about taste, but about creating
            moments — warm, comforting, and memorable. That’s why everything at
            The Buttered Elephant is made with intention, using the finest
            ingredients and a promise to deliver nothing but the best quality.
            {"\n\n"}
            For me, this isn’t just baking.
            {"\n"}
            It’s love, it’s dedication, and it’s a piece of my dream — shared
            with you.
            {"\n\n"}— with love, Lavanya 🐘
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="contact-section">
          <h2 className="section-title">
            Let’s create something sweet together ✨
          </h2>
          <div className="contact-content">
            <p
              style={{ marginBottom: "20px", fontSize: "16px", color: "#555" }}
            >
              Whether you’re celebrating something special or simply craving a
              little indulgence, I’d love to be a part of it.
            </p>
            <div className="contact-item">
              <span>📞</span> <a href="tel:+919849500663">+91 9849500663</a>
            </div>
            <div className="contact-item">
              <span>📩</span>{" "}
              <a href="mailto:thebutteredelephant@gmail.com">
                thebutteredelephant@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <span>📍</span> <span>Hyderabad</span>
            </div>
            <p
              style={{
                marginTop: "25px",
                fontSize: "14px",
                fontStyle: "italic",
              }}
            >
              You can also DM on Instagram or message on WhatsApp for quick
              responses.
            </p>
            <div style={{ marginTop: "20px" }}>
              <a
                href="https://api.whatsapp.com/send?phone=919849500663"
                target="_blank"
                rel="noopener noreferrer"
                className="order-button"
                onClick={openWhatsApp}
                style={{
                  textDecoration: "none",
                  display: "inline-block",
                  width: "auto",
                  padding: "12px 30px",
                }}
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
          <p
            style={{
              marginTop: "40px",
              fontFamily: "Sacramento",
              fontSize: "24px",
            }}
          >
            — with love, Lavanya 🧈🐘
          </p>
        </section>
      </div>
    </>
  );
}
