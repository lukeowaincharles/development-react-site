import React from "react";
import BrowserWindow from "../Browser/BrowserWindow";
import ProjectData from "../../../Data/Projects.json";
import ButtonPrimary from "../Utilities/Button";

function PortfolioProjects() {
  const CONTENT = ProjectData.map((item, index) => {
    return (
      <React.Fragment key={index}>
        {item.url && item.image ? (
          <BrowserWindow key={index} classes={item.url}>
            <div>
              <img src={ `${item.image}`} alt="" />
            </div>
            <h2>{item.headline}</h2>
            <ButtonPrimary link={item.url} title="View casestudy" />
          </BrowserWindow>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  });
  return <React.Fragment>{CONTENT}</React.Fragment>;
}

export default PortfolioProjects;
