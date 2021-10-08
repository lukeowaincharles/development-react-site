import React from "react";
import BrowserWindow from "../Browser/BrowserWindow";
import ProjectData from "../../../Data/Projects.json";
import ButtonPrimary from "../Utilities/Button";

function PortfolioProjects() {
  const CONTENT = ProjectData.map((item, index) => {
    return (
      <React.Fragment key={index}>
        {item.url && item.image && (
          <BrowserWindow
            key={index}
            classes={item.url}
            tab={`${item.tab}`}
          >
            <div className="projects__logo">
              <img
                width="100%"
                height="100%"
                src={item.logo}
                alt={`${item.url} ${"logo"}`}
              />
            </div>
            <h2>{item.headline}</h2>
            <ButtonPrimary link={item.url} title="View case study" />
          </BrowserWindow>
        )}
      </React.Fragment>
    );
  });
  return <React.Fragment>{CONTENT}</React.Fragment>;
}

export default PortfolioProjects;
