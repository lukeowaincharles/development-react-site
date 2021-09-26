import React from "react";
import BrowserWindow from "../Browser/BrowserWindow";
import ProjectData from "../../../Data/Projects.json";

function PortfolioProjects() {
  const CONTENT = ProjectData.map((item, index) => {
    return (
      <React.Fragment>
        {item.url && item.image ? (
          <BrowserWindow key={index} classes={item.url}>
            <div>
              <img src={ `${item.image}`} alt="" />
            </div>
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
