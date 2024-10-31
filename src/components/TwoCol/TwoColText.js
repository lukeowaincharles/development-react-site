import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ButtonPrimaryExt from "../Portfolio/Utilities/ButtonExternal";

function TwoColText({
  eyebrow,
  title,
  classes,
  contentOne,
  contentTwo,
  layout,
  buttonLink,
  buttonTitle,
  buttonClasses,
  buttonLinkTwo,
  buttonTitleTwo,
  buttonClassesTwo
}) {
  function isString(variable) {
    return typeof variable === "string";
  }

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
            {contentOne && isString(contentOne) === false ? (
              contentOne.map((paragraph, i) => (
                <p key={i}>{JSON.parse(JSON.stringify(paragraph))}</p>
              ))
            ) : (
              <p>{contentOne}</p>
            )}
            {buttonLink && <ButtonPrimaryExt link={`${buttonLink}`} title={`${buttonTitle}`} classes={`${buttonClasses}`} />}
          </Col>
          <Col>
            {contentTwo && isString(contentTwo) === false ? (
              contentTwo.map((paragraph, i) => <p key={i}>{JSON.parse(JSON.stringify(paragraph))}</p>)
            ) : (
              <p>{contentTwo}</p>
            )}
            {buttonLinkTwo && <ButtonPrimaryExt link={`${buttonLinkTwo}`} title={`${buttonTitleTwo}`} classes={`${buttonClassesTwo}`} />}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TwoColText;
