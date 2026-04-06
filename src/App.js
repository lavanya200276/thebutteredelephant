import React from "react";
export default function BakeryWebsite() {
  const [showSplash, setShowSplash] = React.useState(true);
  const [isMuted, setIsMuted] = React.useState(true);
  const openWhatsApp = (e, productName = "") => {
    if (e) e.preventDefault();
    const phone = "919849500663";
    const text = productName 
      ? `Hi Lavanya, I want to order ${productName} from The Buttered Elephant 🧈🐘`
      : "Hi Lavanya, I want to order from The Buttered Elephant 🧈🐘";
    const protocolUrl = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(text)}`;
    const webUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.location.href = protocolUrl;
    setTimeout(() => {
      window.open(webUrl, "_blank", "noopener,noreferrer");
    }, 500);
  };
  const enterSite = () => {
    setShowSplash(false);
    setIsMuted(false);
  };
  const products = [
    { name: "Chocolate Cake 1kg", price: "₹900", url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775055336/3_oc7kwn.jpg" },
    { name: "Sheet Cake 1/2kg (Milk & Choco)", price: "₹450", url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775055976/6_vek6t4.jpg" },
    { name: "Brownie Slab (1/2kg)", price: "₹450", url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775059128/3_sw8u2t.jpg" },
    { name: "Choco Chip Cookie Tin", price: "₹380", url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775060140/1_bwrgmq.jpg" },
    { name: "Vanilla Sheet Cake 1/2kg", price: "₹450", url: "https://res.cloudinary.com/dhtjil4zt/image/upload/q_auto/f_auto/v1775055274/1_ae2mhj.jpg" },
    { name: "Brownie Slab (1kg)", price: "₹800", url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775059128/6_ve3mpj.jpg" },
    { name: "Pinteresty Vanilla Milk Choco (600gms)", price: "₹650", url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775059127/1_uvgdjt.jpg" },
    { name: "Vanilla Cupcakes (Pack of 6)", price: "₹300", url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775059129/8_i0bfr6.jpg" },
    { name: "Blondies (1/2kg slab)", price: "₹600", url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775056296/Screenshot_2026-04-01_at_8.41.10_PM_lcgtog.png" },
    { name: "Cupcakes Mix (chocolate & vanilla with frosting 6pcs)", price: "₹450", url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775059128/5_tnmizb.jpg" },
    { name: "Blueberry Cake (1kg)", price: "₹1000", url: "https://res.cloudinary.com/dhtjil4zt/image/upload/q_auto/f_auto/v1775055330/2_xuxrpf.jpg" },
    { name: "Pistachio Kunafa Chocolate", price: "₹120", url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775059129/9_vqv5qd.jpg" },
    { name: "Classic Vanilla (1/2kg)", price: "₹550", url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775056200/Screenshot_2026-04-01_at_8.39.03_PM_uws1vv.png" },
    { name: "Classic Blueberry (1/2kg)", price: "₹650", url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775056926/5_i5go4j.png" },
    { name: "Chocolate Cupcakes (pack of 6 with frosting)", price: "₹450", url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775059129/7_limeqf.jpg" },
    { name: "Tiramisu mini Box (can customise the quantity)", price: "₹160", url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775060150/3_etesmh.jpg" },
    { name: "Nutella Brownies (1/2kg)", price: "₹550", url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775059128/2_v2lxv9.jpg" },
    { name: "Brownie Slab (750gms)", price: "₹650", url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775059128/4_h2isuf.jpg" },
    { name: "Red Velvet Cake (1/2kg)", price: "₹630", url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775056833/copy_of_8_r9e1wh_fe1e87.png" },
    { name: "San Sebastian Cheesecake with chocolate sauce (1 slice)", price: "₹380", url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775060154/4_ugdy2a.jpg" },
    { name: "Vanilla Sponge Cake (1/2kg)", price: "₹550", url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775059021/Gemini_Generated_Image_og0vxbog0vxbog0v_gplyd0.png" },
    { name: "Duo Brownies (1100gms)", price: "₹850", url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775056440/9_fewo58.png" },
    { name: "Tim Tams (pack of 20)", price: "₹240", url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775060145/2_jwi4vs.jpg" },
    { name: "Blueberry Delight (1/2kg)", price: "₹550", url: "https://res.cloudinary.com/dhtjil4zt/image/upload/v1775056190/Screenshot_2026-04-01_at_8.39.27_PM_vsyghj.png" },
  ];
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
        * { box-sizing: border-box; }
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
          padding: 20px;
          text-align: center;
        }
        .splash-screen.hide {
          transform: translateY(-100%);
        }
        .splash-logo {
          font-family: 'Sacramento', cursive;
          font-size: clamp(40px, 10vw, 64px);
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
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .enter-button {
          padding: 15px 45px;
          background-color: var(--dark-pink);
          color: white;
          border: none;
          border-radius: 40px;
          font-family: 'Playfair Display', serif;
          font-size: clamp(16px, 4vw, 20px);
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
          background-color: var(--bg-color);
          min-height: 100vh;
          color: var(--text-main);
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .content-wrapper {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 20px clamp(20px, 5%, 40px);
        }
        .navbar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 30px;
          gap: 15px;
        }
        .logo {
          font-family: 'Sacramento', cursive;
          font-size: clamp(28px, 6vw, 34px);
          color: #000000;
          margin: 0;
          cursor: pointer;
          white-space: nowrap;
        }
        .nav-links {
          display: flex;
          gap: clamp(15px, 4vw, 30px);
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
          font-size: 18px;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
        }
        html { scroll-behavior: smooth; }
        .hero {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: center;
          padding: 40px 0;
        }
        .hero-content {
          max-width: 500px;
        }
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 8vw, 48px);
          line-height: 1.1;
          letter-spacing: 4px;
          margin: 0 0 15px 0;
          background: linear-gradient(90deg, #f8bbd0, #f48fb1, #ec407a);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          position: relative;
        }
        .hero-sub-logo {
          font-family: 'Sacramento', cursive;
          font-size: 0.4em;
          color: #cc8b8b;
          -webkit-text-fill-color: #cc8b8b;
          position: absolute;
          top: 0.7em;
          left: 4.5em; 
          letter-spacing: 0;
          white-space: nowrap;
          background-clip: initial;
        }
        .cake-name {
          font-weight: 500;
          font-size: 18px;
          margin-bottom: 8px;
        }
        .cake-description {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-muted);
          margin-bottom: 15px;
        }
        .image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 100%;
        }
        .hero-image {
          width: 100%;
          max-width: 450px;
          height: auto;
          object-fit: contain;
          animation: dancing 3s ease-in-out infinite;
          cursor: pointer;
          border-radius: 20px;
        }
        .sound-toggle {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background: rgba(255, 255, 255, 0.6);
          border: none;
          padding: 8px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 18px;
          backdrop-filter: blur(5px);
          z-index: 10;
        }
        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 30px;
          }
          .hero-content {
            margin: 0 auto;
          }
          .hero-sub-logo {
            left: 50%;
            transform: translateX(10%);
          }
        }
        @keyframes dancing {
          0%, 100% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.02) translateY(-10px); }
        }
        .best-sellers-section {
          background-color: #f8bbd0;
          width: 100%;
          padding: 60px 0;
        }
        .best-sellers-content {
          max-width: 1400px;
          margin: 0 auto;
          text-align: center;
          padding: 0 20px;
        }
        .section-title {
          font-family: 'Sacramento', cursive;
          font-size: clamp(36px, 8vw, 48px);
          font-weight: 900;
          font-style: italic;
          margin-bottom: 40px;
          color: #CE4676;
          letter-spacing: 1px;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          width: 100%;
        }
        @media (max-width: 650px) {
          .products-grid {
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 20px;
          }
        }
        .product-item {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          padding: 20px;
          border-radius: 28px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid rgba(255, 255, 255, 0.15);
          max-width: 400px;
          margin: 0 auto;
          width: 100%;
        }
        .product-item:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 20px 40px rgba(136, 14, 79, 0.1);
        }
        .product-image {
          width: 100%;
          aspect-ratio: 1/1;
          border-radius: 22px;
          object-fit: cover;
          margin-bottom: 15px;
        }
        .product-name {
          font-family: 'Playfair Display', serif;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 5px;
          color: var(--text-main);
          text-align: center;
        }
        .product-price {
          font-size: 16px;
          font-weight: 500;
          color: var(--dark-pink);
          margin-bottom: 15px;
        }
        .order-button {
          background-color: #880e4f;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 12px;
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
        }
        .order-button:hover {
          background-color: #ad1457;
        }
        .about-section, .contact-section {
          padding: 60px 20px;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        .about-text {
          font-family: 'Playfair Display', serif;
          font-size: clamp(16px, 4vw, 20px);
          line-height: 1.8;
          color: var(--text-main);
          white-space: pre-line;
        }
        .contact-content {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          padding: clamp(20px, 5vw, 40px);
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: inline-block;
          width: 100%;
          max-width: 500px;
        }
        .contact-item {
          margin: 15px 0;
          font-size: clamp(14px, 4vw, 18px);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .contact-item a {
          color: var(--dark-pink);
          text-decoration: none;
          font-weight: 500;
          word-break: break-word;
        }
      `}</style>
      <div className={`splash-screen ${!showSplash ? "hide" : ""}`}>
        <div className="confetti-container">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="confetti"
              style={{
                left: `${(i * 1.7) % 100}%`,
                width: `${4 + (i % 6)}px`,
                height: `${4 + (i % 6)}px`,
                backgroundColor: [ "#f8bbd0", "#ffcc80", "#f06292", "#880e4f", "#ffffff" ][i % 5],
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
        <div className="content-wrapper">
          <nav className="navbar">
            <h1 className="logo" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}> theButteredElephant 🐘</h1>
            <div className="nav-links">
              <span onClick={() => document.getElementById("gallery").scrollIntoView({ behavior: "smooth" })}>gallery</span>
              <span onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>about us</span>
              <span onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>contacts</span>
            </div>
            <a href="tel:+919849500663" className="phone-icon">📞</a>
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
                The Buttered Elephant is a piece of a little girl’s dream, brought to life with love and passion. 
                I promise to deliver nothing less than the finest quality, where every bite feels warm, 
                comforting, and truly special.
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
              >
                {isMuted ? "🔇" : "🔊"}
              </button>
            </div>
          </main>
        </div>
        <section id="gallery" className="best-sellers-section">
          <div className="best-sellers-content">
            <h2 className="section-title">From the Elephant Kitchen</h2>
            <div className="products-grid">
              {products.map((product, index) => (
                <div className="product-item" key={index}>
                  <img src={product.url} alt={product.name} className="product-image" />
                  <div className="product-name">{product.name}</div>
                  <div className="product-price">{product.price}</div>
                  <button onClick={(e) => openWhatsApp(e, product.name)} className="order-button">
                    Order Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="about-section">
          <h2 className="section-title">A Piece of My Dream</h2>
          <div className="about-text">
            The Buttered Elephant is more than just a bakery — it’s a dream that grew with me.
            {"\n\n"}
            What started as a simple love for baking as a little girl has now turned into something 
            I pour my heart into every single day. Every cake, brownie, and treat carries 
            that same passion, patience, and joy.
            {"\n\n"}
            For me, this isn’t just baking. It’s love, dedication, and a piece of my dream — shared with you.
            {"\n\n"}— with love, Lavanya 🐘
          </div>
        </section>
        <section id="contact" className="contact-section">
          <h2 className="section-title">Let’s create something sweet together ✨</h2>
          <div className="contact-content">
            <p style={{ marginBottom: "20px", fontSize: "16px", color: "#555" }}>
              Whether you’re celebrating something special or simply craving a little indulgence, 
              I’d love to be a part of it.
            </p>
            <div className="contact-item">
              <span>📞</span> <a href="tel:+919849500663">+91 9849500663</a>
            </div>
            <div className="contact-item">
              <span>📩</span> <a href="mailto:thebutteredelephant@gmail.com">thebutteredelephant@gmail.com</a>
            </div>
            <div className="contact-item">
              <span>📍</span> <span>Hyderabad</span>
            </div>
            <div style={{ marginTop: "25px" }}>
              <button onClick={(e) => openWhatsApp(e)} className="order-button" style={{ width: "auto", padding: "12px 30px" }}>
                Message on WhatsApp
              </button>
            </div>
          </div>
          <p style={{ marginTop: "40px", fontFamily: "Sacramento", fontSize: "28px" }}>
            — with love, Lavanya 🧈🐘
          </p>
        </section>
      </div>
    </>
  );
}
