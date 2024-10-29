import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import { Container, Row, Col } from "react-bootstrap";

function CarouselBlock({
  eyebrow,
  title,
  description,
  classes,
  content,
  orientation,
}) {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    window.addEventListener("load", (event) => {
      // eslint-disable-next-line no-undef
      new Glide(".glide", {
        gap: 24,
        // eslint-disable-next-line no-undef
        startAt: 0,
        perView: 1.5,
        type: "slider",
      }).mount();
    });
  }, []);

  let width = "709",
    height = "473";

  if (orientation === "portrait") {
    width = "429";
    height = "643";
  }

  const CAROUSELCONTENT = content.map((slide, i) => {
    return (
      <li className="glide__slide" key={i}>
        <img
          src={slide.image ? slide.image : ""}
          alt={slide.imageAlt ? slide.imageAlt : ""}
          width={width}
          height={height}
        />
        <div className="glide__content">
          {slide.title && <h3>{slide.title}</h3>}
          {slide.text && <p>{slide.text}</p>}
        </div>
      </li>
    );
  });

  return (
    <section className={`${"carousel-block"}${classes}`}>
      <Container>
        <Row>
          <Col md="4">
            <div className="carousel-block__content">
              {eyebrow && (
                <p className="carousel-block__eyebrow">{eyebrow}</p>
              )}
              {title && <h2>{title}</h2>}
              {description &&
                description.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
            </div>
          </Col>
          </Row>
          </Container>
            <div className="glide-container">
              <div className="glide">
                <div className="glide__track" data-glide-el="track">
                  <ul className="glide__slides">{CAROUSELCONTENT}</ul>
                </div>
                <div className="glide__arrows" data-glide-el="controls">
                  <button
                    className="glide__arrow glide__arrow--prev"
                    data-glide-dir="<"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                      />
                    </svg>
                    <span className="visually-hidden">prev</span>
                  </button>
                  <button
                    className="glide__arrow glide__arrow--next"
                    data-glide-dir=">"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                    <span className="visually-hidden">next</span>
                  </button>
                </div>
              </div>
            </div>
        
    </section>
  );
}

export default CarouselBlock;
