
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        alert("Message sent successfully! ✨");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Oops! Something went wrong. Please try emailing me directly.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-glass-card">
        <div className="contact-header">
          <p className="contact-kicker">
            Open to work · Freelance · Collaboration
          </p>
          <h2 className="contact-title">
            Let’s Connect<span>.</span>
          </h2>
          <p className="contact-text">
            I’m open to opportunities, collaborations, or a conversation
            about development and design.
          </p>
        </div>

        <div className="contact-content-grid">
          <div className="contact-left-col">
            <div className="contact-links">
              <a
                href="mailto:brittneydhanoo@gmail.com"
                className="contact-btn email-btn"
              >
                <MdEmail size={19} />
                <span>Email Me</span>
              </a>

              <div className="social-row">
                <a
                  href="https://github.com/SunshineBri"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-btn social-btn"
                >
                  <FaGithub size={18} />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/brittney-dhanoo-176339149"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-btn social-btn"
                >
                  <FaLinkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="contact-location">
              <strong>Based in</strong>
              <span>Trinidad &amp; Tobago</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <h3 className="form-title">Send a Quick Message</h3>

            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                aria-label="Your Name"
                autoComplete="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                aria-label="Your Email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="input-group">
              <textarea
                name="message"
                placeholder="What's on your mind?"
                aria-label="Your Message"
                rows="4"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="form-submit-btn"
              disabled={isSending}
            >
              <span>{isSending ? "Sending..." : "Send Message"}</span>
              <MdSend size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
