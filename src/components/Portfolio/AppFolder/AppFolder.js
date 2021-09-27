import React from "react";
import ProjectData from "../../../Data/Projects.json";

function AppFolder() {
  const APPCONTENT = ProjectData.map((item, index) => {
    return (
      <React.Fragment>
        {item.url ? (
          <a href={item.url} target="_self" rel="bookmark">
            <div className="app-folder__content" key={index}>
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
  return <div className="app-folder">{APPCONTENT}</div>;
}

export default AppFolder;
