import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function TwoColText({
  eyebrow,
  title,
  classes,
  contentOne,
  contentTwo,
  layout,
}) {
  return (
    <section className={`${"two-col"}${classes}`}>
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
          </Col>
          <Col>
            <p>{contentTwo}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TwoColText;
