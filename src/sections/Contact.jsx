import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-glass-card">

        <h2 className="contact-title">Let’s Connect</h2>

        <p className="contact-kicker">
          Open to work • Freelance • Collaboration
        </p>

        <p className="contact-text">
          I’m open to opportunities, collaborations, or just a conversation about development and design.
        </p>

        <div className="contact-stats">
          <div>
            <strong>Based in</strong>
            <span>Trinidad & Tobago</span>
          </div>

          <div>
            <strong>Response</strong>
            <span>Within 24h</span>
          </div>

          <div>
            <strong>Status</strong>
            <span>Available</span>
          </div>
        </div>

        <div className="contact-links">
          <a href="mailto:brittneydhanoo@gmail.com">
            <MdEmail size={20} />
            <span>Email Me</span>
          </a>

          <a
            href="https://github.com/SunshineBri"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/brittney-dhanoo-176339149"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;