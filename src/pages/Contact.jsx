import React, { useEffect } from "react";
import "./Contact.css";

function Contact() {
  useEffect(() => {
    document.title = "Dmitry Lean | Contact";
  }, []);

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-form">
            <h2 className="contact-title">
              Contact Me!
            </h2>

            <form>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />

              <label>Drop your e-mail</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                required
              />

              <label>How can I help?</label>
              <textarea
                placeholder="Tell us about your project..."
                required
              ></textarea>

              <button type="submit" className="btn-submit">
                Send message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;