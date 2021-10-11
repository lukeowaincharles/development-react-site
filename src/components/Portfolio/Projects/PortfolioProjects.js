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
            enlargeWindow={true}
            pageLink={item.url}
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
            {index === 0 ? (
              <h1 className="projects__title">{item.headline}</h1>
            ) : (
              <h2 className="projects__title">{item.headline}</h2>
            )}
            <ButtonPrimary link={item.url} title="View case study" />
          </BrowserWindow>
        )}
      </React.Fragment>
    );
  });
  return <React.Fragment>{CONTENT}</React.Fragment>;
}

export default PortfolioProjects;
