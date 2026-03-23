import "./ContactFloat.css";
import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const message = encodeURIComponent("Hello, I am visiting your website and would like to get some information. Please assist me.\nThank you!");

const ContactFloat = () => {
  return (
    <div className="contact-float">
      <a
  href={`https://wa.me/918709413223?text=${message}`}
  target="_blank"
  rel="noopener noreferrer"
  className="float-icon whatsapp"
>

        <FaWhatsapp />
      </a>
      <a href="tel:+918709413223" className="float-icon call" title="Call Now">
        <FaPhoneAlt />
      </a>
    </div>
  );
};

export default ContactFloat;
