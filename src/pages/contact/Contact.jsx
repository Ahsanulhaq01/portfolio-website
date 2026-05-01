import { useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { IoSend } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FiShare2 } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import "./contact.css";

function Contact({ contactRef }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Email SuccessFully Send")
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error ! while sending email")
      });
  };
  return (
    <section
      className="contact-section section"
      ref={contactRef}
      id="contact"
    >
      <div className="contact-section-container">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.4 }}
        viewport={{ amount: 0.2 }}
        className="contact-headings-container"
      >
        <h1 className="header-of-contact">
          Let's build <span>something great</span> together.
        </h1>
        <p className="message-for-clients">
          I'm currently available for freelance projects and full-stack
          engineering roles. Reach out and let's start a conversation.
        </p>
      </motion.div>
      <div className="contact-form-and-contact-info-container">
        <form ref={form} onSubmit={sendEmail}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            viewport={{ amount: 0.2 }}
            className="contact-form"
          >
            <div className="name-and-email-address">
              <div className="name-container">
                <label htmlFor="name-field">FULL NAME</label>
                <input type="text" id="name-field" placeholder="Jane Doe" name="name" required/>
              </div>
              <div className="email-container">
                <label htmlFor="email-field">EMAIL ADDRESS</label>
                <input
                  type="text"
                  name="email"
                  id="name-field"
                  placeholder="Jane@example.com"
                  required
                />
              </div>
            </div>

            <div className="subject-field">
              <label htmlFor="subject-input">SUBJECT</label>
              <input
                type="text"
                placeholder="Project-Inquiry"
                id="subject-input"
                name="subject"
                required
              />
            </div>
            <div className="message-container">
              <label htmlFor="message-textarea">MESSAGE</label>
              <textarea
                name="message"
                id="message-textarea"
                size={50}
                placeholder="How can i help you ?"
                required
              ></textarea>
            </div>
            <button className="send-message" type="submit">
              Send Message{<IoSend size={16} className="send-message-icon" />}
            </button>
          </motion.div>
        </form>
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          viewport={{ amount: 0.2 }}  className="contact-form">
          <div className="name-and-email-address">
            <div className="name-container">
              <label htmlFor="name-field">FULL NAME</label>
              <input type="text" id="name-field" placeholder="Jane Doe" />
            </div>
            <div className="email-container">
              <label htmlFor="email-field">EMAIL ADDRESS</label>
              <input
                type="text"
                id="name-field"
                placeholder="Jane@example.com"
              />
            </div>
          </div>

          <div className="subject-field">
            <label htmlFor="subject-input">SUBJECT</label>
            <input
              type="text"
              placeholder="Project-Inquiry"
              id="subject-input"
            />
          </div>
          <div className="message-container">
            <label htmlFor="message-textarea">MESSAGE</label>
            <textarea
              name="message-to-send"
              id="message-textarea"
              size={50}
              placeholder="How can i help you ?"
            ></textarea>
          </div>
          <button className="send-message">
            Send Message{<IoSend size={16} className="send-message-icon" />}
          </button>
        </motion.div> */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          viewport={{ amount: 0.2 }}
          className="contact-info-container"
        >
          <h3 className="contact-info-heading">Contact Info</h3>
          <div className="email-icon-and-address">
            <HiOutlineMail size={20} color="#53B9D5" />
            <div className="email-address">
              <p>EMAIL ME</p>
              <p>ulhaqahsan276@gmail.com</p>
            </div>
          </div>
          <div className="social-network-container">
            <FiShare2 size={20} color="#63B95E" />
            <div className="social-network-and-links">
              <p>SOCIAL NETWORK</p>
              <div className="links-container">
                <a href="https://github.com/Ahsanulhaq01" target="_blank">
                  <FaGithub color="#a2c6d5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ahsan-ulhaq-8581a82ba/"
                  target="_blank"
                >
                  <FaLinkedin color="#a2c6d5" />
                </a>
                <a href="https://x.com/ulhaqcdr" target="_blank">
                  <FaTwitter color="#a2c6d5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}

export default Contact;
