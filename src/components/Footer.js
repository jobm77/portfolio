import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <SendMessage />
      <Socials />
      <Watermark />
      <BackToTopButton />
    </footer>
  );
};

const SendMessage = () => {
  return (
    <div className="upper-footer">
      <div className="contact-form">
        <form className="form">
          <fieldset className="contact-section">
            <p class="legend">ME JOINDRE</p>
            <input
              type="text"
              name="nom"
              id="nom"
              required
              placeholder="Votre nom (obligatoire)"
            />
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Votre e-mail (obligatoire)"
            />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Sujet du message"
            />
            <textarea
              name="message"
              id="message"
              cols="50"
              rows="10"
              required
              placeholder="Message"
            ></textarea>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

const Socials = () => {
  return (
    <div className="socials">
      <a
        href="https://www.facebook.com/jobm77"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-facebook"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/jonathan-bea-mbong-864619235/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a
        href="https://dribbble.com/LNE_Design"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-dribbble"></i>
      </a>
    </div>
  );
};

const Watermark = () => {
  return <div className="watermark">@2023 by Jonathan BEA MBONG</div>;
};

const BackToTopButton = () => {
  return (
    <div className="back-to-top">
      <a href="index.html">
        <i class="fa-solid fa-hand-point-up"></i>
      </a>
    </div>
  );
};

export default Footer;
