import React from "react";
import BrowserWindow from "../Browser/BrowserWindow";
import AboutData from "../../../Data/About.json";
import ButtonPrimary from "../Utilities/Button";

type ModeType = {
  mode: string;
}

function AboutMe({ mode }: ModeType) {
  const ABOUTCONTENT = AboutData,
    TITLE = ABOUTCONTENT[0].title;
  return (
    <BrowserWindow
      classes="aboutme"
      tab="About Luke"
      enlargeWindow={true}
      pageLink={"/about"}
      mode={mode}
      hasDrag
      closeWindow
    >
      {TITLE ? <h2 className="aboutme__title">{TITLE}</h2> : ""}
      {ABOUTCONTENT[0].image ? (
        <div>
          <img src={`${ABOUTCONTENT[0].image}`} alt="" />
        </div>
      ) : (
        ""
      )}
      <ButtonPrimary btnLink="about" title="Find out more" classes="purple" />
    </BrowserWindow>
  );
}

export default AboutMe;
