import React from "react";
import { ReactComponent as MailIcon } from "../../../assets/images/icons/mail-icon.svg";

function Contact() {
  return (
    <section className="contact">
      <div className="contact__content">
        <h2>Get in touch</h2>
        <p>
          If you'd like to have a chat about my work or have any questions drop
          me an email.
        </p>
        <a
          href="mailto:lukeowaincharles@gmail.com"
          className="btn btn-light btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MailIcon /> Say hello
        </a>
      </div>
    </section>
  );
}

export default Contact;
