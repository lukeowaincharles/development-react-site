import React, { useState } from "react";
import { motion } from "framer-motion";
import useWindowWidth from "../Utilities/WindowWidth";

function BrowserWindow({ children, classes, tab, hasDrag }) {
  const [browserColor] = useState("dark"),
    width = useWindowWidth();

  let dragAttr = "";

  if (hasDrag !== false) {
    dragAttr =
      width >= 992
        ? {
            drag: true,
            dragConstraints: { top: 0, left: 0, right: 200, bottom: 50 },
          }
        : {};
  }

  return (
    <motion.div
      {...dragAttr}
      className={`${"browser-window"} ${classes} ${browserColor}`}
    >
      <div className="browser-window__bar">
        <span className="browser-window__button close"></span>
        <span className="browser-window__button minimise"></span>
        <span className="browser-window__button enlarge"></span>
        {tab && (
          <div className="browser-window__tab">
            <p>{tab}</p>
          </div>
        )}
      </div>
      <div className="browser-window__content">{children}</div>
    </motion.div>
  );
}

export default BrowserWindow;
