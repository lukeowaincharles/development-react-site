import React, { useState } from "react";

function BrowserWindow({ children, classes, tab }) {
  const [browserColor] = useState("dark");

  return (
    <div className={`${"browser-window"} ${classes} ${browserColor}`}>
      <div className="browser-window__bar">
        <span className="browser-window__button close"></span>
        <span className="browser-window__button minimise"></span>
        <span className="browser-window__button enlarge"></span>
        {tab ? (
          <div className="browser-window__tab">
            <p>{tab}</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="browser-window__content">{children}</div>
    </div>
  );
}

export default BrowserWindow;
