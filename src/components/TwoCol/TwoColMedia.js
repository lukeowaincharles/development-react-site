import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ButtonPrimaryExt from "../Portfolio/Utilities/ButtonExternal";

function TwoColMedia({
  eyebrow,
  title,
  classes,
  contentOne,
  mediaOne,
  altOne,
  backgroundImageOne,
  contentTwo,
  mediaTwo,
  altTwo,
  backgroundImageTwo,
  layout,
  orientation,
  buttonLink,
  buttonTitle,
  buttonClasses,
  buttonLinkTwo,
  buttonTitleTwo,
  buttonClassesTwo,
}) {
  function isString(variable) {
    return typeof variable === "string";
  }

  let width = "526",
    height = "350";

  if (orientation === "portrait") {
    width = "350";
    height = "526";
  }

  return (
    <section className={`${"two-col-media"}${classes}`}>
      <Container>
        <Row xs={1} md={2}>
          <Col md={{ span: "6", order: layout }}>
            {eyebrow && (
              <div>
                <span className="two-col-media__eyebrow">{eyebrow}</span>
              </div>
            )}
            {title && <h2>{title}</h2>}
            {contentOne && isString(contentOne) === false ? (
              contentOne.map((paragraph, i) => <p key={i}>{paragraph}</p>)
            ) : (
              <p>{contentOne}</p>
            )}
            {buttonLink && (
              <ButtonPrimaryExt
                link={`${buttonLink}`}
                title={`${buttonTitle}`}
                classes={`${buttonClasses}`}
              />
            )}
            {mediaOne && (
              <div className="two-col-media__image two-col-media__image--one">
                <img
                  src={mediaOne}
                  alt={altOne}
                  width={width}
                  height={height}
                />
              </div>
            )}
            {backgroundImageOne && (
              <div
                className="two-col-media__bg-image"
                style={{ backgroundImage: `url(${backgroundImageOne})` }}
              ></div>
            )}
          </Col>
          <Col md="6">
            {mediaTwo && (
              <div className="two-col-media__image two-col-media__image--two">
                <img
                  src={mediaTwo}
                  alt={altTwo}
                  width={width}
                  height={height}
                />
              </div>
            )}
            {backgroundImageTwo && (
              <div
                className="two-col-media__bg-image"
                style={{ backgroundImage: `url(${backgroundImageTwo})` }}
              ></div>
            )}
            {contentTwo && isString(contentTwo) === false ? (
              contentTwo.map((paragraph, i) => <p key={i}>{paragraph}</p>)
            ) : (
              <p>{contentTwo}</p>
            )}
            {buttonLinkTwo && (
              <ButtonPrimaryExt
                link={`${buttonLinkTwo}`}
                title={`${buttonTitleTwo}`}
                classes={`${buttonClassesTwo}`}
              />
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TwoColMedia;
