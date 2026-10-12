import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-divider" />

      <div className="footer-main">
        <div className="footer-message">
          <p className="footer-title">Crafted with intention.</p>
          <p className="footer-tagline">
            A little creativity in every detail. ✦
          </p>
        </div>

        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
        >
          ↑
        </button>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Brittney Dhanoo
        </span>
      </div>
    </footer>
  );
}

export default Footer;