import React from "react";
import BrowserWindow from "../Browser/BrowserWindow";
import AboutData from "../../../Data/About.json";
import ButtonPrimary from "../Utilities/Button";

function AboutMe() {
  const ABOUTCONTENT = AboutData.content,
    TITLE = ABOUTCONTENT[0].title,
    NAME = ABOUTCONTENT[0].name;
  return (
    <BrowserWindow classes="aboutme">
      {TITLE ? <p>{TITLE}</p> : ""}
      {NAME ? <p>{NAME}</p> : ""}
      {ABOUTCONTENT[0].image ? <div><img src={ `${ABOUTCONTENT[0].image}`} alt="" /></div> : ""}
      <ButtonPrimary link="about" title="Find out more" classes="purple" />
    </BrowserWindow>
  );
}

export default AboutMe;
