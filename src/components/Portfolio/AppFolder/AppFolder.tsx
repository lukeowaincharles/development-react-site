import React from "react";
import ProjectData from "../../../Data/Projects.json";
import AboutData from "../../../Data/About.json";
import { Link } from "react-router-dom";

function AppFolder() {
  const APPCONTENT = ProjectData.map((item, index) => {
    return (
      <React.Fragment key={index}>
        {item.url && (
          <Link
            to={item.url}
            target="_self"
            rel="bookmark"
            className="app-folder__link"
            title={`${"Quicklink to"} ${item.url} ${"case study"}`}
          >
            <div className="app-folder__content">
              <div className="app-folder__background">
                <div className={`${"app-folder__icon"} ${item.icon}`}></div>
              </div>
              <p>{item.url}</p>
            </div>
          </Link>
        )}
      </React.Fragment>
    );
  });

  const ABOUTCONTENT = AboutData.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <Link
          to={item.url}
          target="_self"
          rel="bookmark"
          className="app-folder__link"
          title="Find out more about me"
        >
          <div className="app-folder__content">
            <div className="app-folder__background">
              <div className={`${"app-folder__icon"} ${item.icon}`}></div>
            </div>
            <p>{item.url}.me</p>
          </div>
        </Link>
      </React.Fragment>
    );
  });
  return (
    <div className="app-folder">
      {APPCONTENT}
      {ABOUTCONTENT}
    </div>
  );
}

export default AppFolder;
