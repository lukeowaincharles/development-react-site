import React, { useState } from "react";
import { Button, Carousel, Container, Modal } from "react-bootstrap";

function PhotoGallery({ title, description, images }) {
  const [modalShow, setModalShow] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleClose = () => setModalShow(false);

  const handleShow = (id) => {
    // used to pass the correct id to the modal and show it
    setActiveImageIndex(id);
    setModalShow(true);
  };

  const handleSelect = (id) => {
    // used to pass the correct id to the carousel and show the selected image
    setActiveImageIndex(id);
  };

  const MASONRYIMAGES = images.map((image, i) => {
    let width = "318",
      height = "212";

    if (image.orientation === "portrait") {
      width = "318";
      height = "477";
    }

    console.log(image.orientation);
    

    return (
      <div className="photo-gallery__grid-image" key={i}>
        <Button onClick={() => handleShow(image.id)}>
          <img
            key={image.id}
            src={image.image}
            alt={image.imageAlt}
            width={width}
            height={height}
          />
        </Button>
      </div>
    );
  });

  return (
    <section className="photo-gallery dark">
      <Container>
        <div className="photo-gallery__content">
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
        </div>
        <div className="photo-gallery__grid">{MASONRYIMAGES}</div>

        <Modal show={modalShow} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton closeVariant="white"></Modal.Header>
          <Modal.Body>
            <Carousel activeIndex={activeImageIndex} onSelect={handleSelect}>
              {images.map((image, id) => {
                return (
                  <Carousel.Item key={id}>
                    <figure>
                      <div
                        className="photo-gallery__bg-image"
                        key={id}
                        style={{ backgroundImage: `url(${image.image})` }}
                      ></div>
                    </figure>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
}

export default PhotoGallery;
