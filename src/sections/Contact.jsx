import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Contact.css"; // <-- ADD THIS LINE TO FIX THE STYLING DISCONNECT!

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-glass-card">
        
        <div className="contact-header">
          <p className="contact-kicker">Open to work • Freelance • Collaboration</p>
          <h2 className="contact-title">Let’s Connect</h2>
          <p className="contact-text">
            I’m open to opportunities, collaborations, or just a conversation about development and design.
          </p>
        </div>

        <div className="contact-content-grid">
          {/* Quick Stats Grid Column */}
          <div className="contact-stats">
            <div className="stat-box">
              <strong>Based in</strong>
              <span>Trinidad & Tobago</span>
            </div>

            <div className="stat-box">
              <strong>Response</strong>
              <span>Within 24h</span>
            </div>

            <div className="stat-box">
              <strong>Status</strong>
              <span>Available</span>
            </div>
          </div>

          {/* Action Links Grid Column */}
          <div className="contact-links">
            <a href="mailto:brittneydhanoo@gmail.com" className="contact-btn email-btn">
              <MdEmail size={20} />
              <span>Email Me</span>
            </a>

            <div className="social-row">
              <a
                href="https://github.com/SunshineBri"
                target="_blank"
                rel="noreferrer"
                className="contact-btn social-btn"
              >
                <FaGithub size={20} />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/brittney-dhanoo-176339149"
                target="_blank"
                rel="noreferrer"
                className="contact-btn social-btn"
              >
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;