import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle your form submission logic here (e.g., EmailJS, Formspree, etc.)
    console.log("Form submitted:", formData);
  };

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
          {/* Left Column: Primary Action Links + Location */}
          <div className="contact-left-col">
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

            <div className="contact-location">
              <strong>Based in</strong>
              <span>Trinidad & Tobago</span>
            </div>
          </div>

          {/* Right Column: Direct Email Form Box */}
          <form onSubmit={handleSubmit} className="contact-form">
            <h3 className="form-title">Send a Quick Message</h3>
            
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="input-group">
              <input 
                type="email" 
                placeholder="Your Email" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="input-group">
              <textarea 
                placeholder="What's on your mind?" 
                rows="4" 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button type="submit" className="form-submit-btn">
              <span>Send Message</span>
              <MdSend size={16} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;