import React, { useState } from "react";
import LinkData from "../../../Data/Links.json";

function Taskbar() {
  const [isOpen, setOpen] = useState(false);

  const MENUITEMS = [
    { url: "silverstone", title: "Silverstone" },
    { url: "jmfinn", title: "JMFinn" },
    { url: "hiscox", title: "Hiscox" },
    { url: "teenage-cancer-trust", title: "Teenage Cancer Trust" },
    { url: "run-digital", title: "Run Digital" },
  ];
  const PROJECTMENUITEMS = MENUITEMS.map((item, index) => {
    return (
      <li key={index}>
        <a href={item.url}>{item.title}</a>
      </li>
    );
  });

  const LINKCONTENT = LinkData.map((item, index) => {
    return (
      <a
        href={item.link}
        target={item.target}
        rel={item.target === "_blank" ? "noopener noreferrer" : "bookmark"}
        className={`${"app-folder__link"} ${item.icon}`}
        key={index}
        aria-label={`${"Link to"} ${item.title}`}
      >
        <div className="app-folder__content">
          <div className="app-folder__background">
            <div className={`${"app-folder__icon"} ${item.icon}`}></div>
          </div>
        </div>
      </a>
    );
  });
  return (
    <div className="taskbar">
      <div className="app-folder__link menu">
        <div
          className="app-folder__background"
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          <div className="app-folder__icon"></div>
        </div>
        {isOpen ? (
          <div className="project-menu">
            <ul>{PROJECTMENUITEMS}</ul>
          </div>
        ) : (
          ""
        )}
      </div>
      {LINKCONTENT}
    </div>
  );
}

export default Taskbar;
