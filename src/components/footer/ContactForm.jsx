import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xknayvkp");
  const navigate = useNavigate();
  if (state.succeeded) {
    setTimeout(() => navigate("/"), 3000);
    return <p>Merci de m'avoir contacté, je reviens vers vous au plus vite!</p>;
  }
  return (
      <form onSubmit={handleSubmit} className="contact-form">
      <p className="legend">ME JOINDRE</p>
      <fieldset className="contact-section">
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Votre e-mail (obligatoire)"
        required="required"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <input
        id="subject"
        type="text"
        name="subject"
        placeholder="Sujet du message"
      />
      <ValidationError 
        prefix="subject" 
        field="subject"
        errors={state.errors}
      />
      <textarea
        name="message"
        id="message"
        cols="50"
        rows="10"
        placeholder="Votre message"
        required="required"
      >
      </textarea>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" className="send" disabled={state.submitting}>
        Envoyer
      </button>
    </fieldset>
    
    </form>
  );
}

export default ContactForm;