import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact</h2>

        <p>
          Let’s connect — I’m open to opportunities, collaborations, or just a chat about development.
        </p>

        <div className="contact-links">
          <a href="mailto:brittneydhanoo@gmail.com">
            <MdEmail size={20} />
            <span>Email</span>
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