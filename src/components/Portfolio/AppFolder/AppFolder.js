import React from "react";
import ProjectData from "../../../Data/Projects.json";
import AboutData from "../../../Data/About.json";

function AppFolder() {
  const APPCONTENT = ProjectData.map((item, index) => {
    return (
      <React.Fragment key={index}>
        {item.url ? (
          <a href={item.url} target="_self" rel="bookmark" className="app-folder__link">
            <div className="app-folder__content">
              <div className="app-folder__background">
                <div className={`${"app-folder__icon"} ${item.icon}`}></div>
              </div>
              <p>{item.url}</p>
            </div>
          </a>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  });

  const ABOUTCONTENT = AboutData.content.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <a href={item.url} target="_self" rel="bookmark" className="app-folder__link">
          <div className="app-folder__content">
            <div className="app-folder__background">
              <div className={`${"app-folder__icon"} ${item.icon}`}></div>
            </div>
            <p>{item.url}.me</p>
          </div>
        </a>
      </React.Fragment>
    );
  });
  return <div className="app-folder">
    {APPCONTENT}
    {ABOUTCONTENT}
    </div>;
}

export default AppFolder;
