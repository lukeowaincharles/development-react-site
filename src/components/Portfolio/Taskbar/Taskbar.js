import React, { useState } from "react";
import LinkData from "../../../Data/Links.json";

function Taskbar() {
  const [isOpen, setOpen] = useState(false);

  const MENUITEMS = [
    { title: "Casestudies" },
    { url: "silverstone", title: "Silverstone" },
    { url: "jmfinn", title: "JMFinn" },
    { url: "hiscox", title: "Hiscox" },
    { title: "Other projects" },
    {
      url: "https://donate.teenagecancertrust.org/",
      title: "Teenage Cancer Trust",
      external: "_blank",
      rel: "noopener noreferrer",
    },
    {
      url: "https://rundigital.co.uk/",
      title: "Run Digital",
      external: "_blank",
      rel: "noopener noreferrer",
    },
  ];
  const PROJECTMENUITEMS = MENUITEMS.map((item, index) => {
    return (
      <li key={index}>
        {item.url ? (
          <a href={item.url} target={item.external} rel={item.rel}>
            {item.title}
          </a>
        ) : (
          <p>{item.title}</p>
        )}
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
        title={`${"Link to "}${item.title}`}
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
      <div className="app-folder__link menu" title="Menu for casestudies">
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
