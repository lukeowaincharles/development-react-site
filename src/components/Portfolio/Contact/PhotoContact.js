import React from "react";
import { ReactComponent as MailIcon } from "../../../assets/images/icons/mail-icon.svg";

function PhotoContact() {
  return (
    <section className="contact contact--photo-page">
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
          <MailIcon /> Send me an email
        </a>
      </div>
    </section>
  );
}

export default PhotoContact;
