import React from "react";
import PhotoHero from "./PhotoHero";
import PhotoData from "../../../Data/Photography.json";
import PhotoCaseStudyOne from "../../../Data/PhotoCaseStudyOne.json";
import TwoColMedia from "../../TwoCol/TwoColMedia";
import PhotoContact from "../Contact/PhotoContact";
import CarouselBlock from "../../CarouselBlock/CarouselBlock";
import PhotoGallery from "./PhotoGallery";
import photoGalleryData from "../../../Data/PhotoGallery.json";
import VideoEmbed from "./VideoEmbed";

function PhotoDetails() {
  const PHOTOCONTENT = PhotoData,
    PHOTOCASESTUDYONE = PhotoCaseStudyOne,
    CASESTUDYONETITLE = PHOTOCASESTUDYONE[0].caseStudyOne.title,
    CASESTUDYONEDESC = PHOTOCASESTUDYONE[0].caseStudyOne.description,
    DESC = PHOTOCONTENT[0].description,
    SLIDES = PHOTOCASESTUDYONE[0].slides,
    PHOTOGALLERYTITLE = photoGalleryData[0].title,
    PHOTOGALLERYIMAGES = photoGalleryData[0].images;

  return (
    <div className="photo">
      <PhotoHero title={PHOTOCONTENT[0].title} />

      <TwoColMedia
        title=""
        classes=""
        layout="last"
        orientation="portrait"
        contentOne={DESC}
        backgroundImageTwo="../../../images/2J3A1639-luke-charles-photographer-frontend-developer-self-portrait.jpg"
        buttonTitle="Get in touch"
        buttonLink="mailto:lukeowaincharles@gmail.com"
        buttonClasses="dark"
      />

      <CarouselBlock
        eyebrow="Showcase"
        title={CASESTUDYONETITLE}
        description={CASESTUDYONEDESC}
        classes=" dark"
        content={SLIDES}
      />

      <VideoEmbed videoId="oGKrOIkJVVs?si=utVjBKtwBqhx-JVv" />

      <PhotoGallery title={PHOTOGALLERYTITLE} images={PHOTOGALLERYIMAGES} />

      <PhotoContact />
    </div>
  );
}

export default PhotoDetails;
