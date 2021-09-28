import React from "react";
import LinkData from "../../../Data/Links.json";

function Taskbar() {
  const LINKCONTENT = LinkData.map((item, index) => {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="app-folder__link"
      >
        <div className="app-folder__content">
          <div className="app-folder__background">
            <div className={`${"app-folder__icon"} ${item.icon}`}></div>
          </div>
        </div>
      </a>
    );
  });
  return <div className="taskbar">{LINKCONTENT}</div>;
}

export default Taskbar;
