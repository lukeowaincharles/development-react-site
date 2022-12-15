import React from "react";
import { motion } from "framer-motion";
import useWindowWidth from "../Utilities/WindowWidth";
import { Link } from "react-router-dom";

type BrowserTypes = {
  children: React.ReactNode;
  classes: string;
  tab: string;
  hasDrag: boolean;
  closeWindow: boolean;
  enlargeWindow: boolean;
  pageLink: any;
  mode: string;
}

type DragType = {
  dragAttr: any;
  drag: boolean;
  dragConstraints: number;
}

function BrowserWindow({
  children,
  classes,
  tab,
  hasDrag,
  closeWindow,
  enlargeWindow,
  pageLink,
  mode
}: BrowserTypes, opts: DragType) {
  const width = useWindowWidth();

 
  let dragAttr = opts.dragAttr;

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
      className={`${"browser-window"} ${classes} ${mode}`}
    >
      <div className="browser-window__bar">
        {closeWindow === true ? (
          <Link aria-label="Return to the home page" to="/" className="browser-window__link close__link">
            <span className="browser-window__button close"></span>
          </Link>
        ) : (
          <span className="browser-window__button close"></span>
        )}
        <span className="browser-window__button minimise"></span>
        {enlargeWindow === true ? (
          <Link aria-label="Navigate to the project page" to={pageLink} className="browser-window__link enlarge__link">
            <span className="browser-window__button enlarge"></span>
          </Link>
        ) : (
          <span className="browser-window__button enlarge"></span>
        )}
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
