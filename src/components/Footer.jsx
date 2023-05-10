import React from "react";
import "../styles/footer.css";
import ContactForm from "./footer/ContactForm";
import Socials from "./footer/Socials";
import Watermark from "./footer/Watermark";

const Footer = () => {
  return (
    <footer id="footer">
      <ContactForm/>
      <Socials />
      <Watermark />
    </footer>
  );
};

export default Footer;
