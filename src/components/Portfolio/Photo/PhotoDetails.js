import React from "react";
import { Container } from "react-bootstrap";
import PhotoData from "../../../Data/Photography.json";
import TwoColText from "../../TwoCol/TwoColText";
import TwoColMedia from "../../TwoCol/TwoColMedia";
import Contact from "../Contact/Contact";
// import { motion } from "framer-motion";

function PhotoDetails() {
  const PHOTOCONTENT = PhotoData,
    INTRO = PHOTOCONTENT[0].intro,
    DESC = PHOTOCONTENT[0].description;

  // hero component - move to own file? Yes
  const HeroPhoto = () => {
    return (
      <section className="photo-hero">
        <Container>
          <div className="photo-hero__content">
            <h1>{PHOTOCONTENT[0].title}</h1>
          </div>
        </Container>
      </section>
    );
  };

  return (
    <div className="photo">
      <HeroPhoto />
      <TwoColText
        eyebrow="(01)"
        title="About me"
        classes=""
        layout="first"
        contentOne={INTRO}
        contentTwo={DESC}
      />

      <TwoColMedia
        title="Title here"
        classes=" dark"
        layout="last"
        contentOne={INTRO}
        mediaTwo="https://media.licdn.com/dms/image/v2/D4E22AQE9sA-31L-OWw/feedshare-shrink_800/feedshare-shrink_800/0/1729503836165?e=1732752000&v=beta&t=OV0ltTgFgsXmTbGY6mNNzO6TXhjFfLKhwlgUnzmurzo"
      />

      <TwoColMedia
        title="Title here"
        classes=""
        layout="first"
        contentOne={INTRO}
        mediaTwo="https://media.licdn.com/dms/image/v2/D4E22AQFtZThaMUShPg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1729503836876?e=1732752000&v=beta&t=sVelIHYM0DKx83W5AQsUcGF4ymREXHFqvZClMNI3CyE"
        altTwo="image alt"
      />

      <TwoColText
        title="Some more content to break up the page?"
        classes=""
        layout="last"
        contentOne={INTRO}
        contentTwo={DESC}
      />
      <Contact />
    </div>
  );
}

export default PhotoDetails;
