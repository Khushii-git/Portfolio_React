import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";

const Contact = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ""
  });

 
  // Get them from https://www.emailjs.com/ after setting up your account
  const EMAILJS_SERVICE_ID = "service_03rawuc"; // Replace with your service ID
  const EMAILJS_TEMPLATE_ID = "template_6p5n6nq"; // Replace with your template ID
  const EMAILJS_PUBLIC_KEY = "yznYdc7EVSoY5ZvY9"; // Replace with your public key
  const YOUR_EMAIL = "khanorkarkhushi14@gmail.com"; // Replace with your email address

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false, message: "" });

    const formData = new FormData(form.current);
    const data = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      // Check if EmailJS is configured
      if (
        EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
        EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
        EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY"
      ) {
        // Fallback to mailto if EmailJS is not configured
        const mailtoLink = `mailto:${YOUR_EMAIL}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Name: ${data.user_name}\nEmail: ${data.user_email}\n\nMessage:\n${data.message}`)}`;
        window.location.href = mailtoLink;

        setFormStatus({
          loading: false,
          success: true,
          error: false,
          message: "Opening email client... Please send the message manually."
        });

        form.current.reset();
        setTimeout(() => {
          setFormStatus({ loading: false, success: false, error: false, message: "" });
        }, 5000);
      } else {
        // Use EmailJS to send email
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: data.user_name,
            from_email: data.user_email,
            subject: data.subject,
            message: data.message,
            to_email: YOUR_EMAIL,
          },
          EMAILJS_PUBLIC_KEY
        );

        setFormStatus({
          loading: false,
          success: true,
          error: false,
          message: "Message sent successfully! I'll get back to you soon."
        });

        // Reset form
        form.current.reset();

        // Clear success message after 5 seconds
        setTimeout(() => {
          setFormStatus({ loading: false, success: false, error: false, message: "" });
        }, 5000);
      }
    } catch (error) {
      console.error("Email sending error:", error);
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: "Failed to send message. Please try again or contact me directly."
      });
    }
  };

  return (
    <div className="contact">
      {/* Left Section - Contact Info */}
      <div className="contact-left">
        <div className="contact-header">
          <span>Get in Touch</span>
          <span>Contact Me</span>
          <span>
            Feel free to reach out if you have any questions,
            <br />
            opportunities, or just want to connect!
          </span>
        </div>

        <div className="contact-info">
          <div className="info-item">
            <span className="info-label">Name:</span>
            <span className="info-value">Khushi Khanorkar</span>
          </div>
          <div className="info-item">
            <span className="info-label">Email:</span>
            <a href={`mailto:${YOUR_EMAIL}`} className="info-value info-link">
              {YOUR_EMAIL}
            </a>
          </div>
          <div className="info-item">
            <span className="info-label">GitHub:</span>
            <a
              href="https://github.com/Khushii-git"
              target="_blank"
              rel="noopener noreferrer"
              className="info-value info-link"
            >
              github.com/Khushii-git
            </a>
          </div>
        </div>

        <div className="contact-social">
          <a href="https://github.com/Khushii-git" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/khushi-khanorkar-39831b266"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="LinkedIn" />
          </a>
        </div>

        <div
          className="blur c-blur1"
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="contact-right">
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="form-input"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="form-input"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="form-input"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="form-textarea"
          ></textarea>
          <button
            type="submit"
            className="button form-button"
            disabled={formStatus.loading}
          >
            {formStatus.loading ? "Sending..." : "Send Message"}
          </button>
          {formStatus.message && (
            <div
              className={`form-status ${formStatus.success ? "success" : "error"}`}
            >
              {formStatus.message}
            </div>
          )}
        </form>
        <div
          className="blur c-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Contact;
