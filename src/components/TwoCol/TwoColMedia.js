import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function TwoColMedia({
  eyebrow,
  title,
  classes,
  contentOne,
  mediaOne,
  altOne,
  contentTwo,
  mediaTwo,
  altTwo,
  layout,
}) {
  return (
    <section className={`${"two-col-media"}${classes}`}>
      <Container>
        <Row xs={1} md={2}>
          <Col md={{ order: layout }}>
            {eyebrow && (
              <div>
                <span>{eyebrow}</span>
              </div>
            )}
            {title && <h2>{title}</h2>}
            <p>{contentOne}</p>
            {mediaOne && (
              <div className="two-col-media__image two-col-media__image--one">
                <img src={mediaOne} alt={altOne} />
              </div>
            )}
          </Col>
          <Col md="5">
            {contentTwo && <p>{contentTwo}</p>}
            {mediaTwo && (
              <div className="two-col-media__image two-col-media__image--two">
                <img src={mediaTwo} alt={altTwo} />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TwoColMedia;
