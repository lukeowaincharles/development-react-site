import React from "react";
import { Container } from "react-bootstrap";
import PhotoData from "../../../Data/Photography.json";
import PhotoCaseStudyOne from "../../../Data/PhotoCaseStudyOne.json";
// import TwoColText from "../../TwoCol/TwoColText";
import TwoColMedia from "../../TwoCol/TwoColMedia";
import PhotoContact from "../Contact/PhotoContact";
import CarouselBlock from "../../CarouselBlock/CarouselBlock";
// import { motion } from "framer-motion";

function PhotoDetails() {
  const PHOTOCONTENT = PhotoData,
    PHOTOCASESTUDYONE = PhotoCaseStudyOne,
    CASESTUDYONETITLE = PHOTOCASESTUDYONE[0].caseStudyOne.title,
    CASESTUDYONEDESC = PHOTOCASESTUDYONE[0].caseStudyOne.description,
    DESC = PHOTOCONTENT[0].description,
    SLIDES = PHOTOCASESTUDYONE[0].slides;

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

      <TwoColMedia
        title=""
        classes=""
        layout="last"
        orientation="portrait"
        contentOne={DESC}
        backgroundImageTwo="../../../images/2J3A1639.jpg"
        buttonTitle="Get in touch"
        buttonLink="mailto:lukeowaincharles@gmail.com"
        buttonClasses="dark"
      />

      {/* <TwoColMedia
        title="Title here"
        classes=""
        layout="first"
        contentOne=""
        mediaTwo="../../../images/IN1A3571.jpg"
        altTwo="image alt"
      /> */}

      <CarouselBlock eyebrow="Showcase" title={CASESTUDYONETITLE} description={CASESTUDYONEDESC} classes=" dark" content={SLIDES} />

      {/* <TwoColText
        title="Some more content to break up the page?"
        classes=""
        layout="last"
        contentOne=""
        contentTwo=""
      /> */}
      <PhotoContact />
    </div>
  );
}

export default PhotoDetails;
