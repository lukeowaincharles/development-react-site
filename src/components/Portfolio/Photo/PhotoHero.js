import React from "react";
import { Container } from "react-bootstrap";

function PhotoHero({ title }) {
  return (
    <section className="photo-hero">
      <Container>
        <div className="photo-hero__content">
          <h1>{title}</h1>
        </div>
      </Container>
    </section>
  );
}

export default PhotoHero;
