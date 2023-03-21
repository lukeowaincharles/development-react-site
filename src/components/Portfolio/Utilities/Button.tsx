import React from "react";

type PropTypes = {
  classes: string;
  btnLink: string;
  title: string;
};

function ButtonPrimary({ classes, btnLink, title }: PropTypes) {
  return (
    <React.Fragment>
      <a
        className={`${"btn btn-primary"} ${classes}`}
        href={btnLink}
        target="_self"
        rel="bookmark"
      >
        {title}
      </a>
    </React.Fragment>
  );
}

export default ButtonPrimary;
